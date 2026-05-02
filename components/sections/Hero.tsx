"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const heroImages = [
  { src: "/images/hero/6738d52e1229ecc84512efce_6.avif", alt: "Project preview 1" },
  { src: "/images/hero/68b1e9d4fb31e88ed00c8967_X9.avif", alt: "Project preview 2" },
  { src: "/images/hero/68b1ea78b1f942347cb4f61b_2.webp", alt: "Project preview 3" },
  { src: "/images/hero/68b1eb35bd4ac3a7682629b3_27.webp", alt: "Project preview 4" },
  { src: "/images/hero/68b1eb9424d3586bcc435f77_28.webp", alt: "Project preview 5" },
  { src: "/images/hero/68b1ed0add5449da9816dbdf_2.webp", alt: "Project preview 6" },
];

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Heading entrance
    const el = headingRef.current;
    if (el) {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.1, ease: "power3.out", delay: 0.4 }
      );
    }

    // Scroll-driven horizontal pan on the image strip
    const strip = stripRef.current;
    if (!strip) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: strip,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    tl.fromTo(strip, { x: 60 }, { x: -60, ease: "none" });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="relative flex flex-col items-center text-center">
      {/* ── Text content ── */}
      <div className="container section-padding flex flex-col items-center pb-16" style={{ borderBottom: "none" }}>
        {/* Italic tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="italic text-muted mb-8 tracking-wide"
          style={{ fontSize: "var(--text-p)", fontFamily: "var(--font-serif)" }}
        >
          AI-Driven Design&nbsp;|&nbsp;Scalable Systems&nbsp;|&nbsp;Visual Storyteller&nbsp;
          <span className="not-italic text-accent-orange">●</span>
        </motion.p>

        {/* Main heading */}
        <h1
          ref={headingRef}
          className="font-bold text-fg max-w-4xl opacity-0"
          style={{ fontSize: "var(--text-h1)", lineHeight: 1.05 }}
        >
          Crafting people friendly digital journeys!
        </h1>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-7 text-muted max-w-2xl leading-relaxed"
          style={{ fontSize: "var(--text-p)" }}
        >
          A Senior UX &amp; UI Designer based in Dubai, UAE with over 5 years of experience,
          crafting user-centric fintech and web experiences. Combining AI, product thinking
          and visual design to scale digital experiences.
        </motion.p>
      </div>

      {/* ── Full-width scroll-driven image strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="w-full overflow-hidden py-8"
      >
        <div ref={stripRef} className="flex gap-4 px-4 will-change-transform">
          {heroImages.map((img, i) => (
            <div
              key={i}
              className="relative shrink-0 rounded-2xl overflow-hidden bg-surface outline outline-1 outline-white/15"
              style={{ width: "calc((100vw - 5 * 16px) / 4.5)", height: "380px" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="30vw"
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── CTA ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.3 }}
        className="mt-12 mb-16"
      >
        <a
          href="#about"
          className="px-8 py-3.5 rounded-full bg-accent text-white font-medium hover:opacity-85 transition-opacity"
          style={{ fontSize: "var(--text-p)" }}
        >
          Get to know me
        </a>
      </motion.div>
    </section>
  );
}
