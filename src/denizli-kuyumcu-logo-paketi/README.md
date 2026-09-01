# Denizli Kuyumcu logo paketi

Onaylanan horoz + negatif alanda yükselen ok tasarımı gerçek vektör olarak yeniden çizildi. Alt tanımlayıcı metin tam olarak **Altın Tavsiye Kuyumcu** şeklindedir.

## Ana renkler

- Metalik altın: ekran ve dijital kullanım için SVG gradyanı
- Düz altın: `#B78A32`
- Bronz: `#8B642C`
- Grafit: `#292826`
- Beyaz: `#FFFFFF`

## Klasörler

- `svg/`: Ana yatay, alt metinsiz, dikey, sembol, yazı logosu, koyu zemin ve tek renk sürümleri
- `4k/`: 3840×960 sıkı logo ve 3840×2160 UHD şeffaf tuval
- `banner/`: 4:1 SVG, 3840×960 ve 1920×480 PNG
- `png/`: Web ve sosyal medya için farklı ölçüler
- `favicon/`: SVG favicon, 16/32/48 PNG, ICO, Apple Touch ve PWA ikonları
- `pdf/`: Matbaa için vektörel PDF

Tüm SVG yazıları eğriye çevrilmiştir; font kurulumu gerektirmez. Tüm PNG dosyaları RGBA ve şeffaf arka planlıdır.

## Hangi sürüm nerede?

- Açık zemin: `svg/denizli-kuyumcu-horizontal.svg`
- Baskı/folyo/gravür: `svg/denizli-kuyumcu-horizontal-duz-altin.svg`
- Koyu zemin: `svg/denizli-kuyumcu-horizontal-koyu-zemin.svg`
- Çok küçük alan: `svg/denizli-kuyumcu-sembol-duz-altin.svg`
- Tek renk baskı: `svg/denizli-kuyumcu-tek-renk-grafit.svg`

## Next.js kurulumu

Dosyaları `public/brand` ve `public/favicon` altında kullanabilirsiniz.

```tsx
import Image from "next/image";

<Image
  src="/brand/denizli-kuyumcu-horizontal.svg"
  alt="Denizli Kuyumcu"
  width={1600}
  height={400}
  priority
/>
```

`app/layout.tsx` metadata örneği:

```tsx
export const metadata = {
  icons: {
    icon: [
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};
```

Koyu zemin sürümünün kendisi arka plansızdır; yalnızca yazıları beyazdır. Tasarımda koyu bir arka plan üzerinde kullanılmalıdır.
