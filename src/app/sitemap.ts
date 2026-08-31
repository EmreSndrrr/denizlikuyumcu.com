import type { MetadataRoute } from "next";

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
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "hourly" : "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
