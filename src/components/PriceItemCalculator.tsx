"use client";

// Fiyat detay sayfalarının (/altin/[slug], /doviz/[slug]) kendine özel,
// tek kaleme odaklı hesaplama bölümü. Anasayfadaki GoldCalculator'ın
// "Ürüne Göre" modunun sadeleştirilmiş hâli — burada ürün zaten sayfanın
// kendisi olduğu için bir seçim kutusuna gerek yok, sadece miktar ve
// alış/satış seçimi var. Aynı useLivePrices veri katmanını kullanır;
// ayrı bir hesap mantığı YOK.

import { useMemo, useState } from "react";
import { Calculator } from "@phosphor-icons/react/dist/ssr";
import { useLivePrices } from "@/lib/useLivePrices";
import { formatTL, formatUSD } from "@/lib/format";
import type { PriceSnapshot } from "@/lib/prices";

export default function PriceItemCalculator({
  itemKey,
  initialData,
}: {
  itemKey: string;
  initialData: PriceSnapshot;
}) {
  const { data } = useLivePrices(initialData);
  const item = data.items.find((i) => i.key === itemKey);
  const [priceSide, setPriceSide] = useState<"sell" | "buy">("sell");
  const [quantity, setQuantity] = useState("1");

  const result = useMemo(() => {
    if (!item) return null;
    const qty = Number(quantity.replace(",", "."));
    if (!Number.isFinite(qty) || qty < 0) return null;
    return qty * item[priceSide];
  }, [item, quantity, priceSide]);

  if (!item) return null;

  const isUsd = item.unit === "USD";
  const format = isUsd ? formatUSD : formatTL;
  const isCurrency = item.type === "currency" || item.type === "currency-extra";
  const quantityLabel = isCurrency ? "Miktar" : isUsd ? "Ons" : "Adet / Gram";

  return (
    <div className="rounded-2xl border border-border bg-surface shadow-sm">
      <div className="flex items-center gap-2 border-b border-border px-5 py-4">
        <Calculator aria-hidden="true" size={20} weight="bold" className="text-brand" />
        <p className="text-base font-semibold text-ink">{item.label} Hesaplama</p>
      </div>

      <div className="p-5">
        <fieldset>
          <legend className="text-xs font-medium text-muted">Fiyat türü</legend>
          <div className="mt-1.5 flex gap-4 text-sm text-ink">
            {(["sell", "buy"] as const).map((side) => (
              <label key={side} className="flex items-center gap-1.5">
                <input
                  type="radio"
                  name={`price-side-${item.key}`}
                  checked={priceSide === side}
                  onChange={() => setPriceSide(side)}
                  className="h-4 w-4 accent-brand"
                />
                {side === "sell" ? "Satış" : "Alış"}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="mt-4 max-w-[220px]">
          <label htmlFor={`calc-qty-${item.key}`} className="text-xs font-medium text-muted">
            {quantityLabel}
          </label>
          <input
            id={`calc-qty-${item.key}`}
            type="number"
            inputMode="decimal"
            min={0}
            step="0.01"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm tabular-nums text-ink focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-brand"
          />
        </div>

        <div className="mt-5 rounded-xl bg-gold/10 p-4">
          <p className="text-xs text-muted">Tahmini tutar</p>
          <p className="mt-1 text-2xl font-extrabold tabular-nums text-ink">
            {result !== null ? `${format(result)} ${isUsd ? "USD" : item.unit}` : "—"}
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
