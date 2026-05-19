import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { CometCard } from "@/components/ui/comet-card";

export const metadata: Metadata = {
  title: "About — Dinidu Seneviratne",
  description:
    "Senior UI/UX & Product Designer with 5+ years in fintech and SaaS. Based in Dubai.",
};

const experience = [
  {
    title: "Senior UI/UX Designer",
    company: "Deriv",
    url: "https://deriv.com",
    location: "Dubai, UAE",
    period: "Feb 2026 – Present",
    bullets: [
      "Engineered a scalable, token-driven design system in Claude Code, minimising design-to-development handoff",
      "Built internal AI tooling to accelerate brand content production and reduce reliance on external resources",
    ],
  },
  {
    title: "Senior UI/UX Designer",
    company: "Deriv",
    url: "https://deriv.com",
    location: "Cyberjaya, Malaysia",
    period: "Jan 2024 – Feb 2026",
    bullets: [
      "Led full visual redesign of Deriv.com, driving 25% increase in user engagement across 18 languages",
      "Built internal AI tooling to accelerate brand content production and reduce reliance on external resources",
      "Delivered brand-consistent design across 8,000+ pages, 4 microsites, and a localised UAE market site",
    ],
  },
  {
    title: "UI/UX Designer",
    company: "Deriv",
    url: "https://deriv.com",
    location: "Cyberjaya, Malaysia",
    period: "Feb 2023 – Jan 2024",
    bullets: [
      "Developed modular component library enabling 3× faster page creation and reducing component development time by 30%",
      "Contributed to design system evolution — defining typography standards, spacing guidelines, and token-based architecture for scalable implementation",
      "Collaborated with 15+ cross-functional stakeholders (Product Managers, SEO specialists, content strategists, data analysts) to deliver cohesive, user-centred designs",
    ],
  },
  {
    title: "UI/UX Designer",
    company: "Revox",
    url: null,
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
    url: null,
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
    url: null,
    location: "Pune, India",
    period: "Aug 2020 – Jul 2021",
    bullets: [
      "Designed SaaS websites and e-commerce platforms with end-to-end UX/UI, brand identity, and creative asset development",
    ],
  },
  {
    title: "UI/UX Design Intern",
    company: "Amplifyn",
    url: null,
    location: "Colombo, Sri Lanka",
    period: "Jan 2020 – May 2020",
    bullets: [
      "Redesigned multiple client websites and designed a custom illustration kit for a pet technology mobile app",
    ],
  },
];

const skills = [
  { label: "AI Tools", items: ["Claude", "Google AI", "ChatGPT", "Figma AI", "Magnific AI"] },
  { label: "Design Tools", items: ["Figma", "Adobe Creative Suite", "Claude Design"] },
  { label: "Methodologies", items: ["Design Thinking", "User Research", "Agile / Scrum", "Design Sprints"] },
  { label: "Build Tools", items: ["Webflow", "Claude Code", "Cursor", "VS Code", "Vercel"] },
  { label: "Visual Design", items: ["Brand Identity", "Typography", "Illustration", "Creative Direction", "Visual Systems"] },
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
  fontSize: "12px",
  color: "var(--color-muted)",
  marginBottom: "12px",
};

const sectionTitle: React.CSSProperties = {
  fontFamily: "var(--font-fraunces), Georgia, serif",
  fontSize: "32px",
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
    <main>
      <div
        className="container"
        style={{ paddingBottom: "4rem" }}
      >
        {/* Hero */}
        <div style={{ paddingTop: "3rem", paddingBottom: "3rem", ...divider }}>
          <div className="about-hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "2rem", alignItems: "center" }}>
          {/* Photo — first in DOM so mobile shows it above the label naturally */}
          <div className="about-hero-photo" style={{ paddingRight: "96px" }}>
            <CometCard glare={false} shadow={false} rounded="rounded-full" className="w-full h-full">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", padding: "24px", background: "var(--bg-card)", borderRadius: "9999px" }}>
                <Image
                  src="/avatar.png"
                  alt="Dinidu Seneviratne"
                  width={120}
                  height={120}
                  style={{ objectFit: "cover", borderRadius: "50%", display: "block", width: "100%", aspectRatio: "1 / 1" }}
                />
              </div>
            </CometCard>
          </div>

          {/* Text */}
          <div>
            <p className="text-muted mb-5" style={{ fontSize: "12px" }}>
              Senior UI/UX &amp; Product Designer&nbsp;|&nbsp;AI-Native Builder&nbsp;|&nbsp;Dubai, UAE
            </p>
            <h1
              style={{
                fontSize: "48px",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontWeight: 300,
                color: "var(--color-fg)",
              }}
            >
              Dinidu Seneviratne
            </h1>
            <p
              className="mt-7 text-muted max-w-2xl leading-relaxed"
              style={{ fontSize: "14px" }}
            >
              Senior UI/UX and Product Designer with 5+ years delivering end-to-end digital
              experiences for fintech and SaaS — from user research and interaction design through to
              shipped product, without engineering dependency. Uses Claude Code, Vibe Code, and
              Webflow to own the full design-to-delivery flow, backed by a strong visual design craft
              and deep expertise in design systems.
            </p>
          </div>
          </div>
        </div>

        {/* Skills */}
        <div style={divider}>
          <p style={sectionLabel}>Skills</p>
          <h2 style={sectionTitle}>Craft &amp; tooling</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {skills.map((group) => (
              <p
                key={group.label}
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "13px",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                <span style={{ fontWeight: 600, color: "var(--color-fg)" }}>{group.label}</span>
                <span style={{ color: "var(--color-muted)" }}> · {group.items.join(" · ")}</span>
              </p>
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
                      ·{" "}
                      {role.url ? (
                        <a
                          href={role.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "inherit", textDecoration: "underline", textUnderlineOffset: "3px" }}
                        >
                          {role.company}
                        </a>
                      ) : (
                        role.company
                      )}{" "}
                      — {role.location}
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
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
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
          <div>
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
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
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
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
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
