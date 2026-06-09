"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import CircularText from "@/components/ui/CircularText";
import VariableProximity from "@/components/ui/VariableProximity";
import { CursorTooltip } from "@/components/ui/CursorTooltip";
import Image from "next/image";

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
      <p style={tooltipDescStyle}>Research-led design that puts people first — from discovery to delivery.</p>
      <div style={tooltipTagsStyle}>
        {["UX Research", "Journey Mapping", "Interaction Design", "Design Systems"].map(t => <TooltipTag key={t} label={t} />)}
      </div>
    </div>
  );
}

function TooltipAIPowered() {
  return (
    <div style={tooltipCardStyle}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Image src="/images/claude.webp" alt="" width={20} height={20} style={{ borderRadius: "50%" }} />
        <span style={tooltipTitleStyle}>AI-Powered Systems</span>
      </div>
      <p style={tooltipDescStyle}>Leveraging AI to accelerate design workflows and explore new creative possibilities.</p>
      <div style={tooltipTagsStyle}>
        {["Prompt Engineering", "Generative Design", "AI Workflows", "Automation"].map(t => <TooltipTag key={t} label={t} />)}
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
      <p style={tooltipDescStyle}>Thoughtful visual language that communicates clearly and leaves a lasting impression.</p>
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
                  top: 0,
                  left: 0,
                  right: 0,
                  fontSize: "16px",
                  lineHeight: 1.55,
                  color: "var(--color-muted)",
                }}
              >
                <VariableProximity label="My work lives at the intersection of three things: " fromFontVariationSettings="'wght' 300, 'opsz' 9" toFontVariationSettings="'wght' 450, 'opsz' 40" containerRef={containerRef} radius={120} falloff="gaussian" />
                <CursorTooltip content={<TooltipUserCentred />} containerClassName="inline">
                  <span style={{ color: "var(--color-fg)", cursor: "default", textDecoration: "underline", textDecorationColor: "var(--color-muted)", textUnderlineOffset: "3px", textDecorationThickness: "1px" }}><VariableProximity label="user-centred design" fromFontVariationSettings="'wght' 300, 'opsz' 9" toFontVariationSettings="'wght' 450, 'opsz' 40" containerRef={containerRef} radius={120} falloff="gaussian" /></span>
                </CursorTooltip>
                <VariableProximity label=", " fromFontVariationSettings="'wght' 300, 'opsz' 9" toFontVariationSettings="'wght' 450, 'opsz' 40" containerRef={containerRef} radius={120} falloff="gaussian" />
                <CursorTooltip content={<TooltipAIPowered />} containerClassName="inline">
                  <span style={{ color: "var(--color-fg)", cursor: "default", textDecoration: "underline", textDecorationColor: "var(--color-muted)", textUnderlineOffset: "3px", textDecorationThickness: "1px" }}><VariableProximity label="AI-powered systems" fromFontVariationSettings="'wght' 300, 'opsz' 9" toFontVariationSettings="'wght' 450, 'opsz' 40" containerRef={containerRef} radius={120} falloff="gaussian" /></span>
                </CursorTooltip>
                <VariableProximity label=", and " fromFontVariationSettings="'wght' 300, 'opsz' 9" toFontVariationSettings="'wght' 450, 'opsz' 40" containerRef={containerRef} radius={120} falloff="gaussian" />
                <CursorTooltip content={<TooltipVisualCraft />} containerClassName="inline">
                  <span style={{ color: "var(--color-fg)", cursor: "default", textDecoration: "underline", textDecorationColor: "var(--color-muted)", textUnderlineOffset: "3px", textDecorationThickness: "1px" }}><VariableProximity label="visual craft" fromFontVariationSettings="'wght' 300, 'opsz' 9" toFontVariationSettings="'wght' 450, 'opsz' 40" containerRef={containerRef} radius={120} falloff="gaussian" /></span>
                </CursorTooltip>
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
                style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "50%", border: "2px solid var(--border-item)" }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
