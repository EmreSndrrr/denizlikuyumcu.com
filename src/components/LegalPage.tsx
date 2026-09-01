import type { ReactNode } from "react";

// Hakkımızda/İletişim/KVKK gibi "kurumsal" sayfalar için ortak, sade bir
// düzen. @tailwindcss/typography'nin `prose` sınıfları uzun metin
// içeriğini (başlıklar, listeler, paragraflar) elle stil vermeden okunaklı
// hale getiriyor; `dark:prose-invert` karanlık modda renkleri tersine
// çeviriyor.
export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        {title}
      </h1>
      {updated && (
        <p className="mt-2 text-sm text-muted">Son güncelleme: {updated}</p>
      )}
      <div className="prose prose-stone dark:prose-invert mt-8 max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-brand">
        {children}
      </div>
    </div>
  );
}
