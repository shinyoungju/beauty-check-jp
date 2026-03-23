// app/youtuber/page.tsx
'use client';
import { useEffect, useRef, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { youtuberPicks } from '../data';
import ShareButtons from '@/components/ShareButtons';
import BottomNav from '@/components/BottomNav';
import TopButton from '@/components/TopButton';
import FlowerBg from '@/components/FlowerBg';

type RakutenMap = Record<string, { imageUrl: string | null; affiliateUrl: string | null }>;

// 상품 이미지 컴포넌트
function ProductThumb({ imageUrl, name }: { imageUrl?: string; name: string }) {
  const [errored, setErrored] = useState(false);
  if (!imageUrl || errored) {
    return (
      <div
        className="w-16 h-16 rounded-xl flex items-center justify-center text-2xl shrink-0"
        style={{ background: '#f5e6dd' }}
      >
        💄
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

// クリエイターカード — IntersectionObserver で遅延取得
function CreatorCard({
  creator,
  rakutenImages,
  setRakutenImages,
  fetchedIds,
}: {
  creator: (typeof youtuberPicks)[number];
  rakutenImages: RakutenMap;
  setRakutenImages: React.Dispatch<React.SetStateAction<RakutenMap>>;
  fetchedIds: { current: Set<string> };
}) {
  const ref = useRef<HTMLDivElement>(null);
  const initial = creator.youtuberName.charAt(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || fetchedIds.current.has(creator.videoId)) return;
        fetchedIds.current.add(creator.videoId);
        observer.disconnect();
        const keywords = creator.products
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
  }, [creator, fetchedIds, setRakutenImages]);

  return (
    <div
      ref={ref}
      key={creator.videoId}
      id={creator.id}
      className="bg-white overflow-hidden"
      style={{ border: '0.5px solid #e8ddd8', borderRadius: '24px' }}
    >
      {/* グラデーションバナー + ユーチューバーヘッダー */}
      <div
        className="px-5 pt-5 pb-4 flex items-center gap-3"
        style={{ background: 'linear-gradient(135deg, #fdf0ea 0%, #f5e6dd 100%)' }}
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center text-[18px] font-semibold shrink-0 shadow-sm"
          style={{ background: '#fff', color: '#c4876a', border: '2px solid #f0d9c8' }}
        >
          {initial}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[15px] font-bold leading-tight text-[#1a1a1a]">{creator.youtuberName}</p>
          <p className="text-[11px] mt-0.5" style={{ color: '#9e9e9e' }}>{creator.channel}</p>
        </div>
        <span
          className="inline-flex items-center gap-1 text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg shrink-0"
          style={{ background: '#ff0000' }}
        >
          <svg width="13" height="9" viewBox="0 0 14 10" fill="white">
            <path d="M13.7 1.6S13.5.6 13 .2C12.5-.3 11.8-.3 11.5-.3 9.6-.4 7-.4 7-.4S4.4-.4 2.5-.3C2.2-.3 1.5-.3 1 .2.5.6.3 1.6.3 1.6S.1 2.7.1 3.9v1.1c0 1.2.2 2.3.2 2.3s.2 1 .7 1.4c.5.4 1.2.4 1.5.5C3.5 9.4 7 9.4 7 9.4s2.6 0 4.5-.2c.3 0 1-.1 1.5-.5.5-.4.7-1.4.7-1.4s.2-1.1.2-2.3V3.9c0-1.2-.2-2.3-.2-2.3zM5.6 6.8V2.8l3.8 2-3.8 2z" />
          </svg>
          YouTube
        </span>
      </div>

      {/* YouTubeサムネイル */}
      <a
        href={`https://www.youtube.com/watch?v=${creator.videoId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative w-full bg-[#1a1a2e] group"
        style={{ aspectRatio: '16/9' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://img.youtube.com/vi/${creator.videoId}/maxresdefault.jpg`}
          alt={creator.videoTitle}
          className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
            style={{ background: 'rgba(255,255,255,0.9)' }}
          >
            <div
              className="ml-1"
              style={{
                width: 0,
                height: 0,
                borderTop: '10px solid transparent',
                borderBottom: '10px solid transparent',
                borderLeft: '16px solid #ee0000',
              }}
            />
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 px-3 pb-2.5 pt-5 text-white text-xs leading-snug"
          style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.7))' }}
        >
          {creator.videoTitle}
        </div>
      </a>

      {/* 商品リスト */}
      <div className="px-5 pt-4 pb-5">
        <p
          className="text-[9px] font-semibold tracking-[2.5px] uppercase mb-3"
          style={{ color: '#c4876a' }}
        >
          この動画で紹介されたアイテム
        </p>

        <div>
          {creator.products.map((product, idx) => (
            <div
              key={product.rank}
              className="flex gap-3 items-start py-3.5"
              style={{
                borderBottom:
                  idx < creator.products.length - 1
                    ? '0.5px solid #f0e8e3'
                    : 'none',
              }}
            >
              <ProductThumb
                imageUrl={rakutenImages[(product as { rakutenKeyword?: string }).rakutenKeyword ?? '']?.imageUrl ?? undefined}
                name={product.name}
              />

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="w-5 h-5 rounded-full text-[11px] font-bold flex items-center justify-center shrink-0"
                    style={{ background: '#f5e6dd', color: '#c4876a' }}
                  >
                    {product.rank}
                  </span>
                  <p className="text-[14px] font-semibold leading-snug text-[#1a1a1a]">
                    {product.name}
                  </p>
                </div>
                <p
                  className="text-[13px] font-semibold mb-1"
                  style={{ color: '#c4876a' }}
                >
                  {product.price}
                </p>
                <p className="text-[12px] leading-[1.7]" style={{ color: '#9e9e9e' }}>
                  「{product.comment}」
                </p>
                <div className="flex gap-2 mt-3 flex-wrap">
                  <a
                    href={product.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-[11px] font-semibold px-4 py-2 rounded-full hover:opacity-80 transition-opacity"
                    style={{ background: '#FF9900' }}
                  >
                    Amazon で見る
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
            この商品をシェアする
          </p>
          <ShareButtons
            title={`${creator.youtuberName}のおすすめアイテムをチェック✨`}
            description={creator.products.map((p) => p.name).join('、')}
            url={`https://www.lueur-beauty.com/youtuber?content=${creator.id}`}
            showImage={false}
          />
        </div>
      </div>
    </div>
  );
}

function YoutuberContent() {
  const searchParams = useSearchParams();
  const [showTop, setShowTop] = useState(false);
  const [rakutenImages, setRakutenImages] = useState<RakutenMap>({});
  const fetchedIds = useRef<Set<string>>(new Set());

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const contentId = searchParams.get('content');
    if (contentId) {
      document.getElementById(contentId)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [searchParams]);

  const sorted = [...youtuberPicks].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <main className="min-h-screen font-sans text-[#1a1a1a]" style={{ background: '#fdf8f5', position: 'relative' }}>
      <FlowerBg />
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
            Beauty Youtuber Picks
          </p>
          <h1 className="text-[22px] font-bold text-[#1a1a1a] mb-2 tracking-tight">
            人気YouTuberが絶賛したコスメ
          </h1>
          <p className="text-[12px] leading-[1.7]" style={{ color: '#9e9e9e' }}>
            話題のビューティー動画から厳選した本当に使えるアイテムをご紹介
          </p>
          <div
            className="w-8 h-[1.5px] mx-auto mt-4"
            style={{ background: '#c4876a', opacity: 0.4 }}
          />
        </div>

        {/* ユーチューバーカード */}
        <div className="space-y-5">
          {sorted.map((creator) => (
            <CreatorCard
              key={creator.videoId}
              creator={creator}
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

export default function YoutuberPage() {
  return (
    <Suspense>
      <YoutuberContent />
    </Suspense>
  );
}
