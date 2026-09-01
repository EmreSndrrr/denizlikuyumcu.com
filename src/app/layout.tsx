import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PriceMarquee from "@/components/PriceMarquee";
import PageTransition from "@/components/PageTransition";
import { getPrices } from "@/lib/prices";

// Tek font ailesi: Inter. Ekran okunabilirliği için tasarlanmış, "daha
// modern ve okunabilir" istekle en iyi örtüşen seçim — hem başlıklarda
// (700-800 ağırlık, sıkı harf aralığı) hem gövde/fiyat rakamlarında
// (400-500 ağırlık, tabular rakam desteği) kullanılıyor. Tek aile
// olduğu için "diğer fontla uyum" sorunu da baştan ortadan kalkıyor.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://denizlikuyumcu.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Denizli Kuyumcu | Güncel Altın Fiyatları ve Kuyumcu Rehberi",
    template: "%s | DenizliKuyumcu.com",
  },
  description:
    "Denizli'de güncel gram altın, çeyrek altın ve döviz fiyatları; Denizli kuyumcu rehberi, altın ayarı ve alım-satım rehberleri.",
  keywords: [
    "denizli kuyumcu",
    "güncel altın fiyatı",
    "gram altın",
    "çeyrek altın",
    "döviz kurları",
    "denizli altıncı",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "DenizliKuyumcu.com",
    title: "Denizli Kuyumcu | Güncel Altın Fiyatları ve Kuyumcu Rehberi",
    description:
      "Denizli'de güncel altın ve döviz fiyatları, kuyumcu rehberi ve alım-satım öncesi bilgilendirme içerikleri.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Tema tercihini (localStorage -> yoksa işletim sistemi) React hydrate
// olmadan ÖNCE, senkron olarak uyguluyoruz; aksi halde önce açık temayla
// boyanıp bir an sonra koyuya geçen bir "flash" (FOUC) görülür.
// next/script'in "beforeInteractive" stratejisi tam olarak bunun için
// var: <body>'nin normal bir çocuğu olarak yazılsa bile Next.js bu
// script'i otomatik olarak belgenin <head>'ine taşıyıp hydrate'ten önce
// çalıştırıyor. (Ham bir <script>'i <html>'in doğrudan çocuğu — yani
// <body>'nin kardeşi — yapmak Next.js App Router'da hydration hatasına
// yol açtığı için bu resmi API kullanılıyor.)
const THEME_INIT_SCRIPT = `(function(){try{var s=localStorage.getItem('theme');var d=s==='dark'||(!s&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);document.documentElement.style.colorScheme=d?'dark':'light';}catch(e){}})();`;

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const prices = await getPrices();

  return (
    <html
      lang="tr"
      suppressHydrationWarning
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg font-sans text-ink [font-variant-numeric:tabular-nums]">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }}
        />
        <PriceMarquee initialData={prices} />
        <Header />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
