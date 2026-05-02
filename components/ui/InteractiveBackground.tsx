'use client';

import { useEffect, useRef, useState } from 'react';

interface Point {
  x: number;
  y: number;
  originX: number;
  originY: number;
}

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * dpr;
    canvas.height = dimensions.height * dpr;
    ctx.scale(dpr, dpr);

    const spacing = 40;
    const points: Point[] = [];
    const rows = Math.ceil(dimensions.height / spacing) + 1;
    const cols = Math.ceil(dimensions.width / spacing) + 1;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        points.push({
          x: col * spacing,
          y: row * spacing,
          originX: col * spacing,
          originY: row * spacing,
        });
      }
    }

    let animationFrame: number;

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      const mouseRadius = 150;
      const forceMultiplier = 0.5;
      const easing = 0.08;

      points.forEach((p) => {
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseRadius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouseRadius - dist) / mouseRadius;
          const tx = p.originX - Math.cos(angle) * force * mouseRadius * forceMultiplier;
          const ty = p.originY - Math.sin(angle) * force * mouseRadius * forceMultiplier;

          p.x += (tx - p.x) * easing;
          p.y += (ty - p.y) * easing;

          const ratio = 1 - dist / mouseRadius;
          const alpha = 0.2 + ratio * 0.6;
          const red = Math.round(255 * (1 - ratio));
          const green = Math.round(255 * ratio);
          ctx.fillStyle = `rgba(${red}, ${green}, 255, ${alpha})`;
        } else {
          p.x += (p.originX - p.x) * easing;
          p.y += (p.originY - p.y) * easing;
          ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [dimensions]);

  return (
    <div ref={containerRef} aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden bg-neutral-950">
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%' }}
        className="block opacity-60"
      />
      <div className="noise" />
      <div className="noise-vignette" />
    </div>
  );
}
