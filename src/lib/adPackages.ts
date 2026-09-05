// Reklam paketleri — hem /reklam-ver (tam detay) hem /kuyumcular (kısa
// özet) tarafından kullanılan TEK kaynak. Fiyatlar henüz netleşmediği için
// bilinçli olarak burada YOK (priceFrom boş bırakılırsa sayfalarda "Fiyat
// için bilgi alın" görünür — kullanıcı onayı olmadan rakam uydurulmaz).
export type AdPackage = {
  name: string;
  priceFrom?: string;
  features: string[];
  highlight?: boolean;
};

export const adPackages: AdPackage[] = [
  {
    name: "Öne Çıkan Kuyumcu",
    features: [
      "Anasayfada 'Denizli'de Kuyumculuk' bölümünde vurgulu kart",
      "Kuyumcular sayfasında üst sırada listeleme",
      "Kısa tanıtım metni, telefon ve yol tarifi bağlantısı",
    ],
    highlight: true,
  },
  {
    name: "Fiyat Sayfası Reklamı",
    features: [
      "Gram, çeyrek, bilezik gibi fiyat sayfalarının kenar sütununda 'Sponsorlu' kart",
      "Alışveriş niyeti en yüksek ziyaretçiye görünürlük",
      "İstediğiniz kaleme (ör. yalnızca 22 ayar bilezik) hedefleme",
    ],
  },
  {
    name: "Size Özel Web Sitesi",
    features: [
      "Kuyumcunuza özel, bağımsız bir web sitesi",
      "Kendi alan adınız ve tasarımınız",
      "İsteğe bağlı olarak DenizliKuyumcu.com'a bağlantı",
    ],
  },
];
