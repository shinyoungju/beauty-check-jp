// app/quiz-engine.tsx
'use client';
import { useState } from 'react';
import { questionsPersonalColor } from './data';

export type PersonalColorType = 'warm_spring' | 'warm_autumn' | 'cool_summer' | 'cool_winter';

interface Answer {
  text: string;
  type: string;
}

interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export default function QuizEngine({
  onFinish,
  onCancel
}: {
  onFinish: (type: PersonalColorType) => void;
  onCancel: () => void;
}) {
  const [step, setStep] = useState(0);
  const [warmScore, setWarmScore] = useState(0);
  const [coolScore, setCoolScore] = useState(0);
  // Q8の回答でイエベのサブタイプ、Q9の回答でブルベのサブタイプを記録
  const [warmSub, setWarmSub] = useState<'spring' | 'autumn'>('spring');
  const [coolSub, setCoolSub] = useState<'summer' | 'winter'>('summer');

  if (!questionsPersonalColor || questionsPersonalColor.length === 0) {
    return <div>データを読み込んでいます...</div>;
  }

  const currentQuestion = (questionsPersonalColor as Question[])[step];

  const handleAnswer = (type: string) => {
    // ローカル変数で最新値を追跡（Reactの非同期state更新を回避）
    let newWarm = warmScore;
    let newCool = coolScore;
    let newWarmSub = warmSub;
    let newCoolSub = coolSub;

    if (type === 'warm') {
      newWarm = warmScore + 1;
      setWarmScore(newWarm);
    } else if (type === 'cool') {
      newCool = coolScore + 1;
      setCoolScore(newCool);
    } else if (type === 'warm_spring') {
      newWarmSub = 'spring';
      setWarmSub('spring');
    } else if (type === 'warm_autumn') {
      newWarmSub = 'autumn';
      setWarmSub('autumn');
    } else if (type === 'cool_summer') {
      newCoolSub = 'summer';
      setCoolSub('summer');
    } else if (type === 'cool_winter') {
      newCoolSub = 'winter';
      setCoolSub('winter');
    }

    if (step < questionsPersonalColor.length - 1) {
      setStep(step + 1);
    } else {
      // Q1〜Q7とQ10のwarm/coolスコアでイエベ/ブルベを判定
      // Q8の回答でイエベ春/秋、Q9の回答でブルベ夏/冬に分岐
      const isWarm = newWarm >= newCool;
      const result: PersonalColorType = isWarm
        ? (newWarmSub === 'spring' ? 'warm_spring' : 'warm_autumn')
        : (newCoolSub === 'summer' ? 'cool_summer' : 'cool_winter');
      onFinish(result);
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
