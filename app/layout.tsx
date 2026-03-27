import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <GoogleAnalytics gaId="G-H4K6P3DLXS" />
      </body>
    </html>
  );
}
