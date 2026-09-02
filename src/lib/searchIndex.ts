// Header'daki hızlı arama kutusunun veri kaynağı — sitenin küçük ölçeği
// için tam bir arama motoru yerine, site içi sayfa/bölümlerin statik bir
// dizini yeterli. Yeni bir sayfa/bölüm eklendikçe buraya bir satır
// eklemek yeterli.
import { priceContent } from "@/lib/priceContent";

export type SearchEntry = {
  label: string;
  href: string;
  group: "Sayfa" | "Anasayfa Bölümü" | "Rehber" | "Fiyat Sayfası";
};

// Her altın/döviz kalemi için ayrı fiyat sayfası da aranabilir olsun diye
// otomatik olarak listeye ekleniyor — bkz. lib/priceContent.ts.
const priceEntries: SearchEntry[] = priceContent.map((entry) => ({
  label: entry.h1,
  href: `/${entry.category}/${entry.slug}`,
  group: "Fiyat Sayfası",
}));

export const searchIndex: SearchEntry[] = [
  { label: "Altın Fiyatları", href: "/#altin-fiyatlari", group: "Anasayfa Bölümü" },
  { label: "Döviz Kurları", href: "/#doviz", group: "Anasayfa Bölümü" },
  { label: "Altın Hesaplama Aracı", href: "/#hesaplama", group: "Anasayfa Bölümü" },
  { label: "Tüm Altın Çeşitleri", href: "/#tum-altin-cesitleri", group: "Anasayfa Bölümü" },
  { label: "Altın Fiyatları Grafiği", href: "/#grafik", group: "Anasayfa Bölümü" },
  // Günlük Değişim artık ayrı bir bölüm değil, Grafik bölümünün yanında
  // (bkz. page.tsx) — bu yüzden aynı çapaya yönlendiriyor.
  { label: "Günlük Değişim", href: "/#grafik", group: "Anasayfa Bölümü" },
  { label: "Sıkça Sorulan Sorular", href: "/#sss", group: "Anasayfa Bölümü" },
  { label: "Kuyumcular", href: "/kuyumcular", group: "Sayfa" },
  { label: "Reklam Ver", href: "/reklam-ver", group: "Sayfa" },
  { label: "Hakkımızda", href: "/hakkimizda", group: "Sayfa" },
  { label: "İletişim", href: "/iletisim", group: "Sayfa" },
  { label: "Gizlilik Politikası", href: "/gizlilik-politikasi", group: "Sayfa" },
  { label: "Veri Kaynakları", href: "/veri-kaynaklari", group: "Sayfa" },
  { label: "Yasal Uyarı", href: "/yasal-uyari", group: "Sayfa" },
  { label: "Kullanım Koşulları", href: "/kullanim-kosullari", group: "Sayfa" },
  { label: "KVKK Aydınlatma Metni", href: "/kvkk", group: "Sayfa" },
  { label: "Çerez Politikası", href: "/cerez-politikasi", group: "Sayfa" },
  { label: "Altın Ayarı Nedir?", href: "/rehber/altin-ayari-nedir", group: "Rehber" },
  { label: "Gram Altın Fiyatı Nasıl Hesaplanır?", href: "/rehber/gram-altin-hesaplama", group: "Rehber" },
  { label: "Alyans Rehberi", href: "/rehber/alyans-rehberi", group: "Rehber" },
  { label: "Altın Nasıl Saklanır?", href: "/rehber/altin-nasil-saklanir", group: "Rehber" },
  ...priceEntries,
];
