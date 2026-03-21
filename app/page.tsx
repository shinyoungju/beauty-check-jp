// app/page.tsx
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image'; // Next.js 이미지 최적화 컴포넌트 불러오기
import { recommendations } from './data';
import QuizEngine, { PersonalColorType } from './quiz-engine';

// 상품 이미지: 로딩 스켈레톤 → 라쿠텐 이미지 → 실패 시 💄 이모지
function ProductImage({ loading, url }: { loading: boolean; url: string | null }) {
  const [errored, setErrored] = useState(false);
  if (loading) return <div className="w-20 h-20 rounded-2xl bg-gray-200 animate-pulse shrink-0" />;
  if (!url || errored) return <div className="w-20 h-20 rounded-2xl bg-pink-50 flex items-center justify-center text-3xl shrink-0">💄</div>;
  return <img src={url} alt="" className="w-20 h-20 rounded-2xl object-contain bg-white shrink-0" onError={() => setErrored(true)} />;
}

// --- 데이터 타입 정의 (빨간 줄 방지) ---

interface Product {
  name: string;
  amazonLink: string;
  rakutenKeyword: string;
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

const typedRecommendations = recommendations as Record<PersonalColorType, FullRecommendation>;

// --- 메인 컴포넌트 ---

export default function Home() {
  const [mode, setMode] = useState<'menu' | 'quiz' | 'result'>('menu');
  const [activeQuizType, setActiveQuizType] = useState<'lip' | 'shadow'>('lip');
  const [resultData, setResultData] = useState<RecommendationData | null>(null);
  const [resultType, setResultType] = useState<PersonalColorType | null>(null);
  const [rakutenImages, setRakutenImages] = useState<(string | null)[]>([]);
  const [imagesLoading, setImagesLoading] = useState(false);

  useEffect(() => {
    if (!resultData) return;
    setImagesLoading(true);
    setRakutenImages([]);
    const fetchImages = async () => {
      const APP_ID = process.env.NEXT_PUBLIC_RAKUTEN_APP_ID ?? '';
      const ACCESS_KEY = process.env.NEXT_PUBLIC_RAKUTEN_ACCESS_KEY ?? '';
      const AFFILIATE_ID = process.env.NEXT_PUBLIC_RAKUTEN_AFFILIATE_ID ?? '';

      const images: (string | null)[] = [];
      for (const product of resultData.products) {
        try {
          const params = new URLSearchParams({
            applicationId: APP_ID,
            accessKey: ACCESS_KEY,
            affiliateId: AFFILIATE_ID,
            keyword: product.rakutenKeyword,
            hits: '1',
            imageFlag: '1',
            format: 'json',
          });
          const res = await fetch(
            `https://openapi.rakuten.co.jp/ichibams/api/IchibaItem/Search/20220601?${params}`
          );
          if (!res.ok) { images.push(null); continue; }
          const data = await res.json();
          const item = data.Items?.[0]?.Item;
          const raw = item?.mediumImageUrls?.[0];
          images.push(typeof raw === 'string' ? raw : (raw?.imageUrl ?? null));
        } catch {
          images.push(null);
        }
        await new Promise(r => setTimeout(r, 1200));
      }
      setRakutenImages(images);
      setImagesLoading(false);
    };
    fetchImages();
  }, [resultData]);

  const startQuiz = (type: 'lip' | 'shadow') => {
    setActiveQuizType(type);
    setMode('quiz');
    setResultData(null);
    setRakutenImages([]);
  };

  const handleFinish = (type: PersonalColorType) => {
    const fullData = typedRecommendations[type];
    setResultType(type);
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
  if (mode === 'result' && resultData && resultType) {
    const typeLabel = typedRecommendations[resultType].type;
    return (
      <main className={`flex min-h-screen flex-col items-center p-6 ${resultData.bgClass} text-[#1a1a1a]`}>
        <div className="max-w-md w-full mt-10">
          <div className="text-center mb-10 px-4 relative">
            <span className={`inline-block text-xs font-bold tracking-[0.2em] px-4 py-1.5 rounded-full bg-white shadow-sm ${resultData.textClass}`}>
              {typeLabel}
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
                <ProductImage loading={imagesLoading} url={rakutenImages[index] ?? null} />
                <div className="flex-1 text-left">
                  <p className="text-[11px] font-bold text-gray-900 mb-3 leading-tight">{product.name}</p>
                  <a href={product.amazonLink} target="_blank" rel="noopener noreferrer" className={`inline-block text-white text-[10px] font-bold px-6 py-2 rounded-full shadow-lg ${resultData.btnClass} transition-all active:scale-95`}>
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