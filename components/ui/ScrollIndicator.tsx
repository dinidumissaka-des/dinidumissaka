"use client";
import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

const DEFAULT_HALF = 430;
const MIN_HALF = 260;
const STORAGE_KEY = "din-container-half";

export function ScrollIndicator() {
  const pathname = usePathname();
  const handleRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const startHalf = useRef(DEFAULT_HALF);
  const halfRef = useRef(DEFAULT_HALF);

  const applyHalf = (half: number, save = false) => {
    const maxHalf = Math.floor(window.innerWidth / 2) - 16;
    const clamped = Math.min(Math.max(half, MIN_HALF), maxHalf);
    halfRef.current = clamped;
    const zoom = clamped / DEFAULT_HALF;
    const wrapper = document.getElementById("content-scale-wrapper") as HTMLElement | null;
    if (wrapper) wrapper.style.zoom = String(zoom);
    document.body.style.setProperty("--container-half", `${clamped}px`);
    if (save) localStorage.setItem(STORAGE_KEY, String(clamped));
  };

  // Restore saved scale on every page
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const half = Number(saved);
      if (half >= MIN_HALF) {
        applyHalf(half);
        halfRef.current = half;
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    startX.current = e.clientX;
    startHalf.current = halfRef.current;
    if (handleRef.current) {
      handleRef.current.style.opacity = "0.5";
      handleRef.current.style.transition = "none";
    }
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!(e.buttons & 1)) return;
    applyHalf(startHalf.current + (e.clientX - startX.current));
  };

  const onPointerUp = () => {
    applyHalf(halfRef.current, true); // save on release
    if (handleRef.current) {
      handleRef.current.style.opacity = "0.2";
      handleRef.current.style.transition = "opacity 0.2s ease";
    }
  };

  if (pathname === "/visual-journal") return null;

  return (
    <div
      ref={handleRef}
      aria-hidden="true"
      className="container-scaler"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onMouseEnter={() => { if (handleRef.current) handleRef.current.style.opacity = "0.4"; }}
      onMouseLeave={() => { if (handleRef.current) handleRef.current.style.opacity = "0.2"; }}
      style={{
        position: "fixed",
        right: "max(16px, calc(50% - var(--container-half, 430px)))",
        top: "50%",
        transform: "translateX(50%) translateY(-50%)",
        width: "8px",
        height: "28px",
        borderRadius: "999px",
        background: "var(--color-fg)",
        opacity: 0.2,
        cursor: "ew-resize",
        zIndex: 10000,
        transition: "opacity 0.2s ease",
        userSelect: "none",
        touchAction: "none",
      }}
    />
  );
}
