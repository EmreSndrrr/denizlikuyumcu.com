"use client";

// Kart girişleri için ortak mikro-animasyon: 8px aşağıdan + opacity,
// 280ms — sadece kart görünüme girdiğinde bir kez oynar. useReducedMotion
// tercihi açıksa hareketi tamamen kapatıyoruz (motion/react'in kendi
// desteği — bkz. brief'teki "Animasyon sistemi" bölümü).
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.28, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
