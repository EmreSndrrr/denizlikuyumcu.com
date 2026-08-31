import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Altın ve Kuyumculuk Rehberi",
  description:
    "Altın ayarı, gram altın hesaplama, alyans seçimi ve daha fazlası hakkında rehber içerikleri.",
};

const guides = [
  {
    href: "/rehber/altin-ayari-nedir",
    title: "Altın Ayarı Nedir? (24, 22, 18, 14 Ayar)",
    desc: "Ayar nedir, hangisi nerede kullanılır, has altınla farkı nedir?",
  },
  {
    href: "/rehber/gram-altin-hesaplama",
    title: "Gram Altın Fiyatı Nasıl Hesaplanır?",
    desc: "Has altın, işçilik ve dolar kuru gram altın fiyatını nasıl belirler?",
  },
  {
    href: "/rehber/alyans-rehberi",
    title: "Alyans Alırken Nelere Dikkat Edilmeli?",
    desc: "Ayar, ölçü, gramaj ve kuyumcu seçiminde dikkat edilmesi gerekenler.",
  },
  {
    href: "/rehber/altin-nasil-saklanir",
    title: "Altın Takılar Evde Nasıl Saklanmalı ve Temizlenmeli?",
    desc: "Takılarınızın parlaklığını korumak için pratik bakım önerileri.",
  },
];

export default function RehberIndexPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold text-neutral-900">Rehber</h1>
      <p className="mt-2 text-neutral-600">
        Altın almadan veya satmadan önce bilmeniz gereken temel konular.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {guides.map((g) => (
          <Link
            key={g.href}
            href={g.href}
            className="block rounded-xl border border-amber-900/10 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <p className="font-bold text-neutral-900">{g.title}</p>
            <p className="mt-1 text-sm text-neutral-600">{g.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
