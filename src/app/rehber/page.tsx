import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

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
    <div className="mx-auto max-w-[1240px] px-4 py-14">
      <h1 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Rehber</h1>
      <p className="mt-3 max-w-xl text-muted">
        Altın almadan veya satmadan önce bilmeniz gereken temel konular.
      </p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {guides.map((g, i) => (
          <Reveal key={g.href} delay={i * 0.04}>
            <Link
              href={g.href}
              className="block h-full rounded-2xl border border-border bg-surface p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <p className="font-bold text-ink">{g.title}</p>
              <p className="mt-1 text-sm text-muted">{g.desc}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
