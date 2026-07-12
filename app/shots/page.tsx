import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShotItem } from "@/components/ui/ShotItem";

export const metadata: Metadata = {
  title: "Shots — Dinidu Missaka",
  description: "Design shots and explorations from Dribbble.",
};

const localShots: { src: string; type: "image" | "video" }[] = [
  { src: "/images/shots/shot-14.mp4", type: "video" },
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
  { src: "/images/shots/shot-15.mp4", type: "video" },
  { src: "/images/shots/shot-16.webp", type: "image" },
  { src: "/images/shots/shot-17.webp", type: "image" },
  { src: "/images/shots/shots-01.webp", type: "image" },
  { src: "/images/shots/shots-02.webp", type: "image" },
  { src: "/images/shots/shots-03.webp", type: "image" },
  { src: "/images/shots/shots-04.webp", type: "image" },
  { src: "/images/shots/shots-05.webp", type: "image" },
  { src: "/images/shots/shots-06.webp", type: "image" },
  { src: "/images/shots/shots-07.webp", type: "image" },
  { src: "/images/shots/shots-08.webp", type: "image" },
  { src: "/images/shots/shots-09.webp", type: "image" },
  { src: "/images/shots/shots-10.webp", type: "image" },
  { src: "/images/shots/shots-11.webp", type: "image" },
  { src: "/images/shots/shots-12.webp", type: "image" },
  { src: "/images/shots/shots-13.webp", type: "image" },
  { src: "/images/shots/shots-14.webp", type: "image" },
  { src: "/images/shots/shots-15.webp", type: "image" },
  { src: "/images/shots/shots-16.webp", type: "image" },
  { src: "/images/shots/shots-17.webp", type: "image" },
  { src: "/images/shots/shots-18.webp", type: "image" },
  { src: "/images/shots/shots-19.webp", type: "image" },
  { src: "/images/shots/shots-20.webp", type: "image" },
  { src: "/images/shots/shots-21.webp", type: "image" },
  { src: "/images/shots/shots-22.webp", type: "image" },
  { src: "/images/shots/shots-23.webp", type: "image" },
  { src: "/images/shots/shots-24.webp", type: "image" },
  { src: "/images/shots/shots-25.webp", type: "image" },
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


        <div className="grid grid-cols-1" style={{ gap: "24px" }}>
          {localShots.map((shot) =>
            shot.type === "video" ? (
              <ShotItem key={shot.src}>
                <div
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
              </ShotItem>
            ) : (
              <ShotItem key={shot.src}>
                <div
                  className="relative overflow-hidden bg-surface"
                  style={{ aspectRatio: "4 / 3" }}
                >
                  <Image
                    src={shot.src}
                    alt="Design shot"
                    fill
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </ShotItem>
            )
          )}
        </div>
      </div>
    </main>
  );
}
