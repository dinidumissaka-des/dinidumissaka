import type { Metadata } from "next";
import BackButton from "@/components/ui/BackButton";

export const metadata: Metadata = {
  title: "EcoByte — Case Study",
  description:
    "Designing EcoByte — a gamified sustainability platform that makes the carbon footprint of everyday digital activity visible and actionable.",
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

export default function EcoByteCaseStudy() {
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
            { label: "Year", value: "2024" },
            { label: "Role", value: "Lead Designer" },
            { label: "Type", value: "Concept" },
            { label: "Team", value: "With a UX Researcher" },
          ].map((item) => (
            <div
              key={item.label}
              style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "12px" }}
            >
              <p style={sectionLabel}>{item.label}</p>
              <p style={{ ...metaSmall, fontWeight: 500, color: "var(--color-fg)" }}>
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Title */}
        <h1 style={pageTitle}>
          Making the invisible carbon cost of digital life visible
        </h1>

        {/* Intro */}
        <div style={divider}>
          <div style={{ maxWidth: "720px" }}>
            <p style={{ ...body, marginBottom: "1rem" }}>
              EcoByte is a gamified sustainability platform designed to make the
              carbon footprint of everyday digital activity — browsing, streaming,
              scrolling — visible and actionable. I led the UX and product design:
              research, flows, wireframes, visual system, and high-fidelity
              prototypes. I worked alongside a UX researcher on a concept built
              from first principles, not a brief.
            </p>
            <p style={body}>
              Most sustainability conversations focus on industrial carbon —
              factories, flights, supply chains.{" "}
              <span style={b}>
                The digital carbon footprint goes almost entirely unnoticed.
              </span>{" "}
              Watching a video, sending an email, running a background sync — all
              of it has a cost. Nobody sees it. EcoByte's job is to make that
              cost visible and give users a reason to care.
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
                Digital carbon emissions are structurally invisible. There's no
                meter, no bill, no physical signal. Users have no intuition for
                what a streaming session costs the planet versus an email — and
                no existing tool makes the comparison legible. The platforms that
                exist either overwhelm with data or resort to abstract
                hectare-equivalents that mean nothing in practice.
              </p>
              <p style={body}>
                The design challenge was not just information architecture. It
                was{" "}
                <span style={b}>
                  making an abstract, systemic problem feel personal and
                  immediate
                </span>{" "}
                — without making the user feel guilty or helpless. That's a
                harder UX brief than it sounds.
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
              Users weren't disengaged because they didn't care — they were
              disengaged because they didn't know what to do with the
              information.
            </p>
          </div>
        </div>

        {/* Research */}
        <div style={divider}>
          <h2 style={sectionTitle}>Research</h2>
          <div
            className="cs-prose-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}
          >
            <div>
              <p style={{ ...body, marginBottom: "1rem" }}>
                We ran user interviews, competitor analysis, and surveys before
                touching a screen. Competitors like Ecosia and Too Good To Go
                both showed the same failure mode: too much data, too much
                jargon, and no clear action the user could take in the next ten
                seconds.
              </p>
              <p style={{ ...body, marginBottom: "1rem" }}>
                Three insights shaped the design. Users want a next step, not a
                number — knowing you generated 2.3kg of CO₂ this week is
                meaningless unless the app tells you what to do with it.
                Simplicity is a sustainability feature: visual cues and
                bite-sized information kept users in the app long enough to act.
                And gamification works — if it's optional. Badges and
                leaderboards that were too prominent felt like pressure rather
                than reward.
              </p>
              <p style={body}>
                The right balance: make achievements visible to those who want
                them, invisible to those who don't.
              </p>
            </div>
            <ImagePlaceholder caption="Competitor audit — Ecosia and Too Good To Go annotated: overwhelming data, no personal framing, no engagement loop" />
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
                <h2 style={proseHeading}>Gamification as a behaviour loop, not decoration</h2>
                <p style={{ ...body, marginBottom: "1rem" }}>
                  Points, levels, and challenges aren't bolted on for engagement
                  metrics. They're the mechanism through which a user develops a
                  new mental model:{" "}
                  <span style={b}>
                    my digital activity has a cost, and reducing it has a value.
                  </span>{" "}
                  The loop — track activity, see footprint, earn points, unlock
                  challenges, redeem rewards — is the product. Every screen is
                  either feeding that loop or breaking it.
                </p>
                <p style={body}>
                  The level names (Sprout, Leaf, Tree) use growth language, not
                  compliance language. The user isn't reducing a bad habit —
                  they're becoming something.
                </p>
              </div>
              <ImagePlaceholder caption="User personas — eco-conscious consumer, sustainable business owner, passive observer" />
            </div>

            <div
              className="cs-prose-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}
            >
              <div>
                <h2 style={proseHeading}>Colour as environmental register</h2>
                <p style={{ ...body, marginBottom: "1rem" }}>
                  The palette — Tropical Indigo (#b29cff), Emerald Green
                  (#47d28d), and Pear Yellow (#dce81a) — was chosen to feel
                  energetic and optimistic rather than earnest and preachy. Most
                  sustainability products default to muted earthy tones that read
                  as serious and a little dull.{" "}
                  <span style={b}>
                    The colour system signals that doing the right thing can feel
                    good.
                  </span>
                </p>
                <p style={body}>
                  Indigo carries the innovation and tech register. Green signals
                  growth without being clichéd. Yellow brings optimism and
                  momentum — the colour of progress, not guilt.
                </p>
              </div>
              <ImagePlaceholder caption="Colour system — Tropical Indigo, Emerald Green, and Pear Yellow applied to cards, progress bar, and badges" />
            </div>

            <div
              className="cs-prose-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}
            >
              <div>
                <h2 style={proseHeading}>Communicating data without overwhelming</h2>
                <p style={{ ...body, marginBottom: "1rem" }}>
                  The Footprint Tracker was the hardest screen to design. Showing
                  the carbon cost of digital activities is inherently abstract —
                  the numbers have no intuitive scale. The solution was to present
                  relative data rather than absolute: not "you generated 2.3kg
                  CO₂ this week" but "your streaming sessions were your
                  highest-impact activity — down 12% from last week."{" "}
                  <span style={b}>
                    Progress relative to your own baseline is legible. An
                    abstract global number is not.
                  </span>
                </p>
                <p style={body}>
                  The tracker also awards points alongside footprint data —
                  immediately connecting information to a reward. Data without
                  consequence doesn't change behaviour. Data with a consequence
                  does.
                </p>
              </div>
              <ImagePlaceholder caption="Footprint Tracker — activity breakdown, carbon impact over time, and point earnings. Last week vs this week comparison." />
            </div>

            <div
              className="cs-prose-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}
            >
              <div>
                <h2 style={proseHeading}>Badges and iconography</h2>
                <p style={body}>
                  Custom badges were designed to feel collectible, not
                  bureaucratic. Each badge represents a behaviour category, and
                  earning one shifts how the user thinks of themselves in that
                  category. The design references games rather than compliance
                  systems — the visual language is achievement, not
                  certification.
                </p>
              </div>
              <ImagePlaceholder caption="Badge system — earned and locked states, icon style and colour treatment across badge types" />
            </div>

          </div>
        </div>

        {/* Key screens */}
        <div style={divider}>
          <h2 style={sectionTitle}>Key screens</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>

            <div
              className="cs-prose-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}
            >
              <div>
                <h2 style={proseHeading}>Homepage</h2>
                <p style={body}>
                  The central dashboard shows point balance, level progress, and
                  personalised eco-challenges. It's the one screen a user sees
                  every day — the design prioritises hierarchy (what do I have,
                  where am I going, what should I do next) over completeness. No
                  data dump. One primary action visible at all times.
                </p>
              </div>
              <ImagePlaceholder caption="Homepage — point balance, level progress bar (Leaf → Tree), and personalised challenge cards" />
            </div>

            <div
              className="cs-prose-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}
            >
              <div>
                <h2 style={proseHeading}>Challenges</h2>
                <p style={{ ...body, marginBottom: "1rem" }}>
                  Browse and filter challenges by category, track progress across
                  active ones, and earn bonus points on completion. Challenges
                  are personalised to the user's activity — a heavy streamer gets
                  streaming challenges; a frequent emailer gets inbox challenges.{" "}
                  <span style={b}>
                    The challenge is always adjacent to existing behaviour, not a
                    demand to change it entirely.
                  </span>
                </p>
                <p style={body}>
                  The collaborative challenge mechanic — compete with a friend to
                  reduce data usage — came directly from user research.
                  Accountability and competition are strong intrinsic motivators.
                </p>
              </div>
              <ImagePlaceholder caption="Challenges — available, in progress, completed states. Collaborative two-player challenge layout." />
            </div>

            <div
              className="cs-prose-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}
            >
              <div>
                <h2 style={proseHeading}>Rewards Marketplace</h2>
                <p style={body}>
                  Points redeem for eco-friendly products, discounts, and
                  donations to environmental projects. The marketplace closes the
                  loop: sustainable behaviour has tangible value outside the app.
                  The design prioritises trust and browse-ability over density.
                  Users should feel like they're discovering something, not
                  parsing a catalogue.
                </p>
              </div>
              <ImagePlaceholder caption="Rewards Marketplace — product discounts, experiences, and donation options. Point cost and redemption CTA on each card." />
            </div>

            <div
              className="cs-prose-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "start" }}
            >
              <div>
                <h2 style={proseHeading}>Nudge notifications</h2>
                <p style={body}>
                  EcoByte sends contextual nudges when it detects high-impact
                  activity — an ultra-HD stream triggers a suggestion to lower
                  resolution; a late-night sync suggests scheduling it off-peak.
                  The copy is always specific and actionable, never generic.{" "}
                  <span style={b}>
                    The nudge works because it arrives at the moment of
                    opportunity, not hours later.
                  </span>
                </p>
              </div>
              <ImagePlaceholder caption="Nudge notification — 'You're streaming in 4K — switching to HD saves 3× the energy. Earn 20 points.'" />
            </div>

          </div>
        </div>

        {/* Iteration */}
        <div style={divider}>
          <h2 style={sectionTitle}>Iteration</h2>
          <div style={{ maxWidth: "640px" }}>
            <p style={{ ...body, marginBottom: "1rem" }}>
              The first round of testing surfaced three issues that changed the
              product. The calculator entry flow was confusing — too many fields,
              unclear labels. We simplified inputs, added progress indicators,
              and added visual guides explaining what each field measured in
              plain language.
            </p>
            <p style={{ ...body, marginBottom: "1rem" }}>
              The dashboard was initially generic. Users wanted it to reflect
              their actual data — not a template. We rebuilt the recommendation
              layer to surface tips and challenges specific to each user's
              activity pattern.
            </p>
            <p style={body}>
              The gamification balance was off in both directions at once: for
              some users, badges felt too prominent; for others, not visible
              enough to motivate. The solution was a toggleable achievements
              view — present by default, collapsible for users who prefer a
              minimal interface.
            </p>
          </div>
        </div>

        {/* What I'd do differently */}
        <div>
          <div style={{ maxWidth: "640px" }}>
            <h2 style={sectionTitle}>What I'd do differently</h2>
            <p style={{ ...body, marginBottom: "1rem" }}>
              The three user personas shaped the product thinking, but the
              business owner persona never really translated into a distinct
              product surface. The platform was designed implicitly for
              individuals, and the business angle remained theoretical throughout.
              I'd either commit to it — with a separate business view and team
              features — or cut it earlier, rather than carrying a persona that
              doesn't fully connect to what was built.
            </p>
            <p style={body}>
              The gamification system was designed before the data layer was
              fully specified. That created friction later when we needed to
              decide what activities were trackable and how points were
              calculated — decisions that should have happened before the reward
              UI was locked. Next time: specify the data model and the reward
              logic first, then design the surface.
            </p>
          </div>

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
            <span
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "12px",
                color: "var(--color-muted)",
              }}
            >
              Concept project · Designed in Figma
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
