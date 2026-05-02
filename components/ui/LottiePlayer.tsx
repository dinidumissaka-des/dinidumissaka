"use client";

import Lottie from "lottie-react";

interface LottiePlayerProps {
  animationData: object;
  className?: string;
}

export default function LottiePlayer({ animationData, className }: LottiePlayerProps) {
  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      className={className}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
