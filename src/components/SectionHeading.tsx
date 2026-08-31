// Roma Jewellers referansındaki motif: ortalanmış başlık + altında kısa,
// altın renkli bir çizgi. Anasayfa/iniş sayfası niteliğindeki bölümlerde
// kullanılıyor; uzun okuma sayfalarında (rehber makaleleri) tarama
// kolaylığı için başlıklar sola yaslı kalıyor.
export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
        {title}
      </h2>
      <span
        aria-hidden="true"
        className="mx-auto mt-3 block h-0.5 w-14 rounded-full bg-amber-600 dark:bg-amber-500"
      />
      {subtitle && (
        <p className="mx-auto mt-3 max-w-xl text-sm text-stone-500 dark:text-stone-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}
