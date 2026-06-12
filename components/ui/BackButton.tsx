"use client";

import { ArrowLeft } from "lucide-react";
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

export default function BackButton({
  href = "/#projects",
  style,
  color,
}: {
  href?: string;
  style?: CSSProperties;
  color?: string;
}) {
  const face: CSSProperties = color ? { ...faceStyle, color } : faceStyle;
  return (
    <FlipButton href={href} style={style}>
      <FlipButtonFront style={face}>
        <ArrowLeft size={14} strokeWidth={1.5} />
        Back
      </FlipButtonFront>
      <FlipButtonBack style={face}>
        <ArrowLeft size={14} strokeWidth={1.5} />
        Back
      </FlipButtonBack>
    </FlipButton>
  );
}
