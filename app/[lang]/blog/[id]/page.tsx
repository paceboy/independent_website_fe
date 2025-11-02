import { getDictionary } from "../../dictionaries";
import { getBlogPost, getBlogPosts } from "../../page";
import BlogPost from "../../../../components/BlogPost";
import LanguageSwitcher from '../../../../components/LanguageSwitcher';
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import Footer from '../../../../components/Footer';
import Logo from '../../../../components/Logo';
import PageTracking from '../../../../components/PageTracking';
import AdSenseWrapper from '../../../../components/AdSenseWrapper';
import { ADSENSE_CONFIG } from '../../../../lib/adsense';

type PageProps = {
  params: {
    lang: string;
    id: string;
  };
};

export async function generateStaticParams() {
  const languages = ['en', 'zh'];
  const posts = await getBlogPosts('en'); // 获取所有文章ID
  
  const params = [];
  for (const lang of languages) {
    for (const post of posts) {
      params.push({
        lang,
        id: post.id.toString(),
      });
    }
  }
  
  return params;
}

export async function generateMetadata({ params }: PageProps) {
  const { lang, id } = await params;
  const post = await getBlogPost(parseInt(id), lang);
  const t = await getDictionary(lang);
  
  if (!post) {
    return {
      title: "Post Not Found | One Point Star",
      description: "The blog post you are looking for does not exist.",
    };
  }

  const title = `${post.title} | One Point Star`;
  const description = post.summary;
  const keywords = `The Global Hub for Indie Hackers, Indie Hacker, developer tools, indie developers, ${post.tags?.join(', ') || ''}, entrepreneurship, product development, tech insights`;

  return {
    title: title,
    description: description,
    keywords: keywords,
    authors: [{ name: post.author || "One Point Star" }],
    openGraph: {
      title: title,
      description: description,
      type: "article",
      locale: lang === 'zh' ? 'zh_CN' : 'en_US',
      siteName: "One Point Star",
      url: `https://www.onepointstar.com/${lang}/blog/${id}`,
      images: post.image ? [
        {
          url: `https://www.onepointstar.com${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ] : undefined,
      publishedTime: post.publishedAt,
      authors: [post.author || "One Point Star"],
      section: "Technology",
      tags: post.tags || [],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: post.image ? [`https://www.onepointstar.com${post.image}`] : undefined,
    },
    alternates: {
      canonical: `https://www.onepointstar.com/${lang}/blog/${id}`,
      languages: {
        'en': `https://www.onepointstar.com/en/blog/${id}`,
        'zh': `https://www.onepointstar.com/zh/blog/${id}`,
      },
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { lang, id } = await params;
  const post = await getBlogPost(parseInt(id), lang);
  const t = await getDictionary(lang);

  if (!post) {
    notFound();
  }

  // 博客文章结构化数据
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.summary,
    "image": post.image ? `https://www.onepointstar.com${post.image}` : undefined,
    "author": {
      "@type": "Person",
      "name": post.author || "One Point Star"
    },
    "publisher": {
      "@type": "Organization",
      "name": "One Point Star",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.onepointstar.com/logo.png"
      }
    },
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.onepointstar.com/${lang}/blog/${id}`
    },
    "url": `https://www.onepointstar.com/${lang}/blog/${id}`,
    "inLanguage": lang === 'zh' ? 'zh-CN' : 'en-US',
    "keywords": post.tags?.join(', ') || '',
    "articleSection": "Technology",
    "wordCount": post.content ? post.content.replace(/<[^>]*>/g, '').split(' ').length : 0
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <PageTracking />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
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

      {/* 博客文章内容 */}
      <div className="flex-1 w-full px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
        <div className="max-w-4xl mx-auto">
          {/* 文章顶部广告 */}
          <div className="mb-6 sm:mb-8 flex justify-center">
            <AdSenseWrapper
              adSlot={ADSENSE_CONFIG.adUnits.homeBanner.slot}
              adFormat={ADSENSE_CONFIG.adUnits.homeBanner.format}
              adStyle={ADSENSE_CONFIG.adUnits.homeBanner.style}
              className="w-full max-w-3xl"
              responsive={ADSENSE_CONFIG.adUnits.homeBanner.responsive}
              timeout={3000}
            />
          </div>

          <BlogPost post={post} t={t} lang={lang} />

          {/* 文章内广告 */}
          <div className="my-6 sm:my-8 flex justify-center">
            <AdSenseWrapper
              adSlot={ADSENSE_CONFIG.adUnits.inArticle.slot}
              adFormat={ADSENSE_CONFIG.adUnits.inArticle.format}
              adStyle={ADSENSE_CONFIG.adUnits.inArticle.style}
              className="w-full max-w-3xl"
              layout={ADSENSE_CONFIG.adUnits.inArticle.layout}
              responsive={true}
              timeout={4000}
            />
          </div>

          {/* 文章底部广告 */}
          <div className="mt-6 sm:mt-8 flex justify-center">
            <AdSenseWrapper
              adSlot={ADSENSE_CONFIG.adUnits.articleBottom.slot}
              adFormat={ADSENSE_CONFIG.adUnits.articleBottom.format}
              adStyle={ADSENSE_CONFIG.adUnits.articleBottom.style}
              className="w-full max-w-3xl"
              responsive={ADSENSE_CONFIG.adUnits.articleBottom.responsive}
              timeout={3000}
            />
          </div>
        </div>
      </div>

      <Footer lang={lang} t={t} />
    </div>
  );
}

