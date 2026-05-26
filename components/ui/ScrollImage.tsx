"use client";
import { useRef, useEffect } from "react";

interface ScrollImageProps {
  src: string;
  alt?: string;
  speed?: number;
  style?: React.CSSProperties;
}

export default function ScrollImage({ src, alt = "", speed = 14, style }: ScrollImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const update = () => {
      if (ref.current) {
        ref.current.style.setProperty("--ch", `${ref.current.offsetHeight}px`);
      }
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes scroll-page {
          0%, 8%  { transform: translateY(0); }
          92%, 100% { transform: translateY(calc(-100% + var(--ch, 300px))); }
        }
      `}</style>
      <div
        ref={ref}
        style={{ overflow: "hidden", borderRadius: "12px", aspectRatio: "16 / 9", ...style }}
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          style={{
            width: "100%",
            display: "block",
            animation: `scroll-page ${speed}s ease-in-out infinite alternate`,
            pointerEvents: "none",
            userSelect: "none",
          }}
        />
      </div>
    </>
  );
}
