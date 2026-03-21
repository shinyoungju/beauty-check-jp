// app/youtuber/page.tsx
'use client';
import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { youtuberPicks } from '../data';
import ShareButtons from '@/components/ShareButtons';

function YoutuberContent() {
  const searchParams = useSearchParams();

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
    <main className="min-h-screen font-sans text-[#1a1a1a]" style={{ background: '#fdf8f5' }}>
      <div className="max-w-md mx-auto px-5 pt-6 pb-8">

        {/* 戻るリンク */}
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-[13px] font-bold tracking-widest uppercase mb-5 hover:opacity-70 transition-opacity"
          style={{ color: '#c4876a' }}
        >
          ← 戻る
        </Link>

        {/* セクションヘッダー */}
        <div className="text-center mb-8">
          <p
            className="text-[10px] font-medium tracking-[2px] uppercase mb-1.5"
            style={{ color: '#c4876a' }}
          >
            Beauty Youtuber Picks
          </p>
          <h1 className="text-[20px] font-bold text-[#1a1a1a] mb-1">
            人気YouTuberが絶賛したコスメ
          </h1>
          <p className="text-[13px] text-gray-400 font-normal leading-[1.7]">
            話題のビューティー動画から厳選した本当に使えるアイテムをご紹介
          </p>
        </div>

        {/* ユーチューバーカード */}
        <div className="space-y-5">
          {sorted.map((creator) => {
            const initial = creator.youtuberName.charAt(0);
            return (
              <div
                key={creator.videoId}
                id={creator.id}
                className="bg-white overflow-hidden"
                style={{ border: '0.5px solid #e8ddd8', borderRadius: '16px' }}
              >
                {/* ユーチューバーヘッダー */}
                <div className="flex items-center gap-3 px-4 pt-4 pb-3">
                  {/* アバター */}
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-[15px] font-medium shrink-0"
                    style={{ background: '#f0e6e0', color: '#c4876a' }}
                  >
                    {initial}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[15px] font-semibold leading-tight">{creator.youtuberName}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{creator.channel}</p>
                  </div>
                  {/* YouTubeバッジ */}
                  <span
                    className="inline-flex items-center gap-1 text-white text-[11px] font-medium px-2 py-1 rounded shrink-0"
                    style={{ background: '#ff0000' }}
                  >
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="white">
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
                  {/* 再生ボタン */}
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
                  {/* 動画タイトルオーバーレイ */}
                  <div
                    className="absolute bottom-0 left-0 right-0 px-3 pb-2.5 pt-5 text-white text-xs leading-snug"
                    style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.7))' }}
                  >
                    {creator.videoTitle}
                  </div>
                </a>

                {/* 商品リスト */}
                <div className="px-4 pt-3.5 pb-4">
                  <p
                    className="text-[10px] font-medium tracking-[2px] uppercase mb-2.5"
                    style={{ color: '#9e9e9e' }}
                  >
                    この動画で紹介されたアイテム
                  </p>

                  <div>
                    {creator.products.map((product, idx) => (
                      <div
                        key={product.rank}
                        className="flex gap-3 items-start py-2.5"
                        style={{
                          borderBottom:
                            idx < creator.products.length - 1
                              ? '0.5px solid #e8ddd8'
                              : 'none',
                        }}
                      >
                        {/* 順位バッジ */}
                        <div
                          className="w-[22px] h-[22px] rounded-full text-xs font-medium flex items-center justify-center shrink-0 mt-0.5"
                          style={{ background: '#fdf0ea', color: '#c4876a' }}
                        >
                          {product.rank}
                        </div>

                        <div className="flex-1 min-w-0">
                          {/* 商品名・価格 */}
                          <p className="text-[14px] font-semibold leading-snug">
                            {product.name}
                          </p>
                          <p
                            className="text-[13px] font-medium mt-0.5"
                            style={{ color: '#333' }}
                          >
                            {product.price}
                          </p>
                          {/* コメント */}
                          <p className="text-[13px] text-gray-400 font-normal mt-1.5 leading-[1.7]">
                            「{product.comment}」
                          </p>
                          {/* 購入ボタン */}
                          <div className="flex gap-2 mt-2">
                            <a
                              href={product.amazonLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white text-[12px] font-medium px-4 py-2 rounded-[20px] hover:opacity-80 transition-opacity"
                              style={{ background: '#FF9900' }}
                            >
                              Amazon で見る
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

                  {/* ユーチューバーカードごとのシェアボタン */}
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-400 text-center mb-2">
                      この商品をシェアする
                    </p>
                    <ShareButtons
                      title={`${creator.youtuberName}のおすすめアイテムをチェック✨`}
                      description={creator.products.map((p) => p.name).join('、')}
                      url={`https://beauty-check-jp.vercel.app/youtuber?content=${creator.id}`}
                      showImage={false}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
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
