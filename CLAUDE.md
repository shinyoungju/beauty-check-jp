# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test framework is configured.

## Architecture

This is a **Next.js App Router** application (Japanese-language beauty color personality quiz). It's entirely client-side rendered — there are no API routes or server components beyond the root layout.

### Flow

Menu → Quiz → Result (3 UI states controlled by `mode` in `app/page.tsx`)

1. User picks a quiz type (`lip` or `shadow`)
2. `QuizEngine` asks 6 questions, tallying warm/cool scores
3. Result page shows mood image + product recommendations fetched from Rakuten API

### Key Files

- [app/page.tsx](app/page.tsx) — Main client component; owns all state (`mode`, `activeQuizType`, `resultData`, `rakutenImages`)
- [app/quiz-engine.tsx](app/quiz-engine.tsx) — Sequential question display, score tallying, emits `onFinish({ type: 'warm' | 'cool' })`
- [app/data.ts](app/data.ts) — All question content and product recommendation data, structured as `recommendations[warm|cool][lip|shadow]`

### Rakuten API Integration

Product images are fetched via server-side proxy `/api/rakuten/route.ts`. Requires env vars (no `NEXT_PUBLIC_` prefix — server-side only):

```
RAKUTEN_APP_ID=...
RAKUTEN_AFFILIATE_ID=...
```

Falls back to 💄 emoji if the API call fails.

**API 엔드포인트**: `IchibaItem/Search/20220601`

**필수 파라미터**:
- `applicationId` — App ID (콘솔의 Application ID)
- `keyword` — 검색어

**권장 파라미터**:
- `affiliateId` — 어필리에이트 수익 추적
- `hits=1` — 이미지용으로 1개만
- `imageFlag=1` — 이미지 있는 상품만
- `sort=-reviewCount` — 인기 상품 우선
- `genreId=100371` — 뷰티·코스메 카테고리 한정

**응답 사용 필드**: `mediumImageUrls[0].imageUrl`

### Styling

Tailwind CSS v4 with utility classes only. Each warm/cool recommendation in `data.ts` carries its own Tailwind color classes (`bgClass`, `textClass`, `btnClass`) for themed result pages. Mobile-first layout constrained to `max-w-md`.

## 언어 설정 (최우선 규칙)
- 반드시 한국어로만 응답할 것
- 지시문이 일본어나 영어로 와도 한국어로 응답할 것
- 코드 주석은 일본어 유지 (사이트가 일본어이므로)

## 프로젝트 개요
- 일본어 뷰티 퍼스널 컬러 진단 사이트 (Lueur / リュール)
- Amazon 어필리에이트 태그: lueur0f-22
- 라쿠텐 Application ID: 7a23a89f-cc10-4817-bb25-051c2afe527b
- 라쿠텐 Affiliate ID: 521658b7.a1689a38.521658b7.fbb4952

## 대답
- 응답,대답 시 이해하기 쉽게 간단한 설명을 추가해