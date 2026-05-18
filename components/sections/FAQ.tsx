"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/animate-ui/components/radix/accordion";
import Stack from "@/components/ui/Stack";
import { faqItems } from "@/lib/data/faq";

const journalImages = [
  "/images/visual journal/image-1.avif",
  "/images/visual journal/image-2.avif",
  "/images/visual journal/image-3.avif",
  "/images/visual journal/image-4.avif",
  "/images/visual journal/image-5.avif",
  "/images/visual journal/image-6.avif",
  "/images/visual journal/image-7.avif",
  "/images/visual journal/image-8.avif",
];

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section>
      <div className="container" style={{ paddingBlock: "3rem" }}>
        <div className="flex flex-col md:flex-row gap-12" style={{ alignItems: "stretch" }}>

          {/* Left: FAQ */}
          <div style={{ flex: 1, minWidth: 0 }}>
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
              <h2
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  fontSize: "32px",
                  fontWeight: 300,
                  lineHeight: 1.1,
                  color: "var(--color-fg)",
                }}
              >
                Common questions
              </h2>
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

          {/* Right: Visual Journal stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{ flex: 1, minWidth: 0 }}
          >
            <div
              style={{
                background: "var(--bg-card)",
                borderRadius: "16px",
                overflow: "hidden",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
                height: "100%",
              }}
            >
              <div style={{ width: "180px", height: "240px", margin: "0 auto" }}>
                <Stack
                  randomRotation
                  sensitivity={180}
                  sendToBackOnClick
                  autoplay
                  autoplayDelay={2500}
                  pauseOnHover
                  cards={journalImages.map((src, i) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={i}
                      src={src}
                      alt={`journal-${i + 1}`}
                      className="card-image"
                    />
                  ))}
                />
              </div>
              <p
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  fontSize: "16px",
                  fontWeight: 300,
                  color: "var(--color-muted)",
                  margin: 0,
                }}
              >
                Visual Journal
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
