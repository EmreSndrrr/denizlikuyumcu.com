"use client";

// Sunucu bileşenlerinin (page.tsx gibi) kendileri client'a dönüşmeden
// ölçümlenebilir bir <Link> kullanabilmesi için ince bir istemci sarmalayıcı
// — bkz. lib/analytics.ts. Görünüm/davranış tamamen next/link ile aynı.
import Link from "next/link";
import type { ComponentProps } from "react";
import { trackEvent, type AnalyticsEventName } from "@/lib/analytics";

export default function TrackedLink({
  event,
  eventProps,
  onClick,
  ...props
}: ComponentProps<typeof Link> & {
  event: AnalyticsEventName;
  eventProps?: Record<string, string>;
}) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        trackEvent(event, eventProps);
        onClick?.(e);
      }}
    />
  );
}
