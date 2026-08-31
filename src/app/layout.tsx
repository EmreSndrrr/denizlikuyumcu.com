import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-neutral-50 text-neutral-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
