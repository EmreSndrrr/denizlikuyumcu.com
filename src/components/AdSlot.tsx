import Link from "next/link";
import { ArrowRight, Storefront } from "@phosphor-icons/react/dist/ssr";
import { getAdForPosition, type AdPosition } from "@/lib/ads";
import JewelerProfileCard from "@/components/JewelerProfileCard";

// Gerçek bir reklam varsa (adSlots içinde bu pozisyon için aktif bir
// kayıt), aynı JewelerProfileCard'ı "Sponsorlu" etiketiyle gösterir.
//
// Reklam yoksa:
//  - fallback verilmemişse HİÇBİR ŞEY render etmez (return null) — rehber
//    makaleleri ve genel içerik alanları temiz kalsın diye.
//  - fallback="promo" ise, o alanın satın alınabileceğini belirten SADE,
//    açıkça "reklam alanı" olarak etiketli bir kart gösterir. Bu, sahte
//    bir işletme kartı DEĞİLDİR; yalnızca fiyat sayfalarının kenar
//    sütununda kullanılıyor (bkz. PriceDetailPage) — alışveriş niyeti ve
//    kuyumcu sahibi trafiğinin en yüksek olduğu yer.
//
// (Not: 2026 tasarım briefi başta bu "bu alanı alın" çağrısını
// yasaklıyordu; kullanıcı kararıyla, yalnızca fiyat sayfalarıyla sınırlı
// ve net etiketli olacak şekilde geri açıldı — bkz. PRODUCT.md.)
export default function AdSlot({
  position,
  fallback,
}: {
  position: AdPosition;
  fallback?: "promo";
}) {
  const ad = getAdForPosition(position);

  if (ad) {
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

  if (fallback !== "promo") return null;

  return (
    <div className="rounded-2xl border border-dashed border-border bg-surface p-4">
      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-muted">
        <Storefront aria-hidden="true" size={13} weight="bold" />
        Reklam alanı
      </div>
      <p className="mt-2 text-sm text-ink">
        Bu alan Denizli&apos;deki bir kuyumcuya ayrılabilir.
      </p>
      <p className="mt-1 text-sm text-muted">
        Fiyat sayfalarını takip eden yerel ziyaretçilere işletmenizi tanıtın.
      </p>
      <Link
        href="/reklam-ver"
        className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
      >
        Reklam seçenekleri
        <ArrowRight aria-hidden="true" size={14} />
      </Link>
    </div>
  );
}
