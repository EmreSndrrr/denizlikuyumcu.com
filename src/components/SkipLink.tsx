// Klavye/ekran okuyucu kullanıcılarının header ve kayan fiyat şeridini
// atlayıp doğrudan sayfa içeriğine geçebilmesi için — WCAG 2.4.1 "Bypass
// Blocks". Görsel olarak gizli, yalnızca klavye odağı aldığında görünür.
// Server Component olarak kalabilir (etkileşim gerekmiyor, saf CSS
// :focus davranışı).
export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-[100] focus-visible:rounded-full focus-visible:bg-ink focus-visible:px-4 focus-visible:py-3 focus-visible:text-sm focus-visible:font-semibold focus-visible:text-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      İçeriğe geç
    </a>
  );
}
