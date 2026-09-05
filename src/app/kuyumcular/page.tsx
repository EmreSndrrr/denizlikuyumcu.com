import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { visibleJewelers } from "@/lib/jewelers";
import Reveal from "@/components/Reveal";
import JewelerProfileCard from "@/components/JewelerProfileCard";
import JewelerSalesCta from "@/components/JewelerSalesCta";

export const metadata: Metadata = {
  title: "Denizli Kuyumcuları — Rehber ve Bölgeler",
  description:
    "Denizli'de kuyumcular nerede? Bayramyeri ve Delikliçınar çevresi, kuyumcu seçerken dikkat edilecekler (ayar damgası, fatura, tartım, işçilik) ve işletmenizi sitede tanıtma seçenekleri.",
  alternates: { canonical: "/kuyumcular" },
};

const dikkatEdilecekler: { title: string; body: string; href: string; linkText: string }[] = [
  {
    title: "Ayar damgası net olsun",
    body: "Üründe 585 (14 ayar), 750 (18 ayar) veya 916 (22 ayar) damgası ve bir darphane/marka kaşesi arayın.",
    href: "/rehber/altin-ayari-nedir",
    linkText: "Altın ayarı nedir?",
  },
  {
    title: "Fatura veya fiş isteyin",
    body: "Ayar, gram ve işçiliği belgeleyen tek resmî kanıt faturadır; ileride bozdururken ve iade/değişimde işinize yarar.",
    href: "/rehber/altin-alirken-fatura",
    linkText: "Altın alırken fatura",
  },
  {
    title: "Tartımı ve işçiliği şeffaf sorun",
    body: "Gramajı gözünüzün önünde tartılsın; işçiliğin yüzde mi gram başına sabit tutar mı olduğunu öğrenin.",
    href: "/rehber/bilezikte-iscilik-hesaplama",
    linkText: "Bilezikte işçilik hesaplama",
  },
  {
    title: "Sahte/kaplama riskine karşı temkinli olun",
    body: "Piyasa fiyatının belirgin altındaki tekliflere şüpheyle yaklaşın; gerekirse kuyumcuda ayar testi yaptırın.",
    href: "/rehber/sahte-altin-nasil-anlasilir",
    linkText: "Sahte altın nasıl anlaşılır?",
  },
  {
    title: "Bozdururken birkaç kuyumcu karşılaştırın",
    body: "O günün has altın alış fiyatını bilerek gidin, fire/işlem kesintisini net öğrenin.",
    href: "/rehber/kuyumcuda-altin-bozdururken-dikkat",
    linkText: "Altın bozdururken dikkat",
  },
];

export default function KuyumcularPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://denizlikuyumcu.com" },
      {
        "@type": "ListItem",
        position: 2,
        name: "Denizli Kuyumcuları",
        item: "https://denizlikuyumcu.com/kuyumcular",
      },
    ],
  };

  return (
    <div className="mx-auto max-w-[1240px] px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="Sayfa yolu" className="mb-4 text-xs text-muted">
        <Link href="/" className="hover:text-brand">
          Ana Sayfa
        </Link>
        <span className="mx-1.5" aria-hidden="true">
          /
        </span>
        <span>Denizli Kuyumcuları</span>
      </nav>

      <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        Denizli Kuyumcuları
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
        Denizli&apos;de kuyumcuların yoğunlaştığı bölgeler ve alışveriş öncesi
        dikkat edilmesi gereken noktalar. Doğrulanmış işletme kayıtları
        eklendikçe bu sayfada listelenecektir.
      </p>

      {visibleJewelers.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
            Kayıtlı işletmeler
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {[...visibleJewelers]
              .sort((a, b) => Number(b.featured) - Number(a.featured))
              .map((j, i) => (
                <Reveal key={j.id} delay={i * 0.04}>
                  <JewelerProfileCard
                    name={j.name}
                    district={j.district}
                    description={j.description}
                    tag={j.featured ? "Öne Çıkan" : undefined}
                    isDemo={j.isDemo}
                    phone={j.phone}
                    headingLevel="h3"
                    trackContext="kuyumcular-list"
                  />
                </Reveal>
              ))}
          </div>
        </div>
      )}

      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
          Denizli&apos;de kuyumcular nerede?
        </h2>
        <p className="mt-3 text-muted">
          Denizli&apos;de kuyumculuk büyük ölçüde şehir merkezinde toplanmıştır.
          En yoğun kümelenme{" "}
          <strong className="font-semibold text-ink">Bayramyeri</strong> ve{" "}
          <strong className="font-semibold text-ink">Delikliçınar (Çınar) Meydanı</strong>{" "}
          çevresindedir; bu bölgelerde çok sayıda kuyumcu yan yana bulunduğu
          için fiyat ve model karşılaştırması yapmak kolaydır. Merkezefendi ve
          Pamukkale ilçelerinin merkezî mahallelerinde, çarşı içlerinde ve büyük
          alışveriş merkezlerinde de kuyumcu bulmak mümkündür.
        </p>
        <p className="mt-3 text-muted">
          Denizli, çeyiz ve düğün geleneğinin güçlü olduğu bir şehir; bu yüzden
          bilezik, set (Trabzon hasırı, burma) ve alyans konusunda geniş bir
          ürün çeşitliliği bulunur.{" "}
          <Link href="/rehber/dugunde-hangi-altinlar-takilir" className="font-medium text-brand hover:underline">
            Düğünde hangi altınlar takılır
          </Link>{" "}
          rehberimize göz atabilirsiniz.
        </p>
      </section>

      <section className="mt-12 max-w-3xl">
        <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
          Kuyumcu seçerken nelere dikkat etmeli?
        </h2>
        <ul className="mt-4 divide-y divide-border border-y border-border">
          {dikkatEdilecekler.map((d) => (
            <li key={d.title} className="py-4">
              <p className="text-sm font-semibold text-ink">{d.title}</p>
              <p className="mt-1 text-sm text-muted">{d.body}</p>
              <Link
                href={d.href}
                className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
              >
                {d.linkText}
                <ArrowRight aria-hidden="true" size={14} />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-12">
        <JewelerSalesCta context="kuyumcular" />
      </div>

      <p className="mt-12 max-w-3xl text-sm text-muted">
        Not: Sitede yer alan fiyatlar bilgilendirme amaçlıdır, yatırım tavsiyesi
        değildir. Kesin alım-satım fiyatı için ilgili kuyumcuyla görüşün.
      </p>
    </div>
  );
}
