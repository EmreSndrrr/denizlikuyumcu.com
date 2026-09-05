"use client";

// Günlük değişim tablosu — "Yükselenler / Düşenler" listesi. Sitedeki tüm
// kalemleri (altın, döviz, ons) günlük yüzde değişime göre sıralayıp en
// çok hareket edenleri öne çıkarıyor. Amaç: kullanıcının "bugün ne oldu?"
// sorusuna tek bakışta cevap bulup sayfada biraz daha vakit geçirmesi.

import Link from "next/link";
import { TrendUp, TrendDown } from "@phosphor-icons/react/dist/ssr";
import type { PriceItem, PriceSnapshot } from "@/lib/prices";
import { formatTL, formatTime } from "@/lib/format";
import { useLivePrices } from "@/lib/useLivePrices";
import { getPriceHref } from "@/lib/priceContent";
import StaleBadge from "@/components/StaleBadge";

const LIST_SIZE = 5;

export default function DailyChangeTable({
  initialData,
}: {
  initialData: PriceSnapshot;
}) {
  const { data, stale } = useLivePrices(initialData);

  // Sadece GERÇEKTEN yükselen/düşen kalemler listelenir. Önceden bütün
  // kalemler değişime göre sıralanıp en alttaki 5'i "Düşenler" diye
  // gösteriliyordu; her şeyin artıda olduğu günlerde bu, "+0,07% ile en
  // çok düşen" gibi çelişkili (yeşil değer + kırmızı/aşağı ton) bir kutu
  // üretiyordu. Artık 0 veya pozitif kalem "Düşenler"e hiç girmiyor.
  const sorted = [...data.items].sort((a, b) => b.changePercent - a.changePercent);
  const gainers = sorted.filter((i) => i.changePercent > 0).slice(0, LIST_SIZE);
  const losers = sorted
    .filter((i) => i.changePercent < 0)
    .slice(-LIST_SIZE)
    .reverse();

  return (
    <div className="rounded-2xl border border-border bg-surface shadow-sm">
      <div className="flex items-center justify-between gap-2 border-b border-border px-4 py-3">
        {/* h3: bu bileşen artık kendi SectionHeading'i olmayan bir
            konumda (Grafik bölümünün yanında) — GoldPriceChart'ın kendi
            h3'üyle aynı hiyerarşi seviyesinde, başlık gezinmesinde
            görünsün diye gerçek bir heading elementi. */}
        <h3 className="text-sm font-semibold text-ink">Günlük Değişim</h3>
        <span className="flex items-center gap-2 text-xs text-muted">
          {stale && <StaleBadge />}
          {formatTime(data.sourceUpdatedAt)} itibarıyla
        </span>
      </div>
      <div className="grid divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
        <ChangeList
          title="En Çok Yükselenler"
          items={gainers}
          tone="up"
          emptyText="Bugün yükselen kalem yok."
        />
        <ChangeList
          title="En Çok Düşenler"
          items={losers}
          tone="down"
          emptyText="Bugün düşen kalem yok."
        />
      </div>
    </div>
  );
}

function ChangeList({
  title,
  items,
  tone,
  emptyText,
}: {
  title: string;
  items: PriceItem[];
  tone: "up" | "down";
  emptyText: string;
}) {
  return (
    <div className="p-4">
      <p
        className={
          "flex items-center gap-2 text-xs font-semibold uppercase tracking-wide " +
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
      {items.length === 0 && (
        <p className="mt-3 text-sm text-muted">{emptyText}</p>
      )}
      <ol className="mt-3 space-y-3">
        {items.map((item, i) => {
          const href = getPriceHref(item.key);
          return (
            <li key={item.key} className="flex items-center justify-between gap-3 text-sm">
              <span className="flex min-w-0 items-center gap-2">
                <span className="w-4 shrink-0 text-xs tabular-nums text-muted">{i + 1}</span>
                {href ? (
                  <Link href={href} className="truncate text-ink hover:text-brand hover:underline">
                    {item.label}
                  </Link>
                ) : (
                  <span className="truncate text-ink">{item.label}</span>
                )}
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
          );
        })}
      </ol>
    </div>
  );
}
