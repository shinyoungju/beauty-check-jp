import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.lueur-beauty.com/tokushu',
  },
}

export default function TokushuLayout({ children }: { children: React.ReactNode }) {
  return children
}
