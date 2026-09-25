"use client";

import { useActionState, useId } from "react";
import { Lock } from "lucide-react";
import { unlockCaseStudy, type UnlockState } from "@/app/projects/actions";

const mono: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "11px",
  color: "var(--color-muted)",
};

const body: React.CSSProperties = {
  fontFamily: "var(--font-manrope), sans-serif",
  fontSize: "14px",
  lineHeight: 1.7,
  color: "var(--color-muted)",
};

/**
 * Password prompt for the NDA part of a case study. The locked content is rendered
 * on the server only after the password checks out, so nothing is hidden client-side.
 */
export default function CaseStudyLock({
  title,
  description,
  contents,
  requestSubject,
}: {
  title: string;
  description: string;
  contents: string[];
  requestSubject: string;
}) {
  const [state, action, pending] = useActionState<UnlockState, FormData>(unlockCaseStudy, {});
  const id = useId();

  return (
    <section
      aria-labelledby={`${id}-title`}
      style={{
        border: "1px solid var(--border-section)",
        borderRadius: "12px",
        background: "var(--bg-card)",
        padding: "clamp(1.5rem, 4vw, 2.5rem)",
      }}
    >
      <p style={{ ...mono, display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
        <Lock size={13} aria-hidden /> Process · under NDA
      </p>
      <h2
        id={`${id}-title`}
        style={{
          fontFamily: "var(--font-fraunces), Georgia, serif",
          fontSize: "32px",
          fontWeight: 300,
          lineHeight: 1.1,
          color: "var(--color-fg)",
          marginBottom: "1rem",
        }}
      >
        {title}
      </h2>
      <p style={{ ...body, marginBottom: "1.25rem", maxWidth: "46rem" }}>{description}</p>

      <p style={{ ...mono, marginBottom: "8px" }}>Inside</p>
      <ul
        style={{
          listStyle: "none",
          margin: "0 0 2rem",
          padding: 0,
          display: "flex",
          flexWrap: "wrap",
          gap: "6px 20px",
        }}
      >
        {contents.map((c) => (
          <li key={c} style={{ ...body, fontSize: "13px", color: "var(--color-fg)" }}>
            {c}
          </li>
        ))}
      </ul>

      <form action={action} style={{ maxWidth: "26rem" }}>
        <label htmlFor={`${id}-password`} style={{ ...mono, display: "block", marginBottom: "8px" }}>
          Password
        </label>
        <div style={{ display: "flex", gap: "8px" }}>
          <input
            id={`${id}-password`}
            name="password"
            type="password"
            required
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
          style={{ ...body, fontSize: "13px", color: "color-mix(in srgb, #FF444F 70%, var(--color-fg))", minHeight: "1.5rem", margin: "8px 0 0" }}
        >
          {state.error ?? ""}
        </p>
      </form>

      <p style={{ ...body, fontSize: "13px", margin: "0.5rem 0 0" }}>
        Don&apos;t have the password?{" "}
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
