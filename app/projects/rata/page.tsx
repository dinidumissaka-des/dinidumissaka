import type { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/components/ui/BackButton";
import ParallaxImage from "@/components/ui/ParallaxImage";

export const metadata: Metadata = {
  title: "Ratā — Case Study",
  description:
    "Designing and building Ratā — a token-first design system whose entire component surface is queryable from a terminal, documented to be read by coding agents as well as people.",
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

/* ── CLI surface — the five commands that answer most questions ── */
const cliCommands = [
  { cmd: "npm run ui -- list", note: "every component, one line each" },
  { cmd: "npm run ui -- props button", note: "props, types, defaults — read from source" },
  { cmd: "npm run ui -- contract button", note: "what each prop is FOR, and when not to use it" },
  { cmd: "npm run ui -- tokens focus", note: "the --rata-* custom properties, filtered" },
  { cmd: "npm run ui -- pages", note: "existing page shells — find the precedent" },
];

/* ── The two halves of every component contract ── */
const contractHalves = [
  {
    half: "Derived",
    covers: "Prop names, types, optionality, defaults",
    source: "The React source",
    owner: "Nobody — it's parsed",
  },
  {
    half: "Written",
    covers: "What a prop is for, when not to use it, conflicts, the a11y obligation",
    source: "registry/components/<name>.json",
    owner: "Me",
  },
];

/* ── What the cross-check refuses to let through ── */
const buildFailures = [
  "A documented prop the component no longer declares.",
  "A declared prop nobody documented — an undocumented prop is an unusable one.",
  "A conflicts entry naming a prop that doesn't exist.",
  "A hand-written type or default on a component that's already implemented.",
];

function CodeBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        border: "1px solid var(--border-item)",
        borderRadius: "12px",
        background: "var(--bg-card)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "12px 20px",
          borderBottom: "1px solid var(--border-item)",
        }}
      >
        <span style={{ ...mono, fontSize: "11px", color: "var(--color-muted)" }}>{label}</span>
      </div>
      <div style={{ padding: "20px", overflowX: "auto" }}>{children}</div>
    </div>
  );
}

export default function RataCaseStudy() {
  return (
    <main>
      <style>{`
        @media (max-width: 640px) {
          .cs-grid { grid-template-columns: 1fr !important; }
          .cs-meta { gap: 1.25rem !important; }
          .rata-halves { grid-template-columns: 1fr !important; }
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
            { label: "Role", value: "Sole designer-engineer" },
            { label: "Type", value: "Design system · TypeScript monorepo" },
            {
              label: "Live",
              value: "rata-design-system.vercel.app",
              href: "https://rata-design-system.vercel.app",
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
        <h1 style={pageTitle}>A design system built to be read by machines</h1>

        {/* Intro */}
        <div style={divider}>
          <p style={{ ...body, marginBottom: "1rem" }}>
            Ratā is a token-first design system — 28 components, each usable without React — where the entire
            component surface is queryable from a terminal in about fifteen seconds. Seed-driven tokens,
            framework-free CSS, a React layer on top. I designed and built all of it.
          </p>
          <p style={{ ...body, marginBottom: "1rem" }}>
            Design system documentation is written for people and consumed by people. But the highest-volume
            consumer of a component API is no longer a person reading a docs site —{" "}
            <span style={b}>it&apos;s a coding agent recalling that API from memory.</span>{" "}And a model that
            half-remembers your codebase doesn&apos;t fail loudly. It invents props, invents imports, and reaches
            for generic React patterns that quietly route around your tokens: a hex value here, a hand-rolled{" "}
            <span style={mono}>:hover</span>{" "}there.
          </p>
          <p style={body}>
            Every one of those is a small, plausible-looking defect that review has to catch by eye. Better prose
            doesn&apos;t fix that. <span style={b}>The fix is making lookup cheaper than guessing.</span>
          </p>
        </div>

        {/* Cover image */}
        <div style={divider}>
          <figure style={{ margin: 0 }}>
            <ParallaxImage
              src="/images/projects/rata/rata-cover.png"
              alt="The Ratā CLI printing a component's props, its contract, and the focus tokens"
              width={1920}
              height={1080}
              style={{ width: "100%", aspectRatio: "16 / 9", objectFit: "cover", borderRadius: "12px", display: "block" }}
            />
            <figcaption
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "11px",
                color: "var(--color-muted)",
                marginTop: "10px",
                opacity: 0.6,
              }}
            >
              The component surface, queried from the terminal.
            </figcaption>
          </figure>
        </div>

        {/* The CLI surface */}
        <div style={divider}>
          <h2 style={sectionTitle}>Fifteen seconds, from a terminal</h2>
          <CodeBlock label="rata — component surface">
            {cliCommands.map(({ cmd, note }) => (
              <div key={cmd} style={{ ...mono, lineHeight: 2, whiteSpace: "nowrap" }}>
                <span style={{ color: "var(--color-accent)" }}>$ </span>
                {cmd}
                <span style={{ color: "var(--color-muted)" }}>{"   # "}{note}</span>
              </div>
            ))}
          </CodeBlock>
          <p style={{ ...body, marginTop: "2rem" }}>
            <span style={mono}>props</span>{" "}is parsed out of the React source at the path the component&apos;s
            registry manifest names. <span style={b}>Nobody maintains it. It can&apos;t go stale, because
            there&apos;s no copy to go stale.</span>{" "}The same data ships as a generated static file — 1,165 lines —
            for agents that want the whole surface at once, and the token layer ships the same way: 2,023 lines of
            generated reference, plus the rules as JSDoc on hover and as JSON with measured contrast ratios.
          </p>
        </div>

        {/* Two halves */}
        <div style={divider}>
          <h2 style={sectionTitle}>Contracts have two halves</h2>
          <p style={{ ...body, marginBottom: "2rem" }}>
            A prop&apos;s type tells you what compiles. It doesn&apos;t tell you what&apos;s correct.{" "}
            <span style={mono}>iconOnly</span>{" "}requires an <span style={mono}>aria-label</span>.{" "}
            <span style={mono}>loading</span>{" "}and <span style={mono}>disabled</span>{" "}are mutually exclusive. A
            disabled text field still submits its value.{" "}
            <span style={b}>None of that is recoverable from a type signature, and all of it is what an agent gets
            wrong.</span>{" "}So every contract is split, and the halves are never mixed.
          </p>

          <div
            className="rata-halves"
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}
          >
            {contractHalves.map((h) => (
              <div
                key={h.half}
                style={{
                  border: "1px solid var(--border-item)",
                  borderRadius: "12px",
                  background: "var(--bg-card)",
                  padding: "1.75rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-fraunces), Georgia, serif",
                    fontSize: "20px",
                    fontWeight: 300,
                    color: "var(--color-fg)",
                    marginBottom: "1rem",
                  }}
                >
                  {h.half}
                </h3>
                <p style={{ ...body, marginBottom: "1.25rem" }}>{h.covers}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    <span style={{ ...metaSmall, fontSize: "11px" }}>Lives in</span>
                    <span style={{ ...mono, fontSize: "11px" }}>{h.source}</span>
                  </div>
                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    <span style={{ ...metaSmall, fontSize: "11px" }}>Maintained by</span>
                    <span style={{ ...mono, fontSize: "11px" }}>{h.owner}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p style={{ ...body, marginTop: "2rem", marginBottom: "1rem" }}>
            The build fails when the halves disagree:
          </p>
          <ul style={{ ...body, listStyle: "none", padding: 0, margin: 0 }}>
            {buildFailures.map((rule) => (
              <li
                key={rule}
                style={{
                  paddingLeft: "1.25rem",
                  position: "relative",
                  marginBottom: "0.75rem",
                }}
              >
                <span style={{ position: "absolute", left: 0, color: "var(--color-muted)", opacity: 0.6 }}>—</span>
                {rule}
              </li>
            ))}
          </ul>
          <p style={{ ...body, marginTop: "1.5rem" }}>
            That last one is the whole thesis.{" "}
            <span style={b}>Restating a derived fact by hand recreates the second source of truth the system
            exists to prevent.</span>{" "}
            It&apos;s the drift, not the documentation of it.
          </p>
        </div>

        {/* Contracts before code */}
        <div style={divider}>
          <h2 style={sectionTitle}>Contracts before code</h2>
          <p style={{ ...body, marginBottom: "1rem" }}>
            Because the written half stands alone, a contract can exist before the component does. While a
            component&apos;s status is <span style={mono}>future</span>, its page renders as{" "}
            <span style={b}>spec</span> — the props API approved, no code behind it. When it ships and the status
            flips, the cross-check switches on and verifies the implementation against the API that was approved
            earlier.
          </p>
          <p style={body}>
            That is what turns a gated build order — primitive approved, then token mapping approved state by
            state, then CSS and React —{" "}
            <span style={b}>from an honour-system convention into something CI can actually check.</span>
          </p>
        </div>

        {/* Vibe tests */}
        <div style={divider}>
          <h2 style={sectionTitle}>Current isn&apos;t the same as followed</h2>
          <p style={{ ...body, marginBottom: "2rem" }}>
            Proving the docs are correct is easy. Proving they change what gets written is the harder claim, so I
            measured it. <span style={mono}>internal/vibe-tests</span>{" "}answers the same prompts twice — once with
            the token documentation in context, once without — and scores both against rules derived from the
            token build.
          </p>
          <CodeBlock label="internal/vibe-tests — what gets scored">
            {[
              "palette token used where a semantic one exists",
              "hardcoded value instead of a token",
              "contrast pairing the system forbids",
              "missing focus ring",
              "hand-rolled hover state",
            ].map((rule) => (
              <div key={rule} style={{ ...mono, lineHeight: 2, whiteSpace: "nowrap" }}>
                <span style={{ color: "var(--color-muted)" }}>— </span>
                {rule}
              </div>
            ))}
          </CodeBlock>
          <p style={{ ...body, marginTop: "2rem" }}>
            <span style={b}>CI fails if the checker stops telling the two arms apart.</span>{" "}The documentation has
            a regression test.
          </p>
        </div>

        {/* What I'd do differently */}
        <div style={{ ...divider, borderBottom: "none", paddingBottom: 0, marginBottom: 0 }}>
          <h2 style={sectionTitle}>What I&apos;d do differently</h2>
          <p style={body}>
            CSS load order is still an explicit <span style={mono}>ORDER</span>{" "}array in the build script rather
            than real <span style={mono}>@layer</span>{" "}boundaries. It works, and it is{" "}
            <span style={b}>the one place in the system where adding a component means remembering something
            instead of being told.</span>{" "}
            That&apos;s the next thing to fix.
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
            EcoByte
            <span style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: 300, color: "var(--color-muted)", marginLeft: "0.75rem" }}>
              — Digital Sustainability
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
