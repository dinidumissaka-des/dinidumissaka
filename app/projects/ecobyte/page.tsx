import type { Metadata } from "next";
import BackButton from "@/components/ui/BackButton";
import LottieRemote from "@/components/ui/LottieRemote";

export const metadata: Metadata = {
  title: "EcoByte — Case Study",
  description:
    "Designing EcoByte — a gamified sustainability platform that makes the carbon footprint of everyday digital activity visible and actionable.",
};

const sectionLabel: React.CSSProperties = {
  fontFamily: "var(--font-manrope), sans-serif",
  fontSize: "12px",
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
  fontSize: "11px",
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

export default function EcoByteCaseStudy() {
  return (
    <main>
      <style>{`
        @media (max-width: 640px) {
          .cs-grid { grid-template-columns: 1fr !important; }
          .cs-meta { gap: 1.25rem !important; }
        }
      `}</style>

      <div className="container" style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
        <BackButton style={{ marginBottom: "2.5rem" }} />

        {/* Meta row */}
        <div className="cs-meta" style={{ display: "flex", gap: "3rem", flexWrap: "wrap", ...divider, paddingBottom: "2rem", marginBottom: "2.5rem" }}>
          {[
            { label: "Year", value: "2024" },
            { label: "Role", value: "Lead Designer" },
            { label: "Tools", value: "Figma · Webflow · Adobe Illustrator" },
            { label: "Team", value: "With a UX Researcher" },
          ].map((item) => (
            <div key={item.label} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px" }}>
              <p style={sectionLabel}>{item.label}</p>
              <p style={{ ...metaSmall, fontWeight: 500, color: "var(--color-fg)" }}>{item.value}</p>
            </div>
          ))}
        </div>

        {/* Title */}
        <h1 style={pageTitle}>Making the invisible carbon cost of digital life visible</h1>

        {/* Intro */}
        <div style={divider}>
          <div style={{ maxWidth: "80%" }}>
            <p style={{ ...body, marginBottom: "1rem" }}>
              EcoByte is a gamified sustainability platform designed to make the hidden carbon footprint of everyday digital activity — browsing, streaming, scrolling — visible and actionable. I led the UX and product design alongside a UX researcher: research, flows, wireframes, visual system, and high-fidelity prototypes.
            </p>
            <p style={{ ...body, marginBottom: "1rem" }}>
              Most sustainability conversations focus on industrial carbon.{" "}
              <span style={b}>The digital footprint goes almost entirely unnoticed</span> — and the tools that exist either overwhelm with data or deal in abstractions that mean nothing in practice. EcoByte makes the cost personal: track your digital activity, earn points for lower-impact choices, and redeem them for eco-friendly rewards. The act of tracking is the behaviour change.
            </p>
            <p style={{ ...body, marginBottom: "1rem" }}>
              We ran user interviews, competitor analysis, and surveys before touching a screen. Three things came out of that research: users want a next step, not a number; visual cues keep them in the app longer than data tables; and{" "}
              <span style={b}>gamification works if it's optional rather than forced.</span> Those three constraints shaped every subsequent decision — the colour system (Tropical Indigo, Emerald Green, Pear Yellow — energetic, not preachy), the badges, the adjustable visibility of leaderboards.
            </p>
            <p style={body}>A concept project — designed end-to-end in Figma.</p>
          </div>
        </div>

        {/* Hero */}
        <div style={divider}>
          <div className="cs-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            <div style={{ borderRadius: "12px", overflow: "hidden", background: "rgba(0,0,0,0.04)", minWidth: 0 }} className="asset-bg">
              <LottieRemote
                url="https://cdn.prod.website-files.com/661685703798b803e4b90e1a/666f0b1ee5887bf0889f10d0_Animated-smartphones_-slider-%5Bremix%5D.json"
                style={{ width: "100%" }}
              />
            </div>
            <div style={{ borderRadius: "12px", overflow: "hidden", background: "rgba(0,0,0,0.04)", minWidth: 0 }} className="asset-bg">
              <LottieRemote
                url="https://cdn.prod.website-files.com/661685703798b803e4b90e1a/666ef3073a7b5743b35191f2_Showreel-Grid-Mobile-%5Bremix%5D%20(2).json"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--border-section)" }}>
          <span style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: "12px", color: "var(--color-muted)" }}>
            Concept project · Designed in Figma
          </span>
        </div>
      </div>
    </main>
  );
}
