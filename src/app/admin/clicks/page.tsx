import Link from "next/link";
import { redirect } from "next/navigation";
import { and, desc, eq, gte, lt, inArray, isNotNull, sql } from "drizzle-orm";
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

/**
 * 6 colors validated to be pairwise distinguishable (incl. for color-blind
 * viewers) — assigned to the 6 busiest IPs, never cycled. More colors would
 * inevitably produce look-alike tones, so every IP beyond the top 6 gets a
 * neutral gray badge; the "IP #n" number is always the definitive identifier.
 */
const IP_COLORS = ["#2a78d6", "#e34948", "#008300", "#eda100", "#4a3aa7", "#1baf7a"];
const IP_GRAY = "#9ca3af";

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

  const visitWhere = and(
    eq(clickEvents.name, "page_view"),
    gte(clickEvents.occurredAt, range.from),
    lt(clickEvents.occurredAt, range.to),
  );

  const [byName, agg, ipGroups, rows, visitAgg, personRows] = await Promise.all([
    db
      .select({
        name: clickEvents.name,
        c: sql<number>`count(*)::int`,
        ips: sql<number>`count(distinct ${clickEvents.ipHash})::int`,
        sessions: sql<number>`count(distinct ${clickEvents.sessionId})::int`,
      })
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
      .select({
        ip: clickEvents.ipHash,
        c: sql<number>`count(*)::int`,
        phone: sql<number>`count(*) filter (where ${clickEvents.name} = 'phone_click')::int`,
        wa: sql<number>`count(*) filter (where ${clickEvents.name} = 'whatsapp_click')::int`,
      })
      .from(clickEvents)
      .where(and(baseWhere, isNotNull(clickEvents.ipHash)))
      .groupBy(clickEvents.ipHash)
      .orderBy(desc(sql`count(*)`)),
    db.select().from(clickEvents).where(baseWhere).orderBy(desc(clickEvents.occurredAt)).limit(200),
    db
      .select({
        visits: sql<number>`count(*)::int`,
        visitors: sql<number>`count(distinct ${clickEvents.sessionId})::int`,
        ips: sql<number>`count(distinct ${clickEvents.ipHash})::int`,
      })
      .from(clickEvents)
      .where(visitWhere),
    // One row per person (IP) per button — first/last click time for matching
    // against the real phone call log / WhatsApp chats
    db
      .select({
        ip: clickEvents.ipHash,
        name: clickEvents.name,
        c: sql<number>`count(*)::int`,
        first: sql<string>`min(${clickEvents.occurredAt})`,
        last: sql<string>`max(${clickEvents.occurredAt})`,
        firstLoc: sql<string | null>`(array_agg(${clickEvents.location} order by ${clickEvents.occurredAt}))[1]`,
        firstPage: sql<string | null>`(array_agg(${clickEvents.pageUrl} order by ${clickEvents.occurredAt}))[1]`,
      })
      .from(clickEvents)
      .where(and(baseWhere, isNotNull(clickEvents.ipHash)))
      .groupBy(clickEvents.ipHash, clickEvents.name)
      .orderBy(desc(sql`min(${clickEvents.occurredAt})`))
      .limit(100),
  ]);

  const visits = Number(visitAgg[0]?.visits ?? 0);
  const visitVisitors = Number(visitAgg[0]?.visitors ?? 0);
  const visitIps = Number(visitAgg[0]?.ips ?? 0);

  const counts: Record<string, { total: number; ips: number; sessions: number }> = {};
  for (const name of EVENT_NAMES) counts[name] = { total: 0, ips: 0, sessions: 0 };
  for (const r of byName)
    counts[r.name] = { total: Number(r.c), ips: Number(r.ips), sessions: Number(r.sessions) };

  const total = Number(agg[0]?.total ?? 0);
  const uniqueIps = Number(agg[0]?.uniqueIps ?? 0);
  const repeatIps = ipGroups.filter((g) => Number(g.c) > 1).length;

  // Channel overlap: a person who clicked BOTH buttons counts once overall
  const bothChannels = ipGroups.filter((g) => Number(g.phone) > 0 && Number(g.wa) > 0).length;
  const onlyPhone = ipGroups.filter((g) => Number(g.phone) > 0 && Number(g.wa) === 0).length;
  const onlyWa = ipGroups.filter((g) => Number(g.phone) === 0 && Number(g.wa) > 0).length;
  const contactPeople = onlyPhone + onlyWa + bothChannels;

  // Map each distinct IP hash to a stable label/color/count (busiest = #1).
  // Only the 6 busiest get a color — no cycling, so no two IPs ever share one.
  const ipInfo = new Map<string, { label: string; color: string | null; count: number }>();
  ipGroups.forEach((g, i) => {
    if (!g.ip) return;
    ipInfo.set(g.ip, { label: `IP #${i + 1}`, color: i < IP_COLORS.length ? IP_COLORS[i] : null, count: Number(g.c) });
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

        {/* Visit summary (everyone — including people who don't call/form) */}
        <h2 className="text-lg font-bold text-secondary mb-3">Ziyaret Özeti</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
          <div className="card text-center">
            <p className="text-sm text-gray-500 mb-1">Toplam ziyaret</p>
            <p className="text-3xl font-bold text-secondary">{visits}</p>
            <p className="text-xs text-gray-400 mt-1">sayfa görüntüleme</p>
          </div>
          <div className="card text-center">
            <p className="text-sm text-gray-500 mb-1">Benzersiz ziyaretçi</p>
            <p className="text-3xl font-bold text-secondary">{visitVisitors}</p>
            <p className="text-xs text-gray-400 mt-1">farklı oturum</p>
          </div>
          <div className="card text-center">
            <p className="text-sm text-gray-500 mb-1">Benzersiz IP</p>
            <p className="text-3xl font-bold text-secondary">{visitIps}</p>
            <p className="text-xs text-gray-400 mt-1">farklı IP adresi</p>
          </div>
        </div>
        <p className="text-xs text-gray-500 mb-8">
          Siteyi ziyaret eden herkes sayılır (arama/form yapmasa bile).{" "}
          {visits > 0
            ? `Bu dönemde ${visits} ziyaretin ${total} tanesi bir butona tıklamayla sonuçlandı (≈%${Math.round(
                (total / visits) * 100,
              )} dönüşüm).`
            : "Ziyaret verisi bu özellik yayına alındıktan sonraki ziyaretler için birikir."}
        </p>

        {/* KPI cards */}
        <h2 className="text-lg font-bold text-secondary mb-3">Buton Tıklamaları</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
          {EVENT_NAMES.map((name) => (
            <div key={name} className="card text-center">
              <p className="text-sm text-gray-500 mb-1">{LABELS[name]}</p>
              <p className="text-3xl font-bold text-primary">{counts[name].total}</p>
              {(name === "phone_click" || name === "whatsapp_click") && (
                <div className="mt-3 flex justify-center gap-4 border-t border-gray-100 pt-3">
                  <div>
                    <p className="text-lg font-bold text-secondary">{counts[name].ips}</p>
                    <p className="text-xs text-gray-500">farklı kişi (IP)</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-secondary">{counts[name].sessions}</p>
                    <p className="text-xs text-gray-500">farklı oturum</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mb-6">
          <strong>Tıklama</strong> her butona basışı sayar (aynı kişi 5 kez tıklarsa 5).{" "}
          <strong>Farklı kişi (IP)</strong> aynı dönemde kaç ayrı IP&apos;den tıklama geldiğini
          gösterir — gerçek kişi sayısına en yakın ölçüdür. <strong>Farklı oturum</strong> ayrı
          tarayıcı/cihaz sayısıdır; aynı Wi-Fi&apos;ı paylaşan iki kişi tek IP ama iki oturum görünür.
        </p>

        {/* IP signal */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="card text-center">
            <p className="text-sm text-gray-500 mb-1">Toplam tıklama</p>
            <p className="text-3xl font-bold text-secondary">{total}</p>
          </div>
          <div className="card text-center border-2 border-primary bg-primary/5">
            <p className="text-sm font-semibold text-primary mb-1">Toplam benzersiz kişi</p>
            <p className="text-3xl font-bold text-primary">{contactPeople}</p>
            <p className="text-xs text-gray-500 mt-1">
              Telefon + WhatsApp; iki butonu da kullanan tek sayılır
            </p>
          </div>
          <div className="card text-center">
            <p className="text-sm text-gray-500 mb-1">Farklı IP</p>
            <p className="text-3xl font-bold text-secondary">{uniqueIps}</p>
            <p className="text-xs text-gray-400 mt-1">tüm butonlar</p>
          </div>
          <div className="card text-center">
            <p className="text-sm text-gray-500 mb-1">Tekrar eden IP</p>
            <p className="text-3xl font-bold text-secondary">{repeatIps}</p>
          </div>
        </div>

        {/* Channel preference of unique contacts */}
        <h2 className="text-lg font-bold text-secondary mb-3">Kanal Tercihi (kişi bazında)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
          <div className="card text-center">
            <p className="text-sm text-gray-500 mb-1">Sadece Telefon</p>
            <p className="text-3xl font-bold text-secondary">{onlyPhone}</p>
            <p className="text-xs text-gray-400 mt-1">kişi yalnızca aradı</p>
          </div>
          <div className="card text-center">
            <p className="text-sm text-gray-500 mb-1">Sadece WhatsApp</p>
            <p className="text-3xl font-bold text-secondary">{onlyWa}</p>
            <p className="text-xs text-gray-400 mt-1">kişi yalnızca WhatsApp kullandı</p>
          </div>
          <div className="card text-center">
            <p className="text-sm text-gray-500 mb-1">Her İkisi</p>
            <p className="text-3xl font-bold text-secondary">{bothChannels}</p>
            <p className="text-xs text-gray-400 mt-1">kişi hem aradı hem yazdı</p>
          </div>
        </div>
        <p className="text-xs text-gray-500 mb-6">
          Kişi bazında (IP) sayılır: aynı kişi hem Telefon hem WhatsApp&apos;a tıklarsa
          &quot;Toplam benzersiz kişi&quot; içinde bir kez, burada &quot;Her İkisi&quot; altında görünür.
          Sadece Telefon + Sadece WhatsApp + Her İkisi = Toplam benzersiz kişi. Not: IP bazlı sayım bir
          yaklaşıktır — aynı Wi-Fi&apos;ı paylaşan kişiler tek IP&apos;de birleşir, mobil operatör
          IP&apos;leri ise zamanla değişebilir.
        </p>

        <p className="text-xs text-gray-500 mb-4">
          Her farklı IP&apos;ye kalıcı bir numara verilir (IP #1 = en çok tıklayan). Kesin ayırt edici
          olan numaradır; en yoğun 6 IP ayrıca birbirinden net ayrılan birer renk taşır, diğerleri
          gri görünür. Aynı numara = aynı kişi/cihaz. IP&apos;ler gizlilik için geri döndürülemez
          şekilde özetlenir (ham IP saklanmaz).
        </p>

        {/* Per-person clicks — for matching against the real phone call log */}
        <div className="card border-2 border-primary p-0 overflow-hidden mb-6">
          <div className="border-b border-gray-200 bg-primary/5 px-5 py-4">
            <h2 className="text-lg font-bold text-secondary">Kişi Bazında Tıklamalar</h2>
            <p className="mt-1 text-xs text-gray-600">
              Her kişi (IP) ve buton için tek satır. Telefondaki gerçek arama kayıtları ve WhatsApp
              sohbetleriyle karşılaştırmak için &quot;İlk Tıklama&quot; saatini kullanın — kişinin
              size ilk ulaşmaya çalıştığı andır; kaçan müşterileri böyle yakalarsınız.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500">
                  <th className="py-2 px-4 font-semibold">Kişi</th>
                  <th className="py-2 pr-4 font-semibold">Buton</th>
                  <th className="py-2 pr-4 font-semibold">İlk Tıklama</th>
                  <th className="py-2 pr-4 font-semibold">Son Tıklama</th>
                  <th className="py-2 pr-4 font-semibold">Adet</th>
                  <th className="py-2 pr-4 font-semibold">Yer</th>
                  <th className="py-2 pr-4 font-semibold">Sayfa</th>
                </tr>
              </thead>
              <tbody>
                {personRows.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-8 px-4 text-center text-gray-400">
                      Bu dönemde tıklama kaydı bulunamadı.
                    </td>
                  </tr>
                ) : (
                  personRows.map((g) => {
                    const info = g.ip ? ipInfo.get(g.ip) : undefined;
                    const repeated = Number(g.c) > 1;
                    return (
                      <tr key={`${g.ip}-${g.name}`} className="border-b border-gray-100">
                        <td className="py-2 px-4 whitespace-nowrap">
                          {info ? (
                            <span
                              className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold text-white"
                              style={{ backgroundColor: info.color ?? IP_GRAY }}
                            >
                              {info.label}
                            </span>
                          ) : (
                            <span className="text-gray-400 text-xs">IP yok</span>
                          )}
                        </td>
                        <td className="py-2 pr-4">{LABELS[g.name] ?? g.name}</td>
                        <td className="py-2 pr-4 whitespace-nowrap font-semibold text-secondary">
                          {dateFmt.format(new Date(g.first))}
                        </td>
                        <td className="py-2 pr-4 whitespace-nowrap text-gray-600">
                          {repeated ? dateFmt.format(new Date(g.last)) : "—"}
                        </td>
                        <td className="py-2 pr-4">{g.c}</td>
                        <td className="py-2 pr-4 text-gray-600">{g.firstLoc ?? "—"}</td>
                        <td className="py-2 pr-4 text-gray-600">{g.firstPage ?? "—"}</td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

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
                            style={{ backgroundColor: info.color ?? IP_GRAY }}
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
