// Reklam alanları — şimdilik kod içinde bir liste olarak tutuluyor.
// Reklam veren kuyumcu sayısı arttıkça bu dosyayı bir veritabanına
// (örn. SQLite/Postgres) veya basit bir admin paneline taşımak mantıklı
// olacak. Şimdiden o karmaşıklığı eklemiyoruz.

export type AdPosition = "hero-banner" | "sidebar" | "in-content" | "footer-banner";

export type AdSlot = {
  id: string;
  position: AdPosition;
  active: boolean;
  advertiserName: string;
  headline: string;
  href: string;
  imageUrl?: string;
};

// Örnek/placeholder reklamlar. Gerçek reklam veren olmadığında AdSlot
// bileşeni bu alanı otomatik olarak "Reklamınız burada olabilir" satış
// çağrısına çeviriyor (bkz. src/components/AdSlot.tsx).
export const adSlots: AdSlot[] = [];

export function getAdForPosition(position: AdPosition): AdSlot | undefined {
  return adSlots.find((ad) => ad.active && ad.position === position);
}
