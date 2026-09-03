import type { Metadata } from "next";
import GuideList from "@/components/GuideList";

export const metadata: Metadata = {
  title: "Altın ve Kuyumculuk Rehberi",
  description:
    "Gram altın hesaplama, çeyrek altın alış-satış farkı, bilezik işçiliği, altın bozdurma, sahte altın, düğün altınları ve alyans seçimi — Denizli'ye özel, pratik rehber içerikleri.",
  alternates: { canonical: "/rehber" },
};

// Rehber içerikleri konu kümelerine ayrıldı — hem kullanıcı hem arama
// motoru için "bu site altın konusunda şu başlıkları kapsıyor" sinyali.
// Yeni bir makale eklerken: ilgili kümeye bir satır ekle + sitemap.ts ve
// lib/searchIndex.ts'i güncelle.
const groups: {
  heading: string;
  intro: string;
  items: { no: string; category: string; href: string; title: string; desc: string }[];
}[] = [
  {
    heading: "Fiyat ve hesaplama",
    intro: "Güncel fiyatı okuma ve bir ürünün değerini kendiniz çıkarma.",
    items: [
      {
        no: "01",
        category: "Fiyat",
        href: "/rehber/gram-altin-bugun-ne-kadar",
        title: "Gram Altın Bugün Ne Kadar?",
        desc: "Güncel fiyatı nereden takip edersiniz, gün içinde neden değişir?",
      },
      {
        no: "02",
        category: "Hesaplama",
        href: "/rehber/10-gram-altin-kac-tl",
        title: "10 Gram Altın Kaç TL Eder?",
        desc: "Gramaja göre tutar, ayar etkisi ve külçe–bilezik farkı.",
      },
      {
        no: "03",
        category: "Hesaplama",
        href: "/rehber/gram-altin-hesaplama",
        title: "Gram Altın Fiyatı Nasıl Hesaplanır?",
        desc: "Ons altın, dolar kuru ve işçilik ilişkisi basit formülle.",
      },
      {
        no: "04",
        category: "Bilezik",
        href: "/rehber/22-ayar-bilezik-hesaplama",
        title: "22 Ayar Bilezik Hesaplama",
        desc: "Has oran (0,916), gramaj ve işçilik ile adım adım formül.",
      },
      {
        no: "05",
        category: "İşçilik",
        href: "/rehber/bilezikte-iscilik-hesaplama",
        title: "Bilezikte İşçilik Nasıl Hesaplanır?",
        desc: "Yüzde mi sabit tutar mı, model işçiliği nasıl değiştirir?",
      },
    ],
  },
  {
    heading: "Alım, satım ve bozdurma",
    intro: "Kuyumcuda kayıp yaşamamak için bilmeniz gerekenler.",
    items: [
      {
        no: "06",
        category: "Makas",
        href: "/rehber/ceyrek-altin-alis-satis-farki",
        title: "Çeyrek Altında Alış ve Satış Farkı",
        desc: "Makas (spread) nasıl oluşur, neden gram altından geniştir?",
      },
      {
        no: "07",
        category: "Bozdurma",
        href: "/rehber/14-ayar-altin-bozdurma-hesabi",
        title: "14 Ayar Altın Bozdurma Hesabı",
        desc: "Has oran 0,585, bozdurma formülü ve örnek hesap.",
      },
      {
        no: "08",
        category: "Bozdurma",
        href: "/rehber/kuyumcuda-altin-bozdururken-dikkat",
        title: "Altın Bozdururken Nelere Dikkat Edilmeli?",
        desc: "Ayar okuması, tartım, kesinti ve zamanlama kontrol listesi.",
      },
      {
        no: "09",
        category: "Belge",
        href: "/rehber/altin-alirken-fatura",
        title: "Altın Alırken Fatura Alınmalı mı?",
        desc: "Faturada ne olmalı, faturasız satışın riskleri neler?",
      },
      {
        no: "10",
        category: "Güvenlik",
        href: "/rehber/sahte-altin-nasil-anlasilir",
        title: "Sahte Altın Nasıl Anlaşılır?",
        desc: "Evde ön kontroller ve kuyumcuda kesin test yöntemleri.",
      },
      {
        no: "11",
        category: "Çeyrek",
        href: "/rehber/eski-yeni-tarihli-ceyrek-altin-farki",
        title: "Eski ve Yeni Tarihli Çeyrek Altın Farkı",
        desc: "Tarih değeri değiştirir mi, hangi çeyrekler düşük fiyatlanır?",
      },
    ],
  },
  {
    heading: "Düğün, alyans ve takı",
    intro: "Düğün altını seçimi, alyans ölçüsü ve kuyumcu seçimi.",
    items: [
      {
        no: "12",
        category: "Düğün",
        href: "/rehber/dugunde-hangi-altinlar-takilir",
        title: "Düğünde Hangi Altınlar Takılır?",
        desc: "Yakınlık derecesine göre yaygın tercihler ve bütçe planı.",
      },
      {
        no: "13",
        category: "Alyans",
        href: "/rehber/alyans-rehberi",
        title: "Alyans Alırken Nelere Dikkat Edilmeli?",
        desc: "Ayar, ölçü, gramaj ve kuyumcu seçiminde dikkat edilecekler.",
      },
      {
        no: "14",
        category: "Alyans",
        href: "/rehber/alyans-olcusu-nasil-belirlenir",
        title: "Alyans Ölçüsü Nasıl Belirlenir?",
        desc: "Parmak çevresi ölçme, mm–numara tablosu ve sık hatalar.",
      },
    ],
  },
  {
    heading: "Temel bilgiler ve bakım",
    intro: "Altın ayarı ve takı bakımı gibi başlangıç konuları.",
    items: [
      {
        no: "15",
        category: "Ayar",
        href: "/rehber/altin-ayari-nedir",
        title: "Altın Ayarı Nedir? 24, 22, 18, 14 Ayar",
        desc: "Ayar nedir, hangisi nerede kullanılır, has altınla farkı?",
      },
      {
        no: "16",
        category: "Bakım",
        href: "/rehber/altin-nasil-saklanir",
        title: "Altın Takı Nasıl Saklanır ve Temizlenir?",
        desc: "Parlaklığı korumak için pratik bakım önerileri.",
      },
    ],
  },
];

export default function RehberIndexPage() {
  return (
    <div className="mx-auto max-w-[1240px] px-4 py-12">
      <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        Altın ve Kuyumculuk Rehberi
      </h1>
      <p className="mt-3 max-w-xl text-muted">
        Denizli&apos;de altın alırken, satarken ve bozdururken en çok merak
        edilen konular: fiyat okuma, hesaplama, alım-satım, düğün altınları,
        alyans ve temel bilgiler.
      </p>

      {groups.map((group) => (
        <section key={group.heading} className="mt-12">
          <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
            {group.heading}
          </h2>
          <p className="mt-1 text-sm text-muted">{group.intro}</p>
          {/* Bölüm başlığı h2 -> öğe başlıkları h3 (hiyerarşi atlanmıyor). */}
          <GuideList items={group.items} headingLevel="h3" />
        </section>
      ))}
    </div>
  );
}
