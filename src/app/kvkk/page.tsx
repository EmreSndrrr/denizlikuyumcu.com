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
        <p className="font-semibold text-ink">Veri sorumlusu bilgisi — güncelleniyor</p>
        <p className="mt-2">
          DenizliKuyumcu.com şu an bireysel bir proje olarak yürütülmektedir
          ve henüz tescilli bir şirket unvanı, adresi ve vergi kimlik
          numarası bu metne eklenmemiştir. Bu bilgiler netleştiğinde
          (işletme resmen kurulduğunda) veri sorumlusu kimliği burada tam
          olarak paylaşılacaktır. O ana kadar bu sayfayı, hangi verinin
          işlendiğine dair genel bir bilgilendirme olarak değerlendiriniz.
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
        üzerinden bize ulaşabilirsiniz. Veri sorumlusu kimlik bilgileri
        netleştiğinde başvuru usulü de bu sayfada ayrıntılandırılacaktır.
      </p>
    </LegalPage>
  );
}
