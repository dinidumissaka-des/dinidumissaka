"use client";

import { useState } from "react";
import { MultiStepLoader } from "./multi-step-loader";
import { SquareX, ArrowRight } from "lucide-react";
import {
  FlipButton,
  FlipButtonFront,
  FlipButtonBack,
} from "@/components/animate-ui/components/buttons/flip";

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

      <button onClick={() => setLoading(true)} style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
      <FlipButton>
        <FlipButtonFront style={{
          fontFamily: "var(--font-fraunces), Georgia, serif",
          fontSize: "16px",
          fontWeight: 300,
          fontStyle: "italic",
          color: "var(--color-fg)",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}>
          See my current design process
          <ArrowRight size={14} strokeWidth={1.5} />
        </FlipButtonFront>
        <FlipButtonBack style={{
          fontFamily: "var(--font-fraunces), Georgia, serif",
          fontSize: "16px",
          fontWeight: 300,
          fontStyle: "italic",
          color: "var(--fg-80)",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}>
          See my current design process
          <ArrowRight size={14} strokeWidth={1.5} />
        </FlipButtonBack>
      </FlipButton>
      </button>
    </div>
  );
}
