"use client";

// Canlı altın/döviz hesaplama aracı. İki mod var:
//  - "Ürüne Göre": listedeki bir kalemi (gram altın, çeyrek, dolar vb.)
//    adet/gram ile çarpıp toplam tutarı gösterir.
//  - "Ayara Göre": girilen gramajı seçilen ayara (milyem) göre has altın
//    karşılığına çevirir — /rehber/altin-ayari-nedir makalesindeki
//    kavramın doğrudan uygulaması.
// Fiyatlar diğer bileşenlerle aynı şekilde canlı tutuluyor: sunucudan
// gelen ilk veriyle render edilip sonra periyodik olarak tazeleniyor
// (useLivePrices hook'u).

import { useMemo, useState } from "react";
import { Calculator } from "@phosphor-icons/react/dist/ssr";
import { KARAT_MILYEM, type PriceSnapshot } from "@/lib/prices";
import { formatTL } from "@/lib/format";
import { useLivePrices } from "@/lib/useLivePrices";
import StaleBadge from "@/components/StaleBadge";

type Mode = "product" | "karat";

export default function GoldCalculator({
  initialData,
}: {
  initialData: PriceSnapshot;
}) {
  const { data, stale } = useLivePrices(initialData);
  const [mode, setMode] = useState<Mode>("product");
  const [priceSide, setPriceSide] = useState<"sell" | "buy">("sell");

  // Mod A: ürüne göre
  const [selectedKey, setSelectedKey] = useState(initialData.items[0]?.key ?? "");
  const [quantity, setQuantity] = useState("1");

  // Mod B: ayara göre (gram girilir, has karşılığı hesaplanır)
  const [grams, setGrams] = useState("1");
  const [karat, setKarat] = useState<keyof typeof KARAT_MILYEM>(22);

  const selectedItem = data.items.find((i) => i.key === selectedKey) ?? data.items[0];
  const gramAltin = data.items.find((i) => i.key === "gram-altin");

  const productResult = useMemo(() => {
    const qty = Number(quantity.replace(",", "."));
    if (!selectedItem || !Number.isFinite(qty) || qty < 0) return null;
    return qty * selectedItem[priceSide];
  }, [selectedItem, quantity, priceSide]);

  const karatResult = useMemo(() => {
    const g = Number(grams.replace(",", "."));
    if (!gramAltin || !Number.isFinite(g) || g < 0) return null;
    return g * gramAltin[priceSide] * KARAT_MILYEM[karat];
  }, [gramAltin, grams, karat, priceSide]);

  return (
    <div className="rounded-2xl border border-border bg-surface shadow-sm">
      <div className="flex items-center justify-between gap-2 border-b border-border px-5 py-4">
        <div className="flex items-center gap-2">
          <Calculator aria-hidden="true" size={20} weight="bold" className="text-brand" />
          {/* Sayfa-seviyesi <SectionHeading> zaten bu bölümün h2'si — burada
              tekrar bir başlık elementi açmıyoruz (yinelenen heading olmasın). */}
          <p className="text-base font-semibold text-ink">Altın Hesaplama Aracı</p>
        </div>
        {stale && <StaleBadge />}
      </div>

      <div className="p-5">
        {/* Mod seçimi */}
        <div
          role="tablist"
          aria-label="Hesaplama modu"
          className="inline-flex rounded-full border border-border p-1"
        >
          <button
            type="button"
            role="tab"
            aria-selected={mode === "product"}
            onClick={() => setMode("product")}
            className={
              "rounded-full px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand " +
              (mode === "product" ? "bg-ink text-surface" : "text-muted hover:text-ink")
            }
          >
            Ürüne Göre
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === "karat"}
            onClick={() => setMode("karat")}
            className={
              "rounded-full px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand " +
              (mode === "karat" ? "bg-ink text-surface" : "text-muted hover:text-ink")
            }
          >
            Ayara Göre (Gram)
          </button>
        </div>

        {/* Alış / Satış seçimi — her iki modda da geçerli */}
        <fieldset className="mt-4">
          <legend className="text-xs font-medium text-muted">Fiyat türü</legend>
          <div className="mt-1.5 flex gap-4 text-sm text-ink">
            {(["sell", "buy"] as const).map((side) => (
              <label key={side} className="flex items-center gap-1.5">
                <input
                  type="radio"
                  name="price-side"
                  checked={priceSide === side}
                  onChange={() => setPriceSide(side)}
                  className="h-4 w-4 accent-brand"
                />
                {side === "sell" ? "Satış" : "Alış"}
              </label>
            ))}
          </div>
        </fieldset>

        {mode === "product" ? (
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="calc-product" className="text-xs font-medium text-muted">
                Ürün / Kur
              </label>
              <select
                id="calc-product"
                value={selectedKey}
                onChange={(e) => setSelectedKey(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-ink focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand"
              >
                {data.items.map((item) => (
                  <option key={item.key} value={item.key}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="calc-quantity" className="text-xs font-medium text-muted">
                Adet / Gram
              </label>
              <input
                id="calc-quantity"
                type="number"
                inputMode="decimal"
                min={0}
                step="0.01"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm tabular-nums text-ink focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand"
              />
            </div>
          </div>
        ) : (
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="calc-grams" className="text-xs font-medium text-muted">
                Gram
              </label>
              <input
                id="calc-grams"
                type="number"
                inputMode="decimal"
                min={0}
                step="0.01"
                value={grams}
                onChange={(e) => setGrams(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm tabular-nums text-ink focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand"
              />
            </div>
            <div>
              <label htmlFor="calc-karat" className="text-xs font-medium text-muted">
                Ayar
              </label>
              <select
                id="calc-karat"
                value={karat}
                onChange={(e) =>
                  setKarat(Number(e.target.value) as keyof typeof KARAT_MILYEM)
                }
                className="mt-1.5 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-ink focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand"
              >
                <option value={24}>24 Ayar (Has)</option>
                <option value={22}>22 Ayar</option>
                <option value={18}>18 Ayar</option>
                <option value={14}>14 Ayar</option>
              </select>
            </div>
          </div>
        )}

        {/* Sonuç */}
        <div className="mt-5 rounded-xl bg-gold/10 p-4">
          <p className="text-xs text-muted">Tahmini tutar</p>
          <p className="mt-1 text-2xl font-extrabold tabular-nums text-ink">
            {mode === "product"
              ? productResult !== null
                ? `${formatTL(productResult)} TL`
                : "—"
              : karatResult !== null
                ? `${formatTL(karatResult)} TL`
                : "—"}
          </p>
        </div>

        <p className="mt-3 text-[11px] text-muted/70">
          Bu hesaplama tahminidir; işçilik ve kuyumcu marjı dahil değildir.
          Kesin fiyat için kuyumcunuzla görüşün.
        </p>
      </div>
    </div>
  );
}
