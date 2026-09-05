import type { Metadata } from "next";
import { CheckCircle, MagnifyingGlass, ArrowsClockwise, MapPin } from "@phosphor-icons/react/dist/ssr";
import InfoRequestForm from "@/components/InfoRequestForm";
import WhatsAppCta from "@/components/WhatsAppCta";
import { adPackages } from "@/lib/adPackages";

export const metadata: Metadata = {
  title: "Reklam Ver: Kuyumcunuzu Öne Çıkarın",
  description:
    "DenizliKuyumcu.com üzerinde reklam vererek kuyumcunuzu Denizli'de altın/döviz fiyatı arayan yerel ziyaretçilere ulaştırın. Paketler, nasıl çalışır ve sık sorulanlar.",
  alternates: { canonical: "/reklam-ver" },
};

const steps = [
  {
    icon: MagnifyingGlass,
    title: "Bilgilerinizi iletin",
    body: "Aşağıdaki formu doldurun; işletme adı, konum ve ne tür bir görünürlük istediğinizi yazın.",
  },
  {
    icon: ArrowsClockwise,
    title: "Kartınızı hazırlayalım",
    body: "Tanıtım metni, telefon ve varsa görselinizle 'Sponsorlu' kartınızı oluşturur, onayınıza sunarız.",
  },
  {
    icon: MapPin,
    title: "Yayına alalım",
    body: "Onay sonrası seçtiğiniz alanlarda (anasayfa / fiyat sayfaları) kartınız yayına girer.",
  },
];

const faq = [
  {
    q: "Sitede ne kadar ziyaretçi var?",
    a: "Site yeni yayında; ziyaretçi istatistiğini çerezsiz bir araçla (Vercel Web Analytics) ölçüyoruz. Güncel erişim rakamlarını form üzerinden isteyebilirsiniz — şeffaf biçimde paylaşırız.",
  },
  {
    q: "Reklam kartı neye benziyor?",
    a: "Sitedeki 'Sponsorlu' kuyumcu kartlarıyla aynı görünümde: işletme adı, ilçe, kısa metin, telefon ve yol tarifi bağlantısı. Ziyaretçi deneyimini bozan açılır pencere veya video reklam yoktur.",
  },
  {
    q: "Sözleşme süresi ne kadar?",
    a: "Aylık veya haftalık olarak düzenlenebilir. Detayları görüşürken birlikte belirleriz.",
  },
  {
    q: "Google Ads gibi bir reklam ağı mı kullanıyorsunuz?",
    a: "Hayır. Tüm reklam alanları doğrudan bizim tarafımızdan yönetilir; üçüncü taraf reklam ağı veya davranışsal hedefleme kullanılmaz.",
  },
];

export default function ReklamVerPage() {
  return (
    <div className="mx-auto max-w-[1240px] px-4 py-12">
      <h1 className="max-w-2xl text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        Reklam Ver: Kuyumcunuzu Denizli&apos;de Öne Çıkarın
      </h1>
      <p className="mt-3 max-w-2xl text-muted">
        DenizliKuyumcu.com; güncel altın fiyatı, döviz kuru ve kuyumculuk
        rehberi arayan <strong className="text-ink">yerel</strong> ziyaretçileri
        ağırlar. Bu ziyaretçiler zaten altın almaya/satmaya niyetli — reklamınız
        tam bu anda karşılarına çıkar.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          ["Yerel arama niyeti", "\"Denizli gram altın\", \"Denizli kuyumcu\" gibi aramalar doğrudan alışverişe yakın."],
          ["Tekrar eden ziyaretçi", "Fiyat takibi alışkanlığı olan kullanıcı siteye sık sık geri döner."],
          ["Düşük yerel rekabet", "Ulusal finans siteleri Denizli'ye özel bir alan sunmuyor."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-2xl border border-border bg-surface p-4">
            <p className="text-sm font-bold text-ink">{t}</p>
            <p className="mt-1 text-sm text-muted">{d}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-14 text-xl font-bold tracking-tight text-ink sm:text-2xl">
        Paketler
      </h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {adPackages.map((pkg) => (
          <div
            key={pkg.name}
            className={
              "flex flex-col rounded-2xl border bg-surface p-4 shadow-sm " +
              (pkg.highlight ? "border-brand ring-1 ring-brand/30" : "border-border")
            }
          >
            <p className="font-bold text-ink">{pkg.name}</p>
            <p className="mt-1 text-sm font-semibold text-brand">
              {pkg.priceFrom ?? "Fiyat için bilgi alın"}
            </p>
            <ul className="mt-3 flex-1 space-y-2 text-sm text-muted">
              {pkg.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <CheckCircle
                    aria-hidden="true"
                    weight="fill"
                    size={18}
                    className="mt-0.5 shrink-0 text-brand"
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="mt-14 text-xl font-bold tracking-tight text-ink sm:text-2xl">
        Nasıl çalışır?
      </h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {steps.map((s, i) => (
          <div key={s.title} className="rounded-2xl border border-border bg-surface p-4">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-surface text-sm font-bold text-brand">
                {i + 1}
              </span>
              <s.icon aria-hidden="true" size={18} weight="bold" className="text-muted" />
            </div>
            <p className="mt-3 text-sm font-bold text-ink">{s.title}</p>
            <p className="mt-1 text-sm text-muted">{s.body}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-14 text-xl font-bold tracking-tight text-ink sm:text-2xl">
        Sık sorulanlar
      </h2>
      <dl className="mt-4 max-w-3xl divide-y divide-border border-y border-border">
        {faq.map((item) => (
          <div key={item.q} className="py-4">
            <dt className="text-sm font-semibold text-ink">{item.q}</dt>
            <dd className="mt-1.5 text-sm text-muted">{item.a}</dd>
          </div>
        ))}
      </dl>

      <div id="iletisim" className="mt-14 max-w-2xl scroll-mt-24">
        <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
          Bilgi / teklif isteyin
        </h2>
        <p className="mt-2 text-sm text-muted">
          Formu doldurun; paketler, güncel ziyaretçi rakamları ve fiyatlandırma
          için en kısa sürede size dönelim.
        </p>
        <div className="mt-6">
          <InfoRequestForm defaultKonu="Reklam / işletme tanıtımı" />
        </div>

        {/* WhatsApp: brief'in "mobilde görünür teklif CTA'sı" isteği —
            site genelinde yüzen bir "chat bubble" yerine, yalnızca reklam
            bağlamının olduğu burada normal bir buton olarak. */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <WhatsAppCta context="reklam-ver" />
          <span className="text-sm text-muted">
            veya E-posta:{" "}
            <a
              href="mailto:info@ventiajans.com"
              className="font-medium text-ink hover:text-brand"
            >
              info@ventiajans.com
            </a>
            {" · "}Telefon:{" "}
            <a href="tel:+905445965622" className="font-medium text-ink hover:text-brand">
              +90 544 596 56 22
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
