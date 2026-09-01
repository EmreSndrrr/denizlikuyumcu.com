"use client";

// "Tüm Altın Çeşitleri" tablosu: ana 6 altın + ek türler (ata, reşat,
// gremse, 18/14 ayar) tek bir aranabilir/filtrelenebilir/sıralanabilir
// tabloda. Kart ızgarası yerine gerçek bir <table> kullanıyoruz — 15
// kalemlik bir listede tablo, kart ızgarasından çok daha taranabilir.
//
// Not: satır tıklandığında detay paneli ve satır başına 7 günlük mini
// grafik bu geçişte kapsam dışı bırakıldı (bilinen, sonraki bir pass'e
// bırakılan iş) — arama, kategori filtresi, sabit başlık, mobilde
// alış/satış sekmesi ve favoriler eklendi.

import { useEffect, useMemo, useState } from "react";
import {
  CaretUp,
  CaretDown,
  TrendUp,
  TrendDown,
  MagnifyingGlass,
  Star,
} from "@phosphor-icons/react/dist/ssr";
import {
  filterSnapshot,
  ALL_GOLD_TYPES,
  type PriceItem,
  type PriceSnapshot,
} from "@/lib/prices";
import { formatTL, formatTime } from "@/lib/format";
import { useLivePrices } from "@/lib/useLivePrices";
import { usePriceFlash } from "@/lib/usePriceFlash";
import StaleBadge from "@/components/StaleBadge";

type SortKey = "label" | "buy" | "sell" | "changePercent";
type Category = "all" | "gram" | "ziynet";

const GRAM_KEYS = new Set([
  "gram-altin",
  "22-ayar-bilezik",
  "18-ayar-altin",
  "14-ayar-altin",
]);

function categoryOf(key: string): Exclude<Category, "all"> {
  return GRAM_KEYS.has(key) ? "gram" : "ziynet";
}

const FAVORITES_KEY = "gold-table-favorites";

function loadFavorites(): Set<string> {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

const selectAllGold = (s: PriceSnapshot) => filterSnapshot(s, ALL_GOLD_TYPES);

export default function GoldVarietiesTable({
  initialData,
}: {
  initialData: PriceSnapshot;
}) {
  const { data, stale } = useLivePrices(initialData, selectAllGold);
  const flashKeys = usePriceFlash(data.items);
  const [sortKey, setSortKey] = useState<SortKey>("sell");
  const [sortDesc, setSortDesc] = useState(true);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("all");
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  // Mobilde iki fiyat sütunu (Alış/Satış) yer kaplıyor — küçük ekranda tek
  // seferde birini gösterip sekmeyle değiştiriyoruz.
  const [mobilePriceView, setMobilePriceView] = useState<"buy" | "sell">("sell");

  useEffect(() => {
    setFavorites(loadFavorites());
  }, []);

  function toggleFavorite(key: string) {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      try {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify([...next]));
      } catch {
        // localStorage kapalıysa sessizce yoksay.
      }
      return next;
    });
  }

  const filtered = useMemo(() => {
    return data.items.filter((item) => {
      if (category !== "all" && categoryOf(item.key) !== category) return false;
      if (favoritesOnly && !favorites.has(item.key)) return false;
      if (query.trim() && !item.label.toLocaleLowerCase("tr").includes(query.toLocaleLowerCase("tr")))
        return false;
      return true;
    });
  }, [data.items, category, favoritesOnly, favorites, query]);

  const sorted = useMemo(() => {
    const rows = [...filtered];
    rows.sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      const cmp =
        typeof av === "string" ? av.localeCompare(bv as string) : (av as number) - (bv as number);
      return sortDesc ? -cmp : cmp;
    });
    return rows;
  }, [filtered, sortKey, sortDesc]);

  function toggleSort(key: SortKey) {
    if (key === sortKey) {
      setSortDesc((d) => !d);
    } else {
      setSortKey(key);
      setSortDesc(true);
    }
  }

  const columns: { key: SortKey; label: string; align: "left" | "right" }[] = [
    { key: "label", label: "Ürün", align: "left" },
    { key: "buy", label: "Alış", align: "right" },
    { key: "sell", label: "Satış", align: "right" },
    { key: "changePercent", label: "Değişim", align: "right" },
  ];

  return (
    <div className="rounded-2xl border border-border bg-surface shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-3">
        {/* Sayfa-seviyesi <SectionHeading> zaten bu bölümün h2'si. */}
        <p className="text-sm font-semibold text-ink">Tüm Altın Çeşitleri</p>
        <span className="flex items-center gap-2 text-xs text-muted">
          {stale && <StaleBadge />}
          {formatTime(data.updatedAt)} itibarıyla
        </span>
      </div>

      {/* Arama + kategori filtreleri */}
      <div className="flex flex-wrap items-center gap-2 border-b border-border px-5 py-3">
        <div className="flex min-w-[160px] flex-1 items-center gap-2 rounded-lg border border-border px-3 py-1.5">
          <MagnifyingGlass aria-hidden="true" size={14} className="text-muted" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ürün ara..."
            className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-muted"
          />
        </div>
        <div className="flex gap-1.5">
          {([
            { key: "all", label: "Tümü" },
            { key: "gram", label: "Gram" },
            { key: "ziynet", label: "Ziynet" },
          ] as const).map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() => setCategory(c.key)}
              aria-pressed={category === c.key}
              className={
                "rounded-full border px-3 py-1 text-xs font-medium transition-colors " +
                (category === c.key
                  ? "border-ink bg-ink text-surface"
                  : "border-border text-muted hover:text-ink")
              }
            >
              {c.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setFavoritesOnly((v) => !v)}
            aria-pressed={favoritesOnly}
            className={
              "flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium transition-colors " +
              (favoritesOnly
                ? "border-brand bg-brand/10 text-brand"
                : "border-border text-muted hover:text-ink")
            }
          >
            <Star aria-hidden="true" size={12} weight={favoritesOnly ? "fill" : "regular"} />
            Favoriler
          </button>
        </div>
        {/* Mobilde Alış/Satış sekmesi */}
        <div className="flex gap-1 sm:hidden">
          {(["buy", "sell"] as const).map((side) => (
            <button
              key={side}
              type="button"
              onClick={() => setMobilePriceView(side)}
              aria-pressed={mobilePriceView === side}
              className={
                "rounded-full border px-3 py-1 text-xs font-medium transition-colors " +
                (mobilePriceView === side
                  ? "border-ink bg-ink text-surface"
                  : "border-border text-muted")
              }
            >
              {side === "sell" ? "Satış" : "Alış"}
            </button>
          ))}
        </div>
      </div>

      <div className="max-h-[440px] overflow-auto">
        {/* min-w sadece sm+ ekranlarda: mobilde zaten tek fiyat sütunu
            gösteriliyor (Alış/Satış sekmesi), 480px zorlamak gereksiz
            yatay taşmaya yol açıyordu. */}
        <table className="w-full text-sm sm:min-w-[480px]">
          <thead className="sticky top-0 z-10 bg-surface">
            <tr className="border-b border-border text-xs text-muted">
              <th scope="col" className="w-9 px-3 py-2">
                <span className="sr-only">Favori</span>
              </th>
              {columns.map((col) => {
                const hiddenOnMobile =
                  (col.key === "buy" && mobilePriceView !== "buy") ||
                  (col.key === "sell" && mobilePriceView !== "sell");
                return (
                  <th
                    key={col.key}
                    scope="col"
                    className={
                      "px-3 py-2 font-medium sm:px-5 " +
                      (hiddenOnMobile ? "hidden sm:table-cell" : "")
                    }
                  >
                    <button
                      type="button"
                      onClick={() => toggleSort(col.key)}
                      aria-sort={
                        sortKey === col.key ? (sortDesc ? "descending" : "ascending") : "none"
                      }
                      className={
                        "flex items-center gap-1 rounded-sm py-1 transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand " +
                        (col.align === "right" ? "ml-auto flex-row-reverse" : "")
                      }
                    >
                      {col.label}
                      {sortKey === col.key &&
                        (sortDesc ? (
                          <CaretDown aria-hidden="true" size={11} weight="bold" />
                        ) : (
                          <CaretUp aria-hidden="true" size={11} weight="bold" />
                        ))}
                    </button>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {sorted.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-5 py-8 text-center text-sm text-muted">
                  Sonuç bulunamadı.
                </td>
              </tr>
            ) : (
              sorted.map((item) => (
                <GoldRow
                  key={item.key}
                  item={item}
                  flash={flashKeys[item.key]}
                  mobilePriceView={mobilePriceView}
                  isFavorite={favorites.has(item.key)}
                  onToggleFavorite={() => toggleFavorite(item.key)}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
      <p className="px-5 py-3 text-[11px] text-muted/70">
        Fiyatlar bilgilendirme amaçlıdır, yatırım tavsiyesi değildir. Sütun
        başlıklarına tıklayarak sıralayabilirsiniz.
      </p>
    </div>
  );
}

function GoldRow({
  item,
  flash,
  mobilePriceView,
  isFavorite,
  onToggleFavorite,
}: {
  item: PriceItem;
  flash?: "up" | "down";
  mobilePriceView: "buy" | "sell";
  isFavorite: boolean;
  onToggleFavorite: () => void;
}) {
  const isUp = item.changePercent >= 0;
  return (
    <tr
      className={
        "hover:bg-bg " +
        (flash === "up" ? "price-flash-up" : flash === "down" ? "price-flash-down" : "")
      }
    >
      <td className="px-3 py-2.5">
        <button
          type="button"
          onClick={onToggleFavorite}
          aria-pressed={isFavorite}
          aria-label={isFavorite ? `${item.label} favorilerden çıkar` : `${item.label} favorilere ekle`}
          className="flex h-6 w-6 items-center justify-center text-muted hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <Star aria-hidden="true" size={15} weight={isFavorite ? "fill" : "regular"} className={isFavorite ? "text-gold" : ""} />
        </button>
      </td>
      <td className="whitespace-nowrap px-3 py-2.5 font-medium text-ink sm:px-5">
        {item.label}
      </td>
      <td
        className={
          "px-3 py-2.5 text-right tabular-nums text-muted sm:px-5 " +
          (mobilePriceView !== "buy" ? "hidden sm:table-cell" : "")
        }
      >
        {formatTL(item.buy)}
      </td>
      <td
        className={
          "px-3 py-2.5 text-right tabular-nums font-semibold text-ink sm:px-5 " +
          (mobilePriceView !== "sell" ? "hidden sm:table-cell" : "")
        }
      >
        {formatTL(item.sell)}
      </td>
      <td
        className={
          "px-3 py-2.5 text-right tabular-nums font-medium sm:px-5 " +
          (isUp ? "text-positive" : "text-negative")
        }
      >
        <span className="inline-flex items-center gap-1">
          {isUp ? (
            <TrendUp aria-hidden="true" size={12} weight="bold" />
          ) : (
            <TrendDown aria-hidden="true" size={12} weight="bold" />
          )}
          {Math.abs(item.changePercent).toFixed(2)}%
        </span>
      </td>
    </tr>
  );
}
