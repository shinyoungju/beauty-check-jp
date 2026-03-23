// app/api/rakuten/batch/route.ts
import { NextRequest, NextResponse } from 'next/server';
import https from 'node:https';

const APP_ID = process.env.RAKUTEN_APP_ID ?? '';
const AFFILIATE_ID = process.env.RAKUTEN_AFFILIATE_ID ?? '';

interface RakutenResult {
  imageUrl: string | null;
  affiliateUrl: string | null;
}

function fetchOne(keyword: string): Promise<RakutenResult> {
  return new Promise((resolve) => {
    const params = new URLSearchParams({
      applicationId: APP_ID,
      affiliateId: AFFILIATE_ID,
      keyword,
      hits: '1',
      imageFlag: '1',
      format: 'json',
    });

    const path = `/services/api/IchibaItem/Search/20220601?${params}`;

    const req = https.request(
      {
        hostname: 'app.rakuten.co.jp',
        path,
        method: 'GET',
        headers: {
          Referer: 'https://www.lueur-beauty.com',
        },
      },
      (res) => {
        let body = '';
        res.on('data', (chunk) => (body += chunk));
        res.on('end', () => {
          if (res.statusCode !== 200) {
            console.error('[Rakuten batch] HTTP error:', res.statusCode, keyword, '| body:', body);
            resolve({ imageUrl: null, affiliateUrl: null });
            return;
          }
          try {
            const data = JSON.parse(body);
            const item = data.Items?.[0]?.Item;
            const raw = item?.mediumImageUrls?.[0];
            const imageUrl = typeof raw === 'string' ? raw : (raw?.imageUrl ?? null);
            const affiliateUrl = item?.affiliateUrl ?? null;
            console.log('[Rakuten batch] keyword:', keyword, '| imageUrl:', imageUrl);
            resolve({ imageUrl, affiliateUrl });
          } catch (e) {
            console.error('[Rakuten batch] parse error:', e, keyword);
            resolve({ imageUrl: null, affiliateUrl: null });
          }
        });
      }
    );

    req.on('error', (e) => {
      console.error('[Rakuten batch] request error:', e, keyword);
      resolve({ imageUrl: null, affiliateUrl: null });
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
