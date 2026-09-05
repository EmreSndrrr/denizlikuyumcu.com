import "server-only";

import { parseTruncgil } from "@/lib/truncgil";
import {
  getLatestStoredSourceUpdatedAt,
  insertSnapshot,
  hasDatabase,
} from "@/lib/priceHistory";

// Fiyat anlık görüntüsü alma mantığının TEK kaynağı.
//
// Neden ayrı bir modül: bu iş iki farklı yerden tetikleniyor —
//   1) /api/cron/snapshot  → zamanlanmış tetikleyiciler (GitHub Actions,
//      Vercel Cron). Asıl yol.
//   2) /api/prices         → ziyaretçi trafiği, after() ile yanıt
//      gönderildikten SONRA, arka planda.
//
// (2) neden gerekli: GitHub'ın zamanlanmış workflow'ları garanti değil —
// "the schedule event can be delayed during periods of high loads... the run
// may be dropped entirely". Canlıda ölçüldü: workflow main'de, state
// "active", elle tetikleme sorunsuz çalışıyor, ama 3 saat boyunca TEK BİR
// zamanlanmış çalışma tetiklenmedi. Vercel Hobby planı da cron'u günde bir
// kezle sınırlıyor. Bu ikisi tek başına bırakılırsa grafik günlerce boş
// kalıyor. Trafik tetiklemesi bu boşluğu kapatıyor: site ziyaret edildiği
// sürece geçmiş birikiyor, ek altyapı veya ücret gerektirmiyor.
//
// Uydurma veri ÜRETMEZ: yalnızca kaynağın (Truncgil) o an bildirdiği
// gerçek fiyatları, kaynağın kendi Update_Date'i değiştiyse kaydeder.

export type CaptureResult =
  | { ok: true; skipped: true; reason: string; sourceUpdatedAt?: string }
  | { ok: true; skipped: false; inserted: number; sourceUpdatedAt: string; previous: string | null }
  | { ok: false; error: string; status: number };

export async function captureSnapshot(): Promise<CaptureResult> {
  if (!hasDatabase) {
    return { ok: false, error: "DATABASE_URL tanımlı değil", status: 500 };
  }

  let data: Record<string, unknown>;
  try {
    const res = await fetch("https://finans.truncgil.com/today.json", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    data = (await res.json()) as Record<string, unknown>;
  } catch (err) {
    console.error("[snapshot] Truncgil çekilemedi:", err);
    return { ok: false, error: "Truncgil kaynağına ulaşılamadı", status: 502 };
  }

  let parsed;
  try {
    parsed = parseTruncgil(data);
  } catch (err) {
    console.error("[snapshot] Truncgil yanıtı çözümlenemedi:", err);
    return { ok: false, error: "Kaynak yanıtı çözümlenemedi", status: 502 };
  }

  const lastStored = await getLatestStoredSourceUpdatedAt();
  if (
    lastStored &&
    new Date(lastStored).getTime() === new Date(parsed.sourceUpdatedAt).getTime()
  ) {
    return {
      ok: true,
      skipped: true,
      reason: "Update_Date değişmedi",
      sourceUpdatedAt: parsed.sourceUpdatedAt,
    };
  }

  const inserted = await insertSnapshot(parsed.items, parsed.sourceUpdatedAt);
  return {
    ok: true,
    skipped: false,
    inserted,
    sourceUpdatedAt: parsed.sourceUpdatedAt,
    previous: lastStored,
  };
}

// Elimizdeki en yeni kayıt bu kadar eskiyse Truncgil'e bakmaya değer.
// Kaynak ~15 dakikada bir güncelliyor; 12 dakika, yeni veriyi kaçırmadan
// gereksiz isteği de en aza indiriyor.
const CAPTURE_AFTER_MS = 12 * 60 * 1000;

// Aynı sunucu örneğinde arka arkaya gelen isteklerin Truncgil'i dövmesini
// engelleyen bellek-içi soğuma süresi. Serverless'ta her örnek kendi
// sayacını tutar — bu bir sorun değil, çünkü asıl korumayı yukarıdaki
// Update_Date karşılaştırması ve tablodaki ON CONFLICT DO NOTHING sağlıyor.
const COOLDOWN_MS = 60 * 1000;
let lastAttemptAt = 0;
let inFlight: Promise<CaptureResult> | null = null;

export async function captureIfStale(
  latestKnownSourceUpdatedAt: string | null | undefined,
): Promise<CaptureResult> {
  const t = latestKnownSourceUpdatedAt
    ? new Date(latestKnownSourceUpdatedAt).getTime()
    : 0;
  if (Number.isFinite(t) && t > 0 && Date.now() - t < CAPTURE_AFTER_MS) {
    return { ok: true, skipped: true, reason: "Kayıt yeterince taze" };
  }
  if (Date.now() - lastAttemptAt < COOLDOWN_MS) {
    return { ok: true, skipped: true, reason: "Soğuma süresi" };
  }
  // Eşzamanlı istekler tek bir Truncgil çağrısını paylaşsın.
  if (inFlight) return inFlight;

  lastAttemptAt = Date.now();
  inFlight = captureSnapshot().finally(() => {
    inFlight = null;
  });
  return inFlight;
}
