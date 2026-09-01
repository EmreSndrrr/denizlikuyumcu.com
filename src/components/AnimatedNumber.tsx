"use client";

// Fiyat değiştiğinde rakamın kendisi de (hücre vurgusuna ek olarak) eski
// değerden yeniye doğru kısa bir geçiş yapsın diye — brief'teki "Fiyat
// değişimi: Rakam geçişi + hücrede 600ms vurgu" maddesinin "rakam geçişi"
// kısmı. motion'ın animate() + useMotionValue/useTransform kombinasyonu,
// framer-motion/motion ekosisteminde "sayaç" animasyonu için standart
// desendir.

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useReducedMotion } from "motion/react";

export default function AnimatedNumber({
  value,
  format,
  className,
}: {
  value: number;
  format: (n: number) => string;
  className?: string;
}) {
  const motionValue = useMotionValue(value);
  const display = useTransform(motionValue, (v) => format(v));
  const reduceMotion = useReducedMotion();
  const isFirst = useRef(true);

  useEffect(() => {
    // İlk render'da animasyon oynatmaya gerek yok (zaten doğru değerle
    // boyanıyor); sadece SONRAKİ değişimlerde geçiş yapılıyor.
    if (isFirst.current) {
      isFirst.current = false;
      motionValue.jump(value);
      return;
    }
    if (reduceMotion) {
      motionValue.jump(value);
      return;
    }
    const controls = animate(motionValue, value, { duration: 0.5, ease: "easeOut" });
    return controls.stop;
    // motionValue kasıtlı olarak dependency değil — her render'da yeni
    // bir animate() tetiklememesi gerekiyor, sadece `value` değişince.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, reduceMotion]);

  return <motion.span className={className}>{display}</motion.span>;
}
