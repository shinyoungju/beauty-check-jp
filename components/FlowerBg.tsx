// components/FlowerBg.tsx
'use client';

interface Flower {
  x: number;
  y: number;
  scale: number;
  rotate: number;
  color: string;
  opacity: number;
}

function generateFlowers(count: number, heightVh: number): Flower[] {
  const colors = ['#c4876a', '#d49e82', '#e8c4a8'];
  const flowers: Flower[] = [];
  const seed = 42;
  const rand = (i: number, offset: number) => {
    const x = Math.sin(seed + i * 127.1 + offset * 311.7) * 43758.5453;
    return x - Math.floor(x);
  };
  for (let i = 0; i < count; i++) {
    flowers.push({
      x: rand(i, 0) * 96,
      y: rand(i, 1) * heightVh,
      scale: 0.28 + rand(i, 2) * 0.32,
      rotate: rand(i, 3) * 60,
      color: colors[Math.floor(rand(i, 4) * colors.length)],
      opacity: 0.07 + rand(i, 5) * 0.07,
    });
  }
  return flowers;
}

const PETALS = [0, 60, 120, 180, 240, 300];

export default function FlowerBg({ heightVh = 300 }: { heightVh?: number }) {
  const flowers = generateFlowers(20, heightVh);
  return (
    <svg
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'visible',
      }}
      viewBox={`0 0 100 ${heightVh}`}
      preserveAspectRatio="xMidYMin slice"
    >
      {flowers.map((f, i) => (
        <g
          key={i}
          transform={`translate(${f.x}, ${f.y}) scale(${f.scale}) rotate(${f.rotate}, 20, 20)`}
          opacity={f.opacity}
        >
          {PETALS.map((deg) => (
            <ellipse
              key={deg}
              cx="20" cy="9" rx="5" ry="8"
              fill={f.color}
              transform={`rotate(${deg} 20 20)`}
            />
          ))}
          <circle cx="20" cy="20" r="5" fill={f.color} />
        </g>
      ))}
    </svg>
  );
}
