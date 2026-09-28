"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export type DecisionShot = { src: string; alt: string; text: string };
export type Decision = {
  name: string;
  rejected: string;
  chosen: string;
  detail: string;
  tradeoff: string;
  /** Index into `shots`: the screen this decision shaped. */
  shot: number;
};
export type DecisionGroup = { label: string; items: Decision[] };

const sans = "var(--font-manrope), sans-serif";

/**
 * Decisions on the left, one phone pinned on the right that changes to the screen
 * each decision shaped. Below 900px it falls back to a stacked layout, with each
 * group's screens after its text.
 */
export default function Decisions({ groups, shots }: { groups: DecisionGroup[]; shots: DecisionShot[] }) {
  const [active, setActive] = useState(groups[0].items[0].shot);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // The decision crossing a line just above the middle of the viewport picks the screen.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.shot));
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  let index = 0;

  return (
    <div className="minti-decisions">
      <style>{`
        .minti-decisions { display: grid; grid-template-columns: minmax(0, 1fr) 300px; gap: 4rem; align-items: start; }
        .minti-decisions-stage { position: sticky; top: max(96px, calc(50vh - 300px)); }
        .minti-decisions-inline { display: none; }
        .minti-decisions-shot { transition: opacity 0.4s ease; }
        @media (prefers-reduced-motion: reduce) { .minti-decisions-shot { transition: none; } }
        @media (max-width: 900px) {
          .minti-decisions { grid-template-columns: 1fr; gap: 0; }
          .minti-decisions-stage { display: none; }
          .minti-decisions-inline { display: grid; }
        }
      `}</style>

      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        {groups.map((group) => {
          const groupShots = [...new Set(group.items.map((it) => it.shot))];
          return (
            <section key={group.label} aria-label={group.label}>
              <p style={{ fontFamily: sans, fontSize: "12px", color: "var(--color-muted)", margin: "0 0 0.5rem" }}>{group.label}</p>
              {group.items.map((it) => {
                const i = index++;
                return (
                  <div
                    key={it.name}
                    ref={(el) => {
                      itemRefs.current[i] = el;
                    }}
                    data-shot={it.shot}
                    style={{ padding: "1.5rem 0", borderTop: "1px solid var(--border-section)" }}
                  >
                    <h3 style={{ fontFamily: sans, fontSize: "16px", fontWeight: 500, color: "var(--color-fg)", margin: "0 0 10px" }}>
                      {it.name}
                    </h3>
                    <p style={{ fontFamily: sans, fontSize: "12px", margin: "0 0 12px", display: "flex", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
                      <span style={{ color: "var(--color-muted)", textDecoration: "line-through", textDecorationColor: "color-mix(in srgb, var(--color-muted) 60%, transparent)" }}>
                        <span className="sr-only">Not chosen: </span>
                        {it.rejected}
                      </span>
                      <span
                        style={{
                          color: "var(--color-fg)",
                          padding: "3px 10px",
                          borderRadius: "999px",
                          background: "color-mix(in srgb, var(--color-fg) 10%, transparent)",
                        }}
                      >
                        <span className="sr-only">Chosen: </span>
                        {it.chosen}
                      </span>
                    </p>
                    <p style={{ fontFamily: sans, fontSize: "14px", lineHeight: 1.7, color: "var(--color-muted)", margin: 0, textWrap: "pretty" }}>
                      {it.detail}
                    </p>
                    <p style={{ fontFamily: sans, fontSize: "14px", lineHeight: 1.7, color: "var(--color-muted)", margin: "10px 0 0", textWrap: "pretty" }}>
                      <span style={{ color: "var(--color-fg)", fontWeight: 500, marginRight: "6px" }}>Trade-off</span>
                      {it.tradeoff}
                    </p>
                  </div>
                );
              })}
              {/* Stacked layout only: the group's screens after its text. */}
              <div className="minti-decisions-inline" style={{ gridTemplateColumns: `repeat(${groupShots.length}, 1fr)`, gap: "1rem", marginTop: "0.5rem" }}>
                {groupShots.map((s) => (
                  <figure key={shots[s].src} style={{ margin: 0 }}>
                    <div className="asset-bg" style={{ borderRadius: "12px", background: "rgba(0,0,0,0.04)", padding: "1.25rem 0.75rem", display: "flex", justifyContent: "center" }}>
                      <Image src={shots[s].src} alt={shots[s].alt} width={900} height={1840} sizes="(max-width: 900px) 45vw, 240px" style={{ width: "100%", maxWidth: "240px", height: "auto", display: "block" }} />
                    </div>
                    <figcaption style={{ fontFamily: sans, fontSize: "11px", color: "var(--color-muted)", opacity: 0.6, marginTop: "10px" }}>{shots[s].text}</figcaption>
                  </figure>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <figure className="minti-decisions-stage" style={{ margin: 0 }}>
        <div className="asset-bg" style={{ borderRadius: "16px", background: "rgba(0,0,0,0.04)", padding: "2rem 1.75rem" }}>
          <div style={{ position: "relative", aspectRatio: "900 / 1840" }}>
            {shots.map((s, i) => (
              <Image
                key={s.src}
                src={s.src}
                alt={i === active ? s.alt : ""}
                aria-hidden={i !== active}
                fill
                sizes="244px"
                className="minti-decisions-shot"
                style={{ objectFit: "contain", opacity: i === active ? 1 : 0 }}
              />
            ))}
          </div>
        </div>
        <figcaption style={{ fontFamily: sans, fontSize: "11px", color: "var(--color-muted)", opacity: 0.6, marginTop: "10px", minHeight: "2.4em" }}>
          {shots[active].text}
        </figcaption>
      </figure>
    </div>
  );
}
