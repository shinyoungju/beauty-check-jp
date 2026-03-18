// app/page.tsx
'use client';
import { useState } from 'react';
import { recommendations } from './data';
import QuizEngine from './quiz-engine';

export default function Home() {
  const [mode, setMode] = useState<'menu' | 'quiz' | 'result'>('menu');
  const [resultData, setResultData] = useState<any>(null);

  const handleFinish = (type: 'warm' | 'cool') => {
    setResultData(recommendations[type]);
    setMode('result');
  };

  if (mode === 'menu') {
    return (
      <main className="flex min-h-screen flex-col items-center bg-[#fffafa] p-6">
        <header className="mt-10 mb-12 text-center">
          <h1 className="text-3xl font-black text-pink-600 mb-2">Beauty Check JP</h1>
          <p className="text-gray-500 text-sm italic">あなたの美しさを引き出す診断サイト</p>
        </header>
        <div className="max-w-md w-full space-y-4">
          <p className="font-bold text-gray-800 ml-2 mb-2">診断メニューを選ぶ</p>
          <button onClick={() => setMode('quiz')} className="w-full bg-white border-2 border-pink-100 p-6 rounded-2xl shadow-sm flex items-center justify-between hover:border-pink-300 transition">
            <div className="text-left">
              <span className="text-xs text-pink-500 font-bold uppercase tracking-widest text-[10px]">Popular</span>
              <h2 className="text-xl font-bold text-gray-900">パーソナルカラー別<br />似合うリップ診断</h2>
            </div>
            <span className="text-2xl">💄</span>
          </button>
          {['スキンケア診断', 'アイシャドウ診断'].map((title) => (
            <button key={title} className="w-full bg-gray-50 border-2 border-gray-100 p-6 rounded-2xl flex items-center justify-between cursor-not-allowed opacity-50">
              <div className="text-left text-gray-400">
                <span className="text-xs font-bold uppercase text-[10px]">Coming Soon</span>
                <h2 className="text-xl font-bold">{title}</h2>
              </div>
              <span className="text-2xl">✨</span>
            </button>
          ))}
        </div>
      </main>
    );
  }

  if (mode === 'quiz') {
    return (
      <main className="flex min-h-screen flex-col items-center bg-[#fffafa] p-6">
        <QuizEngine onFinish={handleFinish} onCancel={() => setMode('menu')} />
      </main>
    );
  }

  if (mode === 'result' && resultData) {
    return (
      <main className={`flex min-h-screen flex-col items-center p-6 ${resultData.bgClass}`}>
        <div className="max-w-md w-full">
          <div className="text-center my-10">
            <p className={`text-xl font-bold ${resultData.textClass}`}>{resultData.type}</p>
            <h1 className="text-2xl font-black text-gray-900 mt-2 mb-4 leading-tight">{resultData.title}</h1>
            
            {/* 보충 무드 이미지 추가됨 */}
            <img 
              src={resultData.moodImg} 
              alt={resultData.type} 
              className="w-full h-auto rounded-2xl shadow-lg mb-6 border-4 border-white" 
            />

            <p className="text-gray-700 text-sm bg-white/60 p-5 rounded-2xl leading-relaxed">{resultData.description}</p>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">おすすめの製品</h2>
          <div className="space-y-6 mb-10">
            {resultData.products.map((product: any, index: number) => (
              <div key={index} className="flex bg-white p-5 rounded-2xl shadow-md items-center gap-4 border border-white">
                <img src={product.img} alt={product.name} className="w-24 h-24 rounded-lg object-contain bg-gray-50" />
                <div className="flex-1 text-left">
                  <p className="text-xs font-bold text-gray-800 mb-2 leading-tight">{product.name}</p>
                  <a href={product.link} target="_blank" rel="noopener noreferrer" className={`inline-block text-white text-[10px] font-bold px-5 py-2 rounded-full shadow-lg ${resultData.btnClass}`}>
                    Amazonで詳しく見る
                  </a>
                </div>
              </div>
            ))}
          </div>
          <button onClick={() => setMode('menu')} className="w-full bg-white/50 text-gray-600 font-bold py-4 rounded-2xl border border-gray-200 mb-10">メニューに戻る</button>
        </div>
      </main>
    );
  }
  return null;
}