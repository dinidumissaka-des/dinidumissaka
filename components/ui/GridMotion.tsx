"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./GridMotion.css";
import type { ReactNode } from "react";

interface GridMotionProps {
  items?: (string | ReactNode)[];
  gradientColor?: string;
  height?: string;
}

const GridMotion = ({
  items = [],
  gradientColor = "black",
  height = "600px",
}: GridMotionProps) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mouseXRef = useRef(typeof window !== "undefined" ? window.innerWidth / 2 : 0);

  const totalItems = 36;
  const defaultItems = Array.from({ length: totalItems }, (_, i) => `Item ${i + 1}`);
  const combinedItems =
    items.length > 0
      ? Array.from({ length: totalItems }, (_, i) => items[i % items.length])
      : defaultItems;

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);

    const handleMouseMove = (e: MouseEvent) => {
      mouseXRef.current = e.clientX;
    };

    const updateMotion = () => {
      const maxMoveAmount = 300;
      const baseDuration = 0.8;
      const inertiaFactors = [0.6, 0.4, 0.3, 0.2];

      rowRefs.current.forEach((row, index) => {
        if (row) {
          const direction = index % 2 === 0 ? 1 : -1;
          const moveAmount =
            ((mouseXRef.current / window.innerWidth) * maxMoveAmount -
              maxMoveAmount / 2) *
            direction;

          gsap.to(row, {
            x: moveAmount,
            duration: baseDuration + inertiaFactors[index % inertiaFactors.length],
            ease: "power3.out",
            overwrite: "auto",
          });
        }
      });
    };

    const removeAnimationLoop = gsap.ticker.add(updateMotion);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      removeAnimationLoop();
    };
  }, []);

  return (
    <div className="noscroll" ref={gridRef} style={{ height, borderRadius: "12px", overflow: "hidden" }}>
      <section className="gridMotion-intro">
        <div className="gridMotion-container">
          {[...Array(4)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="gridMotion-row"
              ref={(el) => { rowRefs.current[rowIndex] = el; }}
            >
              {[...Array(9)].map((_, itemIndex) => {
                const content = combinedItems[rowIndex * 9 + itemIndex];
                return (
                  <div key={itemIndex} className="gridMotion-row__item">
                    <div className="gridMotion-row__item-inner" style={{ backgroundColor: "#111" }}>
                      {typeof content === "string" && content.startsWith("http") ? (
                        <div
                          className="gridMotion-row__item-img"
                          style={{ backgroundImage: `url(${content})` }}
                        />
                      ) : typeof content === "string" && content.startsWith("/") ? (
                        <div
                          className="gridMotion-row__item-img"
                          style={{ backgroundImage: `url(${content})` }}
                        />
                      ) : (
                        <div className="gridMotion-row__item-content">{content}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GridMotion;
