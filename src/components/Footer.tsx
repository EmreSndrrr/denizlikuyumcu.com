import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto max-w-[1240px] px-4 py-12 text-sm text-muted">
        <div className="grid gap-8 sm:grid-cols-4">
          <div className="sm:col-span-1">
            {/* h-7 (sm'de en dar sütun — 4 sütun aynı satırda) ve md+'de
                h-8: dar aralıkta taşmayı önlemek için biraz daha küçük. */}
            <span className="dark:hidden">
              <Image
                src="/brand/denizli-kuyumcu-horizontal.svg"
                alt="Denizli Kuyumcu"
                width={640}
                height={160}
                unoptimized
                className="h-7 w-auto md:h-8"
              />
            </span>
            <span className="hidden dark:block">
              <Image
                src="/brand/denizli-kuyumcu-horizontal-koyu-zemin.svg"
                alt="Denizli Kuyumcu"
                width={640}
                height={160}
                unoptimized
                className="h-7 w-auto md:h-8"
              />
            </span>
            <p className="mt-2 max-w-xs">
              Denizli&apos;de güncel altın ve döviz fiyatları, kuyumcu rehberi
              ve alım-satım öncesi bilgilendirme içerikleri.
            </p>
          </div>
          <div>
            <p className="font-semibold text-ink">Bağlantılar</p>
            <ul className="mt-2 space-y-1">
              <li><Link href="/#altin-fiyatlari" className="hover:text-brand">Altın Fiyatları</Link></li>
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
              <li><Link href="/veri-kaynaklari" className="hover:text-brand">Veri Kaynakları</Link></li>
              <li><Link href="/gizlilik-politikasi" className="hover:text-brand">Gizlilik Politikası</Link></li>
              <li><Link href="/kullanim-kosullari" className="hover:text-brand">Kullanım Koşulları</Link></li>
              <li><Link href="/kvkk" className="hover:text-brand">KVKK</Link></li>
              <li><Link href="/cerez-politikasi" className="hover:text-brand">Çerez Politikası</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-ink">
              <Link href="/yasal-uyari" className="hover:text-brand">Yasal Uyarı</Link>
            </p>
            <p className="mt-2">
              Sitede yer alan fiyatlar bilgilendirme amaçlıdır, yatırım
              tavsiyesi değildir ve gecikmeli olabilir. Kesin alım-satım
              fiyatı için ilgili kuyumcuyla iletişime geçiniz.{" "}
              <Link href="/yasal-uyari" className="text-brand hover:underline">
                Devamını oku
              </Link>
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
