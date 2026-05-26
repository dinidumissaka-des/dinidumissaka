"use client";

import Lottie from "lottie-react";
import type { CSSProperties } from "react";

export default function LottiePlayer({
  src,
  style,
}: {
  src: object;
  style?: CSSProperties;
}) {
  return (
    <Lottie
      animationData={src}
      loop
      autoplay
      style={{ width: "100%", borderRadius: "12px", ...style }}
    />
  );
}
