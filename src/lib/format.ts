// Fiyat bileşenlerinin (PriceTicker, PriceMarquee, GoldCalculator) ortak
// kullandığı biçimlendirme yardımcıları — tek yerden yönetilsin diye.

export function formatTL(value: number) {
  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

// Ons altın gibi USD bazlı kalemler için — TL'den farklı binlik/ondalık
// ayırıcı kuralları olduğundan ayrı bir yerelle biçimlendiriliyor.
export function formatUSD(value: number) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString("tr-TR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}
