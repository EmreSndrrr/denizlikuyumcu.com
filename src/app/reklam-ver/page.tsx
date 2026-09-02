import type { Metadata } from "next";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Reklam Ver — Kuyumcunuzu Denizli'de Öne Çıkarın",
  description:
    "DenizliKuyumcu.com üzerinde reklam vererek kuyumcunuzu binlerce potansiyel müşteriye ulaştırın.",
  alternates: { canonical: "/reklam-ver" },
};

const packages = [
  {
    name: "Site İçi Reklam",
    price: "Aylık veya haftalık — teklif için iletişime geçin",
    features: [
      "Anasayfada 'Öne Çıkan Kuyumcular' bölümünde yer alma",
      "Kuyumcular sayfasında üst sırada, vurgulu kart",
      "Kısa tanıtım metni ve iletişim bilgileri",
    ],
    highlight: true,
  },
  {
    name: "Banner Reklam",
    price: "Aylık veya haftalık — teklif için iletişime geçin",
    features: [
      "Anasayfa üst banner (hero-banner)",
      "Alt banner alanı (footer-banner)",
      "Rehber ve fiyat sayfalarında görünürlük",
    ],
  },
  {
    name: "Size Özel Web Sitesi",
    price: "Teklif için iletişime geçin",
    features: [
      "Kuyumcunuza özel, bağımsız bir web sitesi",
      "Kendi alan adınız ve tasarımınız",
      "İsteğe bağlı olarak DenizliKuyumcu.com'a bağlantı",
    ],
  },
];

export default function ReklamVerPage() {
  return (
    <div className="mx-auto max-w-[1240px] px-4 py-12">
      <h1 className="max-w-2xl text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        Kuyumcunuzu Denizli&apos;de Öne Çıkarın
      </h1>
      <p className="mt-3 max-w-xl text-muted">
        DenizliKuyumcu.com; güncel altın fiyatı, döviz kuru ve kuyumculukla
        ilgili rehber içerikleri arayan yerel ziyaretçileri ağırlar. Bu
        ziyaretçilere kuyumcunuzu tanıtmak için aşağıdaki seçeneklerden
        birini değerlendirebilirsiniz.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={
              "flex flex-col rounded-2xl border bg-surface p-4 shadow-sm " +
              (pkg.highlight ? "border-brand ring-1 ring-brand/30" : "border-border")
            }
          >
            <p className="font-bold text-ink">{pkg.name}</p>
            <p className="mt-1 text-sm font-semibold text-brand">{pkg.price}</p>
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

      <div className="mt-8 rounded-2xl border border-border bg-surface p-6">
        <h2 className="text-lg font-bold text-ink">İletişime Geçin</h2>
        <p className="mt-2 text-sm text-muted">
          Reklam paketleri ve fiyatlandırma hakkında bilgi almak için bize
          ulaşın.
        </p>
        <p className="mt-3 text-sm text-muted">
          E-posta: <span className="font-medium text-ink">info@ventiajans.com</span>
          {" · "}Telefon:{" "}
          <a href="tel:05445965622" className="font-medium text-ink hover:text-brand">
            0544 596 56 22
          </a>
        </p>
      </div>
    </div>
  );
}
