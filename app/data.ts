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
        { name: 'KATE(ケイト) リップモンスター 03 [陽炎]', amazonLink: 'https://www.amazon.co.jp/s?k=KATE+リップモンスター+03&tag=lueur0f-22', rakutenKeyword: 'ケイト リップモンスター 03' },
        { name: 'CANMAKE(キャンメイク) ステイオンバームルージュ T13 [コーラルオレンジ]', amazonLink: 'https://www.amazon.co.jp/s?k=CANMAKE+ステイオンバームルージュ+T13&tag=lueur0f-22', rakutenKeyword: 'キャンメイク ステイオンバームルージュ T13' },
        { name: 'rom&nd(ロムアンド) ジューシーラスティングティント 01 [Mystic Nude]', amazonLink: 'https://www.amazon.co.jp/s?k=romand+ジューシーラスティングティント+01&tag=lueur0f-22', rakutenKeyword: 'ロムアンド ジューシーラスティングティント 01' }
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
        { name: 'EXCEL(エクセル) スキニーリッチシャドウ SR01 [シャンパンゴールド]', amazonLink: 'https://www.amazon.co.jp/s?k=EXCEL+スキニーリッチシャドウ+SR01&tag=lueur0f-22', rakutenKeyword: 'エクセル スキニーリッチシャドウ SR01' },
        { name: 'CANMAKE(キャンメイク) パーフェクトスタイリストアイズ 17 [アーストーン]', amazonLink: 'https://www.amazon.co.jp/s?k=CANMAKE+パーフェクトスタイリストアイズ+17&tag=lueur0f-22', rakutenKeyword: 'キャンメイク パーフェクトスタイリストアイズ 17' },
        { name: 'rom&nd(ロムアンド) ベターザンパレット 05 [ピーチコーラル]', amazonLink: 'https://www.amazon.co.jp/s?k=romand+ベターザンパレット+05&tag=lueur0f-22', rakutenKeyword: 'ロムアンド ベターザンパレット 05' }
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
        { name: 'KATE(ケイト) リップモンスター 08 [スモーキーテラコッタ]', amazonLink: 'https://www.amazon.co.jp/s?k=KATE+リップモンスター+08&tag=lueur0f-22', rakutenKeyword: 'ケイト リップモンスター 08' },
        { name: 'CANMAKE(キャンメイク) ステイオンバームルージュ T19 [ブリックレッド]', amazonLink: 'https://www.amazon.co.jp/s?k=CANMAKE+ステイオンバームルージュ+T19&tag=lueur0f-22', rakutenKeyword: 'キャンメイク ステイオンバームルージュ T19' },
        { name: 'CEZANNE(セザンヌ) ラスティングリップカラーN 12 [テラコッタブラウン]', amazonLink: 'https://www.amazon.co.jp/s?k=CEZANNE+ラスティングリップカラーN+12&tag=lueur0f-22', rakutenKeyword: 'セザンヌ ラスティングリップカラー 12' }
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
        { name: 'EXCEL(エクセル) スキニーリッチシャドウ SR05 [テラコッタブラウン]', amazonLink: 'https://www.amazon.co.jp/s?k=EXCEL+スキニーリッチシャドウ+SR05&tag=lueur0f-22', rakutenKeyword: 'エクセル スキニーリッチシャドウ SR05' },
        { name: 'KATE(ケイト) デザイニングブラウンアイズ BR-1', amazonLink: 'https://www.amazon.co.jp/s?k=KATE+デザイニングブラウンアイズ+BR-1&tag=lueur0f-22', rakutenKeyword: 'ケイト デザイニングブラウンアイズ BR-1' },
        { name: 'CANMAKE(キャンメイク) パーフェクトスタイリストアイズ 16 [テラコッタブラウン]', amazonLink: 'https://www.amazon.co.jp/s?k=CANMAKE+パーフェクトスタイリストアイズ+16&tag=lueur0f-22', rakutenKeyword: 'キャンメイク パーフェクトスタイリストアイズ 16' }
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
        { name: 'KATE(ケイト) リップモンスター 07 [ラスボス]', amazonLink: 'https://www.amazon.co.jp/s?k=KATE+リップモンスター+07&tag=lueur0f-22', rakutenKeyword: 'ケイト リップモンスター 07' },
        { name: 'CANMAKE(キャンメイク) ステイオンバームルージュ T10 [スウィートハニーピンク]', amazonLink: 'https://www.amazon.co.jp/s?k=CANMAKE+ステイオンバームルージュ+T10&tag=lueur0f-22', rakutenKeyword: 'キャンメイク ステイオンバームルージュ T10' },
        { name: 'rom&nd(ロムアンド) ジューシーラスティングティント 22 [ローズモーヴ]', amazonLink: 'https://www.amazon.co.jp/s?k=romand+ジューシーラスティングティント+22&tag=lueur0f-22', rakutenKeyword: 'ロムアンド ジューシーラスティングティント 22' }
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
        { name: 'CANMAKE(キャンメイク) シルキースフレアイズ 06 [ラベンダーピンク]', amazonLink: 'https://www.amazon.co.jp/s?k=CANMAKE+シルキースフレアイズ+06&tag=lueur0f-22', rakutenKeyword: 'キャンメイク シルキースフレアイズ 06' },
        { name: 'rom&nd(ロムアンド) ベターザンパレット 10 [Rosé Vintage]', amazonLink: 'https://www.amazon.co.jp/s?k=romand+ベターザンパレット+10&tag=lueur0f-22', rakutenKeyword: 'ロムアンド ベターザンパレット 10' },
        { name: 'CEZANNE(セザンヌ) トーンアップアイシャドウ 06 [ラベンダー]', amazonLink: 'https://www.amazon.co.jp/s?k=CEZANNE+トーンアップアイシャドウ+06&tag=lueur0f-22', rakutenKeyword: 'セザンヌ トーンアップアイシャドウ 06' }
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
        { name: 'KATE(ケイト) リップモンスター 11 [深夜のインプット]', amazonLink: 'https://www.amazon.co.jp/s?k=KATE+リップモンスター+11&tag=lueur0f-22', rakutenKeyword: 'ケイト リップモンスター 11' },
        { name: 'CANMAKE(キャンメイク) ステイオンバームルージュ T07 [バーガンディレッド]', amazonLink: 'https://www.amazon.co.jp/s?k=CANMAKE+ステイオンバームルージュ+T07&tag=lueur0f-22', rakutenKeyword: 'キャンメイク ステイオンバームルージュ T07' },
        { name: 'NYX(ニックス) ソフトマットリップクリーム [コペンハーゲン]', amazonLink: 'https://www.amazon.co.jp/s?k=NYX+ソフトマットリップクリーム+コペンハーゲン&tag=lueur0f-22', rakutenKeyword: 'NYX ソフトマットリップ コペンハーゲン' }
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
        { name: 'KATE(ケイト) スモーキーファインアイズ SV-1 [シルバー]', amazonLink: 'https://www.amazon.co.jp/s?k=KATE+スモーキーファインアイズ+SV-1&tag=lueur0f-22', rakutenKeyword: 'ケイト スモーキーファインアイズ SV-1' },
        { name: 'CANMAKE(キャンメイク) シルキースフレアイズ 11 [プラムパープル]', amazonLink: 'https://www.amazon.co.jp/s?k=CANMAKE+シルキースフレアイズ+11&tag=lueur0f-22', rakutenKeyword: 'キャンメイク シルキースフレアイズ 11' },
        { name: 'rom&nd(ロムアンド) ベターザンパレット 16 [ナイトクール]', amazonLink: 'https://www.amazon.co.jp/s?k=romand+ベターザンパレット+16&tag=lueur0f-22', rakutenKeyword: 'ロムアンド ベターザンパレット 16' }
      ]
    }
  }
};

export const youtuberPicks = [
  {
    id: "momochi-20260321",
    youtuberName: "ももちMomochi / 牛江桃子",
    channel: "登録者数43.4万人",
    videoId: "BcDeKH8BEFw",
    videoTitle: "【イエベ大優勝】大人っぽ多幸感🌼🪽ふんわり透明感な春のコーラルメイク🍑✧⠜⁎꙳",
    publishedAt: "2026-03-21",
    products: [
      {
        rank: 1,
        name: "セザンヌ UVウルトラフィットベースEX 02 ピーチピンク",
        price: "¥748",
        comment: "血色感をアップしてくれるカラーで、伸びが良くツヤも出ます。毛穴もしっかり埋まって肌をふわっと見せてくれる「優勝」下地です。",
        amazonLink: "https://www.amazon.co.jp/s?k=セザンヌ+UVウルトラフィットベースEX+02&tag=lueur0f-22",
        rakutenLink: "https://hb.afl.rakuten.co.jp/hgc/521658b7.a1689a38.521658b7.fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2FセザンヌUVウルトラフィットベースEX02%2F"
      },
      {
        rank: 2,
        name: "セザンヌ ミネラルカバーBBクリーム 00 & 10",
        price: "¥748",
        comment: "石鹸落ちする肌に優しいBBクリーム。00番と10番を混ぜて使うと自分の肌色にぴったり合い、少量でもハイカバーで毛穴の埋まり具合が凄いです。",
        amazonLink: "https://www.amazon.co.jp/s?k=セザンヌ+ミネラルカバーBBクリーム&tag=lueur0f-22",
        rakutenLink: "https://hb.afl.rakuten.co.jp/hgc/521658b7.a1689a38.521658b7.fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2FセザンヌミネラルカバーBBクリーム%2F"
      },
      {
        rank: 3,
        name: "キャンメイク パウダーチークス P03",
        price: "¥660",
        comment: "この春に向けて絶対に買った方がいいアイテム！ハイライトを塗っていない状態でもツヤ感が凄く、多幸感のある印象を作ってくれます。",
        amazonLink: "https://www.amazon.co.jp/s?k=キャンメイク+パウダーチークス+P03&tag=lueur0f-22",
        rakutenLink: "https://hb.afl.rakuten.co.jp/hgc/521658b7.a1689a38.521658b7.fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2FキャンメイクパウダーチークスP03%2F"
      },
      {
        rank: 4,
        name: "セザンヌ フェイスアイパレット 01",
        price: "¥660",
        comment: "パレット左側のチークカラーをアイホール全体と涙袋に塗ると統一感が出て可愛いです。これ一つでアイメイクが完成するほど優秀なパレットです。",
        amazonLink: "https://www.amazon.co.jp/s?k=セザンヌ+フェイスアイパレット+01&tag=lueur0f-22",
        rakutenLink: "https://hb.afl.rakuten.co.jp/hgc/521658b7.a1689a38.521658b7.fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2Fセザンヌフェイスアイパレット01%2F"
      },
      {
        rank: 5,
        name: "キャンメイク むちぷるティント 01",
        price: "¥770",
        comment: "ヌーディーな大人多幸感カラー。唇にむっちりと密着し、透け感があるので濃くなりすぎず、デイリー使いにぴったりです。",
        amazonLink: "https://www.amazon.co.jp/s?k=キャンメイク+むちぷるティント+01&tag=lueur0f-22",
        rakutenLink: "https://hb.afl.rakuten.co.jp/hgc/521658b7.a1689a38.521658b7.fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2Fキャンメイクむちぷるティント01%2F"
      }
    ]
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
        rakutenLink: "https://hb.afl.rakuten.co.jp/hgc/521658b7.a1689a38.521658b7.fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2Fシャネル+ルージュデュオウルトラトゥニュ57%2F"
      },
      {
        rank: 2,
        name: "スナイデルビューティ アイデザイナー 02 Dress up Pink",
        price: "¥6,600",
        comment: "華やかなローズピンクとクールなブルーニュアンスが混ざった配色。発色が美しく、ラメの輝きが圧倒的に綺麗です。妖精のような煌めきを与えてくれるアイシャドウです。",
        amazonLink: "https://www.amazon.co.jp/s?k=スナイデルビューティ+アイデザイナー+02&tag=lueur0f-22",
        rakutenLink: "https://hb.afl.rakuten.co.jp/hgc/521658b7.a1689a38.521658b7.fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2Fスナイデルビューティアイデザイナー02%2F"
      },
      {
        rank: 3,
        name: "クレ・ド・ポー ボーテ ヴォワールコレクチュールn",
        price: "¥7,150",
        comment: "人生で一番リピートしている下地です。保湿力が高いのにベタつかず、毛穴や赤みを自然にカバーして肌を滑らかに整えてくれます。",
        amazonLink: "https://www.amazon.co.jp/s?k=クレドポーボーテ+ヴォワールコレクチュール&tag=lueur0f-22",
        rakutenLink: "https://hb.afl.rakuten.co.jp/hgc/521658b7.a1689a38.521658b7.fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2Fクレドポーボーテヴォワールコレクチュール%2F"
      },
      {
        rank: 4,
        name: "資生堂 エッセンス スキングロウ プライマー",
        price: "¥5,280",
        comment: "乾燥肌にとってのオアシスのような下地。美容液成分が豊富で、肌が呼吸しているような心地よさです。ファンデーションのツヤを最大限に引き出してくれます。",
        amazonLink: "https://www.amazon.co.jp/s?k=資生堂+エッセンス+スキングロウ+プライマー&tag=lueur0f-22",
        rakutenLink: "https://hb.afl.rakuten.co.jp/hgc/521658b7.a1689a38.521658b7.fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F資生堂エッセンススキングロウプライマー%2F"
      },
      {
        rank: 5,
        name: "ディオール ディオールスキン ルージュ ブラッシュ 212 チュチュ ホログラフィック",
        price: "¥7,480",
        comment: "絶妙なブルーピンクにゴールドパールが入っており、透明感のある頬に。ハイライトなしでも発光しているようなツヤが出て、写真映えも抜群です。",
        amazonLink: "https://www.amazon.co.jp/s?k=ディオール+ルージュブラッシュ+212&tag=lueur0f-22",
        rakutenLink: "https://hb.afl.rakuten.co.jp/hgc/521658b7.a1689a38.521658b7.fbb4952/?pc=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2Fディオールルージュブラッシュ212%2F"
      }
    ]
  }
];
