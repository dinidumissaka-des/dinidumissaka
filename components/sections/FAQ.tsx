"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AccordionItem from "@/components/ui/AccordionItem";
import { faqItems } from "@/lib/data/faq";

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section>
      <div className="container section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
          {/* Left — heading */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[--text-small] uppercase tracking-widest text-muted font-medium mb-3">
              FAQ
            </p>
            <h2
              className="font-semibold text-fg"
              style={{ fontSize: "var(--text-h3)" }}
            >
              Common questions
            </h2>
            <p className="mt-4 text-[--text-p] text-muted leading-relaxed">
              Things people usually ask before we work together.
            </p>
          </motion.div>

          {/* Right — accordion */}
          <div className="md:col-span-2">
            {faqItems.map((item, i) => (
              <AccordionItem key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
