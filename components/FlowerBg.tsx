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
    y: Math.random() * 92 + 2,
    size: 0.06 + Math.random() * 0.05,
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
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        style={{ position: 'absolute', inset: 0 }}
      >
        {flowers.map((f, i) => (
          <g
            key={i}
            transform={`translate(${f.x},${f.y}) scale(${f.size}) rotate(${f.rotate},20,20)`}
            opacity={f.opacity}
          >
            {PETALS.map((deg) => (
              <ellipse key={deg} cx="20" cy="9" rx="5" ry="8"
                fill={f.color} transform={`rotate(${deg} 20 20)`} />
            ))}
            <circle cx="20" cy="20" r="5" fill={f.color} />
          </g>
        ))}
      </svg>
    </div>
  );
}
