// components/FlowerBg.tsx
'use client';

const PETALS = [0, 60, 120, 180, 240, 300];
const COLORS = ['#c4876a', '#d49e82', '#e8c4a8'];

function rand(seed: number, i: number, o: number) {
  const x = Math.sin(seed + i * 127.1 + o * 311.7) * 43758.5453;
  return x - Math.floor(x);
}

export default function FlowerBg({ pageKey = 1 }: { pageKey?: number }) {
  const flowers = Array.from({ length: 20 }, (_, i) => ({
    x: rand(pageKey, i, 0) * 92 + 2,
    y: rand(pageKey, i, 1) * 92 + 2,
    size: 28 + rand(pageKey, i, 2) * 20,
    rotate: rand(pageKey, i, 3) * 60,
    color: COLORS[Math.floor(rand(pageKey, i, 4) * COLORS.length)],
    opacity: 0.08 + rand(pageKey, i, 5) * 0.07,
  }));

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
        {flowers.map((f, i) => {
          const s = f.size / 1000;
          return (
            <g
              key={i}
              transform={`translate(${f.x},${f.y}) scale(${s}) rotate(${f.rotate},20,20)`}
              opacity={f.opacity}
            >
              {PETALS.map((deg) => (
                <ellipse key={deg} cx="20" cy="9" rx="5" ry="8"
                  fill={f.color} transform={`rotate(${deg} 20 20)`} />
              ))}
              <circle cx="20" cy="20" r="5" fill={f.color} />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
