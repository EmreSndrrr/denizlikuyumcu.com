"use client";

// Dönüşüm event'leri — Vercel Web Analytics'in üstüne ince bir sarmalayıcı.
// KİŞİSEL VERİ İÇERMEZ: hiçbir çağrı isim, telefon, e-posta veya mesaj
// göndermez; yalnızca "nerede" (context) ve "ne" (konu gibi kategori
// bilgisi) taşınır. Vercel Analytics panelden etkinleştirilmeden bu
// çağrılar veri gitse de görünmez (bkz. PRODUCT.md / gizlilik-politikasi).
//
// Kişisel veri içermeyen, çerezsiz bir ölçüm aracı olduğu için (bkz.
// CookieConsentBanner) onay beklemeden çalışır.
import { track } from "@vercel/analytics";

export type AnalyticsEventName =
  | "ad_cta_click"
  | "whatsapp_click"
  | "phone_click"
  | "directions_click"
  | "profile_click"
  | "form_submit";

// `context`: olayın hangi yüzeyde olduğu (ör. "reklam-ver", "fiyat-sayfasi",
// "kuyumcular", "home-featured", "header"). Serbest metin ama kısa/sabit
// bir küme olacak şekilde çağıran taraflarda tutuluyor.
export function trackEvent(
  name: AnalyticsEventName,
  properties?: Record<string, string>,
) {
  try {
    track(name, properties);
  } catch {
    // Analytics script engellenmişse (reklam engelleyici vb.) sessizce
    // yoksay — ölçüm asla kullanıcı deneyimini bozmamalı.
  }
}
