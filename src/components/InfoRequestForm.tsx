"use client";

import { useActionState, useEffect, useId } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle, WarningCircle } from "@phosphor-icons/react/dist/ssr";
import { sendInfoRequest, type InfoRequestState } from "@/lib/infoRequest";
import { KONULAR } from "@/lib/infoRequestConfig";
import { trackEvent } from "@/lib/analytics";

const initialState: InfoRequestState = { ok: false, message: "" };

const fieldClass =
  "mt-1.5 w-full rounded-xl border border-border bg-bg px-3 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-brand focus-visible:ring-2 focus-visible:ring-brand/30";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-surface transition-all hover:bg-brand active:scale-[0.98] disabled:opacity-60"
    >
      {pending ? "Gönderiliyor…" : "Talebi gönder"}
    </button>
  );
}

export default function InfoRequestForm({
  defaultKonu,
}: {
  // Formun belirli bir sayfaya gömüldüğü durumlarda "Konu" alanının
  // ön seçili değeri (ör. /reklam-ver'de "Reklam / işletme tanıtımı").
  defaultKonu?: (typeof KONULAR)[number];
} = {}) {
  const [state, formAction] = useActionState(sendInfoRequest, initialState);
  const uid = useId();

  // Başarılı gönderimde dönüşüm event'i — kişisel veri içermez, yalnızca
  // hangi "konu" ile gönderildiği (bkz. lib/analytics.ts).
  useEffect(() => {
    if (state.ok) {
      trackEvent("form_submit", { konu: defaultKonu ?? "genel" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.ok]);

  if (state.ok) {
    return (
      <div className="flex items-start gap-3 rounded-2xl border border-positive/40 bg-positive/10 p-5">
        <CheckCircle
          aria-hidden="true"
          size={22}
          weight="fill"
          className="mt-0.5 shrink-0 text-positive"
        />
        <div>
          <p className="font-semibold text-ink">Talebiniz alındı</p>
          <p className="mt-1 text-sm text-muted">{state.message}</p>
        </div>
      </div>
    );
  }

  const err = state.errors ?? {};

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {state.message && !state.ok && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-2xl border border-negative/40 bg-negative/10 p-4"
        >
          <WarningCircle
            aria-hidden="true"
            size={20}
            weight="fill"
            className="mt-0.5 shrink-0 text-negative"
          />
          <p className="text-sm text-ink">{state.message}</p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${uid}-ad`} className="text-sm font-medium text-ink">
            Adınız <span className="text-negative">*</span>
          </label>
          <input
            id={`${uid}-ad`}
            name="ad"
            type="text"
            required
            autoComplete="name"
            maxLength={100}
            aria-invalid={!!err.ad}
            className={fieldClass}
          />
          {err.ad && <p className="mt-1 text-xs text-negative">{err.ad}</p>}
        </div>

        <div>
          <label htmlFor={`${uid}-tel`} className="text-sm font-medium text-ink">
            Telefon <span className="text-negative">*</span>
          </label>
          <input
            id={`${uid}-tel`}
            name="telefon"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            placeholder="05xx xxx xx xx"
            maxLength={25}
            aria-invalid={!!err.telefon}
            className={fieldClass}
          />
          {err.telefon && (
            <p className="mt-1 text-xs text-negative">{err.telefon}</p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor={`${uid}-eposta`}
            className="text-sm font-medium text-ink"
          >
            E-posta <span className="text-muted">(isteğe bağlı)</span>
          </label>
          <input
            id={`${uid}-eposta`}
            name="eposta"
            type="email"
            autoComplete="email"
            maxLength={150}
            aria-invalid={!!err.eposta}
            className={fieldClass}
          />
          {err.eposta && (
            <p className="mt-1 text-xs text-negative">{err.eposta}</p>
          )}
        </div>

        <div>
          <label htmlFor={`${uid}-konu`} className="text-sm font-medium text-ink">
            Konu
          </label>
          <select
            id={`${uid}-konu`}
            name="konu"
            defaultValue={defaultKonu ?? KONULAR[0]}
            className={fieldClass}
          >
            {KONULAR.map((k) => (
              <option key={k} value={k}>
                {k}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={`${uid}-mesaj`} className="text-sm font-medium text-ink">
          Talebiniz <span className="text-negative">*</span>
        </label>
        <textarea
          id={`${uid}-mesaj`}
          name="mesaj"
          required
          rows={5}
          maxLength={3000}
          placeholder="Hangi konuda bilgi almak istiyorsunuz? Mümkünse ayrıntı verin."
          aria-invalid={!!err.mesaj}
          className={fieldClass}
        />
        {err.mesaj && <p className="mt-1 text-xs text-negative">{err.mesaj}</p>}
      </div>

      {/* Honeypot — ekran dışı; gerçek kullanıcı doldurmaz. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={`${uid}-website`}>Web siteniz</label>
        <input
          id={`${uid}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label className="flex items-start gap-2.5 text-sm text-muted">
          <input
            name="kvkk"
            type="checkbox"
            required
            aria-invalid={!!err.kvkk}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-border text-brand focus-visible:ring-2 focus-visible:ring-brand/30"
          />
          <span>
            <a href="/kvkk" className="font-medium text-brand hover:underline">
              KVKK Aydınlatma Metni
            </a>
            &apos;ni okudum; ad, telefon ve mesaj bilgilerimin yalnızca
            talebime dönüş yapılması amacıyla işlenmesini onaylıyorum.
          </span>
        </label>
        {err.kvkk && <p className="mt-1 text-xs text-negative">{err.kvkk}</p>}
      </div>

      <SubmitButton />

      <p className="text-xs text-muted">
        Bilgileriniz veritabanında saklanmaz; yalnızca talebinizi yanıtlamak
        için e-posta olarak iletilir. Ayrıntı:{" "}
        <a href="/gizlilik-politikasi" className="text-brand hover:underline">
          Gizlilik Politikası
        </a>
        .
      </p>
    </form>
  );
}
