// Fiyat veri katmanı.
//
// Neden ayrı bir dosyada?  Next.js'te "backend" ayrı bir sunucu değil —
// sunucu tarafında çalışan bu fonksiyonlar (Server Components, Route
// Handlers) zaten backend'iniz. Veri kaynağını (mock -> gerçek API) burada
// değiştireceğiz; sayfalar ve bileşenler bu dosyanın public arayüzünü
// (getPrices) çağırdığı sürece hiçbir şey bilmelerine gerek kalmıyor.

export type PriceItem = {
  key: string;
  label: string;
  buy: number;
  sell: number;
  unit: "TL";
  changePercent: number;
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
    { key: "gram-altin", label: "Gram Altın", unit: "TL" },
    { key: "ceyrek-altin", label: "Çeyrek Altın", unit: "TL" },
    { key: "yarim-altin", label: "Yarım Altın", unit: "TL" },
    { key: "tam-altin", label: "Tam Altın", unit: "TL" },
    { key: "cumhuriyet-altini", label: "Cumhuriyet Altını", unit: "TL" },
    { key: "22-ayar-bilezik", label: "22 Ayar Bilezik", unit: "TL" },
    { key: "usd-try", label: "Dolar", unit: "TL" },
    { key: "eur-try", label: "Euro", unit: "TL" },
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

export async function getPrices(): Promise<PriceSnapshot> {
  // İleride: process.env.PRICE_PROVIDER değerine göre gerçek sağlayıcıya
  // yönlendirilecek. Şimdilik tek kaynak: mock.
  return mockSnapshot();
}
