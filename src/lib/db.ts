import "server-only";

// Postgres bağlantısı. `@neondatabase/serverless` HTTP tabanlıdır —
// serverless/edge ortamlarında klasik TCP havuzunun (pg.Pool) yaşadığı
// "donmuş bağlantı" sorununu yaşamaz, her sorgu tek bir fetch isteğidir.
// Bağlantı dizesi üzerinden çalıştığı için Neon dışı bir Postgres'e
// (Supabase pooler, kendi sunucun) geçmek gerekirse yalnızca bu dosya
// değişir.
//
// Ortam değişkeni: DATABASE_URL (Vercel Postgres/Neon entegrasyonu bunu
// otomatik ekler; POSTGRES_URL da kabul edilir). Tanımlı değilse veri
// katmanı (lib/prices.ts) sessizce doğrudan-Truncgil / mock yoluna düşer.

import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

const connectionString =
  process.env.DATABASE_URL ||
  process.env.POSTGRES_URL ||
  process.env.POSTGRES_URL_NON_POOLING ||
  "";

export const hasDatabase = connectionString.length > 0;

let client: NeonQueryFunction<false, false> | null = null;

export function db(): NeonQueryFunction<false, false> {
  if (!connectionString) {
    throw new Error(
      "DATABASE_URL tanımlı değil — Postgres bağlantısı kurulamıyor.",
    );
  }
  if (!client) {
    client = neon(connectionString);
  }
  return client;
}
