import type { Metadata } from "next";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Reklam Ver — Kuyumcunuzu Denizli'de Öne Çıkarın",
  description:
    "DenizliKuyumcu.com üzerinde reklam vererek kuyumcunuzu binlerce potansiyel müşteriye ulaştırın.",
};

const packages = [
  {
    name: "Dizin Kaydı",
    price: "Ücretsiz",
    features: ["Kuyumcular listesinde temel kayıt", "İşletme adı ve konum"],
  },
  {
    name: "Öne Çıkan Kuyumcu",
    price: "Aylık — teklif için iletişime geçin",
    features: [
      "Anasayfada 'Öne Çıkan Kuyumcular' bölümünde yer alma",
      "Kuyumcular sayfasında üst sırada, vurgulu kart",
      "Kısa tanıtım metni",
    ],
    highlight: true,
  },
  {
    name: "Banner Reklam",
    price: "Aylık — teklif için iletişime geçin",
    features: [
      "Anasayfa üst banner (hero-banner)",
      "İçerik arası ve alt banner alanları",
      "Rehber sayfalarında görünürlük",
    ],
  },
];

export default function ReklamVerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50">
          Kuyumcunuzu Denizli&apos;de Öne Çıkarın
        </h1>
        <span
          aria-hidden="true"
          className="mx-auto mt-3 block h-0.5 w-14 rounded-full bg-amber-600 dark:bg-amber-500"
        />
        <p className="mx-auto mt-3 max-w-xl text-stone-600 dark:text-stone-400">
          DenizliKuyumcu.com; güncel altın fiyatı, döviz kuru ve kuyumculukla
          ilgili rehber içerikleri arayan yerel ziyaretçileri ağırlar. Bu
          ziyaretçilere kuyumcunuzu tanıtmak için aşağıdaki seçeneklerden
          birini değerlendirebilirsiniz.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className={
              "flex flex-col rounded-xl border bg-white p-5 shadow-sm dark:bg-stone-900 " +
              (pkg.highlight
                ? "border-amber-400 ring-1 ring-amber-300 dark:border-amber-500 dark:ring-amber-500/30"
                : "border-stone-200 dark:border-stone-800")
            }
          >
            <p className="font-bold text-stone-900 dark:text-stone-50">{pkg.name}</p>
            <p className="mt-1 text-sm font-semibold text-amber-700 dark:text-amber-400">
              {pkg.price}
            </p>
            <ul className="mt-3 flex-1 space-y-1.5 text-sm text-stone-600 dark:text-stone-400">
              {pkg.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <CheckCircle
                    aria-hidden="true"
                    weight="fill"
                    size={18}
                    className="mt-0.5 shrink-0 text-amber-600 dark:text-amber-500"
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900">
        <h2 className="text-lg font-bold text-stone-900 dark:text-stone-50">
          İletişime Geçin
        </h2>
        <p className="mt-2 text-sm text-stone-600 dark:text-stone-400">
          Reklam paketleri ve fiyatlandırma hakkında bilgi almak için bize
          ulaşın.
        </p>
        <p className="mt-3 text-sm text-stone-500 dark:text-stone-400">
          E-posta: <span className="font-medium">info@denizlikuyumcu.com</span>
          {" · "}Telefon: <span className="font-medium">(yakında eklenecek)</span>
        </p>
      </div>
    </div>
  );
}
