"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { tools } from "@/lib/data/toolkit";

export default function Toolkit() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section>
      <div className="container section-padding">
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="italic text-muted text-center mb-12"
          style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-p)" }}
        >
          AI-driven design toolkit
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 + 0.15 }}
              className="flex items-center justify-center px-8 py-9 rounded-2xl bg-surface border border-border hover:border-accent/20 transition-all duration-200 cursor-default"
            >
              <Image
                src={tool.logo}
                alt={tool.name}
                width={160}
                height={40}
                className="object-contain w-auto"
                style={{ height: "34px", maxWidth: "160px" }}
                unoptimized
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
