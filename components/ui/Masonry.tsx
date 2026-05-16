'use client';

import { useEffect, useLayoutEffect, useMemo, useRef, useState, ReactNode } from 'react';
import { gsap } from 'gsap';
import './Masonry.css';

const useMedia = (queries: string[], values: number[], defaultValue: number) => {
  const get = () =>
    typeof window !== 'undefined'
      ? (values[queries.findIndex(q => matchMedia(q).matches)] ?? defaultValue)
      : defaultValue;

  const [value, setValue] = useState(get);

  useEffect(() => {
    const handler = () => setValue(get);
    queries.forEach(q => matchMedia(q).addEventListener('change', handler));
    return () => queries.forEach(q => matchMedia(q).removeEventListener('change', handler));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return value;
};

const useMeasure = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size] as const;
};

export interface MasonryItem {
  id: string;
  height: number;
  url?: string;
  img?: string;
}

interface MasonryProps<T extends MasonryItem> {
  items: T[];
  ease?: string;
  duration?: number;
  stagger?: number;
  animateFrom?: 'top' | 'bottom' | 'left' | 'right' | 'center' | 'random';
  scaleOnHover?: boolean;
  hoverScale?: number;
  blurToFocus?: boolean;
  colorShiftOnHover?: boolean;
  renderItem?: (item: T) => ReactNode;
  columnBreakpoints?: string[];
  columnValues?: number[];
  defaultColumns?: number;
}

function Masonry<T extends MasonryItem>({
  items,
  ease = 'power3.out',
  duration = 0.6,
  stagger = 0.05,
  animateFrom = 'bottom',
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
  renderItem,
  columnBreakpoints = ['(min-width:1500px)', '(min-width:1000px)', '(min-width:600px)', '(min-width:400px)'],
  columnValues = [5, 4, 3, 2],
  defaultColumns = 1,
}: MasonryProps<T>) {
  const columns = useMedia(columnBreakpoints, columnValues, defaultColumns);
  const [containerRef, { width }] = useMeasure();
  const [imagesReady, setImagesReady] = useState(false);
  const hasMounted = useRef(false);

  const grid = useMemo(() => {
    if (!width) return [];
    const colHeights = new Array(columns).fill(0);
    const columnWidth = width / columns;

    return items.map(child => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = columnWidth * col;
      const h = child.height;
      const y = colHeights[col];
      colHeights[col] += h;
      return { ...child, x, y, w: columnWidth, h };
    });
  }, [columns, items, width]);

  const containerHeight = useMemo(
    () => grid.reduce((max, item) => Math.max(max, item.y + item.h), 0),
    [grid]
  );

  const getInitialPosition = (item: (typeof grid)[0]) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return { x: item.x, y: item.y };

    let direction: string = animateFrom;
    if (animateFrom === 'random') {
      const dirs = ['top', 'bottom', 'left', 'right'];
      direction = dirs[Math.floor(Math.random() * dirs.length)];
    }

    switch (direction) {
      case 'top': return { x: item.x, y: -200 };
      case 'bottom': return { x: item.x, y: window.innerHeight + 200 };
      case 'left': return { x: -200, y: item.y };
      case 'right': return { x: window.innerWidth + 200, y: item.y };
      case 'center': return {
        x: containerRect.width / 2 - item.w / 2,
        y: containerRect.height / 2 - item.h / 2,
      };
      default: return { x: item.x, y: item.y + 100 };
    }
  };

  useEffect(() => {
    const imgUrls = items.map(i => i.img).filter(Boolean) as string[];
    if (imgUrls.length === 0) {
      setImagesReady(true);
      return;
    }
    Promise.all(
      imgUrls.map(
        src =>
          new Promise<void>(resolve => {
            const img = new window.Image();
            img.src = src;
            img.onload = img.onerror = () => resolve();
          })
      )
    ).then(() => setImagesReady(true));
  }, [items]);

  useLayoutEffect(() => {
    if (!imagesReady) return;

    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;

      if (!hasMounted.current) {
        const initialPos = getInitialPosition(item);
        gsap.fromTo(
          selector,
          {
            opacity: 0,
            x: initialPos.x,
            y: initialPos.y,
            width: item.w,
            height: item.h,
            ...(blurToFocus && { filter: 'blur(10px)' }),
          },
          {
            opacity: 1,
            x: item.x,
            y: item.y,
            width: item.w,
            height: item.h,
            ...(blurToFocus && { filter: 'blur(0px)' }),
            duration: 0.8,
            ease: 'power3.out',
            delay: index * stagger,
          }
        );
      } else {
        gsap.to(selector, {
          x: item.x,
          y: item.y,
          width: item.w,
          height: item.h,
          duration,
          ease,
          overwrite: 'auto',
        });
      }
    });

    hasMounted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [grid, imagesReady]);

  const handleMouseEnter = (item: (typeof grid)[0]) => {
    const selector = `[data-key="${item.id}"]`;
    if (scaleOnHover) {
      gsap.to(selector, { scale: hoverScale, duration: 0.3, ease: 'power2.out' });
    }
  };

  const handleMouseLeave = (item: (typeof grid)[0]) => {
    const selector = `[data-key="${item.id}"]`;
    if (scaleOnHover) {
      gsap.to(selector, { scale: 1, duration: 0.3, ease: 'power2.out' });
    }
    if (colorShiftOnHover) {
      // handled via CSS/renderItem if needed
    }
  };

  return (
    <div ref={containerRef} className="masonry-list" style={{ height: containerHeight }}>
      {grid.map(item => (
        <div
          key={item.id}
          data-key={item.id}
          className="masonry-item"
          onClick={item.url ? () => window.open(item.url, '_blank', 'noopener') : undefined}
          style={{ cursor: item.url ? 'pointer' : 'default' }}
          onMouseEnter={() => handleMouseEnter(item)}
          onMouseLeave={() => handleMouseLeave(item)}
        >
          {renderItem ? (
            renderItem(item as T)
          ) : item.img ? (
            <div className="masonry-img" style={{ backgroundImage: `url(${item.img})` }} />
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default Masonry;
