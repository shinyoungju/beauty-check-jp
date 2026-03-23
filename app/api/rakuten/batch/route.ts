// app/api/rakuten/batch/route.ts
import { NextRequest, NextResponse } from 'next/server';
import https from 'node:https';

const cache = new Map<string, {
  imageUrl: string | null;
  affiliateUrl: string | null;
  price: string | null;
  cachedAt: number;
}>();
const CACHE_TTL = 1000 * 60 * 60 * 6; // 6時間

const APP_ID = process.env.RAKUTEN_APP_ID ?? '';
const ACCESS_KEY = process.env.RAKUTEN_ACCESS_KEY ?? '';
const AFFILIATE_ID = process.env.RAKUTEN_AFFILIATE_ID ?? '';

interface RakutenResult {
  imageUrl: string | null;
  affiliateUrl: string | null;
  price: string | null;
}

function fetchOne(keyword: string): Promise<RakutenResult> {
  return new Promise((resolve) => {
    const cached = cache.get(keyword);
    if (cached && Date.now() - cached.cachedAt < CACHE_TTL) {
      return resolve({ imageUrl: cached.imageUrl, affiliateUrl: cached.affiliateUrl, price: cached.price });
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

    console.log('[Rakuten batch] APP_ID:', APP_ID, '| ACCESS_KEY:', ACCESS_KEY?.slice(0, 8), '...');
    const path = `/ichibams/api/IchibaItem/Search/20220601?${params}`;

    const req = https.request(
      {
        hostname: 'openapi.rakuten.co.jp',
        path,
        method: 'GET',
        headers: {
          referer: 'https://lueur-beauty.com/',
          origin: 'https://lueur-beauty.com',
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        },
      },
      (res) => {
        let body = '';
        res.on('data', (chunk) => (body += chunk));
        res.on('end', () => {
          if (res.statusCode !== 200) {
            console.error('[Rakuten batch] HTTP error:', res.statusCode, keyword, '| body:', body);
            resolve({ imageUrl: null, affiliateUrl: null, price: null });
            return;
          }
          try {
            const data = JSON.parse(body);
            const item = data.Items?.[0]?.Item;
            const raw = item?.mediumImageUrls?.[0];
            const imageUrl = typeof raw === 'string' ? raw : (raw?.imageUrl ?? null);
            const affiliateUrl = item?.affiliateUrl ?? null;
            const priceNum = item?.itemPrice ?? null;
            const price = priceNum ? `¥${Number(priceNum).toLocaleString('ja-JP')}` : null;
            console.log('[Rakuten batch] keyword:', keyword, '| imageUrl:', imageUrl);
            cache.set(keyword, { imageUrl, affiliateUrl, price, cachedAt: Date.now() });
            resolve({ imageUrl, affiliateUrl, price });
          } catch (e) {
            console.error('[Rakuten batch] parse error:', e, keyword);
            resolve({ imageUrl: null, affiliateUrl: null, price: null });
          }
        });
      }
    );

    req.on('error', (e) => {
      console.error('[Rakuten batch] request error:', e, keyword);
      resolve({ imageUrl: null, affiliateUrl: null, price: null });
    });

    req.end();
  });
}

export async function GET(req: NextRequest) {
  const keywordsParam = req.nextUrl.searchParams.get('keywords');
  if (!keywordsParam) {
    return NextResponse.json({ error: 'keywords is required' }, { status: 400 });
  }

  const keywords = keywordsParam.split(',').map(k => k.trim()).filter(Boolean);
  const results: RakutenResult[] = [];

  // レート制限対策として1200ms間隔で順次リクエスト
  for (let i = 0; i < keywords.length; i++) {
    if (i > 0) await new Promise(r => setTimeout(r, 1200));
    results.push(await fetchOne(keywords[i]));
  }

  return NextResponse.json({ results });
}
