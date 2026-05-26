"use client";
import { useState } from "react";

interface VideoSequenceProps {
  videos: string[];
  style?: React.CSSProperties;
}

export default function VideoSequence({ videos, style }: VideoSequenceProps) {
  const [current, setCurrent] = useState(0);

  const handleEnded = () => {
    setCurrent((prev) => (prev + 1) % videos.length);
  };

  return (
    <div style={{ borderRadius: "12px", overflow: "hidden", aspectRatio: "16 / 9", background: "rgba(0,0,0,0.04)", ...style }}>
      <video
        key={current}
        src={videos[current]}
        autoPlay
        muted
        playsInline
        onEnded={handleEnded}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
    </div>
  );
}
