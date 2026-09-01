"use client";

// Ons altın uluslararası piyasanın referans fiyatıdır (USD/ons) — TL
// bazlı diğer kalemlerden farklı bir birimde olduğu için ayrı, öne çıkan
// bir "istatistik" kartı olarak gösteriliyor (bir tabloya karıştırılırsa
// birim karışıklığı olur).

import { Globe, TrendUp, TrendDown } from "@phosphor-icons/react/dist/ssr";
import type { PriceSnapshot } from "@/lib/prices";
import { formatTime } from "@/lib/format";
import { useLivePrices } from "@/lib/useLivePrices";
import StaleBadge from "@/components/StaleBadge";

function formatUSD(value: number) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export default function OnsAltinCard({
  initialData,
}: {
  initialData: PriceSnapshot;
}) {
  const { data, stale } = useLivePrices(initialData);
  const ons = data.items.find((i) => i.key === "ons-altin");
  if (!ons) return null;
  const isUp = ons.changePercent >= 0;

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 text-brand">
          <Globe aria-hidden="true" size={22} weight="bold" />
        </span>
        <div>
          <p className="text-sm font-medium text-muted">
            Ons Altın <span className="text-muted/70">(uluslararası, USD)</span>
          </p>
          <p className="mt-0.5 text-2xl font-extrabold tabular-nums text-ink">
            ${formatUSD(ons.sell)}
          </p>
        </div>
      </div>
      <div className="text-right">
        <div className="flex items-center justify-end gap-2">
          {stale && <StaleBadge />}
          <p
            className={
              "flex items-center gap-1 text-sm font-semibold tabular-nums " +
              (isUp ? "text-positive" : "text-negative")
            }
          >
            {isUp ? (
              <TrendUp aria-hidden="true" size={16} weight="bold" />
            ) : (
              <TrendDown aria-hidden="true" size={16} weight="bold" />
            )}
            {Math.abs(ons.changePercent).toFixed(2)}%
          </p>
        </div>
        <p className="mt-0.5 text-xs text-muted/70">
          {formatTime(data.updatedAt)} itibarıyla
        </p>
      </div>
    </div>
  );
}
