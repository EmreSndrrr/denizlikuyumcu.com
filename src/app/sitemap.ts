import type { MetadataRoute } from "next";
import { priceContent } from "@/lib/priceContent";

// app/sitemap.ts -> Next.js bunu otomatik olarak /sitemap.xml olarak sunar.
const siteUrl = "https://denizlikuyumcu.com";

// seo-audit bulgusu T3: önceden BÜTÜN URL'ler için lastModified = new
// Date() (yani her build'de "şu an") kullanılıyordu. Bu, gerçekte
// değişmeyen sayfalar (rehber makaleleri, yasal sayfalar) için yanıltıcı
// — Google zamanla hep "bugün" diyen lastModified değerlerini güvenilmez
// bulup yok sayabiliyor. Statik içerik sayfaları artık SABİT bir tarih
// kullanıyor; bu tarih SADECE o sayfanın içeriği gerçekten değiştiğinde
// elle güncellenmeli (otomatik değil, bilinçli bir karar).
const STATIC_CONTENT_LAST_MODIFIED = new Date("2026-09-03");

const staticContentRoutes = [
  "/kuyumcular",
  "/rehber",
  "/reklam-ver",
  "/bilgi-talebi",
  "/sikca-sorulan-sorular",
  "/rehber/altin-ayari-nedir",
  "/rehber/gram-altin-hesaplama",
  "/rehber/alyans-rehberi",
  "/rehber/altin-nasil-saklanir",
  "/rehber/gram-altin-bugun-ne-kadar",
  "/rehber/10-gram-altin-kac-tl",
  "/rehber/ceyrek-altin-alis-satis-farki",
  "/rehber/22-ayar-bilezik-hesaplama",
  "/rehber/14-ayar-altin-bozdurma-hesabi",
  "/rehber/bilezikte-iscilik-hesaplama",
  "/rehber/dugunde-hangi-altinlar-takilir",
  "/rehber/altin-alirken-fatura",
  "/rehber/sahte-altin-nasil-anlasilir",
  "/rehber/eski-yeni-tarihli-ceyrek-altin-farki",
  "/rehber/kuyumcuda-altin-bozdururken-dikkat",
  "/rehber/alyans-olcusu-nasil-belirlenir",
  "/hakkimizda",
  "/iletisim",
  "/gizlilik-politikasi",
  "/veri-kaynaklari",
  "/yasal-uyari",
  "/kullanim-kosullari",
  "/kvkk",
  "/cerez-politikasi",
];

// Her altın/döviz kalemi için ayrı fiyat sayfası — bkz. lib/priceContent.ts
// ve app/altin/[slug], app/doviz/[slug]. Fiyatlar sık güncellendiği için
// bu sayfalar da anasayfa gibi "hourly" değişim sıklığıyla işaretleniyor
// (lastModified=now burada DOĞRU — içerik gerçekten sürekli değişiyor).
const priceRoutes = priceContent.map((entry) => `/${entry.category}/${entry.slug}`);

export default function sitemap(): MetadataRoute.Sitemap {
  const priceEntries: MetadataRoute.Sitemap = priceRoutes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "hourly",
    priority: 0.8,
  }));

  // Anasayfa da canlı fiyat verisi gösteriyor, priceRoutes ile aynı
  // gerekçeyle "hourly" + "şu an" doğru.
  const homeEntry: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: new Date(), changeFrequency: "hourly", priority: 1 },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticContentRoutes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: STATIC_CONTENT_LAST_MODIFIED,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...homeEntry, ...staticEntries, ...priceEntries];
}
