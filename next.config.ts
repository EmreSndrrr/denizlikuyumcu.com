import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Logo paketindeki marka SVG'lerini next/image ile göstermek için
    // gerekli — Next.js güvenlik gereği SVG'yi varsayılan olarak
    // reddediyor (gömülü script riski). Bunlar bizim kendi statik marka
    // varlıklarımız (kullanıcı yüklemesi DEĞİL), bu yüzden güvenli.
    // Önerilen ek önlemler: indirmeye zorlama + script çalıştırmayı
    // engelleyen CSP (bkz. Next.js next/image dokümantasyonu).
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
