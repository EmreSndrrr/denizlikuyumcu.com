"use client";

import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { trackEvent } from "@/lib/analytics";

// Reklam teklifi almak isteyen kuyumcular için tek tıkla WhatsApp
// bağlantısı. Site genelinde yüzen/sabit bir "chat bubble" KULLANMIYORUZ —
// brief'in "aşırı hareketli/oyunlaştırılmış" öğe yasağıyla çelişir; bunun
// yerine yalnızca reklam/teklif bağlamının olduğu yerlerde (Reklam Ver
// sayfası, fiyat sayfası reklam alanı) normal bir buton/link olarak
// görünüyor.
const WHATSAPP_NUMBER = "905445965622"; // +90 544 596 56 22

export default function WhatsAppCta({
  message = "Merhaba, DenizliKuyumcu.com'da reklam vermek istiyorum.",
  label = "WhatsApp'tan yazın",
  variant = "button",
  className = "",
  // Ölçüm için: bu buton hangi sayfada/bağlamda? Kişisel veri değil,
  // sabit bir kategori etiketi (bkz. lib/analytics.ts).
  context = "unknown",
}: {
  message?: string;
  label?: string;
  // "button": dolgulu, birincil CTA görünümü. "link": sade metin bağlantısı
  // (ör. bir bilgi kartının içinde ikincil seçenek olarak).
  variant?: "button" | "link";
  className?: string;
  context?: string;
}) {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  const buttonClass =
    "inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-all hover:brightness-95 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]";
  const linkClass =
    "inline-flex items-center gap-1.5 text-sm font-semibold text-positive hover:underline";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", { context })}
      className={(variant === "button" ? buttonClass : linkClass) + " " + className}
    >
      <WhatsappLogo aria-hidden="true" size={variant === "button" ? 18 : 15} weight="fill" />
      {label}
    </a>
  );
}
