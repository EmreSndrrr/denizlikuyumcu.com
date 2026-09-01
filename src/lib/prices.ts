// Fiyat veri katmanı.
//
// Neden ayrı bir dosyada?  Next.js'te "backend" ayrı bir sunucu değil —
// sunucu tarafında çalışan bu fonksiyonlar (Server Components, Route
// Handlers) zaten backend'iniz. Veri kaynağını (mock -> gerçek API) burada
// değiştireceğiz; sayfalar ve bileşenler bu dosyanın public arayüzünü
// (getPrices) çağırdığı sürece hiçbir şey bilmelerine gerek kalmıyor.

import { cache } from "react";

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
  updatedAt: string;
  source: "mock" | "live";
};

// Gerçek veri sağlayıcısı seçildiğinde bu fonksiyonun içini
// `fetch("https://saglayici.com/api", { next: { revalidate: 60 } })`
// ile değiştireceğiz. Şimdilik gerçekçi görünen sabit + rastgele
// oynamalı mock veri üretiyoruz ki arayüzü baştan sona test edebilelim.
function mockSnapshot(): PriceSnapshot {
  const wobble = (base: number, spread: number) =>
    Number((base + (Math.random() - 0.5) * spread).toFixed(2));

  const base: Omit<PriceItem, "buy" | "sell" | "changePercent">[] = [
    { key: "gram-altin", label: "Gram Altın", unit: "TL", type: "gold" },
    { key: "ceyrek-altin", label: "Çeyrek Altın", unit: "TL", type: "gold" },
    { key: "yarim-altin", label: "Yarım Altın", unit: "TL", type: "gold" },
    { key: "tam-altin", label: "Tam Altın", unit: "TL", type: "gold" },
    { key: "cumhuriyet-altini", label: "Cumhuriyet Altını", unit: "TL", type: "gold" },
    { key: "22-ayar-bilezik", label: "22 Ayar Bilezik", unit: "TL", type: "gold" },
    { key: "usd-try", label: "Dolar", unit: "TL", type: "currency" },
    { key: "eur-try", label: "Euro", unit: "TL", type: "currency" },
    // Ana 8'li tabloda YER ALMIYOR — ayrı "Yurtdışı Para Birimleri"
    // bölümünde gösteriliyor.
    { key: "gbp-try", label: "Sterlin", unit: "TL", type: "currency-extra" },
    { key: "chf-try", label: "İsviçre Frangı", unit: "TL", type: "currency-extra" },
    { key: "sar-try", label: "Suudi Riyali", unit: "TL", type: "currency-extra" },
    // "Tüm Altın Çeşitleri" tablosunda ana 6 altına ek gösterilen kalemler.
    { key: "18-ayar-altin", label: "18 Ayar Altın (gr)", unit: "TL", type: "gold-extra" },
    { key: "14-ayar-altin", label: "14 Ayar Altın (gr)", unit: "TL", type: "gold-extra" },
    { key: "ceyrek-ata", label: "Çeyrek Ata Altın", unit: "TL", type: "gold-extra" },
    { key: "yarim-ata", label: "Yarım Ata Altın", unit: "TL", type: "gold-extra" },
    { key: "tam-ata", label: "Tam Ata Altın", unit: "TL", type: "gold-extra" },
    { key: "ceyrek-resat", label: "Çeyrek Reşat Altın", unit: "TL", type: "gold-extra" },
    { key: "yarim-resat", label: "Yarım Reşat Altın", unit: "TL", type: "gold-extra" },
    { key: "tam-resat", label: "Tam Reşat Altın", unit: "TL", type: "gold-extra" },
    { key: "gremse-altin", label: "Gremse Altın", unit: "TL", type: "gold-extra" },
    // Ons altın uluslararası piyasada USD/ons olarak fiyatlanır.
    { key: "ons-altin", label: "Ons Altın", unit: "USD", type: "ons" },
  ];

  const baseValues: Record<string, number> = {
    "gram-altin": 4350,
    "ceyrek-altin": 7130,
    "yarim-altin": 14260,
    "tam-altin": 28520,
    "cumhuriyet-altini": 29100,
    "22-ayar-bilezik": 4010,
    "usd-try": 41.2,
    "eur-try": 43.1,
    "gbp-try": 50.6,
    "chf-try": 46.4,
    "sar-try": 11.0,
    "18-ayar-altin": 3270,
    "14-ayar-altin": 2545,
    "ceyrek-ata": 7180,
    "yarim-ata": 14340,
    "tam-ata": 28680,
    "ceyrek-resat": 7260,
    "yarim-resat": 14500,
    "tam-resat": 29000,
    "gremse-altin": 28900,
    "ons-altin": 3320,
  };

  const items: PriceItem[] = base.map((item) => {
    const mid = baseValues[item.key];
    const spread = mid * 0.006;
    const buy = wobble(mid - spread / 2, spread * 0.3);
    const sell = wobble(mid + spread / 2, spread * 0.3);
    return {
      ...item,
      buy,
      sell,
      changePercent: Number(((Math.random() - 0.45) * 2).toFixed(2)),
    };
  });

  return {
    items,
    updatedAt: new Date().toISOString(),
    source: "mock",
  };
}

// Hangi veri kaynağının kullanılacağını .env.local'daki PRICE_PROVIDER
// belirliyor (bkz. .env.example). Değer boşsa veya "mock" ise sahte veri
// kullanılır — yerel geliştirme ve önizlemenin varsayılanı budur. Gerçek
// bir sağlayıcı bağlandığında burada yeni bir "else if" dalı açıp kendi
// fetch() mantığını (PRICE_API_KEY / PRICE_API_BASE_URL kullanarak)
// eklemek yeterli; getPrices()'ı çağıran hiçbir bileşenin değişmesi
// gerekmiyor.
const PRICE_PROVIDER = process.env.PRICE_PROVIDER || "mock";

// cache() ile sarmalıyoruz: aynı istek (request) içinde hem layout.tsx
// (üstteki kayan şerit) hem page.tsx (fiyat tabloları + hesaplama aracı)
// getPrices() çağırıyor. cache() olmadan mock fonksiyon her çağrıda
// yeniden rastgele sayı üretir ve bileşenler az farklı rakamlar
// gösterir; cache() aynı istek içindeki tekrar çağrıları tek sonuca
// indirger.
export const getPrices = cache(async function getPrices(): Promise<PriceSnapshot> {
  if (PRICE_PROVIDER === "mock") {
    return mockSnapshot();
  }

  // TODO: Gerçek sağlayıcı seçildiğinde buraya eklenecek, örn.:
  //   if (PRICE_PROVIDER === "collectapi") {
  //     const res = await fetch(`${process.env.PRICE_API_BASE_URL}/...`, {
  //       headers: { Authorization: `apikey ${process.env.PRICE_API_KEY}` },
  //       next: { revalidate: 60 },
  //     });
  //     return mapProviderResponseToSnapshot(await res.json());
  //   }
  console.warn(
    `[lib/prices] Bilinmeyen PRICE_PROVIDER="${PRICE_PROVIDER}", mock veriye dönülüyor.`
  );
  return mockSnapshot();
});

// Bir PriceSnapshot'ı verilen tip(ler)le sınırlayan yardımcı. Anasayfadaki
// ana tabloyu (gold+currency), "Yurtdışı Para Birimleri" bölümünü
// (currency-extra) ve "Tüm Altın Çeşitleri" tablosunu (gold+gold-extra)
// aynı bileşenlerden üretmek için kullanılıyor.
export function filterSnapshot(
  snapshot: PriceSnapshot,
  types: PriceItem["type"] | PriceItem["type"][]
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

// --- Altın Fiyatları Grafiği için geçmiş veri ---

// Alış VE satış birlikte tutuluyor ki grafikte "Alış/Satış seçimi" mümkün
// olsun; ikisi arasındaki fark mockSnapshot'takiyle aynı yaklaşık %0,6
// spread'i yansıtıyor.
export type GoldHistoryPoint = { date: string; sell: number; buy: number };

const HISTORY_SPREAD_RATIO = 0.006;

// Bugünün gram altın fiyatından geriye doğru gerçekçi bir "random walk"
// üretir. Gerçek veri sağlayıcısı bağlandığında bu fonksiyon geçmiş
// fiyat endpoint'ine bağlanacak; şimdilik grafiği test edebilmek için
// makul bir mock seri üretiyoruz.
function generateGoldHistory(endPrice: number, days: number): GoldHistoryPoint[] {
  const series: number[] = new Array(days);
  series[days - 1] = endPrice;
  let price = endPrice;
  for (let i = days - 2; i >= 0; i--) {
    const dailyMove = (Math.random() - 0.5) * price * 0.014; // ~%1.4 günlük oynaklık
    price = Math.max(price - dailyMove, price * 0.4);
    series[i] = price;
  }

  const today = new Date();
  return series.map((sell, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() - (days - 1 - i));
    return {
      date: d.toISOString().slice(0, 10),
      sell: Number(sell.toFixed(2)),
      buy: Number((sell * (1 - HISTORY_SPREAD_RATIO)).toFixed(2)),
    };
  });
}

// 1 yıllık (365 gün) geçmiş üretip döndürüyoruz; grafik bileşeni bunun son
// 7/30/90/365 gününü dilimleyerek zaman aralığı seçicisini besliyor — tek
// seferlik üretim, tutarlı bir seri garantiliyor (her aralık geçişinde
// yeniden rastgele üretmiyoruz). Saatlik veri olmadığı için "1 gün"
// aralığı şimdilik sunulmuyor.
export const getGoldHistory = cache(async function getGoldHistory(): Promise<
  GoldHistoryPoint[]
> {
  const snapshot = await getPrices();
  const gramAltin = snapshot.items.find((i) => i.key === "gram-altin");
  return generateGoldHistory(gramAltin?.sell ?? 4350, 365);
});

// "Tüm Altın Çeşitleri" tablosunda satır genişletildiğinde gösterilen
// 7 günlük mini grafik için — HER kalem için ayrı, kısa bir geçmiş.
// Ana grafiğin 365 günlük serisinden bağımsız, hafif bir üretim.
export const getGoldItemSparklines = cache(async function getGoldItemSparklines(): Promise<
  Record<string, GoldHistoryPoint[]>
> {
  const snapshot = await getPrices();
  const goldItems = snapshot.items.filter(
    (i) => i.type === "gold" || i.type === "gold-extra"
  );
  const result: Record<string, GoldHistoryPoint[]> = {};
  for (const item of goldItems) {
    result[item.key] = generateGoldHistory(item.sell, 7);
  }
  return result;
});
