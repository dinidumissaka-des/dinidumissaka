"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { tools } from "@/lib/data/toolkit";

export default function Toolkit() {
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
          className="mb-12"
        >
          <p className="text-[--text-small] uppercase tracking-widest text-muted font-medium mb-3">
            Design Toolkit
          </p>
          <h2
            className="font-semibold text-fg max-w-lg"
            style={{ fontSize: "var(--text-h3)" }}
          >
            Tools I work with
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-4">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 + 0.2 }}
              className="flex items-center gap-3 px-5 py-3 rounded-full border border-border bg-surface hover:border-accent/40 hover:bg-bg transition-all duration-200 cursor-default group"
            >
              <div className="w-5 h-5 rounded-full bg-border flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors">
                <span className="text-[10px] font-bold text-muted group-hover:text-accent">
                  {tool.name[0]}
                </span>
              </div>
              <span className="text-[--text-p] font-medium text-fg">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
