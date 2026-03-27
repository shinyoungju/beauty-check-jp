import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: "Lueur | リュール - あなたに似合うコスメを見つけるビューティーガイド",
  description: "肌悩み・口コミ・診断から、本当に使えるコスメだけをご提案。あなたに似合う一本を、一緒に見つけましょう。",
  metadataBase: new URL("https://lueur-beauty.com"),
  openGraph: {
    title: "Lueur | リュール - あなたに似合うコスメを見つけるビューティーガイド",
    description: "肌悩み・口コミ・診断から、本当に使えるコスメだけをご提案。",
    url: "https://lueur-beauty.com",
    siteName: "Lueur | リュール",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lueur | リュール - あなたに似合うコスメを見つけるビューティーガイド",
    description: "肌悩み・口コミ・診断から、本当に使えるコスメだけをご提案。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} font-sans antialiased`}
      >
        {children}
        <GoogleAnalytics gaId="G-H4K6P3DLXS" />
      </body>
    </html>
  );
}
