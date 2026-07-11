"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
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
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          justifyContent: "flex-end",
          gap: "8px",
          padding: "12px 16px",
          background: "var(--color-bg)",
        }}
      >
        <ClientThemeToggler {...togglerProps} />
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          style={{
            background: "var(--bg-subtle)",
            border: `1.5px solid ${open ? "var(--color-accent)" : "transparent"}`,
            borderRadius: "8px",
            width: "28px",
            height: "28px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--color-fg)",
          }}
        >
          <motion.svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <motion.line x1="1" y1="3.5" x2="13" y2="3.5" animate={open ? { y: 3, rotate: 45 } : { y: 0, rotate: 0 }} transition={{ duration: 0.2 }} style={{ originX: "50%", originY: "50%" }} />
            <motion.line x1="1" y1="7" x2="13" y2="7" animate={open ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.15 }} />
            <motion.line x1="1" y1="10.5" x2="13" y2="10.5" animate={open ? { y: -3, rotate: -45 } : { y: 0, rotate: 0 }} transition={{ duration: 0.2 }} style={{ originX: "50%", originY: "50%" }} />
          </motion.svg>
        </button>
      </div>

      {/* ── Mobile dropdown ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-topnav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: "fixed",
              top: "52px",
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 9998,
              background: "var(--color-bg)",
              overflow: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.target}
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  style={{
                    ...linkStyle,
                    color: "var(--color-fg)",
                    textDecoration: "none",
                    padding: "14px 0 14px 16px",
                    display: "block",
                    textAlign: "right",
                    borderBottom: "1px solid var(--border-section)",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Social links — pinned to bottom */}
            <div style={{ borderTop: "1px solid var(--border-section)", padding: "20px 16px 32px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginBottom: "12px" }}>
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.target}
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    style={{
                      ...linkStyle,
                      color: "var(--color-fg)",
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <p style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: "12px", color: "var(--color-muted)", margin: 0 }}>
                Dubai, UAE · Remote worldwide
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Desktop topnav ── */}
      <div
        className="desktop-sidebar"
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "860px",
          zIndex: 9999,
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          maskImage: scrolled ? "linear-gradient(to bottom, black 50%, transparent 100%)" : "none",
          WebkitMaskImage: scrolled ? "linear-gradient(to bottom, black 50%, transparent 100%)" : "none",
          transition: "backdrop-filter 0.3s ease",
        }}
      >
        <div style={{
          padding: "12px 2px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "24px",
        }}>
          <nav style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            {navLinks.map((link) => (
              <FlipButton key={link.label} href={link.href} target={link.target} rel="noopener noreferrer">
                <FlipButtonFront style={{ ...linkStyle, color: "var(--color-fg)" }}>{link.label}</FlipButtonFront>
                <FlipButtonBack style={{ ...linkStyle, color: "var(--fg-80)" }}>{link.label}</FlipButtonBack>
              </FlipButton>
            ))}
          </nav>
          <ClientThemeToggler {...togglerProps} />
        </div>
      </div>
    </>
  );
}
