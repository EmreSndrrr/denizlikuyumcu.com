import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında DenizliKuyumcu.com aydınlatma metni: veri sorumlusu, işlenen veri ve haklarınız.",
  alternates: { canonical: "/kvkk" },
};

export default function KvkkPage() {
  return (
    <LegalPage title="KVKK Aydınlatma Metni" updated="Eylül 2026">
      <p>
        Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu
        (&quot;KVKK&quot;) kapsamında ziyaretçileri bilgilendirmek amacıyla
        hazırlanmıştır.
      </p>
      <div className="not-prose my-6 rounded-2xl border border-border bg-gold-surface/60 p-4 text-sm text-muted">
        <p className="font-semibold text-ink">Veri Sorumlusu</p>
        <p className="mt-2">
          DenizliKuyumcu.com, tescilli bir şirket değil; <strong>Emre
          Şandır</strong> tarafından yürütülen bireysel, ticari olmayan bir
          bilgilendirme/tanıtım projesidir. KVKK kapsamında veri sorumlusu
          sıfatıyla hareket eden taraf gerçek kişi olarak Emre Şandır&apos;dır
          — arkasında bir şirket unvanı, tüzel kişilik veya vergi mükellefiyeti
          bulunmamaktadır.
        </p>
      </div>
      <h2>İşlenen kişisel veri</h2>
      <p>
        Site üzerinde bir üyelik/hesap sistemi veya çerez tabanlı takip
        bulunmamaktadır. Site, ziyaretçilerden yalnızca aşağıdaki iki durumda
        ve verdiğiniz kadarıyla kişisel veri işler:
      </p>
      <ul>
        <li>
          <strong>Bilgi Talebi formu (<a href="/bilgi-talebi">/bilgi-talebi</a>):</strong>{" "}
          Formu doldurduğunuzda paylaştığınız <em>ad</em>, <em>telefon
          numarası</em>, (verdiyseniz) <em>e-posta adresi</em>, seçtiğiniz{" "}
          <em>konu</em> ve <em>mesaj metni</em>. Bu veriler bir veri tabanında
          saklanmaz; yalnızca e-posta olarak veri sorumlusuna iletilir.
        </li>
        <li>
          <strong>Doğrudan e-posta/telefon iletişimi:</strong> Bize kendiniz
          ulaştığınızda paylaştığınız iletişim bilgileri ve mesaj içeriği.
        </li>
      </ul>
      <p>
        Standart web sunucusu günlükleri (istek zamanı, IP, hata kayıtları)
        barındırma ve e-posta altyapısı sağlayıcılarımız tarafından teknik ve
        güvenlik amaçlarıyla tutulabilir.
      </p>
      <h2>İşleme amacı ve hukuki sebep</h2>
      <p>
        Form veya e-posta yoluyla ilettiğiniz bilgiler <strong>yalnızca
        talebinizi değerlendirmek ve size dönüş yapmak</strong> amacıyla
        işlenir; pazarlama/reklam amacıyla kullanılmaz, satılmaz. Hukuki sebep:
        formu gönderirken verdiğiniz <strong>açık rıza</strong> (KVKK m. 5/1)
        ve talebin bir sözleşme ilişkisine dönüşmesi hâlinde KVKK m. 5/2-(c).
        Rızanızı her zaman geri çekebilirsiniz.
      </p>
      <h2>Saklama süresi</h2>
      <p>
        Talebinize ilişkin yazışmalar, talep sonuçlandıktan sonra makul bir
        süre içinde (en geç 1 yıl) silinir; bir hukuki yükümlülük veya
        uyuşmazlık söz konusuysa ilgili süre boyunca saklanabilir.
      </p>
      <h2>Aktarım ve hizmet sağlayıcılar</h2>
      <p>
        Form gönderimleri, e-posta iletimi için <strong>Resend</strong>{" "}
        (e-posta altyapı sağlayıcısı) aracılığıyla iletilir ve site{" "}
        <strong>Vercel</strong> altyapısında barındırılır. Bu sağlayıcıların
        sunucuları yurt dışında bulunabilir; verileriniz yalnızca hizmetin
        teknik olarak sağlanabilmesi için ve bu amaçla sınırlı olarak işlenir.
        Bunun dışında kişisel verileriniz üçüncü kişilerle paylaşılmaz.
      </p>
      <h2>Haklarınız</h2>
      <p>
        KVKK madde 11 kapsamında; kişisel verilerinizin işlenip
        işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme,
        işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,
        yurt içi/yurt dışında aktarıldığı üçüncü kişileri bilme, eksik veya
        yanlış işlenmişse düzeltilmesini isteme ve kanunda öngörülen şartlar
        çerçevesinde silinmesini/yok edilmesini isteme haklarına sahipsiniz.
      </p>
      <p>
        Bu haklarınızı kullanmak için{" "}
        <a href="/iletisim">İletişim</a> sayfasındaki e-posta adresi
        üzerinden veri sorumlusuna (Emre Şandır) ulaşabilirsiniz.
      </p>
      <h2>Uyuşmazlıkların Çözümü</h2>
      <p>
        Bu aydınlatma metninden doğabilecek uyuşmazlıklarda, öncelikle{" "}
        <a href="/iletisim">İletişim</a> sayfasındaki kanallardan çözüm
        aranması rica olunur. Çözülemeyen uyuşmazlıklarda Denizli
        Mahkemeleri ve İcra Daireleri yetkilidir (bkz.{" "}
        <a href="/kullanim-kosullari">Kullanım Koşulları</a>).
      </p>
    </LegalPage>
  );
}
