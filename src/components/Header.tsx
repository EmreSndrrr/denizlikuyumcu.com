"use client";

// Header artık scroll durumunu (küçülme), aktif rotayı (alt çizgi
// göstergesi) ve — anasayfadayken — scroll-spy ile hangi bölümün görünümde
// olduğunu izlemesi gerektiği için client component. Ana aksiyon "Reklam
// Ver"den "Kuyumcu Bul"a taşındı — ziyaretçinin asıl amacı bu; gelir
// modeli için önemli olan "İşletmeni Ekle" daha küçük, ikincil bir
// bağlantı olarak duruyor.

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, List, X } from "@phosphor-icons/react/dist/ssr";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import ThemeToggle from "@/components/ThemeToggle";
import HeaderSearch from "@/components/HeaderSearch";

const navLinks = [
  { href: "/#altin-fiyatlari", label: "Altın Fiyatları" },
  { href: "/#doviz", label: "Döviz" },
  { href: "/kuyumcular", label: "Kuyumcular" },
  { href: "/#hesaplama", label: "Hesaplama" },
  { href: "/rehber", label: "Rehber" },
];

const anchorIds = navLinks
  .filter((l) => l.href.includes("#"))
  .map((l) => l.href.split("#")[1]);

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  // Anasayfadaki hangi #id bölümünün şu an görünümde olduğu — çapa
  // linklerinin aktif göstergesini besliyor (gerçek rotalar zaten
  // pathname'den biliniyor, bu sadece homepage bölümleri için).
  const [activeAnchor, setActiveAnchor] = useState<string | null>(null);
  // Mobil menü (hamburger) — lg altında nav tamamen gizliydi, alternatifi
  // yoktu. Şimdi bir tam ekran panel açıyor; aynı navLinks listesini + alt
  // kısımda ikincil/birincil CTA'ları içeriyor, böylece masaüstünde
  // görebildiğin her şey mobilde de erişilebilir.
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  // Rota değiştiğinde menüyü otomatik kapat (bir linke tıklayınca). Bunu
  // bir effect yerine render sırasında yapıyoruz — React'in "prop
  // değiştiğinde state'i sıfırla" için önerdiği desen (bkz. "You Might
  // Not Need An Effect"). Not: burada bilerek useRef DEĞİL useState
  // kullanılıyor — render sırasında ref okuyup/yazmak React'in eşzamanlı
  // render modelinde güvenli değil (bir render birden fazla kez
  // denenebilir); state karşılaştırması bu yüzden doğru araç.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (menuOpen) setMenuOpen(false);
  }

  // Menü açıkken arka planın kaymasını engelle + Escape ile kapat.
  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // "/" dışındaki sayfalarda gözlemleyecek bir çapa elementi olmadığı
    // için hiç kurulmuyor; "aktif" görünmemesi gerektiğini effect içinde
    // setState ile SIFIRLAMAK yerine aşağıdaki render'da pathname'e göre
    // türetiyoruz (bkz. effectiveActiveAnchor) — bu hem bir lint kuralını
    // (react-hooks/set-state-in-effect) hem de gereksiz bir render turunu
    // önlüyor.
    if (pathname !== "/") return;
    const elements = anchorIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    // Viewport'un üst ~%25'lik şeridinde kesişen bölümlerden en üstteki
    // "aktif" kabul ediliyor — header'ın altında kalan gerçek okuma
    // alanına yakın bir eşik.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        const top = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b
        );
        setActiveAnchor(top.target.id);
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  // "/" dışındaki sayfalarda gözlemci hiç kurulmadığı için activeAnchor
  // eski bir değerde takılı kalabilir — kullanım noktasında pathname'e
  // göre türeterek bunu geçersiz kılıyoruz (bkz. yukarıdaki not).
  const effectiveActiveAnchor = pathname === "/" ? activeAnchor : null;

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/90 backdrop-blur transition-[padding] duration-200">
      <div
        className={
          "mx-auto flex max-w-[1240px] items-center justify-between gap-4 px-4 transition-[padding] duration-200 " +
          (scrolled ? "py-2.5" : "py-4")
        }
      >
        <Link
          href="/"
          className="flex items-baseline gap-1 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        >
          <span className="text-xl font-extrabold tracking-tight text-brand">
            Denizli
          </span>
          <span className="text-xl font-extrabold tracking-tight text-ink">
            Kuyumcu
          </span>
        </Link>

        <nav className="hidden gap-5 text-sm font-medium text-muted lg:flex">
          {navLinks.map((link) => {
            const isAnchor = link.href.includes("#");
            const isActive = isAnchor
              ? effectiveActiveAnchor === link.href.split("#")[1]
              : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  "relative whitespace-nowrap rounded-sm py-2 transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand " +
                  (isActive ? "text-ink" : "")
                }
              >
                {link.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-brand"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-3">
          <HeaderSearch />
          <ThemeToggle />
          <Link
            href="/reklam-ver"
            className="hidden text-sm font-medium text-muted transition-colors hover:text-ink active:scale-[0.98] md:inline-block"
          >
            İşletmeni Ekle
          </Link>
          <Link
            href="/kuyumcular"
            className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-surface transition-all hover:bg-brand active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <MapPin aria-hidden="true" size={15} weight="bold" />
            <span className="hidden sm:inline">Kuyumcu Bul</span>
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink transition-colors hover:bg-border/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand lg:hidden"
          >
            {menuOpen ? (
              <X aria-hidden="true" size={20} weight="bold" />
            ) : (
              <List aria-hidden="true" size={20} weight="bold" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              aria-hidden="true"
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-30 bg-ink/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.18 }}
            />
            {/* Header zaten "sticky" (= konumlanmış) olduğu için mutlak
                konumlanan bu panelin referans kutusu header'ın kendisi —
                header yüksekliğini ayrı bir değişkende tutmaya gerek yok. */}
            <motion.nav
              id="mobile-nav-panel"
              aria-label="Mobil menü"
              className="absolute inset-x-0 top-full z-30 max-h-[80dvh] overflow-y-auto border-b border-border bg-surface p-4 shadow-lg lg:hidden"
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: reduceMotion ? 0 : 0.2, ease: "easeOut" }}
            >
              <ul className="flex flex-col divide-y divide-border">
                {navLinks.map((link) => {
                  const isAnchor = link.href.includes("#");
                  const isActive = isAnchor
                    ? effectiveActiveAnchor === link.href.split("#")[1]
                    : pathname.startsWith(link.href);
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className={
                          "flex items-center justify-between py-3 text-base font-medium transition-colors " +
                          (isActive ? "text-brand" : "text-ink")
                        }
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-4 flex flex-col gap-2.5 border-t border-border pt-4">
                <Link
                  href="/reklam-ver"
                  onClick={() => setMenuOpen(false)}
                  className="text-center text-sm font-medium text-muted transition-colors hover:text-ink"
                >
                  İşletmeni Ekle
                </Link>
                <Link
                  href="/kuyumcular"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-1.5 rounded-full bg-ink px-4 py-3 text-sm font-semibold text-surface transition-colors hover:bg-brand"
                >
                  <MapPin aria-hidden="true" size={15} weight="bold" />
                  Kuyumcu Bul
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
