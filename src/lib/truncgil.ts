// Canlı fiyat kaynağı: finans.truncgil.com/today.json (ücretsiz, anahtar
// gerektirmeyen bir uç nokta). Tüm altın/döviz kalemlerini tek bir JSON'da
// döndürür ve kök seviyede `Update_Date` alanıyla kaynağın kendi güncelleme
// zamanını verir.
//
// Bu dosya iki yerden kullanılır:
//   1. Zamanlanmış görev (app/api/cron/snapshot) — 5 dakikada bir çağırır,
//      `Update_Date` değiştiyse tüm kalemleri veritabanına yazar.
//   2. lib/prices.ts — veritabanı henüz boşsa veya erişilemezse doğrudan
//      canlı veri çekmek için (bootstrap / fallback).
//
// Sadece web `fetch` kullanır, Node bağımlılığı yoktur.

import { INSTRUMENTS } from "@/lib/instruments";
import type { PriceItem, PriceSnapshot } from "@/lib/prices";

// Truncgil yanıtındaki sayılar Türkçe biçimdedir: "." binlik ayracı, ","
// ondalık ayracı ("6.798,72" -> 6798.72). Bazı alanlarda "$" öneki veya
// "%" (değişimde) bulunur.
export function parseTRNumber(raw: string): number {
  const cleaned = raw.replace(/[^0-9,.-]/g, "");
  return parseFloat(cleaned.replace(/\./g, "").replace(",", "."));
}

// "2026-09-04 11:45:03" — Truncgil bunu Türkiye saatiyle (TSİ, sabit +03:00,
// yaz saati yok) veriyor. Kesin bir ISO zaman damgasına çeviriyoruz.
export function parseTruncgilDate(raw: string): string {
  const iso = `${raw.trim().replace(" ", "T")}+03:00`;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) {
    throw new Error(`Truncgil Update_Date çözümlenemedi: "${raw}"`);
  }
  return d.toISOString();
}

type TruncgilEntry = { Alış: string; Satış: string; Değişim: string; Tür: string };

// key -> Truncgil kaynak anahtarı (+ gerekirse gramaj ölçeği). Ata/Reşat
// sikke aileleri yalnızca TAM boy geldiği için çeyrek/yarım kalemler
// gramaj oranıyla (1,75/7 ve 3,5/7) türetilir.
const SOURCE_MAP: Record<string, { sourceKey: string; scale?: number }> = {
  "gram-altin": { sourceKey: "gram-altin" },
  "ceyrek-altin": { sourceKey: "ceyrek-altin" },
  "yarim-altin": { sourceKey: "yarim-altin" },
  "tam-altin": { sourceKey: "tam-altin" },
  "cumhuriyet-altini": { sourceKey: "cumhuriyet-altini" },
  "22-ayar-bilezik": { sourceKey: "22-ayar-bilezik" },
  "usd-try": { sourceKey: "USD" },
  "eur-try": { sourceKey: "EUR" },
  "gbp-try": { sourceKey: "GBP" },
  "chf-try": { sourceKey: "CHF" },
  "sar-try": { sourceKey: "SAR" },
  "18-ayar-altin": { sourceKey: "18-ayar-altin" },
  "14-ayar-altin": { sourceKey: "14-ayar-altin" },
  "ceyrek-ata": { sourceKey: "ata-altin", scale: 1.75 / 7 },
  "yarim-ata": { sourceKey: "ata-altin", scale: 3.5 / 7 },
  "tam-ata": { sourceKey: "ata-altin" },
  "ceyrek-resat": { sourceKey: "resat-altin", scale: 1.75 / 7 },
  "yarim-resat": { sourceKey: "resat-altin", scale: 3.5 / 7 },
  "tam-resat": { sourceKey: "resat-altin" },
  "gremse-altin": { sourceKey: "gremse-altin" },
  "ons-altin": { sourceKey: "ons" },
};

export type ParsedTruncgil = {
  items: PriceItem[];
  sourceUpdatedAt: string;
};

// Ham Truncgil JSON'unu uygulama modeline çevirir. Zamanlanmış görev bu
// çıktıyı doğrudan veritabanına yazar.
export function parseTruncgil(data: Record<string, unknown>): ParsedTruncgil {
  const rawUpdate = data["Update_Date"];
  if (typeof rawUpdate !== "string") {
    throw new Error('Truncgil yanıtında "Update_Date" yok');
  }
  const sourceUpdatedAt = parseTruncgilDate(rawUpdate);

  const entry = (sourceKey: string): TruncgilEntry => {
    const raw = data[sourceKey];
    if (!raw || typeof raw !== "object") {
      throw new Error(`Truncgil yanıtında "${sourceKey}" bulunamadı`);
    }
    return raw as TruncgilEntry;
  };

  const items: PriceItem[] = INSTRUMENTS.map((meta) => {
    const src = SOURCE_MAP[meta.key];
    if (!src) throw new Error(`SOURCE_MAP'te "${meta.key}" tanımlı değil`);
    const e = entry(src.sourceKey);
    const scale = src.scale ?? 1;
    return {
      key: meta.key,
      label: meta.label,
      unit: meta.unit,
      type: meta.type,
      buy: Number((parseTRNumber(e.Alış) * scale).toFixed(2)),
      sell: Number((parseTRNumber(e.Satış) * scale).toFixed(2)),
      changePercent: parseTRNumber(e.Değişim),
    };
  });

  return { items, sourceUpdatedAt };
}

// Truncgil'i çeker ve tam bir PriceSnapshot döndürür. next.revalidate: 60
// ile Next.js aynı isteği en fazla dakikada bir tekrarlar.
export async function fetchTruncgilSnapshot(): Promise<PriceSnapshot> {
  const res = await fetch("https://finans.truncgil.com/today.json", {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error(`Truncgil API hata: HTTP ${res.status}`);
  }
  const data = (await res.json()) as Record<string, unknown>;
  const { items, sourceUpdatedAt } = parseTruncgil(data);
  return {
    items,
    updatedAt: new Date().toISOString(),
    sourceUpdatedAt,
    source: "live",
  };
}
