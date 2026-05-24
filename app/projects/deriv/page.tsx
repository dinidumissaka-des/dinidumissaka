import type { Metadata } from "next";
import BackButton from "@/components/ui/BackButton";

export const metadata: Metadata = {
  title: "Deriv — Case Study",
  description:
    "Redesigning Deriv.com — a 6,000-page global trading platform across 18 languages.",
};

// ── Styles follow DESIGN.md spec ──────────────────────────────

// 12px Manrope — matches Hero overline & About section labels
const sectionLabel: React.CSSProperties = {
  fontFamily: "var(--font-manrope), sans-serif",
  fontSize: "12px",
  color: "var(--color-muted)",
};

// 48px Fraunces 300 — matches Hero H1
const pageTitle: React.CSSProperties = {
  fontFamily: "var(--font-fraunces), Georgia, serif",
  fontSize: "clamp(2rem, 6vw, 3rem)",
  fontWeight: 300,
  lineHeight: 1.05,
  letterSpacing: "-0.02em",
  color: "var(--color-fg)",
  marginBottom: "3rem",
  maxWidth: "800px",
};

// 32px Fraunces 300 — matches homepage section h2
const sectionTitle: React.CSSProperties = {
  fontFamily: "var(--font-fraunces), Georgia, serif",
  fontSize: "32px",
  fontWeight: 300,
  lineHeight: 1.1,
  color: "var(--color-fg)",
  marginBottom: "2rem",
};

// 24px Fraunces 300 — prose sub-headings within sections
const proseHeading: React.CSSProperties = {
  fontFamily: "var(--font-fraunces), Georgia, serif",
  fontSize: "24px",
  fontWeight: 300,
  lineHeight: 1.2,
  color: "var(--color-fg)",
  marginBottom: "1.25rem",
};

// 14px Manrope — matches Hero body description
const body: React.CSSProperties = {
  fontFamily: "var(--font-manrope), sans-serif",
  fontSize: "14px",
  lineHeight: 1.7,
  color: "var(--color-muted)",
  textWrap: "pretty",
};

// 11px Manrope — dates, captions, meta
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

function Metric({ value, desc }: { value: string; desc: string }) {
  return (
    <div>
      <h2
        style={{
          fontFamily: "var(--font-fraunces), Georgia, serif",
          fontSize: "clamp(2rem, 4vw, 2.75rem)",
          fontWeight: 300,
          color: "var(--color-fg)",
          lineHeight: 1,
          marginBottom: "8px",
        }}
      >
        {value}
      </h2>
      <p style={body}>{desc}</p>
    </div>
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
      `}</style>
      <div
        className="container"
        style={{ paddingTop: "3rem", paddingBottom: "5rem" }}
      >
        <BackButton style={{ marginBottom: "2.5rem" }} />

        {/* Meta row */}
        <div className="cs-meta" style={{ display: "flex", gap: "3rem", flexWrap: "wrap", ...divider, paddingBottom: "2rem", marginBottom: "2.5rem" }}>
          {[
            { label: "Year", value: "2024–2025" },
            { label: "Company", value: "Deriv" },
            { label: "Role", value: "Senior UI/UX Designer" },
            { label: "Live", value: "trade.deriv.com", href: "https://trade.deriv.com" },
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
        <h1 style={pageTitle}>
          Redesigning a 6,000-page global trading platform
        </h1>

        {/* Intro */}
        <div style={divider}>
          <div style={{ maxWidth: "720px" }}>
          <p style={{ ...body, fontSize: "14px", marginBottom: "1.25rem" }}>
            Deriv.com is a global trading platform serving 21 million monthly
            visitors across 18 languages. I worked with the web design team at
            Deriv on a comprehensive redesign and Webflow migration — covering
            the main site, the Academy, the UAE localization (deriv.ae), and
            the component library that underpins all of it.
          </p>
          <p style={{ ...body, marginBottom: "1rem" }}>
            The site had grown to 6,000+ pages spread across multiple subdomains,
            each with inconsistent styling, component patterns, and separate
            navigation structures — different labels, different ordering, different
            visual treatments per subdomain. Every content update — even swapping
            a headline — required a developer. Release cycles that should have
            taken days were taking 3–5 weeks.
          </p>
          <p style={body}>
            I consolidated everything to a single global navigation with regional
            language toggles, so a user moving from the main site to the Academy
            feels continuity, not a context switch. I worked alongside designers,
            Webflow builders, content, SEO, translation, data analytics teams, and
            client stakeholders across the project.
          </p>
          </div>
        </div>

        {/* Before / After */}
        <div style={divider}>
          <h2 style={sectionTitle}>Before / After</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div className="cs-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              <ImagePlaceholder caption="Legacy site — deriv.me (before)" />
              <ImagePlaceholder caption="Redesigned experience — trade.deriv.com (after)" />
            </div>
            <div className="cs-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              <ImagePlaceholder caption="Before: separate nav per subdomain" />
              <ImagePlaceholder caption="After: one global navigation across all properties" />
            </div>
          </div>
        </div>

        {/* Design decisions */}
        <div style={divider}>
          <h2 style={sectionTitle}>Design decisions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>

            <div
              className="cs-prose-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}
            >
              <div>
                <h2 style={proseHeading}>Colour</h2>
                <p style={body}>
                  Coral red as the primary, Slate 700 as the secondary. Both are
                  pulled directly from the Deriv brand — the decision was how to
                  balance them across 6,000 pages without the site feeling like a
                  brand exercise.{" "}
                  <span style={b}>
                    Red communicates energy and action; slate communicates stability
                    and trust.
                  </span>{" "}
                  Action pages — sign-up, trading, conversion — lean red. Content
                  pages — Academy, help, legal — lean slate. The system enforces
                  this at the semantic token layer so the balance doesn't depend on
                  individual designer decisions.
                </p>
              </div>
              <ImagePlaceholder caption="Colour palette — semantic token assignments across action and content surfaces" />
            </div>

            <div
              className="cs-prose-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}
            >
              <div>
                <h2 style={proseHeading}>Typography</h2>
                <p style={body}>
                  Type was defined responsively from the start. The design spec
                  didn't just set font sizes — it set the full scale:
                  line-height, letter-spacing, and measure at every breakpoint.
                  Mobile-first meant designing the smallest viewport first and
                  expanding up, not the other way around. With 18 languages, text
                  expansion was a constant constraint — German headlines can run 40%
                  longer than their English equivalents. The type scale was
                  stress-tested in German and Arabic before being signed off.
                </p>
              </div>
              <ImagePlaceholder caption="Responsive type scale — size, line-height, and measure defined per breakpoint" />
            </div>

            <div style={{ maxWidth: "640px" }}>
              <h2 style={proseHeading}>Performance</h2>
              <p style={body}>
                Every design decision had a{" "}
                <span style={b}>Lighthouse score implication</span>. Hero images
                were sized and compressed to target formats before designs were
                signed off. Animations were scoped to CSS transitions where
                possible, avoiding JavaScript-driven motion that would block the
                main thread. Third-party embeds — trading widgets, live charts —
                were lazy-loaded and deferred. The performance targets were set
                before the first component was built, not retrofitted after
                launch.
              </p>
            </div>

            <div
              className="cs-prose-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}
            >
              <div>
                <h2 style={proseHeading}>Images and 3D assets</h2>
                <p style={body}>
                  3D visuals are central to Deriv's brand language. The challenge
                  was using them at scale without them feeling inconsistent. I
                  defined a{" "}
                  <span style={b}>
                    consistent lighting model, perspective, and colour grading
                    across every asset
                  </span>{" "}
                  — so a 3D element on the homepage and one in the Academy section
                  feel like they belong to the same world, even if they were
                  produced months apart. The asset guidelines were documented in the
                  component library so future production could follow the same spec
                  without referencing earlier work.
                </p>
              </div>
              <ImagePlaceholder caption="3D asset guidelines — lighting, perspective, and colour grading standards" />
            </div>

          </div>
        </div>

        {/* Design System */}
        <div style={divider}>
          <h2 style={sectionTitle}>Design System</h2>
          <div
            className="cs-prose-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3.5rem",
              alignItems: "start",
              marginBottom: "3rem",
            }}
          >
            <div>
              <h2 style={proseHeading}>
                Built for the people who update it, not the people who built it.
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={body}>
                I designed the component library around one principle: every
                component needed to work in multiple contexts without modification.
                A card that only worked on the homepage wasn't a component — it
                was a one-off.
              </p>
              <p style={body}>
                The system was built on a four-layer token architecture: core
                tokens defined the raw values (primitives like{" "}
                <code style={{ fontFamily: "monospace", fontSize: "12px" }}>color/red/500</code>,{" "}
                <code style={{ fontFamily: "monospace", fontSize: "12px" }}>space/4</code>),
                semantic tokens mapped those values to intent (
                <code style={{ fontFamily: "monospace", fontSize: "12px" }}>color/danger</code>,{" "}
                <code style={{ fontFamily: "monospace", fontSize: "12px" }}>space/component-gap</code>),
                component tokens scoped decisions to specific UI elements, and
                templates locked down full-page compositions. Each layer only
                referenced the one below it. Light and dark mode was handled
                entirely at the semantic layer — swap the semantic mappings, and
                the entire system flips without touching a single component.
                Spacing and type scales were defined per breakpoint, so layouts
                didn't just reflow responsively, they were intentionally designed
                at each viewport size.
              </p>
              <p style={body}>
                The real end users of the system weren't designers. They were the
                content and SEO teams who would update the site day-to-day. That
                shaped how much flexibility I exposed vs. constrained in each
                component.
              </p>
              <p style={body}>
                With 18 languages including Arabic, I designed using German and
                Arabic as layout stress-tests from the start — German for
                word-length expansion, Arabic for right-to-left directionality.
                If a layout held in both, it worked in all 18.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "3rem" }}>
            <ImagePlaceholder caption="Four-layer token architecture — each layer references only the one below it. Light and dark mode flips at the semantic layer." />
            <ImagePlaceholder caption="Modular component library — hero, cards, FAQs, stats, testimonials, CTA blocks" />
            <div className="cs-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              <ImagePlaceholder caption="One card component, four variants — light, dark, brand, and image-led" />
              <ImagePlaceholder caption="Layouts designed and tested at 360px and 1440px — every component is responsive by default" />
            </div>
          </div>

          {/* Page templates */}
          <div
            className="cs-prose-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}
          >
            <div>
              <h2 style={proseHeading}>Page templates</h2>
              <p style={body}>
                The template layer was where the system became usable beyond the
                design team. Instead of handing over a component library and
                expecting content teams to compose pages correctly, I designed a
                set of full-page templates — product pages, landing pages, Academy
                articles, help centre layouts — that locked down the composition
                decisions. Content teams filled in slots. They couldn't break the
                layout because the layout wasn't exposed to them. New pages could
                be created in 2–3 days rather than the 3–5 weeks the previous
                process required.
              </p>
            </div>
            <ImagePlaceholder caption="Page templates — product, landing, Academy, and help centre layouts" />
          </div>
        </div>

        {/* Localisation */}
        <div style={divider}>
          <h2 style={sectionTitle}>Localisation</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>

            <div
              className="cs-prose-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}
            >
              <div>
                <h2 style={proseHeading}>Rest of World</h2>
                <p style={body}>
                  The primary audience for deriv.com is{" "}
                  <span style={b}>
                    African users in their late twenties, skewing female
                  </span>
                  . That shaped every visual decision — imagery, tone, and product
                  emphasis. The homepage wasn't designed to reflect the brand's
                  global ambitions; it was designed to speak to someone in Lagos or
                  Nairobi opening the site for the first time. Imagery was sourced
                  and art-directed to reflect that audience. Product emphasis shifted
                  toward the instruments and entry points most relevant to that
                  market.
                </p>
              </div>
              <ImagePlaceholder caption="ROW homepage — imagery and product emphasis designed for the primary African audience" />
            </div>

            <div
              className="cs-prose-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}
            >
              <div>
                <h2 style={proseHeading}>EU</h2>
                <p style={body}>
                  The EU variant operates under a different regulatory framework,
                  which meant a different product set and different content
                  requirements.{" "}
                  Content, imagery, and product offerings were all adapted
                  to reflect what is available and legally communicable in EU
                  markets. Risk warnings, product restrictions, and compliance copy
                  were integrated into the design rather than bolted on — they're
                  part of the layout, not afterthoughts at the bottom of the page.
                </p>
              </div>
              <ImagePlaceholder caption="EU localisation — regulatory-adapted product pages and integrated compliance copy" />
            </div>

            <div
              className="cs-prose-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}
            >
              <div>
                <h2 style={proseHeading}>UAE</h2>
                <p style={body}>
                  deriv.ae is a full localisation —{" "}
                  <span style={b}>
                    Arabic language, right-to-left layout, adapted imagery, and a
                    product set specific to the UAE market
                  </span>
                  . RTL wasn't a switch we flipped at the end; it was a design
                  constraint from the start. Every component was built to support
                  both directions. Text expansion behaves differently in Arabic than
                  in European languages — shorter in most cases, but with different
                  line-break and hyphenation behaviour. The component library handles
                  directionality at the token level, so the same component renders
                  correctly in both English and Arabic without modification.
                </p>
              </div>
              <ImagePlaceholder caption="deriv.ae — full RTL layout, Arabic language, and UAE-specific product set" />
            </div>

          </div>
        </div>

        {/* Results */}
        <div style={divider}>
          <h2 style={sectionTitle}>Results</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "2.5rem",
              marginBottom: "2.5rem",
            }}
          >
            <Metric value="2–3 days" desc="Page creation time, down from 3–5 weeks" />
            <Metric value="3 months" desc="Full 6,000-page migration, vs. 2-year estimate" />
            <Metric value="400+" desc="Blog articles consolidated into a unified CMS" />
            <Metric value="2× / week" desc="Release frequency after launch" />
          </div>
          <p style={{ ...body, maxWidth: "640px" }}>
            The content and SEO teams can now update the site without involving a
            developer — which was the actual goal.
          </p>
        </div>

        {/* Scope of work */}
        <div style={divider}>
          <h2 style={sectionTitle}>Scope of work</h2>
          <div className="cs-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            <ImagePlaceholder caption="Deriv Academy — redesigned education section" />
            <ImagePlaceholder caption="Deriv.ae — Arabic localisation (RTL)" />
          </div>
        </div>

        {/* What I'd do differently */}
        <div>
          <div style={{ maxWidth: "640px" }}>
            <h2 style={sectionTitle}>
              What I'd do differently
            </h2>
            <p style={body}>
              The component library was designed for launch. It wasn't designed for
              the rate at which the team would want to iterate after launch. Without
              a clear process for proposing and reviewing new components, decisions
              about the system started happening ad hoc. Some were fine. Others
              reintroduced the inconsistency we'd spent months removing.
            </p>
            <p style={{ ...body, marginTop: "1rem" }}>
              A design system without a contribution process is just a starting
              point. I'd spend more time on that next time.
            </p>
          </div>

          {/* Live links */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--border-section)",
            }}
          >
            {[
              { label: "trade.deriv.com", href: "https://trade.deriv.com" },
              { label: "deriv.ae", href: "https://deriv.ae" },
              { label: "deriv.com/academy", href: "https://deriv.com/academy" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "var(--color-muted)",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
