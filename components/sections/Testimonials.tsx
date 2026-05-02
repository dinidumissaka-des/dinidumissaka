"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data/testimonials";

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback(
    (next: number) => {
      setDirection(next > current ? 1 : -1);
      setCurrent((next + testimonials.length) % testimonials.length);
    },
    [current]
  );

  useEffect(() => {
    const id = setInterval(() => go(current + 1), 6000);
    return () => clearInterval(id);
  }, [current, go]);

  const t = testimonials[current];

  return (
    <section>
      <div className="container section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-[--text-small] uppercase tracking-widest text-muted font-medium mb-3">
            Kind Words
          </p>
          <h2
            className="font-semibold text-fg"
            style={{ fontSize: "var(--text-h3)" }}
          >
            What clients say
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          {/* Carousel */}
          <div className="overflow-hidden rounded-2xl border border-border bg-bg">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={t.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="p-10 md:p-14"
              >
                <span
                  className="font-serif text-accent/30 leading-none"
                  style={{ fontSize: "var(--text-h2)" }}
                >
                  &ldquo;
                </span>
                <p className="mt-2 text-fg/80 leading-relaxed text-[--text-p] max-w-3xl">
                  {t.quote}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <span className="font-semibold text-accent" style={{ fontSize: "var(--text-small)" }}>
                      {t.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-fg" style={{ fontSize: "var(--text-p)" }}>{t.name}</p>
                    <p className="text-muted" style={{ fontSize: "var(--text-small)" }}>
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-between">
            {/* Dot indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-accent" : "w-1.5 bg-border"
                  }`}
                />
              ))}
            </div>

            {/* Prev / Next */}
            <div className="flex gap-2">
              <button
                onClick={() => go(current - 1)}
                aria-label="Previous testimonial"
                className="w-9 h-9 rounded-full border border-border text-muted hover:border-accent hover:text-accent transition-all duration-200 flex items-center justify-center"
                style={{ fontSize: "var(--text-p)" }}
              >
                ←
              </button>
              <button
                onClick={() => go(current + 1)}
                aria-label="Next testimonial"
                className="w-9 h-9 rounded-full border border-border text-muted hover:border-accent hover:text-accent transition-all duration-200 flex items-center justify-center"
                style={{ fontSize: "var(--text-p)" }}
              >
                →
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
