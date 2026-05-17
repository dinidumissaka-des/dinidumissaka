"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ThemeTogglerButton from "@/components/ui/ThemeTogglerButton";

const navLinks = [
  { label: "Cases", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "/resume.pdf", external: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none"
    >
      <div
        className={`pointer-events-auto flex items-center justify-between gap-6 px-4 py-2.5 transition-all duration-300 ${
          scrolled
            ? "rounded-full backdrop-blur-md bg-neutral-00/70 border border-border shadow-lg w-full max-w-2xl"
            : "w-full max-w-5xl"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="px-3 py-1 border border-neutral-20 rounded-lg text-fg font-semibold tracking-tight hover:border-accent transition-colors shrink-0"
          style={{ fontSize: "var(--text-p)" }}
        >
          Dinidu.
        </Link>

        {/* Center nav links */}
        <nav className="flex items-center gap-1">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-muted hover:text-fg transition-colors rounded-full hover:bg-surface"
                style={{ fontSize: "var(--text-p)" }}
              >
                {link.label} ↗
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-muted hover:text-fg transition-colors rounded-full hover:bg-surface"
                style={{ fontSize: "var(--text-p)" }}
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* Right: Contact + Theme toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <ThemeTogglerButton />
          <a
            href="#contact"
            className="px-5 py-2 rounded-full bg-accent text-white font-medium hover:bg-brand-primary-dark transition-colors"
            style={{ fontSize: "var(--text-p)" }}
          >
            Contact
          </a>
        </div>
      </div>
    </motion.header>
  );
}
