// app/data.ts

export const questionsPersonalColor = [
  {
    id: 1,
    text: 'あなたの肌のトーンに最も近いのは？',
    answers: [
      { text: 'ゴールド・イエローベース (イエベ)', type: 'warm' },
      { text: 'ピンク・ブルーベース (ブルベ)', type: 'cool' }
    ]
  },
  {
    id: 2,
    text: 'よく馴染むアクセサリーの色は？',
    answers: [
      { text: 'ゴールド (暖かみがある)', type: 'warm' },
      { text: 'シルバー (涼しげ)', type: 'cool' }
    ]
  },
  {
    id: 3,
    text: '手のひらの色はどちらに近い？',
    answers: [
      { text: '黄色っぽい・オレンジっぽい', type: 'warm' },
      { text: '赤っぽい・ピンクっぽい', type: 'cool' }
    ]
  },
  {
    id: 4,
    text: '周りからよく言われる印象は？',
    answers: [
      { text: '親しみやすい・ヘルシー', type: 'warm' },
      { text: '透明感がある・エレガント', type: 'cool' }
    ]
  }
];

export const recommendations: any = {
  warm: {
    type: 'イエベ (Warm Base)',
    lip: {
      title: '多幸感あふれる、コーラル＆オレンジリップ',
      description: '暖かみのあるお肌のあなたには、コーラルピンクやオレンジ系、テラコッタカラーがぴったり。肌を明るく、健康的に見せてくれます。',
      moodImg: '/warm-mood.png',
      bgClass: 'bg-[#fff9f5]',
      textClass: 'text-[#8b4513]',
      btnClass: 'bg-[#d2691e] hover:bg-[#a0522d]',
      products: [
        { name: 'KATE(ケイト) リップモンスター 03 [陽炎]', img: '/product-warm.png', link: 'https://www.amazon.co.jp/s?k=KATE+リップモンスター+03' }
      ]
    },
    shadow: {
      title: '健康的な魅力を引き立てる、ゴールド＆ブラウンシャドウ',
      description: '暖かみのあるお肌のあなたには、ゴールドパールやテラコッタ、ブラウン系のパレットがぴったり。目元に自然な立体感を与えてくれます。',
      moodImg: '/warm-mood.png',
      bgClass: 'bg-[#fff9f5]',
      textClass: 'text-[#8b4513]',
      btnClass: 'bg-[#d2691e] hover:bg-[#a0522d]',
      products: [
        { name: 'EXCEL(エクセル) スキニーリッチシャドウ SR05', img: '/product-warm.png', link: 'https://www.amazon.co.jp/s?k=EXCEL+スキニーリッチシャドウ+SR05' }
      ]
    }
  },
  cool: {
    type: 'ブルベ (Cool Base)',
    lip: {
      title: '透明感を引き立てる、ピンク＆ローズリップ',
      description: '涼しげで透明感のあるお肌のあなたには、ピンクローズやプラム、モーヴ系カラーがおすすめ。洗練されたエレガントな印象を与えます。',
      moodImg: '/cool-mood.png',
      bgClass: 'bg-[#fdf2f8]',
      textClass: 'text-[#831843]',
      btnClass: 'bg-[#db2777] hover:bg-[#9d174d]',
      products: [
        { name: 'KATE(ケイト) リップモンスター 07 [ラスボス]', img: '/product-cool.png', link: 'https://www.amazon.co.jp/s?k=KATE+リップモンスター+07' }
      ]
    },
    shadow: {
      title: '透明感を際立たせる、ピンク＆パープルシャドウ',
      description: '涼しげで透明感のあるお肌のあなたには、ピンクローズやモーヴ系、シルバーパールのパレットがぴったり。洗練された目元を演出します。',
      moodImg: '/cool-mood.png',
      bgClass: 'bg-[#fdf2f8]',
      textClass: 'text-[#831843]',
      btnClass: 'bg-[#db2777] hover:bg-[#9d174d]',
      products: [
        { name: 'CANMAKE(キャンメイク) シルキースフレアイズ 06', img: '/product-cool.png', link: 'https://www.amazon.co.jp/s?k=CANMAKE+シルキースフレアイズ+06' }
      ]
    }
  }
};