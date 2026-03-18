// app/quiz-engine.tsx
'use client';
import { useState } from 'react';
import { questions } from './data';

export default function QuizEngine({ onFinish, onCancel }: { onFinish: (type: 'warm' | 'cool') => void, onCancel: () => void }) {
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState({ warm: 0, cool: 0 });

  const handleAnswer = (type: string) => {
    const newScores = { ...scores, [type]: scores[type as keyof typeof scores] + 1 };
    setScores(newScores);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      const winner = newScores.warm >= newScores.cool ? 'warm' : 'cool';
      onFinish(winner);
    }
  };

  return (
    <div className="max-w-md w-full mt-10">
      <div className="w-full bg-pink-100 h-2 rounded-full mb-10">
        <div className="bg-pink-400 h-2 rounded-full transition-all" style={{ width: `${((step + 1) / questions.length) * 100}%` }} />
      </div>
      <p className="text-pink-500 font-bold mb-2 text-center text-sm">Question {questions[step].id}</p>
      <h1 className="text-2xl font-bold text-gray-900 mb-10 text-center leading-tight">{questions[step].text}</h1>
      <div className="space-y-4">
        {questions[step].answers.map((answer, index) => (
          <button key={index} onClick={() => handleAnswer(answer.type)} className="w-full bg-white text-left border-2 border-pink-100 p-5 rounded-2xl shadow-sm hover:bg-pink-50 active:scale-95 transition">
            <p className="text-gray-800 font-medium">{answer.text}</p>
          </button>
        ))}
      </div>
      <button onClick={onCancel} className="w-full mt-8 text-gray-400 text-sm text-center underline">診断を中止する</button>
    </div>
  );
}