// app/about/page.tsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import BottomNav from '@/components/BottomNav';
import TopButton from '@/components/TopButton';
import FlowerBg from '@/components/FlowerBg';

export default function AboutPage() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main className="min-h-screen font-sans text-[#1a1a1a]" style={{ background: '#fdf8f5', position: 'relative' }}>
      <FlowerBg />
      <div className="max-w-md mx-auto px-5 pt-6 pb-32" style={{ position: 'relative', zIndex: 1 }}>

        {/* 戻るリンク */}
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-[13px] font-bold tracking-widest uppercase mb-6 hover:opacity-70 transition-opacity"
          style={{ color: '#c4876a' }}
        >
          ← 戻る
        </Link>

        {/* ページヘッダー */}
        <div className="text-center mb-8">
          <p
            className="text-[9px] font-semibold tracking-[3px] uppercase mb-2"
            style={{ color: '#c4876a' }}
          >
            ABOUT LUEUR
          </p>
          <h1 className="text-[22px] font-bold text-[#1a1a1a] mb-2 tracking-tight">
            Lueurについて
          </h1>
          <div
            className="w-8 h-[1.5px] mx-auto mt-4"
            style={{ background: '#c4876a', opacity: 0.4 }}
          />
        </div>

        {/* セクション1: ブランド名の意味 */}
        <div
          className="rounded-2xl p-7 mb-5 text-center"
          style={{
            background: 'linear-gradient(135deg, #f8e1d4, #f5e6dd)',
            border: '0.5px solid #e8ddd8',
          }}
        >
          <p
            className="text-[38px] font-bold tracking-tight mb-1"
            style={{ color: '#c4876a' }}
          >
            Lueur
          </p>
          <p className="text-[13px] mb-4" style={{ color: '#b0876a' }}>
            リュール
          </p>
          <p className="text-[12px] leading-[1.8]" style={{ color: '#7a6058' }}>
            フランス語で
          </p>
          <p
            className="text-[16px] font-semibold leading-[1.8] mt-1"
            style={{ color: '#1a1a1a' }}
          >
            「かすかな光・ほのかな輝き」
          </p>
        </div>

        {/* セクション2: ブランドストーリー */}
        <div
          className="rounded-2xl p-6 mb-5"
          style={{
            background: '#ffffff',
            border: '0.5px solid #e8ddd8',
          }}
        >
          <p
            className="text-[9px] font-semibold tracking-[3px] uppercase mb-4"
            style={{ color: '#c4876a' }}
          >
            BRAND STORY
          </p>
          <p className="text-[14px] leading-[2] text-[#3a3a3a]">
            コスメの情報は、あふれるほどある。<br />
            でも「自分に本当に合うもの」は、<br />
            なかなか見つからない。
          </p>
          <p className="text-[14px] leading-[2] text-[#3a3a3a] mt-4">
            Lueurは、そんなあなたのための<br />
            ビューティー・キュレーションガイドです。<br />
            人気YouTuberのリアルな声、<br />
            肌悩み別の本音レビュー、<br />
            そしてパーソナルカラー診断による提案。<br />
            「これが私に似合う」と感じる一本を、<br />
            一緒に見つけていきましょう。
          </p>
        </div>

        {/* セクション3: Lueurでできること */}
        <div
          className="rounded-2xl p-6 mb-5"
          style={{
            background: '#ffffff',
            border: '0.5px solid #e8ddd8',
          }}
        >
          <p
            className="text-[9px] font-semibold tracking-[3px] uppercase mb-5"
            style={{ color: '#c4876a' }}
          >
            WHAT YOU CAN DO
          </p>
          <div className="flex flex-col gap-4">
            {[
              {
                icon: '💆',
                title: 'お悩み別スキンケア',
                desc: '乾燥・毛穴・ニキビなど\n肌悩みに合ったアイテムを本音でご提案',
              },
              {
                icon: '🎬',
                title: 'YouTuber PICKS',
                desc: '人気ビューティーYouTuberが\n実際に使っているアイテムを厳選紹介',
              },
              {
                icon: '💄',
                title: 'パーソナル診断',
                desc: '10の質問に答えるだけで\nあなたに似合うコスメを診断',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-xl p-4"
                style={{ background: '#fdf8f5' }}
              >
                <span className="text-[28px] leading-none shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <p className="text-[14px] font-semibold text-[#1a1a1a] mb-1">{item.title}</p>
                  <p className="text-[12px] leading-[1.7]" style={{ color: '#9e9e9e' }}>
                    {item.desc.split('\n').map((line, i) => (
                      <span key={i}>
                        {line}
                        {i === 0 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* セクション4: メッセージ */}
        <div
          className="rounded-2xl p-8 mb-5 text-center"
          style={{
            background: '#f5ede8',
            border: '0.5px solid #e8ddd8',
          }}
        >
          <p
            className="text-[14px] leading-[2] italic"
            style={{ color: '#7a6058' }}
          >
            「情報に迷ったとき、Lueurを開いてください。<br />
            あなたに似合う一本が、<br />
            きっと見つかります。」
          </p>
        </div>

        {/* フッター */}
        <p className="text-center text-[11px] mt-8" style={{ color: '#c0b0a8' }}>
          © 2026 Lueur Beauty. All rights reserved.
        </p>

      </div>

      <TopButton show={showTop} />
      <BottomNav />
    </main>
  );
}
