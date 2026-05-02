"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/lib/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-bg border border-border cursor-pointer"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        {!imgError ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImgError(true)}
            unoptimized={project.image.endsWith(".svg")}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/15 flex items-center justify-center">
            <span
              className="font-serif font-light text-accent/30"
              style={{ fontSize: "var(--text-h2)" }}
            >
              {project.title[0]}
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute inset-0 bg-dark-navy/90 flex flex-col justify-end p-6"
        >
          <p className="text-white/60 text-[--text-small] mb-2">{project.category}</p>
          <p className="text-white text-[--text-p] leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[--text-small] rounded-full border border-white/20 text-white/70 font-mono uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Card footer */}
      <div className="p-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold text-fg text-[--text-p]">{project.title}</h3>
          <p className="text-muted text-[--text-small] mt-0.5">{project.category}</p>
        </div>
        <a
          href={project.url ?? "#"}
          className="shrink-0 px-4 py-1.5 rounded-full border border-border text-[--text-small] font-medium text-muted hover:border-accent hover:text-accent transition-all duration-200 mt-0.5"
        >
          Learn More →
        </a>
      </div>
    </motion.article>
  );
}
