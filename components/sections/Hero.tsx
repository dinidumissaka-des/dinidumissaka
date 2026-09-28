"use client";

import { motion } from "motion/react";
import dynamic from "next/dynamic";

const CircularGallery = dynamic(() => import("@/components/ui/CircularGallery"), { ssr: false });

const galleryItems = [
  { image: "/images/hero/hero-01.avif", text: "" },
  { image: "/images/hero/hero-02.avif", text: "" },
  { image: "/images/hero/hero-03.webp", text: "" },
  { image: "/images/hero/hero-04.webp", text: "" },
  { image: "/images/hero/hero-05.webp", text: "" },
  { image: "/images/hero/hero-06.webp", text: "" },
];

export default function Hero() {
  return (
    <section className="relative flex flex-col">
      <div className="container">
        {/* Text block */}
        <div style={{ paddingTop: "3rem", paddingBottom: "16px", width: "95%" }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted mb-5"
            style={{ fontSize: "12px" }}
          >
            Product Designer&nbsp;|&nbsp;Design Systems&nbsp;|&nbsp;Builds with AI
          </motion.p>

          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: "48px",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontWeight: 300,
              color: "var(--color-fg)",
            }}
          >
            A Dubai-based product designer who{" "}
            <em style={{ fontStyle: "italic" }}>pairs taste with AI.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-7 text-muted leading-relaxed"
            style={{ fontSize: "14px" }}
          >
            5+ years in fintech and web, from a design system behind a 21M-visitor website to
            products live today. Designed in Figma and specs, built with Claude Code, and refined
            until every detail earns its place.
          </motion.p>
        </div>

        {/* Circular gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          style={{ height: "340px", position: "relative", overflow: "hidden" }}
        >
          <CircularGallery
            items={galleryItems}
            bend={0}
            borderRadius={0.05}
            scrollSpeed={2}
            scrollEase={0.02}
          />
        </motion.div>
      </div>
    </section>
  );
}
