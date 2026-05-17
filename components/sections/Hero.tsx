"use client";

import { motion } from "framer-motion";
import CircularGallery from "@/components/ui/CircularGallery";
import GradualBlur from "@/components/ui/GradualBlur";

const galleryItems = [
  { image: "/images/hero/6738d52e1229ecc84512efce_6.avif",   text: "" },
  { image: "/images/hero/68b1e9d4fb31e88ed00c8967_X9.avif",  text: "" },
  { image: "/images/hero/68b1ea78b1f942347cb4f61b_2.webp",   text: "" },
  { image: "/images/hero/68b1eb35bd4ac3a7682629b3_27.webp",  text: "" },
  { image: "/images/hero/68b1eb9424d3586bcc435f77_28.webp",  text: "" },
  { image: "/images/hero/68b1ed0add5449da9816dbdf_2.webp",   text: "" },
];

export default function Hero() {
  return (
    <section className="relative flex flex-col">
      <div className="container">
        {/* Text block */}
        <div style={{ paddingTop: "3rem", paddingBottom: "16px" }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted mb-5"
            style={{ fontSize: "12px" }}
          >
            AI-Driven Design&nbsp;|&nbsp;Scalable Systems&nbsp;|&nbsp;Visual Storyteller
          </motion.p>

          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: "48px",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontWeight: 300,
              color: "var(--color-fg)",
            }}
          >
            Crafting people friendly<br />digital journeys!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-7 text-muted max-w-2xl leading-relaxed"
            style={{ fontSize: "14px" }}
          >
            A Senior UX &amp; UI Designer based in Dubai, UAE with over 5 years of experience,
            crafting user-centric fintech and web experiences. Combining AI, product thinking
            and visual design to scale digital experiences.
          </motion.p>
        </div>

        {/* Circular gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          style={{ height: "340px", position: "relative", overflow: "hidden" }}
        >
          <CircularGallery
            items={galleryItems}
            bend={0}
            borderRadius={0.05}
            scrollSpeed={2}
            scrollEase={0.02}
          />
          <GradualBlur
            target="parent"
            position="bottom"
            height="6rem"
            strength={2}
            divCount={5}
            curve="bezier"
            exponential={true}
            opacity={1}
          />
        </motion.div>
      </div>
    </section>
  );
}
