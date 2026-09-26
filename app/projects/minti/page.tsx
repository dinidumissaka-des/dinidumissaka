import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BackButton from "@/components/ui/BackButton";

export const metadata: Metadata = {
  title: "Minti — Case Study",
  description:
    "Designing and building Minti, a spending tracker that keeps the moment of reflection, designed from specs and built with Claude Code.",
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
  { label: "Problem", text: "Finance apps either automate spending away or ask for a spreadsheet mindset." },
  { label: "Role", text: "Design and build, working with a UX designer and a service designer." },
  { label: "Approach", text: "Designed in markdown specs and guidelines, built with Claude Code, with no Figma." },
  { label: "Status", text: "Live at minti.one and in a closed test group, improving week to week." },
];

type Badge = { label: string; chosen?: boolean };
type PanelItem = { name: string; badges?: Badge[]; detail: string; tradeoff?: string };

/* ── Decisions: the choice, the thinking behind it, and what it gave up ── */
const decisions: PanelItem[] = [
  {
    name: "Manual entry first",
    badges: [{ label: "Bank sync" }, { label: "Manual entry", chosen: true }],
    detail:
      "The goal is responsibility, not bookkeeping. Typing an expense takes about five seconds, and that pause is when people decide whether it was worth it and what should come first next time.",
    tradeoff: "Logging takes effort, so optional automation is planned for people too busy to add expenses one by one.",
  },
  {
    name: "Written insights, not charts",
    badges: [{ label: "Configurable charts" }, { label: "Written insights", chosen: true }],
    detail:
      "Charts leave people to find the story themselves, and most never look. Minti writes it instead: the biggest category, the projected month total or a category that jumped, each in one plain sentence.",
    tradeoff: "Less room to explore the data, in exchange for knowing what matters at a glance.",
  },
  {
    name: "One monthly limit, not a budget per category",
    badges: [{ label: "Category budgets" }, { label: "One monthly limit", chosen: true }],
    detail:
      "A budget for every category is one more thing to maintain and one more reason to give up. A single limit and the average daily spend answer the question that matters: is this month on track?",
    tradeoff: "Less control per category, though the By Category view still shows where the money goes.",
  },
  {
    name: "Bills kept apart from daily spending",
    badges: [{ label: "One list" }, { label: "Bills kept apart", chosen: true }],
    detail:
      "Rent and subscriptions are decided once a month, while coffee and taxis are decided every day. Mixing them hides the daily choices people can actually change, so fixed costs get their own view.",
    tradeoff: "Two places to look instead of one, but each number now means something clear.",
  },
  {
    name: "As few steps as possible to log",
    badges: [{ label: "Full form" }, { label: "One-tap categories", chosen: true }],
    detail:
      "Every extra field is a reason to skip logging, and a skipped entry breaks the habit. Categories are one tap from a set of chips and the date starts as today, so an entry fits in a few seconds.",
    tradeoff: "Set categories suit most spending, with a custom option for everything else.",
  },
  {
    name: "A web app first, iOS next",
    badges: [{ label: "Native app first" }, { label: "PWA first", chosen: true }],
    detail:
      "A progressive web app installs to the home screen like any other app and ships without store reviews. That kept changes fast while early testers used it, and proved the flows before building natively.",
    tradeoff: "A web app feels less native, which is why an iOS app is now in progress.",
  },
];

/* ── Decisions grouped by theme, each group beside the screen it shaped ── */
type Shot = { src: string; alt: string; text: string };
const byName = (name: string) => decisions.find((d) => d.name === name)!;
const decisionRows: { label: string; items: PanelItem[]; shots: Shot[] }[] = [
  {
    label: "Logging",
    items: [byName("Manual entry first"), byName("As few steps as possible to log")],
    shots: [
      {
        src: "/images/projects/minti/categories.webp",
        alt: "Adding an expense in Minti: amount, note, category chips and date",
        text: "Adding an expense: amount, note, category and date, in about five seconds.",
      },
    ],
  },
  {
    label: "Knowing where you stand",
    items: [byName("One monthly limit, not a budget per category"), byName("Bills kept apart from daily spending")],
    shots: [
      {
        src: "/images/projects/minti/subscriptions.webp",
        alt: "Minti showing one monthly budget bar above a separate list of recurring bills",
        text: "One monthly budget at the top, recurring bills listed on their own below.",
      },
    ],
  },
  {
    label: "Reading it, anywhere",
    items: [byName("Written insights, not charts"), byName("A web app first, iOS next")],
    shots: [
      {
        src: "/images/projects/minti/insights.webp",
        alt: "Minti insight cards written as plain sentences",
        text: "Insights written as sentences, not charts.",
      },
      {
        src: "/images/projects/minti/app-icon.webp",
        alt: "Minti installed on an iPhone home screen alongside native apps",
        text: "Installed from the browser, like any other app.",
      },
    ],
  },
];

/* ── Cover: three real screens instead of the app icon ── */
const coverShots = [
  { src: "/images/projects/minti/expences.webp", alt: "Minti home screen with the month total, today and daily average" },
  { src: "/images/projects/minti/insights.webp", alt: "Minti insights written as plain sentences" },
  { src: "/images/projects/minti/subscriptions.webp", alt: "Minti monthly budget and recurring bills" },
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
    detail: "Every screen is judged on a real phone. Anything that feels off becomes a new rule in the guidelines.",
  },
];

/* ── Planned improvements, each secondary to the core idea: you add what you spend ── */
const nextUp: PanelItem[] = [
  {
    name: "Optional automation",
    detail: "For people too busy to add expenses one by one. Manual entry stays the default, because feeling responsible is the point.",
  },
  {
    name: "Reminders to log",
    detail: "Gentle prompts to keep entries up to date, so the habit sticks without anything being automated away.",
  },
  {
    name: "Notifications that sound human",
    detail: "When saving improves, Minti says so warmly, recognising the habit behind it rather than just the number.",
  },
  {
    name: "An iOS app",
    detail: "A native iOS app is in progress, built on the flows the web app has already proven with real people.",
  },
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
function Panel({ items, columns = 2 }: { items: PanelItem[]; columns?: 1 | 2 | 3 }) {
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
            {it.tradeoff && (
              <p style={{ ...body, fontSize: "13px", margin: "10px 0 0" }}>
                <span style={{ ...mono, fontSize: "11px", color: "var(--color-muted)", marginRight: "8px" }}>Trade-off</span>
                {it.tradeoff}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Three real screens side by side, the middle one raised, on a soft brand-green glow. */
function Cover() {
  return (
    <div
      className="asset-bg minti-cover"
      style={{
        borderRadius: "12px",
        background:
          "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(126, 211, 90, 0.22), transparent 70%), rgba(0,0,0,0.04)",
        padding: "clamp(1.5rem, 5vw, 3.5rem) clamp(1rem, 4vw, 3rem) 0",
        overflow: "hidden",
      }}
    >
      <div className="minti-cover-row" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "clamp(0.75rem, 3vw, 2.5rem)", alignItems: "end" }}>
        {coverShots.map((shot, i) => (
          <div
            key={shot.src}
            className={i === 0 ? "minti-cover-side" : undefined}
            style={{ transform: i === 1 ? "translateY(0)" : "translateY(8%)", display: "flex", justifyContent: "center" }}
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              width={900}
              height={1840}
              sizes="(max-width: 640px) 45vw, 300px"
              preload={i === 1}
              style={{ width: "100%", maxWidth: "280px", height: "auto", display: "block" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/** A group of decisions beside the screen they shaped; rows alternate sides. */
function DecisionRow({ label, items, shots, flip }: { label: string; items: PanelItem[]; shots: Shot[]; flip: boolean }) {
  return (
    <div>
      <p style={{ ...mono, fontSize: "11px", color: "var(--color-muted)", marginBottom: "10px" }}>{label}</p>
      {/* Rows with two screens split evenly so neither screen gets too small. */}
      <div className="minti-decision-row" style={shots.length > 1 ? { gridTemplateColumns: "1fr 1fr" } : undefined}>
        <div style={{ order: flip ? 2 : 1, minWidth: 0 }}>
          <Panel items={items} columns={1} />
        </div>
        <div
          className="minti-decision-shots"
          style={{ order: flip ? 1 : 2, display: "grid", gridTemplateColumns: `repeat(${shots.length}, 1fr)`, gap: "1rem", minWidth: 0 }}
        >
          {shots.map((shot) => (
            <Screen key={shot.src} src={shot.src} alt={shot.alt} text={shot.text} compact={shots.length > 1} />
          ))}
        </div>
      </div>
    </div>
  );
}

/** A phone screenshot, shown whole on a soft backdrop. */
function Screen({ src, alt, text, compact }: { src: string; alt: string; text: string; compact?: boolean }) {
  return (
    <figure style={{ margin: 0 }}>
      <div
        className="asset-bg"
        style={{ borderRadius: "12px", background: "rgba(0,0,0,0.04)", padding: compact ? "1.25rem 0.75rem" : "2rem 1.5rem", display: "flex", justifyContent: "center" }}
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
          .minti-decision-row { grid-template-columns: 1fr !important; }
          .minti-decision-row > div { order: 0 !important; }
          .minti-cover-row { grid-template-columns: repeat(2, 1fr) !important; }
          .minti-cover-side { display: none !important; }
        }
        @media (max-width: 900px) { .minti-panel-grid-3 { grid-template-columns: 1fr !important; } }
        .minti-decision-row { display: grid; grid-template-columns: 1.35fr 1fr; gap: 1.5rem; align-items: center; }
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
            { label: "Team", value: "With a UX designer & a service designer" },
            { label: "Type", value: "PWA · iOS in progress" },
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
          <p style={body}>
            Minti is a spending tracker for people who want to understand where their money goes, not automate it
            away. Set a monthly limit, log what you spend, keep bills apart from daily spending, and let the app tell
            you what changed.{" "}
            <span style={b}>You have to type in what you spent. That five seconds is the point.</span>
          </p>
        </div>

        {/* Cover: the product itself */}
        <div style={divider}>
          <Cover />
        </div>

        {/* Thinking — where it started */}
        <div style={divider}>
          <p style={{ ...sectionLabel, marginBottom: "0.75rem" }}>Thinking</p>
          <h2 style={sectionTitle}>It started as a personal habit</h2>
          <p style={{ ...body, marginBottom: "1rem" }}>
            Minti began with a habit of tracking spending by hand and noticing that the act of writing it down changed
            what got spent. Existing apps went one of two ways. Bank-connected apps automate everything and remove the
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
          <h2 style={sectionTitle}>Six decisions, and what each one gave up</h2>
          <p style={{ ...body, marginBottom: "2rem" }}>
            Every decision started from the same principle:{" "}
            <span style={b}>Minti should make people feel responsible for their spending, not do the thinking for them.</span>{" "}
            Each choice had a real alternative, and each one gave something up.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {decisionRows.map((row, i) => (
              <DecisionRow key={row.label} label={row.label} items={row.items} shots={row.shots} flip={i % 2 === 1} />
            ))}
          </div>
        </div>

        {/* Design — specs, not Figma */}
        <div style={divider}>
          <p style={{ ...sectionLabel, marginBottom: "0.75rem" }}>Design</p>
          <h2 style={sectionTitle}>Designed in specs, not in Figma</h2>
          <p style={{ ...body, marginBottom: "2rem" }}>
            There is no Figma file. Every screen was described in markdown, built by Claude Code and judged by eye. The
            visual language is written down as rules rather than drawn: glass surfaces, consistent type and spacing
            tokens, and{" "}
            <span style={b}>one green accent that only ever marks the primary action or the current selection.</span>
          </p>
          <Panel items={designProcess} />
        </div>

        {/* Features */}
        <div style={divider}>
          <h2 style={sectionTitle}>What it does</h2>
          <div
            className="minti-features-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "48px" }}
          >
            {mintiFeatures.map((feature) => (
              <div
                key={feature.title}
                className="minti-feature-card"
                style={{ position: "relative", overflow: "hidden", borderRadius: "16px" }}
              >
                <div style={{ padding: "0 24px", display: "flex", justifyContent: "center" }}>
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={900}
                    height={1840}
                    sizes="(max-width: 640px) 90vw, 380px"
                    style={{ width: "100%", maxWidth: "380px", height: "auto", display: "block" }}
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
          <h2 style={sectionTitle}>In testing with a closed group</h2>
          <p style={{ ...body, marginBottom: "2rem" }}>
            Minti is live and being tested by a closed group of early testers, most of them living away from home, the people it was shaped
            around. Their feedback decides what changes each week. Planned next, each one kept secondary to the core
            idea that you add what you spend:
          </p>
          <Panel items={nextUp} />
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
