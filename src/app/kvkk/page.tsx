import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında DenizliKuyumcu.com aydınlatma metni.",
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
        Site üzerinde bir üyelik/hesap sistemi, form veya çerez tabanlı
        takip bulunmamaktadır. Bu nedenle site, ziyaretçilerden doğrudan ve
        aktif olarak kişisel veri toplamaz. Bize e-posta yoluyla ulaştığınızda
        (ör. reklam talebi), paylaştığınız ad ve e-posta gibi bilgiler
        yalnızca talebinizi yanıtlamak amacıyla kullanılır.
      </p>
      <h2>İşleme amacı ve hukuki sebep</h2>
      <p>
        Tarafımıza e-posta yoluyla ilettiğiniz bilgiler, KVKK madde 5/2-(c)
        (bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması) ve
        ilgili kişinin açık rızası (iletişime geçme eylemi) kapsamında,
        yalnızca talebinizi cevaplamak amacıyla işlenir.
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
