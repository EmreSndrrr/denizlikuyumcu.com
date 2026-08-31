import type { ReactNode } from "react";
import AdSlot from "@/components/AdSlot";

export default function GuideArticle({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: intro,
    inLanguage: "tr-TR",
    publisher: {
      "@type": "Organization",
      name: "DenizliKuyumcu.com",
    },
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="text-3xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50">{title}</h1>
      <p className="mt-3 text-lg text-stone-600 dark:text-stone-400">{intro}</p>

      <div className="mt-8">
        <AdSlot position="in-content" />
      </div>

      <article className="prose prose-stone dark:prose-invert mt-8 max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-amber-700 dark:prose-a:text-amber-400">
        {children}
      </article>

      <p className="mt-10 rounded-lg border border-stone-200 bg-amber-50 p-4 text-sm text-stone-600 dark:border-stone-800 dark:bg-amber-950/30 dark:text-stone-400">
        Bu içerik genel bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
        Güncel fiyatlar için{" "}
        <a href="/" className="font-medium text-amber-700 hover:underline dark:text-amber-400">
          anasayfadaki
        </a>{" "}
        fiyat tablosuna göz atabilirsiniz.
      </p>
    </div>
  );
}
