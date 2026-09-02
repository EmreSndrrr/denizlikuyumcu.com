import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Güvenlik denetimi (Eylül 2026) bulgusu: sitede hiçbir HTTP güvenlik
  // başlığı yoktu. Site kullanıcı hesabı/form/ödeme almadığı için risk
  // düşük, ama bu başlıklar bedelsiz ve standart bir "iyi hijyen"
  // önlemi. Tam bir Content-Security-Policy BİLEREK eklenmedi — yanlış
  // yapılandırılmış bir CSP siteyi (motion animasyonları, next/font vb.)
  // sessizce kırabilir; bu, canlıda test edilerek ayrı bir adımda
  // eklenmeli (bkz. seo-audit/ACTION-PLAN.md).
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Sitenin başka bir sayfada <iframe> içine gizlice
          // gömülüp tıklama-kaçırma (clickjacking) saldırısında
          // kullanılmasını engeller.
          { key: "X-Frame-Options", value: "DENY" },
          // Tarayıcının bir dosyayı Content-Type'ından farklı
          // yorumlamasını (MIME sniffing) engeller.
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Site içi linklerde tam URL, dış sitelere giden linklerde
          // sadece origin gönderir — sorgu parametresi/yol sızdırmaz.
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Kamera/mikrofon/konum gibi API'leri site hiç kullanmıyor —
          // açıkça kapatmak, ileride bir bağımlılık üzerinden yanlışlıkla
          // etkinleşmesini de engeller.
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          // Sadece HTTPS üzerinden erişilsin (canlıda Vercel zaten HTTPS
          // zorunlu kılıyor, bu ek bir garanti katmanı).
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
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
