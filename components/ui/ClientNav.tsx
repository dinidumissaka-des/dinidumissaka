"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClientThemeToggler } from "@/components/ui/ClientThemeToggler";
import {
  FlipButton,
  FlipButtonFront,
  FlipButtonBack,
} from "@/components/animate-ui/components/buttons/flip";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "/resume.pdf", target: "_blank" },
];

const linkStyle = {
  fontFamily: "var(--font-manrope), sans-serif",
  fontSize: "14px",
  fontWeight: 600,
};

export function ClientNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop: sidebar */}
      <div className="hidden md:flex flex-col items-end gap-4">
        <ClientThemeToggler
          modes={["light", "dark"]}
          variant="ghost"
          size="xs"
          style={{
            background: "var(--bg-subtle)",
            borderRadius: "8px",
            width: "28px",
            height: "28px",
          }}
        />
        <nav style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}>
          {navLinks.map((link) => (
            <FlipButton key={link.label} href={link.href} target={link.target} rel="noopener noreferrer">
              <FlipButtonFront style={{ ...linkStyle, color: "var(--color-fg)" }}>
                {link.label}
              </FlipButtonFront>
              <FlipButtonBack style={{ ...linkStyle, color: "var(--fg-80)" }}>
                {link.label}
              </FlipButtonBack>
            </FlipButton>
          ))}
        </nav>
      </div>

      {/* Mobile: theme toggler + hamburger */}
      <div className="flex md:hidden flex-col items-end gap-3">
        <ClientThemeToggler
          modes={["light", "dark"]}
          variant="ghost"
          size="xs"
          style={{
            background: "var(--bg-subtle)",
            borderRadius: "8px",
            width: "28px",
            height: "28px",
          }}
        />
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          style={{
            background: "var(--bg-subtle)",
            border: "none",
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
          <motion.svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <motion.line
              x1="1" y1="3.5" x2="13" y2="3.5"
              animate={open ? { y: 3, rotate: 45 } : { y: 0, rotate: 0 }}
              transition={{ duration: 0.2 }}
              style={{ originX: "50%", originY: "50%" }}
            />
            <motion.line
              x1="1" y1="7" x2="13" y2="7"
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
            />
            <motion.line
              x1="1" y1="10.5" x2="13" y2="10.5"
              animate={open ? { y: -3, rotate: -45 } : { y: 0, rotate: 0 }}
              transition={{ duration: 0.2 }}
              style={{ originX: "50%", originY: "50%" }}
            />
          </motion.svg>
        </button>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "4px",
              }}
            >
              {navLinks.map((link) => (
                <FlipButton
                  key={link.label}
                  href={link.href}
                  target={link.target}
                  rel="noopener noreferrer"
                >
                  <FlipButtonFront style={{ ...linkStyle, color: "var(--color-fg)" }}>
                    {link.label}
                  </FlipButtonFront>
                  <FlipButtonBack style={{ ...linkStyle, color: "var(--fg-80)" }}>
                    {link.label}
                  </FlipButtonBack>
                </FlipButton>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
