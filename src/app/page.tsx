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
import HeroGramAltinCard from "@/components/HeroGramAltinCard";
import Faq from "@/components/Faq";
import AdSlot from "@/components/AdSlot";
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

// Bölüm sırası (kullanıcı geri bildirimiyle güncellendi): fiyat şeridi ve
// header zaten global; hero → popüler fiyatlar → döviz → tüm altın
// çeşitleri → hesaplama → günlük değişim → grafik → kuyumcular → rehber
// → SSS. Günlük değişim ve hesaplama, kullanıcı fiyatları gördükten hemen
// sonra gelecek şekilde öne alındı.
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

      {/* HERO — iki sütun: solda vaat + iki CTA, sağda tek bakışta gram
          altın kartı. Amaç birkaç saniyede anlaşılsın diye tablo/liste
          değil, tek bir güçlü rakam gösteriyoruz. */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-gold/10 to-bg">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold/20 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-[1240px] items-center gap-10 px-4 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="max-w-lg text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Denizli altın piyasası, tek ekranda.
            </h1>
            <p className="mt-4 max-w-md text-lg text-muted">
              Güncel fiyatları takip edin, güvenilir kuyumcuları keşfedin.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
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
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-8">
        <AdSlot position="hero-banner" />
      </section>

      {/* Popüler altın ve döviz fiyatları */}
      <section id="altin-fiyatlari" className="mx-auto max-w-[1240px] px-4 py-20">
        <PriceTicker initialData={prices} />
      </section>

      <section id="doviz" className="mx-auto max-w-[1240px] px-4 pb-20">
        <PriceTicker
          initialData={prices}
          title="Yurtdışı Para Birimleri"
          filterType="currency-extra"
        />
      </section>

      <section id="tum-altin-cesitleri" className="mx-auto max-w-[1240px] px-4 pb-20">
        <SectionHeading
          title="Tüm Altın Çeşitleri"
          subtitle="Gram, çeyrek, yarım, tam, ata, reşat, gremse ve daha fazlası tek tabloda."
        />
        <div className="mt-6 space-y-4">
          <OnsAltinCard initialData={prices} />
          <GoldVarietiesTable initialData={prices} sparklines={goldSparklines} />
        </div>
      </section>

      <section id="hesaplama" className="mx-auto max-w-[1240px] px-4 pb-20">
        <SectionHeading
          title="Altın Hesaplama Aracı"
          subtitle="Ürüne veya ayara göre, canlı fiyatlarla anında hesaplayın."
        />
        <div className="mt-6">
          <GoldCalculator initialData={prices} />
        </div>
      </section>

      <section id="gunluk-degisim" className="mx-auto max-w-[1240px] px-4 pb-20">
        <SectionHeading title="Günlük Değişim" subtitle="Bugün en çok hareket edenler." />
        <div className="mt-6">
          <DailyChangeTable initialData={prices} />
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 pb-20">
        <AdSlot position="in-content" />
      </section>

      <section id="grafik" className="mx-auto max-w-[1240px] px-4 pb-20">
        <SectionHeading title="Altın Fiyatları Grafiği" />
        <div className="mt-6">
          <GoldPriceChart history={goldHistory} />
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 pb-20">
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

      <section className="mx-auto max-w-[1240px] px-4 pb-20">
        <SectionHeading
          title="Öne Çıkan Kuyumcular"
          action={{ label: "Tümünü gör", href: "/kuyumcular" }}
        />

        {featuredJewelers.length > 0 ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {featuredJewelers.map((j, i) => (
              <Reveal key={j.id} delay={i * 0.05}>
                <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm transition-transform hover:-translate-y-0.5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                    Öne Çıkan
                  </p>
                  <p className="mt-1 font-bold text-ink">{j.name}</p>
                  <p className="text-sm text-muted">{j.district}</p>
                  <p className="mt-2 text-sm text-muted">{j.description}</p>
                </div>
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

      <section className="mx-auto max-w-[1240px] px-4 pb-20">
        <SectionHeading
          title="Rehber"
          subtitle="Altın almadan/satmadan önce bilmeniz gerekenler."
          action={{ label: "Tüm rehberi gör", href: "/rehber" }}
        />
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          <Reveal>
            <GuideCard
              href="/rehber/altin-ayari-nedir"
              title="Altın Ayarı Nedir? (24, 22, 18, 14 Ayar)"
              desc="Ayar nedir, hangisi nerede kullanılır, has altınla farkı."
            />
          </Reveal>
          <Reveal delay={0.05}>
            <GuideCard
              href="/rehber/gram-altin-hesaplama"
              title="Gram Altın Fiyatı Nasıl Hesaplanır?"
              desc="Has altın, işçilik ve kur ilişkisini basitçe anlatıyoruz."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <GuideCard
              href="/rehber/alyans-rehberi"
              title="Alyans Alırken Nelere Dikkat Edilmeli?"
              desc="Ayar, ölçü, gramaj ve kuyumcu seçimi rehberi."
            />
          </Reveal>
        </div>
      </section>

      <section id="sss" className="mx-auto max-w-[1240px] px-4 pb-20">
        <Faq />
      </section>

      <section className="mx-auto max-w-[1240px] px-4 pb-20">
        <AdSlot position="footer-banner" />
      </section>
    </>
  );
}

function GuideCard({
  href,
  title,
  desc,
}: {
  href: string;
  title: string;
  desc: string;
}) {
  return (
    <Link
      href={href}
      className="block h-full rounded-2xl border border-border bg-surface p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      <p className="font-semibold text-ink">{title}</p>
      <p className="mt-1 text-sm text-muted">{desc}</p>
    </Link>
  );
}
