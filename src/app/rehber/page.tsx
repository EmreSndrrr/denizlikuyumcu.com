import type { Metadata } from "next";
import GuideList from "@/components/GuideList";

export const metadata: Metadata = {
  title: "Altın ve Kuyumculuk Rehberi",
  description:
    "Altın ayarı, gram altın hesaplama, alyans seçimi ve daha fazlası hakkında rehber içerikleri.",
};

const guides = [
  {
    no: "01",
    category: "Ayar",
    href: "/rehber/altin-ayari-nedir",
    title: "Altın Ayarı Nedir? (24, 22, 18, 14 Ayar)",
    desc: "Ayar nedir, hangisi nerede kullanılır, has altınla farkı nedir?",
  },
  {
    no: "02",
    category: "Hesaplama",
    href: "/rehber/gram-altin-hesaplama",
    title: "Gram Altın Fiyatı Nasıl Hesaplanır?",
    desc: "Has altın, işçilik ve dolar kuru gram altın fiyatını nasıl belirler?",
  },
  {
    no: "03",
    category: "Alyans",
    href: "/rehber/alyans-rehberi",
    title: "Alyans Alırken Nelere Dikkat Edilmeli?",
    desc: "Ayar, ölçü, gramaj ve kuyumcu seçiminde dikkat edilmesi gerekenler.",
  },
  {
    no: "04",
    category: "Bakım",
    href: "/rehber/altin-nasil-saklanir",
    title: "Altın Takılar Evde Nasıl Saklanmalı ve Temizlenmeli?",
    desc: "Takılarınızın parlaklığını korumak için pratik bakım önerileri.",
  },
];

export default function RehberIndexPage() {
  return (
    <div className="mx-auto max-w-[1240px] px-4 py-14">
      <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Rehber</h1>
      <p className="mt-3 max-w-xl text-muted">
        Altın almadan veya satmadan önce bilmeniz gereken temel konular.
      </p>
      <GuideList items={guides} />
    </div>
  );
}
