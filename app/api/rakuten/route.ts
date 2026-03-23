// app/api/rakuten/route.ts
import { NextRequest, NextResponse } from 'next/server';

const APP_ID = process.env.RAKUTEN_APP_ID ?? '';
const ACCESS_KEY = process.env.RAKUTEN_ACCESS_KEY ?? '';
const AFFILIATE_ID = process.env.RAKUTEN_AFFILIATE_ID ?? '';

export async function GET(req: NextRequest) {
  const keyword = req.nextUrl.searchParams.get('keyword');
  if (!keyword) {
    return NextResponse.json({ error: 'keyword is required' }, { status: 400 });
  }

  const params = new URLSearchParams({
    applicationId: APP_ID,
    accessKey: ACCESS_KEY,
    affiliateId: AFFILIATE_ID,
    keyword,
    hits: '1',
    imageFlag: '1',
    format: 'json',
  });

  const url = `https://openapi.rakuten.co.jp/ichibams/api/IchibaItem/Search/20220601?${params}`;

  try {
    const res = await fetch(url, {
      cache: 'no-store',
      headers: { Referer: 'https://lueur-beauty.com' },
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
    const raw = item?.mediumImageUrls?.[0];
    const imageUrl = typeof raw === 'string' ? raw : (raw?.imageUrl ?? null);

    console.log('[Rakuten] keyword:', keyword, '| imageUrl:', imageUrl);
    return NextResponse.json({ imageUrl });
  } catch (e) {
    console.error('[Rakuten] fetch error:', e);
    return NextResponse.json({ error: String(e), imageUrl: null }, { status: 500 });
  }
}
