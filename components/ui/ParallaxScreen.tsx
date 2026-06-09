"use client";
import { useRef, useEffect } from "react";

const TOP_PADDING = 24; // px — visible space above the image in the resting state

interface ParallaxScreenProps {
  src: string;
  alt?: string;
}

export default function ParallaxScreen({ src, alt = "" }: ParallaxScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const update = () => {
      if (!containerRef.current || !imgRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const containerCenter = rect.top + rect.height / 2;
      const viewportCenter = vh / 2;

      // Hold at rest (with top padding offset) until container centre reaches viewport centre
      if (containerCenter >= viewportCenter) {
        imgRef.current.style.transform = `translateY(${TOP_PADDING}px)`;
        return;
      }

      const scrolledPast = viewportCenter - containerCenter;
      const totalRange = viewportCenter + rect.height / 2;
      const progress = Math.max(0, Math.min(1, scrolledPast / totalRange));

      // Image needs to travel from TOP_PADDING down to where its bottom aligns with container bottom
      const maxShift = -(imgRef.current.offsetHeight - containerRef.current.offsetHeight + TOP_PADDING);
      imgRef.current.style.transform = `translateY(${TOP_PADDING + progress * maxShift}px)`;
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="asset-bg"
      style={{
        aspectRatio: "4 / 3",
        overflow: "hidden",
        borderRadius: "16px",
        background: "rgba(0,0,0,0.04)",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        draggable={false}
        style={{
          width: "52%",
          height: "auto",
          display: "block",
          willChange: "transform",
          userSelect: "none",
          pointerEvents: "none",
          flexShrink: 0,
        }}
      />
    </div>
  );
}
