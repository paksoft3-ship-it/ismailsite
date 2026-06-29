import Link from "next/link";
import { redirect } from "next/navigation";
import { and, desc, gte, inArray } from "drizzle-orm";
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

const PERIODS: Record<string, number> = { "7d": 7, "30d": 30, "90d": 90 };

const dateFmt = new Intl.DateTimeFormat("tr-TR", {
  dateStyle: "medium",
  timeStyle: "medium",
  timeZone: "Europe/Istanbul",
});

export default async function AdminClicksPage({
  searchParams,
}: {
  searchParams: Promise<{ period?: string }>;
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
  const period = sp.period && PERIODS[sp.period] ? sp.period : "30d";
  const days = PERIODS[period];
  const since = new Date(Date.now() - days * 86400000);

  const rows = await requireDb()
    .select()
    .from(clickEvents)
    .where(
      and(inArray(clickEvents.name, [...EVENT_NAMES]), gte(clickEvents.occurredAt, since))
    )
    .orderBy(desc(clickEvents.occurredAt))
    .limit(200);

  const counts: Record<string, number> = {};
  for (const name of EVENT_NAMES) counts[name] = 0;
  for (const r of rows) {
    if (counts[r.name] !== undefined) counts[r.name] += 1;
  }

  return (
    <main className="min-h-screen bg-background-light px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-secondary">Tıklama Raporu</h1>
          <div className="flex gap-2">
            {Object.keys(PERIODS).map((p) => (
              <Link
                key={p}
                href={`/admin/clicks?period=${p}`}
                className={
                  "px-4 py-2 rounded-lg text-sm font-semibold transition-colors " +
                  (p === period
                    ? "bg-primary text-white"
                    : "bg-white border border-gray-300 text-secondary hover:border-primary")
                }
              >
                {p === "7d" ? "7 Gün" : p === "30d" ? "30 Gün" : "90 Gün"}
              </Link>
            ))}
          </div>
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {EVENT_NAMES.map((name) => (
            <div key={name} className="card text-center">
              <p className="text-sm text-gray-500 mb-1">{LABELS[name]}</p>
              <p className="text-3xl font-bold text-primary">{counts[name]}</p>
            </div>
          ))}
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
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.id} className="border-b border-gray-100">
                    <td className="py-2 pr-4 whitespace-nowrap text-secondary">
                      {dateFmt.format(new Date(r.occurredAt))}
                    </td>
                    <td className="py-2 pr-4">{LABELS[r.name] ?? r.name}</td>
                    <td className="py-2 pr-4 text-gray-600">{r.location ?? "-"}</td>
                    <td className="py-2 pr-4 text-gray-600">{r.pageUrl ?? "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </main>
  );
}
