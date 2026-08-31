import { NextResponse } from "next/server";
import { getPrices } from "@/lib/prices";

// Bu dosya bir "Route Handler". app/api/prices/route.ts yolu otomatik
// olarak /api/prices adresinde bir HTTP endpoint'i oluşturur.
//
// Ne zaman kullanılır? Sayfaların kendisi (Server Component) fiyat verisini
// doğrudan lib/prices.ts'den import edip çağırabilir — ekstra bir ağ
// isteğine gerek yok. Bu endpoint asıl olarak CLIENT tarafındaki
// PriceTicker bileşeninin (tarayıcıda çalışan kod) periyodik olarak
// "canlı" güncelleme çekmesi için var.
//
// revalidate: 60 -> Next.js bu route'un sonucunu 60 saniye cache'ler,
// böylece saniyede onlarca istek gelse bile gerçek veri kaynağına (ileride
// ücretli bir API olacak) sadece dakikada bir gidilir.
export const revalidate = 60;

export async function GET() {
  const data = await getPrices();
  return NextResponse.json(data);
}
