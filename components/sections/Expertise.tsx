"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "User-Centric Design",
    description:
      "Deep UX research, intuitive information architecture, and design systems built to scale. I make complex workflows feel effortless for the humans using them.",
    tags: ["UX Research", "UI Design", "Design Systems", "Prototyping"],
  },
  {
    number: "02",
    title: "AI-Powered Systems",
    description:
      "Leveraging AI to accelerate design, automate repetitive work, and build smarter products. From AI-assisted workflows to designing for AI-native interfaces.",
    tags: ["AI Tools", "Workflow Automation", "Prompt Design", "AI UX"],
  },
  {
    number: "03",
    title: "Visual Design",
    description:
      "Brand identities, visual storytelling, and motion that communicate with clarity and emotion. Every pixel is intentional, every detail considered.",
    tags: ["Branding", "Motion", "Typography", "Illustration"],
  },
];

export default function Expertise() {
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
            Expertise
          </p>
          <h2
            className="font-semibold text-fg max-w-lg"
            style={{ fontSize: "var(--text-h3)" }}
          >
            What I bring to the table
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
              className="group p-6 rounded-2xl bg-bg border border-border hover:border-accent/30 hover:shadow-sm transition-all duration-300"
            >
              <span className="font-mono text-muted text-[--text-small]">{pillar.number}</span>
              <h3
                className="mt-4 font-semibold text-fg"
                style={{ fontSize: "var(--text-h6)" }}
              >
                {pillar.title}
              </h3>
              <p className="mt-3 text-muted leading-relaxed text-[--text-p]">
                {pillar.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-[--text-small] rounded-full bg-surface border border-border text-muted uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
