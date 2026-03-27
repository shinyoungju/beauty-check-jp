// app/data.ts

export const questionsPersonalColor = [
  {
    id: 1,
    text: '手首の内側の血管の色は？',
    answers: [
      { text: '緑・オリーブ色に見える', type: 'warm', score: 2 },
      { text: '青・紫色に見える', type: 'cool', score: 2 }
    ]
  },
  {
    id: 2,
    text: '日焼けをするとどうなりますか？',
    answers: [
      { text: 'すぐ黒くなる（元に戻りにくい）', type: 'warm', score: 2 },
      { text: '赤くなって、しばらくすると白く戻る', type: 'cool', score: 2 }
    ]
  },
  {
    id: 3,
    text: '素肌の色みは？',
    answers: [
      { text: '黄みがかったベージュ・健康的なサーモン系', type: 'warm', score: 2 },
      { text: 'ピンクみがかっている・赤みが出やすい', type: 'cool', score: 2 }
    ]
  },
  {
    id: 4,
    text: '白とオフホワイト、どちらが顔映りがいい？',
    answers: [
      { text: 'オフホワイト・アイボリーのほうが肌になじむ', type: 'warm', score: 2 },
      { text: '真っ白・ピュアホワイトのほうが顔が明るく見える', type: 'cool', score: 2 }
    ]
  },
  {
    id: 5,
    text: 'ゴールドとシルバー、どちらのアクセサリーが似合う？',
    answers: [
      { text: 'ゴールド（肌がなじんで血色よく見える）', type: 'warm', score: 2 },
      { text: 'シルバー（肌が透き通って見える）', type: 'cool', score: 2 }
    ]
  },
  {
    id: 6,
    text: '瞳の色・印象は？',
    answers: [
      { text: '明るいブラウン・ハニーブラウン・黄みがかった茶色', type: 'warm', score: 2 },
      { text: '暗いブラウン・黒に近い・青みがかったブラック', type: 'cool', score: 2 }
    ]
  },
  {
    id: 7,
    text: '頬や唇の血色は？',
    answers: [
      { text: 'オレンジ・コーラル・サーモンピンク系の血色', type: 'warm', score: 2 },
      { text: 'ローズ・ピンク・ラベンダー系の血色', type: 'cool', score: 2 }
    ]
  },
  {
    id: 8,
    text: 'イエベさん向け：肌・全体の印象は？',
    answers: [
      { text: '明るい・透明感がある・華やか・春のように軽やか', type: 'warm_spring', score: 0 },
      { text: 'マットで深みがある・落ち着いた・秋のように重厚感', type: 'warm_autumn', score: 0 }
    ]
  },
  {
    id: 9,
    text: 'ブルベさん向け：肌・全体の印象は？',
    answers: [
      { text: '柔らかい・上品・霞がかった・夏のようにふわっとした印象', type: 'cool_summer', score: 0 },
      { text: 'ハリがある・クール・鮮明・冬のようにシャープな印象', type: 'cool_winter', score: 0 }
    ]
  },
  {
    id: 10,
    text: '似合うと言われることが多いファッションカラーは？',
    answers: [
      { text: 'ブラウン・オレンジ・カーキ・テラコッタ・キャメル系', type: 'warm', score: 1 },
      { text: 'グレー・ネイビー・ラベンダー・バーガンディ・ワイン系', type: 'cool', score: 1 }
    ]
  }
];

export const recommendations: any = {
  warm_spring: {
    type: 'イエベ春 / スプリング',
    typeTitle: '明るく華やか、春の陽光のような輝き',
    typeDescription: '黄みを帯びた明るく透明感のある肌が特徴。瞳は明るいブラウンで、キラキラと輝くような印象。コーラルピンク・ピーチ・アイボリー・イエローグリーンなど明るくクリアな暖色系カラーがよく似合います。重くなりすぎず、軽やかで生き生きとした華やかさが魅力。',
    colorPalette: ['#F4A460', '#FFB6C1', '#FFF8DC', '#90EE90', '#FFDAB9', '#FF7F50'],
    lip: {
      typeKey: 'warm_spring_lip',
      title: '春の陽光のような、コーラル＆ピーチリップ',
      description: '明るく華やかなイエベ春さんには、コーラルピンクやピーチ、フレッシュなオレンジ系がぴったり。肌を生き生きと明るく見せ、春らしい可愛らしさを演出します。',
      moodImg: '/warm-mood.png',
      bgClass: 'bg-[#fff9f0]',
      textClass: 'text-[#c2631f]',
      btnClass: 'bg-[#e8843a] hover:bg-[#c2631f]',
      products: [
        { name: 'KATE(ケイト) リップモンスター 03 [陽炎]', price: '¥748', amazonLink: 'https://www.amazon.co.jp/s?k=KATE+リップモンスター+03&tag=lueur0f-22', rakutenKeyword: 'ケイト リップモンスター 03' },
        { name: 'CANMAKE(キャンメイク) ステイオンバームルージュ T13 [コーラルオレンジ]', price: '¥660', amazonLink: 'https://www.amazon.co.jp/s?k=CANMAKE+ステイオンバームルージュ+T13&tag=lueur0f-22', rakutenKeyword: 'キャンメイク ステイオンバームルージュ T13' },
        { name: 'rom&nd(ロムアンド) ジューシーラスティングティント 01 [Mystic Nude]', price: '¥1,320', amazonLink: 'https://www.amazon.co.jp/s?k=romand+ジューシーラスティングティント+01&tag=lueur0f-22', rakutenKeyword: 'ロムアンド ジューシーラスティングティント 01' }
      ]
    },
    shadow: {
      typeKey: 'warm_spring_shadow',
      title: '春の輝きを纏う、ゴールド＆シャンパンシャドウ',
      description: '明るく華やかなイエベ春さんには、ゴールドパールやシャンパン、ライトブラウン系のパレットがぴったり。目元に瑞々しい輝きを与え、春らしい清潔感を演出します。',
      moodImg: '/warm-mood.png',
      bgClass: 'bg-[#fff9f0]',
      textClass: 'text-[#c2631f]',
      btnClass: 'bg-[#e8843a] hover:bg-[#c2631f]',
      products: [
        { name: 'EXCEL(エクセル) スキニーリッチシャドウ SR01 [シャンパンゴールド]', price: '¥1,650', amazonLink: 'https://www.amazon.co.jp/s?k=EXCEL+スキニーリッチシャドウ+SR01&tag=lueur0f-22', rakutenKeyword: 'エクセル スキニーリッチシャドウ SR01' },
        { name: 'CANMAKE(キャンメイク) パーフェクトスタイリストアイズ 17 [アーストーン]', price: '¥858', amazonLink: 'https://www.amazon.co.jp/s?k=CANMAKE+パーフェクトスタイリストアイズ+17&tag=lueur0f-22', rakutenKeyword: 'キャンメイク パーフェクトスタイリストアイズ 17' },
        { name: 'rom&nd(ロムアンド) ベターザンパレット 05 [ピーチコーラル]', price: '¥1,650', amazonLink: 'https://www.amazon.co.jp/s?k=romand+ベターザンパレット+05&tag=lueur0f-22', rakutenKeyword: 'ロムアンド ベターザンパレット 05' }
      ]
    }
  },
  warm_autumn: {
    type: 'イエベ秋 / オータム',
    typeTitle: '深みと温もり、秋の森のような落ち着き',
    typeDescription: '黄みを含んだマットで落ち着いた肌が特徴。瞳や髪もダークブラウンで、全体的に深みのある印象。テラコッタ・カーキ・マスタード・キャメル・レンガ色などアースカラー系の深みあるカラーがよく似合います。成熟した高級感とナチュラルなおしゃれ感が魅力。',
    colorPalette: ['#8B4513', '#D2691E', '#808000', '#B8860B', '#CD853F', '#A0522D'],
    lip: {
      typeKey: 'warm_autumn_lip',
      title: '大人の深みを纏う、テラコッタ＆ブリックリップ',
      description: '落ち着いた深みのあるイエベ秋さんには、テラコッタやブリックレッド、深みのあるブラウン系がぴったり。肌に溶け込むような温かみと大人っぽさを演出します。',
      moodImg: '/warm-mood.png',
      bgClass: 'bg-[#fdf6ee]',
      textClass: 'text-[#7c4a1e]',
      btnClass: 'bg-[#a0522d] hover:bg-[#7c4a1e]',
      products: [
        { name: 'KATE(ケイト) リップモンスター 08 [スモーキーテラコッタ]', price: '¥748', amazonLink: 'https://www.amazon.co.jp/s?k=KATE+リップモンスター+08&tag=lueur0f-22', rakutenKeyword: 'ケイト リップモンスター 08' },
        { name: 'CANMAKE(キャンメイク) ステイオンバームルージュ T19 [ブリックレッド]', price: '¥660', amazonLink: 'https://www.amazon.co.jp/s?k=CANMAKE+ステイオンバームルージュ+T19&tag=lueur0f-22', rakutenKeyword: 'キャンメイク ステイオンバームルージュ T19' },
        { name: 'CEZANNE(セザンヌ) ラスティングリップカラーN 12 [テラコッタブラウン]', price: '¥440', amazonLink: 'https://www.amazon.co.jp/s?k=CEZANNE+ラスティングリップカラーN+12&tag=lueur0f-22', rakutenKeyword: 'セザンヌ ラスティングリップカラー 12' }
      ]
    },
    shadow: {
      typeKey: 'warm_autumn_shadow',
      title: '秋の深みを宿す、ブラウン＆テラコッタシャドウ',
      description: '落ち着いた深みのあるイエベ秋さんには、テラコッタやバーントオレンジ、深みのあるカッパー系のパレットがぴったり。目元に大人の深みと温かみを演出します。',
      moodImg: '/warm-mood.png',
      bgClass: 'bg-[#fdf6ee]',
      textClass: 'text-[#7c4a1e]',
      btnClass: 'bg-[#a0522d] hover:bg-[#7c4a1e]',
      products: [
        { name: 'EXCEL(エクセル) スキニーリッチシャドウ SR05 [テラコッタブラウン]', price: '¥1,650', amazonLink: 'https://www.amazon.co.jp/s?k=EXCEL+スキニーリッチシャドウ+SR05&tag=lueur0f-22', rakutenKeyword: 'エクセル スキニーリッチシャドウ SR05' },
        { name: 'KATE(ケイト) デザイニングブラウンアイズ BR-1', price: '¥1,078', amazonLink: 'https://www.amazon.co.jp/s?k=KATE+デザイニングブラウンアイズ+BR-1&tag=lueur0f-22', rakutenKeyword: 'ケイト デザイニングブラウンアイズ BR-1' },
        { name: 'CANMAKE(キャンメイク) パーフェクトスタイリストアイズ 16 [テラコッタブラウン]', price: '¥858', amazonLink: 'https://www.amazon.co.jp/s?k=CANMAKE+パーフェクトスタイリストアイズ+16&tag=lueur0f-22', rakutenKeyword: 'キャンメイク パーフェクトスタイリストアイズ 16' }
      ]
    }
  },
  cool_summer: {
    type: 'ブルベ夏 / サマー',
    typeTitle: '柔らかく上品、夏の霞のような透明感',
    typeDescription: '青みを帯びた柔らかなピンク系の肌が特徴。全体的にソフトでふんわりとした上品な印象。ラベンダー・ベビーピンク・スカイブルー・ローズグレーなどくすみのある淡い寒色系カラーがよく似合います。清楚で優しい女性らしさと上品な透明感が魅力。',
    colorPalette: ['#DDA0DD', '#B0C4DE', '#E6E6FA', '#FFB6C1', '#AFEEEE', '#C0C0C0'],
    lip: {
      typeKey: 'cool_summer_lip',
      title: '夏の柔らかさを纏う、ローズ＆モーヴリップ',
      description: '柔らかく清楚なブルベ夏さんには、ローズピンクやモーヴ、ベビーピンク系がぴったり。透明感と優しい女性らしさを引き立て、上品で洗練された印象を与えます。',
      moodImg: '/cool-mood.png',
      bgClass: 'bg-[#fdf4f8]',
      textClass: 'text-[#9b4e6e]',
      btnClass: 'bg-[#c26e8e] hover:bg-[#9b4e6e]',
      products: [
        { name: 'KATE(ケイト) リップモンスター 07 [ラスボス]', price: '¥748', amazonLink: 'https://www.amazon.co.jp/s?k=KATE+リップモンスター+07&tag=lueur0f-22', rakutenKeyword: 'ケイト リップモンスター 07' },
        { name: 'CANMAKE(キャンメイク) ステイオンバームルージュ T10 [スウィートハニーピンク]', price: '¥660', amazonLink: 'https://www.amazon.co.jp/s?k=CANMAKE+ステイオンバームルージュ+T10&tag=lueur0f-22', rakutenKeyword: 'キャンメイク ステイオンバームルージュ T10' },
        { name: 'rom&nd(ロムアンド) ジューシーラスティングティント 22 [ローズモーヴ]', price: '¥1,320', amazonLink: 'https://www.amazon.co.jp/s?k=romand+ジューシーラスティングティント+22&tag=lueur0f-22', rakutenKeyword: 'ロムアンド ジューシーラスティングティント 22' }
      ]
    },
    shadow: {
      typeKey: 'cool_summer_shadow',
      title: '夏の清涼感を際立てる、ラベンダー＆ピンクシャドウ',
      description: '柔らかく清楚なブルベ夏さんには、ラベンダーやローズピンク、シルバーパールのパレットがぴったり。目元に透明感と優しい輝きを与え、洗練された印象を演出します。',
      moodImg: '/cool-mood.png',
      bgClass: 'bg-[#fdf4f8]',
      textClass: 'text-[#9b4e6e]',
      btnClass: 'bg-[#c26e8e] hover:bg-[#9b4e6e]',
      products: [
        { name: 'CANMAKE(キャンメイク) シルキースフレアイズ 06 [ラベンダーピンク]', price: '¥880', amazonLink: 'https://www.amazon.co.jp/s?k=CANMAKE+シルキースフレアイズ+06&tag=lueur0f-22', rakutenKeyword: 'キャンメイク シルキースフレアイズ 06' },
        { name: 'rom&nd(ロムアンド) ベターザンパレット 10 [Rosé Vintage]', price: '¥1,650', amazonLink: 'https://www.amazon.co.jp/s?k=romand+ベターザンパレット+10&tag=lueur0f-22', rakutenKeyword: 'ロムアンド ベターザンパレット 10' },
        { name: 'CEZANNE(セザンヌ) トーンアップアイシャドウ 06 [ラベンダー]', price: '¥660', amazonLink: 'https://www.amazon.co.jp/s?k=CEZANNE+トーンアップアイシャドウ+06&tag=lueur0f-22', rakutenKeyword: 'セザンヌ トーンアップアイシャドウ 06' }
      ]
    }
  },
  cool_winter: {
    type: 'ブルベ冬 / ウィンター',
    typeTitle: 'クールで凛々しい、冬の星空のような鮮明さ',
    typeDescription: '青みを帯びたクールでハリのある肌が特徴。瞳や髪はダークで、白目との対比がはっきりした印象。バーガンディ・ネイビー・ピュアホワイト・ロイヤルブルーなど鮮やかでコントラストの強いカラーがよく似合います。都会的でシャープな洗練された美しさが魅力。',
    colorPalette: ['#800020', '#000080', '#FFFFFF', '#4169E1', '#2E0854', '#DC143C'],
    lip: {
      typeKey: 'cool_winter_lip',
      title: '冬の鮮明さを纏う、バーガンディ＆プラムリップ',
      description: 'クールで透明感のあるブルベ冬さんには、バーガンディやディーププラム、鮮やかなレッド系がぴったり。肌の透明感を最大限に引き出し、インパクトのある洗練された印象を与えます。',
      moodImg: '/cool-mood.png',
      bgClass: 'bg-[#f8f2f8]',
      textClass: 'text-[#6b2d6b]',
      btnClass: 'bg-[#8b2fc9] hover:bg-[#6b2d6b]',
      products: [
        { name: 'KATE(ケイト) リップモンスター 11 [深夜のインプット]', price: '¥748', amazonLink: 'https://www.amazon.co.jp/s?k=KATE+リップモンスター+11&tag=lueur0f-22', rakutenKeyword: 'ケイト リップモンスター 11' },
        { name: 'CANMAKE(キャンメイク) ステイオンバームルージュ T07 [バーガンディレッド]', price: '¥660', amazonLink: 'https://www.amazon.co.jp/s?k=CANMAKE+ステイオンバームルージュ+T07&tag=lueur0f-22', rakutenKeyword: 'キャンメイク ステイオンバームルージュ T07' },
        { name: 'NYX(ニックス) ソフトマットリップクリーム [コペンハーゲン]', price: '¥1,320', amazonLink: 'https://www.amazon.co.jp/s?k=NYX+ソフトマットリップクリーム+コペンハーゲン&tag=lueur0f-22', rakutenKeyword: 'NYX ソフトマットリップ コペンハーゲン' }
      ]
    },
    shadow: {
      typeKey: 'cool_winter_shadow',
      title: '冬の透明感を極める、パープル＆シルバーシャドウ',
      description: 'クールで透明感のあるブルベ冬さんには、ダークパープルやネイビー、シルバーパールのパレットがぴったり。目元に鮮明なコントラストと洗練された存在感を演出します。',
      moodImg: '/cool-mood.png',
      bgClass: 'bg-[#f8f2f8]',
      textClass: 'text-[#6b2d6b]',
      btnClass: 'bg-[#8b2fc9] hover:bg-[#6b2d6b]',
      products: [
        { name: 'KATE(ケイト) スモーキーファインアイズ SV-1 [シルバー]', price: '¥1,078', amazonLink: 'https://www.amazon.co.jp/s?k=KATE+スモーキーファインアイズ+SV-1&tag=lueur0f-22', rakutenKeyword: 'ケイト スモーキーファインアイズ SV-1' },
        { name: 'CANMAKE(キャンメイク) シルキースフレアイズ 11 [プラムパープル]', price: '¥880', amazonLink: 'https://www.amazon.co.jp/s?k=CANMAKE+シルキースフレアイズ+11&tag=lueur0f-22', rakutenKeyword: 'キャンメイク シルキースフレアイズ 11' },
        { name: 'rom&nd(ロムアンド) ベターザンパレット 16 [ナイトクール]', price: '¥1,650', amazonLink: 'https://www.amazon.co.jp/s?k=romand+ベターザンパレット+16&tag=lueur0f-22', rakutenKeyword: 'ロムアンド ベターザンパレット 16' }
      ]
    }
  }
};

export const skincareConcerns = [
  {
    id: 'dryness',
    title: '乾燥・保湿',
    icon: '💧',
    description: 'うるおいが続かない、ツッパリ感が気になる方へ。高保湿成分配合のスキンケアをご紹介。',
    products: [
      {
        rank: 1,
        name: 'ミノン アミノモイスト モイストチャージ ローション II',
        reason: 'アミノ酸9種配合で洗顔後すぐにとろりとなじむ高保湿化粧水。@cosmeで5/7の高評価を誇り皮膚科でも推奨される実力派で、敏感肌でも安心の低刺激処方。継続使用でしっとり感が長続きする。',
        amazonLink: 'https://www.amazon.co.jp/s?k=ミノン+アミノモイスト+モイストチャージ+ローション+II&tag=lueur0f-22',
        rakutenLink: 'https://hb.afl.rakuten.co.jp/hgc/521658b7.a1689a38.521658b7.fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2Fミノンアミノモイストモイストチャージローション%2F',
        rakutenKeyword: 'ミノン アミノモイスト モイストチャージローション',
        imageUrl: null
      },
      {
        rank: 2,
        name: 'キュレル 潤浸保湿化粧水 III とてもしっとり',
        reason: 'セラミド機能成分でバリア機能をケアし、乾燥性敏感肌を内側からうるおす化粧水。価格.com化粧水ランキング長期1位を誇る定番中の定番で、皮膚科医監修の信頼性が高い一本。',
        amazonLink: 'https://www.amazon.co.jp/s?k=キュレル+潤浸保湿化粧水+III+とてもしっとり&tag=lueur0f-22',
        rakutenLink: 'https://hb.afl.rakuten.co.jp/hgc/521658b7.a1689a38.521658b7.fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2Fキュレル潤浸保湿化粧水IIIとてもしっとり%2F',
        rakutenKeyword: 'キュレル 潤浸保湿化粧水 III とてもしっとり',
        imageUrl: null
      },
      {
        rank: 3,
        name: 'エトヴォス モイスチャライジングローション',
        reason: 'ヒト型セラミド5種配合でシリーズ累計180万個突破の人気アイテム。2025年リニューアル済みでアレルギーテスト・スティンギングテスト済みの安心設計。敏感肌でもしっとり感が実感できる。',
        amazonLink: 'https://www.amazon.co.jp/s?k=ETVOS+モイスチャライジングローション&tag=lueur0f-22',
        rakutenLink: 'https://hb.afl.rakuten.co.jp/hgc/521658b7.a1689a38.521658b7.fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2Fエトヴォスモイスチャライジングローション%2F',
        rakutenKeyword: 'エトヴォス モイスチャライジングローション',
        imageUrl: null
      }
    ]
  },
  {
    id: 'pores',
    title: '毛穴・テクスチャー',
    icon: '🔬',
    description: '開き毛穴・黒ずみ・ザラつきが気になる方へ。毛穴ケアに特化したアイテムを厳選。',
    products: [
      {
        rank: 1,
        name: 'DUO ザ クレンジングバーム ブラックリペア',
        reason: '@cosmeベストコスメアワード2025上半期 クレンジング部門1位を受賞。AHAを含む7種フルーツエキスが角栓を溶かしてつるん肌へと導く、SNSで話題のバームクレンジング。毛穴レスな仕上がりが実感できる。',
        amazonLink: 'https://www.amazon.co.jp/s?k=DUO+クレンジングバーム+ブラックリペア&tag=lueur0f-22',
        rakutenLink: 'https://hb.afl.rakuten.co.jp/hgc/521658b7.a1689a38.521658b7.fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2FDUOザクレンジングバームブラックリペア%2F',
        rakutenKeyword: 'DUO ザ クレンジングバーム ブラックリペア',
        imageUrl: null
      },
      {
        rank: 2,
        name: 'The Ordinary ナイアシンアミド10% + 亜鉛1%セラム',
        reason: '高濃度ナイアシンアミド10%配合で過剰皮脂にアプローチし毛穴を目立たなくする美容液。2024上半期ベストコスメ プチプラスキンケア部門受賞の実力派で、コスパ抜群の毛穴ケアとして話題。',
        amazonLink: 'https://www.amazon.co.jp/s?k=The+Ordinary+Niacinamide+10%25+Zinc+1%25&tag=lueur0f-22',
        rakutenLink: 'https://hb.afl.rakuten.co.jp/hgc/521658b7.a1689a38.521658b7.fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2FTheOrdinaryナイアシンアミド10%25亜鉛%2F',
        rakutenKeyword: 'The Ordinary ナイアシンアミド10% 亜鉛',
        imageUrl: null
      },
      {
        rank: 3,
        name: 'ソフィーナiP ポア クリアリング ジェル ウォッシュ',
        reason: '置き去り角栓を内側から崩壊し洗浄する集中ケア洗顔料。LIPS「毛穴の開きスキンケア」特集に多数登場する人気アイテムで、週1〜2回の使用で毛穴の詰まりが改善されていく。',
        amazonLink: 'https://www.amazon.co.jp/s?k=ソフィーナ+iP+ポア+クリアリング+ジェル+ウォッシュ&tag=lueur0f-22',
        rakutenLink: 'https://hb.afl.rakuten.co.jp/hgc/521658b7.a1689a38.521658b7.fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2FソフィーナiPポアクリアリングジェルウォッシュ%2F',
        rakutenKeyword: 'ソフィーナiP ポアクリアリングジェルウォッシュ',
        imageUrl: null
      }
    ]
  },
  {
    id: 'sensitive',
    title: '肌荒れ・敏感肌',
    icon: '🌿',
    description: '刺激に敏感な肌、赤み・かゆみが出やすい方へ。低刺激でやさしいスキンケアを紹介。',
    products: [
      {
        rank: 1,
        name: 'キュレル 潤浸保湿 泡洗顔料',
        reason: 'セラミド機能成分配合で洗顔しながらバリア機能をケアできる泡洗顔。敏感肌スキンケアブランドランキング上位の定番ロングセラーで、肌荒れ時も安心して使い続けられる低刺激処方。',
        amazonLink: 'https://www.amazon.co.jp/s?k=キュレル+潤浸保湿+泡洗顔料&tag=lueur0f-22',
        rakutenLink: 'https://hb.afl.rakuten.co.jp/hgc/521658b7.a1689a38.521658b7.fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2Fキュレル潤浸保湿泡洗顔料%2F',
        rakutenKeyword: 'キュレル 潤浸保湿 泡洗顔料',
        imageUrl: null
      },
      {
        rank: 2,
        name: 'ミノン アミノモイスト 薬用アクネケア ローション',
        reason: 'トラネキサム酸・グリチルリチン酸2Kの2種のニキビ予防有効成分を配合した医薬部外品。肌荒れや敏感肌でもニキビケアができる薬用ラインで、荒れやすい肌でも安心して継続使用できる。',
        amazonLink: 'https://www.amazon.co.jp/s?k=ミノン+アミノモイスト+薬用アクネケア+ローション&tag=lueur0f-22',
        rakutenLink: 'https://hb.afl.rakuten.co.jp/hgc/521658b7.a1689a38.521658b7.fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2Fミノンアミノモイスト薬用アクネケアローション%2F',
        rakutenKeyword: 'ミノン アミノモイスト 薬用アクネケアローション',
        imageUrl: null
      },
      {
        rank: 3,
        name: 'VT CICA クリーム',
        reason: 'センテラ4Xコンプレックス（ツボクサエキス）配合のシカクリームで荒れた肌をなだめてうるおいで包む。LIPS保湿クリーム×敏感肌ランキング上位で、韓国コスメ好きの日本女性にも大人気。',
        amazonLink: 'https://www.amazon.co.jp/s?k=VT+CICA+クリーム&tag=lueur0f-22',
        rakutenLink: 'https://hb.afl.rakuten.co.jp/hgc/521658b7.a1689a38.521658b7.fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2FVTCICAクリーム%2F',
        rakutenKeyword: 'VT CICA クリーム',
        imageUrl: null
      }
    ]
  },
  {
    id: 'brightening',
    title: 'くすみ・透明感',
    icon: '✨',
    description: '肌のくすみが気になる、透明感を出したい方へ。美白・ブライトニングアイテムを厳選。',
    products: [
      {
        rank: 1,
        name: 'メラノCC 薬用しみ集中対策 美容液',
        reason: '有効成分ビタミンCを高濃度配合したプチプラ名品。VOCE毛穴ケア美容液ランキング1位で、くすみ・黒ずみにアプローチしSNSで長年バズり続ける定番アイテム。継続使用でワントーン明るい肌へ。',
        amazonLink: 'https://www.amazon.co.jp/s?k=メラノCC+薬用+しみ+集中対策+美容液&tag=lueur0f-22',
        rakutenLink: 'https://hb.afl.rakuten.co.jp/hgc/521658b7.a1689a38.521658b7.fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2FメラノCC薬用しみ集中対策美容液%2F',
        rakutenKeyword: 'メラノCC 薬用しみ集中対策美容液',
        imageUrl: null
      },
      {
        rank: 2,
        name: 'オバジC クリアアドバンスドローション',
        reason: '4種のビタミンCを配合し@cosmeベストコスメアワード2025上半期 化粧水部門を受賞。乾燥によるくすみに集中アプローチし、均一で透明感あふれるトーンへと整える実力派化粧水。',
        amazonLink: 'https://www.amazon.co.jp/s?k=Obagi+C+クリア+アドバンスド+ローション&tag=lueur0f-22',
        rakutenLink: 'https://hb.afl.rakuten.co.jp/hgc/521658b7.a1689a38.521658b7.fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2FオバジCクリアアドバンスドローション%2F',
        rakutenKeyword: 'オバジC クリアアドバンスドローション',
        imageUrl: null
      },
      {
        rank: 3,
        name: '雪肌精 クリア ウェルネス ピュア コンフォート',
        reason: '和漢植物由来成分と麹エキス配合でくすみを一掃し、内側から輝く透明感を呼び覚ます。@cosme 2025上半期ベストコスメに入賞した実力ブランドの注目アイテム。',
        amazonLink: 'https://www.amazon.co.jp/s?k=KOSE+雪肌精+クリア+ウェルネス&tag=lueur0f-22',
        rakutenLink: 'https://hb.afl.rakuten.co.jp/hgc/521658b7.a1689a38.521658b7.fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F雪肌精クリアウェルネスピュアコンフォート%2F',
        rakutenKeyword: '雪肌精 クリア ウェルネス ピュアコンフォート',
        imageUrl: null
      }
    ]
  },
  {
    id: 'acne',
    title: 'ニキビ・吹き出物',
    icon: '🌱',
    description: 'ニキビができやすい、繰り返す吹き出物に悩む方へ。ニキビケアに効果的なアイテムを紹介。',
    products: [
      {
        rank: 1,
        name: 'イハダ 薬用クリア スクラブウォッシュ',
        reason: '殺菌成分とスクラブで毛穴の皮脂・角栓をオフする資生堂の薬用ニキビケア洗顔料。ニキビの原因にしっかりアプローチし、洗い上がりはつるんとなめらか。週2〜3回の集中ケアで肌が整う。',
        amazonLink: 'https://www.amazon.co.jp/s?k=イハダ+薬用クリア+スクラブウォッシュ&tag=lueur0f-22',
        rakutenLink: 'https://hb.afl.rakuten.co.jp/hgc/521658b7.a1689a38.521658b7.fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2Fイハダ薬用クリアスクラブウォッシュ%2F',
        rakutenKeyword: 'イハダ 薬用クリア スクラブウォッシュ',
        imageUrl: null
      },
      {
        rank: 2,
        name: 'オルビス クリアフル ローション しっとりタイプ',
        reason: 'トラネキサム酸＋グリチルリチン酸2K配合で繰り返すニキビに低刺激処方でアプローチ。美的2022年間 読者ベストコスメ ニキビケアランキング1位を受賞した、信頼と実績の化粧水。',
        amazonLink: 'https://www.amazon.co.jp/s?k=ORBIS+クリアフル+ローション+しっとり&tag=lueur0f-22',
        rakutenLink: 'https://hb.afl.rakuten.co.jp/hgc/521658b7.a1689a38.521658b7.fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2Fオルビスクリアフルローション%2F',
        rakutenKeyword: 'オルビス クリアフル ローション',
        imageUrl: null
      },
      {
        rank: 3,
        name: 'ラロッシュポゼ エファクラ DUO＋',
        reason: 'LHA・グリコール酸・ナイアシンアミド配合で皮膚科医が推奨するニキビ跡・色素沈着ケアクリーム。できてしまったニキビ跡を徐々にケアし、クリアな肌へと導く頼れる存在。',
        amazonLink: 'https://www.amazon.co.jp/s?k=La+Roche-Posay+Effaclar+Duo%2B&tag=lueur0f-22',
        rakutenLink: 'https://hb.afl.rakuten.co.jp/hgc/521658b7.a1689a38.521658b7.fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2FラロッシュポゼエファクラDUO%2B%2F',
        rakutenKeyword: 'ラロッシュポゼ エファクラDUO+',
        imageUrl: null
      }
    ]
  }
];

export const youtuberPicks = [
  {
    id: 'mizukoshi-skincare-2026',
    videoId: 'BCvAEyqVBdU',
    youtuberName: '水越みさと (ゲスト：さきめぐ)',
    channel: '登録者数 約90.2万人',
    publishedAt: '2026-03-26',
    videoTitle: '【これは外せない‥！】化粧品開発者さきめぐさんコラボ✨私たちの殿堂入りスキンケア5選。',
    products: [
      {
        rank: 1,
        name: 'リコード ワクチナイザー X',
        price: '¥16,500',
        comment: '40代以降の「肌の崖」を感じた時に。12種のハイスペック成分を独自比率で配合し、毛穴・シワ・たるみなどあらゆる悩みに全方位アプローチする最高峰の美容液。',
        amazonLink: 'https://www.amazon.co.jp/s?k=リコード+ワクチナイザーX&tag=lueur0f-22',
        rakutenLink: 'https://hb.afl.rakuten.co.jp/ichiba/521658b7.a1689a38.521658b8.7fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2Fリコードワクチナイザー%2F',
        rakutenKeyword: 'リコード ワクチナイザー X',
      },
      {
        rank: 2,
        name: 'ロート製薬 オバジ C25セラム ネオ',
        price: '¥11,000',
        comment: '使用した翌朝に肌がパッと明るくなり、くすみが飛ぶ速攻性が凄い。リニューアルでベタつきが抑えられ、毛穴への効果もデータで証明された信頼感抜群のビタミンC美容液。',
        amazonLink: 'https://www.amazon.co.jp/s?k=オバジ+C25セラム+ネオ&tag=lueur0f-22',
        rakutenLink: 'https://hb.afl.rakuten.co.jp/ichiba/521658b7.a1689a38.521658b8.7fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2FオバジC25セラムネオ%2F',
        rakutenKeyword: 'オバジ C25セラム ネオ',
      },
      {
        rank: 3,
        name: 'エピステーム ステムサイエンスアイ',
        price: '¥19,800',
        comment: '眼瞼下垂など目元老化の根本原因「筋肉」にアプローチ。朝夜で使い分けることで目がパッチリ開きやすくなり、未来のたるみ予防にも優秀なハイエンドアイケア。',
        amazonLink: 'https://www.amazon.co.jp/s?k=エピステーム+ステムサイエンスアイ&tag=lueur0f-22',
        rakutenLink: 'https://hb.afl.rakuten.co.jp/ichiba/521658b7.a1689a38.521658b8.7fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2Fエピステームステムサイエンスアイ%2F',
        rakutenKeyword: 'エピステーム ステムサイエンスアイ',
      },
      {
        rank: 4,
        name: 'エスト クラリファイング ジェル ウォッシュ',
        price: '¥4,950',
        comment: '花王の最新技術が詰まったジェル洗顔。洗顔後のメイクノリが劇的に良くなり、肌がツルツル・すべすべに。乾燥させずに不要なものだけを落とす大人のための洗顔料。',
        amazonLink: 'https://www.amazon.co.jp/s?k=エスト+クラリファイング+ジェルウォッシュ&tag=lueur0f-22',
        rakutenLink: 'https://hb.afl.rakuten.co.jp/ichiba/521658b7.a1689a38.521658b8.7fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2FエストクラリファイングジェルウォッシュKOSE%2F',
        rakutenKeyword: 'エスト クラリファイング ジェルウォッシュ',
      },
      {
        rank: 5,
        name: 'コーセー ルシェリ リンクルクロス',
        price: '¥6,380',
        comment: 'ほうれい線や笑いジワなど表情の癖で入りやすいシワに。高濃度有効成分がシワにアプローチし、翌朝のファンデーションの溜まりが気にならなくなる愛用美容液。',
        amazonLink: 'https://www.amazon.co.jp/s?k=コーセー+ルシェリ+リンクルクロス&tag=lueur0f-22',
        rakutenLink: 'https://hb.afl.rakuten.co.jp/ichiba/521658b7.a1689a38.521658b8.7fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2FコーセールシェリリンクルクロスKOSE%2F',
        rakutenKeyword: 'コーセー ルシェリ リンクルクロス',
      },
    ],
  },
  {
    id: 'hiro-beauty-spring-2026',
    videoId: 'xDSCb2vuQWs',
    youtuberName: 'HIRO BEAUTY CHANNEL (小田切ヒロ)',
    channel: '登録者数 約138万人',
    publishedAt: '2026-03-01',
    videoTitle: '【マストバイ】運気爆上げ！新生活で買うべき最新コスメ決定版！小田切ヒロが教える、人生を豊かにする春の買い足し名品🤍',
    products: [
      {
        rank: 1,
        name: 'ディオール ディオールスキン フォーエヴァー スキン グロウ',
        price: '¥7,700',
        comment: '「肌が綺麗だね」と褒められる、内側から発光するような極上のツヤ肌へ。新生活の「名刺」代わりになるファンデーション。',
        amazonLink: 'https://www.amazon.co.jp/s?k=ディオール+スキン+フォーエヴァー+スキングロウ&tag=lueur0f-22',
        rakutenLink: 'https://hb.afl.rakuten.co.jp/ichiba/521658b7.a1689a38.521658b8.7fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2Fディオールスキンフォーエヴァースキングロウ%2F',
        rakutenKeyword: 'ディオール スキン フォーエヴァー スキン グロウ',
      },
      {
        rank: 2,
        name: 'クレ・ド・ポー ボーテ プードルトランスパランn',
        price: '¥7,150',
        comment: '洗練された清潔感と品格を纏える「お守りパウダー」。毛穴を抑え、一瞬で格上の肌に仕立ててくれる待望のミニサイズ。',
        amazonLink: 'https://www.amazon.co.jp/s?k=クレドポーボーテ+プードルトランスパラン&tag=lueur0f-22',
        rakutenLink: 'https://hb.afl.rakuten.co.jp/ichiba/521658b7.a1689a38.521658b8.7fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2Fクレドポーボーテプードルトランスパラン%2F',
        rakutenKeyword: 'クレドポーボーテ プードルトランスパラン',
      },
      {
        rank: 3,
        name: 'エスティ ローダー ダブル ウェア ステイ イン プレイス メイクアップ',
        price: '¥7,150',
        comment: '30年ぶりのリニューアル。コンシーラー不要のハイカバーでありながら、透明感とキメの細かさを一日中キープ。',
        amazonLink: 'https://www.amazon.co.jp/s?k=エスティローダー+ダブルウェア&tag=lueur0f-22',
        rakutenLink: 'https://hb.afl.rakuten.co.jp/ichiba/521658b7.a1689a38.521658b8.7fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2Fエスティローダーダブルウェア%2F',
        rakutenKeyword: 'エスティローダー ダブルウェア',
      },
      {
        rank: 4,
        name: 'ルナソル アイカラーレーション N 17',
        price: '¥6,820',
        comment: 'ベージュパレットの「ザ・王道」。これ一つで立体感、品格、生命力が完結。どんなシーンでも好印象を与える名品。',
        amazonLink: 'https://www.amazon.co.jp/s?k=ルナソル+アイカラーレーション+17&tag=lueur0f-22',
        rakutenLink: 'https://hb.afl.rakuten.co.jp/ichiba/521658b7.a1689a38.521658b8.7fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2Fルナソルアイカラーレーション17%2F',
        rakutenKeyword: 'ルナソル アイカラーレーション 17',
      },
      {
        rank: 5,
        name: 'ディオール アディクト リップ グロス 077',
        price: '¥4,620',
        comment: 'サーモンピンクにゴールドパールが輝く縁起の良いカラー。唇を3Dに見せ、運気上昇アイテムとして話題。',
        amazonLink: 'https://www.amazon.co.jp/s?k=ディオール+アディクト+リップグロス+077&tag=lueur0f-22',
        rakutenLink: 'https://hb.afl.rakuten.co.jp/ichiba/521658b7.a1689a38.521658b8.7fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2Fディオールアディクトリップグロス077%2F',
        rakutenKeyword: 'ディオール アディクト リップグロス 077',
      },
    ],
  },
  {
    id: "shika-20260321",
    youtuberName: "鹿の間",
    channel: "登録者数80.6万人",
    videoId: "tzFQ6kZIZgI",
    videoTitle: "【🔥超厳選🖐️】高いけど、買ってよかったデパコス全部紹介❤️【買って損なし】",
    publishedAt: "2026-03-21",
    products: [
      {
        rank: 1,
        name: "シャネル ルージュ デュオ ウルトラ トゥニュ 57 ダーリン ピンク",
        price: "¥6,270",
        comment: "マットカラーと透明グロスがセット。一度塗って乾かすとペイントのように強力に密着し、とにかく落ちません。健康的で華やかな唇を演出してくれます。",
        amazonLink: "https://www.amazon.co.jp/s?k=シャネル+ルージュデュオウルトラトゥニュ+57&tag=lueur0f-22",
        rakutenLink: "https://hb.afl.rakuten.co.jp/hgc/521658b7.a1689a38.521658b7.fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2Fシャネル+ルージュデュオウルトラトゥニュ57%2F",
        rakutenKeyword: "シャネル ルージュ デュオ ウルトラ トゥニュ 57",
        imageUrl: 'https://thumbnail.image.rakuten.co.jp/@0_mall/cavatina/cabinet/cosme-01/cosme-01/cosme-030.jpg?_ex=128x128'
      },
      {
        rank: 2,
        name: "スナイデルビューティ アイデザイナー 02 Dress up Pink",
        price: "¥6,600",
        comment: "華やかなローズピンクとクールなブルーニュアンスが混ざった配色。発色が美しく、ラメの輝きが圧倒的に綺麗です。妖精のような煌めきを与えてくれるアイシャドウです。",
        amazonLink: "https://www.amazon.co.jp/s?k=スナイデルビューティ+アイデザイナー+02&tag=lueur0f-22",
        rakutenLink: "https://hb.afl.rakuten.co.jp/hgc/521658b7.a1689a38.521658b7.fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2Fスナイデルビューティアイデザイナー02%2F",
        rakutenKeyword: "スナイデルビューティ アイデザイナー 02",
        imageUrl: 'https://thumbnail.image.rakuten.co.jp/@0_mall/retailer/cabinet/jap/07953870/jap-14409-01.jpg?_ex=128x128'
      },
      {
        rank: 3,
        name: "クレ・ド・ポー ボーテ ヴォワールコレクチュールn",
        price: "¥7,150",
        comment: "人生で一番リピートしている下地です。保湿力が高いのにベタつかず、毛穴や赤みを自然にカバーして肌を滑らかに整えてくれます。",
        amazonLink: "https://www.amazon.co.jp/s?k=クレドポーボーテ+ヴォワールコレクチュール&tag=lueur0f-22",
        rakutenLink: "https://hb.afl.rakuten.co.jp/hgc/521658b7.a1689a38.521658b7.fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2Fクレドポーボーテヴォワールコレクチュール%2F",
        rakutenKeyword: "クレドポーボーテ ヴォワールコレクチュール",
        imageUrl: 'https://thumbnail.image.rakuten.co.jp/@0_mall/treasurebeauty/cabinet/item/569/56910588_1.jpg?_ex=128x128'
      },
      {
        rank: 4,
        name: "資生堂 エッセンス スキングロウ プライマー",
        price: "¥5,280",
        comment: "乾燥肌にとってのオアシスのような下地。美容液成分が豊富で、肌が呼吸しているような心地よさです。ファンデーションのツヤを最大限に引き出してくれます。",
        amazonLink: "https://www.amazon.co.jp/s?k=資生堂+エッセンス+スキングロウ+プライマー&tag=lueur0f-22",
        rakutenLink: "https://hb.afl.rakuten.co.jp/hgc/521658b7.a1689a38.521658b7.fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F資生堂エッセンススキングロウプライマー%2F",
        rakutenKeyword: "資生堂 エッセンス スキングロウ プライマー",
        imageUrl: 'https://thumbnail.image.rakuten.co.jp/@0_mall/brandshiseido/cabinet/prd/smu0023/smu0023_nl2601.jpg?_ex=128x128'
      },
      {
        rank: 5,
        name: "ディオール ディオールスキン ルージュ ブラッシュ 212 チュチュ ホログラフィック",
        price: "¥7,480",
        comment: "絶妙なブルーピンクにゴールドパールが入っており、透明感のある頬に。ハイライトなしでも発光しているようなツヤが出て、写真映えも抜群です。",
        amazonLink: "https://www.amazon.co.jp/s?k=ディオール+ルージュブラッシュ+212&tag=lueur0f-22",
        rakutenLink: "https://hb.afl.rakuten.co.jp/hgc/521658b7.a1689a38.521658b7.fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2Fディオールルージュブラッシュ212%2F",
        rakutenKeyword: "ディオール ルージュ ブラッシュ 212",
        imageUrl: 'https://thumbnail.image.rakuten.co.jp/@0_mall/hillslife/cabinet/10601378/imgrc0106404783.jpg?_ex=128x128'
      }
    ]
  }
];
