import Link from "next/link";
import { redirect } from "next/navigation";
import { and, desc, gte, lt, inArray, isNotNull, sql } from "drizzle-orm";
import { isAdminAuthed } from "@/lib/admin-auth";
import { isDbConfigured, requireDb } from "@/db";
import { clickEvents } from "@/db/schema";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EVENT_NAMES = ["phone_click", "whatsapp_click", "quote_click", "chat_open"] as const;

const LABELS: Record<string, string> = {
  phone_click: "Telefon",
  whatsapp_click: "WhatsApp",
  quote_click: "Teklif",
  chat_open: "Sohbet",
};

const dateFmt = new Intl.DateTimeFormat("tr-TR", {
  dateStyle: "medium",
  timeStyle: "medium",
  timeZone: "Europe/Istanbul",
});

/** Distinct colors so the same IP is instantly recognizable across rows. */
const IP_COLORS = [
  "#0ea5e9", "#f59e0b", "#10b981", "#ef4444", "#8b5cf6",
  "#ec4899", "#14b8a6", "#f97316", "#6366f1", "#84cc16",
];

type SP = { period?: string; from?: string; to?: string };

/** Türkiye (UTC+3, no DST) is fixed — build day boundaries with a +03:00 offset. */
function resolveRange(sp: SP) {
  const now = new Date();
  const istToday = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Istanbul" }).format(now); // YYYY-MM-DD
  const todayStart = new Date(`${istToday}T00:00:00+03:00`);
  const period = sp.period ?? "30d";

  if (period === "today") return { period, from: todayStart, to: now, label: "Bugün", fromStr: istToday, toStr: istToday };
  if (period === "yesterday") {
    const y = new Date(todayStart.getTime() - 86400000);
    const yStr = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Istanbul" }).format(y);
    return { period, from: y, to: todayStart, label: "Dün", fromStr: yStr, toStr: yStr };
  }
  if (period === "custom" && sp.from && sp.to) {
    const from = new Date(`${sp.from}T00:00:00+03:00`);
    const to = new Date(new Date(`${sp.to}T00:00:00+03:00`).getTime() + 86400000); // include the whole "to" day
    if (!Number.isNaN(from.getTime()) && !Number.isNaN(to.getTime()) && from < to) {
      return { period, from, to, label: `${sp.from} – ${sp.to}`, fromStr: sp.from, toStr: sp.to };
    }
  }
  const days = period === "7d" ? 7 : period === "90d" ? 90 : 30;
  return {
    period: period === "7d" || period === "90d" ? period : "30d",
    from: new Date(now.getTime() - days * 86400000),
    to: now,
    label: `Son ${days} gün`,
    fromStr: istToday,
    toStr: istToday,
  };
}

const PRESETS: { key: string; label: string }[] = [
  { key: "today", label: "Bugün" },
  { key: "yesterday", label: "Dün" },
  { key: "7d", label: "7 Gün" },
  { key: "30d", label: "30 Gün" },
  { key: "90d", label: "90 Gün" },
];

export default async function AdminClicksPage({
  searchParams,
}: {
  searchParams: Promise<SP>;
}) {
  if (!(await isAdminAuthed())) redirect("/admin/login");

  if (!isDbConfigured) {
    return (
      <main className="min-h-screen bg-background-light px-4 py-12">
        <div className="max-w-2xl mx-auto card">
          <h1 className="text-2xl font-bold text-secondary mb-2">Tıklama Raporu</h1>
          <p className="text-gray-600">
            Veritabanı yapılandırılmamış. Raporu görüntülemek için{" "}
            <code className="font-mono">DATABASE_URL</code> ortam değişkenini ayarlayın.
          </p>
        </div>
      </main>
    );
  }

  const sp = await searchParams;
  const range = resolveRange(sp);
  const db = requireDb();
  const baseWhere = and(
    inArray(clickEvents.name, [...EVENT_NAMES]),
    gte(clickEvents.occurredAt, range.from),
    lt(clickEvents.occurredAt, range.to),
  );

  const [byName, agg, ipGroups, rows] = await Promise.all([
    db
      .select({ name: clickEvents.name, c: sql<number>`count(*)::int` })
      .from(clickEvents)
      .where(baseWhere)
      .groupBy(clickEvents.name),
    db
      .select({
        total: sql<number>`count(*)::int`,
        uniqueIps: sql<number>`count(distinct ${clickEvents.ipHash})::int`,
        withIp: sql<number>`count(${clickEvents.ipHash})::int`,
      })
      .from(clickEvents)
      .where(baseWhere),
    db
      .select({ ip: clickEvents.ipHash, c: sql<number>`count(*)::int` })
      .from(clickEvents)
      .where(and(baseWhere, isNotNull(clickEvents.ipHash)))
      .groupBy(clickEvents.ipHash)
      .orderBy(desc(sql`count(*)`)),
    db.select().from(clickEvents).where(baseWhere).orderBy(desc(clickEvents.occurredAt)).limit(200),
  ]);

  const counts: Record<string, number> = {};
  for (const name of EVENT_NAMES) counts[name] = 0;
  for (const r of byName) counts[r.name] = Number(r.c);

  const total = Number(agg[0]?.total ?? 0);
  const uniqueIps = Number(agg[0]?.uniqueIps ?? 0);
  const repeatIps = ipGroups.filter((g) => Number(g.c) > 1).length;

  // Map each distinct IP hash to a stable label/color/count (busiest = #1).
  const ipInfo = new Map<string, { label: string; color: string; count: number }>();
  ipGroups.forEach((g, i) => {
    if (!g.ip) return;
    ipInfo.set(g.ip, { label: `IP #${i + 1}`, color: IP_COLORS[i % IP_COLORS.length], count: Number(g.c) });
  });

  const presetHref = (key: string) =>
    key === "custom"
      ? `/admin/clicks?period=custom&from=${range.fromStr}&to=${range.toStr}`
      : `/admin/clicks?period=${key}`;

  return (
    <main className="min-h-screen bg-background-light px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
          <h1 className="text-2xl md:text-3xl font-bold text-secondary">Tıklama Raporu</h1>
          <div className="flex flex-wrap gap-2">
            {PRESETS.map((p) => (
              <Link
                key={p.key}
                href={presetHref(p.key)}
                className={
                  "px-4 py-2 rounded-lg text-sm font-semibold transition-colors " +
                  (p.key === range.period
                    ? "bg-primary text-white"
                    : "bg-white border border-gray-300 text-secondary hover:border-primary")
                }
              >
                {p.label}
              </Link>
            ))}
          </div>
        </div>
        <p className="text-sm text-gray-500 mb-6">Seçili dönem: {range.label} · Türkiye saati</p>

        {/* Custom date range */}
        <form method="get" className="card mb-6 flex flex-wrap items-end gap-3">
          <input type="hidden" name="period" value="custom" />
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">Başlangıç</label>
            <input
              type="date"
              name="from"
              defaultValue={range.fromStr}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">Bitiş</label>
            <input
              type="date"
              name="to"
              defaultValue={range.toStr}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
            />
          </div>
          <button
            type="submit"
            className="px-5 py-2 rounded-lg text-sm font-semibold bg-secondary text-white hover:opacity-90"
          >
            Tarih aralığını uygula
          </button>
        </form>

        {/* KPI cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {EVENT_NAMES.map((name) => (
            <div key={name} className="card text-center">
              <p className="text-sm text-gray-500 mb-1">{LABELS[name]}</p>
              <p className="text-3xl font-bold text-primary">{counts[name]}</p>
            </div>
          ))}
        </div>

        {/* IP signal */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <div className="card text-center">
            <p className="text-sm text-gray-500 mb-1">Toplam tıklama</p>
            <p className="text-3xl font-bold text-secondary">{total}</p>
          </div>
          <div className="card text-center">
            <p className="text-sm text-gray-500 mb-1">Farklı IP</p>
            <p className="text-3xl font-bold text-secondary">{uniqueIps}</p>
          </div>
          <div className="card text-center">
            <p className="text-sm text-gray-500 mb-1">Tekrar eden IP</p>
            <p className="text-3xl font-bold text-secondary">{repeatIps}</p>
          </div>
        </div>

        <p className="text-xs text-gray-500 mb-4">
          Her farklı IP&apos;ye bir renk/numara verilir. Aynı renk = büyük olasılıkla aynı kişi/cihaz;
          farklı renkler = farklı ziyaretçiler. IP&apos;ler gizlilik için geri döndürülemez şekilde
          özetlenir (ham IP saklanmaz).
        </p>

        {/* Recent clicks table */}
        <div className="card overflow-x-auto">
          <h2 className="text-lg font-bold text-secondary mb-4">Son Tıklamalar</h2>
          {rows.length === 0 ? (
            <p className="text-gray-500">Bu dönemde tıklama kaydı bulunamadı.</p>
          ) : (
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500">
                  <th className="py-2 pr-4 font-semibold">Zaman</th>
                  <th className="py-2 pr-4 font-semibold">Buton</th>
                  <th className="py-2 pr-4 font-semibold">Yer</th>
                  <th className="py-2 pr-4 font-semibold">Sayfa</th>
                  <th className="py-2 pr-4 font-semibold">IP</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => {
                  const info = r.ipHash ? ipInfo.get(r.ipHash) : undefined;
                  return (
                    <tr key={r.id} className="border-b border-gray-100">
                      <td className="py-2 pr-4 whitespace-nowrap text-secondary">
                        {dateFmt.format(new Date(r.occurredAt))}
                      </td>
                      <td className="py-2 pr-4">{LABELS[r.name] ?? r.name}</td>
                      <td className="py-2 pr-4 text-gray-600">{r.location ?? "-"}</td>
                      <td className="py-2 pr-4 text-gray-600">{r.pageUrl ?? "-"}</td>
                      <td className="py-2 pr-4 whitespace-nowrap">
                        {info ? (
                          <span
                            title={`${info.count} tıklama bu IP'den`}
                            className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold text-white"
                            style={{ backgroundColor: info.color }}
                          >
                            {info.label}
                            {info.count > 1 && <span className="opacity-80">×{info.count}</span>}
                          </span>
                        ) : (
                          <span className="text-gray-400 text-xs">IP yok</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </main>
  );
}
