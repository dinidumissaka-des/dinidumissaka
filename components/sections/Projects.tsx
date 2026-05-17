"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data/projects";
import RotatingText, { RotatingTextRef } from "@/components/ui/RotatingText";

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const rotatingRefs = useRef<Record<string, RotatingTextRef | null>>({});

  const handleMouseEnter = useCallback((id: string) => {
    setHoveredId(id);
    rotatingRefs.current[id]?.next();
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredId(null);
  }, []);

  return (
    <section id="projects">
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
            Projects
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
            Design highlights
          </h2>
        </motion.div>

        {/* Image grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}
        >
          {projects.map((project, i) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              style={{ textDecoration: "none", display: "block" }}
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.4,
                }}
                style={{
                  aspectRatio: "4 / 3",
                  borderRadius: "12px",
                  overflow: "hidden",
                  position: "relative",
                  marginBottom: "12px",
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="25vw"
                />
              </motion.div>

              <div
                className="text-muted"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "14px",
                  lineHeight: 1.4,
                  overflow: "hidden",
                  height: "1.4em",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <span style={{ flexShrink: 0, color: "var(--color-fg)" }}>{project.title} |</span>
                <RotatingText
                  ref={(el) => { rotatingRefs.current[project.id] = el; }}
                  texts={project.rotatingTexts}
                  auto={hoveredId === project.id}
                  rotationInterval={1800}
                  splitBy="words"
                  animatePresenceMode="sync"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-120%", opacity: 0 }}
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  staggerDuration={0.03}
                  staggerFrom="first"
                />
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
