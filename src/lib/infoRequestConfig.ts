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
