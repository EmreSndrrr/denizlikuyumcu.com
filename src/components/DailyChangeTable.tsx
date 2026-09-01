"use client";

// Günlük değişim tablosu — "Yükselenler / Düşenler" listesi. Sitedeki tüm
// kalemleri (altın, döviz, ons) günlük yüzde değişime göre sıralayıp en
// çok hareket edenleri öne çıkarıyor. Amaç: kullanıcının "bugün ne oldu?"
// sorusuna tek bakışta cevap bulup sayfada biraz daha vakit geçirmesi.

import { TrendUp, TrendDown } from "@phosphor-icons/react/dist/ssr";
import type { PriceItem, PriceSnapshot } from "@/lib/prices";
import { formatTL, formatTime } from "@/lib/format";
import { useLivePrices } from "@/lib/useLivePrices";
import StaleBadge from "@/components/StaleBadge";

const LIST_SIZE = 5;

export default function DailyChangeTable({
  initialData,
}: {
  initialData: PriceSnapshot;
}) {
  const { data, stale } = useLivePrices(initialData);

  const sorted = [...data.items].sort((a, b) => b.changePercent - a.changePercent);
  const gainers = sorted.slice(0, LIST_SIZE);
  const losers = sorted.slice(-LIST_SIZE).reverse();

  return (
    <div className="rounded-2xl border border-border bg-surface shadow-sm">
      <div className="flex items-center justify-between gap-2 border-b border-border px-5 py-3">
        {/* Sayfa-seviyesi <SectionHeading> zaten bu bölümün h2'si. */}
        <p className="text-sm font-semibold text-ink">Günlük Değişim</p>
        <span className="flex items-center gap-2 text-xs text-muted">
          {stale && <StaleBadge />}
          {formatTime(data.updatedAt)} itibarıyla
        </span>
      </div>
      <div className="grid divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        <ChangeList title="En Çok Yükselenler" items={gainers} tone="up" />
        <ChangeList title="En Çok Düşenler" items={losers} tone="down" />
      </div>
    </div>
  );
}

function ChangeList({
  title,
  items,
  tone,
}: {
  title: string;
  items: PriceItem[];
  tone: "up" | "down";
}) {
  return (
    <div className="p-5">
      <p
        className={
          "flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide " +
          (tone === "up" ? "text-positive" : "text-negative")
        }
      >
        {tone === "up" ? (
          <TrendUp aria-hidden="true" size={14} weight="bold" />
        ) : (
          <TrendDown aria-hidden="true" size={14} weight="bold" />
        )}
        {title}
      </p>
      <ol className="mt-3 space-y-2.5">
        {items.map((item, i) => (
          <li key={item.key} className="flex items-center justify-between gap-3 text-sm">
            <span className="flex min-w-0 items-center gap-2">
              <span className="w-4 shrink-0 text-xs tabular-nums text-muted">{i + 1}</span>
              <span className="truncate text-ink">{item.label}</span>
            </span>
            <span className="flex shrink-0 items-baseline gap-2 tabular-nums">
              <span className="text-muted">{formatTL(item.sell)}</span>
              <span
                className={
                  "font-semibold " + (item.changePercent >= 0 ? "text-positive" : "text-negative")
                }
              >
                {item.changePercent >= 0 ? "+" : ""}
                {item.changePercent.toFixed(2)}%
              </span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
