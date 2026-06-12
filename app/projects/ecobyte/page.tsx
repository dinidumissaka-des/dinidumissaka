import type { Metadata } from "next";
import Image from "next/image";
import BackButton from "@/components/ui/BackButton";
import LottieRemote from "@/components/ui/LottieRemote";

export const metadata: Metadata = {
  title: "EcoByte — Case Study",
  description:
    "Designing EcoByte — a gamified sustainability platform that makes the carbon footprint of everyday digital activity visible and actionable.",
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
  marginBottom: "1rem",
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

const screenLabel: React.CSSProperties = {
  fontFamily: "var(--font-manrope), sans-serif",
  fontSize: "11px",
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--color-muted)",
  marginBottom: "0.75rem",
};

export default function EcoByteCaseStudy() {
  return (
    <main>
      <style>{`
        @media (max-width: 640px) {
          .cs-grid { grid-template-columns: 1fr !important; }
          .cs-meta { gap: 1.25rem !important; }
          .cs-screen-grid { grid-template-columns: 1fr !important; }
        }
        .dark .asset-bg { background: rgba(255,255,255,0.04) !important; }
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

        {/* Cover image */}
        <div style={divider}>
          <Image
            src="/images/projects/ecobyte/ecobyte-cover.webp"
            alt="Person holding a phone showing the EcoByte app"
            width={1920} height={1080}
            style={{ width: "100%", aspectRatio: "16 / 9", objectFit: "cover", borderRadius: "12px", display: "block" }}
          />
        </div>

        {/* Hero animation */}
        <div style={divider}>
          <div style={{ borderRadius: "12px", overflow: "hidden", background: "rgba(0,0,0,0.04)", aspectRatio: "16 / 9" }} className="asset-bg">
            <LottieRemote
              url="https://cdn.prod.website-files.com/661685703798b803e4b90e1a/666ef3073a7b5743b35191f2_Showreel-Grid-Mobile-%5Bremix%5D%20(2).json"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        {/* Homepage */}
        <div style={divider}>
          <div className="cs-screen-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div>
              <p style={screenLabel}>Homepage</p>
              <h2 style={sectionTitle}>A dynamic, personalised dashboard</h2>
              <p style={body}>Display current point balance, level progress, and personalized eco-challenges. A dynamic and personalized dashboard that provides users with an at-a-glance overview of their sustainability journey.</p>
            </div>
            <div style={{ display: "flex", justifyContent: "center", background: "rgba(0,0,0,0.04)", borderRadius: "16px", padding: "2rem" }} className="asset-bg">
              <Image src="/images/projects/ecobyte/666f02f2c52c98ccc300eaa0_iPhone - Home Screen - Light.webp" alt="EcoByte homepage screen" width={390} height={844} style={{ width: "55%", height: "auto", display: "block" }} />
            </div>
          </div>
        </div>

        {/* Challenges */}
        <div style={divider}>
          <div className="cs-screen-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", background: "rgba(0,0,0,0.04)", borderRadius: "16px", padding: "2rem" }} className="asset-bg">
              <Image src="/images/projects/ecobyte/666f002bf886c3f4bcb6d95f_iPhone - Home Screen - Light-1.webp" alt="EcoByte challenges screen" width={390} height={844} style={{ width: "55%", height: "auto", display: "block" }} />
            </div>
            <div>
              <p style={screenLabel}>Challenges page</p>
              <h2 style={sectionTitle}>Browse, track, and earn</h2>
              <p style={body}>Browse available challenges, track progress, and earn bonus points for completion. This screen showcases user categorisation and badges earned for milestones — "Eco Upgrade", "Power Saver" — alongside a collaborative challenge to reduce data usage with a friend.</p>
            </div>
          </div>
        </div>

        {/* Footprint tracker */}
        <div style={divider}>
          <div className="cs-screen-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div>
              <p style={screenLabel}>Footprint tracker</p>
              <h2 style={sectionTitle}>Data-driven sustainability insights</h2>
              <p style={body}>Visualize activity breakdown, carbon footprint impact, and point earnings over time. Empowering users with clear insight into how their digital habits translate to real-world environmental impact.</p>
            </div>
            <div style={{ display: "flex", justifyContent: "center", background: "rgba(0,0,0,0.04)", borderRadius: "16px", padding: "2rem" }} className="asset-bg">
              <Image src="/images/projects/ecobyte/666f021ab8d61ebc96e3dd2e_iPhone - Home Screen - Light-3.webp" alt="EcoByte footprint tracker screen" width={390} height={844} style={{ width: "55%", height: "auto", display: "block" }} />
            </div>
          </div>
        </div>

        {/* Rewards */}
        <div style={divider}>
          <div className="cs-screen-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", background: "rgba(0,0,0,0.04)", borderRadius: "16px", padding: "2rem" }} className="asset-bg">
              <Image src="/images/projects/ecobyte/666f021a019ddbee24ddeecb_iPhone - Home Screen - Light-4.webp" alt="EcoByte rewards marketplace screen" width={390} height={844} style={{ width: "55%", height: "auto", display: "block" }} />
            </div>
            <div>
              <p style={screenLabel}>Rewards Marketplace</p>
              <h2 style={sectionTitle}>Make impact, earn rewards</h2>
              <p style={body}>Discover exclusive offers, discounts, and experiences redeemable with points. To make a positive impact on the environment while enjoying the rewards you deserve.</p>
            </div>
          </div>
        </div>

        {/* Immediate feedback */}
        <div style={{ paddingBottom: "3rem" }}>
          <div className="cs-screen-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
            <div>
              <p style={screenLabel}>Immediate feedback</p>
              <h2 style={sectionTitle}>Feel the impact of every action</h2>
              <p style={body}>EcoByte provides immediate feedback on the environmental impact of your digital habits — real-time notifications that connect individual choices to measurable outcomes.</p>
            </div>
            <div style={{ borderRadius: "16px", overflow: "hidden", background: "rgba(0,0,0,0.04)", minWidth: 0, aspectRatio: "16 / 9", display: "flex", justifyContent: "center", alignItems: "center" }} className="asset-bg">
              <LottieRemote
                url="https://cdn.prod.website-files.com/661685703798b803e4b90e1a/666f08e25fe5c08f90176140_Notification-%5Bremix%5D.json"
                style={{ width: "80%" }}
              />
            </div>
          </div>
        </div>

        {/* Smartphones slider */}
        <div style={divider}>
          <div style={{ borderRadius: "12px", overflow: "hidden", background: "rgba(0,0,0,0.04)", aspectRatio: "16 / 9" }} className="asset-bg">
            <LottieRemote
              url="https://cdn.prod.website-files.com/661685703798b803e4b90e1a/666f0b1ee5887bf0889f10d0_Animated-smartphones_-slider-%5Bremix%5D.json"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        {/* Next project */}
        <div style={{ paddingTop: "3rem", borderTop: "1px solid var(--border-section)" }}>
          <p style={sectionLabel}>Next</p>
          <a
            href="/projects/deriv"
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
            Deriv
            <span style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: 300, color: "var(--color-muted)", marginLeft: "0.75rem" }}>
              — Enterprise Website
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}
