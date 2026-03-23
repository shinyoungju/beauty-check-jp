// components/FlowerBg.tsx
'use client';

interface Flower {
  x: number; y: number; scale: number;
  rotate: number; color: string; opacity: number;
}

function generateFlowers(count: number, pageKey: number): Flower[] {
  const colors = ['#c4876a', '#d49e82', '#e8c4a8'];
  return Array.from({ length: count }, (_, i) => {
    const rand = (o: number) => {
      const x = Math.sin(pageKey + i * 127.1 + o * 311.7) * 43758.5453;
      return Math.round((x - Math.floor(x)) * 1e4) / 1e4;
    };
    return {
      x: rand(0) * 90 + 2,
      y: rand(1) * 95 + 1,
      scale: 0.22 + rand(2) * 0.22,
      rotate: rand(3) * 60,
      color: colors[Math.floor(rand(4) * colors.length)],
      opacity: 0.06 + rand(5) * 0.06,
    };
  });
}

const PETALS = [0, 60, 120, 180, 240, 300];

export default function FlowerBg({ pageKey = 1 }: { pageKey?: number }) {
  const flowers = generateFlowers(18, pageKey);
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
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
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      >
        {flowers.map((f, i) => (
          <g
            key={i}
            transform={`translate(${f.x},${f.y}) scale(${f.scale}) rotate(${f.rotate},20,20)`}
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
