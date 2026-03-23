// app/page.tsx
'use client';
import { useState, useEffect } from 'react';
import BottomNav from '@/components/BottomNav';
import TopButton from '@/components/TopButton';
import FlowerBg from '@/components/FlowerBg';

// --- 배너 카드 컴포넌트 ---

interface BannerCardProps {
  gradient: string;
  labelEn: string;
  title: string;
  description: string;
  illust: string;
  href: string;
}

function BannerCard({ gradient, labelEn, title, description, illust, href }: BannerCardProps) {
  return (
    <a href={href} className="block">
      <div
        className="card-hover w-full overflow-hidden shadow-sm"
        style={{ borderRadius: '24px', border: '0.5px solid #e8ddd8' }}
      >
        {/* 배너 이미지 영역 */}
        <div
          className="relative flex items-end px-6 pb-5 pt-8 h-28"
          style={{ background: gradient }}
        >
          <img
            src={illust}
            alt=""
            className="absolute bottom-0 right-0 w-28 h-20 object-contain opacity-90"
            aria-hidden="true"
          />
          <div>
            <span
              className="inline-block text-[9px] font-semibold tracking-[2.5px] uppercase px-2.5 py-1 rounded-full mb-2"
              style={{ background: 'rgba(255,255,255,0.6)', color: '#7a5a42' }}
            >
              {labelEn}
            </span>
            <h2 className="text-[17px] font-bold leading-tight text-[#1a1a1a]">{title}</h2>
          </div>
        </div>
        {/* 설명 영역 */}
        <div
          className="flex items-center justify-between px-5 py-3.5"
          style={{ background: '#fff' }}
        >
          <p className="text-[12px] text-[#9e9e9e] leading-[1.6] flex-1 pr-3">{description}</p>
          <span className="text-[#c4876a] text-[18px] font-light shrink-0">→</span>
        </div>
      </div>
    </a>
  );
}

// --- 홈 컴포넌트 ---

export default function Home() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className="min-h-screen font-sans text-[#1a1a1a]" style={{ background: '#fdf8f5', position: 'relative' }}>
      <FlowerBg pageKey={1} />
      <div className="max-w-md mx-auto px-5 pt-8 pb-6">

        {/* 헤더 */}
        <header className="text-center mb-8">
          <p
            className="text-[9px] font-semibold tracking-[4px] uppercase mb-3"
            style={{ color: '#c4876a' }}
          >
            Find Your Inner Light
          </p>
          <h1
            className="text-[36px] font-bold tracking-tight mb-2"
            style={{ letterSpacing: '-0.5px' }}
          >
            Lueur
          </h1>
          <p className="text-[12px] leading-[1.8]" style={{ color: '#9e9e9e' }}>
            あなたに似合うコスメを、見つけよう。<br />
            肌悩み・口コミ・診断から、<br />
            本当に使えるコスメだけをご提案します。
          </p>
          <div
            className="w-8 h-[1.5px] mx-auto mt-5"
            style={{ background: '#c4876a', opacity: 0.4 }}
          />
        </header>

        {/* 카드 그룹 */}
        <div className="space-y-4">

          {/* 카드 1: 고민별 특집 */}
          <BannerCard
            href="/concerns"
            gradient="linear-gradient(135deg, #f8e1d4 0%, #f0c4a8 100%)"
            illust="/illust-skincare.svg"
            labelEn="Skincare by Concern"
            title="お悩み別スキンケア特集"
            description="乾燥・毛穴・ニキビなど、肌悩みに合ったアイテムを厳選紹介。"
          />

          {/* 카드 2: YouTuber PICKS */}
          <BannerCard
            href="/youtuber"
            gradient="linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%)"
            illust="/illust-youtuber.svg"
            labelEn="Youtuber Picks"
            title="人気YouTuberが絶賛したコスメ"
            description="話題のビューティー動画から本当に使えるアイテムを厳選。"
          />

          {/* 카드 3: 진단 */}
          <BannerCard
            href="/diagnosis"
            gradient="linear-gradient(135deg, #e8d5f0 0%, #d4b8e8 100%)"
            illust="/illust-diagnosis.svg"
            labelEn="Diagnosis"
            title="あなたに似合うコスメを診断"
            description="パーソナルカラー・肌タイプから、あなただけのコスメを提案。"
          />

        </div>

        <footer className="mt-10 text-center">
          <p className="text-[10px] tracking-[0.2em] font-light" style={{ color: '#c4b8b0' }}>
            &copy; 2026 Lueur Beauty. All rights reserved.
          </p>
        </footer>
      </div>

      <TopButton show={showTop} />
      <BottomNav />
    </main>
  );
}
