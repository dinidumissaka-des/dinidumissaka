import type { Metadata } from "next";
import BackButton from "@/components/ui/BackButton";

export const metadata: Metadata = {
  title: "Planr — Case Study",
  description:
    "Designing and building Planr — a SaaS platform connecting homeowners with verified architects and construction specialists in Sri Lanka.",
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

function ImagePlaceholder({ caption, bg }: { caption: string; bg?: string }) {
  return (
    <figure style={{ margin: 0 }}>
      <div
        style={{
          width: "100%",
          aspectRatio: "16 / 9",
          borderRadius: "12px",
          border: "1px dashed var(--border-section)",
          background: bg ?? "var(--bg-subtle)",
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

export default function PlanrCaseStudy() {
  return (
    <main>
      <style>{`
        @media (max-width: 640px) {
          .cs-grid { grid-template-columns: 1fr !important; }
          .cs-meta { gap: 1.25rem !important; }
          .cs-page-title { max-width: 100% !important; }
          .cs-intro { max-width: 100% !important; }
        }
      `}</style>

      <div className="container" style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
        <BackButton style={{ marginBottom: "2.5rem" }} />

        {/* Meta row */}
        <div className="cs-meta" style={{ display: "flex", gap: "3rem", flexWrap: "wrap", ...divider, paddingBottom: "2rem", marginBottom: "2.5rem" }}>
          {[
            { label: "Year", value: "2025 – ongoing" },
            { label: "Role", value: "Designer & Builder" },
            { label: "Type", value: "SaaS · MVP · Full-stack" },
            { label: "Live", value: "buildinghelp.app", href: "https://buildinghelp.app" },
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
        <h1 className="cs-page-title" style={pageTitle}>A platform for building and investing in Sri Lanka from abroad</h1>

        {/* Intro */}
        <div style={divider}>
          <div className="cs-intro" style={{ maxWidth: "80%" }}>
            <p style={{ ...body, marginBottom: "1rem" }}>
              Planr is a platform for Sri Lankans living abroad and overseas investors who want to build or invest in Sri Lanka but can't manage it from the ground. I designed and built the platform alongside two collaborators — covering the marketing site, a dual-role SaaS product (clients and consultants), booking system, AI-powered Q&A, and the design system underpinning all of it.
            </p>
            <p style={{ ...body, marginBottom: "1rem" }}>
              The construction market in Sri Lanka runs entirely on trust and physical presence.{" "}
              <span style={b}>If you're overseas, there's no single place to find verified experts</span>, no way to check credentials remotely, and no infrastructure for making a confident hiring decision from abroad. For younger earners approaching it for the first time, the barrier is even higher — they have the income and the intent, but no framework for where to even start.
            </p>
            <p style={{ ...body, marginBottom: "1rem" }}>
              The core product loop: browse consultant profiles, pick from live availability, confirm a booking. No back-and-forth. Planr AI (powered by Claude Haiku) answers architecture, permit, and cost questions in real time —{" "}
              <span style={b}>positioned as a first-responder between sessions, not a replacement for the human consultant.</span> The design system serves two completely different mental models — clients in discovery mode, consultants in management mode — from the same component set.
            </p>
            <p style={body}>The platform is live and open for early access signups.</p>
          </div>
        </div>

        {/* Cover image */}
        <div style={divider}>
          <img
            src="/images/projects/planr/l1.png"
            alt="Planr marketing landing page"
            style={{ width: "100%", aspectRatio: "16 / 9", objectFit: "cover", borderRadius: "12px", display: "block" }}
          />
        </div>

        {/* Screens grid */}
        <div style={{ ...divider, borderBottom: "none", paddingBottom: 0 }}>
          <div className="cs-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            <img src="/images/projects/planr/l2.png" alt="Planr screen" style={{ width: "100%", borderRadius: "12px", display: "block" }} />
            <img src="/images/projects/planr/l3.png" alt="Planr screen" style={{ width: "100%", borderRadius: "12px", display: "block" }} />
            <img src="/images/projects/planr/l4.png" alt="Planr screen" style={{ width: "100%", borderRadius: "12px", display: "block" }} />
            <img src="/images/projects/planr/l4-1.png" alt="Planr screen" style={{ width: "100%", borderRadius: "12px", display: "block" }} />
          </div>
        </div>

        {/* Live link */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--border-section)" }}>
          <a href="https://buildinghelp.app" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: "12px", fontWeight: 500, color: "var(--color-muted)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
            buildinghelp.app
          </a>
          <a href="https://planr-khaki.vercel.app/signup" target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: "12px", fontWeight: 500, color: "var(--color-muted)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
            planr.vercel.app
          </a>
        </div>
      </div>
    </main>
  );
}
