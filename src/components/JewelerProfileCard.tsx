import { MapPin, Phone, NavigationArrow, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

// Kuyumcu/reklamveren kartlarının TEK ortak sunumu — hem anasayfadaki
// "Öne Çıkan Kuyumcular" (gerçek, ücretsiz öne çıkan kayıtlar) hem
// /kuyumcular dizini hem de gerçek bir reklam satıldığında AdSlot.tsx
// tarafından kullanılıyor. Tasarım briefi: "görsel ağırlıklı profil
// kartı" + gerçek görsel yoksa monogram/marka yüzeyi (rastgele stok
// fotoğraf YOK) + yalnızca veri kaynağında olan bilgiler gösterilsin
// (sahte mesafe/açık-kapalı/doğrulanmış rozeti üretilmez).
export default function JewelerProfileCard({
  name,
  district,
  description,
  tag,
  isDemo,
  phone,
  openNow,
  profileHref,
}: {
  name: string;
  district: string;
  description: string;
  tag?: "Sponsorlu" | "Öne Çıkan";
  isDemo?: boolean;
  phone?: string;
  // undefined = veri kaynağında bu bilgi yok -> hiç gösterilmez (sahte
  // "şu an açık" üretilmez).
  openNow?: boolean;
  // Kuyumcunun kendi sitesi/profili gibi harici bir bağlantı varsa.
  profileHref?: string;
}) {
  const monogram = name.trim().charAt(0).toUpperCase() || "K";
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${name} ${district} Denizli`
  )}`;

  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand/40">
      <div className="flex items-start gap-4">
        {/* Gerçek görsel yoksa monogram/marka yüzeyi — rastgele stok
            kuyumcu fotoğrafı KULLANILMIYOR (brief). */}
        <div
          aria-hidden="true"
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[16px] bg-gold-surface text-lg font-bold text-brand"
        >
          {monogram}
        </div>
        <div className="min-w-0 flex-1">
          {tag && (
            <p className="text-[11px] font-semibold uppercase tracking-wide text-brand">
              {tag}
            </p>
          )}
          <p className="mt-0.5 truncate font-bold text-ink">{name}</p>
          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
            <span className="flex items-center gap-1">
              <MapPin aria-hidden="true" size={12} weight="bold" />
              {district}, Denizli
            </span>
            {/* openNow yalnızca veri kaynağında TANIMLIYSA gösterilir —
                bilinmeyen durum için sahte "açık" varsayılmaz. */}
            {openNow !== undefined && (
              <span
                className={
                  "flex items-center gap-1 font-medium " +
                  (openNow ? "text-positive" : "text-negative")
                }
              >
                <span
                  aria-hidden="true"
                  className={"h-1.5 w-1.5 rounded-full " + (openNow ? "bg-positive" : "bg-negative")}
                />
                {openNow ? "Şu an açık" : "Kapalı"}
              </span>
            )}
          </div>
        </div>
      </div>

      {isDemo && (
        <p className="mt-2 text-[10px] font-medium uppercase tracking-wide text-muted/70">
          Örnek kayıt
        </p>
      )}
      <p className="mt-2 flex-1 text-sm text-muted">{description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {profileHref && (
          <a
            href={profileHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[10px] bg-ink px-3 py-2 text-xs font-semibold text-surface transition-colors hover:bg-brand"
          >
            Profili İncele
            <ArrowUpRight aria-hidden="true" size={13} weight="bold" />
          </a>
        )}
        <a
          href={mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-[10px] border border-border px-3 py-2 text-xs font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
        >
          <NavigationArrow aria-hidden="true" size={13} weight="bold" />
          Yol Tarifi
        </a>
        {phone && (
          <a
            href={`tel:${phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-2 rounded-[10px] border border-border px-3 py-2 text-xs font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
          >
            <Phone aria-hidden="true" size={13} weight="bold" />
            Ara
          </a>
        )}
      </div>
    </div>
  );
}
