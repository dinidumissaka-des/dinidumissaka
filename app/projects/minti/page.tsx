import type { Metadata } from "next";
import BackButton from "@/components/ui/BackButton";

export const metadata: Metadata = {
  title: "Minti — Case Study",
  description:
    "Designing and building Minti — a personal spending tracker for young adults who want to understand where their money is going.",
};

const sectionLabel: React.CSSProperties = {
  fontFamily: "var(--font-manrope), sans-serif",
  fontSize: "12px",
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
  maxWidth: "800px",
};

const sectionTitle: React.CSSProperties = {
  fontFamily: "var(--font-fraunces), Georgia, serif",
  fontSize: "32px",
  fontWeight: 300,
  lineHeight: 1.1,
  color: "var(--color-fg)",
  marginBottom: "2rem",
};

const proseHeading: React.CSSProperties = {
  fontFamily: "var(--font-fraunces), Georgia, serif",
  fontSize: "18px",
  fontWeight: 300,
  lineHeight: 1.2,
  color: "var(--color-fg)",
  marginBottom: "1.25rem",
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

export default function MintiCaseStudy() {
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
            { label: "Role", value: "Designer & Builder" },
            { label: "Type", value: "PWA · Mobile-first" },
            { label: "Live", value: "minti.one", href: "https://minti.one" },
          ].map((item) => (
            <div
              key={item.label}
              style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px" }}
            >
              <p style={sectionLabel}>{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...metaSmall,
                    fontWeight: 500,
                    color: "var(--color-fg)",
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                  }}
                >
                  {item.value}
                </a>
              ) : (
                <p style={{ ...metaSmall, fontWeight: 500, color: "var(--color-fg)" }}>
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Title */}
        <h1 style={pageTitle}>
          A spending tracker built for reflection, not automation
        </h1>

        {/* Intro */}
        <div style={divider}>
          <div style={{ maxWidth: "720px" }}>
            <p style={{ ...body, marginBottom: "1rem" }}>
              Minti is a personal spending tracker for young adults who want to
              understand where their money is going — not automate it away. Log
              what you spend, set a monthly limit, track your subscriptions, and
              see your average daily spend. That's it.{" "}
              <span style={b}>
                Designed and built entirely with Claude Code — no Figma
              </span>
              , from initial concept through to the final UI.
            </p>
            <p style={body}>
              It's a personal project, currently in build. No real users yet —
              the goal right now is to make it feel like a proper, well-crafted
              app. Every decision is made with that standard in mind.
            </p>
          </div>
        </div>

        {/* The problem */}
        <div style={divider}>
          <h2 style={sectionTitle}>The problem</h2>
          <div
            className="cs-prose-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}
          >
            <div>
              <p style={{ ...body, marginBottom: "1rem" }}>
                Most of us have no idea what we actually spend in a month. We
                know roughly what goes out in rent and bills — but the daily
                coffees, the impulse purchases, the streaming services we forgot
                we signed up for? We subscribe to so many things now that
                tracking them feels impossible. Most people don't even try.
              </p>
              <p style={body}>
                The apps that exist either connect to your bank and automate
                everything — which removes the moment of reflection entirely —
                or are so complex that you need to be a spreadsheet person to
                use them. There's nothing in between: simple, intentional, and
                designed to make you think.
              </p>
            </div>
            <p
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 1.3,
                color: "var(--color-fg)",
              }}
            >
              Automation would defeat the point. The act of manually logging
              what you spent is the moment of reflection.
            </p>
          </div>
        </div>

        {/* Product thinking */}
        <div style={divider}>
          <h2 style={sectionTitle}>Product thinking</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>

            <div
              className="cs-prose-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}
            >
              <div>
                <h2 style={proseHeading}>Manual entry as a feature, not a limitation</h2>
                <p style={{ ...body, marginBottom: "1rem" }}>
                  Every finance app tries to remove friction from tracking.
                  Minti adds it back — deliberately.{" "}
                  <span style={b}>You have to type in what you spent.</span>{" "}
                  That five seconds is a micro-moment of financial awareness.
                  Done daily, it compounds into a habit of reflection. The
                  design supports this: the add expense action is always one tap
                  away, the flow is three fields and done.
                </p>
                <p style={body}>
                  The daily notification reinforces it: a prompt at the end of
                  the day to log what you spent. Not a summary — a reminder.
                  The app doesn't know what you spent. You have to tell it.
                  That's the point.
                </p>
              </div>
              <ImagePlaceholder caption="Add expense flow — three fields, one tap away, always" />
            </div>

            <div
              className="cs-prose-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}
            >
              <div>
                <h2 style={proseHeading}>What the app actually does</h2>
                <p style={{ ...body, marginBottom: "1rem" }}>
                  Set a monthly spending limit. Log daily expenses as you go.
                  Add subscriptions separately so they're visible as a category,
                  not buried in the noise. See your average daily spend
                  including subscriptions so you know what a normal day actually
                  costs you — not just what you think it costs.
                </p>
                <p style={body}>
                  The subscription view exists because we sign up for things and
                  forget. Netflix, Spotify, gym, cloud storage, productivity
                  tools — they leave quietly every month. Minti makes them
                  visible in one place.
                </p>
              </div>
              <ImagePlaceholder caption="Budget progress bar, subscriptions view, and daily spend stats" />
            </div>

          </div>
        </div>

        {/* Design system */}
        <div style={divider}>
          <h2 style={sectionTitle}>Design system</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>

            <div
              className="cs-prose-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}
            >
              <div>
                <h2 style={proseHeading}>Glassmorphism as UX logic</h2>
                <p style={{ ...body, marginBottom: "1rem" }}>
                  The UI is built on a custom glassmorphism system — no
                  off-the-shelf component library. Translucent cards on a moving
                  WebGL background create depth without shadow — they communicate
                  elevation through material, not colour alone. The card is in
                  front; you know you can touch it.
                </p>
                <p style={body}>
                  One accent: #9FE870 (lime green), used exclusively for primary
                  actions. Nothing else gets it. Every other interactive element
                  uses a muted surface or the danger red. The constraint forces
                  clarity — if it's green, it's the thing to do next.
                </p>
              </div>
              <ImagePlaceholder caption="Glass surface components — expense row, subscription card, and budget bar against the animated WebGL background" />
            </div>

            <div
              className="cs-prose-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}
            >
              <div>
                <h2 style={proseHeading}>Type and grid</h2>
                <p style={{ ...body, marginBottom: "1rem" }}>
                  All type is set in Manrope — geometric, legible at small sizes
                  on dark, available in enough weights to create hierarchy without
                  switching families.{" "}
                  <span style={b}>
                    Numbers at weight 700. Labels at 500. Body at 400.
                  </span>{" "}
                  The weight difference carries the hierarchy so colour doesn't
                  have to.
                </p>
                <p style={body}>
                  The grid is a 4px base, 8px increments for spacing, 16px for
                  margins and horizontal rhythm. Everything snaps. On a 390px
                  screen used daily, a misaligned element by even 2px reads as
                  wrong. The grid is what makes the visual polish hold over time,
                  not just in the hero screenshot.
                </p>
              </div>
              <ImagePlaceholder caption="Design system — colour palette, Manrope type scale with weights, and 4px spacing tokens" />
            </div>

            <div style={{ maxWidth: "640px" }}>
              <h2 style={proseHeading}>No Figma</h2>
              <p style={body}>
                All design decisions — component structure, visual language,
                spacing, interaction patterns — were made directly in Claude Code
                and iterated in the browser. This forced a different kind of
                design rigour: every decision had to be specific enough to
                implement immediately, and every visual judgement was made in the
                real medium, not a mock-up.
              </p>
            </div>

          </div>
        </div>

        {/* Cross-platform */}
        <div style={divider}>
          <h2 style={sectionTitle}>Cross-platform design</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>

            <div
              className="cs-prose-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}
            >
              <div>
                <h2 style={proseHeading}>iOS</h2>
                <p style={body}>
                  Swipe gestures follow the iOS HIG pattern — right-to-left
                  swipe on list rows for destructive actions. Haptic feedback
                  fires at the gesture trigger threshold via the Web Vibration
                  API, matching the native feel. Bottom navigation follows Apple
                  convention. All inputs use 16px minimum font size to prevent
                  the browser from auto-zooming on focus.
                </p>
              </div>
              <ImagePlaceholder caption="iOS — swipe gesture sequence and bottom navigation" />
            </div>

            <div
              className="cs-prose-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}
            >
              <div>
                <h2 style={proseHeading}>Android</h2>
                <p style={body}>
                  Tap targets meet the 48px minimum per Material spec. The app
                  is compatible with Android's system back gesture — no conflicts
                  with the swipe-to-reveal interaction because the reveal swipe
                  is horizontal and the system back gesture is edge-initiated.
                  Bottom navigation is consistent with Material 3.
                </p>
              </div>
              <ImagePlaceholder caption="Android — tap targets and gesture zones" />
            </div>

            <div
              className="cs-prose-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}
            >
              <div>
                <h2 style={proseHeading}>Web / PWA</h2>
                <p style={body}>
                  Full keyboard navigation with visible focus states throughout.
                  A PWA install prompt appears for first-time browser visitors.
                  Offline state is handled explicitly — a clear indicator when
                  the connection drops rather than a silent failure. The browser
                  experience is mobile-first and honest about it: no desktop
                  layout that pretends to be something the product isn't designed
                  for.
                </p>
              </div>
              <ImagePlaceholder caption="PWA — install prompt on first visit and offline indicator state" />
            </div>

          </div>
        </div>

        {/* UX decisions */}
        <div style={divider}>
          <h2 style={sectionTitle}>UX decisions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>

            <div
              className="cs-prose-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}
            >
              <div>
                <h2 style={proseHeading}>Swipe to reveal</h2>
                <p style={{ ...body, marginBottom: "1rem" }}>
                  Persistent action buttons on every expense row would create
                  visual noise in a list read daily. Swipe gestures are invisible
                  by default — so the question became: how do you make a hidden
                  gesture feel found, not accidentally triggered?
                </p>
                <p style={body}>
                  The answer: haptic feedback at the trigger threshold. The
                  moment the swipe reaches the reveal point, the device pulses.
                  That pulse turns a discovered gesture into a confirmed one —
                  the user knows something is about to happen before the actions
                  appear.
                </p>
              </div>
              <ImagePlaceholder caption="Swipe gesture — resting, mid-swipe with haptic trigger point, revealed actions" />
            </div>

            <div
              className="cs-prose-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}
            >
              <div>
                <h2 style={proseHeading}>Budget progress states</h2>
                <p style={body}>
                  The budget bar has three states: under (calm), approaching
                  (amber), over (red with weight increase to 700).{" "}
                  <span style={b}>
                    Colour alone would fail for colour-blind users — the weight
                    change carries the state independently.
                  </span>{" "}
                  The number itself becomes heavier as the situation becomes more
                  serious.
                </p>
              </div>
              <ImagePlaceholder caption="Budget bar — under, approaching, and over limit. Colour and weight change together." />
            </div>

            <div
              className="cs-prose-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}
            >
              <div>
                <h2 style={proseHeading}>Category picker animation</h2>
                <p style={body}>
                  The GSAP scatter animation on the category picker isn't
                  decoration. Categories appear from the tap point — where
                  attention already is. The animation draws the eye to where the
                  next action happens, not away from it. It adds delight without
                  adding time to the interaction.
                </p>
              </div>
              <ImagePlaceholder caption="Category picker — GSAP scatter animation from tap origin" />
            </div>

          </div>
        </div>

        {/* What's next */}
        <div>
          <div style={{ maxWidth: "640px" }}>
            <h2 style={sectionTitle}>Status and what's next</h2>
            <p style={{ ...body, marginBottom: "1rem" }}>
              Minti is currently in build — no real users yet. The goal at this
              stage is to get the product to a standard where it genuinely looks
              and feels like a well-made app. Every screen, every interaction,
              every edge state handled properly.
            </p>
            <p style={body}>
              Next: onboarding flow (the manual-entry philosophy needs to be
              introduced, not assumed), and a proper first-run experience that
              explains the daily notification before it fires. After that —
              shared spending for couples or housemates, which is the most
              obvious natural extension of the model.
            </p>
          </div>

          {/* Live link */}
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
            <a
              href="https://minti.one"
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
              minti.one
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
