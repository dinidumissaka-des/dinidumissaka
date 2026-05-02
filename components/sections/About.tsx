"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about">
      <div className="container section-padding">
        <div
          ref={ref}
          className="flex flex-col items-center text-center gap-6"
        >
          {/* Italic label */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="italic text-muted"
            style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-p)" }}
          >
            Thinking in systems
          </motion.p>

          {/* Large statement */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-bold text-fg max-w-4xl leading-tight"
            style={{ fontSize: "var(--text-h3)" }}
          >
            Building with AI, constantly testing new tools and exploring how they can improve
            the way products are designed and shipped. Always in &ldquo;let me try this&rdquo;
            mode, curious, building, and refining through experimentation. Working end-to-end
            from idea to production.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
