"use client";

// Google Analytics 4 — YALNIZCA kullanıcı çerez bildiriminde "Kabul
// Ediyorum" dediyse yüklenir.
//
// Neden onaya bağlı: GA4, ziyaretçiye kalıcı bir kimlik atayan `_ga` ve
// `_ga_<ölçüm-kimliği>` çerezlerini yazar. Bu, sitenin Çerez Politikası ve
// KVKK Aydınlatma Metni'nde tarif edilen "açık rıza" gerektiren izleme
// kategorisine girer. Betiği koşulsuz eklemek, kullanıcı daha seçim
// yapmadan çerez yazılması anlamına gelirdi.
//
// Vercel Web Analytics (layout.tsx) ayrı bir araç ve çerezsiz çalıştığı
// için onaydan bağımsız olarak yüklenmeye devam ediyor.

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import { useConsent } from "@/lib/consent";

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagFn;
  }
}

// Ölçüm kimliği gizli bir değer değil — istemciye gönderilen her sayfada
// zaten görünür. Bu yüzden ortam değişkeni yerine burada duruyor.
const GA_MEASUREMENT_ID = "G-GRBTTL1H83";

export default function GoogleAnalytics() {
  const consent = useConsent();

  // "unknown" (sunucu/hidrasyon) ve "none"/"rejected" durumlarında hiçbir
  // şey render edilmez: betik indirilmez, çerez yazılmaz.
  if (consent !== "accepted") return null;

  return (
    <>
      <Script
        id="ga4-src"
        // afterInteractive: sayfa etkileşime hazır olduktan sonra yüklenir.
        // beforeInteractive uygun DEĞİL — o strateji yalnızca kök layout'ta
        // koşulsuz çalışır, oysa burada onaya bağlı bir koşul var.
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
        `}
      </Script>
      <PageViewTracker />
    </>
  );
}

// Sayfa görüntülemelerini BİZ gönderiyoruz; yukarıdaki config'de
// send_page_view kapalı.
//
// Neden: App Router istemci tarafı gezinmede tam sayfa yüklemesi yapmaz,
// History API kullanır. Yerelde ölçüldü — varsayılan kurulumda ilk açılışta
// bir page_view gidiyor, sonraki gezinmelerde HİÇBİR isabet gitmiyordu.
// Yani ziyaretçinin yalnızca siteye girdiği ilk sayfa sayılıyordu.
//
// GA4'ün "Gelişmiş ölçüm > tarayıcı geçmişi olayları" ayarına bel
// bağlamak yerine gönderimi elle yapıyoruz: ayar açık da olsa kapalı da
// olsa her yol değişiminde tam olarak bir page_view gider, çift sayım
// olmaz.
function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // useSearchParams BİLİNÇLİ olarak kullanılmıyor: App Router'da bir
    // client component'te çağrıldığında Suspense sınırı gerektiriyor ve
    // statik sayfaları istemci render'ına düşürüyor. Yol değişimini
    // izlemek için pathname yeterli; adresin sorgu dizisi dahil tam hâli
    // zaten aşağıda location.href ile gönderiliyor.
    const gtag: GtagFn =
      window.gtag ??
      ((...args: unknown[]) => {
        // Betikler henüz yüklenmediyse kuyruğa yaz; gtag.js yüklenince
        // dataLayer'daki bu kayıtları işler.
        window.dataLayer = window.dataLayer ?? [];
        window.dataLayer.push(args);
      });

    gtag("event", "page_view", {
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  return null;
}
