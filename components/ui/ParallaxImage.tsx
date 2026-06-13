"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import type { ImageProps } from "next/image";

/** Wrap native <img> elements inside an already-clipping container (e.g. Deriv's ImagePlaceholder) */
export function ParallaxWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  return (
    <motion.div ref={ref} style={{ y, scale: 1.1 }}>
      {children}
    </motion.div>
  );
}

interface ParallaxImageProps extends Omit<ImageProps, "style"> {
  style?: React.CSSProperties;
}

export default function ParallaxImage({ style = {}, ...imageProps }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const { borderRadius, aspectRatio, objectFit, width, height, display, ...restImageStyle } =
    style as Record<string, unknown>;

  return (
    <div
      ref={ref}
      style={{
        overflow: "hidden",
        borderRadius: borderRadius as string | undefined,
        aspectRatio: aspectRatio as string | undefined,
        width: width as string | undefined,
        position: "relative",
      }}
    >
      <motion.div style={{ y, scale: 1.1, height: aspectRatio ? "100%" : undefined }}>
        <Image
          style={{
            width: "100%",
            height: aspectRatio ? "100%" : ((height as string | undefined) ?? "auto"),
            objectFit: (aspectRatio ? "cover" : objectFit) as React.CSSProperties["objectFit"],
            display: "block",
            ...(restImageStyle as React.CSSProperties),
          }}
          {...imageProps}
        />
      </motion.div>
    </div>
  );
}
