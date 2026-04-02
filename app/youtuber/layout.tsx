import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.lueur-beauty.com/youtuber',
  },
}

export default function YoutuberLayout({ children }: { children: React.ReactNode }) {
  return children
}
