"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data/projects";

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const previewRef = useRef<HTMLDivElement>(null);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (previewRef.current) {
      previewRef.current.style.left = `${e.clientX + 20}px`;
      previewRef.current.style.top = `${e.clientY - 80}px`;
    }
  }, []);

  return (
    <section id="projects" onMouseMove={onMouseMove}>
      <style>{`
        .project-link {
          text-decoration: none !important;
          background-image: linear-gradient(currentColor, currentColor);
          background-position: 0% 100%;
          background-repeat: no-repeat;
          background-size: 100% 1px;
        }
        .project-link:hover {
          animation: underline-sweep 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
        }
        @keyframes underline-sweep {
          0%   { background-size: 0% 1px; }
          100% { background-size: 100% 1px; }
        }
        .project-sub {
          transition: color 0.2s ease;
        }
        .project-link:hover .project-sub {
          color: var(--color-fg) !important;
        }
      `}</style>

      {/* Floating preview */}
      <div
        ref={previewRef}
        style={{
          position: "fixed",
          pointerEvents: "none",
          zIndex: 9000,
          width: "240px",
          borderRadius: "12px",
          overflow: "hidden",
          opacity: hoveredImage ? 1 : 0,
          transform: hoveredImage ? "scale(1) translateY(0)" : "scale(0.92) translateY(8px)",
          transition: "opacity 0.25s ease, transform 0.25s ease",
          boxShadow: "0 16px 48px rgba(0,0,0,0.3)",
        }}
      >
        {hoveredImage && (
          <Image
            src={hoveredImage}
            alt=""
            width={480}
            height={320}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        )}
      </div>

      <div className="container" style={{ paddingBlock: "3rem" }}>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-muted"
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontSize: "12px",
            marginBottom: "12px",
          }}
        >
          Projects
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            fontSize: "32px",
            fontWeight: 300,
            lineHeight: 1.1,
            color: "var(--color-fg)",
            marginBottom: "1.5rem",
          }}
        >
          Selected work
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            fontSize: "32px",
            fontWeight: 300,
            lineHeight: 1.5,
            color: "var(--color-fg)",
            letterSpacing: "-0.01em",
          }}
        >
          {projects.map((project, i) => (
            <span key={project.id}>
              <Link
                href={`/projects/${project.id}`}
                className="project-link"
                style={{ color: "var(--color-fg)" }}
                onMouseEnter={() => setHoveredImage(project.image)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                {project.title}
                <span className="project-sub" style={{ color: "var(--color-muted)", fontWeight: 300 }}>
                  {" — "}{project.subtitle}, {project.year}
                </span>
              </Link>
              {i < projects.length - 1 && (
                <span style={{ color: "var(--color-muted)", margin: "0 0.4em" }}>/</span>
              )}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
