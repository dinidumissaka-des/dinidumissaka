"use client";

import { createContext, useContext, useState, type ReactNode, type CSSProperties } from "react";
import { motion } from "motion/react";

export type FlipButtonVariant = "default" | "ghost" | "outline" | "link";
export type FlipButtonSize = "default" | "sm" | "lg" | "icon";

export interface FlipButtonProps {
  children: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  variant?: FlipButtonVariant;
  size?: FlipButtonSize;
  style?: CSSProperties;
}

const FlipContext = createContext<{ hovered: boolean }>({ hovered: false });

export function FlipButton({ children, href, target, rel, style }: FlipButtonProps) {
  const [hovered, setHovered] = useState(false);

  const containerStyle: CSSProperties = {
    display: "inline-block",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    perspective: "500px",
    ...style,
  };

  const handlers = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  };

  const inner = (
    <FlipContext.Provider value={{ hovered }}>
      {children}
    </FlipContext.Provider>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} style={{ textDecoration: "none", ...containerStyle }} {...handlers}>
        {inner}
      </a>
    );
  }

  return (
    <button style={{ background: "none", border: "none", padding: 0, ...containerStyle }} {...handlers}>
      {inner}
    </button>
  );
}

interface FlipFaceProps {
  children: ReactNode;
  variant?: FlipButtonVariant;
  size?: FlipButtonSize;
  style?: CSSProperties;
}

export function FlipButtonFront({ children, style }: FlipFaceProps) {
  const { hovered } = useContext(FlipContext);

  return (
    <motion.span
      animate={hovered ? { rotateX: -90, opacity: 0 } : { rotateX: 0, opacity: 1 }}
      transition={{ duration: 0.22, ease: "easeIn" }}
      style={{
        display: "block",
        transformOrigin: "50% 0%",
        ...style,
      }}
    >
      {children}
    </motion.span>
  );
}

export function FlipButtonBack({ children, style }: FlipFaceProps) {
  const { hovered } = useContext(FlipContext);

  return (
    <motion.span
      animate={hovered ? { rotateX: 0, opacity: 1 } : { rotateX: 90, opacity: 0 }}
      transition={{ duration: 0.22, ease: "easeOut", delay: hovered ? 0.08 : 0 }}
      style={{
        display: "block",
        position: "absolute",
        inset: 0,
        transformOrigin: "50% 100%",
        ...style,
      }}
    >
      {children}
    </motion.span>
  );
}
