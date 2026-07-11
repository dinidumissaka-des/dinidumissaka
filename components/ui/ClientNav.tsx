"use client";

import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { ClientThemeToggler } from "@/components/ui/ClientThemeToggler";
import {
  FlipButton,
  FlipButtonFront,
  FlipButtonBack,
} from "@/components/animate-ui/components/buttons/flip";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/#projects" },
  { label: "Shots", href: "/shots" },
  { label: "Resume", href: "https://drive.google.com/file/d/1-5BZ6Otsbe70oSZJWtReqyWTn_M0VDlF/view?usp=sharing", target: "_blank" },
];

const socialLinks = [
  { label: "Email",     href: "mailto:dinidumissaka@gmail.com" },
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/dinidumissaka/", target: "_blank" },
  { label: "Dribbble",  href: "https://dribbble.com/dinidumissaka", target: "_blank" },
  { label: "Instagram", href: "https://www.instagram.com/diniduu/", target: "_blank" },
  { label: "X",         href: "https://x.com/DiniduMissaka", target: "_blank" },
];

const linkStyle = {
  fontFamily: "var(--font-manrope), sans-serif",
  fontSize: "14px",
  fontWeight: 600,
};

const togglerProps = {
  modes: ["light", "dark"] as ("light" | "dark")[],
  variant: "ghost" as const,
  size: "xs" as const,
  style: {
    background: "var(--bg-subtle)",
    borderRadius: "8px",
    width: "28px",
    height: "28px",
  },
};

export function ClientNav() {
  const pathname = usePathname();
  if (pathname === "/visual-journal") return null;

  return (
    <>
      {/* ── Mobile topnav ── */}
      <div
        className="mobile-topnav"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 16px",
          background: "var(--color-bg)",
        }}
      >
        <ClientThemeToggler {...togglerProps} />
        <nav style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.target}
              rel="noopener noreferrer"
              style={{
                ...linkStyle,
                color: "var(--color-fg)",
                textDecoration: "none",
                fontSize: "13px",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* ── Desktop sidebar ── */}
      <div
        className="desktop-sidebar"
        style={{
          position: "fixed",
          top: "3rem",
          right: 0,
          zIndex: 9999,
          pointerEvents: "none",
        }}
      >
        <div>
          <div style={{ pointerEvents: "auto", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "16px", paddingRight: "2px" }}>
            <ClientThemeToggler {...togglerProps} />
            <nav style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}>
              {navLinks.map((link) => (
                <FlipButton key={link.label} href={link.href} target={link.target} rel="noopener noreferrer">
                  <FlipButtonFront style={{ ...linkStyle, color: "var(--color-fg)" }}>{link.label}</FlipButtonFront>
                  <FlipButtonBack style={{ ...linkStyle, color: "var(--fg-80)" }}>{link.label}</FlipButtonBack>
                </FlipButton>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
