// Bilgi talep formunun paylaşılan sabitleri. Ayrı dosyada çünkü
// "use server" dosyaları (infoRequest.ts) yalnızca async fonksiyon
// export edebilir — sabitler burada durur, hem sunucu action'ı hem de
// istemci form bileşeni buradan okur.

export const KONULAR = [
  "Altın / döviz fiyatı",
  "Kuyumcu önerisi",
  "Reklam / işletme tanıtımı",
  "Site hakkında geri bildirim",
  "Diğer",
] as const;

export type Konu = (typeof KONULAR)[number];

// URL dostu kısa anahtarlar -> KONULAR değerleri. `/bilgi-talebi?konu=reklam`
// gibi bir bağlantı formun "Konu" alanını doğru ön seçsin diye (Türkçe,
// boşluklu/eğik çizgili KONULAR değerlerini query string'e koymak yerine).
export const KONU_SLUGS: Record<string, Konu> = {
  fiyat: "Altın / döviz fiyatı",
  kuyumcu: "Kuyumcu önerisi",
  reklam: "Reklam / işletme tanıtımı",
  "geri-bildirim": "Site hakkında geri bildirim",
  diger: "Diğer",
};

export function resolveKonuSlug(slug: string | undefined): Konu | undefined {
  if (!slug) return undefined;
  return KONU_SLUGS[slug];
}
