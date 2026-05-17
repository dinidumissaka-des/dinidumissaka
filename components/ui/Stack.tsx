'use client';

import { motion, useMotionValue, useTransform } from 'motion/react';
import { useState, useEffect, ReactNode } from 'react';
import './Stack.css';

interface CardRotateProps {
  children: ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
  disableDrag?: boolean;
}

function CardRotate({ children, onSendToBack, sensitivity, disableDrag = false }: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_: unknown, info: { offset: { x: number; y: number } }) {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  if (disableDrag) {
    return (
      <motion.div className="card-rotate-disabled" style={{ x: 0, y: 0 }}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className="card-rotate"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: 'grabbing' }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

interface StackProps {
  cards: ReactNode[];
  randomRotation?: boolean;
  sensitivity?: number;
  sendToBackOnClick?: boolean;
  animationConfig?: { stiffness: number; damping: number };
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  mobileClickOnly?: boolean;
  mobileBreakpoint?: number;
}

export default function Stack({
  cards = [],
  randomRotation = false,
  sensitivity = 200,
  sendToBackOnClick = false,
  animationConfig = { stiffness: 260, damping: 20 },
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  mobileClickOnly = false,
  mobileBreakpoint = 768,
}: StackProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < mobileBreakpoint);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [mobileBreakpoint]);

  const shouldDisableDrag = mobileClickOnly && isMobile;
  const shouldEnableClick = sendToBackOnClick || shouldDisableDrag;

  const [stack, setStack] = useState(() =>
    cards.map((content, index) => ({ id: index + 1, content }))
  );

  useEffect(() => {
    setStack(cards.map((content, index) => ({ id: index + 1, content })));
  }, [cards]);

  const sendToBack = (id: number) => {
    setStack((prev) => {
      const next = [...prev];
      const idx = next.findIndex((c) => c.id === id);
      const [card] = next.splice(idx, 1);
      next.unshift(card);
      return next;
    });
  };

  useEffect(() => {
    if (autoplay && stack.length > 1 && !isPaused) {
      const interval = setInterval(() => {
        sendToBack(stack[stack.length - 1].id);
      }, autoplayDelay);
      return () => clearInterval(interval);
    }
  }, [autoplay, autoplayDelay, stack, isPaused]);

  return (
    <div
      className="stack-container"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {stack.map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;
        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
            disableDrag={shouldDisableDrag}
          >
            <motion.div
              className="card"
              onClick={() => shouldEnableClick && sendToBack(card.id)}
              animate={{
                rotateZ: (stack.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - stack.length * 0.06,
                transformOrigin: '90% 90%',
              }}
              initial={false}
              transition={{
                type: 'spring',
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
            >
              {card.content}
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
