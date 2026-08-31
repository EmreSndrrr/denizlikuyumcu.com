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
      <div className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-stone-900 dark:text-stone-50">Rehber</h1>
        <span
          aria-hidden="true"
          className="mx-auto mt-3 block h-0.5 w-14 rounded-full bg-amber-600 dark:bg-amber-500"
        />
        <p className="mx-auto mt-3 max-w-xl text-stone-600 dark:text-stone-400">
          Altın almadan veya satmadan önce bilmeniz gereken temel konular.
        </p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {guides.map((g) => (
          <Link
            key={g.href}
            href={g.href}
            className="block rounded-xl border border-stone-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700 dark:border-stone-800 dark:bg-stone-900"
          >
            <p className="font-bold text-stone-900 dark:text-stone-50">{g.title}</p>
            <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">{g.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
