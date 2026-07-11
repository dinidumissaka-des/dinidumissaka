"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/animate-ui/components/radix/accordion";
import { faqItems } from "@/lib/data/faq";

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section>
      <div className="container" style={{ paddingBlock: "3rem" }}>
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "2rem" }}
        >
          <p
            className="text-muted"
            style={{
              fontFamily: "var(--font-manrope), sans-serif",
              fontSize: "12px",
              marginBottom: "12px",
            }}
          >
            FAQ
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              overflow: "hidden",
              background: "var(--color-bg)",
              flexShrink: 0,
              border: "1px solid var(--border-section)",
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/home/eye.gif"
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            <h2
              style={{
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontSize: "32px",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "var(--color-fg)",
              }}
            >
              Things people ask
            </h2>
          </div>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Accordion type="single" collapsible>
            {faqItems.map((item, index) => (
              <AccordionItem
                key={item.id}
                value={`item-${index + 1}`}
                style={index === faqItems.length - 1 ? { borderBottom: "none" } : undefined}
              >
                <AccordionTrigger showArrow>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
