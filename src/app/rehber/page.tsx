import type { Metadata } from "next";
import GuideList from "@/components/GuideList";

export const metadata: Metadata = {
  title: "Altın ve Kuyumculuk Rehberi",
  description:
    "Altın fiyatları, gram ve çeyrek altın, ajda bilezik, altın bozdurma, sahte altın, düğün altınları ve alyans seçimi — Denizli'ye özel, pratik rehber içerikleri.",
  alternates: { canonical: "/rehber" },
};

// Rehber içerikleri konu kümelerine ayrıldı — hem kullanıcı hem arama
// motoru için "bu site altın konusunda şu başlıkları kapsıyor" sinyali.
// Yeni bir makale eklerken: ilgili kümeye bir satır ekle + sitemap.ts ve
// lib/searchIndex.ts'i güncelle. Sıra numaraları ("01", "02"…) elle
// YAZILMIYOR, aşağıda listeden üretiliyor: önceden elle yazıldıkları için
// araya bir makale eklemek bütün numaraları tek tek kaydırmayı gerektiriyordu.
const groups: {
  heading: string;
  intro: string;
  items: { category: string; href: string; title: string; desc: string }[];
}[] = [
  {
    heading: "Piyasa ve fiyatlar",
    intro: "Altın fiyatı nereden gelir, neden değişir ve farklı kaynaklardaki rakamlar nasıl okunur.",
    items: [
      {
        category: "Piyasa",
        href: "/rehber/altin-fiyatlari-neden-degisir",
        title: "Altın Fiyatları Neden Değişir?",
        desc: "Ons altın, dolar kuru, faiz ve talep fiyatı nasıl etkiler?",
      },
      {
        category: "Fiyat",
        href: "/rehber/altin-kuru-nedir",
        title: "Altın Kuru Nedir?",
        desc: "Banka, kuyumcu ve serbest piyasa fiyatı neden farklı?",
      },
      {
        category: "Piyasa",
        href: "/rehber/kapalicarsi-altin-fiyatlari",
        title: "Kapalıçarşı Altın Fiyatları Nedir?",
        desc: "Referans fiyat nasıl oluşur, Denizli'deki fiyatlarla farkı ne?",
      },
      {
        category: "Fiyat",
        href: "/rehber/ceyrek-altin-ne-kadar",
        title: "Çeyrek Altın Ne Kadar?",
        desc: "Çeyrek fiyatı gram altına göre nasıl hesaplanır?",
      },
    ],
  },
  {
    heading: "Fiyat ve hesaplama",
    intro: "Güncel fiyatı okuma ve bir ürünün değerini kendiniz çıkarma.",
    items: [
      {
        category: "Fiyat",
        href: "/rehber/gram-altin-bugun-ne-kadar",
        title: "Gram Altın Bugün Ne Kadar?",
        desc: "Güncel fiyatı nereden takip edersiniz, gün içinde neden değişir?",
      },
      {
        category: "Hesaplama",
        href: "/rehber/10-gram-altin-kac-tl",
        title: "10 Gram Altın Kaç TL Eder?",
        desc: "Gramaja göre tutar, ayar etkisi ve külçe–bilezik farkı.",
      },
      {
        category: "Hesaplama",
        href: "/rehber/gram-altin-hesaplama",
        title: "Gram Altın Fiyatı Nasıl Hesaplanır?",
        desc: "Ons altın, dolar kuru ve işçilik ilişkisi basit formülle.",
      },
      {
        category: "Bilezik",
        href: "/rehber/22-ayar-bilezik-hesaplama",
        title: "22 Ayar Bilezik Hesaplama",
        desc: "Has oran (0,916), gramaj ve işçilik ile adım adım formül.",
      },
      {
        category: "İşçilik",
        href: "/rehber/bilezikte-iscilik-hesaplama",
        title: "Bilezikte İşçilik Nasıl Hesaplanır?",
        desc: "Yüzde mi sabit tutar mı, model işçiliği nasıl değiştirir?",
      },
    ],
  },
  {
    heading: "Altın türleri",
    intro: "Gram, çeyrek ve tam altın, bilezik ve gümüşün gramajı, ayarı ve farkları.",
    items: [
      {
        category: "Gram altın",
        href: "/rehber/gram-altin-nedir",
        title: "Gram Altın Nedir?",
        desc: "Gramajlar, kartela, banka altını ve alırken kontrol listesi.",
      },
      {
        category: "Saflık",
        href: "/rehber/24-ayar-gram-altin",
        title: "24 Ayar Gram Altın: 995 ve 999,9 Farkı",
        desc: "Milyem ne demek, 22 ayardan farkı ve has altın hesabı.",
      },
      {
        category: "Çeyrek",
        href: "/rehber/ceyrek-altin-nedir",
        title: "Çeyrek Altın Nedir?",
        desc: "Kaç gram, kaç ayar, içinde ne kadar saf altın var?",
      },
      {
        category: "Tam altın",
        href: "/rehber/tam-altin-nedir",
        title: "Tam Altın Nedir?",
        desc: "Gramajı ve Cumhuriyet altınıyla arasındaki fark.",
      },
      {
        category: "Bilezik",
        href: "/rehber/ajda-bilezik",
        title: "Ajda Bilezik Nedir?",
        desc: "Ayarı, fiyat hesabı ve neden birikim için tercih edildiği.",
      },
      {
        category: "Gümüş",
        href: "/rehber/gumus-rehberi",
        title: "Gümüş Rehberi: 925 Ayar Gümüş",
        desc: "925 ayar ne demek, gümüş takı nasıl anlaşılır ve temizlenir.",
      },
    ],
  },
  {
    heading: "Alım, satım ve bozdurma",
    intro: "Kuyumcuda kayıp yaşamamak için bilmeniz gerekenler.",
    items: [
      {
        category: "Makas",
        href: "/rehber/ceyrek-altin-alis-satis-farki",
        title: "Çeyrek Altında Alış ve Satış Farkı",
        desc: "Makas (spread) nasıl oluşur, neden gram altından geniştir?",
      },
      {
        category: "Bozdurma",
        href: "/rehber/14-ayar-altin-bozdurma-hesabi",
        title: "14 Ayar Altın Bozdurma Hesabı",
        desc: "Has oran 0,585, bozdurma formülü ve örnek hesap.",
      },
      {
        category: "Bozdurma",
        href: "/rehber/kuyumcuda-altin-bozdururken-dikkat",
        title: "Altın Bozdururken Nelere Dikkat Edilmeli?",
        desc: "Ayar okuması, tartım, kesinti ve zamanlama kontrol listesi.",
      },
      {
        category: "Belge",
        href: "/rehber/altin-alirken-fatura",
        title: "Altın Alırken Fatura Alınmalı mı?",
        desc: "Faturada ne olmalı, faturasız satışın riskleri neler?",
      },
      {
        category: "Güvenlik",
        href: "/rehber/sahte-altin-nasil-anlasilir",
        title: "Sahte Altın Nasıl Anlaşılır?",
        desc: "Evde ön kontroller ve kuyumcuda kesin test yöntemleri.",
      },
      {
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
        category: "Düğün",
        href: "/rehber/dugunde-hangi-altinlar-takilir",
        title: "Düğünde Hangi Altınlar Takılır?",
        desc: "Yakınlık derecesine göre yaygın tercihler ve bütçe planı.",
      },
      {
        category: "Alyans",
        href: "/rehber/alyans-rehberi",
        title: "Alyans Alırken Nelere Dikkat Edilmeli?",
        desc: "Ayar, ölçü, gramaj ve kuyumcu seçiminde dikkat edilecekler.",
      },
      {
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
        category: "Ayar",
        href: "/rehber/altin-ayari-nedir",
        title: "Altın Ayarı Nedir? 24, 22, 18, 14 Ayar",
        desc: "Ayar nedir, hangisi nerede kullanılır, has altınla farkı?",
      },
      {
        category: "Bakım",
        href: "/rehber/altin-nasil-saklanir",
        title: "Altın Takı Nasıl Saklanır ve Temizlenir?",
        desc: "Parlaklığı korumak için pratik bakım önerileri.",
      },
    ],
  },
];

// Sıra numaraları tüm kümeler boyunca kesintisiz ("01"…), listeden üretilir.
let sira = 0;
const numaraliGruplar = groups.map((group) => ({
  ...group,
  items: group.items.map((item) => ({ ...item, no: String(++sira).padStart(2, "0") })),
}));

export default function RehberIndexPage() {
  return (
    <div className="mx-auto max-w-[1240px] px-4 py-12">
      <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        Altın ve Kuyumculuk Rehberi
      </h1>
      <p className="mt-3 max-w-xl text-muted">
        Denizli&apos;de altın alırken, satarken ve bozdururken en çok merak
        edilen konular: piyasa ve fiyatlar, hesaplama, altın türleri,
        alım-satım, düğün altınları, alyans ve temel bilgiler.
      </p>

      {numaraliGruplar.map((group) => (
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
