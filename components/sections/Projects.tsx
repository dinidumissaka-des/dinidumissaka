"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import ProjectThumb from "@/components/ui/ProjectThumb";
import { projects } from "@/lib/data/projects";

const visibleProjects = projects.filter((p) => !p.hidden);

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects">
      <style>{`
        .projects-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem 1.5rem; }
        .project-card { display: block; text-decoration: none; }
        .project-thumb {
          display: block;
          position: relative;
          aspect-ratio: 16 / 10;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid var(--border-section);
          background: var(--bg-card);
        }
        .project-thumb > span { transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1); }
        .project-card:hover .project-thumb > span { transform: scale(1.03); }
        .project-sub { transition: color 0.2s ease; }
        .project-card:hover .project-sub { color: var(--color-fg) !important; }
        .project-card:focus-visible { outline: 2px solid var(--color-fg); outline-offset: 4px; border-radius: 12px; }
        @media (prefers-reduced-motion: reduce) { .project-thumb > span, .thumb-frame { transition: none !important; } }
        @media (max-width: 640px) {
          .projects-grid { grid-template-columns: 1fr; gap: 2rem; }
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

        <div className="projects-grid">
          {visibleProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.05 }}
            >
              <Link href={`/projects/${project.id}`} className="project-card">
                <span className="project-thumb">
                  <ProjectThumb
                    id={project.id}
                    still={project.homeImage}
                    sizes="(max-width: 640px) 100vw, 430px"
                    position="center"
                  />
                </span>
                <span style={{ display: "block", marginTop: "14px" }}>
                  <span
                    className="project-title"
                    style={{
                      fontFamily: "var(--font-fraunces), Georgia, serif",
                      fontSize: "22px",
                      fontWeight: 300,
                      color: "var(--color-fg)",
                    }}
                  >
                    {project.title}
                  </span>
                  <span className="project-sub" style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontSize: "22px", fontWeight: 300, color: "var(--color-muted)" }}>
                    {" — "}
                    {project.subtitle}, {project.year}
                  </span>
                </span>
                <span
                  style={{
                    display: "block",
                    marginTop: "6px",
                    fontFamily: "var(--font-manrope), sans-serif",
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "var(--color-muted)",
                    textWrap: "pretty",
                  }}
                >
                  {project.description}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-muted"
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontSize: "12px",
            marginTop: "1.5rem",
          }}
        >
          *More projects and case studies available on{" "}
          <a
            href="mailto:dinidumissaka@gmail.com"
            style={{ color: "var(--color-muted)", textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            request
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
