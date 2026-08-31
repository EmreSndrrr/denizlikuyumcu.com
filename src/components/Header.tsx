import Link from "next/link";

const navLinks = [
  { href: "/", label: "Anasayfa" },
  { href: "/kuyumcular", label: "Kuyumcular" },
  { href: "/rehber", label: "Rehber" },
  { href: "/reklam-ver", label: "Reklam Ver" },
];

export default function Header() {
  return (
    <header className="border-b border-stone-200 bg-white/85 backdrop-blur sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="flex items-baseline gap-1 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700"
        >
          <span className="font-serif text-xl font-bold tracking-tight text-amber-700">
            Denizli
          </span>
          <span className="font-serif text-xl font-bold tracking-tight text-stone-900">
            Kuyumcu
          </span>
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-stone-700 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-sm py-2 transition-colors hover:text-amber-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/reklam-ver"
          className="rounded-full bg-stone-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-amber-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
        >
          Reklam Ver
        </Link>
      </div>
    </header>
  );
}
