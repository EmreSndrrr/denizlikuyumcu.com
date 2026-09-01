"use client";

// Fiyat detay sayfalarının (/altin/[slug], /doviz/[slug]) üstündeki canlı
// fiyat kartı. Anasayfadaki HeroGramAltinCard/OnsAltinCard ile AYNI veri
// katmanını (useLivePrices, AnimatedNumber, usePriceFlash) kullanıyor —
// böylece bu sayfadaki fiyat, anasayfadaki tablolarla her zaman tutarlı
// kalıyor; ayrı bir veri kaynağı YOK.

import { TrendUp, TrendDown } from "@phosphor-icons/react/dist/ssr";
import { useLivePrices } from "@/lib/useLivePrices";
import { usePriceFlash } from "@/lib/usePriceFlash";
import { formatTL, formatTime, formatUSD } from "@/lib/format";
import StaleBadge from "@/components/StaleBadge";
import Sparkline from "@/components/Sparkline";
import AnimatedNumber from "@/components/AnimatedNumber";
import type { GoldHistoryPoint, PriceSnapshot } from "@/lib/prices";

export default function PriceDetailCard({
  itemKey,
  initialData,
  history,
}: {
  itemKey: string;
  initialData: PriceSnapshot;
  history?: GoldHistoryPoint[];
}) {
  const { data, stale } = useLivePrices(initialData);
  const item = data.items.find((i) => i.key === itemKey);
  const flashKeys = usePriceFlash(item ? [item] : []);
  if (!item) return null;

  const isUp = item.changePercent >= 0;
  const isUsd = item.unit === "USD";
  const format = isUsd ? formatUSD : formatTL;
  const flash = flashKeys[item.key];

  return (
    <div
      className={
        "w-full rounded-2xl border border-black/10 bg-surface-dark p-6 text-white shadow-xl " +
        (flash === "up" ? "price-flash-up" : flash === "down" ? "price-flash-down" : "")
      }
    >
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-white/60">{item.label}</p>
        {stale && <StaleBadge />}
      </div>

      <p className="mt-2 text-4xl font-extrabold tabular-nums">
        {isUsd && <span className="mr-1 text-2xl font-medium text-white/50">$</span>}
        <AnimatedNumber value={item.sell} format={format} />{" "}
        {!isUsd && <span className="text-lg font-medium text-white/50">{item.unit}</span>}
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
        {item.changePercent.toFixed(2)}% bugün
      </p>

      <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
        <div>
          <p className="text-xs text-white/50">Alış</p>
          <p className="mt-0.5 font-semibold tabular-nums">
            <AnimatedNumber value={item.buy} format={format} /> {isUsd ? "USD" : item.unit}
          </p>
        </div>
        <div>
          <p className="text-xs text-white/50">Satış</p>
          <p className="mt-0.5 font-semibold tabular-nums">
            <AnimatedNumber value={item.sell} format={format} /> {isUsd ? "USD" : item.unit}
          </p>
        </div>
      </div>

      {history && history.length > 1 && (
        <div className="mt-4 h-16">
          {/* Kart her zaman koyu yüzeyli — bkz. HeroGramAltinCard'daki aynı not. */}
          <Sparkline points={history} id={`detail-${item.key}`} color="#e3bd6e" />
        </div>
      )}

      <p className="mt-3 text-xs text-white/40">
        Son güncelleme: {formatTime(data.updatedAt)}
      </p>
    </div>
  );
}
