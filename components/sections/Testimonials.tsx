"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Masonry, { MasonryItem } from "@/components/ui/Masonry";
import { testimonials, Testimonial } from "@/lib/data/testimonials";

interface TestimonialMasonryItem extends MasonryItem {
  testimonial: Testimonial;
}

const masonryItems: TestimonialMasonryItem[] = [
  { id: "1", height: 260, testimonial: testimonials[0] },
  { id: "2", height: 220, testimonial: testimonials[1] },
  { id: "3", height: 230, testimonial: testimonials[2] },
  { id: "4", height: 210, testimonial: testimonials[3] },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section>
      <div className="container" style={{ paddingBlock: "3rem", paddingInline: 0 }}>
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
            Kind words
          </p>
          <h2
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              fontSize: "32px",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "var(--neutral-95)",
            }}
          >
            What clients say
          </h2>
        </motion.div>

        {/* Masonry grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Masonry<TestimonialMasonryItem>
            items={masonryItems}
            animateFrom="bottom"
            stagger={0.08}
            blurToFocus={false}
            scaleOnHover={false}
            columnBreakpoints={["(min-width:768px)"]}
            columnValues={[2]}
            defaultColumns={1}
            renderItem={(item) => {
              const t = item.testimonial;
              return (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "12px",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxSizing: "border-box",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-manrope), sans-serif",
                      fontSize: "14px",
                      lineHeight: 1.75,
                      color: "rgba(255,255,255,0.65)",
                      margin: 0,
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div style={{ marginTop: "20px" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-manrope), sans-serif",
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "var(--neutral-95)",
                        margin: 0,
                      }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-muted"
                      style={{
                        fontFamily: "var(--font-manrope), sans-serif",
                        fontSize: "12px",
                        margin: "2px 0 0",
                      }}
                    >
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              );
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
