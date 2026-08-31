import Link from "next/link";
import { getAdForPosition, type AdPosition } from "@/lib/ads";

const sizeClasses: Record<AdPosition, string> = {
  "hero-banner": "h-24 sm:h-28",
  sidebar: "h-64",
  "in-content": "h-20",
  "footer-banner": "h-20",
};

// Bu bileşen "boş envanteri satışa çeviren" küçük bir trik içeriyor:
// O pozisyon için satılmış aktif bir reklam yoksa, rastgele bir boşluk
// göstermek yerine "Reklamınız burada olabilir" çağrısı gösteriyor.
// Böylece site trafiği az bile olsa, her sayfa kendi reklam alanını
// pazarlamış oluyor.
export default function AdSlot({ position }: { position: AdPosition }) {
  const ad = getAdForPosition(position);

  if (ad) {
    return (
      <Link
        href={ad.href}
        target="_blank"
        rel="noopener sponsored"
        className={`flex ${sizeClasses[position]} w-full items-center justify-center rounded-xl border border-amber-900/10 bg-amber-50 px-4 text-center transition-colors hover:bg-amber-100`}
      >
        <div>
          <p className="text-xs uppercase tracking-wide text-amber-700">
            Sponsorlu
          </p>
          <p className="font-semibold text-neutral-900">{ad.headline}</p>
          <p className="text-xs text-neutral-500">{ad.advertiserName}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href="/reklam-ver"
      className={`flex ${sizeClasses[position]} w-full items-center justify-center rounded-xl border border-dashed border-neutral-300 bg-neutral-50 px-4 text-center transition-colors hover:border-amber-400 hover:bg-amber-50`}
    >
      <div>
        <p className="text-sm font-semibold text-neutral-500">
          Reklamınız burada olabilir
        </p>
        <p className="text-xs text-neutral-400">Detaylar için tıklayın →</p>
      </div>
    </Link>
  );
}
