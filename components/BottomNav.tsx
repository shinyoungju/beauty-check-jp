'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navTabs = [
  { href: '/', icon: '🏠', label: 'ホーム', activeFor: ['/'] },
  { href: '/diagnosis', icon: '💄', label: '診断', activeFor: ['/diagnosis'] },
  { href: '/tokushu', icon: '📋', label: '特集', activeFor: ['/tokushu', '/concerns', '/youtuber'] },
];

export default function BottomNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isMoreActive = menuOpen;

  return (
    <>
      {/* 딤 배경 */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40"
          style={{ background: 'rgba(0,0,0,0.4)' }}
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* もっと 슬라이드업 오버레이 */}
      <div
        className="fixed left-0 right-0 z-50"
        style={{
          bottom: 0,
          background: '#ffffff',
          borderRadius: '24px 24px 0 0',
          maxHeight: '80vh',
          overflowY: 'auto',
          transform: menuOpen ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          paddingBottom: 'env(safe-area-inset-bottom)',
        }}
      >
        {/* 드래그 핸들 */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full" style={{ background: '#e0d0c8' }} />
        </div>

        {/* 타이틀 */}
        <div className="px-6 pt-2 pb-3">
          <span className="text-base font-bold" style={{ color: '#1a1a1a' }}>もっと見る</span>
        </div>

        {/* メニューリスト */}
        <div className="px-6 pb-2 flex flex-col gap-2">
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-4 rounded-2xl px-5 py-4 hover:opacity-80 transition-opacity"
            style={{ background: '#fdf8f5', border: '0.5px solid #e8ddd8' }}
          >
            <span className="text-[24px] leading-none">✨</span>
            <span className="text-[14px] font-semibold text-[#1a1a1a]">Lueurについて</span>
          </Link>

          {/* 近日公開 */}
          <div
            className="flex flex-col items-center justify-center py-8 rounded-2xl"
            style={{ background: '#fdf8f5' }}
          >
            <span className="text-[28px] mb-3">🔜</span>
            <p className="text-[14px] font-semibold mb-1" style={{ color: '#1a1a1a' }}>近日公開</p>
            <p className="text-[12px]" style={{ color: '#b0a098' }}>設定・お問い合わせなどを準備中です</p>
          </div>
        </div>

        {/* 닫기 버튼 */}
        <div className="flex justify-center py-5">
          <button
            className="flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium"
            style={{ background: '#f5e6dd', color: '#c4876a' }}
            onClick={() => setMenuOpen(false)}
          >
            <span>✕</span>
            <span>閉じる</span>
          </button>
        </div>
      </div>

      {/* 하단 네비게이션 바 */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-50 flex justify-around items-center h-[64px]"
        style={{
          background: '#ffffff',
          borderTop: '0.5px solid #e8ddd8',
          paddingBottom: 'env(safe-area-inset-bottom)',
        }}
      >
        {navTabs.map((tab) => {
          const isActive = tab.activeFor.includes(pathname);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className="flex flex-col items-center gap-0.5 px-4 py-1 transition-opacity relative"
              style={{ opacity: isActive ? 1 : 0.45 }}
            >
              <span className="text-[20px] leading-none">{tab.icon}</span>
              <span
                className="text-[10px] font-medium tracking-wide"
                style={{ color: isActive ? '#c4876a' : '#9e9e9e' }}
              >
                {tab.label}
              </span>
              {isActive && (
                <span
                  className="absolute bottom-0 w-6 h-[2px] rounded-full"
                  style={{ background: '#c4876a' }}
                />
              )}
            </Link>
          );
        })}

        {/* もっと タブ */}
        <button
          className="flex flex-col items-center gap-0.5 px-4 py-1 transition-opacity relative"
          style={{ opacity: isMoreActive ? 1 : 0.45 }}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="text-[20px] leading-none">☰</span>
          <span
            className="text-[10px] font-medium tracking-wide"
            style={{ color: isMoreActive ? '#c4876a' : '#9e9e9e' }}
          >
            もっと
          </span>
          {isMoreActive && (
            <span
              className="absolute bottom-0 w-6 h-[2px] rounded-full"
              style={{ background: '#c4876a' }}
            />
          )}
        </button>
      </nav>
    </>
  );
}
