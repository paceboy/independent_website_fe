import { ReactNode } from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import GoogleAnalyticsSSR from '../../components/GoogleAnalyticsSSR';

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'zh' }
  ];
}

// 更新类型定义，params 现在是 Promise
interface LayoutProps {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}

interface LangParams {
  lang: string;
}

export const metadata: Metadata = {
  title: "The Global Hub for Indie Hackers - One Point Star",
  description: "The ultimate platform for indie hackers and indie hackers. Discover developer tools, share experiences, and build amazing products together. Connect with the global indie hacker community.",
  keywords: "The Global Hub for Indie Hackers, Indie Hacker, developer tools, indie developers, SaaS development, startup tools, developer community, entrepreneurship, product development, tech tools, developer resources",
  authors: [{ name: "One Point Star" }],
  creator: "One Point Star",
  publisher: "One Point Star",
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE_HERE', // 替换为您的Google Search Console验证代码
  },
  robots: "index, follow",
  openGraph: {
    title: "The Global Hub for Indie Hackers - One Point Star",
    description: "The ultimate platform for indie hackers and indie hackers. Discover developer tools, share experiences, and build amazing products together.",
    type: "website",
    locale: "en_US",
    siteName: "One Point Star",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Global Hub for Indie Hackers - One Point Star",
    description: "The ultimate platform for indie hackers and indie hackers. Discover developer tools, share experiences, and build amazing products together.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

// 结构化数据
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "The Global Hub for Indie Hackers - One Point Star",
  "description": "The ultimate platform for indie hackers and indie hackers. Discover developer tools, share experiences, and build amazing products together.",
  "url": "https://www.onepointstar.com",
  "applicationCategory": "DeveloperCommunity",
  "operatingSystem": "Web Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "creator": {
    "@type": "Organization",
    "name": "One Point Star"
  }
};

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
  params
} : LayoutProps) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <head>
        {/* 多语言 hreflang 标签 */}
        <link rel="alternate" hrefLang="en" href="https://www.onepointstar.com/en" />
        <link rel="alternate" hrefLang="zh" href="https://www.onepointstar.com/zh" />
        <link rel="alternate" hrefLang="x-default" href="https://www.onepointstar.com/en" />
            {/* Google Analytics - SSR */}
            <GoogleAnalyticsSSR trackingId={process.env.NEXT_PUBLIC_GA_ID || 'G-M5337L4H8R'} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
