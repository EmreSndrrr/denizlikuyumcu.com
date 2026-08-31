import Link from "next/link";

const navLinks = [
  { href: "/", label: "Anasayfa" },
  { href: "/kuyumcular", label: "Kuyumcular" },
  { href: "/rehber", label: "Rehber" },
  { href: "/reklam-ver", label: "Reklam Ver" },
];

export default function Header() {
  return (
    <header className="border-b border-amber-900/10 bg-white/80 backdrop-blur sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-baseline gap-1">
          <span className="text-xl font-bold tracking-tight text-amber-800">
            Denizli
          </span>
          <span className="text-xl font-bold tracking-tight text-neutral-900">
            Kuyumcu
          </span>
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-neutral-700 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-amber-800"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/reklam-ver"
          className="rounded-full bg-amber-800 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-amber-900"
        >
          Reklam Ver
        </Link>
      </div>
    </header>
  );
}
