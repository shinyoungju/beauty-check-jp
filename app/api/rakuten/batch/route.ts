// app/api/rakuten/batch/route.ts
import { NextRequest, NextResponse } from 'next/server';

// NEXT_PUBLIC_ 変数はサーバー側でも使用可能なため、既存の環境変数をそのまま利用
const APP_ID = process.env.RAKUTEN_APP_ID ?? '';
const ACCESS_KEY = process.env.RAKUTEN_ACCESS_KEY ?? '';
const AFFILIATE_ID = process.env.RAKUTEN_AFFILIATE_ID ?? '';

interface RakutenResult {
  imageUrl: string | null;
  affiliateUrl: string | null;
}

async function fetchOne(keyword: string): Promise<RakutenResult> {
  const params = new URLSearchParams({
    applicationId: APP_ID,
    accessKey: ACCESS_KEY,
    affiliateId: AFFILIATE_ID,
    keyword,
    hits: '1',
    imageFlag: '1',
    format: 'json',
  });

  try {
    const res = await fetch(
      `https://openapi.rakuten.co.jp/ichibams/api/IchibaItem/Search/20220601?${params}`,
      {
        next: { revalidate: 86400 }, // 24時間キャッシュ
        headers: { Referer: 'https://www.lueur-beauty.com' },
      }
    );
    if (!res.ok) {
      const body = await res.text();
      console.error('[Rakuten batch] HTTP error:', res.status, keyword, '| body:', body);
      return { imageUrl: null, affiliateUrl: null };
    }
    const data = await res.json();
    if (data.error) {
      console.error('[Rakuten batch] API error:', data.error, keyword);
      return { imageUrl: null, affiliateUrl: null };
    }
    const item = data.Items?.[0]?.Item;
    const raw = item?.mediumImageUrls?.[0];
    const imageUrl = typeof raw === 'string' ? raw : (raw?.imageUrl ?? null);
    const affiliateUrl = item?.affiliateUrl ?? null;
    console.log('[Rakuten batch] keyword:', keyword, '| imageUrl:', imageUrl);
    return { imageUrl, affiliateUrl };
  } catch (e) {
    console.error('[Rakuten batch] fetch error:', e, keyword);
    return { imageUrl: null, affiliateUrl: null };
  }
}

export async function GET(req: NextRequest) {
  const keywordsParam = req.nextUrl.searchParams.get('keywords');
  if (!keywordsParam) {
    return NextResponse.json({ error: 'keywords is required' }, { status: 400 });
  }

  const keywords = keywordsParam.split(',').map(k => k.trim()).filter(Boolean);
  const results: RakutenResult[] = [];

  // レート制限対策として600ms間隔で順次リクエスト
  for (let i = 0; i < keywords.length; i++) {
    if (i > 0) await new Promise(r => setTimeout(r, 600));
    results.push(await fetchOne(keywords[i]));
  }

  return NextResponse.json({ results });
}
