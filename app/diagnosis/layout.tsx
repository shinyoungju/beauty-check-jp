import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.lueur-beauty.com/diagnosis',
  },
}

export default function DiagnosisLayout({ children }: { children: React.ReactNode }) {
  return children
}
