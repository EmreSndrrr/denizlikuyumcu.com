import type { ReactNode } from "react";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import { getAdForPosition } from "@/lib/ads";

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
    // Anasayfadaki (page.tsx) Organization @id'sine referans — aynı
    // varlığı tekrar tanımlamak yerine tek bir entity grafiğine bağlıyor.
    publisher: { "@id": "https://denizlikuyumcu.com/#organization" },
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Serif, brief'in "editoryal rehber başlıkları" için izin verdiği
          SINIRLI kullanım — sadece bu H1'de; makale içi <article>
          prose alt başlıkları (h2/h3) bilinçli olarak sans-serif kalıyor
          (gövde metniyle karışmasın diye). */}
      <h1 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 text-lg text-muted">{intro}</p>

      {/* Gerçek bir reklam yoksa (bkz. AdSlot.tsx) hiçbir şey render
          edilmiyor — sarmalayıcı boş bir boşluk bırakmasın diye burada
          da koşullu. */}
      {getAdForPosition("in-content") && (
        <div className="mt-8">
          <AdSlot position="in-content" />
        </div>
      )}

      <article className="prose prose-stone dark:prose-invert mt-8 max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-brand">
        {children}
      </article>

      <p className="mt-8 rounded-2xl border border-border bg-gold-surface/60 p-4 text-sm text-muted">
        Bu içerik genel bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
        Güncel fiyatlar için{" "}
        <Link href="/" className="font-medium text-brand hover:underline">
          anasayfadaki
        </Link>{" "}
        fiyat tablosuna göz atabilirsiniz.
      </p>
    </div>
  );
}
