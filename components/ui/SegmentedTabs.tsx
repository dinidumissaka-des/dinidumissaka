"use client";

import { useId, useRef, useState, type ReactNode, type KeyboardEvent } from "react";
import { motion } from "motion/react";

type Tab = { label: string; panel: ReactNode };

/**
 * Segmented control that shows one panel at a time.
 * Follows the WAI-ARIA tabs pattern: arrow keys, Home and End move between segments.
 */
export default function SegmentedTabs({
  tabs,
  ariaLabel,
  defaultIndex = 0,
}: {
  tabs: Tab[];
  ariaLabel: string;
  defaultIndex?: number;
}) {
  const [active, setActive] = useState(defaultIndex);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();

  const select = (i: number) => {
    setActive(i);
    refs.current[i]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent) => {
    const last = tabs.length - 1;
    const next =
      e.key === "ArrowRight" ? (active === last ? 0 : active + 1)
      : e.key === "ArrowLeft" ? (active === 0 ? last : active - 1)
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    select(next);
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label={ariaLabel}
        onKeyDown={onKeyDown}
        // Full width on mobile with equal segments; compact (sized to labels) from 640px.
        className="w-full sm:w-fit"
        style={{
          display: "flex",
          maxWidth: "100%",
          gap: "2px",
          padding: "2px",
          // Outer radius = inner radius (8px) + padding (2px), so the corners stay concentric.
          borderRadius: "10px",
          border: "1px solid var(--border-section)",
          background: "var(--bg-card)",
          marginBottom: "1.25rem",
        }}
      >
        {tabs.map((t, i) => {
          const selected = i === active;
          return (
            <button
              key={t.label}
              ref={(el) => { refs.current[i] = el; }}
              role="tab"
              id={`${id}-tab-${i}`}
              aria-selected={selected}
              aria-controls={`${id}-panel-${i}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className="flex-1 sm:flex-none"
              style={{
                position: "relative",
                padding: "5px 8px",
                borderRadius: "8px",
                border: "none",
                background: "transparent",
                cursor: "pointer",
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "12px",
                fontWeight: selected ? 600 : 500,
                color: selected ? "var(--color-fg)" : "var(--color-muted)",
                transition: "color 0.2s ease",
                whiteSpace: "nowrap",
              }}
            >
              {selected && (
                <motion.span
                  layoutId={`${id}-indicator`}
                  transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "8px",
                    background: "color-mix(in srgb, var(--color-fg) 12%, transparent)",
                  }}
                />
              )}
              <span style={{ position: "relative" }}>{t.label}</span>
            </button>
          );
        })}
      </div>

      {tabs.map((t, i) => (
        <div
          key={t.label}
          role="tabpanel"
          id={`${id}-panel-${i}`}
          aria-labelledby={`${id}-tab-${i}`}
          hidden={i !== active}
          tabIndex={0}
        >
          {t.panel}
        </div>
      ))}
    </div>
  );
}
