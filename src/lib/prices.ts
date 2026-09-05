// Fiyat veri MODELİ — tipler ve saf yardımcılar.
//
// Bu dosya client bileşenleri tarafından da import edilir (filterSnapshot,
// tip'ler, sabitler). Bu yüzden BURADA veritabanı/sunucu kodu OLMAZ —
// getPrices() ve geçmiş veri fonksiyonları `lib/prices.server.ts`
// dosyasındadır (yalnızca Server Component / Route Handler'lardan
// çağrılır).

export type PriceItem = {
  key: string;
  label: string;
  buy: number;
  sell: number;
  unit: "TL" | "USD";
  changePercent: number;
  // "gold" | "currency" -> ana "Güncel Altın ve Döviz Fiyatları" tablosunda
  // ve üstteki kayan şeritte gösterilen 8 kalem (6 altın + Dolar + Euro).
  // "currency-extra" -> ayrı "Yurtdışı Para Birimleri" bölümünde gösterilen,
  // ana tabloda YER ALMAYAN ek dövizler.
  // "gold-extra" -> "Tüm Altın Çeşitleri" tablosunda ana 6 altına ek olarak
  // gösterilen diğer altın türleri (ata, reşat, gremse, 18/14 ayar).
  // "ons" -> ons altın (uluslararası, USD bazlı) — tek kalem.
  type: "gold" | "currency" | "currency-extra" | "gold-extra" | "ons";
};

export type PriceSnapshot = {
  items: PriceItem[];
  // Uygulamanın veriyi en son ELE ALDIĞI an (DB okuması / fetch).
  updatedAt: string;
  // Kaynağın (Truncgil) KENDİ bildirdiği güncelleme zamanı. Arayüzde
  // "kaynak güncellemesi" olarak bu gösterilir; updatedAt ile arasındaki
  // fark büyürse "veri gecikmeli" uyarısı çıkar (Aşama 1c).
  sourceUpdatedAt: string;
  source: "mock" | "live";
};

// Bir PriceSnapshot'ı verilen tip(ler)le sınırlayan yardımcı. Anasayfadaki
// ana tabloyu, "Yurtdışı Para Birimleri" bölümünü ve "Tüm Altın Çeşitleri"
// tablosunu aynı bileşenlerden üretmek için kullanılıyor.
export function filterSnapshot(
  snapshot: PriceSnapshot,
  types: PriceItem["type"] | PriceItem["type"][],
): PriceSnapshot {
  const allowed = Array.isArray(types) ? types : [types];
  return {
    ...snapshot,
    items: snapshot.items.filter((item) => allowed.includes(item.type)),
  };
}

// Üstteki kayan şerit ve "Güncel Altın ve Döviz Fiyatları" tablosunun
// gösterdiği sabit 8 kalem: 6 altın + Dolar + Euro.
export const MAIN_PRICE_TYPES: PriceItem["type"][] = ["gold", "currency"];

// "Tüm Altın Çeşitleri" tablosunun gösterdiği kalemler: ana 6 altın +
// ek altın türleri (ata, reşat, gremse, 18/14 ayar).
export const ALL_GOLD_TYPES: PriceItem["type"][] = ["gold", "gold-extra"];

// Ayar (milyem) karşılıkları — has hesaplama aracında kullanılıyor.
// Milyem: 24 ayar altının binde kaçının saf altın olduğunu gösterir.
export const KARAT_MILYEM: Record<24 | 22 | 18 | 14, number> = {
  24: 0.995, // has altın piyasada tam %100 değil, ~995/1000 işlem görür
  22: 0.916,
  18: 0.75,
  14: 0.585,
};

// Altın Fiyatları Grafiği için geçmiş veri noktası. `price_snapshots`
// tablosundaki gerçek kayıtlardan üretilir (bkz. lib/priceHistory.ts,
// lib/prices.server.ts) — hiçbir yerde rastgele/sentetik seri üretilmez.
export type GoldHistoryPoint = { date: string; sell: number; buy: number };

export type Period = 7 | 30 | 90 | 365;

export type GoldChartData = {
  periods: Record<Period, GoldHistoryPoint[]>;
  // Bu kalem için biriktirilen en eski gerçek kayıt — arayüzde "geçmiş
  // takibi şu tarihten beri" şeffaflık notu için. Hiç kayıt yoksa null.
  historyStartedAt: string | null;
};
