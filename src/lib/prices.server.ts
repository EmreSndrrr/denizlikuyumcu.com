import "server-only";

// Fiyat veri katmanı — SUNUCU tarafı (Server Component / Route Handler).
//
// Veri akışı (Eylül 2026'da yeniden kuruldu):
//   1. Zamanlanmış görev (app/api/cron/snapshot) 5 dakikada bir Truncgil'i
//      kontrol eder; kaynağın Update_Date'i değişmişse 21 kalemin fiyatını
//      `price_snapshots` tablosuna yazar (bkz. lib/priceHistory.ts).
//   2. getPrices() sayfalara EN GÜNCEL kaydı veritabanından verir.
//   3. Veritabanı henüz boşsa (ilk deploy) veya erişilemezse doğrudan
//      Truncgil'e düşülür; o da olmazsa mock veriye (yalnızca geliştirme).
//
// Bu dosya `server-only` — client bileşenlerinden import EDİLEMEZ. Client
// tarafının ihtiyaç duyduğu tip/sabit/yardımcılar `lib/prices.ts`'te.

import { cache } from "react";
import { INSTRUMENTS } from "@/lib/instruments";
import type {
  GoldChartData,
  GoldHistoryPoint,
  PriceItem,
  PriceSnapshot,
} from "@/lib/prices";
import {
  getAllGoldSparklines,
  getGoldChart as getGoldChartFromDb,
  getLatestSnapshot,
} from "@/lib/priceHistory";
import { fetchTruncgilSnapshot } from "@/lib/truncgil";

// --- Mock veri (yalnızca geliştirme / acil fallback) ---
//
// Base değerler Eylül 2026 seviyelerine yakın tutuldu; asıl kullanım
// PRICE_PROVIDER=mock ile yerel geliştirmede arayüzü (flash animasyonları
// dahil) veritabanı olmadan test etmek. Üretimde neredeyse hiç görünmez.
const MOCK_BASE: Record<string, number> = {
  "gram-altin": 6975,
  "ceyrek-altin": 11430,
  "yarim-altin": 22850,
  "tam-altin": 45700,
  "cumhuriyet-altini": 46600,
  "22-ayar-bilezik": 6430,
  "usd-try": 42.3,
  "eur-try": 44.2,
  "gbp-try": 52.6,
  "chf-try": 47.2,
  "sar-try": 11.25,
  "18-ayar-altin": 5260,
  "14-ayar-altin": 4100,
  "ceyrek-ata": 11500,
  "yarim-ata": 23000,
  "tam-ata": 46000,
  "ceyrek-resat": 11600,
  "yarim-resat": 23200,
  "tam-resat": 46400,
  "gremse-altin": 46300,
  "ons-altin": 4380,
};

function mockSnapshot(): PriceSnapshot {
  const wobble = (base: number, spread: number) =>
    Number((base + (Math.random() - 0.5) * spread).toFixed(2));

  const items: PriceItem[] = INSTRUMENTS.map((meta) => {
    const mid = MOCK_BASE[meta.key] ?? 1000;
    const spread = mid * 0.006;
    return {
      key: meta.key,
      label: meta.label,
      unit: meta.unit,
      type: meta.type,
      buy: wobble(mid - spread / 2, spread * 0.3),
      sell: wobble(mid + spread / 2, spread * 0.3),
      changePercent: Number(((Math.random() - 0.45) * 2).toFixed(2)),
    };
  });

  const now = new Date().toISOString();
  return { items, updatedAt: now, sourceUpdatedAt: now, source: "mock" };
}

// PRICE_PROVIDER=mock -> her zaman sahte veri (yerel geliştirme). Diğer her
// değer (veya tanımsız) -> normal akış: önce veritabanı, sonra Truncgil.
const PRICE_PROVIDER = process.env.PRICE_PROVIDER || "db";

// cache(): aynı istek içinde layout.tsx (kayan şerit) ve page.tsx (fiyat
// tabloları) getPrices() çağırıyor — tek sonuca indirger.
export const getPrices = cache(async function getPrices(): Promise<PriceSnapshot> {
  if (PRICE_PROVIDER === "mock") {
    return mockSnapshot();
  }

  // 1. En güncel kayıt veritabanından (zamanlanmış görev tarafından yazılır).
  try {
    const snap = await getLatestSnapshot();
    if (snap) return snap;
  } catch (err) {
    console.error("[lib/prices.server] Veritabanı okunamadı:", err);
  }

  // 2. Veritabanı boş (ilk deploy) veya erişilemez -> doğrudan Truncgil.
  try {
    return await fetchTruncgilSnapshot();
  } catch (err) {
    console.error(
      "[lib/prices.server] Truncgil doğrudan çekilemedi, mock veriye dönülüyor:",
      err,
    );
  }

  // 3. Hiçbiri olmadı -> mock (yalnızca acil durum / geliştirme).
  return mockSnapshot();
});

// --- Altın Fiyatları Grafiği için geçmiş veri (Aşama 1b) ---
//
// Aşağıdaki iki fonksiyon YALNIZCA `price_snapshots` tablosundaki gerçek
// kayıtları döndürür (bkz. lib/priceHistory.ts). Sentetik/rastgele üretim
// tamamen kaldırıldı. Veritabanı boşsa veya henüz yeterli geçmiş
// birikmemişse bileşenler (GoldPriceChart, Sparkline kullanan kartlar) bu
// eksikliği görünür biçimde ("veri toplanıyor") işaretler — asla uydurma
// bir çizgi çizmez.

// Ana "Altın Fiyatları Grafiği" — gram altının 4 aralıktaki gerçek geçmişi.
export const getGoldChart = cache(async function getGoldChart(): Promise<GoldChartData> {
  try {
    return await getGoldChartFromDb("gram-altin");
  } catch (err) {
    console.error("[lib/prices.server] Grafik geçmişi okunamadı:", err);
    return { periods: { 7: [], 30: [], 90: [], 365: [] }, historyStartedAt: null };
  }
});

// "Tüm Altın Çeşitleri" tablosu + hero/fiyat detay kartlarındaki 7 günlük
// mini grafikler için — tüm altın kalemlerinin gerçek geçmişi.
export const getGoldItemSparklines = cache(async function getGoldItemSparklines(): Promise<
  Record<string, GoldHistoryPoint[]>
> {
  try {
    return await getAllGoldSparklines();
  } catch (err) {
    console.error("[lib/prices.server] Sparkline geçmişi okunamadı:", err);
    return {};
  }
});
