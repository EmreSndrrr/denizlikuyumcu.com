import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Veri Kaynakları",
  description:
    "DenizliKuyumcu.com'daki altın/döviz fiyatları ve kuyumcu bilgileri hangi kaynaklardan geliyor, ne sıklıkla güncelleniyor? Şeffaf kaynak listesi.",
  alternates: { canonical: "/veri-kaynaklari" },
};

export default function VeriKaynaklariPage() {
  return (
    <LegalPage title="Veri Kaynakları" updated="Eylül 2026">
      <p>
        Bu sayfa, sitede gördüğünüz fiyat ve kuyumcu bilgilerinin nereden
        geldiğini şeffaf şekilde açıklar. DenizliKuyumcu.com bu verilerin
        birincil üreticisi değildir; aşağıdaki kaynaklardan derleyip
        okunabilir bir biçimde sunar.
      </p>
      <h2>Altın ve döviz fiyatları</h2>
      <p>
        Fiyatlar <strong>finans.truncgil.com</strong> adlı üçüncü taraf,
        ücretsiz bir uç noktadan çekilir ve yaklaşık her 60 saniyede bir
        yenilenir. DenizliKuyumcu.com bu verinin doğruluğunu, güncelliğini
        veya kesintisizliğini garanti etmez; kaynak API geçici olarak
        erişilemez olursa site son bilinen değerleri gösterebilir. Kesin
        işlem öncesi her zaman ilgili kuyumcuyla doğrudan teyitleşin (bkz.{" "}
        <a href="/yasal-uyari">Yasal Uyarı</a>).
      </p>
      <h2>Çeyrek/yarım Ata ve Reşat altını nasıl hesaplanıyor?</h2>
      <p>
        Truncgil, Ata ve Reşat sikke ailelerini yalnızca tam boy olarak
        yayınlıyor. Sitemizdeki çeyrek ve yarım Ata/Reşat fiyatları, bu tam
        fiyattan kendi has-altın gramaj oranıyla (çeyrek ≈ 1,75g / yarım ≈
        3,5g / tam ≈ 7g) <strong>hesaplanarak türetilir</strong> — kaynaktan
        doğrudan gelen, ayrı bir canlı veri değildir. Piyasada bu sikkeler
        genelde bu orana yakın seyreder, ancak koleksiyon/nadirlik primi gibi
        etkenlerle gerçek kuyumcu fiyatından sapma olabilir.
      </p>
      <h2>Kuyumcu dizini</h2>
      <p>
        <a href="/kuyumcular">Kuyumcular</a> sayfasındaki kayıtlar şu an{" "}
        <strong>demo/örnek verilerdir</strong> — gerçek, izin alınmış bir
        kuyumcu işletmesine ait değildir. Gerçek kuyumcu bilgisi eklendiğinde
        bu sayfa güncellenecektir.
      </p>
      <h2>Sorularınız için</h2>
      <p>
        Bir veri kaynağıyla ilgili soru veya düzeltme talebiniz varsa{" "}
        <a href="/iletisim">İletişim</a> sayfasından bize ulaşabilirsiniz.
      </p>
    </LegalPage>
  );
}
