import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

// Bölüm başlıkları artık varsayılan olarak SOLA hizalı + sağda opsiyonel
// bir "Tümünü görüntüle" bağlantısı — tekrarlanan ortalı başlık + altın
// çizgi deseni siteyi şablon gibi gösterdiği için kaldırıldı (kullanıcı
// geri bildirimi). Ortalı biçim artık sadece `centered` prop'uyla,
// hero/kampanya gibi gerçekten özel alanlarda kullanılmalı.
export default function SectionHeading({
  title,
  subtitle,
  action,
  centered = false,
}: {
  title: string;
  subtitle?: string;
  action?: { label: string; href: string };
  centered?: boolean;
}) {
  if (centered) {
    return (
      <div className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-ink">
          {title}
        </h2>
        <span
          aria-hidden="true"
          className="mx-auto mt-3 block h-0.5 w-14 rounded-full bg-brand"
        />
        {subtitle && (
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted">{subtitle}</p>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-[28px]">
          {title}
        </h2>
        {subtitle && <p className="mt-2 text-sm text-muted">{subtitle}</p>}
      </div>
      {action && (
        <Link
          href={action.href}
          className="inline-flex shrink-0 items-center gap-1 rounded-sm py-2 text-sm font-medium text-brand hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        >
          {action.label}
          <ArrowRight aria-hidden="true" size={14} />
        </Link>
      )}
    </div>
  );
}
