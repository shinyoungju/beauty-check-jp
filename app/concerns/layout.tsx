import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.lueur-beauty.com/concerns',
  },
}

export default function ConcernsLayout({ children }: { children: React.ReactNode }) {
  return children
}
