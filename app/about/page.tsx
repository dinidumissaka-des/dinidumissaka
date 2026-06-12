import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { CometCard } from "@/components/ui/comet-card";
import { UserPresenceAvatar } from "@/components/animate-ui/components/community/user-presence-avatar";
import { SkillIconRow } from "@/components/ui/SkillIconRow";
import { AIProcessLoader } from "@/components/ui/AIProcessLoader";
import VisualJournalCard from "@/components/ui/VisualJournalCard";

export const metadata: Metadata = {
  title: "About — Dinidu Missaka",
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
    url: "https://www.revox.io/",
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
    url: "https://www.revox.io/",
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
    url: "https://synexticglobal.com/contact/",
    location: "Pune, India",
    period: "Aug 2020 – Jul 2021",
    bullets: [
      "Designed SaaS websites and e-commerce platforms with end-to-end UX/UI, brand identity, and creative asset development",
    ],
  },
  {
    title: "UI/UX Design Intern",
    company: "Amplifyn",
    url: "https://www.amplifyn.com/",
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
    date: "2019",
    desc: "Participated in the Google Creative Campus 2019 Cannes Lions and Mountain View Programme, benefiting from a global learning platform that introduced new, diverse, and forward-thinking perspectives. This experience facilitated the expansion of my professional network, connecting me with creatives worldwide.",
    url: null,
  },
  {
    title: "Roger Hatchuel Academy",
    org: "Cannes Lions School of Creativity",
    date: "2019",
    desc: "Represented Sri Lanka at Roger Hatchuel Academy 2019, part of the Cannes Lions International Festival of Creativity in France, among a group of 40 students from 32 nations. Explored diverse creative career avenues and gained valuable insights through a carefully curated learning program.",
    url: "https://www.dailymirror.lk/press-releases/11-young-Sri-Lankan-advertising-professionals-will-vie-for-Gold-at-the-Cannes-Young-Lions-competitio/335-167830",
  },
  {
    title: "Best Student — Media and Communication Design",
    org: "University of Moratuwa",
    date: "Jul 2021",
    desc: "Awarded highest marks in the final year Comprehensive Design Project.",
    url: null,
  },
];

const certifications = [
  { label: "Claude Code in Action — Anthropic · Mar 2026", url: "http://verify.skilljar.com/c/r6w7duybsqy2" },
  { label: "AI Fluency: Framework & Foundations — Anthropic · Nov 2025", url: "https://verify.skilljar.com/c/6t9s4b3ot2oi" },
  { label: "UX Design Patterns with Checklist Design — Uxcel", url: "https://app.uxcel.com/certificates/UXJ5TMD8IGKV" },
  { label: "Mobile Design — Uxcel", url: "https://app.uxcel.com/certificates/53JMWUSHSE6E" },
  { label: "Foundations of User Experience (UX) Design — Google", url: "https://www.coursera.org/account/accomplishments/verify/UC677G5MN2WZ" },
  { label: "UX Management: Strategy and Tactics — Interaction Design Foundation (IxDF)", url: "https://www.interaction-design.org/dinidu-senevirathne/certificate/course/69e0aef2-2d4e-46ed-b81a-e07c766d1258?certificateType=course" },
  { label: "Human-Computer Interaction (HCI) — Interaction Design Foundation (IxDF)", url: "https://www.interaction-design.org/dinidu-senevirathne/certificate/course/ba1afd23-55bd-421c-9b7c-9d7aed54829f" },
  { label: "Accessibility: How to Design for All — Interaction Design Foundation (IxDF)", url: "https://www.linkedin.com/in/dinidumissaka/details/certifications/#:~:text=Credential%20ID%2086354-,Show%20credential,-Conducting%20Usability%20Testing" },
  { label: "Service Design: Integrated Service Experience — Interaction Design Foundation (IxDF)", url: "https://www.interaction-design.org/dinidu-senevirathne/certificate/course/310e850a-e6ce-4ebc-8bbc-4b7c7d25f99f" },
  { label: "Web Design for Usability — Interaction Design Foundation (IxDF) · Nov 2020", url: "https://www.interaction-design.org/dinidu-senevirathne/certificate/course/b1e361de-91c0-412f-a910-76b421ad94ef?certificateType=course" },
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
                  src="/avatar.webp"
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
            <div style={{ marginTop: "28px" }}>
              <AIProcessLoader />
            </div>
          </div>
          </div>
        </div>

        {/* Skills */}
        <div style={divider}>
          <p style={sectionLabel}>Skills</p>
          <h2 style={sectionTitle}>Craft &amp; tooling</h2>
          <SkillIconRow />
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
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "8px", marginBottom: "4px" }}>
              <span style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: "14px", fontWeight: 600, color: "var(--color-fg)" }}>
                University of Moratuwa
              </span>
              <span style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: "11px", color: "var(--color-muted)", whiteSpace: "nowrap" }}>
                2017 – 2021
              </span>
            </div>
            <div style={{ marginBottom: "12px" }}>
              <span style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: "13px", color: "var(--color-muted)" }}>
                Bachelor of Design Honors, Media and Communication Design
              </span>
            </div>
            <div style={{ marginBottom: "16px" }}>
              <span style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: "13px", color: "var(--color-muted)" }}>
                Grade: First-Class Honors
              </span>
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                "Graduated with First-Class Honors in Media and Communication Design with an GPA of 3.86.",
                "Consistently recognized on the Dean's List for four semesters.",
                "Outstanding student in Media and Communication Design, with top marks in the final year.",
                "Successfully completed a final project focused on fostering creative thinking skills in young adolescents through a participatory design-driven mobile application.",
                "Conducted a dissertation on the enhancement of web accessibility for local online banking web applications, with a particular focus on improving usability for visually impaired users.",
              ].map((item, i) => (
                <li key={i} style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: "13px", lineHeight: 1.7, color: "var(--color-muted)" }}>
                  {item}
                </li>
              ))}
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
                    {award.url ? (
                      <a
                        href={award.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "inherit", textDecoration: "underline", textUnderlineOffset: "3px" }}
                      >
                        {award.title}
                      </a>
                    ) : (
                      award.title
                    )}
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
        <div style={divider}>
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
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit", textDecoration: "underline", textUnderlineOffset: "3px" }}
                  >
                    {cert.label}
                  </a>
                ) : (
                  cert.label
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Visual Journal */}
        <div>
          <VisualJournalCard />
        </div>
      </div>
    </main>
  );
}
