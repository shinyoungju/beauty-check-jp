// app/concerns/page.tsx
'use client';
import { useEffect, useLayoutEffect, useRef, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { skincareConcerns } from '../data';
import ShareButtons from '@/components/ShareButtons';
import BottomNav from '@/components/BottomNav';
import TopButton from '@/components/TopButton';

// 고민별 파스텔 그라데이션
const concernGradients: Record<string, string> = {
  dryness:     'linear-gradient(135deg, #e8f4ff 0%, #c8e6ff 100%)',
  pores:       'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)',
  sensitive:   'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
  brightening: 'linear-gradient(135deg, #fff9e6 0%, #fff0c0 100%)',
  acne:        'linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%)',
};

type RakutenMap = Record<string, { imageUrl: string | null; affiliateUrl: string | null }>;

// ランクバッジの色設定
function RankBadge({ rank }: { rank: number }) {
  const styles: Record<number, { bg: string; color: string; label: string }> = {
    1: { bg: '#FFD700', color: '#5a4200', label: '🥇' },
    2: { bg: '#C0C0C0', color: '#3a3a3a', label: '🥈' },
    3: { bg: '#CD7F32', color: '#fff', label: '🥉' },
  };
  const style = styles[rank] ?? { bg: '#f5e6dd', color: '#c4876a', label: String(rank) };
  return (
    <div
      className="w-7 h-7 rounded-full text-[13px] font-bold flex items-center justify-center shrink-0 mt-0.5"
      style={{ background: style.bg, color: style.color }}
    >
      {rank <= 3 ? style.label : rank}
    </div>
  );
}

// 상품 이미지 컴포넌트
function ProductThumb({ imageUrl, name }: { imageUrl?: string; name: string }) {
  const [errored, setErrored] = useState(false);
  if (!imageUrl || errored) {
    return (
      <div
        className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl shrink-0"
        style={{ background: '#f5e6dd' }}
      >
        ✨
      </div>
    );
  }
  return (
    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0" style={{ background: '#faf7f5' }}>
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-contain"
        onError={() => setErrored(true)}
      />
    </div>
  );
}

// お悩みセクション — IntersectionObserver で遅延取得
function ConcernSection({
  concern,
  scrollMargin,
  rakutenImages,
  setRakutenImages,
  fetchedIds,
}: {
  concern: (typeof skincareConcerns)[number];
  scrollMargin: number;
  rakutenImages: RakutenMap;
  setRakutenImages: React.Dispatch<React.SetStateAction<RakutenMap>>;
  fetchedIds: { current: Set<string> };
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || fetchedIds.current.has(concern.id)) return;
        fetchedIds.current.add(concern.id);
        observer.disconnect();
        const keywords = concern.products
          .map((p) => (p as { rakutenKeyword?: string }).rakutenKeyword ?? '')
          .filter(Boolean)
          .join(',');
        fetch(`/api/rakuten/batch?keywords=${encodeURIComponent(keywords)}`)
          .then((res) => res.json())
          .then((data) => {
            setRakutenImages((prev) => {
              const next = { ...prev };
              keywords.split(',').forEach((kw, i) => {
                next[kw.trim()] = data.results[i] ?? { imageUrl: null, affiliateUrl: null };
              });
              return next;
            });
          })
          .catch(() => {});
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [concern, fetchedIds, setRakutenImages]);

  return (
    <div
      ref={ref}
      id={concern.id}
      className="bg-white overflow-hidden"
      style={{
        border: '0.5px solid #e8ddd8',
        borderRadius: '24px',
        scrollMarginTop: `${scrollMargin}px`,
      }}
    >
      {/* セクションヘッダー (グラデーション) */}
      <div
        className="px-5 pt-5 pb-4"
        style={{
          background: concernGradients[concern.id] ?? '#f5e6dd',
          borderBottom: '0.5px solid #e8ddd8',
        }}
      >
        <div className="flex items-center gap-3 mb-1.5">
          <span className="text-[28px]">{concern.icon}</span>
          <h2 className="text-[18px] font-bold leading-tight text-[#1a1a1a]">{concern.title}</h2>
        </div>
        <p className="text-[12px] leading-[1.7]" style={{ color: '#7a6a5a' }}>{concern.description}</p>
      </div>

      {/* 商品リスト */}
      <div className="px-5 pt-4 pb-5">
        <p
          className="text-[9px] font-semibold tracking-[2.5px] uppercase mb-3"
          style={{ color: '#c4876a' }}
        >
          おすすめアイテム RANKING
        </p>

        <div>
          {concern.products.map((product, idx) => (
            <div
              key={product.rank}
              className="flex gap-3 items-start py-3.5"
              style={{
                borderBottom:
                  idx < concern.products.length - 1
                    ? '0.5px solid #f0e8e3'
                    : 'none',
              }}
            >
              <ProductThumb
                imageUrl={rakutenImages[(product as { rakutenKeyword?: string }).rakutenKeyword ?? '']?.imageUrl ?? undefined}
                name={product.name}
              />

              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-2 mb-1">
                  <RankBadge rank={product.rank} />
                  <p className="text-[14px] font-semibold leading-snug text-[#1a1a1a]">
                    {product.name}
                  </p>
                </div>
                <p
                  className="text-[13px] font-semibold mb-2"
                  style={{ color: '#c4876a' }}
                >
                  {product.price}
                </p>
                <div
                  className="relative px-4 py-2.5 rounded-2xl rounded-tl-sm text-[12px] leading-[1.7]"
                  style={{ background: '#fdf0ea', color: '#7a6a5a' }}
                >
                  {product.reason}
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  <a
                    href={product.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-[11px] font-semibold px-4 py-2 rounded-full hover:opacity-80 transition-opacity"
                    style={{ background: '#FF9900' }}
                  >
                    Amazonで見る
                  </a>
                  <a
                    href={product.rakutenLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-[11px] font-semibold px-4 py-2 rounded-full hover:opacity-80 transition-opacity"
                    style={{ background: '#BF0000' }}
                  >
                    楽天で見る
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* シェアボタン */}
        <div
          className="mt-4 pt-4"
          style={{ borderTop: '0.5px solid #f0e8e3' }}
        >
          <p className="text-[11px] text-center mb-3" style={{ color: '#9e9e9e' }}>
            この特集をシェアする
          </p>
          <ShareButtons
            title={`${concern.title}のお悩みにおすすめのスキンケアをチェック✨`}
            description={concern.description}
            url={`https://www.lueur-beauty.com/concerns#${concern.id}`}
            showImage={false}
          />
        </div>
      </div>
    </div>
  );
}

function ConcernsContent() {
  const searchParams = useSearchParams();
  const navRef = useRef<HTMLDivElement>(null);
  const [showTop, setShowTop] = useState(false);
  const [activeConcern, setActiveConcern] = useState<string | null>(null);
  const [scrollMargin, setScrollMargin] = useState(160);
  const [rakutenImages, setRakutenImages] = useState<RakutenMap>({});
  const fetchedIds = useRef<Set<string>>(new Set());

  useLayoutEffect(() => {
    if (navRef.current) {
      setScrollMargin(navRef.current.offsetHeight + 16);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    const concernId = hash || searchParams.get('concern');
    if (!concernId) return;
    setTimeout(() => {
      document.getElementById(concernId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveConcern(concernId);
    }, 300);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const scrollToConcern = (id: string) => {
    setActiveConcern(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
        <div className="text-center mb-6">
          <p
            className="text-[9px] font-semibold tracking-[3px] uppercase mb-2"
            style={{ color: '#c4876a' }}
          >
            Skincare by Concern
          </p>
          <h1 className="text-[22px] font-bold text-[#1a1a1a] mb-2 tracking-tight">
            お悩み別スキンケア特集
          </h1>
          <p className="text-[12px] leading-[1.7]" style={{ color: '#9e9e9e' }}>
            あなたの肌のお悩みに合わせた、本当に効果的なアイテムをご紹介
          </p>
          <div
            className="w-8 h-[1.5px] mx-auto mt-4"
            style={{ background: '#c4876a', opacity: 0.4 }}
          />
        </div>

        {/* 고민 선택 — 3열 그리드 카드 */}
        <div
          ref={navRef}
          className="sticky top-0 z-10 py-4 mb-6 -mx-5 px-5"
          style={{ background: '#fdf8f5', borderBottom: '0.5px solid #e8ddd8' }}
        >
          <div className="grid grid-cols-3 gap-2">
            {skincareConcerns.map((concern) => {
              const isActive = activeConcern === concern.id;
              return (
                <button
                  key={concern.id}
                  onClick={() => scrollToConcern(concern.id)}
                  className="card-hover flex flex-col items-center gap-1 py-3 px-2 rounded-2xl transition-all"
                  style={{
                    background: isActive
                      ? (concernGradients[concern.id] ?? '#f5e6dd')
                      : '#fff',
                    border: isActive ? '1.5px solid #c4876a' : '0.5px solid #e8ddd8',
                    boxShadow: isActive ? '0 2px 8px rgba(196,135,106,0.15)' : 'none',
                  }}
                >
                  <span className="text-[22px] leading-none">{concern.icon}</span>
                  <span
                    className="text-[11px] font-semibold leading-tight text-center"
                    style={{ color: isActive ? '#7a5a42' : '#1a1a1a' }}
                  >
                    {concern.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* お悩みセクション一覧 */}
        <div className="space-y-6">
          {skincareConcerns.map((concern) => (
            <ConcernSection
              key={concern.id}
              concern={concern}
              scrollMargin={scrollMargin}
              rakutenImages={rakutenImages}
              setRakutenImages={setRakutenImages}
              fetchedIds={fetchedIds}
            />
          ))}
        </div>
      </div>

      <TopButton show={showTop} />
      <BottomNav />
    </main>
  );
}

export default function ConcernsPage() {
  return (
    <Suspense>
      <ConcernsContent />
    </Suspense>
  );
}
