"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useInView } from "motion/react";
import Image from "next/image";

const CircularText    = dynamic(() => import("@/components/ui/CircularText"),    { ssr: false });
const VariableProximity = dynamic(() => import("@/components/ui/VariableProximity"), { ssr: false });
const CursorTooltip   = dynamic(() => import("@/components/ui/CursorTooltip").then(m => ({ default: m.CursorTooltip })), { ssr: false });

const tooltipCardStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const tooltipTitleStyle: React.CSSProperties = {
  fontFamily: "var(--font-manrope), sans-serif",
  fontSize: "13px",
  fontWeight: 700,
  color: "var(--color-fg)",
  lineHeight: 1.2,
};

const tooltipDescStyle: React.CSSProperties = {
  fontFamily: "var(--font-manrope), sans-serif",
  fontSize: "12px",
  fontWeight: 400,
  color: "var(--color-muted)",
  lineHeight: 1.5,
};

const tooltipTagsStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "4px",
};

function TooltipTag({ label }: { label: string }) {
  return (
    <span style={{
      fontFamily: "var(--font-manrope), sans-serif",
      fontSize: "10px",
      fontWeight: 600,
      color: "var(--color-muted)",
      background: "var(--bg-subtle, rgba(0,0,0,0.06))",
      borderRadius: "9999px",
      padding: "2px 8px",
      lineHeight: 1.6,
    }}>
      {label}
    </span>
  );
}

function TooltipUserCentred() {
  return (
    <div style={tooltipCardStyle}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Image src="/images/figma.webp" alt="" width={20} height={20} style={{ borderRadius: "50%" }} />
        <span style={tooltipTitleStyle}>User-Centred Design</span>
      </div>
      <p style={tooltipDescStyle}>Research shapes what gets built, and real use decides what changes.</p>
      <div style={tooltipTagsStyle}>
        {["UX Research", "Usability Testing", "Interaction Design", "Journey Mapping"].map(t => <TooltipTag key={t} label={t} />)}
      </div>
    </div>
  );
}

function TooltipAIPowered() {
  return (
    <div style={tooltipCardStyle}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Image src="/images/claude.webp" alt="" width={20} height={20} style={{ borderRadius: "50%" }} />
        <span style={tooltipTitleStyle}>Building with AI</span>
      </div>
      <p style={tooltipDescStyle}>Figma MCP, Claude Code and written specs turn design decisions into shipped, tested product.</p>
      <div style={tooltipTagsStyle}>
        {["Claude Code", "Figma MCP", "Spec-Driven Design", "Design Tokens"].map(t => <TooltipTag key={t} label={t} />)}
      </div>
    </div>
  );
}

function TooltipVisualCraft() {
  return (
    <div style={tooltipCardStyle}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Image src="/images/adobe-creative.webp" alt="" width={20} height={20} style={{ borderRadius: "50%" }} />
        <span style={tooltipTitleStyle}>Visual Craft</span>
      </div>
      <p style={tooltipDescStyle}>An eye for type, spacing and detail, applied until nothing feels off.</p>
      <div style={tooltipTagsStyle}>
        {["Brand Identity", "Typography", "Illustration", "Visual Systems"].map(t => <TooltipTag key={t} label={t} />)}
      </div>
    </div>
  );
}

export default function Expertise() {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section>
      <div
        ref={ref}
        className="container"
        style={{ paddingBlock: "3rem" }}
      >
        <div className="flex flex-col md:flex-row md:items-start gap-12" style={{ justifyContent: "space-between" }}>

          {/* Left: label + paragraph */}
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ flex: 1, position: "relative" }}
          >
            <div
              className="text-muted"
              style={{
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "12px",
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              Expertise
            </div>
            <h2
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontSize: "32px",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "var(--color-fg)",
                marginBottom: "20px",
              }}
            >
              Design, AI &amp; craft
            </h2>
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
                The work sits where three things meet: user-centred design, building with AI, and visual craft. AI can generate a hundred versions of a screen. The value is knowing which one respects the user, fits the system and feels right, then shipping it. That judgement runs from a single token name to a 6,000-page website, and it ends in working product, not just files.
              </div>

              {/* Animated text — absolutely positioned over spacer, can't affect layout */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  fontSize: "16px",
                  lineHeight: 1.55,
                  color: "var(--color-muted)",
                }}
              >
                {inView && (<>
                  <VariableProximity label="The work sits where three things meet: " fromFontVariationSettings="'wght' 300, 'opsz' 9" toFontVariationSettings="'wght' 450, 'opsz' 40" containerRef={containerRef} radius={120} falloff="gaussian" />
                  <CursorTooltip content={<TooltipUserCentred />} containerClassName="inline">
                    <span style={{ color: "var(--color-fg)", cursor: "default", textDecoration: "underline", textDecorationColor: "var(--color-muted)", textUnderlineOffset: "3px", textDecorationThickness: "1px" }}><VariableProximity label="user-centred design" fromFontVariationSettings="'wght' 300, 'opsz' 9" toFontVariationSettings="'wght' 450, 'opsz' 40" containerRef={containerRef} radius={120} falloff="gaussian" /></span>
                  </CursorTooltip>
                  <VariableProximity label=", " fromFontVariationSettings="'wght' 300, 'opsz' 9" toFontVariationSettings="'wght' 450, 'opsz' 40" containerRef={containerRef} radius={120} falloff="gaussian" />
                  <CursorTooltip content={<TooltipAIPowered />} containerClassName="inline">
                    <span style={{ color: "var(--color-fg)", cursor: "default", textDecoration: "underline", textDecorationColor: "var(--color-muted)", textUnderlineOffset: "3px", textDecorationThickness: "1px" }}><VariableProximity label="building with AI" fromFontVariationSettings="'wght' 300, 'opsz' 9" toFontVariationSettings="'wght' 450, 'opsz' 40" containerRef={containerRef} radius={120} falloff="gaussian" /></span>
                  </CursorTooltip>
                  <VariableProximity label=", and " fromFontVariationSettings="'wght' 300, 'opsz' 9" toFontVariationSettings="'wght' 450, 'opsz' 40" containerRef={containerRef} radius={120} falloff="gaussian" />
                  <CursorTooltip content={<TooltipVisualCraft />} containerClassName="inline">
                    <span style={{ color: "var(--color-fg)", cursor: "default", textDecoration: "underline", textDecorationColor: "var(--color-muted)", textUnderlineOffset: "3px", textDecorationThickness: "1px" }}><VariableProximity label="visual craft" fromFontVariationSettings="'wght' 300, 'opsz' 9" toFontVariationSettings="'wght' 450, 'opsz' 40" containerRef={containerRef} radius={120} falloff="gaussian" /></span>
                  </CursorTooltip>
                  <VariableProximity label=". AI can generate a hundred versions of a screen. The value is knowing which one respects the user, fits the system and feels right, then shipping it. That judgement runs from a single token name to a 6,000-page website, and it ends in working product, not just files." fromFontVariationSettings="'wght' 300, 'opsz' 9" toFontVariationSettings="'wght' 450, 'opsz' 40" containerRef={containerRef} radius={120} falloff="gaussian" />
                </>)}
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
                style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "50%", border: "2px solid var(--border-item)" }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
