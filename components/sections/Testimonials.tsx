"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { testimonials } from "@/lib/data/testimonials";

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
              className="p-7 rounded-2xl bg-bg border border-border hover:border-accent/20 hover:shadow-sm transition-all duration-300"
            >
              <span
                className="font-serif text-accent/30 leading-none"
                style={{ fontSize: "var(--text-h2)" }}
              >
                &ldquo;
              </span>
              <p className="mt-2 text-fg/80 leading-relaxed text-[--text-p]">{t.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <span className="text-[--text-small] font-semibold text-accent">
                    {t.name[0]}
                  </span>
                </div>
                <div>
                  <p className="text-[--text-p] font-semibold text-fg">{t.name}</p>
                  <p className="text-[--text-small] text-muted">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
