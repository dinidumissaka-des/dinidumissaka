"use client";

import "./AssetCarousel.css";

interface AssetCarouselProps {
  images: string[];
  size?: string;
  speed?: number;
  rows?: 1 | 2;
  style?: React.CSSProperties;
}

export default function AssetCarousel({
  images,
  size = "220px",
  speed = 60,
  rows = 2,
  style,
}: AssetCarouselProps) {
  const items = [...images, ...images];

  return (
    <div
      className="asset-carousel"
      style={{ "--item-size": size, "--speed": `${speed}s`, aspectRatio: rows === 1 ? undefined : "16 / 9", ...style } as React.CSSProperties}
    >
      <div className="asset-carousel__track asset-carousel__track--ltr">
        {items.map((src, i) => (
          <div key={i} className="asset-carousel__item">
            <img src={src} alt="" draggable={false} />
          </div>
        ))}
      </div>
      {rows === 2 && (
        <div className="asset-carousel__track asset-carousel__track--rtl">
          {items.map((src, i) => (
            <div key={i} className="asset-carousel__item">
              <img src={src} alt="" draggable={false} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
