import type { MetadataRoute } from "next";
import { priceContent } from "@/lib/priceContent";

// app/sitemap.ts -> Next.js bunu otomatik olarak /sitemap.xml olarak sunar.
const siteUrl = "https://denizlikuyumcu.com";

const staticRoutes = [
  "",
  "/kuyumcular",
  "/rehber",
  "/reklam-ver",
  "/rehber/altin-ayari-nedir",
  "/rehber/gram-altin-hesaplama",
  "/rehber/alyans-rehberi",
  "/rehber/altin-nasil-saklanir",
  "/hakkimizda",
  "/iletisim",
  "/veri-kullanimi",
  "/kvkk",
  "/cerez-politikasi",
];

// Her altın/döviz kalemi için ayrı fiyat sayfası — bkz. lib/priceContent.ts
// ve app/altin/[slug], app/doviz/[slug]. Fiyatlar sık güncellendiği için
// bu sayfalar da anasayfa gibi "hourly" değişim sıklığıyla işaretleniyor.
const priceRoutes = priceContent.map((entry) => `/${entry.category}/${entry.slug}`);

export default function sitemap(): MetadataRoute.Sitemap {
  const priceEntries: MetadataRoute.Sitemap = priceRoutes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "hourly",
    priority: 0.8,
  }));

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "hourly" : "weekly",
    priority: path === "" ? 1 : 0.7,
  }));

  return [...staticEntries, ...priceEntries];
}
