"use client";

// Hero'nun hemen altında, kısa ve taranabilir bir "Bugün ne değişti?"
// şeridi (brief). Mevcut, daha ayrıntılı DailyChangeTable'ın (en çok
// yükselen/düşen 5'er kalem) YERİNE değil, ONUN ÖNÜNDE — kullanıcı ilk
// saniyede "bugün genel tablo ne" sorusuna cevap alsın, isterse aşağıda
// (Grafik'in yanındaki) tam listeye bakar. Uzun açıklama metni yok,
// sadece 4 taranabilir veri noktası: en çok yükselen, en çok düşen,
// gram altının günlük değişimi, son güncelleme saati.

import { TrendUp, TrendDown } from "@phosphor-icons/react/dist/ssr";
import type { PriceSnapshot } from "@/lib/prices";
import { formatTL, formatTime } from "@/lib/format";
import { useLivePrices } from "@/lib/useLivePrices";
import StaleBadge from "@/components/StaleBadge";

export default function DailyMarketSummary({
  initialData,
}: {
  initialData: PriceSnapshot;
}) {
  const { data, stale } = useLivePrices(initialData);
  const sorted = [...data.items].sort((a, b) => b.changePercent - a.changePercent);
  const topGainer = sorted[0];
  // Gerçekten düşen kalem varsa onu göster; yoksa (her şey artıda/sabit
  // olduğu günlerde) "en çok düşen: +0,07%" gibi çelişkili bir kutu
  // üretmemek için "en az yükselen"e düşüyoruz.
  const decliners = sorted.filter((i) => i.changePercent < 0);
  const topLoser = decliners.length > 0 ? decliners[decliners.length - 1] : null;
  const weakest = sorted[sorted.length - 1];
  const gramAltin = data.items.find((i) => i.key === "gram-altin");

  if (!topGainer || !weakest) return null;

  return (
    <div className="rounded-2xl border border-border bg-surface px-4 py-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-semibold text-ink">Bugün ne değişti?</p>
        <span className="flex items-center gap-2 text-xs text-muted">
          {stale && <StaleBadge />}
          {formatTime(data.updatedAt)} itibarıyla
        </span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-4">
        <SummaryItem
          label="En çok yükselen"
          name={topGainer.label}
          value={`${topGainer.changePercent >= 0 ? "+" : ""}${topGainer.changePercent.toFixed(2)}%`}
          tone="up"
        />
        {topLoser ? (
          <SummaryItem
            label="En çok düşen"
            name={topLoser.label}
            value={`${topLoser.changePercent.toFixed(2)}%`}
            tone="down"
          />
        ) : (
          <SummaryItem
            label="En az yükselen"
            name={weakest.label}
            value={`${weakest.changePercent >= 0 ? "+" : ""}${weakest.changePercent.toFixed(2)}%`}
            tone="up"
          />
        )}
        {gramAltin && (
          <SummaryItem
            label="Gram altın (günlük)"
            name={`${formatTL(gramAltin.sell)} TL`}
            value={`${gramAltin.changePercent >= 0 ? "+" : ""}${gramAltin.changePercent.toFixed(2)}%`}
            tone={gramAltin.changePercent >= 0 ? "up" : "down"}
          />
        )}
        <SummaryItem label="Toplam takip edilen" name={`${data.items.length} kalem`} />
      </div>
    </div>
  );
}

function SummaryItem({
  label,
  name,
  value,
  tone,
}: {
  label: string;
  name: string;
  value?: string;
  tone?: "up" | "down";
}) {
  return (
    <div className="min-w-0">
      <p className="text-[11px] text-muted">{label}</p>
      <p className="mt-0.5 truncate text-sm font-semibold text-ink">{name}</p>
      {value && (
        <p
          className={
            "mt-0.5 flex items-center gap-1 text-xs font-medium tabular-nums " +
            (tone === "up" ? "text-positive" : "text-negative")
          }
        >
          {tone === "up" ? (
            <TrendUp aria-hidden="true" size={12} weight="bold" />
          ) : (
            <TrendDown aria-hidden="true" size={12} weight="bold" />
          )}
          {value}
        </p>
      )}
    </div>
  );
}
