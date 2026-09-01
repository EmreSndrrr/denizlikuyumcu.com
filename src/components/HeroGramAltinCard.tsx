"use client";

// Hero'nun sağ sütunu: "sitenin amacı birkaç saniyede anlaşılsın" hedefiyle
// tek bir büyük gram altın kartı — fiyat, alış/satış, günlük değişim, mini
// grafik ve son güncelleme saati. Bilinçli olarak koyu yüzey (Midas'ın
// telefon ekranındaki gibi) — açık hero zemininin üzerinde güçlü bir
// odak noktası oluşturuyor ve sayfanın ilerisindeki grafik kartıyla aynı
// "premium koyu panel" diline bağlıyor.

import { TrendUp, TrendDown } from "@phosphor-icons/react/dist/ssr";
import { useLivePrices } from "@/lib/useLivePrices";
import { formatTL, formatTime } from "@/lib/format";
import StaleBadge from "@/components/StaleBadge";
import Sparkline from "@/components/Sparkline";
import type { GoldHistoryPoint, PriceSnapshot } from "@/lib/prices";

export default function HeroGramAltinCard({
  initialData,
  history,
}: {
  initialData: PriceSnapshot;
  history: GoldHistoryPoint[];
}) {
  const { data, stale } = useLivePrices(initialData);
  const gram = data.items.find((i) => i.key === "gram-altin");
  if (!gram) return null;
  const isUp = gram.changePercent >= 0;

  return (
    <div className="w-full max-w-md rounded-2xl border border-black/10 bg-surface-dark p-6 text-white shadow-xl">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-white/60">Gram Altın</p>
        {stale && <StaleBadge />}
      </div>

      <p className="mt-2 text-4xl font-extrabold tabular-nums">
        {formatTL(gram.sell)} <span className="text-lg font-medium text-white/50">TL</span>
      </p>
      <p
        className={
          "mt-1 flex items-center gap-1 text-sm font-semibold tabular-nums " +
          (isUp ? "text-positive" : "text-negative")
        }
      >
        {isUp ? (
          <TrendUp aria-hidden="true" size={15} weight="bold" />
        ) : (
          <TrendDown aria-hidden="true" size={15} weight="bold" />
        )}
        {isUp ? "+" : ""}
        {gram.changePercent.toFixed(2)}% bugün
      </p>

      <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
        <div>
          <p className="text-xs text-white/50">Alış</p>
          <p className="mt-0.5 font-semibold tabular-nums">{formatTL(gram.buy)} TL</p>
        </div>
        <div>
          <p className="text-xs text-white/50">Satış</p>
          <p className="mt-0.5 font-semibold tabular-nums">{formatTL(gram.sell)} TL</p>
        </div>
      </div>

      <div className="mt-4 h-16">
        <Sparkline points={history} id="hero" />
      </div>

      <p className="mt-3 text-xs text-white/40">
        Son güncelleme: {formatTime(data.updatedAt)}
      </p>
    </div>
  );
}
