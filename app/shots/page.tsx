import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getDribbbleShots } from "@/lib/dribbble";

export const metadata: Metadata = {
  title: "Shots — Dinidu Missaka",
  description: "Design shots and explorations from Dribbble.",
};

const localShots: { src: string; type: "image" | "video" }[] = [
  { src: "/images/shots/original-0a408fbf3f231a1b61f153bbad1ec3d0.webp", type: "image" },
  { src: "/images/shots/original-268d364f8e77ff54d2add6d5fa169359.webp", type: "image" },
  { src: "/images/shots/original-29ac1713653698a644b9f1fe22423594.webp", type: "image" },
  { src: "/images/shots/original-5fb6294eed3cecf86962a832d62b2733.webp", type: "image" },
  { src: "/images/shots/original-7298659fa77da3a6791e4d42293ec048.webp", type: "image" },
  { src: "/images/shots/original-ae1fc7650a75702eb697044c5e021bff.webp", type: "image" },
  { src: "/images/shots/original-c665a917a465d900a42d46df499f37ea.webp", type: "image" },
  { src: "/images/shots/original-da677f09a31e4f447240c2974aef79c3.webp", type: "image" },
  { src: "/images/shots/original-e244078a5f8bc1099f12c80c9a98e6ba.webp", type: "image" },
  { src: "/images/shots/0ce1dcf5d49ca40470b51f9348c40582.webp", type: "image" },
  { src: "/images/shots/38465931d877aef10b6a778901d1ad42.webp", type: "image" },
  { src: "/images/shots/699a6d641187d000912cd0338bae6d64.webp", type: "image" },
  { src: "/images/shots/901d1a0df4e1ed7241f8bbe70236ab16.webp", type: "image" },
  { src: "/images/shots/d4bbf1789a6e47dd8310c2c071b15745.webp", type: "image" },
  { src: "/images/shots/9aecee77d806e3d6b2d67bc2fc3e0f6a.mp4", type: "video" },
  { src: "/images/shots/original-139516fccc84aed93c06ee9920965a4e.mp4", type: "video" },
];

export default async function ShotsPage() {
  const apiShots = await getDribbbleShots();

  return (
    <main>
      <div className="container" style={{ paddingBlock: "4rem", paddingInline: "clamp(1.5rem, 5vw, 3rem)" }}>
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

        {/* Label + title */}
        <p
          className="text-muted"
          style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: "12px", marginBottom: "12px" }}
        >
          Dribbble
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "var(--color-fg)",
              margin: 0,
            }}
          >
            Shots
          </h1>
          <a
            href="https://dribbble.com/dinidumissaka"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent"
            style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}
          >
            View profile ↗
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Local shots */}
          {localShots.map((shot) =>
            shot.type === "video" ? (
              <div
                key={shot.src}
                className="relative rounded-xl overflow-hidden bg-surface"
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
                className="relative rounded-xl overflow-hidden bg-surface"
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

          {/* Dribbble API shots (if available) */}
          {apiShots.map((shot) => (
            <a
              key={shot.id}
              href={shot.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl overflow-hidden bg-surface"
              style={{ aspectRatio: "4 / 3" }}
            >
              <Image
                src={shot.images.normal}
                alt={shot.title}
                fill
                sizes="(max-width: 767px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-dark-navy/0 group-hover:bg-dark-navy/60 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[--text-p] font-medium text-center px-4">
                  {shot.title}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
