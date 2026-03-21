// app/concerns/page.tsx
'use client';
import { useEffect, useLayoutEffect, useRef, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { skincareConcerns } from '../data';
import ShareButtons from '@/components/ShareButtons';

// ランクバッジの色設定
function RankBadge({ rank }: { rank: number }) {
  const styles: Record<number, { bg: string; color: string; label: string }> = {
    1: { bg: '#FFD700', color: '#5a4200', label: '🥇' },
    2: { bg: '#C0C0C0', color: '#3a3a3a', label: '🥈' },
    3: { bg: '#CD7F32', color: '#fff', label: '🥉' },
  };
  const style = styles[rank] ?? { bg: '#fdf0ea', color: '#c4876a', label: String(rank) };
  return (
    <div
      className="w-[28px] h-[28px] rounded-full text-[13px] font-bold flex items-center justify-center shrink-0 mt-0.5"
      style={{ background: style.bg, color: style.color }}
    >
      {rank <= 3 ? style.label : rank}
    </div>
  );
}

// TOPボタン
function TopButton({ show }: { show: boolean }) {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="ページトップへ"
      className="fixed bottom-6 right-5 z-50 w-11 h-11 rounded-full shadow-lg flex items-center justify-center text-white text-[13px] font-bold transition-all duration-300"
      style={{
        background: '#c4876a',
        opacity: show ? 1 : 0,
        pointerEvents: show ? 'auto' : 'none',
        transform: show ? 'translateY(0)' : 'translateY(12px)',
      }}
    >
      ↑
    </button>
  );
}

function ConcernsContent() {
  const searchParams = useSearchParams();
  const navRef = useRef<HTMLDivElement>(null);
  const [showTop, setShowTop] = useState(false);
  // ナビ高さ＋余白をスクロールマージンとして適用
  const [scrollMargin, setScrollMargin] = useState(80);

  // DOM描画後にナビの実際の高さを計測
  useLayoutEffect(() => {
    if (navRef.current) {
      setScrollMargin(navRef.current.offsetHeight + 16);
    }
  }, []);

  // TOPボタン：200px以上スクロールで表示
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // シェアリンクのハッシュ／クエリでセクションへスクロール
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    const concernId = hash || searchParams.get('concern');
    if (!concernId) return;
    // ブラウザのネイティブハッシュスクロールより後に実行
    setTimeout(() => {
      document.getElementById(concernId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const scrollToConcern = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="min-h-screen font-sans text-[#1a1a1a]" style={{ background: '#fdf8f5' }}>
      <div className="max-w-md mx-auto px-5 pt-6 pb-10">

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
            className="text-[10px] font-medium tracking-[2px] uppercase mb-2"
            style={{ color: '#c4876a' }}
          >
            Skincare by Concern
          </p>
          <h1 className="text-[20px] font-bold text-[#1a1a1a] mb-2">
            お悩み別スキンケア特集
          </h1>
          <p className="text-[13px] text-gray-400 font-normal leading-[1.7]">
            あなたの肌のお悩みに合わせた、本当に効果的なアイテムをご紹介
          </p>
        </div>

        {/* 悩み選択ナビ（スティッキー） */}
        <div
          ref={navRef}
          className="sticky top-0 z-10 py-3 mb-6 -mx-5 px-5 overflow-x-auto"
          style={{ background: '#fdf8f5', borderBottom: '0.5px solid #e8ddd8' }}
        >
          <div className="flex gap-2 w-max">
            {skincareConcerns.map((concern) => (
              <button
                key={concern.id}
                onClick={() => scrollToConcern(concern.id)}
                className="flex items-center gap-1.5 text-[12px] font-medium px-3 py-1.5 rounded-full whitespace-nowrap transition-all hover:opacity-80 active:scale-95"
                style={{
                  background: '#fff',
                  border: '0.5px solid #e8ddd8',
                  color: '#5a4200',
                }}
              >
                <span>{concern.icon}</span>
                <span>{concern.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* お悩みセクション一覧 */}
        <div className="space-y-6">
          {skincareConcerns.map((concern) => (
            <div
              key={concern.id}
              id={concern.id}
              className="bg-white overflow-hidden"
              style={{
                border: '0.5px solid #e8ddd8',
                borderRadius: '16px',
                // スティッキーナビの高さ分だけスクロール位置をオフセット
                scrollMarginTop: `${scrollMargin}px`,
              }}
            >
              {/* セクションヘッダー */}
              <div className="px-5 pt-5 pb-4" style={{ borderBottom: '0.5px solid #e8ddd8' }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{concern.icon}</span>
                  <h2 className="text-[17px] font-bold leading-tight">{concern.title}</h2>
                </div>
                <p className="text-[13px] text-gray-400 leading-[1.7]">{concern.description}</p>
              </div>

              {/* 商品リスト */}
              <div className="px-5 pt-4 pb-5">
                <p
                  className="text-[10px] font-medium tracking-[2px] uppercase mb-3"
                  style={{ color: '#9e9e9e' }}
                >
                  おすすめアイテム RANKING
                </p>

                <div>
                  {concern.products.map((product, idx) => (
                    <div
                      key={product.rank}
                      className="flex gap-3 items-start py-3"
                      style={{
                        borderBottom:
                          idx < concern.products.length - 1
                            ? '0.5px solid #e8ddd8'
                            : 'none',
                      }}
                    >
                      <RankBadge rank={product.rank} />

                      <div className="flex-1 min-w-0">
                        <p className="text-[14px] font-semibold leading-snug">
                          {product.name}
                        </p>
                        <p
                          className="text-[13px] font-medium mt-0.5"
                          style={{ color: '#333' }}
                        >
                          {product.price}
                        </p>
                        <blockquote
                          className="mt-2 pl-3 text-[13px] leading-[1.7] italic"
                          style={{
                            color: '#7a6a5a',
                            borderLeft: '3px solid #f0d9c8',
                          }}
                        >
                          {product.reason}
                        </blockquote>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <a
                            href={product.amazonLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-[12px] font-medium px-4 py-2 rounded-[20px] hover:opacity-80 transition-opacity"
                            style={{ background: '#FF9900' }}
                          >
                            Amazonで見る
                          </a>
                          <a
                            href={product.rakutenLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-[12px] font-medium px-4 py-2 rounded-[20px] hover:opacity-80 transition-opacity"
                            style={{ background: '#BF0000' }}
                          >
                            楽天で見る
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* セクションごとのシェアボタン */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-400 text-center mb-3">
                    この特集をシェアする
                  </p>
                  <ShareButtons
                    title={`${concern.title}のお悩みにおすすめのスキンケアをチェック✨`}
                    description={concern.description}
                    url={`https://beauty-check-jp.vercel.app/concerns#${concern.id}`}
                    showImage={false}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <TopButton show={showTop} />
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
