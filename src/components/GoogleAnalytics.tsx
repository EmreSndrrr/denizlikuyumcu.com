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

import Script from "next/script";
import { useConsent } from "@/lib/consent";

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
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}

// SAYFA GÖRÜNTÜLEMELERİ — burada elle page_view GÖNDERİLMİYOR, bilerek.
//
// App Router istemci tarafı gezinmede tam sayfa yüklemesi yapmaz, History
// API kullanır. Bu yüzden önce "gezinmeleri biz sayalım" diye elle
// gönderim eklenmişti; canlıda ölçünce her gezinme için GA'ya İKİ page_view
// gittiği görüldü (_s sıra numaraları 4 ve 5). dataLayer izlenerek bunun
// yalnızca biri bizden, diğeri doğrudan gtag.js'ten geldiği doğrulandı:
// GA4 mülkünde "Gelişmiş ölçüm > tarayıcı geçmişi olaylarına dayalı sayfa
// değişiklikleri" açık ve gezinmeleri zaten kendisi sayıyor. Elle gönderim
// yalnızca çift sayım üretiyordu.
//
// DİKKAT: Bu kurulum GA panelindeki o ayara bağlı. Gelişmiş ölçüm (ya da
// içindeki "sayfa değişiklikleri" maddesi) kapatılırsa istemci tarafı
// gezinmeler sayılmaz — yalnızca ziyaretçinin girdiği ilk sayfa görünür.
// O durumda buraya pathname'i izleyen bir page_view göndericisi eklenmeli
// ve config'e send_page_view: false konmalıdır.
