"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const CursorTooltip = ({
  content,
  children,
  containerClassName,
}: {
  content: string | React.ReactNode;
  children: React.ReactNode;
  containerClassName?: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    if (isVisible && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isVisible, content]);

  const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);

  const calculatePosition = useCallback((clientX: number, clientY: number) => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const tooltipWidth = contentRef.current ? (contentRef.current.offsetWidth || 240) : 240;
    const tooltipHeight = contentRef.current ? contentRef.current.scrollHeight : 120;
    const offset = 14;

    let x = clientX + offset;
    let y = clientY + offset;

    if (x + tooltipWidth > viewportWidth - 8) x = clientX - tooltipWidth - offset;
    if (y + tooltipHeight > viewportHeight - 8) y = clientY - tooltipHeight - offset;

    x = clamp(x, 8, viewportWidth - tooltipWidth - 8);
    y = clamp(y, 8, viewportHeight - tooltipHeight - 8);

    return { x, y };
  }, []);

  // Recalculate once tooltip has rendered and we know real dimensions
  useEffect(() => {
    if (isVisible && contentRef.current) {
      setPosition(calculatePosition(cursorRef.current.x, cursorRef.current.y));
    }
  }, [isVisible, height, calculatePosition]);

  const handleMouseEnter = (e: React.MouseEvent) => {
    cursorRef.current = { x: e.clientX, y: e.clientY };
    setIsVisible(true);
    setPosition(calculatePosition(e.clientX, e.clientY));
  };

  const handleMouseLeave = () => setIsVisible(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isVisible) return;
    cursorRef.current = { x: e.clientX, y: e.clientY };
    setPosition(calculatePosition(e.clientX, e.clientY));
  };

  return (
    <div
      className={cn("relative inline", containerClassName)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key="tooltip"
            initial={{ height: 0, opacity: 1 }}
            animate={{ height, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="pointer-events-none fixed z-[99999] min-w-[15rem] overflow-hidden rounded-xl"
            style={{
              top: position.y,
              left: position.x,
              background: "var(--color-bg)",
              border: "1px solid var(--border-item)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
            }}
          >
            <div ref={contentRef} className="p-3 text-sm text-neutral-600 dark:text-neutral-400">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
