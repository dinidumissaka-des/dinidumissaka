"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data/projects";

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="">
      <div className="container section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <p className="text-[--text-small] uppercase tracking-widest text-muted font-medium mb-3">
              Selected Work
            </p>
            <h2
              className="font-semibold text-fg"
              style={{ fontSize: "var(--text-h3)" }}
            >
              Cases &amp; Projects
            </h2>
          </div>
          <p className="text-muted text-[--text-p] max-w-xs">
            A selection of projects spanning fintech, SaaS, branding, and AI-native products.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
