import type { Metadata } from "next";
import GuideArticle from "@/components/GuideArticle";

export const metadata: Metadata = {
  title: "Altın Takılar Evde Nasıl Saklanmalı ve Temizlenmeli?",
  description:
    "Altın takılarınızın parlaklığını korumak için saklama ve temizlik konusunda pratik öneriler.",
  alternates: { canonical: "/rehber/altin-nasil-saklanir" },
};

export default function Page() {
  return (
    <GuideArticle
      title="Altın Takılar Evde Nasıl Saklanmalı ve Temizlenmeli?"
      intro="Doğru saklama ve düzenli bakım, altın takılarınızın yıllarca ilk günkü gibi kalmasını sağlar."
    >
      <h2>Saklama önerileri</h2>
      <ul>
        <li>
          Takıları birbirine değmeyecek şekilde ayrı bölmelerde veya
          kadife/kumaş kesecikler içinde saklayın; sürtünme çizilmeye
          neden olabilir.
        </li>
        <li>
          Nemli ortamlardan (banyo dolabı gibi) kaçının; nem, özellikle
          taşlı takılarda montür üzerinde zamanla lekelenmeye yol açabilir.
        </li>
        <li>
          Parfüm, losyon ve saç spreyini takıları taktıktan sonra değil,
          önce uygulayın; kimyasallar yüzeydeki parlaklığı zamanla
          matlaştırabilir.
        </li>
      </ul>

      <h2>Evde temizlik</h2>
      <p>
        Ilık su ve birkaç damla nötr sıvı sabunla hazırlanan karışımda
        takıyı birkaç dakika bekletip yumuşak bir diş fırçasıyla nazikçe
        fırçalamak, günlük kullanım kirini gidermek için genellikle
        yeterlidir. Durulayıp yumuşak, tüy bırakmayan bir bezle kurulayın.
      </p>
      <p>
        Taşlı, kaplamalı veya özel işçilikli parçalarda evde temizlik
        yapmadan önce kuyumcunuza danışmanız daha güvenlidir — bazı taşlar
        ve kaplamalar suya veya kimyasallara hassas olabilir.
      </p>

      <h2>Ne zaman kuyumcuya götürmeli?</h2>
      <p>
        Yılda bir kez profesyonel temizlik ve kontrol (taş yuvalarının
        sağlamlığı, kapama/klips kontrolü gibi) yaptırmak, hem takının
        ömrünü uzatır hem de olası bir kaybı önceden fark etmenizi sağlar.
      </p>
    </GuideArticle>
  );
}
