import type { MetadataRoute } from "next";

// app/manifest.ts -> Next.js bunu otomatik olarak /manifest.webmanifest
// olarak sunar (bkz. sitemap.ts/robots.ts ile aynı desen). PWA olarak ana
// ekrana eklenirse (özellikle mobilde) kullanılacak isim/ikon/renkler —
// logo paketindeki site.webmanifest'in Next.js'e taşınmış hâli.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Denizli Kuyumcu",
    short_name: "Denizli Kuyumcu",
    description:
      "Denizli'de güncel altın ve döviz fiyatları, kuyumcu rehberi.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f4ed",
    theme_color: "#121310",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
