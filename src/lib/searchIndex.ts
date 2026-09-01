// Header'daki hızlı arama kutusunun veri kaynağı — sitenin küçük ölçeği
// için tam bir arama motoru yerine, site içi sayfa/bölümlerin statik bir
// dizini yeterli. Yeni bir sayfa/bölüm eklendikçe buraya bir satır
// eklemek yeterli.
export type SearchEntry = {
  label: string;
  href: string;
  group: "Sayfa" | "Anasayfa Bölümü" | "Rehber";
};

export const searchIndex: SearchEntry[] = [
  { label: "Altın Fiyatları", href: "/#altin-fiyatlari", group: "Anasayfa Bölümü" },
  { label: "Döviz Kurları", href: "/#doviz", group: "Anasayfa Bölümü" },
  { label: "Altın Hesaplama Aracı", href: "/#hesaplama", group: "Anasayfa Bölümü" },
  { label: "Tüm Altın Çeşitleri", href: "/#tum-altin-cesitleri", group: "Anasayfa Bölümü" },
  { label: "Altın Fiyatları Grafiği", href: "/#grafik", group: "Anasayfa Bölümü" },
  { label: "Günlük Değişim", href: "/#gunluk-degisim", group: "Anasayfa Bölümü" },
  { label: "Sıkça Sorulan Sorular", href: "/#sss", group: "Anasayfa Bölümü" },
  { label: "Kuyumcular", href: "/kuyumcular", group: "Sayfa" },
  { label: "Reklam Ver", href: "/reklam-ver", group: "Sayfa" },
  { label: "Altın Ayarı Nedir?", href: "/rehber/altin-ayari-nedir", group: "Rehber" },
  { label: "Gram Altın Fiyatı Nasıl Hesaplanır?", href: "/rehber/gram-altin-hesaplama", group: "Rehber" },
  { label: "Alyans Rehberi", href: "/rehber/alyans-rehberi", group: "Rehber" },
  { label: "Altın Nasıl Saklanır?", href: "/rehber/altin-nasil-saklanir", group: "Rehber" },
];
