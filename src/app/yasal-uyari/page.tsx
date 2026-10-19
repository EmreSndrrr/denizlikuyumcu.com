import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Yasal Uyarı",
  description:
    "DenizliKuyumcu.com'daki fiyat, hesaplama ve içeriklerin sorumluluk sınırlarına dair yasal uyarı — yatırım tavsiyesi değildir, gecikmeli olabilir.",
  alternates: { canonical: "/yasal-uyari" },
};

export default function YasalUyariPage() {
  return (
    <LegalPage title="Yasal Uyarı" updated="Eylül 2026">
      <p>
        DenizliKuyumcu.com&apos;u kullanarak aşağıdaki uyarıları okuduğunuzu
        ve kabul ettiğinizi varsayarız.
      </p>
      <h2>Yatırım tavsiyesi değildir</h2>
      <p>
        Sitede yer alan altın ve döviz fiyatları, hesaplama araçları,
        grafikler ve rehber içerikleri yalnızca <strong>bilgilendirme</strong>{" "}
        amaçlıdır; hiçbir şekilde yatırım tavsiyesi, alım-satım önerisi veya
        finansal danışmanlık niteliği taşımaz. Yatırım kararlarınızı almadan
        önce yetkili bir finansal danışmana başvurmanızı öneririz.
      </p>
      <h2>Fiyat doğruluğu ve gecikme</h2>
      <p>
        Fiyatlar üçüncü taraf bir kaynaktan (bkz.{" "}
        <Link href="/veri-kaynaklari">Veri Kaynakları</Link>) otomatik olarak
        çekilir ve periyodik aralıklarla (kaynakta piyasa açıkken yaklaşık 15 dakikada bir)
        yenilenir. Kaynak API&apos;deki gecikme, hata veya geçici kesinti
        durumunda sitede gösterilen değerler gerçek piyasa fiyatından farklı
        olabilir. Çeyrek/yarım Ata ve Reşat altını gibi bazı kalemler
        doğrudan kaynaktan değil, hesaplanarak (türetilerek) gösterilir —
        ayrıntı için <Link href="/veri-kaynaklari">Veri Kaynakları</Link>
        sayfasına bakınız.
      </p>
      <h2>Sorumluluk sınırı</h2>
      <p>
        DenizliKuyumcu.com; sitede gösterilen fiyatlara, hesaplama sonuçlarına
        veya kuyumcu dizini bilgilerine dayanılarak alınan kararlardan
        doğabilecek doğrudan veya dolaylı hiçbir maddi/manevi zarardan
        sorumlu tutulamaz. Kesin alım-satım fiyatı ve şartları için her zaman
        ilgili kuyumcuyla doğrudan iletişime geçilmesi gerekir.
      </p>
      <h2>Kuyumcu dizini ve üçüncü taraf içerik</h2>
      <p>
        Kuyumcu dizinindeki kayıtların (ve varsa sponsorlu içeriklerin)
        doğruluğu, güncelliği veya işletmenin güvenilirliği
        DenizliKuyumcu.com tarafından garanti edilmez. Bir kuyumcunun
        listelenmesi, onaylandığı veya tavsiye edildiği anlamına gelmez.
      </p>
      <p>
        Bu uyarıyla ilgili sorularınız için{" "}
        <Link href="/iletisim">İletişim</Link> sayfasından bize ulaşabilirsiniz.
        Sorumluluk sınırlarına ilişkin sözleşmesel çerçeve için{" "}
        <Link href="/kullanim-kosullari">Kullanım Koşulları</Link>&apos;nı da
        inceleyebilirsiniz.
      </p>
    </LegalPage>
  );
}
