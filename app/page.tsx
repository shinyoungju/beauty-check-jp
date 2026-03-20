// app/page.tsx
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image'; // Next.js 이미지 최적화 컴포넌트 불러오기
import { recommendations } from './data';
import QuizEngine from './quiz-engine';

// --- 데이터 타입 정의 (빨간 줄 방지) ---

interface Product {
  name: string;
  img: string;
  link: string;
}

interface RecommendationData {
  title: string;
  description: string;
  bgClass: string;
  textClass: string;
  btnClass: string;
  moodImg: string;
  products: Product[];
}

interface FullRecommendation {
  type: string;
  lip: RecommendationData;
  shadow: RecommendationData;
}

const typedRecommendations = recommendations as Record<'warm' | 'cool', FullRecommendation>;

// --- 메인 컴포넌트 ---

export default function Home() {
  const [mode, setMode] = useState<'menu' | 'quiz' | 'result'>('menu');
  const [activeQuizType, setActiveQuizType] = useState<'lip' | 'shadow'>('lip');
  const [resultData, setResultData] = useState<RecommendationData | null>(null);
  const [rakutenImages, setRakutenImages] = useState<string[]>([]);

  useEffect(() => {
    if (!resultData) return;
    const appId = process.env.NEXT_PUBLIC_RAKUTEN_APP_ID;
    const affiliateId = process.env.NEXT_PUBLIC_RAKUTEN_AFFILIATE_ID;
    const fetchImages = async () => {
      const images = await Promise.all(
        resultData.products.map(async (product: Product) => {
          try {
            const res = await fetch(
              `https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?applicationId=${appId}&affiliateId=${affiliateId}&keyword=${encodeURIComponent(product.name)}&hits=1&format=json`
            );
            const data = await res.json();
            return data.Items?.[0]?.Item?.mediumImageUrls?.[0]?.imageUrl || product.img;
          } catch {
            return product.img;
          }
        })
      );
      setRakutenImages(images);
    };
    fetchImages();
  }, [resultData]);

  const startQuiz = (type: 'lip' | 'shadow') => {
    setActiveQuizType(type);
    setMode('quiz');
    setResultData(null);
    setRakutenImages([]);
  };

  const handleFinish = (type: 'warm' | 'cool') => {
    // 선택한 진단 타입에 맞춰 데이터를 가져옵니다.
    const fullData = typedRecommendations[type];
    setResultData(fullData[activeQuizType]);
    setMode('result');
  };

  // 1. 메인 메뉴 화면 (동일)
  if (mode === 'menu') {
    return (
      <main className="flex min-h-screen flex-col items-center bg-[#fffafa] font-sans text-[#1a1a1a]">
        <header className="mt-20 mb-24 text-center px-6 relative">
          <p className="text-pink-400 text-xs font-bold tracking-[0.3em] mb-3 uppercase">Find Your Inner Light</p>
          <h1 className="text-5xl font-extrabold tracking-tight mb-6">Lueur (リュール)</h1>
          <p className="text-gray-500 text-sm font-light leading-relaxed max-w-xs mx-auto">
            あなただけに似合う、最高の輝きを。<br />
            美しさの鍵を見つける診断へようこそ。
          </p>
          <div className="mt-10 w-12 h-[1px] bg-pink-200 mx-auto" />
        </header>

        <div className="max-w-md w-full px-6 space-y-6">
          <p className="text-xs font-bold text-gray-400 tracking-widest ml-1 mb-4 uppercase">Selection</p>
          
          <button onClick={() => startQuiz('lip')} className="group w-full bg-white border border-pink-50 p-7 rounded-[2rem] shadow-sm flex items-center gap-6 hover:shadow-md hover:border-pink-100 transition-all duration-500">
            <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">💄</div>
            <div className="text-left flex-1">
              <span className="text-[9px] text-pink-400 font-bold tracking-widest uppercase">Popular Choice</span>
              <h2 className="text-lg font-bold mt-1">パーソナルカラー別<br />似合うリップ診断</h2>
            </div>
          </button>

          <button onClick={() => startQuiz('shadow')} className="group w-full bg-white border border-pink-50 p-7 rounded-[2rem] shadow-sm flex items-center gap-6 hover:shadow-md hover:border-pink-100 transition-all duration-500">
            <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">👁️</div>
            <div className="text-left flex-1">
              <span className="text-[9px] text-pink-400 font-bold tracking-widest uppercase">New Release</span>
              <h2 className="text-lg font-bold mt-1">瞳の色を際立たせる<br />アイシャドウ診断</h2>
            </div>
          </button>
        </div>
        
        <footer className="mt-auto py-16 text-center">
          <p className="text-[10px] text-gray-400 tracking-[0.2em] font-light">&copy; 2026 Lueur JP. Beauty Innovation.</p>
        </footer>
      </main>
    );
  }

  // 2. 퀴즈 화면 (동일)
  if (mode === 'quiz') {
    return (
      <main className="flex min-h-screen flex-col items-center bg-[#fffafa] p-6">
        <QuizEngine onFinish={handleFinish} onCancel={() => setMode('menu')} />
      </main>
    );
  }

  // 3. 결과 화면 (이미지 최적화 적용됨)
  if (mode === 'result' && resultData) {
    const isWarm = resultData.moodImg === '/warm-mood.png';
    return (
      <main className={`flex min-h-screen flex-col items-center p-6 ${resultData.bgClass} text-[#1a1a1a]`}>
        <div className="max-w-md w-full mt-10">
          <div className="text-center mb-10 px-4 relative">
            <span className={`inline-block text-xs font-bold tracking-[0.2em] px-4 py-1.5 rounded-full bg-white shadow-sm ${resultData.textClass}`}>
              {isWarm ? 'Warm Base / イエベ' : 'Cool Base / ブルベ'}
            </span>
            <h1 className="text-2xl font-black mt-8 mb-6 leading-tight tracking-tight">{resultData.title}</h1>
            
            {/* --- 이미지 최적화 (next/image) 적용 부위 --- */}
            {/* 무드 이미지: 크기를 400x300으로 지정하고, priority를 줘서 가장 먼저 로딩하게 합니다. */}
            <div className="w-full h-auto aspect-[16/9] rounded-[2rem] shadow-2xl mb-8 border-[6px] border-white overflow-hidden relative bg-white">
              <Image 
                src={resultData.moodImg} 
                alt="Personal Color Mood" 
                fill 
                className="object-contain" // 'object-cover'에서 'object-contain'으로 변경!
                priority 
                sizes="(max-w-md) 100vw, 400px"
              />
            </div>
            {/* ------------------------------------------ */}

            <p className="text-sm font-light leading-relaxed text-left bg-white/40 p-6 rounded-3xl border border-white/50">
              {resultData.description}
            </p>
          </div>

          <h2 className="text-sm font-bold text-gray-400 tracking-widest mb-6 text-center uppercase relative">Recommended Item</h2>
          
          <div className="space-y-4 px-2 mb-12 relative">
            {resultData.products.map((product: Product, index: number) => (
              <div key={index} className="flex bg-white/80 backdrop-blur-sm p-5 rounded-[2rem] shadow-sm items-center gap-5 border border-white">
                <img src={rakutenImages[index] || product.img} alt={product.name} className="w-20 h-20 rounded-2xl object-contain bg-white" />
                <div className="flex-1 text-left">
                  <p className="text-[11px] font-bold text-gray-900 mb-3 leading-tight">{product.name}</p>
                  <a href={product.link} target="_blank" rel="noopener noreferrer" className={`inline-block text-white text-[10px] font-bold px-6 py-2 rounded-full shadow-lg ${resultData.btnClass} transition-all active:scale-95`}>
                    Amazon 詳細を見る
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <button onClick={() => setMode('menu')} className="w-full bg-white/50 text-gray-500 text-xs font-bold py-5 rounded-[2rem] border border-white mb-12 hover:bg-white transition-all">
            診断メニューに戻る
          </button>
        </div>
      </main>
    );
  }
  return null;
}