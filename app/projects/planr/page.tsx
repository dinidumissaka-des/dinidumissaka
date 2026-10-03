import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BackButton from "@/components/ui/BackButton";

export const metadata: Metadata = {
  title: "Planr — Case Study",
  description:
    "Designing and building Planr — a consultation platform connecting Sri Lankans abroad with verified architects and construction specialists back home.",
};

const LIVE_URL = "https://planr-khaki.vercel.app/";

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

const itemTitle: React.CSSProperties = {
  fontFamily: "var(--font-manrope), sans-serif",
  fontSize: "15px",
  fontWeight: 500,
  color: "var(--color-fg)",
  margin: "0 0 6px",
};

const caption: React.CSSProperties = {
  fontFamily: "var(--font-manrope), sans-serif",
  fontSize: "11px",
  color: "var(--color-muted)",
  marginTop: "10px",
  opacity: 0.6,
};

/* ── For readers who skim ── */
const summary = [
  { label: "Problem", text: "Building in Sri Lanka from abroad runs on trust and presence, with nowhere to find verified experts." },
  { label: "Role", text: "Designer and builder, end to end: product, marketing site, both apps and the design system." },
  { label: "Approach", text: "One booking loop, an AI first responder and one design system for two roles, built with Claude Code." },
  { label: "Status", text: "Built to MVP and live as a working prototype to explore." },
];

/* ── Decisions: the choice, the alternative it beat, and what it gave up ── */
const decisions = [
  {
    name: "Book from live availability",
    rejected: "Request and reply",
    chosen: "Pick a live slot",
    detail:
      "Across time zones, every message round trip costs a day. Browsing profiles, picking from real availability and confirming in one step removes the back-and-forth entirely.",
    tradeoff: "It only works if consultants keep their calendars current, so availability had to be quick to manage.",
  },
  {
    name: "Verified experts, not an open marketplace",
    rejected: "Open listings",
    chosen: "Verified profiles",
    detail:
      "Overseas clients can't check credentials in person, and the market runs on trust. Every profile is verified, so choosing someone from abroad can be a confident decision.",
    tradeoff: "A slower start on the consultant side, since every expert has to be verified before listing.",
  },
  {
    name: "AI as a first responder",
    rejected: "AI as the advisor",
    chosen: "AI between sessions",
    detail:
      "Planr AI, powered by Claude Haiku, answers architecture, permit and cost questions in real time, positioned to help between sessions rather than replace the consultant.",
    tradeoff: "Bigger decisions still wait for a human, by design, so the AI never has to sound more certain than it is.",
  },
  {
    name: "One design system, two mental models",
    rejected: "Two separate apps",
    chosen: "One shared system",
    detail:
      "Clients are in discovery mode and consultants are in management mode. Both are served from one component set, with layouts tuned to each role rather than separate products.",
    tradeoff: "Components had to flex for both contexts, which took more care up front than designing each app alone.",
  },
];

/* ── The screens, each with what it shows ── */
const screens = [
  { src: "/images/projects/planr/l1.webp", alt: "The Planr client dashboard on a laptop, with upcoming and ongoing consultations and recent answers", text: "Client dashboard: upcoming consultations, ongoing work and recent answers in one view." },
  { src: "/images/projects/planr/l3.webp", alt: "The Planr client dashboard on a phone, with a Book Consultation button", text: "The same dashboard on a phone, with booking one tap away." },
  { src: "/images/projects/planr/l4.webp", alt: "The Book Consultation button on a warm background", text: "Booking is the core loop, so it is the most prominent action." },
  { src: "/images/projects/planr/l4-1.webp", alt: "The Planr consultant dashboard on a laptop, with bookings, sessions and questions from clients", text: "Consultant dashboard: the same components, arranged for managing bookings." },
];

/* ── What the MVP covers ── */
const built = [
  { name: "Marketing site", detail: "Explains the service to people deciding from abroad, and leads to early-access signups." },
  { name: "Client app", detail: "Browse verified profiles, book from live availability and follow each consultation." },
  { name: "Consultant app", detail: "Manage bookings, sessions and client questions from one dashboard." },
  { name: "Planr AI", detail: "Answers architecture, permit and cost questions between sessions, using Claude Haiku." },
];

/** The alternative struck through, the choice in a soft pill: the same style as the other case studies. */
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

function Screen({ src, alt, text }: { src: string; alt: string; text: string }) {
  return (
    <figure style={{ margin: 0 }}>
      <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid var(--border-section)", lineHeight: 0 }}>
        <Image src={src} alt={alt} width={3840} height={2160} sizes="(max-width: 640px) 100vw, 500px" style={{ width: "100%", height: "auto", display: "block" }} />
      </div>
      <figcaption style={caption}>{text}</figcaption>
    </figure>
  );
}

export default function PlanrCaseStudy() {
  return (
    <main>
      <style>{`
        @media (max-width: 640px) {
          .cs-meta { gap: 1.25rem !important; }
          .planr-summary { grid-template-columns: 1fr 1fr !important; }
          .planr-two { grid-template-columns: 1fr !important; }
          .planr-four { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 900px) and (min-width: 641px) {
          .planr-four { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      <div className="container" style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
        <BackButton style={{ marginBottom: "2.5rem" }} />

        {/* Meta row */}
        <div className="cs-meta" style={{ display: "flex", gap: "1rem 3rem", flexWrap: "wrap", ...divider, paddingBottom: "2rem", marginBottom: "2.5rem" }}>
          {[
            { label: "Year", value: "2025" },
            { label: "Role", value: "Designer & Builder" },
            { label: "Type", value: "SaaS · MVP" },
            { label: "Prototype", value: "planr-khaki.vercel.app", href: LIVE_URL },
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
        <h1 style={pageTitle}>Building in Sri Lanka, from anywhere</h1>

        {/* Summary for skimmers */}
        <div className="planr-summary" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem", ...divider, paddingBottom: "2.5rem", marginBottom: "2.5rem" }}>
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
            Planr is a consultation platform for Sri Lankans living abroad, and overseas investors, who want to build
            or invest at home but can&apos;t manage it from the ground. It connects them with verified architects and
            construction specialists, and lets them book, follow and ask questions without being there.
          </p>
          <p style={body}>
            The construction market runs on trust and physical presence.{" "}
            <span style={b}>From overseas there was no single place to find verified experts</span>, no way to check
            credentials remotely and no clear way to hire with confidence. For younger earners doing it for the first
            time, the barrier was higher still: the income and the intent, but no idea where to start.
          </p>
        </div>

        {/* Cover */}
        <div style={divider}>
          <figure style={{ margin: 0 }}>
            <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid var(--border-section)", lineHeight: 0 }}>
              <Image
                src="/images/projects/planr/l2.webp"
                alt="The Planr logo on a deep blue patterned background"
                width={3840}
                height={2160}
                sizes="(max-width: 640px) 100vw, 1016px"
                preload
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </figure>
        </div>

        {/* Thinking — decisions */}
        <div style={divider}>
          <p style={{ ...sectionLabel, marginBottom: "0.75rem" }}>Thinking</p>
          <h2 style={sectionTitle}>Four decisions, and what each one gave up</h2>
          <p style={{ ...body, marginBottom: "2rem" }}>
            Every decision came back to one question:{" "}
            <span style={b}>can someone make a confident decision about a building they can&apos;t visit?</span>
          </p>
          <div className="planr-two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 3rem" }}>
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

        {/* Design — screens */}
        <div style={divider}>
          <p style={{ ...sectionLabel, marginBottom: "0.75rem" }}>Design</p>
          <h2 style={sectionTitle}>Two roles, one set of components</h2>
          <p style={{ ...body, marginBottom: "2rem" }}>
            The client side is built for discovery and the consultant side for management. Both use the same cards,
            counts and actions,{" "}
            <span style={b}>arranged for what each person is there to do.</span>
          </p>
          <div className="planr-two" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem 1.5rem" }}>
            {screens.map((s) => (
              <Screen key={s.src} {...s} />
            ))}
          </div>
        </div>

        {/* Status — last content block, so no bottom rule above "Next" */}
        <div style={{ ...divider, borderBottom: "none", paddingBottom: 0, marginBottom: 0 }}>
          <p style={{ ...sectionLabel, marginBottom: "0.75rem" }}>Status</p>
          <h2 style={sectionTitle}>What the MVP covers</h2>
          <p style={{ ...body, marginBottom: "2rem" }}>
            The full loop was designed and built with Claude Code and works end to end, and{" "}
            <a href={LIVE_URL} target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-fg)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
              the prototype
            </a>{" "}
            is still live to explore.
          </p>
          <div className="planr-four" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
            {built.map((n) => (
              <div key={n.name} style={{ paddingLeft: "1rem", borderLeft: "1px solid var(--border-section)" }}>
                <h3 style={itemTitle}>{n.name}</h3>
                <p style={{ ...body, fontSize: "13px", margin: 0 }}>{n.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Next project */}
        <div style={{ paddingTop: "3rem", marginTop: "3rem", borderTop: "1px solid var(--border-section)" }}>
          <p style={sectionLabel}>Next</p>
          <Link
            href="/projects/minti"
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
            Minti{" "}
            <span style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: 300, color: "var(--color-muted)", marginLeft: "0.75rem" }}>
              — Personal Expense Tracker
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
