import { getDictionary } from "../dictionaries";
import { getBlogPosts } from "../page";
import BlogList from "../../../components/BlogList";
import LanguageSwitcher from '../../../components/LanguageSwitcher';
import Link from "next/link";
import Footer from '../../../components/Footer';
import Logo from '../../../components/Logo';
import PageTracking from '../../../components/PageTracking';
import AdSenseWrapper from '../../../components/AdSenseWrapper';
import { ADSENSE_CONFIG } from '../../../lib/adsense';

type PageProps = {
  params: {
    lang: string;
  };
};

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'zh' }
  ];
}

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  return {
    title: t.title,
    description: "Insights, tips, and stories from the indie hacker community. Learn from successful indie developers and share your journey.",
    keywords: "The Global Hub for Indie Hackers, Indie Hacker, developer tools, indie developers, SaaS development, startup tips, developer blog, entrepreneurship, product development, tech insights",
    openGraph: {
      title: t.title,
      description: "Insights, tips, and stories from the indie hacker community. Learn from successful indie developers and share your journey.",
      type: "website",
      locale: lang === 'zh' ? 'zh_CN' : 'en_US',
      siteName: "One Point Star",
      url: `https://www.onepointstar.com/${lang}/blog`,
      images: [
        {
          url: "https://www.onepointstar.com/og-blog.jpg",
          width: 1200,
          height: 630,
          alt: "Indie Hacker Blog - Global Hub",
        },
      ],
    },
    alternates: {
      canonical: `https://www.onepointstar.com/${lang}/blog`,
      languages: {
        'en': 'https://www.onepointstar.com/en/blog',
        'zh': 'https://www.onepointstar.com/zh/blog',
      },
    },
    twitter: {
      card: "summary_large_image",
      title: "Indie Hacker Blog - Insights & Stories | Global Hub",
      description: "Insights, tips, and stories from the indie hacker community. Learn from successful indie developers and share your journey.",
      images: ["https://www.onepointstar.com/og-blog.jpg"],
    },
  };
}

// 博客列表页结构化数据
const blogStructuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "The Global Hub for Indie Hackers Blog - Insights & Stories",
  "description": "Insights, tips, and stories from the indie hacker community. Learn from successful indie developers and share your journey.",
  "url": "https://www.onepointstar.com/blog",
  "publisher": {
    "@type": "Organization",
    "name": "One Point Star"
  }
};

export default async function BlogPage({ params }: PageProps) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  const posts = await getBlogPosts(lang);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <PageTracking />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogStructuredData),
        }}
      />
      {/* 顶部导航 */}
      <div className="bg-white shadow-sm border-b">
        <div className="w-full px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-3 lg:space-y-0">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 lg:space-x-8">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Logo className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" lang={lang} />
                <Link href={`/${lang}`} className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 truncate">
                  {t.title}
                </Link>
              </div>
              <nav className="flex flex-wrap gap-1 sm:gap-2 lg:gap-6">
                <Link
                  href={`/${lang}`}
                  className="text-xs sm:text-sm lg:text-base text-gray-600 hover:text-gray-900 transition-colors duration-200 px-2 py-1 rounded hover:bg-gray-50"
                >
                  {t.homeTab}
                </Link>
                <Link
                  href={`/${lang}/blog`}
                  className="text-xs sm:text-sm lg:text-base text-blue-600 font-medium px-2 py-1 rounded bg-blue-50"
                >
                  {t.blogTab}
                </Link>
                <Link
                  href={`/${lang}/tools`}
                  className="text-xs sm:text-sm lg:text-base text-gray-600 hover:text-gray-900 transition-colors duration-200 px-2 py-1 rounded hover:bg-gray-50"
                >
                  {t.relatedToolsTitle}
                </Link>
                <Link
                  href={`/${lang}/about`}
                  className="text-xs sm:text-sm lg:text-base text-gray-600 hover:text-gray-900 transition-colors duration-200 px-2 py-1 rounded hover:bg-gray-50"
                >
                  {t.aboutTab}
                </Link>
              </nav>
            </div>
            <div className="flex justify-end">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>

      {/* 博客内容 */}
      <div className="flex-1 w-full px-3 sm:px-4 lg:px-6 py-4 sm:py-6">
        <header className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            {t.blogTitle}
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {t.blogDescription}
          </p>
        </header>

        {/* 博客页面横幅广告 */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <AdSenseWrapper
            adSlot={ADSENSE_CONFIG.adUnits.homeBanner.slot}
            adFormat={ADSENSE_CONFIG.adUnits.homeBanner.format}
            adStyle={ADSENSE_CONFIG.adUnits.homeBanner.style}
            className="w-full max-w-4xl"
            responsive={ADSENSE_CONFIG.adUnits.homeBanner.responsive}
            timeout={3000}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* 博客列表 */}
          <div className="flex-1">
            <BlogList posts={posts} t={t} lang={lang} />
          </div>
          
          {/* 侧边栏广告 - 在手机端隐藏 */}
          <div className="hidden lg:block lg:w-80 flex-shrink-0">
            <div className="sticky top-8">
              <AdSenseWrapper
                adSlot={ADSENSE_CONFIG.adUnits.sidebar.slot}
                adFormat={ADSENSE_CONFIG.adUnits.sidebar.format}
                adStyle={ADSENSE_CONFIG.adUnits.sidebar.style}
                className="w-full"
                responsive={ADSENSE_CONFIG.adUnits.sidebar.responsive}
                timeout={4000}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer lang={lang} t={t} />
    </div>
  );
}

