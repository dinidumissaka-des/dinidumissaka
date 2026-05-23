"use client";

import { usePathname } from "next/navigation";
import {
  FlipButton,
  FlipButtonFront,
  FlipButtonBack,
} from "@/components/animate-ui/components/buttons/flip";

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
  color: "var(--fg-40)",
};

const linkTextStyle = {
  fontFamily: "var(--font-manrope), sans-serif",
  fontSize: "14px",
  fontWeight: 600,
  color: "var(--color-fg)",
};

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/visual-journal") return null;
  return (
    <footer id="contact">
      <div
        className="container"
        style={{
          paddingBlock: "3rem",
        }}
      >
        <div>
          {/* Row 1: social links + location */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0" style={{ marginBottom: "32px" }}>
            <div className="flex flex-wrap gap-6">
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
                  <FlipButtonBack style={{ ...linkTextStyle, color: "var(--fg-80)" }}>
                    {link.label}
                  </FlipButtonBack>
                </FlipButton>
              ))}
            </div>

            <span style={textStyle}>Dubai, UAE · Remote worldwide</span>
          </div>

          {/* Row 2: copyright + build credit */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0">
            <span style={{ ...textStyle, fontStyle: "normal" }}>
              © {new Date().getFullYear()} · Dinidu Missaka.
            </span>

            <span style={{ ...textStyle, fontFamily: "var(--font-fraunces), Georgia, serif", fontStyle: "italic" }}>
              Build with Claude Code · Shipped on Vercel
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
