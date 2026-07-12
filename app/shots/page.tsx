import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shots — Dinidu Missaka",
  description: "Design shots and explorations from Dribbble.",
};

const localShots: { src: string; type: "image" | "video" }[] = [
  { src: "/images/shots/shot-04.webp", type: "image" },
  { src: "/images/shots/shot-05.webp", type: "image" },
  { src: "/images/shots/shot-06.webp", type: "image" },
  { src: "/images/shots/shot-07.webp", type: "image" },
  { src: "/images/shots/shot-08.webp", type: "image" },
  { src: "/images/shots/shot-09.webp", type: "image" },
  { src: "/images/shots/shot-10.webp", type: "image" },
  { src: "/images/shots/shot-11.webp", type: "image" },
  { src: "/images/shots/shot-12.webp", type: "image" },
  { src: "/images/shots/shot-13.webp", type: "image" },
  { src: "/images/shots/shot-14.mp4", type: "video" },
  { src: "/images/shots/shot-15.mp4", type: "video" },
  { src: "/images/shots/shot-16.png", type: "image" },
  { src: "/images/shots/shot-17.png", type: "image" },
  { src: "/images/shots/shots-01.png", type: "image" },
  { src: "/images/shots/shots-02.png", type: "image" },
  { src: "/images/shots/shots-03.png", type: "image" },
  { src: "/images/shots/shots-04.png", type: "image" },
  { src: "/images/shots/shots-05.png", type: "image" },
  { src: "/images/shots/shots-06.png", type: "image" },
  { src: "/images/shots/shots-07.png", type: "image" },
  { src: "/images/shots/shots-08.png", type: "image" },
  { src: "/images/shots/shots-09.png", type: "image" },
  { src: "/images/shots/shots-10.png", type: "image" },
  { src: "/images/shots/shots-11.png", type: "image" },
  { src: "/images/shots/shots-12.png", type: "image" },
  { src: "/images/shots/shots-13.png", type: "image" },
  { src: "/images/shots/shots-14.png", type: "image" },
  { src: "/images/shots/shots-15.png", type: "image" },
  { src: "/images/shots/shots-16.png", type: "image" },
  { src: "/images/shots/shots-17.png", type: "image" },
  { src: "/images/shots/shots-18.png", type: "image" },
  { src: "/images/shots/shots-19.png", type: "image" },
  { src: "/images/shots/shots-20.png", type: "image" },
  { src: "/images/shots/shots-21.png", type: "image" },
  { src: "/images/shots/shots-22.png", type: "image" },
  { src: "/images/shots/shots-23.png", type: "image" },
  { src: "/images/shots/shots-24.png", type: "image" },
  { src: "/images/shots/shots-25.png", type: "image" },
  { src: "/images/shots/shot-01.webp", type: "image" },
  { src: "/images/shots/shot-02.webp", type: "image" },
  { src: "/images/shots/shot-03.webp", type: "image" },
];

export default function ShotsPage() {

  return (
    <main>
      <div className="container" style={{ paddingBlock: "4rem", paddingInline: 0 }}>
        {/* Back */}
        <Link
          href="/"
          className="text-muted"
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontSize: "12px",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            marginBottom: "2.5rem",
            textDecoration: "none",
          }}
        >
          ← Back
        </Link>


        <div className="grid grid-cols-2" style={{ gap: "24px" }}>
          {localShots.map((shot) =>
            shot.type === "video" ? (
              <div
                key={shot.src}
                className="relative overflow-hidden bg-surface"
                style={{ aspectRatio: "4 / 3" }}
              >
                {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                <video
                  src={shot.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            ) : (
              <div
                key={shot.src}
                className="relative overflow-hidden bg-surface"
                style={{ aspectRatio: "4 / 3" }}
              >
                <Image
                  src={shot.src}
                  alt="Design shot"
                  fill
                  sizes="(max-width: 767px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            )
          )}

        </div>
      </div>
    </main>
  );
}
