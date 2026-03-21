// app/api/rakuten/route.ts
import { NextRequest, NextResponse } from 'next/server';

const APP_ID = process.env.RAKUTEN_APP_ID ?? '7a23a89f-cc10-4817-bb25-051c2afe527b';
const AFFILIATE_ID = process.env.RAKUTEN_AFFILIATE_ID ?? '521658b7.a1689a38.521658b7.fbb4952';

export async function GET(req: NextRequest) {
  const keyword = req.nextUrl.searchParams.get('keyword');
  if (!keyword) {
    return NextResponse.json({ error: 'keyword is required' }, { status: 400 });
  }

  console.log('[Rakuten] using applicationId:', APP_ID);
  const url = `https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601?applicationId=${APP_ID}&affiliateId=${AFFILIATE_ID}&keyword=${encodeURIComponent(keyword)}&hits=1&format=json&imageFlag=1&sort=-reviewCount&genreId=100371`;

  try {
    const res = await fetch(url, {
      cache: 'no-store',
      headers: {
        'Referer': 'https://beauty-check-jp.vercel.app',
      },
    });
    const text = await res.text();

    if (!res.ok) {
      console.error('[Rakuten] HTTP error:', res.status, text);
      return NextResponse.json({ error: `Rakuten API error: ${res.status}`, detail: text }, { status: res.status });
    }

    const data = JSON.parse(text);

    if (data.error) {
      console.error('[Rakuten] API error:', data.error, data.error_description);
      return NextResponse.json({ error: data.error, detail: data.error_description, imageUrl: null });
    }

    const item = data.Items?.[0]?.Item;
    // mediumImageUrls は [{imageUrl: "..."}] または ["..."] の2パターンに対応
    const raw = item?.mediumImageUrls?.[0];
    const imageUrl = typeof raw === 'string' ? raw : (raw?.imageUrl ?? null);

    console.log('[Rakuten] keyword:', keyword, '| imageUrl:', imageUrl, '| total items:', data.count);
    return NextResponse.json({ imageUrl });
  } catch (e) {
    console.error('[Rakuten] fetch error:', e);
    return NextResponse.json({ error: String(e), imageUrl: null }, { status: 500 });
  }
}
