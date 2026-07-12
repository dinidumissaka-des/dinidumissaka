"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { useInView } from "motion/react";

const Stack = dynamic(() => import("@/components/ui/Stack"), { ssr: false });

const journalImages = [
  "/images/visual-journal/image-1.avif",
  "/images/visual-journal/image-2.avif",
  "/images/visual-journal/image-3.avif",
  "/images/visual-journal/image-4.avif",
  "/images/visual-journal/image-5.avif",
  "/images/visual-journal/image-6.avif",
  "/images/visual-journal/image-7.avif",
  "/images/visual-journal/image-8.avif",
];

export default function VisualJournalCard() {
  const ref = useRef<HTMLAnchorElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Link
      ref={ref}
      href="/visual-journal"
      style={{
        background: "var(--bg-card)",
        borderRadius: "16px",
        overflow: "hidden",
        padding: "48px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "28px",
        textDecoration: "none",
        cursor: "pointer",
        marginTop: "3rem",
      }}
    >
      <div style={{ width: "280px", height: "360px", margin: "0 auto" }}>
        {inView && (
          <Stack
            randomRotation
            sensitivity={180}
            sendToBackOnClick
            autoplay
            autoplayDelay={2500}
            pauseOnHover
            cards={journalImages.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={src}
                alt={`journal-${i + 1}`}
                className="card-image"
              />
            ))}
          />
        )}
      </div>
      <p
        style={{
          fontFamily: "var(--font-fraunces), Georgia, serif",
          fontSize: "16px",
          fontWeight: 300,
          color: "var(--color-muted)",
          margin: 0,
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
      >
        Visual Journal
        <ArrowUpRight size={14} strokeWidth={1.5} />
      </p>
    </Link>
  );
}
