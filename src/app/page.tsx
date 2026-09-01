import Link from "next/link";
import { ArrowRight, MapPin } from "@phosphor-icons/react/dist/ssr";
import { getPrices, getGoldHistory, getGoldItemSparklines } from "@/lib/prices";
import { jewelers } from "@/lib/jewelers";
import PriceTicker from "@/components/PriceTicker";
import GoldCalculator from "@/components/GoldCalculator";
import OnsAltinCard from "@/components/OnsAltinCard";
import GoldVarietiesTable from "@/components/GoldVarietiesTable";
import GoldPriceChart from "@/components/GoldPriceChart";
import DailyChangeTable from "@/components/DailyChangeTable";
import DailyMarketSummary from "@/components/DailyMarketSummary";
import HeroGramAltinCard from "@/components/HeroGramAltinCard";
import JewelerProfileCard from "@/components/JewelerProfileCard";
import GuideList from "@/components/GuideList";
import Faq from "@/components/Faq";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

// Bu bir Server Component (dosyanın başında "use client" YOK). Varsayılan
// davranış bu: sunucuda çalışır, doğrudan getPrices() gibi fonksiyonları
// await'leyebilir, sonucu HTML olarak tarayıcıya gönderir. Kullanıcı
// JavaScript indirmeden bile ilk fiyatları görür — SEO ve hız için önemli.
//
// revalidate: 60 -> sayfa build anında donup kalmasın diye (statik export
// aksi halde fiyatları deploy anındaki değerde dondurur), Next.js bu
// sayfayı arka planda en fazla 60 saniyede bir yeniden üretir. Sayfa
// açıldıktan sonraki "canlı" güncellemeyi ise PriceTicker/GoldCalculator'ın
// kendi polling'i sağlıyor.
export const revalidate = 60;

// Bölüm sırası (2026 tasarım yenileme briefi'ne göre): fiyat şeridi ve
// header zaten global; hero (gram altın kartıyla TEK kompozisyon) →
// "Bugün ne değişti?" kısa özeti → popüler fiyatlar → döviz → tüm altın
// çeşitleri → Denizli'de kuyumculuk + öne çıkan kuyumcular (fiyatlardan
// hemen sonra, doğal bir "keşif" adımı olarak) → hesaplama → grafik
// (yanında günlük hareket detay listesiyle) → rehber (editoryal liste)
// → SSS. Kuyumcu keşfi bilinçli olarak hesaplama/grafikten ÖNCE — brief:
// "kullanıcı fiyatlardan kuyumcu keşfine doğal biçimde yönlendirilmeli".
export default async function HomePage() {
  const prices = await getPrices();
  const goldHistory = await getGoldHistory();
  const goldSparklines = await getGoldItemSparklines();
  const featuredJewelers = jewelers.filter((j) => j.featured).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "DenizliKuyumcu.com",
    url: "https://denizlikuyumcu.com",
    description:
      "Denizli'de güncel altın ve döviz fiyatları, kuyumcu rehberi.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO — brief: "hero ile gram altın kartı tek kompozisyon olsun".
          Tek bir sınırlı/arka planlı panel içinde solda vaat + iki CTA,
          sağda gram altın kartı iç içe duruyor; bu sayede ikisi ayrı
          yüzen kutular gibi değil, TEK bir parça gibi okunuyor. */}
      <section className="border-b border-border px-4 py-8 sm:py-12">
        <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[24px] border border-border bg-gradient-to-br from-gold-surface/60 via-bg to-surface">
          {/* Brief'in önerdiği "hafif marka motifi": altın fiyat grafiğinden
              esinlenen, çok düşük opaklıkta ince bir çizgi + yumuşak bir
              ışıma. Dekoratif — ekran okuyucudan gizli, performans maliyeti
              yok (statik inline SVG + CSS blur). */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-gold/15 blur-3xl sm:-right-24 sm:-top-24 sm:h-96 sm:w-96"
          />
          <svg
            aria-hidden="true"
            viewBox="0 0 400 120"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full text-brand opacity-[0.07]"
          >
            <polyline
              points="0,90 40,80 80,95 120,60 160,70 200,40 240,55 280,20 320,35 360,10 400,25"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="relative grid gap-8 p-6 sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-12 lg:p-14">
            <div>
              <h1 className="max-w-lg text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Denizli altın piyasası, tek ekranda.
              </h1>
              <p className="mt-3 max-w-md text-base text-muted sm:mt-4 sm:text-lg">
                Güncel fiyatları takip edin, güvenilir kuyumcuları keşfedin.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
                <a
                  href="#altin-fiyatlari"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-surface transition-all hover:bg-brand active:scale-[0.98]"
                >
                  Altın fiyatlarını incele
                  <ArrowRight aria-hidden="true" size={16} />
                </a>
                <Link
                  href="/kuyumcular"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold text-ink transition-all hover:border-brand hover:text-brand active:scale-[0.98]"
                >
                  <MapPin aria-hidden="true" size={16} weight="bold" />
                  Yakındaki kuyumcuları bul
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <HeroGramAltinCard initialData={prices} history={goldHistory.slice(-30)} />
            </div>
          </div>
        </div>
      </section>

      {/* "Bugün ne değişti?" — kısa, taranabilir piyasa özeti. Hero'nun
          hemen altında; kullanıcı ilk saniyede genel tabloyu görüyor. */}
      <section className="mx-auto max-w-[1240px] px-4 pb-16">
        <DailyMarketSummary initialData={prices} />
      </section>

      {/* En çok takip edilen fiyatlar */}
      <section id="altin-fiyatlari" className="mx-auto max-w-[1240px] px-4 pb-16">
        <PriceTicker initialData={prices} />
      </section>

      <section id="doviz" className="mx-auto max-w-[1240px] px-4 pb-16">
        <PriceTicker
          initialData={prices}
          title="Yurtdışı Para Birimleri"
          filterType="currency-extra"
        />
      </section>

      <section id="tum-altin-cesitleri" className="mx-auto max-w-[1240px] px-4 pb-16">
        <SectionHeading
          title="Tüm Altın Çeşitleri"
          subtitle="Gram, çeyrek, yarım, tam, ata, reşat, gremse ve daha fazlası tek tabloda."
        />
        <div className="mt-6 space-y-4">
          <OnsAltinCard initialData={prices} />
          <GoldVarietiesTable initialData={prices} sparklines={goldSparklines} />
        </div>
      </section>

      {/* Kuyumcu keşfi buraya taşındı (brief): kullanıcı fiyatlara
          baktıktan hemen sonra, hesaplama/grafiğe gelmeden ÖNCE doğal
          biçimde kuyumcu keşfine yönlendirilsin. */}
      <section className="mx-auto max-w-[1240px] px-4 pb-16">
        <SectionHeading title="Denizli'de Kuyumculuk" />
        <p className="mt-6 max-w-3xl text-muted">
          Denizli, çeyiz kültüründen düğün geleneklerine uzanan köklü bir
          kuyumculuk birikimine sahiptir. Şehir merkezinde, özellikle{" "}
          <strong className="font-semibold text-ink">Bayramyeri</strong>{" "}
          çevresinde kümelenen çok sayıda kuyumcu işletmesi; gram altından
          tasarım takıya, alyanstan gümüş ürünlere kadar geniş bir yelpazede
          hizmet sunar. Bu yoğun kuyumcu kümelenmesi, alışveriş öncesi fiyat
          ve model karşılaştırması yapmak isteyen müşteriler için de önemli
          bir avantaj sağlar.
        </p>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 pb-16">
        <SectionHeading
          title="Öne Çıkan Kuyumcular"
          action={{ label: "Tümünü gör", href: "/kuyumcular" }}
        />

        {featuredJewelers.length > 0 ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {featuredJewelers.map((j, i) => (
              <Reveal key={j.id} delay={i * 0.05}>
                <JewelerProfileCard
                  name={j.name}
                  district={j.district}
                  description={j.description}
                  tag="Öne Çıkan"
                  isDemo={j.isDemo}
                  phone={j.phone}
                />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-dashed border-border bg-surface p-6 text-center">
            <p className="text-muted">
              Henüz öne çıkan kuyumcu yok.{" "}
              <Link href="/reklam-ver" className="font-semibold text-brand hover:underline">
                İlk siz olun
              </Link>
              .
            </p>
          </div>
        )}
      </section>

      <section id="hesaplama" className="mx-auto max-w-[1240px] px-4 pb-16">
        <SectionHeading
          title="Altın Hesaplama Aracı"
          subtitle="Ürüne veya ayara göre, canlı fiyatlarla anında hesaplayın."
        />
        <div className="mt-6">
          <GoldCalculator initialData={prices} />
        </div>
      </section>

      <section id="grafik" className="mx-auto max-w-[1240px] px-4 pb-16">
        <SectionHeading title="Altın Fiyatları Grafiği" />
        <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_360px] lg:items-start">
          <GoldPriceChart history={goldHistory} />
          {/* Grafiğin yanında, "bugün kimler hareketlendi" detayının tam
              listesi — DailyMarketSummary'nin (hero altı) kısa özetini
              tamamlıyor, tekrarlamıyor. */}
          <DailyChangeTable initialData={prices} />
        </div>
      </section>

      <section id="rehber" className="mx-auto max-w-[1240px] px-4 pb-16">
        <SectionHeading
          title="Rehber"
          subtitle="Altın almadan/satmadan önce bilmeniz gerekenler."
          action={{ label: "Tüm rehberi gör", href: "/rehber" }}
        />
        <GuideList
          items={[
            {
              no: "01",
              category: "Ayar",
              href: "/rehber/altin-ayari-nedir",
              title: "Altın Ayarı Nedir? (24, 22, 18, 14 Ayar)",
              desc: "Ayar nedir, hangisi nerede kullanılır, has altınla farkı.",
            },
            {
              no: "02",
              category: "Hesaplama",
              href: "/rehber/gram-altin-hesaplama",
              title: "Gram Altın Fiyatı Nasıl Hesaplanır?",
              desc: "Has altın, işçilik ve kur ilişkisini basitçe anlatıyoruz.",
            },
            {
              no: "03",
              category: "Alyans",
              href: "/rehber/alyans-rehberi",
              title: "Alyans Alırken Nelere Dikkat Edilmeli?",
              desc: "Ayar, ölçü, gramaj ve kuyumcu seçimi rehberi.",
            },
          ]}
        />
      </section>

      <section id="sss" className="mx-auto max-w-[1240px] px-4 pb-16">
        <Faq />
      </section>
    </>
  );
}
