import type { Metadata } from "next";
import BackButton from "@/components/ui/BackButton";

export const metadata: Metadata = {
  title: "Minti — Case Study",
  description:
    "Designing and building Minti — a personal spending tracker for young adults who want to understand where their money is going.",
};

const sectionLabel: React.CSSProperties = {
  fontFamily: "var(--font-manrope), sans-serif",
  fontSize: "14px",
  color: "var(--color-muted)",
};

const pageTitle: React.CSSProperties = {
  fontFamily: "var(--font-fraunces), Georgia, serif",
  fontSize: "clamp(2rem, 6vw, 3rem)",
  fontWeight: 300,
  lineHeight: 1.05,
  letterSpacing: "-0.02em",
  color: "var(--color-fg)",
  marginBottom: "3rem",
  maxWidth: "80%",
};

const sectionTitle: React.CSSProperties = {
  fontFamily: "var(--font-fraunces), Georgia, serif",
  fontSize: "32px",
  fontWeight: 300,
  lineHeight: 1.1,
  color: "var(--color-fg)",
  marginBottom: "2rem",
};

const body: React.CSSProperties = {
  fontFamily: "var(--font-manrope), sans-serif",
  fontSize: "14px",
  lineHeight: 1.7,
  color: "var(--color-muted)",
  textWrap: "pretty",
};

const metaSmall: React.CSSProperties = {
  fontFamily: "var(--font-manrope), sans-serif",
  fontSize: "14px",
  color: "var(--color-muted)",
};

const divider: React.CSSProperties = {
  borderBottom: "1px solid var(--border-section)",
  paddingBottom: "3rem",
  marginBottom: "3rem",
};

const b: React.CSSProperties = {
  fontFamily: "var(--font-fraunces), Georgia, serif",
  fontWeight: 400,
  fontStyle: "italic",
  color: "var(--color-fg)",
  opacity: 0.7,
};

function ImagePlaceholder({ caption }: { caption: string }) {
  return (
    <figure style={{ margin: 0 }}>
      <div
        style={{
          width: "100%",
          aspectRatio: "16 / 9",
          borderRadius: "12px",
          border: "1px dashed var(--border-section)",
          background: "var(--bg-subtle)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontSize: "12px",
            color: "var(--color-muted)",
            textAlign: "center",
            opacity: 0.5,
          }}
        >
          {caption}
        </span>
      </div>
      <figcaption
        style={{
          fontFamily: "var(--font-manrope), sans-serif",
          fontSize: "11px",
          color: "var(--color-muted)",
          marginTop: "10px",
          opacity: 0.6,
        }}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

export default function MintiCaseStudy() {
  return (
    <main>
      <style>{`
        @media (max-width: 640px) {
          .cs-grid { grid-template-columns: 1fr !important; }
          .cs-meta { gap: 1.25rem !important; }
          .cs-screen-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="container" style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
        <BackButton style={{ marginBottom: "2.5rem" }} />

        {/* Meta row */}
        <div className="cs-meta" style={{ display: "flex", gap: "3rem", flexWrap: "wrap", ...divider, paddingBottom: "2rem", marginBottom: "2.5rem" }}>
          {[
            { label: "Year", value: "2026 – ongoing" },
            { label: "Role", value: "Designer & Builder" },
            { label: "Type", value: "PWA · Mobile-first" },
            { label: "Live", value: "minti.one", href: "https://minti.one" },
          ].map((item) => (
            <div key={item.label} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px" }}>
              <p style={sectionLabel}>{item.label}</p>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer"
                  style={{ ...metaSmall, fontWeight: 500, color: "var(--color-fg)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                  {item.value}
                </a>
              ) : (
                <p style={{ ...metaSmall, fontWeight: 500, color: "var(--color-fg)" }}>{item.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* Title */}
        <h1 style={pageTitle}>A spending tracker built for reflection, not automation</h1>

        {/* Intro */}
        <div style={divider}>
          <div style={{ maxWidth: "80%" }}>
            <p style={{ ...body, marginBottom: "1rem" }}>
              Minti is a personal spending tracker for young adults who want to understand where their money is going — not automate it away. Set a monthly limit, log daily expenses, track subscriptions, and see your average daily spend. That's it.{" "}
              <span style={b}>Designed and built entirely with Claude Code — no Figma</span>, from initial concept through to the final UI.
            </p>
            <p style={{ ...body, marginBottom: "1rem" }}>
              Most finance apps either connect to your bank and automate everything — removing the moment of reflection — or are so complex you need to be a spreadsheet person to use them. Minti adds friction back deliberately.{" "}
              <span style={b}>You have to type in what you spent. That five seconds is the point.</span>
            </p>
            <p style={{ ...body, marginBottom: "1rem" }}>
              Designed and built with a proper design system — custom glassmorphism, a single accent colour, and consistent type and spacing tokens throughout.
            </p>
            <p style={body}>
              Currently in build — no real users yet. The goal right now is to make it feel like a properly crafted app. Every screen, every interaction, every edge state handled.
            </p>
          </div>
        </div>

        {/* Cover image */}
        <div style={divider}>
          <img
            src="/images/projects/minti/cover-image-minti.png"
            alt="Minti spending tracker app"
            style={{ width: "100%", aspectRatio: "16 / 9", objectFit: "cover", borderRadius: "12px", display: "block" }}
          />
        </div>

        {/* Screens */}
        <div style={{ ...divider, borderBottom: "none", paddingBottom: 0 }}>
          <div className="cs-screen-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem", alignItems: "center" }}>
            <img src="/images/projects/minti/app-icon.png" alt="Minti app icon" style={{ width: "100%", borderRadius: "24px", display: "block" }} />
            <img src="/images/projects/minti/expences.png" alt="Minti expenses screen" style={{ width: "100%", borderRadius: "12px", display: "block" }} />
            <img src="/images/projects/minti/categories.png" alt="Minti categories screen" style={{ width: "100%", borderRadius: "12px", display: "block" }} />
            <img src="/images/projects/minti/subscriptions.png" alt="Minti subscriptions screen" style={{ width: "100%", borderRadius: "12px", display: "block" }} />
          </div>
        </div>

        {/* Live link */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--border-section)", marginBottom: "3rem" }}>
          <a href="https://minti.one" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: "12px", fontWeight: 500, color: "var(--color-muted)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
            minti.one
          </a>
        </div>

        {/* Next project */}
        <div style={{ paddingTop: "3rem", borderTop: "1px solid var(--border-section)" }}>
          <p style={sectionLabel}>Next</p>
          <a
            href="/projects/ecobyte"
            style={{
              display: "inline-block",
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "var(--color-fg)",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
              textDecorationThickness: "1px",
              marginTop: "0.75rem",
            }}
          >
            EcoByte
            <span style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: 300, color: "var(--color-muted)", marginLeft: "0.75rem" }}>
              — Digital Sustainability
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}
