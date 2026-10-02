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

const TRUNCGIL_URL = "https://finans.truncgil.com/today.json";
const AZAMI_DENEME = 3;
const DENEME_ZAMAN_ASIMI_MS = 4000;

const bekle = (ms: number) => new Promise((r) => setTimeout(r, ms));

// Truncgil'i, toplam bir zaman bütçesi içinde birkaç kez dener.
//
// Neden: kaynak bağlantıları sık sık ilk istekte koparıyor ("other side
// closed" / "server closed abruptly") ve hemen ardından gelen istek başarılı
// oluyor. Bu, sunucunun boşta kalan keep-alive bağlantısını kapatıp bizim
// tarafın o ölü soketi yeniden kullanmaya çalışmasının tipik belirtisi.
// Ölçüldü (2 Ekim 2026): tek denemede 20 istekten 16'sı başarılı, 3 denemeye
// kadar 20/20. Önceden tek deneme yapılıyordu; ilk istek koptuğunda o tur
// tamamen kayboluyor, canlıda veri 4,5 saat 11:30'da takılı kaldı (aynı
// anda üretimden tetiklenen toplama da "Truncgil kaynağına ulaşılamadı"
// döndü).
//
// Bütçe, çağıran yere göre değişir: ziyaretçinin YANITI beklediği yolda
// kısa, arka planda daha uzun (bkz. captureIfStale ve api/prices).
async function truncgilCek(butceMs: number): Promise<Record<string, unknown>> {
  const bitis = Date.now() + butceMs;
  let sonHata: unknown = new Error("Zaman bütçesi denemeye yetmedi");

  for (let deneme = 1; deneme <= AZAMI_DENEME; deneme++) {
    const kalan = bitis - Date.now();
    if (kalan < 500) break;
    try {
      const res = await fetch(TRUNCGIL_URL, {
        cache: "no-store",
        signal: AbortSignal.timeout(Math.min(DENEME_ZAMAN_ASIMI_MS, kalan)),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return (await res.json()) as Record<string, unknown>;
    } catch (err) {
      sonHata = err;
      console.warn(`[snapshot] Truncgil denemesi ${deneme}/${AZAMI_DENEME} başarısız:`, err);
      if (deneme < AZAMI_DENEME) {
        // Denemeler bütçeye YAYILIYOR (1,5 sn, sonra 3 sn). Üretimde
        // gözlendi: Vercel'den kopmalar tek tek değil birkaç saniyelik
        // pencereler hâlinde geliyor — ilk sürümdeki 300/600 ms beklemeyle
        // üç deneme de aynı kötü pencereye düşüp 502 döndü, 20 sn sonraki
        // tur ise başarılı oldu. Kopan bağlantı anında hata verdiği için
        // beklemenin maliyeti yalnızca kaynak gerçekten sorunluyken ödenir.
        await bekle(Math.min(1500 * deneme, Math.max(0, bitis - Date.now() - 500)));
      }
    }
  }
  throw sonHata;
}

// Varsayılan bütçe 9 sn: Vercel'deki varsayılan 10 sn fonksiyon süre
// sınırının altında kalsın (zamanlanmış görev ve after() yolu bunu kullanır).
const VARSAYILAN_BUTCE_MS = 9000;

export async function captureSnapshot(
  { butceMs = VARSAYILAN_BUTCE_MS }: { butceMs?: number } = {},
): Promise<CaptureResult> {
  if (!hasDatabase) {
    return { ok: false, error: "DATABASE_URL tanımlı değil", status: 500 };
  }

  let data: Record<string, unknown>;
  try {
    data = await truncgilCek(butceMs);
  } catch (err) {
    console.error("[snapshot] Truncgil çekilemedi (tüm denemeler):", err);
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
  secenekler: { butceMs?: number } = {},
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
  inFlight = captureSnapshot(secenekler).finally(() => {
    inFlight = null;
  });
  return inFlight;
}
