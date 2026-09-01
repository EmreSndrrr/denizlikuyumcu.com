"use client";

// Sayfalar arası geçişte hafif bir opacity + 6px hareket (150-220ms) —
// route değiştiğinde <main>'in içeriğini bu bileşen sarmalıyor.
// usePathname() değiştiğinde motion'ın key'i değişip AnimatePresence
// çıkış/giriş animasyonunu tetikliyor. useReducedMotion tercihine saygı
// duyuluyor.

import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={reduceMotion ? false : { opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
        transition={{ duration: reduceMotion ? 0 : 0.18, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
