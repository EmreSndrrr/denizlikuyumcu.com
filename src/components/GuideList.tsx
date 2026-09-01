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
  // Anasayfada bu liste bir <SectionHeading> (h2) altında oturuyor,
  // öğe başlıkları h3 olmalı. /rehber dizin sayfasında ise doğrudan
  // sayfanın h1'inin altında — orada h2 geçilirse (h1 -> h3) hiyerarşi
  // atlanmış olur, bu yüzden çağıran taraf headingLevel="h2" geçebiliyor.
  headingLevel: Heading = "h3",
}: {
  items: { no: string; category: string; href: string; title: string; desc: string }[];
  headingLevel?: "h2" | "h3";
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
              {/* Liste tekrar eden makale öğelerinden oluşuyor — başlık
                  gezinmesi yapan ekran okuyucu kullanıcıları aralarında
                  atlayabilsin diye gerçek bir heading (seviyesi çağıran
                  sayfanın kendi hiyerarşisine göre değişir). */}
              <Heading className="mt-1 font-serif text-lg font-medium text-ink transition-colors group-hover:text-brand sm:text-xl">
                {item.title}
              </Heading>
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
