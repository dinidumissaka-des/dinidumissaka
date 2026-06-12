"use client";

import { useState } from "react";
import { MultiStepLoader } from "./multi-step-loader";
import { SquareX } from "lucide-react";

const aiProcess = [
  { text: "Discover — research, brief & user interviews" },
  { text: "Define — frame the problem with AI synthesis" },
  { text: "Ideate — brainstorm with Claude, diverge fast" },
  { text: "Concept — generate layouts & flows with AI" },
  { text: "Prototype — build interactive mockups in Figma" },
  { text: "Test — validate with real users, capture feedback" },
  { text: "Refine — iterate with AI, tighten the details" },
  { text: "Build — ship to production with Claude Code" },
  { text: "Deploy — Vercel push, live in seconds" },
  { text: "Shipped ✦ — designed, built & delivered" },
];

export function AIProcessLoader() {
  const [loading, setLoading] = useState(false);

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
      <MultiStepLoader loadingStates={aiProcess} loading={loading} duration={1800} loop={false} onComplete={() => setLoading(false)} />

      {loading && (
        <button
          className="fixed top-4 right-4 z-[120] text-white/70 hover:text-white transition-colors"
          onClick={() => setLoading(false)}
        >
          <SquareX className="h-8 w-8" strokeWidth={1.5} />
        </button>
      )}

      <button
        onClick={() => setLoading(true)}
        style={{
          fontFamily: "var(--font-fraunces), Georgia, serif",
          fontSize: "16px",
          fontWeight: 300,
          fontStyle: "italic",
          lineHeight: 1.2,
          color: "var(--color-fg)",
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
          textAlign: "left",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          transition: "opacity 0.15s",
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = "0.6")}
        onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
      >
        <span>See my current design process</span>
      </button>
    </div>
  );
}
