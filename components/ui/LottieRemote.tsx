"use client";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";

interface LottieRemoteProps {
  url: string;
  loop?: boolean;
  autoplay?: boolean;
  style?: React.CSSProperties;
}

export default function LottieRemote({ url, loop = true, autoplay = true, style }: LottieRemoteProps) {
  const [data, setData] = useState<object | null>(null);

  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then(setData)
      .catch(() => {});
  }, [url]);

  if (!data) return null;

  return <Lottie animationData={data} loop={loop} autoplay={autoplay} style={style} />;
}
