"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/data/projects";

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects">
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
              >
                <span style={{
                  display: "inline-block",
                  width: "1.4em",
                  aspectRatio: "4 / 3",
                  borderRadius: "4px",
                  overflow: "hidden",
                  verticalAlign: "middle",
                  marginRight: "0.25em",
                  position: "relative",
                  flexShrink: 0,
                }}>
                  <Image
                    src={project.homeImage}
                    alt={project.title}
                    fill
                    sizes="60px"
                    style={{ objectFit: "cover" }}
                  />
                </span>
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
