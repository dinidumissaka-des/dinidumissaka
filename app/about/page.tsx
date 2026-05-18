import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Dinidu Seneviratne",
  description:
    "Senior UI/UX & Product Designer with 5+ years in fintech and SaaS. Based in Dubai.",
};

const experience = [
  {
    title: "Senior UI/UX Designer",
    company: "Deriv",
    location: "Dubai, UAE",
    period: "Jan 2024 – Present",
    bullets: [
      "Led full visual redesign of Deriv.com, driving 25% increase in user engagement across 18 language markets",
      "Migrated enterprise platform from Webflow to Vibe Code using AI-assisted development, reducing engineering dependency",
      "Engineered a scalable, token-driven design system in Claude Code, minimising design-to-development handoff",
      "Built internal AI tooling to accelerate brand content production and reduce reliance on external resources",
      "Delivered brand-consistent design across 8,000+ pages, 4 microsites, and a localised UAE market site",
    ],
  },
  {
    title: "UI/UX Designer",
    company: "Deriv",
    location: "Cyberjaya, Malaysia",
    period: "Feb 2023 – Jan 2024",
    bullets: [
      "Developed modular component library enabling 3× faster page creation and reducing component development time by 30%",
      "Contributed to design system evolution — defining typography standards, spacing guidelines, and token-based architecture",
      "Collaborated with 15+ cross-functional stakeholders to deliver cohesive, user-centred designs",
    ],
  },
  {
    title: "UI/UX Designer",
    company: "Revox",
    location: "Colombo, Sri Lanka",
    period: "Feb 2022 – Jan 2023",
    bullets: [
      "Co-designed Virtual Spaces & Metaverse — one of China's first Web 3.0-based social learning platforms",
      "Built dashboard design system in Figma with 100+ reusable components",
      "Mentored junior designers on component architecture, variants, and export workflows",
    ],
  },
  {
    title: "Junior UI/UX Designer",
    company: "Revox",
    location: "Colombo, Sri Lanka",
    period: "Jul 2021 – Jan 2022",
    bullets: [
      "Executed UI designs across all project stages from concept to delivery for multiple client websites",
      "Led design system transition in Figma for Business Analytics & ERP UI Framework",
    ],
  },
  {
    title: "UI/UX Designer (Contract)",
    company: "Synextic Global Business Solutions",
    location: "Pune, India",
    period: "Aug 2020 – Jul 2021",
    bullets: [
      "Designed SaaS websites and e-commerce platforms with end-to-end UX/UI, brand identity, and creative asset development",
    ],
  },
  {
    title: "UI/UX Design Intern",
    company: "Amplifyn",
    location: "Colombo, Sri Lanka",
    period: "Jan 2020 – May 2020",
    bullets: [
      "Redesigned multiple client websites and designed a custom illustration kit for a pet technology mobile app",
    ],
  },
];

const skills = [
  { label: "Visual Design", items: ["Brand Identity", "Typography", "Illustration", "Creative Direction", "Visual Systems"] },
  { label: "Design Tools", items: ["Figma", "Adobe Creative Suite"] },
  { label: "Build Tools", items: ["Webflow", "Claude Code", "Cursor", "VS Code"] },
  { label: "AI Tools", items: ["Claude", "Google AI", "ChatGPT", "Figma AI", "Freepik AI", "ImageFX", "Lovable"] },
  { label: "Methodologies", items: ["Design Thinking", "User Research", "Agile / Scrum", "Design Sprints"] },
];

const awards = [
  {
    title: "Google Creative Campus",
    org: "Google · Cannes Lions & Mountain View",
    date: "Oct 2019",
    desc: "Selected among global creative leaders to explore forward-thinking design perspectives and expand international creative networks.",
  },
  {
    title: "Roger Hatchuel Academy",
    org: "Cannes Lions School of Creativity",
    date: "Jun 2019",
    desc: "Selected to represent Sri Lanka at Cannes Lions International Festival of Creativity, France. Collaborated with 40 students from 32 nations.",
  },
  {
    title: "Best Student — Media and Communication Design",
    org: "University of Moratuwa",
    date: "Jul 2021",
    desc: "Awarded highest marks in the final year Comprehensive Design Project.",
  },
];

const certifications = [
  "Claude Code in Action — Anthropic · Mar 2026",
  "AI Fluency: Framework & Foundations — Anthropic · Nov 2025",
  "UX Design Patterns with Checklist Design — Uxcel",
  "Mobile Design — Uxcel",
  "Foundations of User Experience (UX) Design — Google",
  "UX Management: Strategy and Tactics — Interaction Design Foundation (IxDF)",
  "Human-Computer Interaction (HCI) — Interaction Design Foundation (IxDF)",
  "Accessibility: How to Design for All — Interaction Design Foundation (IxDF)",
  "Service Design: Integrated Service Experience — Interaction Design Foundation (IxDF)",
];

const sectionLabel: React.CSSProperties = {
  fontFamily: "var(--font-manrope), sans-serif",
  fontSize: "11px",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "var(--color-muted)",
  marginBottom: "20px",
};

const sectionTitle: React.CSSProperties = {
  fontFamily: "var(--font-fraunces), Georgia, serif",
  fontSize: "clamp(1.5rem, 3vw, 2rem)",
  fontWeight: 300,
  lineHeight: 1.1,
  color: "var(--color-fg)",
  marginBottom: "2rem",
};

const divider: React.CSSProperties = {
  borderBottom: "1px solid var(--border-section)",
  marginBottom: "3rem",
  paddingBottom: "3rem",
};

export default function AboutPage() {
  return (
    <main style={{ paddingTop: "4rem" }}>
      <div
        className="container"
        style={{ paddingBlock: "4rem", paddingInline: "clamp(1.5rem, 5vw, 3rem)" }}
      >
        {/* Back */}
        <Link
          href="/"
          className="text-muted"
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontSize: "12px",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            marginBottom: "3rem",
            textDecoration: "none",
          }}
        >
          ← Home
        </Link>

        {/* Hero */}
        <div style={divider}>
          <p style={sectionLabel}>About</p>
          <h1
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--color-fg)",
              marginBottom: "1.5rem",
            }}
          >
            Dinidu Seneviratne
          </h1>
          <p
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: "13px",
              color: "var(--color-muted)",
              marginBottom: "2rem",
            }}
          >
            Senior UI/UX &amp; Product Designer · AI-Native Builder · Dubai, UAE
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.8,
              color: "var(--color-fg)",
              maxWidth: "680px",
            }}
          >
            Senior UI/UX and Product Designer with 5+ years delivering end-to-end digital
            experiences for fintech and SaaS — from user research and interaction design through to
            shipped product, without engineering dependency. Uses Claude Code, Vibe Code, and
            Webflow to own the full design-to-delivery flow, backed by a strong visual design craft
            and deep expertise in design systems. An early, hands-on adopter of AI-powered
            workflows integrating Claude, Google AI, and Figma AI to accelerate production and
            reduce iteration cycles.
          </p>
        </div>

        {/* Skills */}
        <div style={divider}>
          <p style={sectionLabel}>Skills</p>
          <h2 style={sectionTitle}>Craft &amp; tooling</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {skills.map((group) => (
              <div
                key={group.label}
                style={{
                  display: "grid",
                  gridTemplateColumns: "140px 1fr",
                  gap: "12px",
                  alignItems: "baseline",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "var(--color-fg)",
                  }}
                >
                  {group.label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontSize: "13px",
                    color: "var(--color-muted)",
                    lineHeight: 1.6,
                  }}
                >
                  {group.items.join(" · ")}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div style={divider}>
          <p style={sectionLabel}>Experience</p>
          <h2 style={sectionTitle}>Work history</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {experience.map((role, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    flexWrap: "wrap",
                    gap: "8px",
                    paddingBottom: "12px",
                    borderBottom: "1px solid var(--border-item)",
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontFamily: "var(--font-manrope), sans-serif",
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "var(--color-fg)",
                      }}
                    >
                      {role.title}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-manrope), sans-serif",
                        fontSize: "13px",
                        color: "var(--color-muted)",
                        marginLeft: "8px",
                      }}
                    >
                      · {role.company} — {role.location}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontSize: "11px",
                      color: "var(--color-muted)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {role.period}
                  </span>
                </div>
                <ul style={{ margin: 0, padding: "0 0 0 1rem", display: "flex", flexDirection: "column", gap: "6px" }}>
                  {role.bullets.map((b, j) => (
                    <li
                      key={j}
                      style={{
                        fontFamily: "var(--font-manrope), sans-serif",
                        fontSize: "13px",
                        lineHeight: 1.7,
                        color: "var(--color-muted)",
                      }}
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div style={divider}>
          <p style={sectionLabel}>Education</p>
          <h2 style={sectionTitle}>Academic background</h2>
          <div
            style={{
              paddingBottom: "12px",
              borderBottom: "1px solid var(--border-item)",
              marginBottom: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "10px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "var(--color-fg)",
                }}
              >
                Honors Bachelor of Design · University of Moratuwa, Sri Lanka
              </span>
              <span
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "11px",
                  color: "var(--color-muted)",
                }}
              >
                2017 – 2020
              </span>
            </div>
            <ul style={{ margin: 0, padding: "0 0 0 1rem", display: "flex", flexDirection: "column", gap: "6px" }}>
              <li style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: "13px", lineHeight: 1.7, color: "var(--color-muted)" }}>
                First-Class Honors, GPA 3.86 · Dean&apos;s List for four semesters · Top performer in Media and Communication Design
              </li>
              <li style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: "13px", lineHeight: 1.7, color: "var(--color-muted)" }}>
                Thesis: &quot;Enhancing Web Accessibility for Local Online Banking Applications&quot;
              </li>
            </ul>
          </div>
        </div>

        {/* Awards */}
        <div style={divider}>
          <p style={sectionLabel}>Awards &amp; Recognition</p>
          <h2 style={sectionTitle}>Honours</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {awards.map((award, i) => (
              <div
                key={i}
                style={{
                  paddingBottom: "2rem",
                  borderBottom: i < awards.length - 1 ? "1px solid var(--border-item)" : "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginBottom: "6px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "var(--color-fg)",
                    }}
                  >
                    {award.title}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontSize: "11px",
                      color: "var(--color-muted)",
                    }}
                  >
                    {award.date}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontSize: "11px",
                    color: "var(--color-muted)",
                    marginBottom: "6px",
                  }}
                >
                  {award.org}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontSize: "13px",
                    lineHeight: 1.7,
                    color: "var(--color-muted)",
                    margin: 0,
                  }}
                >
                  {award.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <p style={sectionLabel}>Licenses &amp; Certifications</p>
          <h2 style={sectionTitle}>Credentials</h2>
          <ul style={{ margin: 0, padding: "0 0 0 1rem", display: "flex", flexDirection: "column", gap: "8px" }}>
            {certifications.map((cert, i) => (
              <li
                key={i}
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "13px",
                  lineHeight: 1.7,
                  color: "var(--color-muted)",
                }}
              >
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
