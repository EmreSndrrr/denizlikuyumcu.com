"use client";

// "X ne kadar?" sorusuna sayfanın EN ÜSTÜNDE, tek cümlelik, kendi başına
// alıntılanabilir bir cevap (GEO). AI arama motorlarının atıflarının büyük
// kısmı sayfanın ilk bölümünden geliyor ve bu motorlar JavaScript
// çalıştırmıyor.
//
// Neden client component: ilk sürüm Server Component'ti ve cümle sunucuda
// sabitleniyordu. Yanındaki canlı fiyat kartı ise tazelendiği için aynı
// ekranda iki farklı satış fiyatı görünüyordu (ölçüldü: 6.997,28 ile
// 7.001,52). Client component'ler de sunucuda render edildiği için botlar
// cümleyi yine JS'siz HTML'de görüyor; insanlar ise kartla aynı veriyi.
//
// Bilinçli olarak "Denizli'de X TL" DENMİYOR: rakam ulusal piyasa
// referansıdır, bir Denizli kuyumcusunun etiket fiyatı değildir. İkinci
// cümle bu farkı açıkça söylüyor.

import type { PriceSnapshot } from "@/lib/prices";
import { formatTL, formatUSD } from "@/lib/format";
import { useLivePrices } from "@/lib/useLivePrices";

// Tarih-saat metni parçalardan elle kuruluyor. toLocaleString'in tarih ile
// saat arasına koyduğu ayırıcı (virgül, boşluk, "saat") ICU sürümüne göre
// değişebiliyor; sunucu (Node) ile tarayıcı farklı metin üretirse hidrasyon
// uyuşmazlığı çıkar. Parçalar (gün, ay adı, yıl, saat) ise kararlı.
const BICIM = new Intl.DateTimeFormat("tr-TR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
  timeZone: "Europe/Istanbul",
});

function tarihSaat(iso: string): string {
  const p = Object.fromEntries(BICIM.formatToParts(new Date(iso)).map((x) => [x.type, x.value]));
  return `${p.day} ${p.month} ${p.year} ${p.hour}:${p.minute}`;
}

export default function PriceDirectAnswer({
  itemKey,
  initialData,
}: {
  itemKey: string;
  initialData: PriceSnapshot;
}) {
  const { data } = useLivePrices(initialData);
  const item = data.items.find((i) => i.key === itemKey);
  if (!item) return null;

  const fiyat = (v: number) => (item.unit === "USD" ? `${formatUSD(v)} $` : `${formatTL(v)} TL`);
  const degisim = `${item.changePercent >= 0 ? "+" : ""}${item.changePercent.toFixed(2)}%`;

  return (
    <p className="mt-3 max-w-2xl text-base text-ink">
      <strong className="font-semibold">{item.label}</strong> güncel piyasa fiyatı: alış{" "}
      <strong className="font-semibold tabular-nums">{fiyat(item.buy)}</strong>, satış{" "}
      <strong className="font-semibold tabular-nums">{fiyat(item.sell)}</strong> (günlük değişim{" "}
      {degisim};{" "}
      <time dateTime={data.sourceUpdatedAt}>{tarihSaat(data.sourceUpdatedAt)}</time> itibarıyla,
      kaynak: finans.truncgil.com). Denizli&apos;deki kuyumcular bu referans fiyata kendi işçilik
      ve kâr paylarını ekleyebilir.
    </p>
  );
}
