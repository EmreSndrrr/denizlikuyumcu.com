import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-950">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-stone-600 dark:text-stone-400">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="text-base font-extrabold tracking-tight text-stone-900 dark:text-stone-50">
              DenizliKuyumcu.com
            </p>
            <p className="mt-2 max-w-xs">
              Denizli&apos;de güncel altın ve döviz fiyatları, kuyumcu rehberi
              ve alım-satım öncesi bilgilendirme içerikleri.
            </p>
          </div>
          <div>
            <p className="font-semibold text-stone-900 dark:text-stone-50">Bağlantılar</p>
            <ul className="mt-2 space-y-1">
              <li><Link href="/kuyumcular" className="hover:text-amber-700 dark:hover:text-amber-400">Kuyumcular</Link></li>
              <li><Link href="/rehber" className="hover:text-amber-700 dark:hover:text-amber-400">Rehber</Link></li>
              <li><Link href="/reklam-ver" className="hover:text-amber-700 dark:hover:text-amber-400">Reklam Ver</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-stone-900 dark:text-stone-50">Yasal Uyarı</p>
            <p className="mt-2">
              Sitede yer alan fiyatlar bilgilendirme amaçlıdır, yatırım
              tavsiyesi değildir ve gecikmeli olabilir. Kesin alım-satım
              fiyatı için ilgili kuyumcuyla iletişime geçiniz.
            </p>
          </div>
        </div>
        <p className="mt-8 border-t border-stone-200 pt-6 text-xs text-stone-400 dark:border-stone-800 dark:text-stone-600">
          © {new Date().getFullYear()} DenizliKuyumcu.com — Tüm hakları
          saklıdır.
        </p>
      </div>
    </footer>
  );
}
