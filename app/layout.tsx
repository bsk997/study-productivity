import React from "react"
import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR } from "next/font/google";

import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "StudyFlow - 공부 & 생산성 팁",
  description:
    "실천 가능한 공부 팁과 생산성 도구를 제공하는 서비스. 오늘의 공부 효율을 1% 높여보세요.",
};

export const viewport: Viewport = {
  themeColor: "#3ba389",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKr.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
