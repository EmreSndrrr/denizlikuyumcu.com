import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Reveal from "@/components/Reveal";

// Rehber içeriklerinin ORTAK sunumu — tekrar eden beyaz kartlar DEĞİL,
// editoryal bir liste: numara + kategori etiketi + başlık (Fraunces
// serif, SADECE burada kullanılıyor) + kısa açıklama + ok — ince
// çizgilerle ayrılmış satırlar. Finans tablolarından bilinçli olarak
// farklı bir görsel dil (brief). Hem anasayfadaki kısa özet hem
// /rehber dizin sayfası bunu kullanıyor.
export default function GuideList({
  items,
}: {
  items: { no: string; category: string; href: string; title: string; desc: string }[];
}) {
  return (
    <div className="mt-6 divide-y divide-border border-y border-border">
      {items.map((item, i) => (
        <Reveal key={item.href} delay={i * 0.04}>
          <Link
            href={item.href}
            className="group flex items-start gap-4 py-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:items-center sm:gap-6"
          >
            <span className="hidden shrink-0 font-serif text-2xl text-muted/40 sm:block">
              {item.no}
            </span>
            <div className="min-w-0 flex-1">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-brand">
                {item.category}
              </span>
              <p className="mt-1 font-serif text-lg font-medium text-ink transition-colors group-hover:text-brand sm:text-xl">
                {item.title}
              </p>
              <p className="mt-1 text-sm text-muted">{item.desc}</p>
            </div>
            <ArrowRight
              aria-hidden="true"
              size={18}
              className="mt-1 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-brand sm:mt-0"
            />
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
