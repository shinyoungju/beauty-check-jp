// app/data.ts

export const questions = [
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
    title: '多幸感あふれる、コーラル＆オレンジリップ',
    description: '暖かみのあるお肌のあなたには、コーラルピンクやオレンジ系、テラコッタカラーがぴったり。肌を明るく、健康的に見せてくれます。',
    moodImg: '/warm-mood.png',
    bgClass: 'bg-orange-50',
    textClass: 'text-orange-900',
    btnClass: 'bg-orange-500 hover:bg-orange-600',
    products: [
      { 
        name: 'KATE(ケイト) リップモンスター 03 [陽炎]', 
        img: 'https://m.media-amazon.com/images/I/51v8x7K-S6L._AC_SL1000_.jpg', 
        link: 'https://www.amazon.co.jp/s?k=KATE+リップモンスター+03' 
      },
      { 
        name: 'OPERA(オペラ) リップティント N 05 コーラル', 
        img: 'https://m.media-amazon.com/images/I/51I7I16oR+L._AC_SL1000_.jpg', 
        link: 'https://www.amazon.co.jp/s?k=OPERA+リップティント+05' 
      }
    ]
  },
  cool: {
    type: 'ブルベ (Cool Base)',
    title: '透明感を引き立てる、ピンク＆ローズリップ',
    description: '涼しげで透明感のあるお肌のあなたには、ピンクローズやプラム、モーヴ系カラーがおすすめ。洗練されたエレガントな印象を与えます。',
    moodImg: '/cool-mood.png',
    bgClass: 'bg-pink-50',
    textClass: 'text-pink-900',
    btnClass: 'bg-pink-500 hover:bg-pink-600',
    products: [
      { 
        name: 'KATE(ケイト) リップモンスター 07 [ラスボス]', 
        img: 'https://m.media-amazon.com/images/I/51H5S0P6V0L._AC_SL1000_.jpg', 
        link: 'https://www.amazon.co.jp/s?k=KATE+リップモンスター+07' 
      },
      { 
        name: 'CEZANNE(セザンヌ) ウォータリーティントリップ 05', 
        img: 'https://m.media-amazon.com/images/I/61rU8M2mK2L._AC_SL1200_.jpg', 
        link: 'https://www.amazon.co.jp/s?k=セザンヌ+ウォータリーティントリップ+05' 
      }
    ]
  }
};