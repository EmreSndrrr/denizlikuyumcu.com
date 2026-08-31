// Denizli kuyumcu dizini — reklam/öne çıkarma satışının asıl dayanağı.
// "featured: true" olanlar ücretli/öne çıkan listeleme olarak üstte ve
// vurgulu gösterilir (bkz. src/app/kuyumcular/page.tsx).
//
// ÖNEMLİ: Aşağıdaki kayıtlar gerçek işletme değil, sadece grid/kart
// tasarımını test etmek için konulmuş DEMO verilerdir. Siteyi canlıya
// almadan önce bu listeyi gerçek, izin alınmış kuyumcu bilgileriyle
// değiştirin ya da boş bırakıp kayıt formuyla doldurun.
export type Jeweler = {
  id: string;
  name: string;
  district: string;
  description: string;
  phone?: string;
  featured: boolean;
  isDemo?: boolean;
};

export const jewelers: Jeweler[] = [
  {
    id: "demo-1",
    name: "Demo Kuyumcu — Bayramyeri",
    district: "Pamukkale",
    description: "Bu bir örnek kayıttır. Gerçek kuyumcu bilgileriyle değiştirin.",
    featured: true,
    isDemo: true,
  },
  {
    id: "demo-2",
    name: "Demo Kuyumcu — Delikliçınar",
    district: "Merkezefendi",
    description: "Bu bir örnek kayıttır. Gerçek kuyumcu bilgileriyle değiştirin.",
    featured: false,
    isDemo: true,
  },
];
