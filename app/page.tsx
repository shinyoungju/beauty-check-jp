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
  typeTitle: string;
  typeDescription: string;
  colorPalette: string[];
  lip: RecommendationData;
  shadow: RecommendationData;
}

const typedRecommendations = recommendations as Record<PersonalColorType, FullRecommendation>;

interface RakutenData { imageUrl: string | null; affiliateUrl: string | null; }

// --- 메인 컴포넌트 ---

export default function Home() {
  const [mode, setMode] = useState<'menu' | 'quiz' | 'result'>('menu');
  const [activeQuizType, setActiveQuizType] = useState<'lip' | 'shadow'>('lip');
  const [diagnosisOpen, setDiagnosisOpen] = useState(false);
  const [resultData, setResultData] = useState<RecommendationData | null>(null);
  const [resultType, setResultType] = useState<PersonalColorType | null>(null);
  const [rakutenImages, setRakutenImages] = useState<RakutenData[]>([]);
  const [imagesLoading, setImagesLoading] = useState(false);

  useEffect(() => {
    if (!resultData) return;
    setImagesLoading(true);
    setRakutenImages([]);
    const fetchImages = async () => {
      const APP_ID = process.env.NEXT_PUBLIC_RAKUTEN_APP_ID ?? '';
      const ACCESS_KEY = process.env.NEXT_PUBLIC_RAKUTEN_ACCESS_KEY ?? '';
      const AFFILIATE_ID = process.env.NEXT_PUBLIC_RAKUTEN_AFFILIATE_ID ?? '';

      const images: RakutenData[] = [];
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
          if (!res.ok) { images.push({ imageUrl: null, affiliateUrl: null }); continue; }
          const data = await res.json();
          const item = data.Items?.[0]?.Item;
          const raw = item?.mediumImageUrls?.[0];
          const imageUrl = typeof raw === 'string' ? raw : (raw?.imageUrl ?? null);
          const affiliateUrl = item?.affiliateUrl ?? null;
          images.push({ imageUrl, affiliateUrl });
        } catch {
          images.push({ imageUrl: null, affiliateUrl: null });
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
        <header className="mt-10 mb-5 text-center px-5 relative">
          <p className="text-pink-400 text-[10px] font-medium tracking-[3px] mb-2 uppercase">Find Your Inner Light</p>
          <h1 className="text-[28px] font-bold tracking-tight mb-3">Lueur (リュール)</h1>
          <p className="text-gray-500 text-[13px] font-normal leading-[1.7] max-w-xs mx-auto">
            あなただけに似合う、最高の輝きを。<br />
            美しさの鍵を見つける診断へようこそ。
          </p>
          <div className="mt-5 w-12 h-[1px] bg-pink-200 mx-auto" />
        </header>

        <div className="max-w-md w-full px-5 space-y-3">

          {/* カード1: YouTuberおすすめ */}
          <a href="/youtuber" className="group w-full bg-white border border-pink-50 py-4 px-5 rounded-[2rem] shadow-sm flex items-center gap-4 hover:shadow-md hover:border-pink-100 transition-all duration-500 block">
            <div className="w-10 h-10 bg-pink-50 rounded-2xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform shrink-0">🎬</div>
            <div className="text-left flex-1">
              <span className="text-[10px] text-pink-400 font-medium tracking-[2px] uppercase mb-1 block">Youtuber Picks</span>
              <h2 className="text-[16px] font-semibold leading-[1.4]">人気YouTuberが絶賛したコスメ</h2>
              <p className="text-[12px] text-gray-400 font-normal mt-1 leading-[1.6]">日本の人気ビューティーYouTuberが絶賛したアイテムを厳選してご紹介。</p>
            </div>
          </a>

          {/* カード2: パーソナルカラー診断（展開式） */}
          <div>
            <button
              onClick={() => setDiagnosisOpen(v => !v)}
              className="group w-full bg-white border border-pink-50 py-4 px-5 rounded-[2rem] shadow-sm flex items-center gap-4 hover:shadow-md hover:border-pink-100 transition-all duration-500"
            >
              <div className="w-10 h-10 bg-pink-50 rounded-2xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform shrink-0">💄</div>
              <div className="text-left flex-1">
                <span className="text-[10px] text-pink-400 font-medium tracking-[2px] uppercase mb-1 block">Diagnosis</span>
                <h2 className="text-[16px] font-semibold leading-[1.4]">あなたに似合うコスメを診断</h2>
                <p className="text-[12px] text-gray-400 font-normal mt-1 leading-[1.6]">10の質問に答えるだけで、パーソナルカラーを診断。ぴったりのコスメをご提案します。</p>
              </div>
              <span className={`text-gray-300 text-lg transition-transform duration-300 shrink-0 ${diagnosisOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>

            {/* 展開: リップ・アイシャドウ診断 */}
            {diagnosisOpen && (
              <div className="mt-3 ml-4 space-y-3">
                <button onClick={() => startQuiz('lip')} className="group w-full bg-white border border-pink-50 py-4 px-5 rounded-[1.5rem] shadow-sm flex items-center gap-4 hover:shadow-md hover:border-pink-100 transition-all duration-500">
                  <div className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform shrink-0">💄</div>
                  <div className="text-left flex-1">
                    <span className="text-[10px] text-pink-400 font-medium tracking-[2px] uppercase mb-1 block">Popular Choice</span>
                    <h3 className="text-[16px] font-semibold leading-[1.4]">パーソナルカラー別<br />似合うリップ診断</h3>
                  </div>
                </button>
                <button onClick={() => startQuiz('shadow')} className="group w-full bg-white border border-pink-50 py-4 px-5 rounded-[1.5rem] shadow-sm flex items-center gap-4 hover:shadow-md hover:border-pink-100 transition-all duration-500">
                  <div className="w-10 h-10 bg-pink-50 rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform shrink-0">👁️</div>
                  <div className="text-left flex-1">
                    <span className="text-[10px] text-pink-400 font-medium tracking-[2px] uppercase mb-1 block">New Release</span>
                    <h3 className="text-[16px] font-semibold leading-[1.4]">瞳の色を際立たせる<br />アイシャドウ診断</h3>
                  </div>
                </button>
              </div>
            )}
          </div>

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
    const typeData = typedRecommendations[resultType];
    const typeLabel = typeData.type;
    return (
      <main className={`flex min-h-screen flex-col items-center p-6 ${resultData.bgClass} text-[#1a1a1a]`}>
        <div className="max-w-md w-full mt-10">
          <div className="text-center mb-10 px-4 relative">
            <span className={`inline-block text-[10px] font-medium tracking-[2px] px-4 py-1.5 rounded-full bg-white shadow-sm ${resultData.textClass}`}>
              {typeLabel}
            </span>
            <h1 className="text-[18px] font-bold mt-8 mb-6 leading-tight tracking-tight">{typeData.typeTitle}</h1>

            {/* ムード画像 */}
            <div className="w-full h-auto aspect-[16/9] rounded-[2rem] shadow-2xl mb-8 border-[6px] border-white overflow-hidden relative bg-white">
              <Image
                src={resultData.moodImg}
                alt="Personal Color Mood"
                fill
                className="object-contain"
                priority
                sizes="(max-w-md) 100vw, 400px"
              />
            </div>

            <p className="text-[13px] font-normal leading-[1.8] text-left bg-white/40 p-6 rounded-3xl border border-white/50">
              {typeData.typeDescription}
            </p>

            {/* カラーパレット */}
            <div className="mt-8">
              <p className="text-[10px] font-medium text-gray-400 tracking-[2px] mb-4 text-center uppercase">あなたに似合うカラーパレット</p>
              <div className="flex gap-3 justify-center flex-wrap">
                {typeData.colorPalette.map((color: string, i: number) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full shadow-md border-2 border-white"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>

          <h2 className="text-[10px] font-medium text-gray-400 tracking-[2px] mb-6 text-center uppercase relative">Recommended Item</h2>
          
          <div className="space-y-4 px-2 mb-12 relative">
            {resultData.products.map((product: Product, index: number) => (
              <div key={index} className="flex bg-white/80 backdrop-blur-sm p-5 rounded-[2rem] shadow-sm items-center gap-5 border border-white">
                <ProductImage loading={imagesLoading} url={rakutenImages[index]?.imageUrl ?? null} />
                <div className="flex-1 text-left">
                  <p className="text-[14px] font-semibold text-gray-900 mb-3 leading-tight">{product.name}</p>
                  <div className="flex gap-2 flex-wrap">
                    <a href={product.amazonLink} target="_blank" rel="noopener noreferrer" className={`inline-block text-white text-[12px] font-medium px-4 py-2 rounded-full shadow-lg ${resultData.btnClass} transition-all active:scale-95`}>
                      Amazonで見る
                    </a>
                    <a href={rakutenImages[index]?.affiliateUrl ?? `https://hb.afl.rakuten.co.jp/ichiba/521658b7.a1689a38.521658b7.fbb4952/?pc=${encodeURIComponent('https://search.rakuten.co.jp/search/mall/' + encodeURIComponent(product.rakutenKeyword) + '/')}&link_type=hybrid_url`} target="_blank" rel="noopener noreferrer" className="inline-block text-white text-[12px] font-medium px-4 py-2 rounded-full shadow-lg bg-[#BF0000] hover:bg-[#990000] transition-all active:scale-95">
                      楽天で見る
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button onClick={() => setMode('menu')} className="w-full bg-white/50 text-gray-500 text-[12px] font-medium py-5 rounded-[2rem] border border-white mb-12 hover:bg-white transition-all">
            診断メニューに戻る
          </button>
        </div>
      </main>
    );
  }
  return null;
}