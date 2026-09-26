import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BackButton from "@/components/ui/BackButton";
import ParallaxImage from "@/components/ui/ParallaxImage";

export const metadata: Metadata = {
  title: "Minti — Case Study",
  description:
    "An ongoing experiment in designing by prompt: a design system written for machines, tested on Minti, a spending tracker built with Claude Code.",
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

const mono: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "13px",
  color: "var(--color-fg)",
};

const caption: React.CSSProperties = {
  fontFamily: "var(--font-manrope), sans-serif",
  fontSize: "11px",
  color: "var(--color-muted)",
  marginTop: "10px",
  opacity: 0.6,
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

/* ── For readers who skim ── */
const summary = [
  { label: "Problem", text: "AI builds screens fast, but they usually need many fixes before the UX and UI are good." },
  { label: "Role", text: "Designer and builder of both the app and the system behind it." },
  { label: "Approach", text: "A design system written for machines: specs, brand and rules Claude Code can follow." },
  { label: "Status", text: "Ongoing. Minti is the testbed, live and in testing with friends." },
];

type Badge = { label: string; chosen?: boolean };
type PanelItem = { name: string; badges?: Badge[]; detail: string };

/* ── Decisions, with the option that was chosen ── */
const decisions: PanelItem[] = [
  {
    name: "Manual entry, not bank sync",
    badges: [{ label: "Bank sync" }, { label: "Manual entry", chosen: true }],
    detail:
      "Bank sync logs spending nobody notices. Typing each expense takes about five seconds, and that pause is the point: it is the moment you decide whether it was worth it.",
  },
  {
    name: "Written insights, not charts",
    badges: [{ label: "Configurable charts" }, { label: "Written insights", chosen: true }],
    detail:
      "Charts leave people to find the story themselves. Minti writes it instead: the biggest category, the projected month total or a category that jumped, each in one plain sentence.",
  },
  {
    name: "An installable web app, not an app store app",
    badges: [{ label: "Native app" }, { label: "PWA", chosen: true }],
    detail:
      "A progressive web app installs to the home screen like any other app, but ships without store reviews. That kept changes fast while friends tested it week to week.",
  },
  {
    name: "One monthly limit, not a budget per category",
    badges: [{ label: "Category budgets" }, { label: "One monthly limit", chosen: true }],
    detail:
      "A budget for every category is one more thing to maintain. A single limit and the average daily spend answer the question that matters: is this month on track?",
  },
];

/* ── How screens were designed without Figma ── */
const designProcess: PanelItem[] = [
  {
    name: "Write the spec",
    detail: "Each screen starts as a markdown spec: what it is for, what it shows, its states and its edge cases.",
  },
  {
    name: "Set the guidelines",
    detail: "A design guidelines file holds the rules: tokens, glass surfaces, one accent colour, type and spacing.",
  },
  {
    name: "Build with Claude Code",
    detail: "Claude Code builds each screen from the spec and the guidelines, not from a mockup to be copied.",
  },
  {
    name: "Review with taste",
    detail: "Every screen is judged on a real phone. Each fix becomes a new rule, so the same mistake isn't made twice.",
  },
];

/* ── Where the experiment is heading ── */
const roadmap: PanelItem[] = [
  {
    name: "Now: one app",
    detail: "Minti's screens are built from specs and guidelines, and every fix makes the design system sharper.",
  },
  {
    name: "Next: whole features",
    detail: "Complete flows and features built from a spec, a brand and the design system, reviewed rather than redrawn.",
  },
  {
    name: "Later: complete projects",
    detail: "Whole apps as high-fidelity prototypes from a full set of specs, needing the minimum of fixes.",
  },
];

/* ── What goes in, and what should come out ── */
const recipeInputs = [
  { name: "Product spec", detail: "What it does, for whom, and the flows it needs" },
  { name: "Brand", detail: "Voice, colour, type and imagery" },
  { name: "Supporting specs", detail: "Content, states, edge cases and accessibility" },
  { name: "Design system", detail: "Tokens, components and rules written for machines" },
];

const mintiFeatures = [
  {
    title: "Expense Tracking",
    description: "Log an expense in seconds. The home screen shows the month so far, today's spend and the daily average.",
    image: "/images/projects/minti/expences.webp",
  },
  {
    title: "Smart Insights",
    description: "Written cards surface what matters: the biggest category, the projected month total and the savings rate.",
    image: "/images/projects/minti/insights.webp",
  },
  {
    title: "Spend by Category",
    description: "Categories ranked by total and share of spending, so the pattern is obvious without a pie chart.",
    image: "/images/projects/minti/spending-by-category.webp",
  },
  {
    title: "Month-over-Month",
    description: "Each category against last month, marked up, down or new, so shifts show without any maths.",
    image: "/images/projects/minti/vs-last-month.webp",
  },
  {
    title: "Income & Savings Rate",
    description: "Base income and one-off payments, with a live savings rate showing how much of the month is kept.",
    image: "/images/projects/minti/income.webp",
  },
  {
    title: "Bills & Subscriptions",
    description: "Recurring bills kept apart from daily spending, with the monthly fixed cost and the projected yearly total.",
    image: "/images/projects/minti/bills.webp",
  },
];

/** One card, hairline-ruled items and optional option badges: the same panel style as the Deriv case study. */
function Panel({ items, columns = 2 }: { items: PanelItem[]; columns?: 2 | 3 }) {
  return (
    <div
      style={{
        border: "1px solid var(--border-section)",
        borderRadius: "12px",
        background: "var(--bg-card)",
        padding: "1.5rem clamp(1.25rem, 4vw, 1.75rem)",
      }}
    >
      <div
        className={columns === 3 ? "minti-panel-grid minti-panel-grid-3" : "minti-panel-grid"}
        style={{ display: "grid", gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: "1.25rem 2rem" }}
      >
        {items.map((it) => (
          <div key={it.name} style={{ paddingLeft: "1rem", borderLeft: "1px solid var(--border-section)" }}>
            <p style={{ ...metaSmall, fontWeight: 500, color: "var(--color-fg)", marginBottom: it.badges ? "8px" : "4px" }}>
              {it.name}
            </p>
            {it.badges && (
              <ul style={{ listStyle: "none", margin: "0 0 10px", padding: 0, display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {it.badges.map((badge) => (
                  <li
                    key={badge.label}
                    style={{
                      ...mono,
                      fontSize: "11px",
                      lineHeight: 1.4,
                      padding: "2px 8px",
                      borderRadius: "6px",
                      border: badge.chosen
                        ? "1px solid var(--color-fg)"
                        : "1px solid color-mix(in srgb, var(--color-muted) 40%, transparent)",
                      color: badge.chosen ? "var(--color-fg)" : "var(--color-muted)",
                    }}
                  >
                    {badge.label}
                    {badge.chosen && <span className="sr-only"> (chosen)</span>}
                  </li>
                ))}
              </ul>
            )}
            <p style={{ ...body, fontSize: "13px", margin: 0 }}>{it.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Inputs on the left, Claude Code in the middle, a prototype on the right. */
function RecipeDiagram() {
  const box: React.CSSProperties = {
    border: "1px solid var(--border-section)",
    borderRadius: "12px",
    background: "var(--bg-card)",
    padding: "1.25rem 1.5rem",
  };
  const arrow = (
    <span aria-hidden className="minti-recipe-arrow" style={{ ...mono, color: "var(--color-muted)", alignSelf: "center", textAlign: "center" }}>
      →
    </span>
  );
  return (
    <figure style={{ margin: 0 }}>
      <div className="minti-recipe">
        <div style={{ ...box, display: "flex", flexDirection: "column", gap: "0.9rem" }}>
          <p style={{ ...mono, fontSize: "11px", color: "var(--color-muted)", margin: 0 }}>In</p>
          {recipeInputs.map((input) => (
            <div key={input.name} style={{ paddingLeft: "1rem", borderLeft: "1px solid var(--border-section)" }}>
              <p style={{ ...metaSmall, fontWeight: 500, color: "var(--color-fg)", marginBottom: "2px" }}>{input.name}</p>
              <p style={{ ...body, fontSize: "13px", margin: 0 }}>{input.detail}</p>
            </div>
          ))}
        </div>
        {arrow}
        <div style={{ ...box, alignSelf: "center" }}>
          <p style={{ ...mono, fontSize: "11px", color: "var(--color-muted)", marginBottom: "8px" }}>Build</p>
          <p style={{ ...metaSmall, fontWeight: 500, color: "var(--color-fg)", marginBottom: "2px" }}>Claude Code</p>
          <p style={{ ...body, fontSize: "13px", margin: 0 }}>Builds from all four, not from a mockup</p>
        </div>
        {arrow}
        <div style={{ ...box, alignSelf: "center", borderColor: "var(--color-fg)" }}>
          <p style={{ ...mono, fontSize: "11px", color: "var(--color-muted)", marginBottom: "8px" }}>Out</p>
          <p style={{ ...metaSmall, fontWeight: 500, color: "var(--color-fg)", marginBottom: "2px" }}>High-fidelity prototype</p>
          <p style={{ ...body, fontSize: "13px", margin: 0 }}>Ready to test, with the fewest fixes possible</p>
        </div>
      </div>
      <figcaption style={caption}>
        The end goal: every input a designer carries in their head, written down in a form an AI can build from.
      </figcaption>
    </figure>
  );
}

/** A phone screenshot, shown whole on a soft backdrop. */
function Screen({ src, alt, text }: { src: string; alt: string; text: string }) {
  return (
    <figure style={{ margin: 0 }}>
      <div
        className="asset-bg"
        style={{ borderRadius: "12px", background: "rgba(0,0,0,0.04)", padding: "2rem 1.5rem", display: "flex", justifyContent: "center" }}
      >
        <Image
          src={src}
          alt={alt}
          width={900}
          height={1840}
          sizes="(max-width: 640px) 70vw, 280px"
          style={{ width: "100%", maxWidth: "260px", height: "auto", display: "block" }}
        />
      </div>
      <figcaption style={caption}>{text}</figcaption>
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
          .minti-features-grid { grid-template-columns: 1fr !important; }
          .minti-summary { grid-template-columns: 1fr 1fr !important; }
          .minti-panel-grid { grid-template-columns: 1fr !important; }
          .minti-recipe { grid-template-columns: 1fr !important; gap: 0.5rem !important; }
          .minti-recipe-arrow { transform: rotate(90deg); width: 1rem; }
        }
        @media (max-width: 900px) { .minti-panel-grid-3 { grid-template-columns: 1fr !important; } }
        @media (min-width: 641px) and (max-width: 900px) {
          .minti-features-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        .minti-recipe { display: grid; grid-template-columns: 1.4fr 1.5rem 1fr 1.5rem 1fr; gap: 1rem; }
        .dark .asset-bg { background: rgba(255,255,255,0.04) !important; }
        .minti-feature-card .minti-overlay {
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .minti-feature-card:hover .minti-overlay { opacity: 1; }
        /* Touch screens can't hover, so the descriptions stay visible there. */
        @media (hover: none) { .minti-feature-card .minti-overlay { opacity: 1; } }
      `}</style>

      <div className="container" style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
        <BackButton style={{ marginBottom: "2.5rem" }} />

        {/* Meta row */}
        <div className="cs-meta" style={{ display: "flex", gap: "1rem 3rem", flexWrap: "wrap", ...divider, paddingBottom: "2rem", marginBottom: "2.5rem" }}>
          {[
            { label: "Year", value: "2026 – ongoing" },
            { label: "Role", value: "Designer & Builder" },
            { label: "Type", value: "PWA · Ongoing experiment" },
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
        <h1 style={pageTitle}>An experiment in designing by prompt, tested on a real app</h1>

        {/* Summary — for readers who skim */}
        <div className="minti-summary" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem", ...divider, paddingBottom: "2.5rem", marginBottom: "2.5rem" }}>
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
            Minti is two things. On the surface, a spending tracker for people who want to understand where their money
            goes, not automate it away. Underneath, an ongoing experiment: a design system written for machines, so AI
            can build well-designed screens from a prompt with the fewest possible fixes.
          </p>
          <p style={body}>
            The end goal goes beyond one app.{" "}
            <span style={b}>
              Complete features, flows and projects built from a spec, a brand and the design system, as
              high-fidelity prototypes that need little fixing.
            </span>{" "}
            Minti is where that gets tested, on real screens and with real people.
          </p>
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

        {/* The experiment */}
        <div style={divider}>
          <p style={{ ...sectionLabel, marginBottom: "0.75rem" }}>The experiment</p>
          <h2 style={sectionTitle}>Specs in, prototypes out</h2>
          <p style={{ ...body, marginBottom: "2rem" }}>
            Every input a designer would normally carry in their head is written down instead, in a form an AI can read.
            Progress is measured by one thing:{" "}
            <span style={b}>how many fixes a screen needs after it is first built.</span>
          </p>
          <RecipeDiagram />
        </div>

        {/* Thinking — where it started */}
        <div style={divider}>
          <p style={{ ...sectionLabel, marginBottom: "0.75rem" }}>Thinking</p>
          <h2 style={sectionTitle}>Why a spending tracker</h2>
          <p style={{ ...body, marginBottom: "1rem" }}>
            An experiment like this needs a real product with real users, not a demo. Minti began with a personal habit
            of tracking spending by hand, and noticing that writing it down changed what got spent. Existing apps went one of two ways. Bank-connected apps automate everything and remove the
            moment of reflection. The rest are built for people who enjoy spreadsheets.
          </p>
          <p style={body}>
            Conversations with people living away from their home country shaped it most. A new city, a new cost of
            living, and income that doesn&apos;t follow the patterns of home make one question more important than any
            chart:{" "}
            <span style={b}>is this month on track?</span>
          </p>
        </div>

        {/* Thinking — decisions */}
        <div style={divider}>
          <h2 style={sectionTitle}>Four decisions, each with a real alternative</h2>
          <Panel items={decisions} />
          <div className="cs-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginTop: "1.5rem" }}>
            <Screen
              src="/images/projects/minti/categories.webp"
              alt="Adding an expense in Minti: amount, note, category and date"
              text="Adding an expense: amount, note, category and date, in about five seconds."
            />
            <Screen
              src="/images/projects/minti/app-icon.webp"
              alt="Minti installed on an iPhone home screen alongside native apps"
              text="Installed from the browser, it sits on the home screen like any other app."
            />
          </div>
        </div>

        {/* Design — specs, not Figma */}
        <div style={divider}>
          <p style={{ ...sectionLabel, marginBottom: "0.75rem" }}>Design</p>
          <h2 style={sectionTitle}>How the system learns</h2>
          <p style={{ ...body, marginBottom: "2rem" }}>
            There is no Figma file. Every screen is described in markdown, built by Claude Code and judged by eye.{" "}
            <span style={b}>Each fix is written back into the guidelines as a rule, so the next screen needs fewer.</span>{" "}
            The visual language lives in those rules: glass surfaces, consistent type and spacing tokens, and one green
            accent that only marks the primary action or the current selection.
          </p>
          <Panel items={designProcess} />
        </div>

        {/* Features */}
        <div style={divider}>
          <h2 style={sectionTitle}>What it does</h2>
          <div
            className="minti-features-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "48px" }}
          >
            {mintiFeatures.map((feature) => (
              <div
                key={feature.title}
                className="minti-feature-card"
                style={{ position: "relative", overflow: "hidden", borderRadius: "16px" }}
              >
                <div style={{ padding: "0 24px" }}>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={900}
                    height={1840}
                    sizes="(max-width: 640px) 90vw, (max-width: 900px) 45vw, 320px"
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>
                <div
                  className="minti-overlay"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, var(--color-bg) 0%, color-mix(in srgb, var(--color-bg) 75%, transparent) 40%, transparent 72%)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    padding: "2.5rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-fraunces), Georgia, serif",
                      fontSize: "18px",
                      fontWeight: 300,
                      color: "var(--color-fg)",
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
                      color: "var(--color-muted)",
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

        {/* Status — last content block, so no bottom rule above "Next" */}
        <div style={{ ...divider, borderBottom: "none", paddingBottom: 0, marginBottom: 0 }}>
          <p style={{ ...sectionLabel, marginBottom: "0.75rem" }}>Status</p>
          <h2 style={sectionTitle}>Where it&apos;s heading</h2>
          <p style={{ ...body, marginBottom: "2rem" }}>
            Minti is live and being tested by friends, most of them living away from home. Their feedback shapes the
            app, and the fixes it needs shape the design system.
          </p>
          <Panel items={roadmap} columns={3} />
        </div>

        {/* Next project */}
        <div style={{ paddingTop: "3rem", marginTop: "3rem", borderTop: "1px solid var(--border-section)" }}>
          <p style={sectionLabel}>Next</p>
          <Link
            href="/projects/rata"
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
            Ratā
            <span style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: 300, color: "var(--color-muted)", marginLeft: "0.75rem" }}>
              — Design System
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
