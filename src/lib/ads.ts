// Reklam alanları — şimdilik kod içinde bir liste olarak tutuluyor.
// Reklam veren kuyumcu sayısı arttıkça bu dosyayı bir veritabanına
// (örn. SQLite/Postgres) veya basit bir admin paneline taşımak mantıklı
// olacak. Şimdiden o karmaşıklığı eklemiyoruz.
//
// Alanlar bilinçli olarak bir "kuyumcu kartı" şeklinde: görsel, ilçe,
// açık/kapalı durumu, telefon, yol tarifi — bkz. src/components/AdSlot.tsx.
// Reklam veren yokken de aynı kart formatı ÖRNEK olarak gösteriliyor, ki
// potansiyel reklam verenler tam olarak ne alacaklarını görsün.

export type AdPosition = "hero-banner" | "sidebar" | "in-content" | "footer-banner";

export type AdSlot = {
  id: string;
  position: AdPosition;
  active: boolean;
  advertiserName: string;
  district: string;
  headline: string;
  href: string;
  phone?: string;
  openNow?: boolean;
  imageUrl?: string;
};

export const adSlots: AdSlot[] = [];

export function getAdForPosition(position: AdPosition): AdSlot | undefined {
  return adSlots.find((ad) => ad.active && ad.position === position);
}
