import { getDictionary } from "../dictionaries";
import Logo from "../../../components/Logo";
import Footer from "../../../components/Footer";
import ToolsPageSSR from "../../../components/ToolsPageSSR";
import LanguageSwitcher from "../../../components/LanguageSwitcher";
import PageTracking from "../../../components/PageTracking";

// gtag 类型已在 types/gtag.d.ts 中定义

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = await getDictionary(lang);
  
  const isZh = lang === 'zh';
  
  return {
    title: isZh 
      ? "相关图片工具 - 多图同时查看 - 免费在线工具" 
      : "Related Image Tools - View Multiple Images Side by Side",
    description: isZh
      ? "发现图片对比、编辑和处理的重要工具。免费在线图片压缩、颜色提取、格式转换等工具。"
      : "Discover essential image tools for comparison, editing, and processing. Free online tools for image compression, color picking, format conversion, and more.",
    keywords: isZh
      ? "多图同时查看,图片对比工具,在线图片查看器,图片编辑工具,照片对比软件,免费图片工具,图片处理工具,视觉对比工具"
      : "view multiple images, image comparison tools, online image viewer, image editing tools, photo comparison software, free image tools, image processing tools, visual comparison tools",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: isZh 
        ? "相关图片工具 - 多图同时查看 - 免费在线工具"
        : "Related Image Tools - View Multiple Images Side by Side",
      description: isZh
        ? "发现图片对比、编辑和处理的重要工具。免费在线图片压缩、颜色提取、格式转换等工具。"
        : "Discover essential image tools for comparison, editing, and processing. Free online tools for image compression, color picking, format conversion, and more.",
      type: "website",
      url: `https://www.onepointstar.com/${lang}/tools`,
      siteName: "One Point Star",
    },
    twitter: {
      card: "summary_large_image",
      title: isZh 
        ? "相关图片工具 - 多图同时查看"
        : "Related Image Tools - View Multiple Images Side by Side",
      description: isZh
        ? "发现图片对比、编辑和处理的重要工具。"
        : "Discover essential image tools for comparison, editing, and processing.",
    },
    alternates: {
      canonical: `https://www.onepointstar.com/${lang}/tools`,
      languages: {
        'en': 'https://www.onepointstar.com/en/tools',
        'zh': 'https://www.onepointstar.com/zh/tools',
      },
    },
  };
}

export default async function ToolsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <PageTracking />
      {/* 结构化数据 - Google Search Console 优化 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": t.toolsPageTitle || "Related Image Tools",
            "description": t.toolsPageDescription || "Discover essential image tools for comparison, editing, and processing",
            "url": `https://www.onepointstar.com/${lang}/tools`,
            "mainEntity": {
              "@type": "ItemList",
              "name": t.relatedToolsTitle || "Related Tools",
              "itemListElement": t.relatedTools?.map((tool: any, index: number) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": tool.name,
                "description": tool.description,
                "url": tool.url
              })) || []
            }
          })
        }}
      />
      
      {/* 顶部导航 */}
      <div className="bg-white shadow-sm border-b">
        <div className="w-full px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-3 lg:space-y-0">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 lg:space-x-8">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Logo className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10" lang={lang} />
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 truncate">{t.pageTitle}</h1>
              </div>
              <nav className="flex flex-wrap gap-1 sm:gap-2 lg:gap-6">
                <a
                  href={`/${lang}`}
                  className="text-xs sm:text-sm lg:text-base text-gray-600 hover:text-gray-900 transition-colors duration-200 px-2 py-1 rounded hover:bg-gray-50"
                >
                  {t.homeTab}
                </a>
                <a
                  href={`/${lang}/blog`}
                  className="text-xs sm:text-sm lg:text-base text-gray-600 hover:text-gray-900 transition-colors duration-200 px-2 py-1 rounded hover:bg-gray-50"
                >
                  {t.blogTab}
                </a>
                <a
                  href={`/${lang}/tools`}
                  className="text-xs sm:text-sm lg:text-base text-blue-600 font-medium px-2 py-1 rounded bg-blue-50"
                >
                  {t.relatedToolsTitle}
                </a>
                <a
                  href={`/${lang}/about`}
                  className="text-xs sm:text-sm lg:text-base text-gray-600 hover:text-gray-900 transition-colors duration-200 px-2 py-1 rounded hover:bg-gray-50"
                >
                  {t.aboutTab}
                </a>
              </nav>
            </div>
            <div className="flex justify-end">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="flex-1 w-full px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
        {/* 主标题和描述 */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            {t.toolsPageTitle || "Essential Image Tools for View Multiple Images"}
          </h1>
          <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-3 sm:mb-4 px-2">
            {t.toolsPageSubtitle || "Discover powerful tools for image comparison, editing, and processing"}
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 px-2">
            {t.toolsPageDescription || "Enhance your image comparison workflow with these essential tools. From image compression to color picking, find everything you need for professional image processing."}
          </p>
        </div>

        {/* 工具网格 - 使用SSR Component */}
        <ToolsPageSSR tools={t.relatedTools} t={t} />

        {/* SEO内容段落 */}
        <div className="mt-6 sm:mt-8 mb-6 sm:mb-8">
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed px-2">
            {t.seoContent || "These carefully selected image tools are designed to work seamlessly with our view multiple images platform, helping you achieve professional results in your image comparison and editing workflows."}
          </p>
        </div>

        {/* 底部说明 */}
        <div className="mt-4 sm:mt-6 lg:mt-8">
          <p className="text-gray-500 text-xs sm:text-sm px-2">
            {t.relatedToolsNote}
          </p>
        </div>
      </div>
      
      {/* 页脚 */}
      <Footer lang={lang} t={t} />
    </div>
  );
}
