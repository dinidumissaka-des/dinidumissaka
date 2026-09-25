import type { Metadata } from "next";
import Link from "next/link";
import BackButton from "@/components/ui/BackButton";
import { ParallaxWrapper } from "@/components/ui/ParallaxImage";
import AssetCarousel from "@/components/ui/AssetCarousel";
import ScrollImage from "@/components/ui/ScrollImage";
import VideoSequence from "@/components/ui/VideoSequence";

export const metadata: Metadata = {
  title: "Deriv — Case Study",
  description:
    "Rebuilding Deriv.com — a 6,000-page global trading platform across 18 languages — on a token-based system of 40 blocks and 30+ components, designed in Figma and built with Claude Code.",
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

const h3: React.CSSProperties = {
  fontFamily: "var(--font-fraunces), Georgia, serif",
  fontSize: "18px",
  fontWeight: 300,
  color: "var(--color-fg)",
  marginBottom: "6px",
};

const caption: React.CSSProperties = {
  fontFamily: "var(--font-manrope), sans-serif",
  fontSize: "11px",
  color: "var(--color-muted)",
  marginTop: "10px",
  opacity: 0.6,
};

/* ── The project at a glance ── */
const stats = [
  { value: "6,000+", label: "pages rebuilt across deriv.com, the Academy and deriv.ae" },
  { value: "40", label: "blocks and 30+ components in one system" },
  { value: "+25%", label: "user engagement across all 18 languages" },
  { value: "2–3 days", label: "to ship a new page, down from 3–5 weeks" },
];

/* ── Everything a page is made of, grouped by layer ── */
const systemGroups: { title: string; intro: string; items: { name: string; detail: string }[] }[] = [
  {
    title: "Design system layer",
    intro: "The foundations every block inherits. None of them is set inside a block.",
    items: [
      {
        name: "Layout & grid",
        detail:
          "A twelve-column grid, content-width tokens and three breakpoints: mobile, tablet from 768 and desktop from 992. Every block lines up to the same edges on every page, so assembled pages look designed, not pasted together.",
      },
      {
        name: "Typography",
        detail:
          "One family, five heading levels, and font size, weight and line height as separate core tokens that scale per breakpoint. The hierarchy reads the same in English, German and Arabic.",
      },
      {
        name: "Colour",
        detail:
          "Slate and coral scales at the core, with semantic text, background, border and icon colour on top. Coral is reserved for action, so the primary CTA is always the most visible thing on the screen.",
      },
      {
        name: "Spacing",
        detail:
          "One spacing scale for padding, gaps and section rhythm replaced the one-off margins the audit found on almost every page. Vertical rhythm is now the same from the hero to the footer.",
      },
      {
        name: "Iconography",
        detail:
          "Interface icons live in their own package, one source instead of files exported page by page. A separate 3D icon set covers marketing moments, built to the same material rules.",
      },
      {
        name: "Motion",
        detail:
          "A dedicated Lottie package for animated illustrations and shared timing for interaction feedback. Motion explains things, such as how a trade opens and closes, rather than decorating, and it respects reduced-motion settings.",
      },
    ],
  },
  {
    title: "Structural components",
    intro: "The frame every page sits in. It is the same on all three properties.",
    items: [
      {
        name: "Header & navigation",
        detail:
          "One navigation model replaced the separate structures on deriv.com, the Academy and deriv.ae. Moving between them no longer feels like switching websites, and the menu collapses into a bottom sheet on mobile.",
      },
      {
        name: "Heroes & above the fold",
        detail:
          "Hero variants with exactly one primary action and the risk warning in a fixed position. The first screen always answers what this is and what to do next, and compliance is never pushed below the fold.",
      },
      {
        name: "Content sections",
        detail:
          "The 40 blocks: features, cards, stats, market tables, FAQs, testimonials and CTAs. Each is defined once, with its layout, content slots and allowed variants.",
      },
      {
        name: "Footer",
        detail:
          "Footer tokens and a single component holding legal links, regulatory information and jurisdiction-specific disclaimers. The most compliance-sensitive part of the site is maintained in one place instead of 6,000.",
      },
    ],
  },
  {
    title: "Interactive components",
    intro: "Each one has semantic tokens for every state it can be in.",
    items: [
      {
        name: "Buttons & links",
        detail: "Primary, secondary and tertiary tiers, each with hover and active tokens. There is one clear action per section.",
      },
      {
        name: "Accordions",
        detail: "FAQ and legal content that stays scannable on mobile without hiding what regulators require to be visible.",
      },
      {
        name: "Chips & chip dropdowns",
        detail: "Filtering markets and instruments without leaving the page.",
      },
      {
        name: "Fields",
        detail: "Form inputs with defined default, focus, error and disabled states for sign-up and contact flows.",
      },
      {
        name: "Breadcrumbs & pagination",
        detail: "Wayfinding through the Academy's long-form learning content.",
      },
      {
        name: "Bottom sheets & overlays",
        detail: "Mobile-first menus and dialogs that replace desktop dropdowns below the tablet breakpoint.",
      },
      {
        name: "Tags & status",
        detail: "Labels for market state and content type, where colour always comes with text.",
      },
    ],
  },
  {
    title: "Cross-cutting qualities",
    intro: "Not components, but rules every component has to meet before it ships.",
    items: [
      {
        name: "Responsiveness",
        detail:
          "Every block is designed at 360 and 1440 before it is built, and checked at every breakpoint in between. Components change form on mobile where needed, not just size.",
      },
      {
        name: "Accessibility",
        detail:
          "Colour pairings are checked against WCAG AA contrast. Every interactive state has a visible focus style, and the heading structure is semantic, which serves screen readers and search engines alike.",
      },
      {
        name: "States",
        detail:
          "Hover, active, focus, disabled, error and empty states are designed and named as tokens, not improvised in code. button.primary.background-hover exists because the hover was designed.",
      },
      {
        name: "Content & copy",
        detail:
          "Each block defines its content slots, heading level and working copy lengths, agreed with the content team. Real copy fits the design instead of breaking it.",
      },
      {
        name: "Translations",
        detail:
          "18 languages from one set of blocks. German and Arabic are the stress tests, and logical properties handle right-to-left, so there are no locale-specific forks.",
      },
      {
        name: "Performance",
        detail:
          "Tokens compile to a single stylesheet, imagery ships as compressed WebP, and fixed media ratios stop layout shift. The system is lighter than the pages it replaced.",
      },
    ],
  },
];

/* ── Constraints that shaped every decision ── */
const constraints = [
  {
    title: "A regulated product",
    detail:
      "Risk warnings and jurisdiction-specific disclaimers had to appear in fixed, predictable places on every page. Layout freedom could never push compliance copy out of view.",
  },
  {
    title: "Search traffic that couldn't dip",
    detail:
      "With 21 million monthly visitors, much of it organic, URL structure and heading hierarchy had to survive the rebuild intact. The redesign could change how a page looked, not how search engines read it.",
  },
  {
    title: "Eighteen languages, two directions",
    detail:
      "German runs up to a third longer than English. Arabic reads right to left. Every layout had to hold in both without a locale-specific override.",
  },
];

/* ── Decisions, with the options that were weighed ── */
const decisions = [
  {
    title: "Design in sections, not pages",
    options: "Page-by-page redesign · atomic components only · section-level blocks",
    detail:
      "Designing 6,000 pages individually was never realistic, and a library of buttons and inputs alone leaves every page to be composed from scratch. Blocks sized to real page sections — a hero, a pricing table, a market list — gave teams a unit that was large enough to be useful and small enough to recombine.",
  },
  {
    title: "Three token layers, not four",
    options: "Core · semantic · component · template  →  Core · semantic · blocks",
    detail:
      "An earlier model kept semantic and component tokens as separate layers. In practice every semantic token ended up serving one component anyway, so the two were folded together: semantic tokens are named by component and state — button.primary.background-hover — and point straight at core values. One less layer to keep in sync, and no guessing which token a component should read.",
  },
  {
    title: "Stress-test with the hardest two languages",
    options: "Test all 18 · test English only · test German and Arabic",
    detail:
      "German covered length; Arabic covered direction. If a block held in both, it held in all eighteen — which turned localisation QA from eighteen passes into two.",
  },
];

/* ── Token layers ── */
const tokenLayers = [
  {
    layer: "Core",
    example: "color.coral.700 · color.slate.50 · radius.full",
    detail: "Raw values with no meaning attached — colour, spacing, radius, type, shadow and breakpoints. The only place a hex code or pixel value is allowed to live.",
  },
  {
    layer: "Semantic",
    example: "button.primary.background · field.border · text-color",
    detail: "Role, not appearance. Each token is named by the component and state it serves, and points at a core value — never at another raw value.",
  },
  {
    layer: "Blocks & templates",
    example: "hero · feature-cards · market-table",
    detail: "Assemblies that consume semantic tokens only. A block that references a core value directly is treated as a bug.",
  },
];

/* ── How a value travels through the layers (token diagram) ──
 * Token names and slate values are the real ones from the Deriv tokens package; coral hex values are approximations. */
type CoreToken = { name: string; hex?: string; kind?: "color" | "radius" };
const tokenFlows: { core: CoreToken; semantic: string[]; usedBy: string }[] = [
  {
    core: { name: "color.coral.700", hex: "#FF444F" },
    semantic: ["button.primary.background", "button.primary.border"],
    usedBy: "Every primary CTA — hero, pricing, sign-up",
  },
  {
    core: { name: "color.coral.800", hex: "#E12E3A" },
    semantic: ["button.primary.background-hover"],
    usedBy: "The hover state on those same CTAs",
  },
  {
    core: { name: "color.slate.50", hex: "#FFFFFF" },
    semantic: ["button.primary.text", "button.primary.icon", "button.secondary.background"],
    usedBy: "Labels on coral, and the fill of secondary buttons",
  },
  {
    core: { name: "color.slate.1200", hex: "#181C25" },
    semantic: ["button.secondary.text", "button.secondary.icon"],
    usedBy: "Labels and icons on secondary buttons",
  },
  {
    core: { name: "radius.full", kind: "radius" },
    semantic: ["button.primary.radius"],
    usedBy: "The pill shape shared by every button",
  },
];

/* ── The design-to-code workflow ── */
const workflow = [
  {
    step: "Ideate and decide in Figma",
    tool: "Figma",
    detail:
      "Explorations, page flows and visual direction happened in Figma first. Variables in the file mirror the core and semantic token layers name for name — so a design decision is already a token decision before any code exists.",
  },
  {
    step: "Structure the frame for a machine reader",
    tool: "Figma",
    detail:
      "Every block is built with auto layout, meaningful layer names and every fill, gap and radius bound to a variable. That discipline matters because the next reader of the file is not a developer squinting at a spec, but an agent reading its structure literally.",
  },
  {
    step: "Hand the frame to Claude Code through Figma MCP",
    tool: "Figma MCP · Claude Code",
    detail:
      "Figma MCP exposes the selected frame's layout, variables and component structure to Claude Code, which generates the block against the semantic tokens rather than approximating values from a screenshot. No hex codes, no magic numbers — if a value has no token, that gap surfaces immediately.",
  },
  {
    step: "Review in the browser, in the hardest conditions",
    tool: "Claude Code",
    detail:
      "Each block is checked at every breakpoint, in every state, in German and in Arabic. Differences are fixed at the source — in Figma if the design was wrong, in code if the build was — so the two never drift apart.",
  },
  {
    step: "Ship the system as versioned packages",
    tool: "Claude Code · Storybook",
    detail:
      "Tokens live as JSON in their own package and compile into a single tokens.css; components, icons and Lottie animations sit in sibling packages of the same monorepo. Every component is documented in Storybook, and every change ships as a versioned release with a changelog — so a page team always knows which version of the system it is building on.",
  },
  {
    step: "Use Claude for the thinking work",
    tool: "Claude",
    detail:
      "Synthesising the page audit, grouping thousands of URLs into page types, pressure-testing token names and drafting block documentation. The judgement stays with the designer; the sorting and first drafts don't have to.",
  },
];

/* ── How the team worked inside the system ── */
const team = [
  {
    title: "One owner for design decisions",
    detail:
      "Design direction, the token architecture, block definitions and final review sat with a single owner, end to end — from the first audit to the pages in production.",
  },
  {
    title: "Five designers, one source of truth",
    detail:
      "The web design team of five built pages from the shared library rather than designing their own versions. When a page needed something new, the first question was always whether an existing block could stretch to cover it.",
  },
  {
    title: "A new block has to earn its place",
    detail:
      "Proposals were reviewed in Figma against the existing 40 before being built. Most requests turned out to be a variant of something that already existed — which is how the library stayed at 40 instead of drifting to 140.",
  },
];

function Figure({ caption: text, src, padded }: { caption: string; src: string; padded?: boolean }) {
  return (
    <figure style={{ margin: 0 }}>
      <div
        style={{ borderRadius: "12px", overflow: "hidden", background: "rgba(0,0,0,0.04)", padding: padded ? "1.5rem" : 0 }}
        className="asset-bg"
      >
        <ParallaxWrapper>
          <img src={src} alt={text} style={{ width: "100%", display: "block" }} />
        </ParallaxWrapper>
      </div>
      <figcaption style={caption}>{text}</figcaption>
    </figure>
  );
}

function CoreChip({ token }: { token: CoreToken }) {
  const isRadius = token.kind === "radius";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <span
        aria-hidden
        style={{
          width: isRadius ? "22px" : "14px",
          height: "14px",
          flexShrink: 0,
          borderRadius: isRadius ? "999px" : "4px",
          border: isRadius
            ? "1.5px solid var(--color-fg)"
            : "1px solid color-mix(in srgb, var(--color-muted) 45%, transparent)",
          background: token.hex ?? "transparent",
        }}
      />
      <span style={{ ...mono, fontSize: "12px" }}>{token.name}</span>
    </div>
  );
}

/**
 * The token chain drawn as rows: one core value feeds one or more semantic tokens,
 * and blocks only ever read the semantic name — never the core value behind it.
 */
function TokenDiagram() {
  const cell: React.CSSProperties = { minWidth: 0 };
  const arrow = (
    <span aria-hidden className="deriv-token-arrow" style={{ ...mono, color: "var(--color-muted)", textAlign: "center" }}>
      →
    </span>
  );
  const colLabel = (text: string) => (
    <p className="deriv-token-label" style={{ ...mono, fontSize: "11px", color: "var(--color-muted)", marginBottom: "6px" }}>
      {text}
    </p>
  );
  return (
    <figure style={{ margin: 0 }}>
      <div
        style={{
          border: "1px solid var(--border-section)",
          borderRadius: "12px",
          background: "var(--bg-card)",
          padding: "1.5rem",
        }}
      >
        <div className="deriv-token-row deriv-token-head" style={{ paddingBottom: "0.75rem", borderBottom: "1px solid var(--border-section)" }}>
          {["01 · Core", "", "02 · Semantic", "", "03 · Used by blocks"].map((h, i) => (
            <p key={i} style={{ ...mono, fontSize: "11px", color: "var(--color-muted)", margin: 0 }}>{h}</p>
          ))}
        </div>
        {tokenFlows.map((f, i) => (
          <div
            key={f.core.name}
            className="deriv-token-row"
            style={{ padding: "1rem 0", borderBottom: i < tokenFlows.length - 1 ? "1px solid var(--border-section)" : "none" }}
          >
            <div style={cell}>
              {colLabel("Core")}
              <CoreChip token={f.core} />
            </div>
            {arrow}
            <div style={{ ...cell, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4px" }}>
              {colLabel("Semantic")}
              {f.semantic.map((name) => (
                <span
                  key={name}
                  style={{
                    ...mono,
                    fontSize: "12px",
                    maxWidth: "100%",
                    overflowWrap: "anywhere",
                  }}
                >
                  {name}
                </span>
              ))}
            </div>
            {arrow}
            <div style={cell}>
              {colLabel("Used by blocks")}
              <p style={{ ...body, fontSize: "13px", margin: 0, color: "var(--color-fg)" }}>{f.usedBy}</p>
            </div>
          </div>
        ))}
      </div>
      <figcaption style={caption}>
        How a value travels through the system, using the real button tokens. One core colour, slate.50, feeds three
        semantic tokens — change coral.700 once and every primary CTA across 6,000 pages follows.
      </figcaption>
    </figure>
  );
}

function Notes({ items }: { items: { title: string; detail: string }[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      {items.map((d) => (
        <div key={d.title} style={{ paddingLeft: "1.25rem", borderLeft: "1px solid var(--border-section)" }}>
          <h3 style={h3}>{d.title}</h3>
          <p style={{ ...body, margin: 0 }}>{d.detail}</p>
        </div>
      ))}
    </div>
  );
}

export default function DerivCaseStudy() {
  return (
    <main>
      <style>{`
        @media (max-width: 640px) {
          .cs-grid { grid-template-columns: 1fr !important; }
          .cs-meta { gap: 1.25rem !important; }
          .deriv-stats { grid-template-columns: repeat(2, 1fr) !important; }
          .deriv-layers { grid-template-columns: 1fr !important; }
          .deriv-token-row { grid-template-columns: 1fr !important; gap: 0.5rem !important; }
          .deriv-system-grid { grid-template-columns: 1fr !important; }
          .deriv-token-head { display: none !important; }
          .deriv-token-label { display: block !important; }
          .deriv-token-arrow { transform: rotate(90deg); width: 1rem; }
        }
        .deriv-token-row { display: grid; grid-template-columns: 1fr 1.5rem 1.3fr 1.5rem 1fr; gap: 1rem; align-items: center; }
        .deriv-token-label { display: none; }
        .dark .asset-bg { background: rgba(255,255,255,0.04) !important; }
      `}</style>
      <div className="container" style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
        <BackButton style={{ marginBottom: "2.5rem" }} />

        {/* Meta row */}
        <div className="cs-meta" style={{ display: "flex", gap: "3rem", flexWrap: "wrap", ...divider, paddingBottom: "2rem", marginBottom: "2.5rem" }}>
          {(
            [
              { label: "Year", value: "2024–2025" },
              { label: "Company", value: "Deriv" },
              { label: "Role", value: "Senior UI/UX Designer · Design owner" },
              { label: "Team", value: "5 web designers" },
              { label: "Live", links: [{ value: "deriv.com", href: "https://deriv.com" }, { value: "deriv.ae", href: "https://deriv.ae" }] },
            ] as { label: string; value?: string; links?: { value: string; href: string }[] }[]
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
              ) : (
                <p style={{ ...metaSmall, fontWeight: 500, color: "var(--color-fg)" }}>{item.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* Title */}
        <h1 style={pageTitle}>Rebuilding a 6,000-page trading platform as a system, not a site</h1>

        {/* Intro */}
        <div style={divider}>
          <p style={{ ...body, marginBottom: "1rem" }}>
            Deriv.com is a global trading platform serving 21 million monthly visitors in 18 languages. Over the years
            it had grown to more than 6,000 pages across the main site, the Academy and the UAE localisation — each
            with its own styling, its own navigation and its own idea of what a heading should look like.
          </p>
          <p style={{ ...body, marginBottom: "1rem" }}>
            The visible symptom was inconsistency. The real cost was speed.{" "}
            <span style={b}>A new page took three to five weeks,</span>{" "}because nearly every page was designed and
            built as a one-off, and nothing designed for one page could be trusted on the next.
          </p>
          <p style={body}>
            So the brief was never just a new look. It was a system that makes the right page the easy page: a
            three-layer token architecture, 40 blocks and 30+ components, designed in Figma and built end to end with
            Claude Code.{" "}
            <span style={b}>New pages now ship in two to three days, and engagement rose 25% across all eighteen languages.</span>
          </p>
        </div>

        {/* Stats */}
        <div style={divider}>
          <div className="deriv-stats" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
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

        {/* Before / After */}
        <div style={divider}>
          <h2 style={sectionTitle}>Before / After</h2>
          <div className="cs-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}>
            <div>
              <div style={{ borderRadius: "12px", background: "rgba(0,0,0,0.04)", padding: "1.5rem" }} className="asset-bg">
                <ScrollImage src="/images/projects/deriv/deriv-website.webp" />
              </div>
              <figcaption style={caption}>Before</figcaption>
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
              <figcaption style={caption}>After</figcaption>
            </div>
          </div>
        </div>

        {/* Thinking — audit */}
        <div style={divider}>
          <p style={{ ...sectionLabel, marginBottom: "0.75rem" }}>Thinking</p>
          <h2 style={sectionTitle}>Six thousand pages, seven kinds of page</h2>
          <p style={{ ...body, marginBottom: "1rem" }}>
            The work started with an audit rather than a moodboard. Every template across the three properties was
            inventoried and grouped by what the page was actually for, not what it happened to look like.
          </p>
          <p style={{ ...body, marginBottom: "2rem" }}>
            The result reframed the whole project. Beneath the visual noise, the 6,000 pages collapsed into seven page
            types — and those types were assembled from a few dozen recurring sections.{" "}
            <span style={b}>The problem wasn&apos;t 6,000 pages. It was forty patterns, each drawn a hundred different ways.</span>
          </p>
          <Figure
            src="/images/projects/deriv/page-templates.webp"
            caption="The seven page types the audit reduced the site to — landing, contact, business, legal, market, learning and product."
          />
        </div>

        {/* Thinking — constraints */}
        <div style={divider}>
          <h2 style={sectionTitle}>The constraints came before the canvas</h2>
          <p style={{ ...body, marginBottom: "2rem" }}>
            A trading platform isn&apos;t a marketing site with a nicer brief. Three constraints were set before any
            visual exploration, and every later decision was checked against them.
          </p>
          <Notes items={constraints} />
        </div>

        {/* Thinking — decisions */}
        <div style={divider}>
          <h2 style={sectionTitle}>Three decisions that shaped everything else</h2>
          <p style={{ ...body, marginBottom: "2rem" }}>
            Each of these had real alternatives. The choice was made on what would still hold at 6,000 pages and
            eighteen languages, not what looked best in a single mockup.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {decisions.map((d, i) => (
              <div
                key={d.title}
                style={{
                  border: "1px solid var(--border-item)",
                  borderRadius: "12px",
                  background: "var(--bg-card)",
                  padding: "1.5rem 1.75rem",
                }}
              >
                <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                  <span style={{ ...mono, fontSize: "12px", color: "var(--color-muted)", paddingTop: "4px", minWidth: "1.5rem" }}>
                    0{i + 1}
                  </span>
                  <div>
                    <h3 style={h3}>{d.title}</h3>
                    <p style={{ ...mono, fontSize: "11px", color: "var(--color-muted)", marginBottom: "10px" }}>{d.options}</p>
                    <p style={{ ...body, margin: 0 }}>{d.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Design — tokens */}
        <div style={divider}>
          <p style={{ ...sectionLabel, marginBottom: "0.75rem" }}>Design</p>
          <h2 style={sectionTitle}>Three layers, each with one job</h2>
          <p style={{ ...body, marginBottom: "2rem" }}>
            The token architecture follows the same principle as the rest of the system: every decision is made once,
            in one place. A colour is chosen at the core layer, given a meaning at the semantic layer, and used —
            never redefined — by the blocks.
          </p>
          <div className="deriv-layers" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "2rem" }}>
            {tokenLayers.map((t, i) => (
              <div
                key={t.layer}
                style={{
                  border: "1px solid var(--border-item)",
                  borderRadius: "12px",
                  background: "var(--bg-card)",
                  padding: "1.5rem",
                }}
              >
                <p style={{ ...mono, fontSize: "11px", color: "var(--color-muted)", marginBottom: "8px" }}>Layer 0{i + 1}</p>
                <h3 style={h3}>{t.layer}</h3>
                <p style={{ ...mono, fontSize: "11px", marginBottom: "12px" }}>{t.example}</p>
                <p style={{ ...body, fontSize: "13px", margin: 0 }}>{t.detail}</p>
              </div>
            ))}
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <TokenDiagram />
          </div>
          <p style={{ ...body, marginBottom: "2rem" }}>
            Type followed the same logic. One family, five heading levels, three breakpoints held as core tokens — mobile,
            tablet from 768 and desktop from 992. An H1 steps from 48 to 64 to 80 pixels, and every block inherits the step rather than setting its own size.{" "}
            <span style={b}>No block is allowed to have opinions about typography.</span>
          </p>
          <Figure
            src="/images/projects/deriv/responsive-type-scale.webp"
            caption="The responsive type scale — five heading levels across mobile, tablet and desktop, defined once as tokens."
          />
        </div>

        {/* Design — blocks */}
        <div style={divider}>
          <h2 style={sectionTitle}>Blocks, not pages</h2>
          <p style={{ ...body, marginBottom: "1rem" }}>
            Forty blocks cover every section the audit found, built from 30+ smaller components — buttons, badges,
            cards, tabs, accordions. A page is no longer designed; it&apos;s assembled, and the assembly can&apos;t
            produce an off-brand result because every piece is already on-brand.
          </p>
          <p style={{ ...body, marginBottom: "2rem" }}>
            Variation lives inside the blocks instead of around them. A single card component carries four surfaces —
            light, dark, brand and photographic — and two sizes. That one component replaced dozens of near-identical
            cards the audit found scattered across the site.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <Figure
              src="/images/projects/deriv/one-card-component.webp"
              caption="One card component, four surfaces and two sizes — variation designed in, not added page by page."
            />
            <Figure
              src="/images/projects/deriv/modular-component-library.webp"
              caption="The block library — hero, cards, FAQs, stats, testimonials and CTA sections, composed from shared components."
            />
          </div>
        </div>

        {/* Design — layout & localisation */}
        <div style={divider}>
          <h2 style={sectionTitle}>Designed for the longest word and the other direction</h2>
          <p style={{ ...body, marginBottom: "1rem" }}>
            Every block was designed at two extremes — 360 and 1440 — on a twelve-column grid, then pushed through
            the two hardest languages. German&apos;s compound words exposed any container with a fixed width.
            Arabic exposed any spacing written as left or right instead of start or end.
          </p>
          <p style={{ ...body, marginBottom: "2rem" }}>
            <span style={b}>Direction was treated as a property of the layout, not a separate design.</span>{" "}
            Spacing and alignment use logical properties throughout, so a block mirrors for right-to-left
            automatically — one design, eighteen languages, no locale forks to maintain.
          </p>
          <Figure
            src="/images/projects/deriv/layout-360-1440.webp"
            caption="A block at 360 and 1440 on the twelve-column grid — every block is designed at both extremes before it's built."
          />
        </div>

        {/* What the system covers */}
        <div style={divider}>
          <h2 style={sectionTitle}>Everything a page is made of</h2>
          <p style={{ ...body, marginBottom: "2rem" }}>
            A system is only as strong as its least-considered part. The audit found problems at every level, from
            one-off margins to three different navigation structures. So the scope covered all of it, in four layers.
            Each layer depends on the one before it.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {systemGroups.map((g, gi) => (
              <div
                key={g.title}
                style={{
                  border: "1px solid var(--border-section)",
                  borderRadius: "12px",
                  background: "var(--bg-card)",
                  padding: "1.5rem 1.75rem",
                }}
              >
                <p style={{ ...mono, fontSize: "11px", color: "var(--color-muted)", marginBottom: "8px" }}>0{gi + 1}</p>
                <h3 style={{ ...h3, fontSize: "22px" }}>{g.title}</h3>
                <p style={{ ...body, marginBottom: "1.5rem" }}>{g.intro}</p>
                <div className="deriv-system-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem 2rem" }}>
                  {g.items.map((it) => (
                    <div key={it.name} style={{ paddingLeft: "1rem", borderLeft: "1px solid var(--border-section)" }}>
                      <p style={{ ...metaSmall, fontWeight: 500, color: "var(--color-fg)", marginBottom: "4px" }}>{it.name}</p>
                      <p style={{ ...body, fontSize: "13px", margin: 0 }}>{it.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & workflow */}
        <div style={divider}>
          <p style={{ ...sectionLabel, marginBottom: "0.75rem" }}>Tools &amp; workflow</p>
          <h2 style={sectionTitle}>From Figma to production without a translation step</h2>
          <p style={{ ...body, marginBottom: "1rem" }}>
            The traditional handoff is where design systems quietly break. A designer specifies 24 pixels, a developer
            eyeballs 20, and after a hundred pages the system in Figma and the system in production are two different
            things.
          </p>
          <p style={{ ...body, marginBottom: "2rem" }}>
            This build removed the handoff. Figma stayed the place where design is decided; Claude Code became the
            place where it&apos;s built;{" "}
            <span style={b}>and Figma MCP connected the two so the design file is read, not reinterpreted.</span>
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "2rem" }}>
            {workflow.map((s, i) => (
              <div key={s.step} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                <span style={{ ...mono, fontSize: "12px", color: "var(--color-muted)", paddingTop: "4px", minWidth: "1.5rem" }}>
                  0{i + 1}
                </span>
                <div>
                  <h3 style={h3}>{s.step}</h3>
                  <p style={{ ...mono, fontSize: "11px", color: "var(--color-muted)", marginBottom: "8px" }}>{s.tool}</p>
                  <p style={{ ...body, margin: 0 }}>{s.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <p style={body}>
            The effect on speed came from the system, not the tools alone. Because every block already existed in both
            Figma and code, bound to the same tokens,{" "}
            <span style={b}>a new page stopped being a design-and-build project and became an assembly job</span>{" "}
            — which is how three to five weeks became two to three days.
          </p>
        </div>

        {/* Imagery */}
        <div style={divider}>
          <h2 style={sectionTitle}>Imagery held to the same standard as the interface</h2>
          <p style={{ ...body, marginBottom: "1rem" }}>
            A consistent interface next to inconsistent imagery still reads as inconsistent. So the 3D icons and
            photography got their own rules: a chrome-and-coral material language, a fixed light direction, and
            cropping that sits the object against the card edge so it works on every one of the four card surfaces.
          </p>
          <p style={{ ...body, marginBottom: "2rem" }}>
            Magnific was used to generate and refine the 3D icon set and lifestyle imagery, and to upscale every asset
            to hero-ready resolution —{" "}
            <span style={b}>so a single visual direction could scale across thousands of pages without a photoshoot for each one.</span>
          </p>
          <div className="cs-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}>
            <Figure
              src="/images/projects/deriv/3d-asset-guidelines.webp"
              caption="3D asset guidelines — material, colour and cropping rules that keep every icon consistent across card surfaces."
            />
            <div style={{ minWidth: 0, overflow: "hidden" }}>
              <AssetCarousel
                images={Array.from({ length: 10 }, (_, i) =>
                  `/images/projects/deriv/der-asset-${String(i + 1).padStart(2, "0")}.webp`
                )}
                size="200px"
              />
              <figcaption style={caption}>3D icon library — trading instruments, actions and brand symbols</figcaption>
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
              <figcaption style={caption}>Lifestyle photography — used across hero sections and product pages</figcaption>
            </div>
          </div>
        </div>

        {/* Team */}
        <div style={divider}>
          <h2 style={sectionTitle}>A system five designers could share</h2>
          <p style={{ ...body, marginBottom: "2rem" }}>
            A design system is only as consistent as the people using it. The structure around the library mattered as
            much as the library itself.
          </p>
          <Notes items={team} />
        </div>

        {/* Reflection — last content block, so no bottom rule above "Next" */}
        <div style={{ ...divider, borderBottom: "none", paddingBottom: 0, marginBottom: 0 }}>
          <h2 style={sectionTitle}>What would change next time</h2>
          <p style={{ ...body, marginBottom: "1rem" }}>
            The German-and-Arabic stress test worked, but it was manual. Automated visual checks across every locale
            from day one would have caught layout regressions in minutes instead of review rounds.
          </p>
          <p style={body}>
            And the content and SEO teams would join block definitions earlier. Several blocks were revised after
            launch once real copy lengths and heading needs arrived.{" "}
            <span style={b}>A block is only finished when it&apos;s been filled with real content, not placeholder text.</span>
          </p>
        </div>

        {/* Next project */}
        <div style={{ paddingTop: "3rem", marginTop: "3rem", borderTop: "1px solid var(--border-section)" }}>
          <p style={sectionLabel}>Next</p>
          <Link
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
          </Link>
        </div>

      </div>
    </main>
  );
}
