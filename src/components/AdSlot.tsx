import Link from "next/link";
import {
  Storefront,
  MapPin,
  Phone,
  NavigationArrow,
} from "@phosphor-icons/react/dist/ssr";
import { getAdForPosition, type AdPosition } from "@/lib/ads";

// Boş envanteri satışa çeviren küçük bir trik: o pozisyon için satılmış
// aktif bir reklam yoksa, jenerik bir "reklam alanı" kutusu yerine GERÇEK
// bir sponsorlu kuyumcu kartının ÖRNEĞİNİ gösteriyoruz — potansiyel bir
// reklam veren, tam olarak ne alacağını böylece görüyor. Gerçek bir kart
// satıldığında aynı bileşen, gerçek görsel/ilçe/telefon/yol tarifi ile
// çalışır.
export default function AdSlot({ position }: { position: AdPosition }) {
  const ad = getAdForPosition(position);
  const mapsHref = ad
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${ad.advertiserName} ${ad.district} Denizli`
      )}`
    : undefined;

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
      {!ad && (
        // Önceden köşede mutlak konumlanan bir rozetti; dar ekranlarda kart
        // içeriğiyle (Sponsorlu etiketi/işletme adı) çakışıyordu. Artık
        // kartın normal akışında, kendi satırında duran bir üst şerit —
        // hiçbir genişlikte içerikle üst üste binmiyor.
        <div className="border-b border-border bg-ink px-4 py-1.5 text-center text-[10px] font-semibold uppercase tracking-wide text-surface">
          Örnek — bu alan sizin olabilir
        </div>
      )}
      <div className="flex items-stretch gap-4 p-4">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-brand">
          <Storefront aria-hidden="true" size={30} weight="bold" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-brand">
            Sponsorlu
          </p>
          <p className="mt-0.5 truncate font-bold text-ink">
            {ad ? ad.advertiserName : "Örnek Kuyumcu"}
          </p>
          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
            <span className="flex items-center gap-1">
              <MapPin aria-hidden="true" size={13} />
              {ad ? ad.district : "Bayramyeri"}, Denizli
            </span>
            <span
              className={
                "flex items-center gap-1 font-medium " +
                ((ad ? ad.openNow : true) ? "text-positive" : "text-negative")
              }
            >
              <span
                aria-hidden="true"
                className={
                  "h-1.5 w-1.5 rounded-full " +
                  ((ad ? ad.openNow : true) ? "bg-positive" : "bg-negative")
                }
              />
              {(ad ? ad.openNow : true) ? "Şu an açık" : "Kapalı"}
            </span>
          </div>
          <p className="mt-1.5 truncate text-sm text-muted">
            {ad ? ad.headline : "Kuyumcunuzun tanıtımı burada görünecek."}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {ad?.phone && (
              <a
                href={`tel:${ad.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
              >
                <Phone aria-hidden="true" size={13} weight="bold" />
                Ara
              </a>
            )}
            {ad ? (
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener sponsored"
                className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-surface transition-colors hover:bg-brand"
              >
                <NavigationArrow aria-hidden="true" size={13} weight="bold" />
                Yol Tarifi Al
              </a>
            ) : (
              <Link
                href="/reklam-ver"
                className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-surface transition-colors hover:bg-brand"
              >
                Bu Alanı Alın
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
