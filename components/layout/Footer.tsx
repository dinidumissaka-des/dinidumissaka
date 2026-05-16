"use client";

import dynamic from "next/dynamic";
import {
  FlipButton,
  FlipButtonFront,
  FlipButtonBack,
} from "@/components/animate-ui/components/buttons/flip";

const Beams = dynamic(() => import("@/components/ui/Beams"), { ssr: false });

const socialLinks = [
  { label: "Email",     href: "mailto:dinidumissaka@gmail.com" },
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/dinidumissaka/", target: "_blank" },
  { label: "Dribbble",  href: "https://dribbble.com/dinidumissaka",          target: "_blank" },
  { label: "Instagram", href: "https://www.instagram.com/diniduu/",          target: "_blank" },
  { label: "X",         href: "https://x.com/DiniduMissaka",                 target: "_blank" },
];

const textStyle = {
  fontFamily: "var(--font-manrope), sans-serif",
  fontSize: "14px",
  color: "rgba(255,255,255,0.4)",
};

const linkTextStyle = {
  fontFamily: "var(--font-manrope), sans-serif",
  fontSize: "14px",
  fontWeight: 600,
  color: "rgba(255,255,255,0.4)",
};

export default function Footer() {
  return (
    <footer id="contact">
      <div
        className="container"
        style={{
          paddingBlock: "3rem",
          paddingInline: 0,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Dither — fills the container */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        >
          <Beams
            beamWidth={2}
            beamHeight={15}
            beamNumber={50}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={0}
          />
        </div>

        {/* Content above dither */}
        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Row 1: social links + location */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "32px",
            }}
          >
            <div style={{ display: "flex", gap: "32px" }}>
              {socialLinks.map((link) => (
                <FlipButton
                  key={link.label}
                  href={link.href}
                  target={link.target}
                  rel="noopener noreferrer"
                >
                  <FlipButtonFront style={linkTextStyle}>
                    {link.label}
                  </FlipButtonFront>
                  <FlipButtonBack style={{ ...linkTextStyle, color: "rgba(255,255,255,0.8)" }}>
                    {link.label}
                  </FlipButtonBack>
                </FlipButton>
              ))}
            </div>

            <span style={textStyle}>Dubai, UAE · Remote worldwide</span>
          </div>

          {/* Row 2: copyright + build credit */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ ...textStyle, fontStyle: "normal" }}>
              © {new Date().getFullYear()} · Dinidu Missaka.
            </span>

            <span style={{ ...textStyle, fontStyle: "normal" }}>
              Build with Claude Code · Shipped on Vercel
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
