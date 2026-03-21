// app/data.ts

export const questionsPersonalColor = [
  {
    id: 1,
    text: '手首の内側の血管の色は？',
    answers: [
      { text: '緑・オリーブ色', type: 'warm' },
      { text: '青・紫色', type: 'cool' }
    ]
  },
  {
    id: 2,
    text: '日焼けをするとどうなる？',
    answers: [
      { text: 'すぐ黒くなる', type: 'warm' },
      { text: '赤くなってすぐ白く戻る', type: 'cool' }
    ]
  },
  {
    id: 3,
    text: 'あなたの肌のトーンは？',
    answers: [
      { text: '黄みがかったベージュ・サーモン系', type: 'warm' },
      { text: 'ピンク・赤みがかっている', type: 'cool' }
    ]
  },
  {
    id: 4,
    text: '白とオフホワイト、どちらが顔映りが良い？',
    answers: [
      { text: 'オフホワイト・アイボリー', type: 'warm' },
      { text: '真っ白・ピュアホワイト', type: 'cool' }
    ]
  },
  {
    id: 5,
    text: 'ゴールドとシルバー、どちらのアクセサリーが似合う？',
    answers: [
      { text: 'ゴールド', type: 'warm' },
      { text: 'シルバー', type: 'cool' }
    ]
  },
  {
    id: 6,
    text: '瞳の色は？',
    answers: [
      { text: '明るいブラウン・ハニーブラウン', type: 'warm' },
      { text: 'ダークブラウン・黒に近い', type: 'cool' }
    ]
  },
  {
    id: 7,
    text: 'よく言われる第一印象は？',
    answers: [
      { text: '親しみやすい・健康的・温かい', type: 'warm' },
      { text: 'クール・エレガント・シャープ', type: 'cool' }
    ]
  },
  {
    id: 8,
    text: 'イエベの中でどちらのイメージに近い？',
    answers: [
      { text: '明るく華やか・可愛い・春らしい', type: 'warm_spring' },
      { text: '落ち着いた・深み・秋らしい', type: 'warm_autumn' }
    ]
  },
  {
    id: 9,
    text: 'ブルベの中でどちらのイメージに近い？',
    answers: [
      { text: '柔らかい・清楚・夏らしい', type: 'cool_summer' },
      { text: '鮮やか・クール・冬らしい', type: 'cool_winter' }
    ]
  },
  {
    id: 10,
    text: '自分の印象を一言で表すと？',
    answers: [
      { text: '温かく柔らかい', type: 'warm' },
      { text: 'クールで鮮明', type: 'cool' }
    ]
  }
];

export const recommendations: any = {
  warm_spring: {
    type: 'イエベ春',
    description: '明るくクリアな黄み肌。コーラル・ピーチ・アイボリー系が得意。',
    lip: {
      title: '春の陽光のような、コーラル＆ピーチリップ',
      description: '明るく華やかなイエベ春さんには、コーラルピンクやピーチ、フレッシュなオレンジ系がぴったり。肌を生き生きと明るく見せ、春らしい可愛らしさを演出します。',
      moodImg: '/warm-mood.png',
      bgClass: 'bg-[#fff9f0]',
      textClass: 'text-[#c2631f]',
      btnClass: 'bg-[#e8843a] hover:bg-[#c2631f]',
      products: [
        { name: 'KATE(ケイト) リップモンスター 03 [陽炎]', amazonLink: 'https://www.amazon.co.jp/s?k=KATE+リップモンスター+03&tag=lueur0f-22', rakutenKeyword: 'ケイト リップモンスター 03' },
        { name: 'CANMAKE(キャンメイク) ステイオンバームルージュ T13 [コーラルオレンジ]', amazonLink: 'https://www.amazon.co.jp/s?k=CANMAKE+ステイオンバームルージュ+T13&tag=lueur0f-22', rakutenKeyword: 'キャンメイク ステイオンバームルージュ T13' },
        { name: 'rom&nd(ロムアンド) ジューシーラスティングティント 01 [Mystic Nude]', amazonLink: 'https://www.amazon.co.jp/s?k=romand+ジューシーラスティングティント+01&tag=lueur0f-22', rakutenKeyword: 'ロムアンド ジューシーラスティングティント 01' }
      ]
    },
    shadow: {
      title: '春の輝きを纏う、ゴールド＆シャンパンシャドウ',
      description: '明るく華やかなイエベ春さんには、ゴールドパールやシャンパン、ライトブラウン系のパレットがぴったり。目元に瑞々しい輝きを与え、春らしい清潔感を演出します。',
      moodImg: '/warm-mood.png',
      bgClass: 'bg-[#fff9f0]',
      textClass: 'text-[#c2631f]',
      btnClass: 'bg-[#e8843a] hover:bg-[#c2631f]',
      products: [
        { name: 'EXCEL(エクセル) スキニーリッチシャドウ SR01 [シャンパンゴールド]', amazonLink: 'https://www.amazon.co.jp/s?k=EXCEL+スキニーリッチシャドウ+SR01&tag=lueur0f-22', rakutenKeyword: 'エクセル スキニーリッチシャドウ SR01' },
        { name: 'CANMAKE(キャンメイク) パーフェクトスタイリストアイズ 17 [アーストーン]', amazonLink: 'https://www.amazon.co.jp/s?k=CANMAKE+パーフェクトスタイリストアイズ+17&tag=lueur0f-22', rakutenKeyword: 'キャンメイク パーフェクトスタイリストアイズ 17' },
        { name: 'rom&nd(ロムアンド) ベターザンパレット 05 [ピーチコーラル]', amazonLink: 'https://www.amazon.co.jp/s?k=romand+ベターザンパレット+05&tag=lueur0f-22', rakutenKeyword: 'ロムアンド ベターザンパレット 05' }
      ]
    }
  },
  warm_autumn: {
    type: 'イエベ秋',
    description: '深みのある黄み肌。テラコッタ・カーキ・マスタード系が得意。',
    lip: {
      title: '大人の深みを纏う、テラコッタ＆ブリックリップ',
      description: '落ち着いた深みのあるイエベ秋さんには、テラコッタやブリックレッド、深みのあるブラウン系がぴったり。肌に溶け込むような温かみと大人っぽさを演出します。',
      moodImg: '/warm-mood.png',
      bgClass: 'bg-[#fdf6ee]',
      textClass: 'text-[#7c4a1e]',
      btnClass: 'bg-[#a0522d] hover:bg-[#7c4a1e]',
      products: [
        { name: 'KATE(ケイト) リップモンスター 08 [スモーキーテラコッタ]', amazonLink: 'https://www.amazon.co.jp/s?k=KATE+リップモンスター+08&tag=lueur0f-22', rakutenKeyword: 'ケイト リップモンスター 08' },
        { name: 'CANMAKE(キャンメイク) ステイオンバームルージュ T19 [ブリックレッド]', amazonLink: 'https://www.amazon.co.jp/s?k=CANMAKE+ステイオンバームルージュ+T19&tag=lueur0f-22', rakutenKeyword: 'キャンメイク ステイオンバームルージュ T19' },
        { name: 'CEZANNE(セザンヌ) ラスティングリップカラーN 12 [テラコッタブラウン]', amazonLink: 'https://www.amazon.co.jp/s?k=CEZANNE+ラスティングリップカラーN+12&tag=lueur0f-22', rakutenKeyword: 'セザンヌ ラスティングリップカラー 12' }
      ]
    },
    shadow: {
      title: '秋の深みを宿す、ブラウン＆テラコッタシャドウ',
      description: '落ち着いた深みのあるイエベ秋さんには、テラコッタやバーントオレンジ、深みのあるカッパー系のパレットがぴったり。目元に大人の深みと温かみを演出します。',
      moodImg: '/warm-mood.png',
      bgClass: 'bg-[#fdf6ee]',
      textClass: 'text-[#7c4a1e]',
      btnClass: 'bg-[#a0522d] hover:bg-[#7c4a1e]',
      products: [
        { name: 'EXCEL(エクセル) スキニーリッチシャドウ SR05 [テラコッタブラウン]', amazonLink: 'https://www.amazon.co.jp/s?k=EXCEL+スキニーリッチシャドウ+SR05&tag=lueur0f-22', rakutenKeyword: 'エクセル スキニーリッチシャドウ SR05' },
        { name: 'KATE(ケイト) デザイニングブラウンアイズ BR-1', amazonLink: 'https://www.amazon.co.jp/s?k=KATE+デザイニングブラウンアイズ+BR-1&tag=lueur0f-22', rakutenKeyword: 'ケイト デザイニングブラウンアイズ BR-1' },
        { name: 'CANMAKE(キャンメイク) パーフェクトスタイリストアイズ 16 [テラコッタブラウン]', amazonLink: 'https://www.amazon.co.jp/s?k=CANMAKE+パーフェクトスタイリストアイズ+16&tag=lueur0f-22', rakutenKeyword: 'キャンメイク パーフェクトスタイリストアイズ 16' }
      ]
    }
  },
  cool_summer: {
    type: 'ブルベ夏',
    description: '柔らかいピンク肌。ラベンダー・ベビーピンク・ローズ系が得意。',
    lip: {
      title: '夏の柔らかさを纏う、ローズ＆モーヴリップ',
      description: '柔らかく清楚なブルベ夏さんには、ローズピンクやモーヴ、ベビーピンク系がぴったり。透明感と優しい女性らしさを引き立て、上品で洗練された印象を与えます。',
      moodImg: '/cool-mood.png',
      bgClass: 'bg-[#fdf4f8]',
      textClass: 'text-[#9b4e6e]',
      btnClass: 'bg-[#c26e8e] hover:bg-[#9b4e6e]',
      products: [
        { name: 'KATE(ケイト) リップモンスター 07 [ラスボス]', amazonLink: 'https://www.amazon.co.jp/s?k=KATE+リップモンスター+07&tag=lueur0f-22', rakutenKeyword: 'ケイト リップモンスター 07' },
        { name: 'CANMAKE(キャンメイク) ステイオンバームルージュ T10 [スウィートハニーピンク]', amazonLink: 'https://www.amazon.co.jp/s?k=CANMAKE+ステイオンバームルージュ+T10&tag=lueur0f-22', rakutenKeyword: 'キャンメイク ステイオンバームルージュ T10' },
        { name: 'rom&nd(ロムアンド) ジューシーラスティングティント 22 [ローズモーヴ]', amazonLink: 'https://www.amazon.co.jp/s?k=romand+ジューシーラスティングティント+22&tag=lueur0f-22', rakutenKeyword: 'ロムアンド ジューシーラスティングティント 22' }
      ]
    },
    shadow: {
      title: '夏の清涼感を際立てる、ラベンダー＆ピンクシャドウ',
      description: '柔らかく清楚なブルベ夏さんには、ラベンダーやローズピンク、シルバーパールのパレットがぴったり。目元に透明感と優しい輝きを与え、洗練された印象を演出します。',
      moodImg: '/cool-mood.png',
      bgClass: 'bg-[#fdf4f8]',
      textClass: 'text-[#9b4e6e]',
      btnClass: 'bg-[#c26e8e] hover:bg-[#9b4e6e]',
      products: [
        { name: 'CANMAKE(キャンメイク) シルキースフレアイズ 06 [ラベンダーピンク]', amazonLink: 'https://www.amazon.co.jp/s?k=CANMAKE+シルキースフレアイズ+06&tag=lueur0f-22', rakutenKeyword: 'キャンメイク シルキースフレアイズ 06' },
        { name: 'rom&nd(ロムアンド) ベターザンパレット 10 [Rosé Vintage]', amazonLink: 'https://www.amazon.co.jp/s?k=romand+ベターザンパレット+10&tag=lueur0f-22', rakutenKeyword: 'ロムアンド ベターザンパレット 10' },
        { name: 'CEZANNE(セザンヌ) トーンアップアイシャドウ 06 [ラベンダー]', amazonLink: 'https://www.amazon.co.jp/s?k=CEZANNE+トーンアップアイシャドウ+06&tag=lueur0f-22', rakutenKeyword: 'セザンヌ トーンアップアイシャドウ 06' }
      ]
    }
  },
  cool_winter: {
    type: 'ブルベ冬',
    description: 'クールで透明感のある肌。バーガンディ・ネイビー・ピュアホワイト系が得意。',
    lip: {
      title: '冬の鮮明さを纏う、バーガンディ＆プラムリップ',
      description: 'クールで透明感のあるブルベ冬さんには、バーガンディやディーププラム、鮮やかなレッド系がぴったり。肌の透明感を最大限に引き出し、インパクトのある洗練された印象を与えます。',
      moodImg: '/cool-mood.png',
      bgClass: 'bg-[#f8f2f8]',
      textClass: 'text-[#6b2d6b]',
      btnClass: 'bg-[#8b2fc9] hover:bg-[#6b2d6b]',
      products: [
        { name: 'KATE(ケイト) リップモンスター 11 [深夜のインプット]', amazonLink: 'https://www.amazon.co.jp/s?k=KATE+リップモンスター+11&tag=lueur0f-22', rakutenKeyword: 'ケイト リップモンスター 11' },
        { name: 'CANMAKE(キャンメイク) ステイオンバームルージュ T07 [バーガンディレッド]', amazonLink: 'https://www.amazon.co.jp/s?k=CANMAKE+ステイオンバームルージュ+T07&tag=lueur0f-22', rakutenKeyword: 'キャンメイク ステイオンバームルージュ T07' },
        { name: 'NYX(ニックス) ソフトマットリップクリーム [コペンハーゲン]', amazonLink: 'https://www.amazon.co.jp/s?k=NYX+ソフトマットリップクリーム+コペンハーゲン&tag=lueur0f-22', rakutenKeyword: 'NYX ソフトマットリップ コペンハーゲン' }
      ]
    },
    shadow: {
      title: '冬の透明感を極める、パープル＆シルバーシャドウ',
      description: 'クールで透明感のあるブルベ冬さんには、ダークパープルやネイビー、シルバーパールのパレットがぴったり。目元に鮮明なコントラストと洗練された存在感を演出します。',
      moodImg: '/cool-mood.png',
      bgClass: 'bg-[#f8f2f8]',
      textClass: 'text-[#6b2d6b]',
      btnClass: 'bg-[#8b2fc9] hover:bg-[#6b2d6b]',
      products: [
        { name: 'KATE(ケイト) スモーキーファインアイズ SV-1 [シルバー]', amazonLink: 'https://www.amazon.co.jp/s?k=KATE+スモーキーファインアイズ+SV-1&tag=lueur0f-22', rakutenKeyword: 'ケイト スモーキーファインアイズ SV-1' },
        { name: 'CANMAKE(キャンメイク) シルキースフレアイズ 11 [プラムパープル]', amazonLink: 'https://www.amazon.co.jp/s?k=CANMAKE+シルキースフレアイズ+11&tag=lueur0f-22', rakutenKeyword: 'キャンメイク シルキースフレアイズ 11' },
        { name: 'rom&nd(ロムアンド) ベターザンパレット 16 [ナイトクール]', amazonLink: 'https://www.amazon.co.jp/s?k=romand+ベターザンパレット+16&tag=lueur0f-22', rakutenKeyword: 'ロムアンド ベターザンパレット 16' }
      ]
    }
  }
};
