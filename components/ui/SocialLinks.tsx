"use client";

const socials = [
  { label: "Email",     href: "mailto:dinidumissaka@gmail.com" },
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/dinidumissaka/" },
  { label: "Dribbble",  href: "https://dribbble.com/dinidumissaka" },
  { label: "Instagram", href: "https://www.instagram.com/diniduu/" },
  { label: "X",         href: "https://x.com/DiniduMissaka" },
];

export function SocialLinks() {
  return (
    <div style={{ flexShrink: 0, paddingTop: "8px" }}>
      <p style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: "12px", color: "var(--color-muted)", marginBottom: "16px" }}>
        Connect
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: "13px",
              fontWeight: 500,
              color: "var(--color-muted)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              transition: "color 0.15s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--color-fg)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--color-muted)")}
          >
            {s.label}
            <span style={{ fontSize: "10px", opacity: 0.5 }}>↗</span>
          </a>
        ))}
      </div>
    </div>
  );
}
