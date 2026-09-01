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
import type { GoldHistoryPoint, PriceSnapshot } from "@/lib/prices";

function MiniSparkline({ points }: { points: GoldHistoryPoint[] }) {
  if (points.length < 2) return null;
  const W = 280;
  const H = 64;
  const prices = points.map((p) => p.sell);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  const range = max - min || 1;
  const coords = points.map((p, i) => {
    const x = (i / (points.length - 1)) * W;
    const y = H - ((p.sell - min) / range) * H;
    return [x, y] as const;
  });
  const path = coords.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const baseline = H;
  const areaPath =
    `M${coords[0][0].toFixed(1)},${baseline} ` +
    coords.map(([x, y]) => `L${x.toFixed(1)},${y.toFixed(1)}`).join(" ") +
    ` L${coords[coords.length - 1][0].toFixed(1)},${baseline} Z`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-16 w-full" aria-hidden="true">
      <defs>
        <linearGradient id="hero-spark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d6a641" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#d6a641" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#hero-spark-fill)" stroke="none" />
      <path d={path} fill="none" stroke="#d6a641" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

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

      <div className="mt-4">
        <MiniSparkline points={history} />
      </div>

      <p className="mt-3 text-xs text-white/40">
        Son güncelleme: {formatTime(data.updatedAt)}
      </p>
    </div>
  );
}
