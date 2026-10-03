import type { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/components/ui/BackButton";
import Image from "next/image";
import SegmentedTabs from "@/components/ui/SegmentedTabs";

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

const itemTitle: React.CSSProperties = {
  fontFamily: "var(--font-manrope), sans-serif",
  fontSize: "15px",
  fontWeight: 500,
  color: "var(--color-fg)",
  margin: "0 0 6px",
};

/* ── For readers who skim ── */
const summary = [
  { label: "Problem", text: "Design systems rarely fail at launch. They erode, one defensible shortcut at a time." },
  { label: "Role", text: "Designer and builder, end to end: tokens, behaviour, components, docs and process." },
  { label: "Approach", text: "Contracts written before components, built with Claude Code, checked on every build." },
  { label: "Status", text: "30 components in the registry, 26 fully built, seven brands, live docs." },
];

/* ── The system at a glance ── */
const stats = [
  { value: "30", label: "components in the registry, 26 fully built" },
  { value: "7", label: "brand themes from the same tokens" },
  { value: "37", label: "contrast pairings verified every build" },
  { value: "345", label: "documented design tokens" },
];

/* ── Decisions: the choice, the alternative it beat, and what it gave up ── */
const decisions = [
  {
    name: "Rules enforced by the build",
    rejected: "A usage guide",
    chosen: "Build checks",
    detail:
      "A guide describes the system on the day it is written. Checks keep describing it: contrast is re-measured and every component is compared to its approved API on each build.",
    tradeoff: "A broken promise blocks the build, so drift gets fixed right away instead of scheduled for later.",
  },
  {
    name: "The contract comes before the component",
    rejected: "Figma file as the source",
    chosen: "Written contract",
    detail:
      "What a component does, announces and forbids is agreed in a spec first. Figma is where visual ideas are explored, but the contract is what the code is checked against.",
    tradeoff: "No full Figma library yet. Its column reads future for 29 of 30 components, published honestly.",
  },
  {
    name: "One seed colour per brand",
    rejected: "Hand-tuned palettes",
    chosen: "One accent seed",
    detail:
      "Most themes state one thing, the accent. The palette re-tones from it and every contrast promise is re-measured, so a new brand costs one choice and no separate QA pass.",
    tradeoff: "Less per-brand nuance. Two brands turn more dials, through the same mechanism rather than a fork.",
  },
  {
    name: "Disabled controls stay discoverable",
    rejected: "Native disabled",
    chosen: "Announced, click blocked",
    detail:
      "A natively disabled button leaves the tab order and goes silent, so keyboard and screen reader users never learn the action exists. Ratā announces it as disabled and blocks the click.",
    tradeoff: "The click has to be blocked in code, which the browser would otherwise handle for free.",
  },
  {
    name: "Answers for the AI reader",
    rejected: "Docs site only",
    chosen: "Generated lookups",
    detail:
      "Code written with AI recalls an API from memory and invents what it forgets. Options, rules and tokens can be looked up in seconds, generated from source so they can't go stale.",
    tradeoff: "One more output to trust, so its effect is measured with a benchmark rather than assumed.",
  },
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
    title: "Contrast is measured, not audited",
    detail: "Thirty-seven text and background pairings are re-measured from real values on every build, in light and dark, for every brand.",
  },
  {
    title: "Focus is never removed",
    detail: "Every control draws its focus ring from the same tokens, and never offsets it to zero where it would vanish into a fill.",
  },
  {
    title: "Colour never carries a state alone",
    detail: "A status colour is always paired with a message, so anyone who can't tell the hues apart still gets the information.",
  },
];

/* ── How a component becomes real, and the tool used at each gate ── */
const workflow = [
  {
    step: "Explore",
    tool: "Figma",
    detail: "Visual directions and layouts are tried out quickly, before anything is decided.",
  },
  {
    step: "Agree the behaviour",
    tool: "Spec · contract",
    detail: "What it does, announces and forbids, approved first, while changing it is still free.",
  },
  {
    step: "Map the tokens",
    tool: "Contract",
    detail: "Each state gets a semantic token, one state at a time. A missing token is its own decision.",
  },
  {
    step: "Build",
    tool: "Claude Code",
    detail: "The CSS and React are the approved decisions rendered, not a place to make new ones quietly.",
  },
  {
    step: "Keep checking",
    tool: "Build",
    detail: "Once marked built, the component is checked against its contract. An undocumented prop fails.",
  },
];

/* ── What comes next ── */
const nextUp = [
  { name: "Build the two approved specs", detail: "Both already have live pages and documented options. The build starts from what was agreed." },
  { name: "A Figma library", detail: "Figma components from the same tokens, moving that column off future one component at a time." },
  { name: "Keep the benchmark honest", detail: "Rerun the twelve AI tasks as the system grows, and treat a shrinking gap as a failure." },
];

/**
 * Documentation screenshots in a 16:9 frame, cropped from the top down so the
 * page heading and navigation always stay in view.
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
          aspectRatio: "16 / 9",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 640px) 100vw, 1016px"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
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

/** The alternative struck through, the choice in a soft pill: the same style as the Minti decisions. */
function Choice({ rejected, chosen }: { rejected: string; chosen: string }) {
  return (
    <p style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: "12px", margin: "0 0 12px", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
      <span style={{ color: "var(--color-muted)", textDecoration: "line-through", textDecorationColor: "color-mix(in srgb, var(--color-muted) 60%, transparent)" }}>
        <span className="sr-only">Not chosen: </span>
        {rejected}
      </span>
      <span style={{ color: "var(--color-fg)", padding: "3px 10px", borderRadius: "999px", background: "color-mix(in srgb, var(--color-fg) 10%, transparent)" }}>
        <span className="sr-only">Chosen: </span>
        {chosen}
      </span>
    </p>
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
          .rata-summary { grid-template-columns: 1fr 1fr !important; }
          .rata-decisions { grid-template-columns: 1fr !important; }
          .rata-flow { grid-template-columns: 1fr !important; }
          .rata-next { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 900px) and (min-width: 641px) {
          .rata-flow { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      <div className="container" style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
        <BackButton style={{ marginBottom: "2.5rem" }} />

        {/* Meta row */}
        <div
          className="cs-meta"
          style={{
            display: "flex",
            gap: "1rem 3rem",
            flexWrap: "wrap",
            ...divider,
            paddingBottom: "2rem",
            marginBottom: "2.5rem",
          }}
        >
          {[
            { label: "Year", value: "2026 – ongoing" },
            { label: "Role", value: "Designer & Builder" },
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

        {/* Summary for skimmers */}
        <div className="rata-summary" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem", ...divider, paddingBottom: "2.5rem", marginBottom: "2.5rem" }}>
          {summary.map((item) => (
            <div key={item.label} style={{ paddingLeft: "1rem", borderLeft: "1px solid var(--border-section)" }}>
              <p style={{ ...mono, fontSize: "11px", color: "var(--color-muted)", marginBottom: "6px" }}>{item.label}</p>
              <p style={{ ...body, fontSize: "13px", lineHeight: 1.55, color: "var(--color-fg)", margin: 0 }}>{item.text}</p>
            </div>
          ))}
        </div>

        {/* Intro */}
        <div style={divider}>
          <p style={{ ...body, marginBottom: "1rem" }}>
            Ratā is a self-initiated design system for web apps and websites: 30 components across eight families, on
            a token layer that can retheme everything from a handful of decisions. Every layer was designed and built
            end to end, from the tokens and accessibility behaviour to the components, the documentation site and the
            process for adding to it.
          </p>
          <p style={body}>
            Design systems erode. A colour gets hardcoded because the right token was hard to find, a focus ring gets
            removed because it clipped a layout, a second button style appears because nobody knew the first one
            covered it. Each is defensible on the day.{" "}
            <span style={b}>So the question was never how to document the rules. It was how to make them hold.</span>
          </p>
        </div>

        {/* Cover */}
        <div style={divider}>
          <Figure
            src="/images/projects/rata/gallery-home.png"
            alt="The Ratā documentation site landing page, with the system's own counts for components, tokens and contrast pairings"
            caption="The documentation site, reporting its own size: measured rather than claimed."
            height={1500}
          />
        </div>

        {/* Stats */}
        <div style={divider}>
          <div className="rata-stats" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
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

        {/* Thinking — decisions */}
        <div style={divider}>
          <p style={{ ...sectionLabel, marginBottom: "0.75rem" }}>Thinking</p>
          <h2 style={sectionTitle}>Five decisions, and what each one gave up</h2>
          <p style={{ ...body, marginBottom: "2rem" }}>
            One principle ran through all of them:{" "}
            <span style={b}>when a decision stops being true, the system should fail loudly instead of drifting quietly.</span>
          </p>
          <div className="rata-decisions" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 3rem" }}>
            {decisions.map((d) => (
              <div key={d.name} style={{ padding: "1.5rem 0", borderTop: "1px solid var(--border-section)" }}>
                <h3 style={{ ...itemTitle, marginBottom: "10px" }}>{d.name}</h3>
                <Choice rejected={d.rejected} chosen={d.chosen} />
                <p style={{ ...body, margin: 0 }}>{d.detail}</p>
                <p style={{ ...body, margin: "10px 0 0" }}>
                  <span style={{ color: "var(--color-fg)", fontWeight: 500, marginRight: "6px" }}>Trade-off</span>
                  {d.tradeoff}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Design — what the system holds in place */}
        <div style={divider}>
          <p style={{ ...sectionLabel, marginBottom: "0.75rem" }}>Design</p>
          <h2 style={sectionTitle}>What the system holds in place</h2>
          <p style={{ ...body, marginBottom: "2rem" }}>
            The hard part of a component was never how it looks. It is what it{" "}
            <span style={b}>means</span>: which decision it represents, when to reach for something else, and what
            using it obliges. That knowledge usually lives in someone&apos;s head. Here it is part of the system.
          </p>
          <SegmentedTabs
            ariaLabel="What the system holds in place"
            tabs={[
              {
                label: "Contracts",
                panel: (
                  <div>
                    <p style={{ ...body, marginBottom: "1.5rem" }}>
                      Every option documents what it is for, what to avoid and what it requires. Real rules from the
                      button&apos;s contract:
                    </p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }} className="rata-pair">
                      {contractRules.map((r) => (
                        <div key={r.rule} style={{ border: "1px solid var(--border-item)", borderRadius: "12px", background: "var(--bg-card)", padding: "1.25rem 1.5rem" }}>
                          <p style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "17px", fontWeight: 300, lineHeight: 1.45, color: "var(--color-fg)", margin: 0 }}>
                            {r.rule}
                          </p>
                          <p style={{ ...mono, fontSize: "11px", color: "var(--color-muted)", marginTop: "12px", marginBottom: 0 }}>{r.prop}</p>
                        </div>
                      ))}
                    </div>
                    <Figure
                      src="/images/projects/rata/contract-accessibility.png"
                      alt="A component page showing what each prop obliges the user to do, and the behaviour decisions behind it"
                      caption="Every component has an accessibility tab: what each option obliges, and why the behaviour was decided that way."
                      height={1500}
                    />
                  </div>
                ),
              },
              {
                label: "Accessibility",
                panel: (
                  <div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", marginBottom: "2rem" }} className="rata-flow">
                      {a11yDecisions.map((d) => (
                        <div key={d.title} style={{ paddingLeft: "1rem", borderLeft: "1px solid var(--border-section)" }}>
                          <h3 style={itemTitle}>{d.title}</h3>
                          <p style={{ ...body, margin: 0 }}>{d.detail}</p>
                        </div>
                      ))}
                    </div>
                    <Figure
                      src="/images/projects/rata/verified-contrast.png"
                      alt="A table of verified contrast pairings with measured ratios for light and dark"
                      caption="Every pairing with its measured ratio in both schemes, re-measured on each build."
                    />
                  </div>
                ),
              },
              {
                label: "Theming",
                panel: (
                  <div>
                    <p style={{ ...body, marginBottom: "1.5rem" }}>
                      Most themes state one thing, the accent colour. Spacing, radius, type and motion inherit, and
                      every contrast promise is re-measured against the new colour.
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
                ),
              },
            ]}
          />
        </div>

        {/* Workflow — tools at each gate */}
        <div style={divider}>
          <p style={{ ...sectionLabel, marginBottom: "0.75rem" }}>Workflow</p>
          <h2 style={sectionTitle}>How a component becomes real</h2>
          <p style={{ ...body, marginBottom: "2rem" }}>
            Most systems go wrong when adding to them: a component gets styled around behaviour nobody agreed, then
            wired to tokens that get renamed later. So the order is gated, and each stage is approved before the next
            one starts.
          </p>
          <ol className="rata-flow" style={{ listStyle: "none", margin: "0 0 2rem", padding: 0, display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1.25rem" }}>
            {workflow.map((s, i) => (
              <li key={s.step} style={{ paddingTop: "1rem", borderTop: "1px solid var(--border-section)" }}>
                <p style={{ ...mono, fontSize: "11px", color: "var(--color-muted)", margin: "0 0 8px" }}>
                  0{i + 1} · {s.tool}
                </p>
                <h3 style={itemTitle}>{s.step}</h3>
                <p style={{ ...body, fontSize: "13px", margin: 0 }}>{s.detail}</p>
              </li>
            ))}
          </ol>
          <p style={{ ...body, marginBottom: "2rem" }}>
            Because a contract stands on its own, it can exist before the component does. Two components are at that
            stage now: their pages are live and their options documented,{" "}
            <span style={b}>and where the component would render, the gallery says plainly that it isn&apos;t built yet.</span>{" "}
            A status matrix that only ever reads green is one nobody trusts.
          </p>
          <Figure
            src="/images/projects/rata/component-gallery.png"
            alt="The component index, with every component rendered running, and an unbuilt one showing its spec placeholder"
            caption="Every component shown running, including the ones that are still only an approved spec."
            height={1600}
          />
        </div>

        {/* AI reader */}
        <div style={divider}>
          <h2 style={sectionTitle}>Designing for the reader that isn&apos;t human</h2>
          <p style={{ ...body, marginBottom: "1rem" }}>
            A growing share of the code that uses a design system is written with AI. That reader doesn&apos;t browse
            the docs; it recalls the API from memory, and{" "}
            <span style={b}>a half-remembered API doesn&apos;t fail loudly.</span>{" "}It invents a plausible option,
            drops in a hex value, hand-rolls a hover state.
          </p>
          <p style={body}>
            So the system answers questions about itself, generated from source so the answers can&apos;t go stale.
            Whether that changes what gets written is measured: the same twelve tasks are answered with and without
            the token guidance, and both are scored against the system&apos;s own rules.{" "}
            <span style={b}>If the difference ever disappears, that is a failure too.</span>
          </p>
        </div>

        {/* Status — last content block, so no bottom rule above "Next" */}
        <div style={{ ...divider, borderBottom: "none", paddingBottom: 0, marginBottom: 0 }}>
          <p style={{ ...sectionLabel, marginBottom: "0.75rem" }}>Status</p>
          <h2 style={sectionTitle}>Where it stands, and what&apos;s next</h2>
          <p style={{ ...body, marginBottom: "2rem" }}>
            Live at rata-design.vercel.app, with 26 of 30 components built and every number on the site measured by
            the build.
          </p>
          <div className="rata-next" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
            {nextUp.map((n) => (
              <div key={n.name} style={{ paddingLeft: "1rem", borderLeft: "1px solid var(--border-section)" }}>
                <h3 style={itemTitle}>{n.name}</h3>
                <p style={{ ...body, margin: 0 }}>{n.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Next project */}
        <div style={{ paddingTop: "3rem", marginTop: "3rem", borderTop: "1px solid var(--border-section)" }}>
          <p style={sectionLabel}>Next</p>
          <Link
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
            Deriv{" "}
            <span style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: 300, color: "var(--color-muted)", marginLeft: "0.75rem" }}>
              — Enterprise Website
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
