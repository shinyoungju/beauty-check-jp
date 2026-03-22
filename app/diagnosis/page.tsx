// app/diagnosis/page.tsx
'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { recommendations } from '../data';
import QuizEngine, { PersonalColorType } from '../quiz-engine';
import ShareButtons from '@/components/ShareButtons';
import BottomNav from '@/components/BottomNav';
import TopButton from '@/components/TopButton';

// 상품 이미지: 로딩 스켈레톤 → 라쿠텐 이미지 → 실패 시 💄 이모지
function ProductImage({ loading, url }: { loading: boolean; url: string | null }) {
  const [errored, setErrored] = useState(false);
  if (loading) return <div className="w-20 h-20 rounded-2xl bg-gray-200 animate-pulse shrink-0" />;
  if (!url || errored) return <div className="w-20 h-20 rounded-2xl bg-pink-50 flex items-center justify-center text-3xl shrink-0">💄</div>;
  return <img src={url} alt="" className="w-20 h-20 rounded-2xl object-contain bg-white shrink-0" onError={() => setErrored(true)} />;
}

// --- データ型定義 ---

interface Product {
  name: string;
  amazonLink: string;
  rakutenKeyword: string;
}

interface RecommendationData {
  typeKey: string;
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

// --- 진단 페이지 컴포넌트 ---

function DiagnosisContent() {
  const searchParams = useSearchParams();
  const [mode, setMode] = useState<'menu' | 'quiz' | 'result'>('menu');
  const [activeQuizType, setActiveQuizType] = useState<'lip' | 'shadow'>('lip');
  const [resultData, setResultData] = useState<RecommendationData | null>(null);
  const [resultType, setResultType] = useState<PersonalColorType | null>(null);
  const [rakutenImages, setRakutenImages] = useState<RakutenData[]>([]);
  const [imagesLoading, setImagesLoading] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ?type= パラメータから直接結果を表示
  useEffect(() => {
    const typeKey = searchParams.get('type');
    if (!typeKey) return;
    const lastUnderscore = typeKey.lastIndexOf('_');
    if (lastUnderscore === -1) return;
    const colorType = typeKey.slice(0, lastUnderscore) as PersonalColorType;
    const quizType = typeKey.slice(lastUnderscore + 1) as 'lip' | 'shadow';
    if (typedRecommendations[colorType] && (quizType === 'lip' || quizType === 'shadow')) {
      setActiveQuizType(quizType);
      setResultType(colorType);
      setResultData(typedRecommendations[colorType][quizType]);
      setMode('result');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!resultData) return;
    setImagesLoading(true);
    setRakutenImages([]);
    const fetchImages = async () => {
      const keywords = resultData.products.map(p => p.rakutenKeyword).join(',');
      try {
        const res = await fetch(`/api/rakuten/batch?keywords=${encodeURIComponent(keywords)}`);
        if (!res.ok) throw new Error(`batch error: ${res.status}`);
        const data = await res.json();
        setRakutenImages(
          (data.results as RakutenData[]).map(r => ({
            imageUrl: r.imageUrl ?? null,
            affiliateUrl: r.affiliateUrl ?? null,
          }))
        );
      } catch {
        setRakutenImages(resultData.products.map(() => ({ imageUrl: null, affiliateUrl: null })));
      }
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
    const quizData = fullData[activeQuizType];
    setResultType(type);
    setResultData(quizData);
    setMode('result');
    window.history.replaceState(null, '', `/diagnosis?type=${quizData.typeKey}`);
  };

  // 1. 선택 화면
  if (mode === 'menu') {
    return (
      <main className="min-h-screen font-sans text-[#1a1a1a]" style={{ background: '#fdf8f5' }}>
        <div className="max-w-md mx-auto px-5 pt-6 pb-6">

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
              Personal Color Diagnosis
            </p>
            <h1 className="text-[22px] font-bold text-[#1a1a1a] mb-2 tracking-tight">
              コスメ診断
            </h1>
            <p className="text-[12px] leading-[1.7]" style={{ color: '#9e9e9e' }}>
              10の質問に答えるだけで、あなたに似合う<br />パーソナルカラーを診断します
            </p>
            <div
              className="w-8 h-[1.5px] mx-auto mt-4"
              style={{ background: '#c4876a', opacity: 0.4 }}
            />
          </div>

          {/* 診断カード */}
          <div className="space-y-4">

            {/* リップ診断 */}
            <button
              onClick={() => startQuiz('lip')}
              className="card-hover w-full overflow-hidden text-left"
              style={{ borderRadius: '24px', border: '0.5px solid #e8ddd8' }}
            >
              <div
                className="relative flex items-end px-6 pb-5 pt-8 h-28"
                style={{ background: 'linear-gradient(135deg, #fde8e0 0%, #f5c9b8 100%)' }}
              >
                <img
                  src="/illust-lip.svg"
                  alt=""
                  className="absolute bottom-0 right-0 w-28 h-20 object-contain opacity-90"
                  aria-hidden="true"
                />
                <div>
                  <span
                    className="inline-block text-[9px] font-semibold tracking-[2.5px] uppercase px-2.5 py-1 rounded-full mb-2"
                    style={{ background: 'rgba(255,255,255,0.6)', color: '#7a5a42' }}
                  >
                    Popular Choice
                  </span>
                  <h2 className="text-[17px] font-bold leading-tight text-[#1a1a1a]">似合うリップ診断</h2>
                </div>
              </div>
              <div
                className="flex items-center justify-between px-5 py-3.5"
                style={{ background: '#fff' }}
              >
                <p className="text-[12px] text-[#9e9e9e] leading-[1.6] flex-1 pr-3">
                  あなたのパーソナルカラーに合ったリップを診断
                </p>
                <span className="text-[#c4876a] text-[18px] font-light shrink-0">→</span>
              </div>
            </button>

            {/* アイシャドウ診断 */}
            <button
              onClick={() => startQuiz('shadow')}
              className="card-hover w-full overflow-hidden text-left"
              style={{ borderRadius: '24px', border: '0.5px solid #e8ddd8' }}
            >
              <div
                className="relative flex items-end px-6 pb-5 pt-8 h-28"
                style={{ background: 'linear-gradient(135deg, #e8d5f0 0%, #d4b8e8 100%)' }}
              >
                <img
                  src="/illust-eyeshadow.svg"
                  alt=""
                  className="absolute bottom-0 right-0 w-28 h-20 object-contain opacity-90"
                  aria-hidden="true"
                />
                <div>
                  <span
                    className="inline-block text-[9px] font-semibold tracking-[2.5px] uppercase px-2.5 py-1 rounded-full mb-2"
                    style={{ background: 'rgba(255,255,255,0.6)', color: '#7a5a42' }}
                  >
                    New Release
                  </span>
                  <h2 className="text-[17px] font-bold leading-tight text-[#1a1a1a]">アイシャドウ診断</h2>
                </div>
              </div>
              <div
                className="flex items-center justify-between px-5 py-3.5"
                style={{ background: '#fff' }}
              >
                <p className="text-[12px] text-[#9e9e9e] leading-[1.6] flex-1 pr-3">
                  あなたに似合うアイシャドウカラーを診断
                </p>
                <span className="text-[#c4876a] text-[18px] font-light shrink-0">→</span>
              </div>
            </button>

            {/* パーソナルカラー診断 (準備中) */}
            <div
              className="w-full overflow-hidden"
              style={{ borderRadius: '24px', border: '0.5px solid #e8ddd8', opacity: 0.7 }}
            >
              <div
                className="relative flex items-end px-6 pb-5 pt-8 h-28"
                style={{ background: 'linear-gradient(135deg, #d4eaf0 0%, #b8d8e8 100%)' }}
              >
                <img
                  src="/illust-diagnosis.svg"
                  alt=""
                  className="absolute bottom-0 right-0 w-28 h-20 object-contain opacity-70"
                  aria-hidden="true"
                />
                <div>
                  <span
                    className="inline-block text-[9px] font-semibold tracking-[2.5px] uppercase px-2.5 py-1 rounded-full mb-2"
                    style={{ background: 'rgba(255,255,255,0.6)', color: '#7a5a42' }}
                  >
                    Coming Soon
                  </span>
                  <h2 className="text-[17px] font-bold leading-tight text-[#1a1a1a]">パーソナルカラー診断</h2>
                </div>
              </div>
              <div
                className="flex items-center justify-between px-5 py-3.5"
                style={{ background: '#fff' }}
              >
                <p className="text-[12px] text-[#9e9e9e] leading-[1.6] flex-1 pr-3">
                  肌・髪・瞳の色からベストカラーを分析
                </p>
                <span
                  className="text-[10px] px-2.5 py-1 rounded-full shrink-0"
                  style={{ background: '#f5e6dd', color: '#c4876a' }}
                >
                  準備中
                </span>
              </div>
            </div>

          </div>
        </div>

        <TopButton show={showTop} />
        <BottomNav />
      </main>
    );
  }

  // 2. 퀴즈 화면
  if (mode === 'quiz') {
    return (
      <main className="flex min-h-screen flex-col items-center p-6" style={{ background: '#fdf8f5' }}>
        <QuizEngine onFinish={handleFinish} onCancel={() => setMode('menu')} />
      </main>
    );
  }

  // 3. 결과 화면
  if (mode === 'result' && resultData && resultType) {
    const typeData = typedRecommendations[resultType];
    const typeLabel = typeData.type;
    return (
      <main className={`flex min-h-screen flex-col items-center px-5 pt-6 pb-10 ${resultData.bgClass} text-[#1a1a1a]`}>
        <div className="max-w-md w-full mt-10">
          <div className="text-center mb-8 px-4 relative">
            <span className={`inline-block text-[10px] font-medium tracking-[2px] px-4 py-1.5 rounded-full bg-white shadow-sm ${resultData.textClass}`}>
              {typeLabel}
            </span>
            <h1 className="text-[18px] font-bold mt-6 mb-5 leading-tight tracking-tight">{typeData.typeTitle}</h1>

            {/* ムード画像 */}
            <div className="w-full h-auto aspect-[16/9] rounded-[2rem] shadow-2xl mb-6 border-[6px] border-white overflow-hidden relative bg-white">
              <Image
                src={resultData.moodImg}
                alt="Personal Color Mood"
                fill
                className="object-contain"
                priority
                sizes="(max-w-md) 100vw, 400px"
              />
            </div>

            <p className="text-[13px] font-normal leading-[1.8] text-left bg-white/40 p-5 rounded-3xl border border-white/50">
              {typeData.typeDescription}
            </p>

            {/* カラーパレット */}
            <div className="mt-6">
              <p className="text-[10px] font-medium text-gray-400 tracking-[2px] mb-3 text-center uppercase">あなたに似合うカラーパレット</p>
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

          <h2 className="text-[10px] font-medium text-gray-400 tracking-[2px] mb-4 text-center uppercase relative">Recommended Item</h2>

          <div className="space-y-4 px-2 mb-6 relative">
            {resultData.products.map((product: Product, index: number) => (
              <div key={index} className="flex bg-white/80 backdrop-blur-sm p-4 rounded-[2rem] shadow-sm items-center gap-4 border border-white">
                <ProductImage loading={imagesLoading} url={rakutenImages[index]?.imageUrl ?? null} />
                <div className="flex-1 text-left">
                  <p className="text-[14px] font-semibold text-gray-900 mb-2 leading-tight">{product.name}</p>
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

          <div className="px-4 mb-6">
            <p className="text-xs text-gray-400 text-center mb-2">結果をシェアする</p>
            <ShareButtons
              title={`私のビューティータイプは「${typeLabel}」でした✨`}
              description={typeData.typeDescription}
              url={`https://www.lueur-beauty.com/diagnosis?type=${resultData.typeKey}`}
            />
          </div>

          <button onClick={() => setMode('menu')} className="w-full bg-white/50 text-gray-500 text-[12px] font-medium py-4 rounded-[2rem] border border-white mb-10 hover:bg-white transition-all">
            診断メニューに戻る
          </button>
        </div>

        <TopButton show={showTop} />
        <BottomNav />
      </main>
    );
  }
  return null;
}

export default function DiagnosisPage() {
  return (
    <Suspense>
      <DiagnosisContent />
    </Suspense>
  );
}
