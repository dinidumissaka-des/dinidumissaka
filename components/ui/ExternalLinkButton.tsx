"use client";

import { ArrowUpRight } from "lucide-react";
import {
  FlipButton,
  FlipButtonFront,
  FlipButtonBack,
} from "@/components/animate-ui/components/buttons/flip";
import type { CSSProperties } from "react";

const faceStyle: CSSProperties = {
  fontFamily: "var(--font-manrope), sans-serif",
  fontSize: "14px",
  fontWeight: 600,
  color: "var(--color-fg)",
  display: "flex",
  alignItems: "center",
  gap: "6px",
};

export default function ExternalLinkButton({
  href,
  label,
  style,
  color,
}: {
  href: string;
  label: string;
  style?: CSSProperties;
  color?: string;
}) {
  const face: CSSProperties = color ? { ...faceStyle, color } : faceStyle;
  return (
    <FlipButton href={href} target="_blank" rel="noopener noreferrer" style={style}>
      <FlipButtonFront style={face}>
        {label}
        <ArrowUpRight size={14} strokeWidth={1.5} />
      </FlipButtonFront>
      <FlipButtonBack style={{ ...face, color: color ? `${color}cc` : "var(--fg-80)" }}>
        {label}
        <ArrowUpRight size={14} strokeWidth={1.5} />
      </FlipButtonBack>
    </FlipButton>
  );
}
