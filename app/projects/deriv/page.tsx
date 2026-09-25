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
  { value: "18", label: "languages, including Arabic right-to-left" },
  { value: "40", label: "blocks and 30+ components in one system" },
  { value: "2–3 days", label: "to ship a new page, down from 3–5 weeks" },
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
    options: "Core · semantic · component · template  →  Primitive · semantic · blocks",
    detail:
      "An earlier model added a component layer between semantic tokens and templates. In practice it doubled the names to maintain while almost never being overridden. Removing it meant blocks read semantic tokens directly, and a theme change touched one layer instead of three.",
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
    layer: "Primitive",
    example: "red-500 · navy-900 · space-16",
    detail: "Raw values with no meaning attached. The only place a hex code or pixel value is allowed to live.",
  },
  {
    layer: "Semantic",
    example: "surface-brand · text-on-dark · gap-section",
    detail: "Intent, not appearance. Light and dark mode are resolved entirely here, so nothing downstream knows which mode it is in.",
  },
  {
    layer: "Blocks & templates",
    example: "hero · feature-cards · market-table",
    detail: "Assemblies that consume semantic tokens only. A block that references a primitive is treated as a bug.",
  },
];

/* ── The design-to-code workflow ── */
const workflow = [
  {
    step: "Ideate and decide in Figma",
    tool: "Figma",
    detail:
      "Explorations, page flows and visual direction happened in Figma first. Variables in the file mirror the primitive and semantic token layers, with light and dark as modes — so a design decision is already a token decision before any code exists.",
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
      "Each block is checked at 360 and 1440, in light and dark, in German and in Arabic. Differences are fixed at the source — in Figma if the design was wrong, in code if the build was — so the two never drift apart.",
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
        }
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
            <span style={b}>New pages now ship in two to three days.</span>
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
            in one place. A colour is chosen at the primitive layer, given a meaning at the semantic layer, and used —
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
          <p style={{ ...body, marginBottom: "2rem" }}>
            Type followed the same logic. One family, five heading levels, three breakpoints — an H1 steps from 48 to
            64 to 80 pixels, and every block inherits the step rather than setting its own size.{" "}
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
