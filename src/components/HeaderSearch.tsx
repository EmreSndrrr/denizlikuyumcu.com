"use client";

// Header'daki büyüteç ikonu — tıklanınca site içi sayfa/bölümleri
// filtreleyen küçük bir arama kutusu açılır. Tam bir arama motoru değil;
// sitenin ölçeğinde statik bir dizini (bkz. lib/searchIndex.ts) süzen
// hafif bir "hızlı gezinme" aracı.

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MagnifyingGlass, X } from "@phosphor-icons/react/dist/ssr";
import { searchIndex } from "@/lib/searchIndex";

export default function HeaderSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const results =
    query.trim().length === 0
      ? []
      : searchIndex.filter((entry) =>
          entry.label.toLocaleLowerCase("tr").includes(query.toLocaleLowerCase("tr"))
        );

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label="Sitede ara"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted transition-colors hover:bg-border/50 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        <MagnifyingGlass aria-hidden="true" size={17} weight="bold" />
      </button>

      {open && (
        <div className="absolute right-0 top-11 z-50 w-72 rounded-2xl border border-border bg-surface p-3 shadow-lg sm:w-80">
          <div className="flex items-center gap-2 rounded-lg border border-border px-3 py-2">
            <MagnifyingGlass aria-hidden="true" size={15} className="text-muted" />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Fiyatlar, kuyumcular, rehber..."
              className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-muted"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Aramayı temizle"
                className="text-muted hover:text-ink"
              >
                <X aria-hidden="true" size={14} />
              </button>
            )}
          </div>

          {query.trim().length > 0 && (
            <ul className="mt-2 max-h-72 overflow-y-auto">
              {results.length === 0 ? (
                <li className="px-2 py-3 text-sm text-muted">Sonuç bulunamadı.</li>
              ) : (
                results.map((r) => (
                  <li key={r.href}>
                    <Link
                      href={r.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between rounded-lg px-2 py-2 text-sm text-ink hover:bg-bg focus-visible:bg-bg focus-visible:outline-none"
                    >
                      {r.label}
                      <span className="text-xs text-muted">{r.group}</span>
                    </Link>
                  </li>
                ))
              )}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
