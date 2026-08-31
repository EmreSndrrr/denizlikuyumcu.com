import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-amber-900/10 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-600">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="text-base font-bold text-neutral-900">
              DenizliKuyumcu.com
            </p>
            <p className="mt-2 max-w-xs">
              Denizli&apos;de güncel altın ve döviz fiyatları, kuyumcu rehberi
              ve alım-satım öncesi bilgilendirme içerikleri.
            </p>
          </div>
          <div>
            <p className="font-semibold text-neutral-900">Bağlantılar</p>
            <ul className="mt-2 space-y-1">
              <li><Link href="/kuyumcular" className="hover:text-amber-800">Kuyumcular</Link></li>
              <li><Link href="/rehber" className="hover:text-amber-800">Rehber</Link></li>
              <li><Link href="/reklam-ver" className="hover:text-amber-800">Reklam Ver</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-neutral-900">Yasal Uyarı</p>
            <p className="mt-2">
              Sitede yer alan fiyatlar bilgilendirme amaçlıdır, yatırım
              tavsiyesi değildir ve gecikmeli olabilir. Kesin alım-satım
              fiyatı için ilgili kuyumcuyla iletişime geçiniz.
            </p>
          </div>
        </div>
        <p className="mt-8 border-t border-neutral-200 pt-6 text-xs text-neutral-400">
          © {new Date().getFullYear()} DenizliKuyumcu.com — Tüm hakları
          saklıdır.
        </p>
      </div>
    </footer>
  );
}
