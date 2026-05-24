import type { Metadata } from "next";
import BackButton from "@/components/ui/BackButton";

export const metadata: Metadata = {
  title: "Planr — Case Study",
  description:
    "Designing and building Planr — a SaaS platform connecting homeowners with verified architects and construction specialists in Sri Lanka.",
};

// ── Styles follow DESIGN.md spec ──────────────────────────────

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

function ImagePlaceholder({ caption, bg }: { caption: string; bg?: string }) {
  return (
    <figure style={{ margin: 0 }}>
      <div
        style={{
          width: "100%",
          aspectRatio: "16 / 9",
          borderRadius: "12px",
          border: "1px dashed var(--border-section)",
          background: bg ?? "var(--bg-subtle)",
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

function UserCard({ role, pain, consequence }: { role: string; pain: string; consequence: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <h4 style={{ ...sectionLabel, letterSpacing: "0.06em", margin: 0 }}>{role}</h4>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <p style={{ ...body, fontSize: "13px" }}>
          <span style={{ fontWeight: 600 }}>Pain: </span>
          {pain}
        </p>
        <p style={{ ...body, fontSize: "13px" }}>
          <span style={{ fontWeight: 600 }}>Consequence: </span>
          {consequence}
        </p>
      </div>
    </div>
  );
}

export default function PlanrCaseStudy() {
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
            { label: "Year", value: "2025 – ongoing" },
            { label: "Role", value: "Designer & Developer" },
            { label: "Type", value: "SaaS · MVP · Full-stack" },
            { label: "Live", value: "buildinghelp.app", href: "https://buildinghelp.app" },
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
          Designing and building a platform for the construction market
        </h1>

        {/* Intro */}
        <div style={divider}>
          <div style={{ maxWidth: "720px" }}>
            <p style={{ ...body, marginBottom: "1rem" }}>
              Planr is built for two groups who are underserved by the Sri Lankan
              construction market:{" "}
              <span style={b}>Sri Lankans living abroad and overseas investors</span>{" "}
              who want to build or invest back home but can't manage it from the
              ground, and young professionals earning abroad who have
              the income and the intent but no idea where to begin. I designed and
              built the platform alongside two collaborators, covering the marketing
              site, <span style={b}>dual-role SaaS product</span> (clients and
              consultants), booking system, AI-powered Q&A, and the design system
              underpinning all of it.
            </p>
            <p style={body}>
              This is an ongoing personal project. I started it to push my skills
              in AI-assisted product building —{" "}
              <span style={b}>designing and shipping a full-stack product in parallel
              rather than in sequence</span>. It's currently in early access: anyone
              can sign up and test the platform, and we're actively building toward
              the first real user cohort.
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
                The construction market in Sri Lanka runs entirely on trust and
                physical presence.{" "}
                <span style={b}>If you're overseas, you can't meet anyone in person
                — and there's no single place to find verified experts.</span> No
                directory, no way to check credentials or availability remotely, no
                infrastructure for making a confident hiring decision from abroad.
              </p>
              <p style={body}>
                For younger earners approaching it for the first time,
                the barrier is even higher — they have the income
                and the intent, but no framework for where to even start. No
                trusted source to explain the process, no way to find the right
                professionals, no way to get basic questions answered before
                committing to anything.
              </p>
            </div>
            <p style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.3,
              color: "var(--color-fg)",
            }}>
              We asked ourselves: what's the job of this platform, really? Our
              answer: reduce the distance between a decision and a booking.
            </p>
          </div>
        </div>

        {/* Users */}
        <div style={divider}>
          <h2 style={sectionTitle}>Users</h2>
          <div
            className="cs-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2rem" }}
          >
            <UserCard
              role="CLIENT"
              pain="Wants to build or invest in Sri Lanka from abroad — no starting point, can't meet experts in person, no single place to find verified specialists or get basic questions answered without committing to a consultation."
              consequence="Plans stall before they begin. Distance, unfamiliarity with the market, and no trusted entry point mean most people give up or rely on whoever they happen to know."
            />
            <UserCard
              role="CONSULTANT"
              pain="Depend entirely on referrals and word of mouth for new clients."
              consequence="Inconsistent pipeline, no way to manage or grow a practice digitally."
            />
          </div>
          <div
            className="cs-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}
          >
            <ImagePlaceholder caption="Client dashboard — upcoming consultations, AI nudge, project overview" />
            <ImagePlaceholder caption="Consultant dashboard — booking requests and incoming sessions" bg="#003618" />
          </div>
        </div>

        {/* Key features */}
        <div style={divider}>
          <h2 style={sectionTitle}>Key features</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>

            <div
              className="cs-prose-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}
            >
              <div>
                <h2 style={proseHeading}>Booking + real-time availability</h2>
                <p style={body}>
                  Clients browse consultant profiles filtered by specialisation,
                  then pick from live availability slots. The booking is confirmed
                  with a real-time check —{" "}
                  <span style={b}>no double-booking, no back-and-forth over
                  WhatsApp</span> to agree a time.
                </p>
              </div>
              <ImagePlaceholder caption="Browse, pick a slot, confirm — real-time availability, no WhatsApp negotiation" />
            </div>

            <div
              className="cs-prose-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}
            >
              <div>
                <h2 style={proseHeading}>Planr AI — on-demand answers</h2>
                <p style={body}>
                  Clients ask architecture, permit, cost, and timeline questions
                  and get streamed answers from Claude Haiku in real time. For
                  someone new to the process, the AI is{" "}
                  <span style={b}>the entry point before they even know what to
                  ask a consultant</span>. For returning clients, it fills the
                  gap between sessions. Either way, it's positioned as{" "}
                  <span style={b}>a first-responder, not a replacement</span> —
                  it answers immediately, human consultants answer with depth.
                </p>
              </div>
              <ImagePlaceholder caption="Planr AI — answers immediately. Consultants answer with depth." />
            </div>

            <div
              className="cs-prose-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}
            >
              <div>
                <h2 style={proseHeading}>Command palette (Cmd+K)</h2>
                <p style={body}>
                  Global search and navigation accessible from anywhere in the
                  product. Jump to a project, search a consultant, or navigate
                  to any screen without leaving the keyboard.
                </p>
              </div>
              <ImagePlaceholder caption="Cmd+K — global search and navigation, always one keystroke away" />
            </div>

            <div
              className="cs-prose-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}
            >
              <div>
                <h2 style={proseHeading}>Role-based routing</h2>
                <p style={body}>
                  Four distinct user states — unauthenticated, client
                  (pre-onboarding), client (post-onboarding), consultant —{" "}
                  <span style={b}>resolved at entry before any page renders</span>.
                  Neither user ever lands in the wrong context.
                </p>
              </div>
              <ImagePlaceholder caption="Four user states, resolved at entry — the UI never has to decide" />
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
                <h2 style={proseHeading}>Mobile-first + bottom navigation</h2>
                <p style={body}>
                  The primary user — a client mid-project — is on mobile.{" "}
                  <span style={b}>Bottom navigation keeps all key sections
                  reachable with one hand.</span> All inputs use a 16px minimum
                  font size to prevent iOS auto-zoom. Every tap target is sized
                  for thumb use, not cursor precision.
                </p>
              </div>
              <ImagePlaceholder caption="Mobile-first — bottom nav, 16px inputs, thumb-sized tap targets throughout" />
            </div>

            <div
              className="cs-prose-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}
            >
              <div>
                <h2 style={proseHeading}>AI positioning — immediate vs. depth</h2>
                <p style={body}>
                  The hardest UX question was how to{" "}
                  <span style={b}>present the AI without undermining the human
                  consultant</span>. The answer was in the copy and hierarchy:
                  Planr AI appears as a nudge ("Get an instant answer"),
                  not as the primary action. Human consultants are the primary
                  path. The AI fills the gap between
                  bookings — quick questions that don't need a scheduled session.
                </p>
              </div>
              <ImagePlaceholder caption="Planr AI as a nudge, not the primary path — hierarchy makes the distinction" />
            </div>

            <div
              className="cs-prose-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}
            >
              <div>
                <h2 style={proseHeading}>Token-first design system + dark/light mode</h2>
                <p style={body}>
                  Every color, radius, spacing, and type value is a CSS custom
                  property defined once. Light and dark mode flips at the
                  semantic layer — no component holds a hardcoded value. This
                  meant adding dark mode after the fact{" "}
                  <span style={b}>took hours, not weeks</span>.
                </p>
              </div>
              <ImagePlaceholder caption="Mode flip in hours, not weeks — everything lives at the token layer" />
            </div>

            <div style={{ maxWidth: "640px" }}>
              <h2 style={sectionTitle}>Deciding on features — what got cut</h2>
              <p style={body}>
                The MVP spec started with shared budgets, team accounts, and
                in-app payments.{" "}
                <span style={b}>All three were cut before build started.</span>{" "}
                The reasoning: shared budgets requires a data model rewrite, team
                accounts require permissions logic that doesn't exist yet, and
                in-app payments add regulatory overhead in Sri Lanka.{" "}
                <span style={b}>Cutting them early kept the product shippable
                and the scope honest.</span>
              </p>
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
                One system, two completely different mental models.
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={body}>
                The design challenge was{" "}
                <span style={b}>making one visual system serve two completely
                different mental models</span>. Clients are in discovery mode —
                comparing, weighing, deciding. Consultants are in management mode
                — reviewing, scheduling, responding. The interface had to feel
                right for both, without compromising either.
              </p>
              <p style={body}>
                I designed the component library around one constraint:{" "}
                <span style={b}>every component had to work in both contexts
                without modification</span>. A card that only made sense on the
                client side wasn't a component — it was a page. That constraint
                forced a level of abstraction that made the system more consistent
                than it would have been without it.
              </p>
              <p style={body}>
                The system is built on a token foundation — color, spacing, radius,
                and type defined once and applied everywhere. Light and dark mode
                flips entirely at the token level, so no component holds a
                hardcoded value. Deep navy (#07111E) and sky
                blue (#81B9E9), set in Manrope, were chosen for a specific
                register:{" "}
                <span style={b}>professional enough for a senior architect,
                approachable enough for a homeowner</span> commissioning their
                first build.
              </p>
              <p style={body}>
                The real end users of the design system weren't me. They were{" "}
                <span style={b}>clients making a significant financial commitment
                on mobile, mid-project, under pressure</span>. Every density
                decision — how much per card, how many actions per screen, how
                prominent the primary CTA — was made with that context in mind.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <ImagePlaceholder caption="Token foundation — every value defined once, applied everywhere. Light and dark mode flips at the token level." />
            <div
              className="cs-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}
            >
              <ImagePlaceholder caption="Light and dark — handled at the token layer, not per component" />
              <ImagePlaceholder caption="Every component designed for both contexts — same structure, different content" />
            </div>
          </div>
        </div>

        {/* Results */}
        <div style={divider}>
          <h2 style={sectionTitle}>Results</h2>
          <p style={{ ...body, maxWidth: "640px" }}>
            Planr is currently in early access — the platform is live and open
            for anyone to sign up and test. We're pre-launch in terms of a real
            user cohort, which means metrics are pending, but the product is
            fully functional end to end.
          </p>
        </div>

        {/* Scope of work */}
        <div style={divider}>
          <h2 style={sectionTitle}>Scope of work</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <ImagePlaceholder caption="Marketing landing page — category grid, expert showcase, animated hero" />
            <div
              className="cs-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}
            >
              <ImagePlaceholder caption="4-step onboarding — collects what's needed to personalise the experience before first use" />
              <ImagePlaceholder caption="Browse, evaluate, commit — real-time availability from the consultant calendar" />
            </div>
            <div
              className="cs-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}
            >
              <ImagePlaceholder caption="Planr AI — Claude Haiku answers architecture and permit questions in real time" />
              <ImagePlaceholder caption="Consultant side — same visual system, built for a completely different set of tasks" />
            </div>
          </div>
        </div>

        {/* What's next */}
        <div style={divider}>
          <div style={{ maxWidth: "640px" }}>
          <h2 style={sectionTitle}>What's next</h2>
          <p style={{ ...body, marginBottom: "1rem" }}>
            The two nearest improvements are payments (so clients can actually
            transact inside the platform, not off it) and structured consultation
            setup — replacing the current ad-hoc scheduling with a proper
            pre-meeting flow that collects project context before the session
            starts.
          </p>
          <p style={body}>
            Beyond that, the longer-term vision is to expand the platform into a{" "}
            <span style={b}>broader financial layer for homeowners</span> —
            financial advice, cost planning, and investment guidance alongside
            the construction consultants. The goal is a single place for someone
            planning a build to handle the professional side and the financial
            side without switching between apps.
          </p>
          </div>
        </div>

        {/* What I'd do differently */}
        <div>
          <div style={{ maxWidth: "640px" }}>
            <h2 style={sectionTitle}>What I'd do differently</h2>
            <p style={{ ...body, marginBottom: "1rem" }}>
              The client and consultant onboarding flows were designed in parallel
              and converged too late. There was shared structure underneath —
              progress state, step logic, validation — that ended up designed twice
              with subtle inconsistencies. The constraint that forced shared
              components in the product should have applied to onboarding too.{" "}
              <span style={b}>I'd align on shared primitives before splitting into
              role-specific screens.</span>
            </p>
            <p style={body}>
              The AI assistant answers general architecture and permit questions
              well, but{" "}
              <span style={b}>has no awareness of the user's actual project</span>.
              A structural load question from someone building a two-bedroom in
              Colombo should read differently from the same question asked by a
              developer planning a commercial fit-out.{" "}
              Connecting the chat to the user's project context is what would
              turn it from a well-prompted chatbot into a genuinely useful
              assistant. That's the version worth building next.
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
              href="https://buildinghelp.app"
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
              buildinghelp.app
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
