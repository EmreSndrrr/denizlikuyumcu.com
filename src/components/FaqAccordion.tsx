"use client";

// SSS listesi — motion ile 220ms yükseklik+opacity geçişli, klavye ve
// ekran okuyucu için standart "disclosure" deseni (button + aria-expanded
// + aria-controls). Native <details>'ten motion'a geçişin nedeni: native
// eleman yükseklik animasyonunu desteklemiyor, motion "auto" yüksekliğe
// animasyonu ölçüp kendisi hesaplıyor.

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import type { FaqItem } from "@/lib/faq";

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  return (
    <div className="mt-6 max-w-3xl divide-y divide-border rounded-2xl border border-border bg-surface">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `faq-panel-${i}`;
        return (
          <div key={item.question} className="p-5">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full items-center justify-between gap-4 text-left text-sm font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {item.question}
              <CaretDown
                aria-hidden="true"
                size={16}
                className={
                  "shrink-0 text-muted transition-transform duration-200 " +
                  (isOpen ? "rotate-180" : "")
                }
              />
            </button>
            <motion.div
              id={panelId}
              role="region"
              initial={false}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.22, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="mt-3 text-sm text-muted">{item.answer}</p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
