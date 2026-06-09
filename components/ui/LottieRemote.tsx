"use client";
import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";

interface LottieRemoteProps {
  url: string;
  loop?: boolean;
  autoplay?: boolean;
  style?: React.CSSProperties;
}

export default function LottieRemote({ url, loop = true, autoplay = true, style }: LottieRemoteProps) {
  const [data, setData] = useState<object | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        fetch(url)
          .then((r) => r.json())
          .then(setData)
          .catch(() => {});
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [url]);

  return (
    <div ref={containerRef} style={style}>
      {data && <Lottie animationData={data} loop={loop} autoplay={autoplay} style={{ width: "100%", height: "100%" }} />}
    </div>
  );
}
