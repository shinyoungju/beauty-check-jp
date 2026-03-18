// app/quiz-engine.tsx
'use client';
import { useState } from 'react';
// 여기서 이름을 questionsPersonalColor로 정확히 맞춰서 불러옵니다.
import { questionsPersonalColor } from './data';

interface Answer {
  text: string;
  type: string;
}

interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export default function QuizEngine({ onFinish, onCancel }: { onFinish: (type: 'warm' | 'cool') => void, onCancel: () => void }) {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState({ warm: 0, cool: 0 });

  // 데이터가 없을 경우를 대비한 안전 장치
  if (!questionsPersonalColor || questionsPersonalColor.length === 0) {
    return <div>데이터를 불러오는 중입니다...</div>;
  }

  const currentQuestion = (questionsPersonalColor as Question[])[step];

  const handleAnswer = (type: string) => {
    const newScores = { ...scores, [type]: (scores[type as keyof typeof scores] || 0) + 1 };
    setScores(newScores);

    if (step < questionsPersonalColor.length - 1) {
      setStep(step + 1);
    } else {
      const winner = newScores.warm >= newScores.cool ? 'warm' : 'cool';
      onFinish(winner as 'warm' | 'cool');
    }
  };

  return (
    <div className="max-w-md w-full mt-10">
      <div className="w-full bg-pink-50 h-2 rounded-full mb-12 text-center relative overflow-hidden">
        <div 
          className="bg-pink-300 h-2 rounded-full transition-all duration-300" 
          style={{ width: `${((step + 1) / questionsPersonalColor.length) * 100}%` }} 
        />
      </div>
      
      <p className="text-pink-400 font-bold mb-2 text-center text-xs tracking-widest uppercase">
        Question {currentQuestion.id}
      </p>
      
      <h1 className="text-2xl font-bold text-gray-950 mb-12 text-center leading-tight">
        {currentQuestion.text}
      </h1>
      
      <div className="space-y-4">
        {currentQuestion.answers.map((answer: Answer, index: number) => (
          <button 
            key={index} 
            onClick={() => handleAnswer(answer.type)} 
            className="w-full bg-white text-left border-2 border-pink-50 p-6 rounded-3xl shadow-sm hover:border-pink-200 active:scale-95 transition duration-300"
          >
            <p className="text-gray-800 font-medium">{answer.text}</p>
          </button>
        ))}
      </div>
      
      <button 
        onClick={onCancel} 
        className="w-full mt-12 text-gray-400 text-sm text-center underline font-light hover:text-gray-600 transition"
      >
        診断を中止する
      </button>
    </div>
  );
}