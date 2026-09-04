import { NextResponse, type NextRequest } from "next/server";
import { parseTruncgil } from "@/lib/truncgil";
import {
  getLatestStoredSourceUpdatedAt,
  insertSnapshot,
  hasDatabase,
} from "@/lib/priceHistory";

// Zamanlanmış görev: Truncgil'i kontrol eder, kaynağın Update_Date'i son
// kaydettiğimizden farklıysa 21 kalemin fiyatını `price_snapshots`
// tablosuna yazar. Aynıysa yeni kayıt oluşturmaz.
//
// Hobby planında Vercel Cron 5 dakikada bir çalışamadığı için bu endpoint
// harici bir tetikleyiciyle (GitHub Actions / cron-job.org) çağrılır —
// bkz. .github/workflows/price-snapshot.yml. CRON_SECRET ile korunur.
//
// Manuel tetikleme (ilk veriyi hemen almak için):
//   curl -H "Authorization: Bearer <CRON_SECRET>" https://<site>/api/cron/snapshot

export const dynamic = "force-dynamic";
export const revalidate = 0;

function authorized(req: NextRequest): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return false;
  const header = req.headers.get("authorization");
  if (header === `Bearer ${secret}`) return true;
  // Basit cron servisleri için query fallback (?key=...).
  if (req.nextUrl.searchParams.get("key") === secret) return true;
  return false;
}

async function run(req: NextRequest) {
  if (!process.env.CRON_SECRET) {
    return NextResponse.json(
      { ok: false, error: "CRON_SECRET tanımlı değil" },
      { status: 500 },
    );
  }
  if (!authorized(req)) {
    return NextResponse.json({ ok: false, error: "Yetkisiz" }, { status: 401 });
  }
  if (!hasDatabase) {
    return NextResponse.json(
      { ok: false, error: "DATABASE_URL tanımlı değil" },
      { status: 500 },
    );
  }

  let data: Record<string, unknown>;
  try {
    const res = await fetch("https://finans.truncgil.com/today.json", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    data = (await res.json()) as Record<string, unknown>;
  } catch (err) {
    console.error("[cron/snapshot] Truncgil çekilemedi:", err);
    return NextResponse.json(
      { ok: false, error: "Truncgil kaynağına ulaşılamadı" },
      { status: 502 },
    );
  }

  let parsed;
  try {
    parsed = parseTruncgil(data);
  } catch (err) {
    console.error("[cron/snapshot] Truncgil yanıtı çözümlenemedi:", err);
    return NextResponse.json(
      { ok: false, error: "Kaynak yanıtı çözümlenemedi" },
      { status: 502 },
    );
  }

  const lastStored = await getLatestStoredSourceUpdatedAt();
  if (lastStored && new Date(lastStored).getTime() === new Date(parsed.sourceUpdatedAt).getTime()) {
    return NextResponse.json({
      ok: true,
      skipped: true,
      reason: "Update_Date değişmedi",
      sourceUpdatedAt: parsed.sourceUpdatedAt,
    });
  }

  const inserted = await insertSnapshot(parsed.items, parsed.sourceUpdatedAt);
  return NextResponse.json({
    ok: true,
    inserted,
    sourceUpdatedAt: parsed.sourceUpdatedAt,
    previous: lastStored,
  });
}

export async function GET(req: NextRequest) {
  return run(req);
}

// cron-job.org gibi bazı servisler POST gönderir.
export async function POST(req: NextRequest) {
  return run(req);
}
