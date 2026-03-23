// components/FlowerBg.tsx
'use client';
import { useEffect, useState } from 'react';

const PETALS = [0, 60, 120, 180, 240, 300];
const COLORS = ['#c4876a', '#d49e82', '#e8c4a8'];

interface Flower {
  x: number; y: number; size: number;
  rotate: number; color: string; opacity: number;
}

function generateFlowers(): Flower[] {
  return Array.from({ length: 20 }, () => ({
    x: Math.random() * 92 + 2,
    y: Math.random() * 95 + 1,
    size: 30 + Math.random() * 30,
    rotate: Math.random() * 60,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    opacity: 0.07 + Math.random() * 0.07,
  }));
}

export default function FlowerBg() {
  const [flowers, setFlowers] = useState<Flower[]>([]);

  useEffect(() => {
    setFlowers(generateFlowers());
  }, []);

  if (flowers.length === 0) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {flowers.map((f, i) => (
        <svg
          key={i}
          viewBox="0 0 40 40"
          style={{
            position: 'absolute',
            left: `${f.x}%`,
            top: `${f.y}%`,
            width: f.size,
            height: f.size,
            opacity: f.opacity,
            transform: `rotate(${f.rotate}deg)`,
            overflow: 'visible',
          }}
        >
          {PETALS.map((deg) => (
            <ellipse key={deg} cx="20" cy="9" rx="5" ry="8"
              fill={f.color} transform={`rotate(${deg} 20 20)`} />
          ))}
          <circle cx="20" cy="20" r="5" fill={f.color} />
        </svg>
      ))}
    </div>
  );
}
