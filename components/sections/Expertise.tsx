"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CircularText from "@/components/ui/CircularText";
import VariableProximity from "@/components/ui/VariableProximity";

export default function Expertise() {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section>
      <div
        ref={ref}
        className="container"
        style={{ paddingBlock: "3rem", paddingInline: 0 }}
      >
        <div className="flex flex-col md:flex-row md:items-start gap-12" style={{ justifyContent: "space-between" }}>

          {/* Left: label + paragraph */}
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ flex: 1, position: "relative", maxWidth: "700px" }}
          >
            <div
              className="text-muted"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "12px",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              
              What I do
            </div>
            <div style={{ position: "relative" }}>
              {/* Invisible spacer rendered at max weight — locks layout height so hover never causes shift */}
              <div
                aria-hidden="true"
                style={{
                  fontSize: "16px",
                  lineHeight: 1.55,
                  fontVariationSettings: "'wght' 450, 'opsz' 40",
                  visibility: "hidden",
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                My work lives at the intersection of three things: user-centred design, AI-powered systems, and visual craft. I create engaging, intuitive experiences through cohesive UX and design systems that elevate brands — spanning web, app, and end-to-end product design. I leverage AI to optimise design workflows, scale digital experiences, and explore what's possible at the edge of design and technology.
              </div>

              {/* Animated text — absolutely positioned over spacer, can't affect layout */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  overflow: "hidden",
                  fontSize: "16px",
                  lineHeight: 1.55,
                  color: "var(--neutral-95)",
                }}
              >
                <VariableProximity label="My work lives at the intersection of three things: " fromFontVariationSettings="'wght' 300, 'opsz' 9" toFontVariationSettings="'wght' 450, 'opsz' 40" containerRef={containerRef} radius={120} falloff="gaussian" />
                <VariableProximity label="user-centred design" fromFontVariationSettings="'wght' 600, 'opsz' 9" toFontVariationSettings="'wght' 700, 'opsz' 40" containerRef={containerRef} radius={120} falloff="gaussian" />
                <VariableProximity label=", " fromFontVariationSettings="'wght' 300, 'opsz' 9" toFontVariationSettings="'wght' 450, 'opsz' 40" containerRef={containerRef} radius={120} falloff="gaussian" />
                <VariableProximity label="AI-powered systems" fromFontVariationSettings="'wght' 600, 'opsz' 9" toFontVariationSettings="'wght' 700, 'opsz' 40" containerRef={containerRef} radius={120} falloff="gaussian" />
                <VariableProximity label=", and " fromFontVariationSettings="'wght' 300, 'opsz' 9" toFontVariationSettings="'wght' 450, 'opsz' 40" containerRef={containerRef} radius={120} falloff="gaussian" />
                <VariableProximity label="visual craft" fromFontVariationSettings="'wght' 600, 'opsz' 9" toFontVariationSettings="'wght' 700, 'opsz' 40" containerRef={containerRef} radius={120} falloff="gaussian" />
                <VariableProximity label=". I create engaging, intuitive experiences through cohesive UX and design systems that elevate brands — spanning web, app, and end-to-end product design. I leverage AI to optimise design workflows, scale digital experiences, and explore what's possible at the edge of design and technology." fromFontVariationSettings="'wght' 300, 'opsz' 9" toFontVariationSettings="'wght' 450, 'opsz' 40" containerRef={containerRef} radius={120} falloff="gaussian" />
              </div>
            </div>
          </motion.div>

          {/* Right: CircularText badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ flexShrink: 0, position: "relative", width: "130px", height: "130px", marginRight: "24px" }}
          >
            <CircularText
              text="BUILDING · AI · VISUAL · PRODUCT ·"
              spinDuration={18}
              onHover="slowDown"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none",
              }}
            >
              <img
                src="/images/dribbble/kidmograph.gif"
                alt=""
                style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "50%" }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
