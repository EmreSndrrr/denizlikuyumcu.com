import { NextResponse } from "next/server";
import { getPrices } from "@/lib/prices.server";

// Bu dosya bir "Route Handler". app/api/prices/route.ts yolu otomatik
// olarak /api/prices adresinde bir HTTP endpoint'i oluşturur.
//
// Ne zaman kullanılır? Sayfaların kendisi (Server Component) fiyat verisini
// doğrudan lib/prices.ts'den çağırır — ekstra ağ isteği gerekmez. Bu
// endpoint asıl olarak CLIENT tarafındaki bileşenlerin (PriceTicker,
// GoldCalculator vb.) periyodik "canlı" güncelleme çekmesi için var.
//
// getPrices() artık veritabanından okuyor (bkz. lib/prices.ts) — hızlı,
// indeksli tek bir sorgu. Yine de çok sayıda ziyaretçi aynı anda yoklarsa
// diye yanıtı CDN'de 30 sn tutuyoruz (stale-while-revalidate ile).

export const dynamic = "force-dynamic";

export async function GET() {
  const data = await getPrices();
  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60",
    },
  });
}
