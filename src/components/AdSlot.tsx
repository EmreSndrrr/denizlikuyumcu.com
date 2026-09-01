import { getAdForPosition, type AdPosition } from "@/lib/ads";
import JewelerProfileCard from "@/components/JewelerProfileCard";

// Gerçek bir reklam varsa (adSlots içinde bu pozisyon için aktif bir
// kayıt), aynı JewelerProfileCard'ı "Sponsorlu" etiketiyle gösterir.
//
// GERÇEK REKLAM YOKSA HİÇBİR ŞEY RENDER ETMEZ (return null). Önceki
// tasarımda burada "ÖRNEK — BU ALAN SİZİN OLABİLİR" + "Bu Alanı Alın"
// çağrısı olan bir öz-tanıtım kartı vardı; tasarım briefi bunu açıkça
// yasaklıyor ("'Bu alanı alın' butonu kullanıcıya gösterilmemeli",
// "Reklamveren çağrısı kullanıcı yolculuğundan ayrı tutulmalı"). O
// çağrı artık SADECE /reklam-ver sayfasında — burada, gerçek ziyaretçi
// içeriğinin içinde değil.
export default function AdSlot({ position }: { position: AdPosition }) {
  const ad = getAdForPosition(position);
  if (!ad) return null;

  return (
    <JewelerProfileCard
      name={ad.advertiserName}
      district={ad.district}
      description={ad.headline}
      tag="Sponsorlu"
      phone={ad.phone}
      openNow={ad.openNow}
      profileHref={ad.href}
    />
  );
}
