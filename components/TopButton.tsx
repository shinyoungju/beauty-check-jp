'use client';

// ページトップへ戻るボタン
export default function TopButton({ show }: { show: boolean }) {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="ページトップへ"
      className="fixed bottom-[76px] right-5 z-40 w-11 h-11 rounded-full shadow-lg flex items-center justify-center text-white text-[13px] font-bold transition-all duration-300"
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
