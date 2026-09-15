import type { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/components/ui/BackButton";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ratā — Case Study",
  description:
    "Designing and building Ratā — a design system of 30 components and seven brand themes, where accessibility and design decisions are enforced by the build rather than written down and hoped for.",
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

const mono: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "13px",
  color: "var(--color-fg)",
};

/* ── The system at a glance ── */
const stats = [
  { value: "30", label: "components in the registry, 26 fully built" },
  { value: "7", label: "brand themes from the same tokens" },
  { value: "37", label: "contrast pairings verified every build" },
  { value: "345", label: "documented design tokens" },
];

/* ── Real rules from the component contracts, quoted as written ── */
const contractRules = [
  {
    rule: "Two primary buttons in one view — the tier is a claim about priority, and two claims cancel out.",
    prop: "variant · don't",
  },
  {
    rule: "Shrinking to sm to fit a cramped layout — fix the layout budget instead.",
    prop: "size · don't",
  },
  {
    rule: "Variant is visual only. A destructive action still needs its own confirmation step — colour is not a warning.",
    prop: "variant · accessibility",
  },
  {
    rule: "Any action whose icon is not already conventional — an unlabelled novel icon is unreadable.",
    prop: "iconOnly · don't",
  },
];

/* ── Accessibility decisions the build holds in place ── */
const a11yDecisions = [
  {
    title: "Disabled controls stay discoverable",
    detail:
      "A natively disabled button drops out of the tab order and stops being announced, so someone using a keyboard or screen reader never learns the action exists. Ratā marks it disabled to assistive tech and blocks the click instead.",
  },
  {
    title: "Focus is never removed",
    detail:
      "Every interactive control draws a focus ring from the same tokens, and never offsets it to zero on a filled control where it would disappear into the fill.",
  },
  {
    title: "Colour never carries a state alone",
    detail:
      "A status colour is always paired with a message. Anyone who cannot separate the two hues still gets the information.",
  },
];

/* ── The gated order a component moves through ── */
const buildOrder = [
  {
    step: "Behaviour first",
    detail:
      "What the component does, what it announces, what each option means — approved before any visual work. Changing this later is expensive. Changing it now is free.",
  },
  {
    step: "Then the token mapping",
    detail:
      "Each state maps to a semantic token, approved one state at a time rather than as a batch. If nothing fits, adding a token is its own decision with its own interview.",
  },
  {
    step: "Only then the visual layer",
    detail:
      "The CSS and the React component are those approved decisions rendered — not a place where new ones get made quietly.",
  },
  {
    step: "Then it ships, and the checking starts",
    detail:
      "The moment a component is marked built, the system begins verifying it against the API approved in step one. A prop added along the way and never documented fails the build.",
  },
];

/**
 * Documentation screenshots are evidence, so they are shown whole: no crop,
 * no parallax scale that would clip the sidebar or the heading off the edge.
 */
function Figure({
  src,
  alt,
  caption,
  width = 1440,
  height = 1400,
}: {
  src: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
}) {
  return (
    <figure style={{ margin: 0 }}>
      <div
        style={{
          borderRadius: "12px",
          overflow: "hidden",
          border: "1px solid var(--border-section)",
          lineHeight: 0,
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 640px) 100vw, 1016px"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
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

export default function RataCaseStudy() {
  return (
    <main>
      <style>{`
        @media (max-width: 640px) {
          .cs-grid { grid-template-columns: 1fr !important; }
          .cs-meta { gap: 1.25rem !important; }
          .rata-stats { grid-template-columns: repeat(2, 1fr) !important; }
          .rata-pair { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="container" style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
        <BackButton style={{ marginBottom: "2.5rem" }} />

        {/* Meta row */}
        <div
          className="cs-meta"
          style={{
            display: "flex",
            gap: "3rem",
            flexWrap: "wrap",
            ...divider,
            paddingBottom: "2rem",
            marginBottom: "2.5rem",
          }}
        >
          {[
            { label: "Year", value: "2026 – ongoing" },
            { label: "Role", value: "Sole designer & builder" },
            { label: "Type", value: "Design system · Multi-brand" },
            {
              label: "Live",
              value: "rata-design.vercel.app",
              href: "https://rata-design.vercel.app",
            },
          ].map((item) => (
            <div key={item.label} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px" }}>
              <p style={sectionLabel}>{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ ...metaSmall, fontWeight: 500, color: "var(--color-fg)", textDecoration: "underline", textUnderlineOffset: "3px" }}
                >
                  {item.value}
                </a>
              ) : (
                <p style={{ ...metaSmall, fontWeight: 500, color: "var(--color-fg)" }}>{item.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* Title */}
        <h1 style={pageTitle}>Design decisions that can&apos;t quietly erode</h1>

        {/* Intro */}
        <div style={divider}>
          <p style={{ ...body, marginBottom: "1rem" }}>
            Ratā is a design system for web apps and websites — 30 components across eight families, sitting on a
            token layer that can retheme the entire system from a handful of decisions. I designed and built every
            layer of it: the tokens, the accessibility behaviour, the components, the documentation site, and the
            process for adding to it.
          </p>
          <p style={{ ...body, marginBottom: "1rem" }}>
            Design systems rarely fail at launch. <span style={b}>They erode.</span>{" "}A colour gets hardcoded because
            the right token was hard to find. A focus ring gets removed because it clipped a layout. A second button
            style appears because nobody knew the first one already handled it. Every one of those is small, and
            every one is defensible on the day. Six months later the system describes something nobody is building
            any more.
          </p>
          <p style={body}>
            So the question I designed around wasn&apos;t how to document the rules.{" "}
            <span style={b}>It was how to make the rules hold.</span>{" "}Contrast is re-measured on every build.
            Components are checked against the API that was actually approved. When a decision stops being true, the
            system fails loudly instead of drifting quietly.
          </p>
        </div>

        {/* Cover */}
        <div style={divider}>
          <Figure
            src="/images/projects/rata/gallery-home.png"
            alt="The Ratā documentation site landing page, with the system's own counts for components, tokens and contrast pairings"
            caption="The documentation site — and the system reporting its own size, measured rather than claimed."
            height={1500}
          />
        </div>

        {/* Stats */}
        <div style={divider}>
          <div
            className="rata-stats"
            style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p
                  style={{
                    fontFamily: "var(--font-fraunces), Georgia, serif",
                    fontSize: "clamp(2rem, 4vw, 2.75rem)",
                    fontWeight: 300,
                    lineHeight: 1,
                    color: "var(--color-fg)",
                    marginBottom: "10px",
                  }}
                >
                  {s.value}
                </p>
                <p style={{ ...body, fontSize: "13px", margin: 0 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contracts as design documents */}
        <div style={divider}>
          <h2 style={sectionTitle}>A component is more than how it looks</h2>
          <p style={{ ...body, marginBottom: "1rem" }}>
            The hard part of a component was never the visual design. It&apos;s what the thing{" "}
            <span style={b}>means</span>{" "}— which decision it represents, when to reach for something else, and what
            using it obliges you to do. That knowledge usually lives in a designer&apos;s head, gets explained in
            review, and is lost the moment someone new picks the component up.
          </p>
          <p style={{ ...body, marginBottom: "2rem" }}>
            In Ratā every component carries that reasoning as part of the system itself. Each option is documented
            with what it&apos;s for, what to avoid, what it conflicts with, and what it requires for accessibility.
            These are real rules from the button&apos;s contract:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
            {contractRules.map((r) => (
              <div
                key={r.rule}
                style={{
                  border: "1px solid var(--border-item)",
                  borderRadius: "12px",
                  background: "var(--bg-card)",
                  padding: "1.5rem 1.75rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-fraunces), Georgia, serif",
                    fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
                    fontWeight: 300,
                    lineHeight: 1.45,
                    color: "var(--color-fg)",
                    margin: 0,
                  }}
                >
                  {r.rule}
                </p>
                <p style={{ ...mono, fontSize: "11px", color: "var(--color-muted)", marginTop: "12px", marginBottom: 0 }}>
                  {r.prop}
                </p>
              </div>
            ))}
          </div>

          <p style={{ ...body, marginBottom: "2rem" }}>
            None of that can be read off a screenshot or a type signature, and all of it is what goes wrong when
            someone reaches for a component in a hurry. The half of a contract that can be read from the code is read
            from the code; the half that is judgement is written by me —{" "}
            <span style={b}>and the build refuses to let the two disagree.</span>
          </p>

          <Figure
            src="/images/projects/rata/contract-accessibility.png"
            alt="A component page showing what each prop obliges the user to do, and the behaviour decisions behind it"
            caption="Every component has an accessibility tab: what each option obliges you to do, and why the behaviour was decided that way."
            height={1500}
          />
        </div>

        {/* Accessibility */}
        <div style={divider}>
          <h2 style={sectionTitle}>Accessibility that can&apos;t regress quietly</h2>
          <p style={{ ...body, marginBottom: "2rem" }}>
            Accessibility is usually an audit — a report, a list of fixes, and a slow slide back. Here it&apos;s a
            build step.{" "}
            <span style={b}>
              Thirty-seven text and background pairings are re-measured from the real values every single build
            </span>
            , in light and dark, for every brand. A pairing that stops meeting contrast fails the build rather than
            shipping.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
            {a11yDecisions.map((d) => (
              <div key={d.title} style={{ paddingLeft: "1.25rem", borderLeft: "1px solid var(--border-section)" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-fraunces), Georgia, serif",
                    fontSize: "18px",
                    fontWeight: 300,
                    color: "var(--color-fg)",
                    marginBottom: "6px",
                  }}
                >
                  {d.title}
                </h3>
                <p style={{ ...body, margin: 0 }}>{d.detail}</p>
              </div>
            ))}
          </div>

          <Figure
            src="/images/projects/rata/verified-contrast.png"
            alt="A table of verified contrast pairings with measured ratios for light and dark"
            caption="Every pairing, with its measured ratio in both schemes. Re-measured on each build, not audited once."
          />
        </div>

        {/* Theming */}
        <div style={divider}>
          <h2 style={sectionTitle}>Seven brands, one decision each</h2>
          <p style={{ ...body, marginBottom: "1rem" }}>
            Most of the themes state exactly one thing: the accent colour. Spacing, radius, type and motion all
            inherit. From that single seed the system re-tones its whole palette — and then re-measures every
            contrast promise against the new colour.
          </p>
          <p style={{ ...body, marginBottom: "2rem" }}>
            That&apos;s the part I&apos;m proudest of as a systems decision.{" "}
            <span style={b}>A new brand costs one choice, and its accessibility isn&apos;t a separate QA pass.</span>{" "}
            Two of the themes turn more dials — a warm, high-contrast brand and one with its own radius scale — but
            they use the same mechanism rather than a fork.
          </p>

          <div className="rata-pair" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            <Figure
              src="/images/projects/rata/brand-light.png"
              alt="The component gallery in a green brand, light scheme"
              caption="One brand, light."
              width={1200}
              height={900}
            />
            <Figure
              src="/images/projects/rata/brand-dark.png"
              alt="The same component gallery in a rust brand, dark scheme"
              caption="Another brand, dark. Same components, same tokens."
              width={1200}
              height={900}
            />
          </div>
        </div>

        {/* Process */}
        <div style={divider}>
          <h2 style={sectionTitle}>How a component becomes real</h2>
          <p style={{ ...body, marginBottom: "2rem" }}>
            Adding to a design system is where most of them go wrong — a component gets styled around behaviour
            nobody signed off on, then wired to tokens that get renamed once someone actually looks at them. So the
            order is gated, and each stage is approved before the next one starts.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "2rem" }}>
            {buildOrder.map((s, i) => (
              <div key={s.step} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                <span
                  style={{
                    ...mono,
                    fontSize: "12px",
                    color: "var(--color-muted)",
                    paddingTop: "4px",
                    minWidth: "1.5rem",
                  }}
                >
                  0{i + 1}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-fraunces), Georgia, serif",
                      fontSize: "18px",
                      fontWeight: 300,
                      color: "var(--color-fg)",
                      marginBottom: "6px",
                    }}
                  >
                    {s.step}
                  </h3>
                  <p style={{ ...body, margin: 0 }}>{s.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <p style={{ ...body, marginBottom: "2rem" }}>
            Because the written half of a contract stands on its own, it can exist before the component does — the
            API gets argued about and approved while changing it is still cheap. Two components are at exactly that
            stage right now: their pages are live, their options documented,{" "}
            <span style={b}>and where the component would render, the gallery says so plainly — not built yet.</span>
          </p>
          <p style={{ ...body, marginBottom: "2rem" }}>
            Everything publishes where it actually is, including what doesn&apos;t exist. The Figma column reads{" "}
            <span style={mono}>future</span>{" "}for twenty-nine of the thirty, in public.{" "}
            <span style={b}>A status matrix that only ever reads green is one nobody trusts.</span>
          </p>

          <Figure
            src="/images/projects/rata/component-gallery.png"
            alt="The component index, with every component rendered running, and an unbuilt one showing its spec placeholder"
            caption="Every component shown running rather than described — including the ones that are still only an approved spec."
            height={1600}
          />
        </div>

        {/* AI angle — last content block, so no bottom rule above "Next" */}
        <div style={{ ...divider, borderBottom: "none", paddingBottom: 0, marginBottom: 0 }}>
          <h2 style={sectionTitle}>Designing for the reader that isn&apos;t human</h2>
          <p style={{ ...body, marginBottom: "1rem" }}>
            A growing share of the code that consumes a design system is now written with AI assistance. That reader
            doesn&apos;t browse the documentation site — it recalls the API from memory, and{" "}
            <span style={b}>a half-remembered API doesn&apos;t fail loudly.</span>{" "}It invents an option that sounds
            plausible, drops in a hex value, hand-rolls a hover state. Each one is a small, convincing-looking defect
            that review has to catch by eye.
          </p>
          <p style={{ ...body, marginBottom: "1rem" }}>
            So the system answers questions about itself. Any component&apos;s options, its rules, and the tokens
            behind it can be looked up in seconds — generated from the source rather than maintained by hand, so the
            answer can&apos;t be out of date.
          </p>
          <p style={body}>
            Whether that actually changes what gets written is measured, not assumed. The same twelve tasks are
            answered twice — once with the token guidance available, once without — and both are scored against the
            system&apos;s own rules: palette colours used where a semantic one exists, hardcoded values, missing
            focus rings, forbidden contrast pairings.{" "}
            <span style={b}>If the difference between the two ever disappears, that&apos;s a failure too.</span>
          </p>
        </div>

        {/* Next project */}
        <div style={{ paddingTop: "3rem", marginTop: "3rem", borderTop: "1px solid var(--border-section)" }}>
          <p style={sectionLabel}>Next</p>
          <Link
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
            EcoByte{" "}
            <span style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: 300, color: "var(--color-muted)", marginLeft: "0.75rem" }}>
              — Digital Sustainability
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
