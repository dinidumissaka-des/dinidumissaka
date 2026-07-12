"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export function ShotItem({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0.88, 1, 1, 0.88]
  );

  return (
    <motion.div ref={ref} style={{ scale, transformOrigin: "center" }}>
      {children}
    </motion.div>
  );
}
