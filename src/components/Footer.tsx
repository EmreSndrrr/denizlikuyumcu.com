import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto max-w-[1240px] px-4 py-10 text-sm text-muted">
        <div className="grid gap-8 sm:grid-cols-4">
          <div className="sm:col-span-1">
            <p className="text-base font-extrabold tracking-tight text-ink">
              DenizliKuyumcu.com
            </p>
            <p className="mt-2 max-w-xs">
              Denizli&apos;de güncel altın ve döviz fiyatları, kuyumcu rehberi
              ve alım-satım öncesi bilgilendirme içerikleri.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink">Bağlantılar</p>
            <ul className="mt-2 space-y-1">
              <li><Link href="/kuyumcular" className="hover:text-brand">Kuyumcular</Link></li>
              <li><Link href="/rehber" className="hover:text-brand">Rehber</Link></li>
              <li><Link href="/reklam-ver" className="hover:text-brand">Reklam Ver</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-ink">Kurumsal</p>
            <ul className="mt-2 space-y-1">
              <li><Link href="/hakkimizda" className="hover:text-brand">Hakkımızda</Link></li>
              <li><Link href="/iletisim" className="hover:text-brand">İletişim</Link></li>
              <li><Link href="/veri-kullanimi" className="hover:text-brand">Veri Kullanımı</Link></li>
              <li><Link href="/kvkk" className="hover:text-brand">KVKK</Link></li>
              <li><Link href="/cerez-politikasi" className="hover:text-brand">Çerez Politikası</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-ink">Yasal Uyarı</p>
            <p className="mt-2">
              Sitede yer alan fiyatlar bilgilendirme amaçlıdır, yatırım
              tavsiyesi değildir ve gecikmeli olabilir. Kesin alım-satım
              fiyatı için ilgili kuyumcuyla iletişime geçiniz.
            </p>
          </div>
        </div>
        <p className="mt-8 border-t border-border pt-6 text-xs text-muted/70">
          © {new Date().getFullYear()} DenizliKuyumcu.com — Tüm hakları
          saklıdır.
        </p>
      </div>
    </footer>
  );
}
