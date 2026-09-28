"use client";
import React, { useState, useRef, useEffect, useCallback, useId } from "react";
import { createPortal } from "react-dom";
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
  // Touch screens have no hover, so the content opens as a bottom sheet on tap instead
  const [isTouch, setIsTouch] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const sheetId = useId();

  useEffect(() => {
    const mq = window.matchMedia("(hover: none)");
    const update = () => setIsTouch(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!sheetOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSheetOpen(false);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [sheetOpen]);

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
    if (isTouch) return;
    cursorRef.current = { x: e.clientX, y: e.clientY };
    setIsVisible(true);
    setPosition(calculatePosition(e.clientX, e.clientY));
  };

  const handleMouseLeave = () => setIsVisible(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isVisible || isTouch) return;
    cursorRef.current = { x: e.clientX, y: e.clientY };
    setPosition(calculatePosition(e.clientX, e.clientY));
  };

  const touchProps = isTouch
    ? {
        role: "button",
        tabIndex: 0,
        "aria-haspopup": "dialog" as const,
        "aria-expanded": sheetOpen,
        "aria-controls": sheetOpen ? sheetId : undefined,
        onClick: () => setSheetOpen(true),
        onKeyDown: (e: React.KeyboardEvent) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setSheetOpen(true);
          }
        },
      }
    : {};

  return (
    <div
      className={cn("relative inline", containerClassName)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      {...touchProps}
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
      {isTouch &&
        createPortal(
          <AnimatePresence>
            {sheetOpen && (
              <div key="sheet" className="fixed inset-0 z-[99999]" onClick={(e) => e.stopPropagation()}>
                <motion.div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{ background: "rgba(0,0,0,0.5)" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setSheetOpen(false)}
                />
                <motion.div
                  id={sheetId}
                  role="dialog"
                  aria-modal="true"
                  className="absolute inset-x-0 bottom-0 rounded-t-2xl"
                  style={{
                    background: "var(--color-bg)",
                    borderTop: "1px solid var(--border-item)",
                    boxShadow: "0 -8px 32px rgba(0,0,0,0.24)",
                    paddingBottom: "max(20px, env(safe-area-inset-bottom))",
                  }}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ type: "spring", stiffness: 380, damping: 36 }}
                  drag="y"
                  dragConstraints={{ top: 0, bottom: 0 }}
                  dragElastic={{ top: 0, bottom: 0.6 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.y > 80 || info.velocity.y > 500) setSheetOpen(false);
                  }}
                >
                  <div className="flex justify-center pt-3 pb-2">
                    <span
                      aria-hidden="true"
                      style={{ width: 36, height: 4, borderRadius: 2, background: "var(--color-muted)", opacity: 0.4 }}
                    />
                  </div>
                  <div className="px-5 pt-1 text-sm text-neutral-600 dark:text-neutral-400">{content}</div>
                  <div className="px-5 pt-5">
                    <button
                      type="button"
                      autoFocus
                      onClick={() => setSheetOpen(false)}
                      className="w-full"
                      style={{
                        fontSize: "14px",
                        padding: "10px 12px",
                        borderRadius: "10px",
                        color: "var(--color-fg)",
                        background: "color-mix(in srgb, var(--color-fg) 10%, transparent)",
                      }}
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
};
