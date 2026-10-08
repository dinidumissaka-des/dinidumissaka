"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Frame = { src: string; position?: string };
type Loop =
  | { kind: "slides"; frames: Frame[]; interval: number; zoom?: boolean }
  | { kind: "phone"; frames: Frame[]; interval: number }
  | { kind: "wipe"; from: string; to: string; interval: number };

/** Simple loops built from each project's own screens; anything not listed keeps its still thumbnail. */
const loops: Record<string, Loop> = {
  deriv: {
    kind: "slides",
    interval: 2800,
    zoom: true,
    frames: [
      { src: "/images/home/projects/deriv.webp" },
      { src: "/images/projects/deriv/layout-360-1440.webp" },
      { src: "/images/projects/deriv/modular-component-library.webp" },
      { src: "/images/projects/deriv/responsive-type-scale.webp" },
    ],
  },
  planr: {
    kind: "slides",
    interval: 2800,
    zoom: true,
    frames: [
      { src: "/images/projects/planr/l2.webp" },
      { src: "/images/projects/planr/l1.webp" },
      { src: "/images/projects/planr/l3.webp" },
      { src: "/images/projects/planr/l4-1.webp" },
    ],
  },
  minti: {
    kind: "phone",
    interval: 2400,
    frames: [
      { src: "/images/projects/minti/expences.webp" },
      { src: "/images/projects/minti/insights.webp" },
      { src: "/images/projects/minti/subscriptions.webp" },
    ],
  },
  rata: {
    kind: "wipe",
    interval: 3000,
    from: "/images/projects/rata/brand-light.png",
    to: "/images/projects/rata/brand-dark.png",
  },
};

/** Plays only while on screen, and never for people who ask for reduced motion. */
function usePlaying<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.25 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, playing: visible && !reduced };
}

function useTick(playing: boolean, count: number, interval: number) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (!playing || count < 2) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), interval);
    return () => window.clearInterval(id);
  }, [playing, count, interval]);
  return index;
}

export default function ProjectThumb({ id, still, sizes, position }: { id: string; still: string; sizes: string; position: string }) {
  const loop = loops[id];
  const { ref, playing } = usePlaying<HTMLSpanElement>();
  const count = !loop ? 0 : loop.kind === "wipe" ? 2 : loop.frames.length;
  const index = useTick(playing, count, loop ? loop.interval : 0);

  const layer: React.CSSProperties = { position: "absolute", inset: 0 };

  return (
    <span ref={ref} aria-hidden="true" style={{ ...layer, display: "block" }}>
      {!loop && <Image src={still} alt="" fill sizes={sizes} style={{ objectFit: "cover", objectPosition: position }} />}

      {loop?.kind === "slides" &&
        loop.frames.map((f, i) => (
          <Image
            key={f.src}
            src={f.src}
            alt=""
            fill
            sizes={sizes}
            className="thumb-frame"
            style={{
              objectFit: "cover",
              objectPosition: f.position ?? "center",
              opacity: i === index ? 1 : 0,
              transform: loop.zoom && i === index && playing ? "scale(1.06)" : "scale(1)",
              transition: `opacity 0.8s ease, transform ${loop.interval + 800}ms linear`,
            }}
          />
        ))}

      {loop?.kind === "phone" && (
        <span
          style={{
            ...layer,
            display: "block",
            background: "radial-gradient(ellipse 60% 70% at 50% 0%, rgba(126, 211, 90, 0.28), transparent 70%), #0d120e",
          }}
        >
          {/* The phone rises from the bottom edge, the way the Minti case study cover frames it. */}
          <span style={{ position: "absolute", left: "50%", top: "12%", bottom: "-30%", aspectRatio: "900 / 1840", transform: "translateX(-50%)" }}>
            {loop.frames.map((f, i) => (
              <Image
                key={f.src}
                src={f.src}
                alt=""
                fill
                sizes="(max-width: 640px) 50vw, 240px"
                className="thumb-frame"
                style={{ objectFit: "contain", objectPosition: "top", opacity: i === index ? 1 : 0, transition: "opacity 0.6s ease" }}
              />
            ))}
          </span>
        </span>
      )}

      {loop?.kind === "wipe" && (
        <>
          <Image src={loop.from} alt="" fill sizes={sizes} style={{ objectFit: "cover", objectPosition: position }} />
          {/* The dark theme sweeps across like a theme toggle, then sweeps back. */}
          <span
            className="thumb-frame"
            style={{
              ...layer,
              display: "block",
              clipPath: index === 1 ? "inset(0 0 0 0)" : "inset(0 0 0 100%)",
              transition: "clip-path 0.9s cubic-bezier(0.65, 0, 0.35, 1)",
            }}
          >
            <Image src={loop.to} alt="" fill sizes={sizes} style={{ objectFit: "cover", objectPosition: position }} />
          </span>
        </>
      )}
    </span>
  );
}
