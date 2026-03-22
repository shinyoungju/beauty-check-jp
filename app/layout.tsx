import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lueur | リュール - 韓国コスメ・美容診断サイト",
  description: "あなたのパーソナルカラーを診断して、似合う韓国コスメをご提案します。リップ・アイシャドウ診断であなたに合ったカラーを見つけよう。",
  metadataBase: new URL("https://lueur-beauty.com"),
  openGraph: {
    title: "Lueur | リュール - 韓国コスメ・美容診断サイト",
    description: "あなたのパーソナルカラーを診断して、似合う韓国コスメをご提案します。",
    url: "https://lueur-beauty.com",
    siteName: "Lueur | リュール",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lueur | リュール - 韓国コスメ・美容診断サイト",
    description: "あなたのパーソナルカラーを診断して、似合う韓国コスメをご提案します。",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
