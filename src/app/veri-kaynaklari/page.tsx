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
        ücretsiz bir uç noktadan gelir. Kaynağı biz sürekli yoklamıyoruz;
        arka planda çalışan bir görev bunu <strong>5 dakikada bir</strong>{" "}
        kontrol eder ve kaynağın kendi bildirdiği güncelleme zamanı
        değiştiyse yeni fiyatları kaydeder. Sitedeki her fiyat bloğunun
        altında gördüğünüz &quot;… itibarıyla&quot; ibaresi, bizim ne zaman
        kontrol ettiğimizi DEĞİL, <strong>kaynağın kendi bildirdiği</strong>{" "}
        güncelleme zamanını gösterir.
      </p>
      <p>
        DenizliKuyumcu.com bu verinin doğruluğunu, güncelliğini veya
        kesintisizliğini garanti etmez. Kaynağın güncellemesi ile şimdiki
        zaman arasındaki fark <strong>15 dakikayı</strong> aşarsa (ör.
        kaynak API geçici olarak erişilemez ya da görev aksarsa) site son
        bilinen gerçek kaydı göstermeye devam eder ve bunu açıkça{" "}
        <strong>&quot;Veri gecikmeli&quot;</strong> rozetiyle işaretler —
        eski veriyi güncelmiş gibi göstermeyiz. Kesin işlem öncesi her
        zaman ilgili kuyumcuyla doğrudan teyitleşin (bkz.{" "}
        <a href="/yasal-uyari">Yasal Uyarı</a>).
      </p>
      <h2>Fiyat grafikleri</h2>
      <p>
        Altın Fiyatları Grafiği ve kalem bazlı mini grafikler, yukarıda
        açıklanan 5 dakikalık kayıtların biriktirilmesiyle oluşur —{" "}
        <strong>hiçbir rastgele veya örnek veri kullanılmaz</strong>. Bir
        aralık (ör. 1 yıl) için yeterli gerçek kayıt henüz birikmemişse
        grafik yerine bunu açıkça belirten bir bilgi notu gösterilir.
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
