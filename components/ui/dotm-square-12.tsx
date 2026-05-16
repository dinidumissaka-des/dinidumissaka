"use client";

interface DotmSquare12Props {
  size?: number;
  dotSize?: number;
  speed?: number;
  bloom?: boolean;
  color?: string;
}

const COLS = 4;
const ROWS = 3;
const DOTS = Array.from({ length: COLS * ROWS }, (_, i) => ({
  col: i % COLS,
  row: Math.floor(i / COLS),
}));

export function DotmSquare12({
  size = 32,
  dotSize = 4,
  speed = 1,
  bloom = false,
}: DotmSquare12Props) {
  const gapX = (size - COLS * dotSize) / (COLS - 1);
  const gapY = (size - ROWS * dotSize) / (ROWS - 1);
  const duration = (1.6 / speed).toFixed(2);

  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-block",
        width: size,
        height: size,
        position: "relative",
        flexShrink: 0,
      }}
    >
      {bloom && (
        <style>{`
          @keyframes dotm-bloom {
            0%, 100% { opacity: 0.25; transform: scale(0.85); }
            50%       { opacity: 1;    transform: scale(1.15); }
          }
        `}</style>
      )}
      {DOTS.map((dot, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            width: dotSize,
            height: dotSize,
            borderRadius: "50%",
            backgroundColor: "currentColor",
            left: dot.col * (dotSize + gapX),
            top: dot.row * (dotSize + gapY),
            ...(bloom && {
              animation: `dotm-bloom ${duration}s ease-in-out ${(i * 0.06).toFixed(2)}s infinite`,
              boxShadow: "0 0 5px 1px currentColor",
            }),
          }}
        />
      ))}
    </span>
  );
}
