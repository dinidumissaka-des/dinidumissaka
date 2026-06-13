import type { Metadata } from "next";
import BackButton from "@/components/ui/BackButton";
import ParallaxImage from "@/components/ui/ParallaxImage";

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

const mintiFeatures = [
  {
    title: "Expense Tracking",
    description: "Log daily expenses in seconds. The home screen surfaces your running month total, today's spend, and average per day — so you always know where you stand without opening a dashboard.",
    image: "/images/projects/minti/expences.png",
  },
  {
    title: "Smart Insights",
    description: "Auto-generated cards surface what actually matters: your biggest spend category, projected end-of-month total, savings rate, and which categories jumped vs. last month. No charts to configure — Minti figures out what's worth telling you.",
    image: "/images/projects/minti/insights.png",
  },
  {
    title: "Spend by Category",
    description: "Every expense maps to a category. The By Category view ranks them by total and percentage, so the pattern is obvious at a glance — not buried in a pie chart.",
    image: "/images/projects/minti/spending by category.png",
  },
  {
    title: "Month-over-Month",
    description: "One tap to see how this month's categories compare to last month. Each category shows its percentage change — up, down, or new — so you can spot shifts without doing any maths.",
    image: "/images/projects/minti/vs last mont.png",
  },
  {
    title: "Income & Savings Rate",
    description: "Set your base income and log one-off payments separately. Minti calculates your savings rate in real time and shows exactly how much of this month's income you've kept.",
    image: "/images/projects/minti/income.png",
  },
  {
    title: "Bills & Subscriptions",
    description: "Recurring bills live separately from variable spending. See your monthly fixed cost, projected annual spend, and how each subscription contributes — so nothing hides in the noise.",
    image: "/images/projects/minti/bills.png",
  },
];

export default function MintiCaseStudy() {
  return (
    <main>
      <style>{`
        @media (max-width: 640px) {
          .cs-grid { grid-template-columns: 1fr !important; }
          .cs-meta { gap: 1.25rem !important; }
          .cs-screen-grid { grid-template-columns: 1fr !important; }
          .minti-features-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 900px) {
          .minti-features-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        .minti-feature-card .minti-overlay {
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .minti-feature-card:hover .minti-overlay { opacity: 1; }
        .minti-feature-card img { transition: transform 0.5s ease; }
        .minti-feature-card:hover img { transform: scale(1.04); }
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
          <div>
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
          <ParallaxImage
            src="/images/projects/minti/cover-image-minti.webp"
            alt="Minti spending tracker app"
            width={1920} height={1080}
            style={{ width: "100%", aspectRatio: "16 / 9", objectFit: "cover", borderRadius: "12px", display: "block" }}
          />
        </div>

        {/* Screens */}
        <div style={divider}>
          <div className="cs-screen-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem", alignItems: "center" }}>
            <ParallaxImage src="/images/projects/minti/app-icon.webp" alt="Minti app icon" width={512} height={512} style={{ width: "100%", height: "auto", borderRadius: "24px", display: "block" }} />
            <ParallaxImage src="/images/projects/minti/expences.webp" alt="Minti expenses screen" width={390} height={844} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
            <ParallaxImage src="/images/projects/minti/categories.webp" alt="Minti categories screen" width={390} height={844} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
            <ParallaxImage src="/images/projects/minti/subscriptions.webp" alt="Minti subscriptions screen" width={390} height={844} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
          </div>
        </div>

        {/* Features */}
        <div style={{ ...divider, borderBottom: "none", paddingBottom: 0 }}>
          <h2 style={sectionTitle}>What it does</h2>
          <div
            className="minti-features-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}
          >
            {mintiFeatures.map((feature) => (
              <div
                key={feature.title}
                className="minti-feature-card"
                style={{ position: "relative", overflow: "hidden", borderRadius: "16px" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={feature.image}
                  alt={feature.title}
                  loading="lazy"
                  style={{ width: "100%", display: "block" }}
                />
                <div
                  className="minti-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(12,11,17,0.97) 0%, rgba(12,11,17,0.75) 40%, transparent 72%)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "1.5rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-fraunces), Georgia, serif",
                      fontSize: "18px",
                      fontWeight: 300,
                      color: "#fff",
                      marginBottom: "8px",
                      lineHeight: 1.2,
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontSize: "12px",
                      lineHeight: 1.65,
                      color: "rgba(255,255,255,0.72)",
                      margin: 0,
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next project */}
        <div style={{ paddingTop: "3rem", marginTop: "3rem", borderTop: "1px solid var(--border-section)" }}>
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
