import type { Metadata } from "next";
import BackButton from "@/components/ui/BackButton";
import { ParallaxWrapper } from "@/components/ui/ParallaxImage";
import AssetCarousel from "@/components/ui/AssetCarousel";
import ScrollImage from "@/components/ui/ScrollImage";
import VideoSequence from "@/components/ui/VideoSequence";

export const metadata: Metadata = {
  title: "Deriv — Case Study",
  description:
    "Redesigning Deriv.com — a 6,000-page global trading platform across 18 languages.",
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

function ImagePlaceholder({ caption, src, hideCaption }: { caption: string; src?: string; hideCaption?: boolean }) {
  return (
    <figure style={{ margin: 0 }}>
      {src ? (
        <ParallaxWrapper>
          <img
            src={src}
            alt={caption}
            style={{ width: "100%", display: "block" }}
          />
        </ParallaxWrapper>
      ) : (
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
      )}
      {!hideCaption && (
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
      )}
    </figure>
  );
}

export default function DerivCaseStudy() {
  return (
    <main>
      <style>{`
        @media (max-width: 640px) {
          .cs-grid { grid-template-columns: 1fr !important; }
          .cs-prose-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .cs-meta { gap: 1.25rem !important; }
        }
        .dark .asset-bg { background: rgba(255,255,255,0.04) !important; }
      `}</style>
      <div className="container" style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
        <BackButton style={{ marginBottom: "2.5rem" }} />

        {/* Meta row */}
        <div className="cs-meta" style={{ display: "flex", gap: "3rem", flexWrap: "wrap", ...divider, paddingBottom: "2rem", marginBottom: "2.5rem" }}>
          {(
            [
              { label: "Year", value: "2024–2025", href: undefined, links: undefined },
              { label: "Company", value: "Deriv", href: undefined, links: undefined },
              { label: "Role", value: "Senior UI/UX Designer", href: undefined, links: undefined },
              { label: "Live", value: undefined, href: undefined, links: [{ value: "deriv.com", href: "https://deriv.com" }, { value: "deriv.ae", href: "https://deriv.ae" }] },
            ] as { label: string; value?: string; href?: string; links?: { value: string; href: string }[] }[]
          ).map((item) => (
            <div key={item.label} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px" }}>
              <p style={sectionLabel}>{item.label}</p>
              {item.links ? (
                item.links.map((link) => (
                  <a key={link.value} href={link.href} target="_blank" rel="noopener noreferrer"
                    style={{ ...metaSmall, fontWeight: 500, color: "var(--color-fg)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
                    {link.value}
                  </a>
                ))
              ) : item.href ? (
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
        <h1 style={pageTitle}>Redesigning a 6,000-page global trading platform</h1>

        {/* Intro */}
        <div style={divider}>
          <div>
            <p style={{ ...body, marginBottom: "1rem" }}>
              Deriv.com is a global trading platform serving 21 million monthly visitors across 18 languages. I worked with the web design team on a comprehensive redesign and Webflow migration — covering the main site, the Academy, the UAE localisation, and the component library underpinning all of it.
            </p>
            <p style={{ ...body, marginBottom: "1rem" }}>
              The site had grown to 6,000+ pages across multiple subdomains with inconsistent styling and separate navigation structures. Every content update required a developer. Release cycles that should have taken days were taking 3–5 weeks. The goal was to fix that —{" "}
              <span style={b}>and to give the content and SEO teams the ability to update the site without involving engineering.</span>
            </p>
            <p style={{ ...body, marginBottom: "1rem" }}>
              The design system was built on a four-layer token architecture — core, semantic, component, and template — with light and dark mode handled entirely at the semantic layer. The component library had to work across 18 languages, including Arabic RTL. German and Arabic were used as layout stress-tests throughout: if a layout held in both, it worked in all 18.
            </p>
            <p style={body}>
              <span style={b}>Page creation dropped from 3–5 weeks to 2–3 days.</span> The 6,000-page migration completed in 3 months.
            </p>
          </div>
        </div>

        {/* Before / After */}
        <div style={divider}>
          <h2 style={sectionTitle}>Before / After</h2>
          <div className="cs-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}>
            <div>
              <div style={{ borderRadius: "12px", background: "rgba(0,0,0,0.04)", padding: "1.5rem" }} className="asset-bg">
                <ScrollImage src="/images/projects/deriv/deriv-website.webp" />
              </div>
              <figcaption style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: "11px", color: "var(--color-muted)", marginTop: "10px", opacity: 0.6 }}>
                Before
              </figcaption>
            </div>
            <div>
              <div style={{ borderRadius: "12px", background: "rgba(0,0,0,0.04)", padding: "1.5rem" }} className="asset-bg">
                <VideoSequence
                  videos={[
                    "/images/projects/deriv/derv-video-1.mp4",
                    "/images/projects/deriv/derv-video-3.mp4",
                    "/images/projects/deriv/derv-video-4.mp4",
                  ]}
                />
              </div>
              <figcaption style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: "11px", color: "var(--color-muted)", marginTop: "10px", opacity: 0.6 }}>
                After
              </figcaption>
            </div>
          </div>
        </div>

        {/* Component library */}
        <div style={divider}>
          <h2 style={sectionTitle}>Component library</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div>
              <div style={{ borderRadius: "12px", overflow: "hidden", background: "rgba(0,0,0,0.04)" }} className="asset-bg">
                <ImagePlaceholder hideCaption caption="Modular component library — hero, cards, FAQs, stats, testimonials, CTA blocks" src="/images/projects/deriv/modular-component-library.webp" />
              </div>
              <figcaption style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: "11px", color: "var(--color-muted)", marginTop: "10px", opacity: 0.6 }}>
                Modular component library — hero, cards, FAQs, stats, testimonials, CTA blocks
              </figcaption>
            </div>
          </div>
        </div>

        {/* 3D assets & photography */}
        <div style={{ paddingBottom: "3rem" }}>
          <h2 style={sectionTitle}>3D icons & imagery</h2>
          <div className="cs-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}>
            <div style={{ minWidth: 0, overflow: "hidden" }}>
              <AssetCarousel
                images={Array.from({ length: 10 }, (_, i) =>
                  `/images/projects/deriv/der-asset-${String(i + 1).padStart(2, "0")}.webp`
                )}
                size="200px"
              />
              <figcaption style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: "11px", color: "var(--color-muted)", marginTop: "10px", opacity: 0.6 }}>
                3D icon library — trading instruments, actions, and brand symbols
              </figcaption>
            </div>
            <div style={{ minWidth: 0, overflow: "hidden" }}>
              <div style={{ borderRadius: "12px", background: "rgba(0,0,0,0.04)", padding: "1rem" }} className="asset-bg">
                <AssetCarousel
                  images={Array.from({ length: 6 }, (_, i) =>
                    `/images/projects/deriv/derv-image-${String(i + 1).padStart(2, "0")}.webp`
                  )}
                  size="280px"
                  speed={45}
                  rows={1}
                  style={{ borderRadius: "8px" }}
                />
              </div>
              <figcaption style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: "11px", color: "var(--color-muted)", marginTop: "10px", opacity: 0.6 }}>
                Lifestyle photography — used across hero sections and product pages
              </figcaption>
            </div>
          </div>
        </div>

        {/* Next project */}
        <div style={{ paddingTop: "3rem", borderTop: "1px solid var(--border-section)" }}>
          <p style={sectionLabel}>Next</p>
          <a
            href="/projects/planr"
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
            Planr
            <span style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: 300, color: "var(--color-muted)", marginLeft: "0.75rem" }}>
              — Consultation Platform
            </span>
          </a>
        </div>

      </div>
    </main>
  );
}
