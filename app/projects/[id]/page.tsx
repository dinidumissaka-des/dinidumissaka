import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) notFound();

  return (
    <main>
      <div className="container" style={{ paddingBlock: "4rem", paddingInline: "clamp(1.5rem, 5vw, 3rem)" }}>
        {/* Back */}
        <Link
          href="/#projects"
          className="text-muted"
          style={{
            fontFamily: "var(--font-manrope), sans-serif",
            fontSize: "12px",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            marginBottom: "2.5rem",
            textDecoration: "none",
          }}
        >
          ← Back
        </Link>

        {/* Label + title */}
        <p
          className="text-muted"
          style={{ fontFamily: "var(--font-manrope), sans-serif", fontSize: "12px", marginBottom: "12px" }}
        >
          {project.rotatingTexts[0]}
        </p>
        <h1
          style={{
            fontFamily: "var(--font-fraunces), Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 300,
            lineHeight: 1.1,
            color: "var(--neutral-95)",
            marginBottom: "3rem",
          }}
        >
          {project.title}
        </h1>

        {/* Hero image */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 9",
            borderRadius: "16px",
            overflow: "hidden",
            marginBottom: "3rem",
          }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Description + tags */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "700px" }}>
          <p style={{ fontSize: "16px", lineHeight: 1.7, color: "var(--neutral-95)" }}>
            {project.description}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {project.rotatingTexts.map((tag) => (
              <span
                key={tag}
                className="text-muted"
                style={{
                  fontFamily: "var(--font-manrope), sans-serif",
                  fontSize: "11px",
                  padding: "4px 10px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "999px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
