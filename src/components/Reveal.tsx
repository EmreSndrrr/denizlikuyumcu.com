"use client";

// Kart girişleri için ortak mikro-animasyon: 8px aşağıdan + opacity, 280ms.
//
// İki mod var:
//  - "view" (varsayılan): içerik ekrana girince BİR KEZ oynar
//    (whileInView). Sayfa aşağısındaki kartlar için (fiyat kartları,
//    kuyumcu kartları vb.).
//  - "mount": bileşen bağlanır bağlanmaz oynar. Hero gibi zaten ilk
//    ekranda olan, scroll beklemeye gerek olmayan içerik için —
//    whileInView burada güvenilmez olurdu (viewport ölçümü ilk boyamadan
//    hemen sonra henüz tam kararlı olmayabilir).
//
// ÖNEMLİ (canlı hata ayıklamasıyla bulundu): `initial` DEĞERİNİ
// `reduceMotion`'a göre dallandırmıyoruz (ör. `initial={reduceMotion ?
// false : HIDDEN}`). motion/react'in useReducedMotion()'ı sunucu tarafında
// modül-seviyesi bir singleton'a dayanıyor ve AYNI render ağacındaki farklı
// bileşen örnekleri arasında bile SUNUCU TARAFINDA TUTARSIZ değer
// dönebiliyor (doğrulandı: hero'daki mount-modlu örnekler SSR çıktısında
// `opacity:1` ile donuyor, aşağıdaki view-modlu örnekler `opacity:0`
// alıyordu). Bu bileşenler sayfa ömrü boyunca yalnızca BİR KEZ mount
// olduğu için, SSR anında yanlışlıkla "false" (baştan görünür) değerini
// alan bir örnek bir daha ASLA animasyon oynatmıyordu — "hiç animasyon
// yok" şikayetinin kök nedeni buydu. Çözüm: `initial` HER ZAMAN sabit
// HIDDEN; reduced-motion tercihini yalnızca `transition.duration`'ı 0'a
// çekerek (JS'in tamamen client-side, hydration SONRASI çalışan
// mantığıyla) uyguluyoruz — bu hem SSR'da tutarlı hem erişilebilir
// (hareketsiz, ani geçiş; WCAG hareketi TAMAMEN kaldırmayı değil rahatsız
// etmemeyi ister).
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const HIDDEN = { opacity: 0, y: 8 };
const SHOWN = { opacity: 1, y: 0 };

export default function Reveal({
  children,
  delay = 0,
  className,
  mode = "view",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  mode?: "view" | "mount";
}) {
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : mode === "mount" ? 0.32 : 0.28;
  const effectiveDelay = reduceMotion ? 0 : delay;

  if (mode === "mount") {
    return (
      <motion.div
        initial={HIDDEN}
        animate={SHOWN}
        transition={{ duration, delay: effectiveDelay, ease: "easeOut" }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={HIDDEN}
      whileInView={SHOWN}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay: effectiveDelay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
