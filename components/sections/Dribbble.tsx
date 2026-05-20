"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const dribbbleShots = Array.from({ length: 6 }, (_, i) => ({
  id: String(i + 1),
  title: `Design Exploration ${i + 1}`,
  image: `/images/dribbble/shot-${i + 1}.webp`,
  url: "https://dribbble.com/dinidumissaka",
}));

export default function Dribbble() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section>
      <div className="container section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-2 text-[--text-small] uppercase tracking-widest text-muted font-medium mb-3">
              
              Dribbble
            </div>
            <h2
              className="font-semibold text-fg"
              style={{ fontSize: "var(--text-h3)" }}
            >
              Design playground
            </h2>
          </div>
          <a
            href="https://dribbble.com/dinidumissaka"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[--text-p] text-accent hover:underline font-medium shrink-0"
          >
            View all shots ↗
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {dribbbleShots.map((shot, i) => (
            <motion.a
              key={shot.id}
              href={shot.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 + 0.2 }}
              className="group relative aspect-square rounded-xl overflow-hidden bg-surface border border-border hover:border-accent/30 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent-orange/10 flex items-center justify-center">
                <span
                  className="font-serif text-accent/30 font-light"
                  style={{ fontSize: "var(--text-h2)" }}
                >
                  {shot.id}
                </span>
              </div>
              <div className="absolute inset-0 bg-dark-navy/0 group-hover:bg-dark-navy/60 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[--text-p] font-medium">
                  View ↗
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
