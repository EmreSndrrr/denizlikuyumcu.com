// Tüm altın/döviz kalemlerinin sabit meta bilgisi (anahtar, etiket, birim,
// tip). TEK KAYNAK: hem mock veri (lib/prices.ts), hem canlı ayrıştırma
// (lib/truncgil.ts), hem de veritabanından okuma (lib/priceHistory.ts) bu
// listeyi kullanır — böylece "hangi kalemler var" bilgisi tek yerde durur.
//
// Bu dosya saf veridir (Node bağımlılığı yok) — client bileşenleri de
// güvenle import edebilir.

import type { PriceItem } from "@/lib/prices";

export type InstrumentMeta = Pick<PriceItem, "key" | "label" | "unit" | "type">;

export const INSTRUMENTS: InstrumentMeta[] = [
  { key: "gram-altin", label: "Gram Altın", unit: "TL", type: "gold" },
  { key: "ceyrek-altin", label: "Çeyrek Altın", unit: "TL", type: "gold" },
  { key: "yarim-altin", label: "Yarım Altın", unit: "TL", type: "gold" },
  { key: "tam-altin", label: "Tam Altın", unit: "TL", type: "gold" },
  { key: "cumhuriyet-altini", label: "Cumhuriyet Altını", unit: "TL", type: "gold" },
  { key: "22-ayar-bilezik", label: "22 Ayar Bilezik", unit: "TL", type: "gold" },
  { key: "usd-try", label: "Dolar", unit: "TL", type: "currency" },
  { key: "eur-try", label: "Euro", unit: "TL", type: "currency" },
  { key: "gbp-try", label: "Sterlin", unit: "TL", type: "currency-extra" },
  { key: "chf-try", label: "İsviçre Frangı", unit: "TL", type: "currency-extra" },
  { key: "sar-try", label: "Suudi Riyali", unit: "TL", type: "currency-extra" },
  { key: "18-ayar-altin", label: "18 Ayar Altın (gr)", unit: "TL", type: "gold-extra" },
  { key: "14-ayar-altin", label: "14 Ayar Altın (gr)", unit: "TL", type: "gold-extra" },
  { key: "ceyrek-ata", label: "Çeyrek Ata Altın", unit: "TL", type: "gold-extra" },
  { key: "yarim-ata", label: "Yarım Ata Altın", unit: "TL", type: "gold-extra" },
  { key: "tam-ata", label: "Tam Ata Altın", unit: "TL", type: "gold-extra" },
  { key: "ceyrek-resat", label: "Çeyrek Reşat Altın", unit: "TL", type: "gold-extra" },
  { key: "yarim-resat", label: "Yarım Reşat Altın", unit: "TL", type: "gold-extra" },
  { key: "tam-resat", label: "Tam Reşat Altın", unit: "TL", type: "gold-extra" },
  { key: "gremse-altin", label: "Gremse Altın", unit: "TL", type: "gold-extra" },
  { key: "ons-altin", label: "Ons Altın", unit: "USD", type: "ons" },
];

export const INSTRUMENT_META: Record<string, InstrumentMeta> = Object.fromEntries(
  INSTRUMENTS.map((i) => [i.key, i]),
);

// Truncgil'in yalnızca TAM boy verdiği kalemlerden çeyrek/yarım türetirken
// kullanılan has-altın gramaj oranı (çeyrek ≈ 1,75g / yarım ≈ 3,5g /
// tam ≈ 7g). Bu kalemler arayüzde "hesaplanmış değer" olarak işaretlenir.
export const DERIVED_INSTRUMENTS: Set<string> = new Set([
  "ceyrek-ata",
  "yarim-ata",
  "ceyrek-resat",
  "yarim-resat",
]);
