import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BackButton from "@/components/ui/BackButton";
import { ParallaxWrapper } from "@/components/ui/ParallaxImage";
import AssetCarousel from "@/components/ui/AssetCarousel";
import ScrollImage from "@/components/ui/ScrollImage";
import VideoSequence from "@/components/ui/VideoSequence";
import SegmentedTabs from "@/components/ui/SegmentedTabs";
import CaseStudyLock from "@/components/ui/CaseStudyLock";
import { hasCaseStudyAccess } from "@/lib/case-study-access";

export const metadata: Metadata = {
  title: "Deriv — Case Study",
  description:
    "Rebuilding Deriv.com — a 6,000-page global trading platform across 18 languages — on a token-based system of 40+ blocks and 30+ components, designed in Figma and built with Claude Code.",
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
const summary = [
  { label: "Problem", text: "6,000+ inconsistent pages, where every new page was a 3–5 week one-off." },
  { label: "Role", text: "Design owner end to end, working with a team of five web designers." },
  { label: "Approach", text: "A three-layer token system and 40+ blocks, designed in Figma and built with Claude Code through Figma MCP." },
  { label: "Outcome", text: "New pages in 1–2 days, and 25% higher engagement across 18 locales." },
];

const stats = [
  { value: "21M", label: "monthly visitors to Deriv.com" },
  { value: "6,000+", label: "pages rebuilt across deriv.com, the Academy and deriv.ae" },
  { value: "18", label: "locales served from one set of blocks" },
  { value: "40+", label: "blocks and 30+ components in one system" },
  { value: "+25%", label: "user engagement after launch" },
  { value: "1–2 days", label: "to ship a new page, down from 3–5 weeks" },
];

/* ── Everything a page is made of, grouped by layer ── */
const systemGroups: { tab: string; title: string; intro: string; items: { name: string; detail: string }[] }[] = [
  {
    tab: "Foundations",
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
          "Motion is defined by trigger. On scroll, sections and elements reveal as they enter the viewport. On hover, cards lift and buttons move through their hover tokens. On click, buttons give press feedback and accordions and tabs open. Shared durations and easing make every interaction feel like the same site.",
      },
    ],
  },
  {
    tab: "Structure",
    title: "Structural components",
    intro: "The frame every page sits in. It is the same on all three properties.",
    items: [
      {
        name: "Header & navigation",
        detail:
          "One navigation model replaced the separate structures on deriv.com, the Academy and deriv.ae. Moving between them no longer feels like switching websites.",
      },
      {
        name: "Heroes & above the fold",
        detail:
          "Hero variants with exactly one primary action and the risk warning in a reserved slot. On market pages the hero leads with the instrument, because that is what search visitors came for. Compliance copy is never pushed below the fold.",
      },
      {
        name: "Content sections",
        detail:
          "The 40+ blocks: features, cards, stats, market tables, FAQs, testimonials and CTAs. Each is defined once, with its layout, content slots and allowed variants.",
      },
      {
        name: "Footer",
        detail:
          "Footer tokens and a single component holding legal links, regulatory information and jurisdiction-specific disclaimers. The most compliance-sensitive part of the site is maintained in one place instead of 6,000.",
      },
    ],
  },
  {
    tab: "Interaction",
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
        detail: "Below the tablet breakpoint, dropdowns open as bottom sheets, and overlays hold dialogs.",
      },
      {
        name: "Tags & status",
        detail: "Labels for market state and content type, where colour always comes with text.",
      },
    ],
  },
  {
    tab: "Qualities",
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
          "Claude Code flags any colour pairing that fails WCAG AA contrast while tokens are being written, so the colour tokens only include pairings that pass. Every interactive state has a visible focus style, and the heading structure is semantic, which serves screen readers and search engines alike.",
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

/* ── How a value travels through the layers (token diagram) ──
 * Token names, slate values and coral.700 are real values from the Deriv tokens package; coral.800 is approximated. */
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

/* ── Figma → Figma MCP → Claude Code → review (pipeline diagram) ── */
const pipeline = [
  {
    title: "Figma frame",
    tool: "Figma",
    points: ["Auto layout at every level", "Every fill, gap and radius bound to a variable", "Layers named after the block's content slots"],
  },
  {
    title: "Figma MCP",
    tool: "Figma MCP",
    points: ["Reads the layout, not the pixels", "Passes variable names, not values", "Exposes component structure and variants"],
  },
  {
    title: "Claude Code",
    tool: "Claude Code",
    points: ["Builds the block against semantic tokens", "Flags raw values that have no token", "Flags colour pairings that fail WCAG AA"],
  },
  {
    title: "Browser review",
    tool: "Claude Code",
    points: ["Every breakpoint and every state", "German and Arabic", "Mismatches fixed at the source"],
  },
];

/* Real slate values from the tokens package; ratios measured against slate.50 (#FFFFFF). */
const pipelineChecks: { ok: boolean; code: string; note: string }[] = [
  { ok: true, code: "background: button.primary.background", note: "semantic token — accepted" },
  { ok: false, code: "color: #FF444F", note: "raw value with no token — flagged" },
  { ok: false, code: "text: slate.500 on slate.50", note: "4.13:1, fails WCAG AA for body text — flagged" },
  { ok: true, code: "text: slate.600 on slate.50", note: "6.2:1, passes — accepted" },
];

/* ── Where the system met pushback ── */
const pushback = [
  {
    tab: "Team",
    title: "Five designers, one library",
    concern:
      "Five designers used to owning the look of their own pages had every reason to design a one-off whenever the library didn't quite fit. That is exactly how the old site drifted.",
    resolution:
      "Design direction, tokens, block definitions and final review sat with one owner. New block proposals were reviewed in Figma against the existing library first. Most turned out to be a variant of something that already existed, which kept the library at just over 40 blocks instead of drifting past 100.",
  },
  {
    tab: "Compliance",
    title: "Compliance wanted a bigger risk warning",
    concern:
      "Compliance asked for a larger, more prominent risk warning on every page. That is reasonable for a regulated product, but at the proposed size it pushed the primary action below the fold on mobile.",
    resolution:
      "Instead of negotiating size page by page, the warning got a fixed, reserved slot in the hero and the footer, sized and positioned by the system. Compliance got a guarantee that it is always visible and can never be squeezed out by content. The hero kept its one primary action above the fold.",
  },
  {
    tab: "SEO",
    title: "SEO resisted changes to headings",
    concern:
      "The SEO team was wary of a redesign touching the heading structure of 6,000 ranking pages. On the old site, how headings looked and how the document was structured had drifted apart, and any change risked rankings.",
    resolution:
      "Heading level was separated from heading style. Every block takes its heading level as a setting, so a visually large title can still be an H2. The existing outline of each page was mapped and kept through the rebuild.",
  },
  {
    tab: "Engineering",
    title: "Engineering questioned the Figma MCP workflow",
    concern:
      "Developers doubted that code generated from design files could be production quality, and worried about reviewing code nobody had written by hand.",
    resolution:
      "The workflow was piloted on a handful of blocks first and compared against hand-built versions. The token-only rule made generated code easy to review, because any raw value or unknown token is flagged automatically. The pilot blocks became the reference for the rest.",
  },
  {
    tab: "Brand",
    title: "Brand guidelines had to become rules",
    concern:
      "The brand guidelines lived in documents: how coral should be used and how much of it, how imagery should feel. Across 6,000 pages, guidelines that depend on people remembering them drift.",
    resolution:
      "The guidelines were turned into tokens and rules the system enforces: coral reserved for action, the 3D material and cropping rules, and approved surface pairings. The brand team now reviews changes to tokens and blocks, not individual pages. That means fewer reviews, each with more impact.",
  },
];

function Figure({
  caption: text,
  src,
  width,
  height,
  padded,
}: {
  caption: string;
  src: string;
  width: number;
  height: number;
  padded?: boolean;
}) {
  return (
    <figure style={{ margin: 0 }}>
      <div
        style={{ borderRadius: "12px", overflow: "hidden", background: "rgba(0,0,0,0.04)", padding: padded ? "1.5rem" : 0 }}
        className="asset-bg"
      >
        <ParallaxWrapper>
          <Image
            src={src}
            alt={text}
            width={width}
            height={height}
            sizes="(max-width: 640px) 100vw, 1016px"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
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

function PipelineDiagram() {
  const arrow = (
    <span aria-hidden className="deriv-pipe-arrow" style={{ ...mono, color: "var(--color-muted)", textAlign: "center", alignSelf: "center" }}>
      →
    </span>
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
        <div className="deriv-pipe-row">
          {pipeline.map((stage, i) => (
            <div key={stage.title} style={{ display: "contents" }}>
              {i > 0 && arrow}
              <div style={{ minWidth: 0 }}>
                <p style={{ ...mono, fontSize: "11px", color: "var(--color-muted)", marginBottom: "6px" }}>
                  0{i + 1} · {stage.tool}
                </p>
                <h3 style={{ ...h3, marginBottom: "10px" }}>{stage.title}</h3>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                  {stage.points.map((pt) => (
                    <li key={pt} style={{ ...body, fontSize: "13px", lineHeight: 1.5 }}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <p style={{ ...mono, fontSize: "11px", color: "var(--color-muted)", margin: "1.25rem 0 0" }}>
          ↺ 04 → 01 · a mismatch goes back to where it started — Figma if the design was wrong, code if the build was
        </p>

        <div style={{ borderTop: "1px solid var(--border-section)", marginTop: "1.25rem", paddingTop: "1.25rem" }}>
          <p style={{ ...mono, fontSize: "11px", color: "var(--color-muted)", marginBottom: "10px" }}>What stage 03 checks</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {pipelineChecks.map((c) => (
              <div key={c.code} className="deriv-check-row">
                <span aria-label={c.ok ? "accepted" : "flagged"} style={{ ...mono, color: c.ok ? "var(--color-fg)" : "#FF444F" }}>
                  {c.ok ? "✓" : "✕"}
                </span>
                <span style={{ ...mono, fontSize: "12px", overflowWrap: "anywhere" }}>{c.code}</span>
                <span style={{ ...body, fontSize: "12px", lineHeight: 1.5 }}>{c.note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <figcaption style={caption}>
        The design-to-code pipeline. Nothing reaches a block as a raw value, which is why no block contains a hard-coded
        colour.
      </figcaption>
    </figure>
  );
}

type PanelItem = { name: string; meta?: string; detail: string };

/**
 * The one card style every tab panel uses: counter, serif title, optional intro, then
 * items with a hairline rule. Three-item panels get three columns so no row is left half empty.
 */
function TabPanel({
  counter,
  title,
  intro,
  items,
  columns = 2,
}: {
  counter: string;
  title: string;
  intro?: string;
  items: PanelItem[];
  columns?: 2 | 3;
}) {
  return (
    <div
      style={{
        border: "1px solid var(--border-section)",
        borderRadius: "12px",
        background: "var(--bg-card)",
        padding: "1.5rem clamp(1.25rem, 4vw, 1.75rem)",
      }}
    >
      <p style={{ ...mono, fontSize: "11px", color: "var(--color-muted)", marginBottom: "8px" }}>{counter}</p>
      <h3 style={{ ...h3, fontSize: "22px", marginBottom: intro ? "6px" : "1.5rem" }}>{title}</h3>
      {intro && <p style={{ ...body, marginBottom: "1.5rem" }}>{intro}</p>}
      <div
        className={columns === 3 ? "deriv-panel-grid deriv-panel-grid-3" : "deriv-panel-grid"}
        style={{ display: "grid", gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: "1.25rem 2rem" }}
      >
        {items.map((it) => (
          <div key={it.name} style={{ paddingLeft: "1rem", borderLeft: "1px solid var(--border-section)" }}>
            <p style={{ ...metaSmall, fontWeight: 500, color: "var(--color-fg)", marginBottom: it.meta ? "2px" : "4px" }}>
              {it.name}
            </p>
            {it.meta && (
              <p style={{ ...mono, fontSize: "11px", color: "var(--color-muted)", marginBottom: "6px" }}>{it.meta}</p>
            )}
            <p style={{ ...body, fontSize: "13px", margin: 0 }}>{it.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function BeforeAfterSection() {
  return (
    <div style={divider}>
      <h2 style={sectionTitle}>Before / After</h2>
      <SegmentedTabs
        ariaLabel="Before and after"
        defaultIndex={1}
        tabs={[
          {
            label: "Before",
            panel: (
              <div style={{ borderRadius: "12px", background: "rgba(0,0,0,0.04)", padding: "1.5rem" }} className="asset-bg">
                <ScrollImage src="/images/projects/deriv/deriv-website.webp" alt="The old Deriv.com homepage" />
              </div>
            ),
          },
          {
            label: "After",
            panel: (
              <div style={{ borderRadius: "12px", background: "rgba(0,0,0,0.04)", padding: "1.5rem" }} className="asset-bg">
                <VideoSequence
                  videos={[
                    "/images/projects/deriv/derv-video-1.mp4",
                    "/images/projects/deriv/derv-video-3.mp4",
                    "/images/projects/deriv/derv-video-4.mp4",
                  ]}
                />
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}

function ImagerySection() {
  return (
    <div style={divider}>
      <h2 style={sectionTitle}>Imagery held to the same standard as the interface</h2>
      <div className="deriv-split" style={{ marginBottom: "1.5rem" }}>
      <div>
      <p style={{ ...body, marginBottom: "1rem" }}>
        A consistent interface next to inconsistent imagery still reads as inconsistent. So the 3D icons and
        photography got their own rules: a chrome-and-coral material language, a fixed light direction, and
        cropping that sits the object against the card edge so it works on every one of the four card surfaces.
      </p>
      <p style={{ ...body, margin: 0 }}>
        Magnific was used to generate and refine the 3D icon set and lifestyle imagery, and to upscale every asset
        to hero-ready resolution —{" "}
        <span style={b}>so a single visual direction could scale across thousands of pages without a photoshoot for each one.</span>
      </p>
      </div>
        <Figure
          src="/images/projects/deriv/3d-asset-guidelines.webp"
          width={968}
          height={546}
          caption="3D asset guidelines: material, colour and cropping rules that hold on every card surface."
        />
      </div>
      <div className="cs-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}>
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
  );
}

/** The protected part of the case study — only rendered on the server once the password checks out. */
function ProcessSections() {
  return (
    <>
      <BeforeAfterSection />

      {/* Thinking — audit */}
      <div style={divider}>
        <p style={{ ...sectionLabel, marginBottom: "0.75rem" }}>Thinking</p>
        <h2 style={sectionTitle}>Six thousand pages, seven kinds of page</h2>
        <div className="deriv-split">
        <p style={{ ...body, margin: 0 }}>
          The work started with an audit rather than a moodboard. Every template across the three properties was
          grouped by what the page was for, not how it looked. Beneath the visual noise, the 6,000 pages collapsed
          into seven page types, built from a few dozen recurring sections.{" "}
          <span style={b}>The problem wasn&apos;t 6,000 pages. It was forty patterns, each drawn a hundred different ways.</span>
        </p>
        <Figure
          src="/images/projects/deriv/page-templates.webp"
          width={968}
          height={546}
          caption="The seven page types the audit reduced the site to."
        />
        </div>
      </div>

      {/* Thinking — users */}
      <div style={divider}>
        <h2 style={sectionTitle}>Most visitors never see the homepage</h2>
        <p style={{ ...body, marginBottom: "1rem" }}>
          The audit also looked at how people arrive. Analytics showed that most visitors land on market and product
          pages straight from search. They are traders looking up an instrument, not a brand, and many of them never
          open the homepage.
        </p>
        <p style={body}>
          That changed what a hero is for.{" "}
          <span style={b}>On market pages, the hero leads with the instrument — what it is and how to trade it — rather than the brand.</span>{" "}
          Brand storytelling moved to the pages people choose to visit, so the first screen after a search answers
          the question that brought the visitor there.
        </p>
      </div>

      {/* Thinking — constraints & decisions */}
      <div style={divider}>
        <h2 style={sectionTitle}>Three constraints, three decisions</h2>
        <p style={{ ...body, marginBottom: "2rem" }}>
          A trading platform isn&apos;t a marketing site with a nicer brief. Three constraints were set before any
          visual exploration. Three decisions were then made against them, each with real alternatives, and each
          chosen on what would still hold at 6,000 pages and eighteen locales.
        </p>
        <SegmentedTabs
          ariaLabel="Constraints and decisions"
          tabs={[
            {
              label: "Constraints",
              panel: (
                <TabPanel
                  counter="01 / 02"
                  title="Set before any visual work"
                  items={constraints.map((c) => ({ name: c.title, detail: c.detail }))}
                  columns={3}
                />
              ),
            },
            {
              label: "Decisions",
              panel: (
                <TabPanel
                  counter="02 / 02"
                  title="Chosen on what holds at scale"
                  items={decisions.map((d) => ({ name: d.title, meta: d.options, detail: d.detail }))}
                  columns={3}
                />
              ),
            },
          ]}
        />
      </div>

      {/* Design — tokens */}
      <div style={divider}>
        <p style={{ ...sectionLabel, marginBottom: "0.75rem" }}>Design</p>
        <h2 style={sectionTitle}>Three layers, each with one job</h2>
        <p style={{ ...body, marginBottom: "2rem" }}>
          Every decision is made once, in one place. A colour is chosen at the core layer, given a role at the
          semantic layer, and used, never redefined, by the blocks. Semantic tokens are named by component and state,
          and{" "}
          <span style={b}>a block that reads a core value directly is treated as a bug.</span>
        </p>
        <p style={{ ...body, marginBottom: "2rem" }}>
          Type followed the same logic. One family, five heading levels, three breakpoints held as core tokens — mobile,
          tablet from 768 and desktop from 992. An H1 steps from 48 to 64 to 80 pixels, and every block inherits the step rather than setting its own size.{" "}
          <span style={b}>No block is allowed to have opinions about typography.</span>
        </p>
        <SegmentedTabs
          ariaLabel="Token diagram and type scale"
          tabs={[
            { label: "Colour tokens", panel: <TokenDiagram /> },
            {
              label: "Type scale",
              panel: (
                <Figure
                  src="/images/projects/deriv/responsive-type-scale.webp"
                  width={5440}
                  height={3060}
                  caption="The responsive type scale — five heading levels across mobile, tablet and desktop, defined once as tokens."
                />
              ),
            },
          ]}
        />
      </div>

      {/* Design — blocks */}
      <div style={divider}>
        <h2 style={sectionTitle}>Blocks, not pages</h2>
        <p style={{ ...body, marginBottom: "1rem" }}>
          More than 40 blocks cover every section the audit found, built from 30+ smaller components — buttons, badges,
          cards, tabs, accordions. A page is no longer designed; it&apos;s assembled, and the assembly can&apos;t
          produce an off-brand result because every piece is already on-brand.
        </p>
        <p style={{ ...body, marginBottom: "1rem" }}>
          Variation lives inside the blocks instead of around them. The audit found dozens of near-identical cards
          scattered across the site, and they were simplified into four card structures. Each comes in four
          surfaces (light, dark, brand and photographic) and two sizes, so a page team picks a variant instead of
          drawing a new card.
        </p>
        <p style={{ ...body, marginBottom: "2rem" }}>
          Every block was also designed at two extremes, 360 and 1440, on the twelve-column grid, then pushed
          through German and Arabic.{" "}
          <span style={b}>Direction is a property of the layout, not a separate design.</span>{" "}
          Logical properties mirror each block for right-to-left automatically, so eighteen locales run from one set
          of blocks.
        </p>
        <SegmentedTabs
          ariaLabel="Blocks and layout"
          tabs={[
            {
              label: "Cards",
              panel: (
                <Figure
                  src="/images/projects/deriv/one-card-component.webp"
                  width={1208}
                  height={666}
                  caption="One of the four card structures: four surfaces and two sizes, with variation designed in rather than added page by page."
                />
              ),
            },
            {
              label: "Library",
              panel: (
                <Figure
                  src="/images/projects/deriv/modular-component-library.webp"
                  width={2720}
                  height={1530}
                  caption="The block library — hero, cards, FAQs, stats, testimonials and CTA sections, composed from shared components."
                />
              ),
            },
            {
              label: "Grid",
              panel: (
                <Figure
                  src="/images/projects/deriv/layout-360-1440.webp"
                  width={2720}
                  height={1530}
                  caption="A block at 360 and 1440 on the twelve-column grid. Every block is designed at both extremes before it's built."
                />
              ),
            },
          ]}
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
        <SegmentedTabs
          ariaLabel="System layers"
          tabs={systemGroups.map((g, gi) => ({
            label: g.tab,
            panel: <TabPanel counter={`0${gi + 1} / 04`} title={g.title} intro={g.intro} items={g.items} />,
          }))}
        />
      </div>

      {/* Tools & workflow */}
      <div style={divider}>
        <p style={{ ...sectionLabel, marginBottom: "0.75rem" }}>Tools &amp; workflow</p>
        <h2 style={sectionTitle}>From Figma to production without a translation step</h2>
        <p style={{ ...body, marginBottom: "2rem" }}>
          Handoff is where design systems quietly break: a designer specifies 24 pixels, a developer eyeballs 20. This
          build removed the handoff. Figma is where design is decided, Claude Code is where it&apos;s built,{" "}
          <span style={b}>and Figma MCP connects the two so the design file is read, not reinterpreted.</span>
        </p>

        <div style={{ marginBottom: "2.5rem" }}>
          <PipelineDiagram />
        </div>

        <p style={{ ...body, marginBottom: "2rem" }}>
          Figma variables mirror the token layers name for name. The output ships as versioned packages: tokens
          compile from JSON into one tokens.css, and components, icons and Lottie live in one monorepo, documented in
          Storybook. Claude handled the sorting work, such as synthesising the audit, grouping URLs into page types
          and drafting documentation.
        </p>

        <div style={{ paddingLeft: "1.25rem", borderLeft: "1px solid var(--border-section)", marginBottom: "2rem" }}>
          <h3 style={h3}>Where judgement still mattered</h3>
          <p style={{ ...body, margin: 0 }}>
            The pipeline is only as good as the frame it reads. Unbound values got approximated, and missing tokens
            got plausible-sounding inventions, which is why both are flagged rather than accepted. Right-to-left
            also needed a human eye: arrows should mirror, but logos and play buttons should not.
          </p>
        </div>

        <p style={body}>
          Because every block already existed in both Figma and code, bound to the same tokens,{" "}
          <span style={b}>a new page stopped being a design-and-build project and became an assembly job.</span>{" "}
          That is how three to five weeks became one to two days.
        </p>
      </div>

      <ImagerySection />

      {/* Pushback — last content block, so no bottom rule above "Next" */}
      <div style={{ ...divider, borderBottom: "none", paddingBottom: 0, marginBottom: 0 }}>
        <h2 style={sectionTitle}>Where the system met pushback</h2>
        <p style={{ ...body, marginBottom: "2rem" }}>
          Every group with a stake in the site, the design team included, had a reason to resist a system that took
          decisions away from individual pages. The work was in turning each concern into something the system
          could guarantee.
        </p>
        <SegmentedTabs
          ariaLabel="Team and stakeholder pushback"
          tabs={pushback.map((pb, i) => ({
            label: pb.tab,
            panel: (
              <TabPanel
                counter={`0${i + 1} / 0${pushback.length}`}
                title={pb.title}
                items={[
                  { name: "The concern", detail: pb.concern },
                  { name: "The resolution", detail: pb.resolution },
                ]}
              />
            ),
          }))}
        />
      </div>
    </>
  );
}

/**
 * What a visitor without the password sees after the stats: a glimpse of the next section
 * (a public image of the live site) fading into the page, with the lock card on top of the fade.
 */
function LockedPreview() {
  return (
    <div>
      <div style={{ position: "relative", maxHeight: "440px", overflow: "hidden" }}>
        <div inert aria-hidden style={{ pointerEvents: "none", userSelect: "none" }}>
          <h2 style={sectionTitle}>Before / After</h2>
          <div style={{ borderRadius: "12px", overflow: "hidden", lineHeight: 0 }}>
            <Image
              src="/images/home/projects/deriv.webp"
              alt=""
              width={2560}
              height={1441}
              sizes="(max-width: 640px) 100vw, 1016px"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, transparent 0%, var(--color-bg) 88%)",
          }}
        />
      </div>
      <div style={{ position: "relative", marginTop: "clamp(-200px, -24vw, -72px)", display: "flex", justifyContent: "center" }}>
        <CaseStudyLock requestSubject="Access request: Deriv case study" />
      </div>
    </div>
  );
}

export default async function DerivCaseStudy() {
  const unlocked = await hasCaseStudyAccess();

  return (
    <main>
      <style>{`
        @media (max-width: 640px) {
          .cs-grid { grid-template-columns: 1fr !important; }
          .cs-meta { gap: 1.25rem !important; }
          .deriv-stats { grid-template-columns: repeat(2, 1fr) !important; }
          .deriv-token-row { grid-template-columns: 1fr !important; gap: 0.5rem !important; }
          .deriv-panel-grid { grid-template-columns: 1fr !important; }
          .deriv-split { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .deriv-summary { grid-template-columns: 1fr 1fr !important; }
          .deriv-pipe-row { grid-template-columns: 1fr !important; gap: 0.75rem !important; }
          .deriv-pipe-arrow { transform: rotate(90deg); width: 1rem; justify-self: start; }
          .deriv-check-row { grid-template-columns: 1.25rem 1fr !important; }
          .deriv-check-row > :last-child { grid-column: 2; }
          .deriv-token-head { display: none !important; }
          .deriv-token-label { display: block !important; }
          .deriv-token-arrow { transform: rotate(90deg); width: 1rem; }
        }
        .deriv-token-row { display: grid; grid-template-columns: 1fr 1.5rem 1.3fr 1.5rem 1fr; gap: 1rem; align-items: center; }
        .deriv-token-label { display: none; }
        @media (max-width: 900px) { .deriv-panel-grid-3 { grid-template-columns: 1fr !important; } }
        .deriv-split { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: center; }
        .deriv-pipe-row { display: grid; grid-template-columns: 1fr 1.25rem 1fr 1.25rem 1fr 1.25rem 1fr; gap: 1rem; }
        .deriv-check-row { display: grid; grid-template-columns: 1.25rem minmax(0, 1.2fr) minmax(0, 1fr); gap: 0.25rem 0.75rem; align-items: baseline; }
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

        {/* Summary — for readers who skim */}
        <div className="deriv-summary" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem", ...divider, paddingBottom: "2.5rem", marginBottom: "2.5rem" }}>
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
            Deriv.com is a global trading platform serving{" "}
            <span style={b}>21 million monthly visitors.</span>{" "}Over the years it had grown to
            more than 6,000 pages across the main site, the Academy and the UAE localisation, each with its own styling
            and its own navigation.{" "}
            <span style={b}>Nothing designed for one page could be trusted on the next,</span>{" "}so the brief was never
            just a new look. It was a system that makes the right page the easy page.
          </p>
        </div>

        {/* Stats */}
        <div style={divider}>
          <div className="deriv-stats" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem 1.5rem" }}>
            {stats.map((s) => (
              <div key={s.label}>
                <p
                  style={{
                    fontFamily: "var(--font-fraunces), Georgia, serif",
                    fontSize: "clamp(2rem, 4vw, 2.75rem)",
                    fontWeight: 300,
                    lineHeight: 1,
                    whiteSpace: "nowrap",
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

        {/* Everything after the stats is locked: verified visitors get the full process,
            everyone else gets a faded preview with the lock card on top. */}
        {unlocked ? <ProcessSections /> : <LockedPreview />}

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
