"use client";

import { useId, useRef, useState, type ReactNode, type KeyboardEvent } from "react";
import { motion } from "motion/react";

type Tab = { label: string; panel: ReactNode };

/**
 * Segmented control that shows one panel at a time.
 * Follows the WAI-ARIA tabs pattern: arrow keys, Home and End move between segments.
 */
export default function SegmentedTabs({ tabs, ariaLabel }: { tabs: Tab[]; ariaLabel: string }) {
  const [active, setActive] = useState(0);
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
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${tabs.length}, 1fr)`,
          gap: "4px",
          padding: "4px",
          borderRadius: "999px",
          border: "1px solid var(--border-section)",
          background: "var(--bg-card)",
          marginBottom: "1.5rem",
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
              style={{
                position: "relative",
                padding: "8px 4px",
                borderRadius: "999px",
                border: "none",
                background: "transparent",
                cursor: "pointer",
                fontFamily: "var(--font-manrope), sans-serif",
                fontSize: "13px",
                fontWeight: selected ? 600 : 500,
                color: selected ? "var(--color-bg)" : "var(--color-muted)",
                transition: "color 0.2s ease",
                whiteSpace: "nowrap",
              }}
            >
              {selected && (
                <motion.span
                  layoutId={`${id}-indicator`}
                  transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  style={{ position: "absolute", inset: 0, borderRadius: "999px", background: "var(--color-fg)" }}
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
