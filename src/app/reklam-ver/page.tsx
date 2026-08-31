import type { Metadata } from "next";

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
      <h1 className="text-3xl font-bold text-neutral-900">
        Kuyumcunuzu Denizli&apos;de Öne Çıkarın
      </h1>
      <p className="mt-3 max-w-2xl text-neutral-600">
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
              "flex flex-col rounded-xl border bg-white p-5 shadow-sm " +
              (pkg.highlight
                ? "border-amber-400 ring-1 ring-amber-300"
                : "border-amber-900/10")
            }
          >
            <p className="font-bold text-neutral-900">{pkg.name}</p>
            <p className="mt-1 text-sm font-semibold text-amber-800">
              {pkg.price}
            </p>
            <ul className="mt-3 flex-1 space-y-1.5 text-sm text-neutral-600">
              {pkg.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-amber-600">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-amber-900/10 bg-white p-6">
        <h2 className="text-lg font-bold text-neutral-900">İletişime Geçin</h2>
        <p className="mt-2 text-sm text-neutral-600">
          Reklam paketleri ve fiyatlandırma hakkında bilgi almak için bize
          ulaşın.
        </p>
        <p className="mt-3 text-sm text-neutral-500">
          E-posta: <span className="font-medium">info@denizlikuyumcu.com</span>
          {" · "}Telefon: <span className="font-medium">(yakında eklenecek)</span>
        </p>
      </div>
    </div>
  );
}
