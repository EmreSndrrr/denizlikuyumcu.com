"use client";

// Sayfalar arası geçişte hafif bir opacity + 6px hareket (150-220ms) —
// route değiştiğinde <main>'in içeriğini bu bileşen sarmalıyor.
// usePathname() değiştiğinde motion'ın key'i değişip AnimatePresence
// çıkış/giriş animasyonunu tetikliyor.
//
// ÖNEMLİ (canlı hata ayıklamasıyla bulundu — "hiç animasyon yok"
// şikayetinin asıl kök nedeni burasıydı): `<AnimatePresence initial=
// {false}>` yalnızca KENDİ doğrudan çocuğunu değil, PresenceContext
// üzerinden İÇİNDEKİ TÜM motion bileşenlerinin (ne kadar derin iç içe
// olursa olsun) İLK MOUNT animasyonunu engelliyor — bkz.
// framer-motion/dist/es/motion/utils/use-visual-state.mjs:
// `isInitialAnimationBlocked = presenceContext.initial === false`.
// Bu bileşen TÜM sayfa içeriğini (`{children}`) sardığı için, eskiden
// buradaki `initial={false}` anasayfadaki hero girişini (Reveal
// mode="mount") ve grafiğin ilk çizim animasyonunu da SESSİZCE
// engelliyordu — ilk yüklemede hiçbiri oynamıyordu.
//
// Çözüm: AnimatePresence'ı artık HİÇBİR ŞEYİ engellemeyecek şekilde
// bırakıyoruz (initial prop'u kaldırıldı, varsayılan true). Sayfanın
// TAMAMININ ilk yüklemede içeri kaymasını (istenmeyen "tüm sayfa fade-in"
// etkisi) önlemek için bunun yerine SADECE bu bileşenin KENDİ
// motion.div'ine, ilk mount'ta true kalan bir state ile yerel bir
// `initial={false}` veriyoruz — bu yerel değer başka hiçbir bileşeni
// etkilemez (yalnızca context bazlı engelleme geniş kapsamlıydı).
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

// Modül seviyesinde, React state/ref DIŞINDA bir bayrak — bilerek. Render
// SIRASINDA `ref.current` okumak ve effect içinde SENKRON setState çağırmak
// ikisi de lint tarafından (haklı olarak) yasaklanıyor; burada tek ihtiyaç
// "bu sekmede PageTransition daha önce mount oldu mu" sorusuna render
// anında saf bir okuma. PageTransition <html>'e bağlı, uygulama ömrü
// boyunca yalnızca BİR KEZ mount olan bir bileşen olduğu için (route
// değişince yalnızca AnimatePresence'ın anahtarlı çocuğu değişir) bu
// modül-seviyesi değişken tarayıcıda tek bir sekme için doğru/kalıcı
// çalışır. Sunucu tarafında hiç DEĞİŞTİRİLMEDİĞİ için (yalnızca aşağıdaki
// effect'te, ki o yalnızca client'ta çalışır) istekler arası sızma riski
// yok — motion-dom'un `prefersReducedMotion` singleton'ının yol açtığı
// SSR tutarsızlığından (bkz. yukarıdaki not) FARKLI bir durum.
let hasMountedOnce = false;

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    hasMountedOnce = true;
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={hasMountedOnce ? { opacity: 0, y: 6 } : false}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: reduceMotion ? 0 : 0.18, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
