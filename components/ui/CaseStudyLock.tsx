"use client";

import { useActionState, useId } from "react";
import { Lock } from "lucide-react";
import { unlockCaseStudy, type UnlockState } from "@/app/projects/actions";

const body: React.CSSProperties = {
  fontFamily: "var(--font-manrope), sans-serif",
  fontSize: "14px",
  lineHeight: 1.6,
  color: "var(--color-muted)",
};

/**
 * Password prompt for the NDA part of a case study, sat on top of a faded preview.
 * The locked content is rendered on the server only after the password checks out,
 * so nothing is hidden client-side.
 */
export default function CaseStudyLock({ requestSubject }: { requestSubject: string }) {
  const [state, action, pending] = useActionState<UnlockState, FormData>(unlockCaseStudy, {});
  const id = useId();

  return (
    <section
      aria-labelledby={`${id}-title`}
      style={{
        width: "100%",
        maxWidth: "30rem",
        textAlign: "center",
        border: "1px solid var(--border-section)",
        borderRadius: "16px",
        // Opaque so the card sits cleanly on top of the fading preview.
        background: "linear-gradient(var(--bg-card), var(--bg-card)), var(--color-bg)",
        boxShadow: "0 12px 40px rgba(0, 0, 0, 0.18)",
        padding: "2rem clamp(1.25rem, 5vw, 2.25rem)",
      }}
    >
      <Lock size={18} aria-hidden style={{ color: "var(--color-muted)", display: "block", margin: "0 auto 12px" }} />
      <h2
        id={`${id}-title`}
        style={{
          fontFamily: "var(--font-fraunces), Georgia, serif",
          fontSize: "26px",
          fontWeight: 300,
          lineHeight: 1.15,
          color: "var(--color-fg)",
          marginBottom: "8px",
        }}
      >
        Continue reading
      </h2>
      <p style={{ ...body, marginBottom: "1.5rem" }}>The full process is under NDA and password protected.</p>

      <form action={action}>
        <label htmlFor={`${id}-password`} className="sr-only">
          Password
        </label>
        <div style={{ display: "flex", gap: "8px" }}>
          <input
            id={`${id}-password`}
            name="password"
            type="password"
            required
            placeholder="Password"
            autoComplete="current-password"
            aria-invalid={state.error ? true : undefined}
            aria-describedby={state.error ? `${id}-error` : undefined}
            style={{
              flex: 1,
              minWidth: 0,
              padding: "10px 16px",
              borderRadius: "999px",
              border: "1px solid color-mix(in srgb, var(--color-muted) 45%, transparent)",
              background: "transparent",
              color: "var(--color-fg)",
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: "14px",
            }}
          />
          <button
            type="submit"
            disabled={pending}
            style={{
              padding: "10px 20px",
              borderRadius: "999px",
              border: "none",
              background: "var(--color-fg)",
              color: "var(--color-bg)",
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: "14px",
              fontWeight: 600,
              cursor: pending ? "wait" : "pointer",
              opacity: pending ? 0.7 : 1,
            }}
          >
            {pending ? "Checking…" : "Unlock"}
          </button>
        </div>
        <p
          id={`${id}-error`}
          role="alert"
          style={{
            ...body,
            fontSize: "13px",
            color: "color-mix(in srgb, #FF444F 70%, var(--color-fg))",
            minHeight: "1.4rem",
            margin: "8px 0 0",
          }}
        >
          {state.error ?? ""}
        </p>
      </form>

      <p style={{ ...body, fontSize: "13px", margin: "0.25rem 0 0" }}>
        Don&apos;t have it?{" "}
        <a
          href={`mailto:dinidumissaka@gmail.com?subject=${encodeURIComponent(requestSubject)}`}
          style={{ color: "var(--color-fg)", textDecoration: "underline", textUnderlineOffset: "3px" }}
        >
          Request access
        </a>
      </p>
    </section>
  );
}
