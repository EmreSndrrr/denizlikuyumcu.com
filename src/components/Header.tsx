"use client";

// Header artık scroll durumunu (küçülme) ve aktif rotayı (alt çizgi
// göstergesi) izlemesi gerektiği için client component. Ana aksiyon
// "Reklam Ver"den "Kuyumcu Bul"a taşındı — ziyaretçinin asıl amacı bu;
// gelir modeli için önemli olan "İşletmeni Ekle" daha küçük, ikincil bir
// bağlantı olarak duruyor.

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin } from "@phosphor-icons/react/dist/ssr";
import ThemeToggle from "@/components/ThemeToggle";
import HeaderSearch from "@/components/HeaderSearch";

const navLinks = [
  { href: "/#altin-fiyatlari", label: "Altın Fiyatları" },
  { href: "/#doviz", label: "Döviz" },
  { href: "/kuyumcular", label: "Kuyumcular" },
  { href: "/#hesaplama", label: "Hesaplama" },
  { href: "/rehber", label: "Rehber" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
            // Sadece gerçek rotalar (Kuyumcular/Rehber) için aktif
            // göstergesi hesaplanıyor; anasayfa içi çapa (#) linkleri için
            // scroll-spy henüz eklenmedi (bilinen kapsam dışı bırakma).
            const isActive =
              !link.href.includes("#") && pathname.startsWith(link.href);
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
            className="hidden text-sm font-medium text-muted hover:text-ink md:inline-block"
          >
            İşletmeni Ekle
          </Link>
          <Link
            href="/kuyumcular"
            className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-surface transition-colors hover:bg-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <MapPin aria-hidden="true" size={15} weight="bold" />
            <span className="hidden sm:inline">Kuyumcu Bul</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
