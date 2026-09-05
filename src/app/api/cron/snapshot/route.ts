import { NextResponse, type NextRequest } from "next/server";
import { captureSnapshot } from "@/lib/snapshotCapture";

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

  // Asıl iş lib/snapshotCapture.ts'te — aynı mantığı /api/prices de
  // (trafikle, arka planda) çağırıyor, bu yüzden tek yerde duruyor.
  const result = await captureSnapshot();
  if (!result.ok) {
    return NextResponse.json(
      { ok: false, error: result.error },
      { status: result.status },
    );
  }
  return NextResponse.json(result);
}

export async function GET(req: NextRequest) {
  return run(req);
}

// cron-job.org gibi bazı servisler POST gönderir.
export async function POST(req: NextRequest) {
  return run(req);
}
