import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PriceMarquee from "@/components/PriceMarquee";
import PageTransition from "@/components/PageTransition";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import { getPrices } from "@/lib/prices";

// Ana arayüz fontu: Inter. Ekran okunabilirliği için tasarlanmış, tabular
// rakam desteği olan bir sans-serif — arayüz, butonlar, fiyatlar ve
// tablolarda kullanılıyor (brief: "mevcut font uygunsa koru"). Türkçe
// karakter desteği eksiksiz olduğu için değiştirilmedi.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// İkinci ve TEK ek font: Fraunces. Sadece editoryal rehber başlıklarında
// (GuideArticle H1'i, rehber liste başlıkları) sınırlı/kontrollü şekilde
// kullanılıyor — brief'in "sıcak ve rafine kuyumculuk estetiği" hedefi
// için; tablo, form ve küçük arayüz metinlerine ASLA uygulanmıyor.
// "latin-ext" alt kümesi Türkçe karakterler (ı, ğ, ş) için gerekli.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
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
  // Google Search Console'a mülk doğrulaması — HTML tag yöntemi.
  verification: {
    google: "6lH1m23JXQ4o5C84Ffg381vRFRKnaw5En4zG1aTm7UY",
  },
};

// Tema tercihini (localStorage -> yoksa işletim sistemi) React hydrate
// olmadan ÖNCE, senkron olarak uyguluyoruz; aksi halde önce açık temayla
// boyanıp bir an sonra koyuya geçen bir "flash" (FOUC) görülür.
//
// ÖNEMLİ: Bu, DÜZ bir <script> etiketi olarak <body>'nin İLK çocuğudur —
// `next/script` DEĞİL. `next/script strategy="beforeInteractive"` App
// Router'da script'i `self.__next_s` kuyruğuna atıp framework JS'i
// yüklendikten sonra çalıştırıyor; bu da her tam sayfa yüklemesinde
// gözle görülür bir tema sıçraması (light -> dark) yaratıyordu. Düz,
// src'siz, async/defer'siz bir <script> ise HTML ayrıştırılırken, gövde
// içeriği boyanmadan ÖNCE senkron çalışır — istenen davranış budur.
const THEME_INIT_SCRIPT = `(function(){try{var s=localStorage.getItem('theme');var d=s==='dark'||(!s&&window.matchMedia('(prefers-color-scheme: dark)').matches);var e=document.documentElement;e.classList.toggle('dark',d);e.style.colorScheme=d?'dark':'light';}catch(e){}})();`;

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const prices = await getPrices();

  return (
    <html
      lang="tr"
      suppressHydrationWarning
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg font-sans text-ink [font-variant-numeric:tabular-nums_lining-nums]">
        {/* Düz inline <script> — <body>'nin ilk çocuğu, senkron çalışır
            (bkz. THEME_INIT_SCRIPT yorumu). */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <PriceMarquee initialData={prices} />
        <Header />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <CookieConsentBanner />
        {/* Vercel Web Analytics — çerezsiz, kişisel veri toplamayan
            ziyaretçi istatistiği (sayfa görüntüleme, ülke/cihaz kırılımı).
            IP adresi kalıcı saklanmaz, parmak izi çıkarılmaz. Reklam
            envanterini gerçek trafik verisiyle sunabilmek için gerekli
            (bkz. /gizlilik-politikasi). Vercel panelinden Analytics'in
            ayrıca etkinleştirilmesi gerekir. */}
        <Analytics />
      </body>
    </html>
  );
}
