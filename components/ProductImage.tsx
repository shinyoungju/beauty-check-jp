// components/ProductImage.tsx
'use client';
import { useState } from 'react';

function PetalSpinner() {
  return (
    <div style={{
      width: '40px', height: '40px', position: 'relative',
      animation: 'petalSpin 2s linear infinite',
    }}>
      {[0,45,90,135,180,225,270,315].map((deg, i) => (
        <div key={i} style={{
          position: 'absolute', width: '8px', height: '14px',
          borderRadius: '50%', background: '#c4876a',
          top: 0, left: '50%', marginLeft: '-4px',
          transformOrigin: '4px 20px',
          transform: `rotate(${deg}deg)`,
          opacity: 1 - i * 0.11,
        }} />
      ))}
      <style>{`@keyframes petalSpin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

function FlowerFallback() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <ellipse cx="20" cy="9" rx="5" ry="8" fill="#e8c4a8" opacity="0.9"/>
      <ellipse cx="20" cy="9" rx="5" ry="8" fill="#e8c4a8" opacity="0.9" transform="rotate(60 20 20)"/>
      <ellipse cx="20" cy="9" rx="5" ry="8" fill="#e8c4a8" opacity="0.9" transform="rotate(120 20 20)"/>
      <ellipse cx="20" cy="9" rx="5" ry="8" fill="#d4a890" opacity="0.8" transform="rotate(180 20 20)"/>
      <ellipse cx="20" cy="9" rx="5" ry="8" fill="#d4a890" opacity="0.8" transform="rotate(240 20 20)"/>
      <ellipse cx="20" cy="9" rx="5" ry="8" fill="#d4a890" opacity="0.8" transform="rotate(300 20 20)"/>
      <circle cx="20" cy="20" r="6" fill="#c4876a"/>
      <circle cx="20" cy="20" r="3" fill="#fdf8f5"/>
    </svg>
  );
}

interface ProductImageProps {
  loading: boolean;
  url: string | null | undefined;
  size?: number;
}

export default function ProductImage({ loading, url, size = 64 }: ProductImageProps) {
  const [errored, setErrored] = useState(false);
  const boxStyle = {
    width: size, height: size, borderRadius: '14px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  };

  if (loading) return (
    <div style={{ ...boxStyle, background: '#fdf0ea' }}>
      <PetalSpinner />
    </div>
  );

  if (!url || errored) return (
    <div style={{ ...boxStyle, background: '#fdf0ea' }}>
      <FlowerFallback />
    </div>
  );

  return (
    <div style={{ ...boxStyle, background: '#faf7f5', overflow: 'hidden' }}>
      <img
        src={url}
        alt=""
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        onError={() => setErrored(true)}
      />
    </div>
  );
}
