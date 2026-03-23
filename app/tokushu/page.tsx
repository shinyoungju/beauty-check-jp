// app/tokushu/page.tsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import BottomNav from '@/components/BottomNav';
import TopButton from '@/components/TopButton';
import FlowerBg from '@/components/FlowerBg';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  href?: string;
  ready: boolean;
}

function FeatureCard({ icon, title, description, href, ready }: FeatureCardProps) {
  const inner = (
    <div
      className="card-hover w-full overflow-hidden"
      style={{
        borderRadius: '20px',
        border: '0.5px solid #e8ddd8',
        background: ready ? '#fff' : '#faf7f5',
        opacity: ready ? 1 : 0.75,
      }}
    >
      <div className="flex items-center px-5 py-4 gap-4">
        <span className="text-[28px] leading-none w-10 shrink-0">{icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span
              className="text-[15px] font-semibold"
              style={{ color: ready ? '#1a1a1a' : '#b0a098' }}
            >
              {title}
            </span>
            {!ready && (
              <span
                className="text-[10px] px-2 py-0.5 rounded-full shrink-0"
                style={{ background: '#f5e6dd', color: '#c4876a' }}
              >
                準備中
              </span>
            )}
          </div>
          <p className="text-[11px] leading-[1.6]" style={{ color: '#b0a098' }}>
            {description}
          </p>
        </div>
        <span style={{ color: ready ? '#c4876a' : '#d5c8c2', fontSize: '16px' }} className="shrink-0">›</span>
      </div>
    </div>
  );

  if (ready && href) {
    return <Link href={href} className="block">{inner}</Link>;
  }
  return <div>{inner}</div>;
}

export default function TokushuPage() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className="min-h-screen font-sans text-[#1a1a1a]" style={{ background: '#fdf8f5', position: 'relative' }}>
      <FlowerBg pageKey={6} />
      <div className="max-w-md mx-auto px-5 pt-6 pb-6" style={{ position: 'relative', zIndex: 1 }}>

        {/* ページヘッダー */}
        <div className="text-center mb-8">
          <p
            className="text-[9px] font-semibold tracking-[3px] uppercase mb-2"
            style={{ color: '#c4876a' }}
          >
            Featured Content
          </p>
          <h1 className="text-[22px] font-bold text-[#1a1a1a] mb-2 tracking-tight">
            特集
          </h1>
          <p className="text-[12px] leading-[1.7]" style={{ color: '#9e9e9e' }}>
            スキンケア・コスメ・トレンドを<br />カテゴリ別にまとめました
          </p>
          <div
            className="w-8 h-[1.5px] mx-auto mt-4"
            style={{ background: '#c4876a', opacity: 0.4 }}
          />
        </div>

        {/* 特集カード一覧 */}
        <div className="space-y-3">
          <FeatureCard
            icon="💆"
            title="お悩み別スキンケア特集"
            description="乾燥・毛穴・ニキビなど肌悩みに合ったアイテムを厳選紹介。"
            href="/concerns"
            ready={true}
          />
          <FeatureCard
            icon="🎬"
            title="YouTuber PICKS"
            description="話題のビューティー動画から本当に使えるアイテムを厳選。"
            href="/youtuber"
            ready={true}
          />
          <FeatureCard
            icon="🏷️"
            title="ブランド特集"
            description="人気ブランドのラインナップをまとめてチェック。"
            ready={false}
          />
          <FeatureCard
            icon="🍂"
            title="季節特集"
            description="季節ごとにおすすめのスキンケア・コスメを紹介。"
            ready={false}
          />
          <FeatureCard
            icon="🧪"
            title="成分辞典"
            description="気になる美容成分の効果をわかりやすく解説。"
            ready={false}
          />
        </div>
      </div>

      <TopButton show={showTop} />
      <BottomNav />
    </main>
  );
}
