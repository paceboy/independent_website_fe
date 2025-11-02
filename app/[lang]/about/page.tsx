import { getDictionary } from "../dictionaries";
import LanguageSwitcher from '../../../components/LanguageSwitcher';
import Link from "next/link";
import Footer from '../../../components/Footer';
import Logo from '../../../components/Logo';
import PageTracking from '../../../components/PageTracking';

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
    description: "Learn about The Global Hub for Indie Hackers - a community platform connecting indie hackers worldwide. Share experiences, discover tools, and build amazing products together.",
    keywords: "The Global Hub for Indie Hackers, Indie Hacker, developer tools, indie developers, developer community, SaaS development, startup tools, entrepreneurship, tech community, developer resources",
    openGraph: {
      title: t.title,
      description: "Learn about The Global Hub for Indie Hackers - a community platform connecting indie hackers worldwide. Share experiences, discover tools, and build amazing products together.",
      type: "website",
      locale: lang === 'zh' ? 'zh_CN' : 'en_US',
      siteName: "One Point Star",
      url: `https://www.onepointstar.com/${lang}/about`,
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: "Learn about The Global Hub for Indie Hackers - a community platform connecting indie hackers worldwide. Share experiences, discover tools, and build amazing products together.",
    },
    alternates: {
      canonical: `https://www.onepointstar.com/${lang}/about`,
      languages: {
        'en': 'https://www.onepointstar.com/en/about',
        'zh': 'https://www.onepointstar.com/zh/about',
      },
    },
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { lang } = await params;
  const t = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <PageTracking />
      {/* 顶部导航 */}
      <div className="bg-white shadow-sm border-b">
        <div className="w-full px-4 sm:px-6 py-4">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-8">
              <div className="flex items-center space-x-3">
                <Logo className="w-8 h-8 sm:w-10 sm:h-10" lang={lang} />
                <Link href={`/${lang}`} className="text-xl sm:text-2xl font-bold text-gray-900">
                  {t.title}
                </Link>
              </div>
              <nav className="flex flex-wrap gap-2 sm:gap-4 lg:gap-6">
                <Link
                  href={`/${lang}`}
                  className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  {t.homeTab}
                </Link>
                <Link
                  href={`/${lang}/blog`}
                  className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  {t.blogTab}
                </Link>
                <Link
                  href={`/${lang}/tools`}
                  className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  {t.relatedToolsTitle}
                </Link>
                <Link
                  href={`/${lang}/about`}
                  className="text-sm sm:text-base text-blue-600 font-medium"
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

      {/* About 内容 */}
      <div className="flex-1 w-full px-4 sm:px-6 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <header className="mb-8 text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  {lang === 'zh' ? '关于独立开发者全球聚集地' : 'About The Global Hub for Indie Hackers'}
                </h1>
                <p className="text-xl text-gray-600">
                  {lang === 'zh' ? '连接全球独立开发者，分享经验与资源' : 'Connecting Indie Hackers Worldwide'}
                </p>
              </header>

              <div className="prose prose-lg lg:prose-xl max-w-3xl mx-auto">
                <div className="text-gray-800 leading-relaxed">
                  {lang === 'zh' ? (
                    <>
                      <p className="text-lg mb-6">
                        独立开发者全球聚集地是一个专为独立开发者打造的社区平台。我们致力于连接全球的独立开发者，分享经验、工具和资源，帮助大家构建和发布优秀的产品。
                      </p>
                      
                      <h3 className="text-2xl font-semibold mb-4">我们的使命</h3>
                      <p className="mb-4">
                        我们相信独立开发者是推动技术创新的重要力量。我们的目标是：
                      </p>
                      <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>连接全球独立开发者，建立强大的社区网络</li>
                        <li>分享成功经验和失败教训，帮助大家少走弯路</li>
                        <li>提供优质的工具和资源推荐</li>
                        <li>支持独立开发者的创业和成长</li>
                      </ul>
                      
                      <h3 className="text-2xl font-semibold mb-4">社区特色</h3>
                      <p className="mb-4">
                        我们的社区专注于以下领域：
                      </p>
                      <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>SaaS产品开发和发布</li>
                        <li>移动应用开发</li>
                        <li>Web应用和工具开发</li>
                        <li>产品设计和用户体验</li>
                        <li>创业和商业模式</li>
                        <li>技术栈选择和最佳实践</li>
                      </ul>
                      
                      <h3 className="text-2xl font-semibold mb-4">加入我们</h3>
                      <p className="mb-4">
                        无论你是刚起步的独立开发者，还是经验丰富的创业者，我们都欢迎你的加入。让我们一起分享经验，共同成长！
                      </p>
                      <div className="bg-blue-50 p-4 rounded-lg mb-6">
                        <a 
                          href="mailto:yizhiwangxing@gmail.com" 
                          className="text-blue-600 hover:text-blue-800 font-medium text-lg"
                        >
                          yizhiwangxing@gmail.com
                        </a>
                      </div>
                      
                      <p className="text-gray-600">
                        期待与你的交流，一起构建更好的独立开发者生态！
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-lg mb-6">
                        The Global Hub for Indie Hackers is a community platform dedicated to indie hackers worldwide. We are committed to connecting global indie hackers, sharing experiences, tools, and resources to help everyone build and launch amazing products.
                      </p>
                      
                      <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                      <p className="mb-4">
                        We believe indie hackers are a crucial force driving technological innovation. Our goals are to:
                      </p>
                      <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Connect indie hackers globally and build a strong community network</li>
                        <li>Share success stories and lessons learned to help others avoid pitfalls</li>
                        <li>Provide high-quality tool and resource recommendations</li>
                        <li>Support indie hackers in their entrepreneurial journey and growth</li>
                      </ul>
                      
                      <h3 className="text-2xl font-semibold mb-4">Community Focus</h3>
                      <p className="mb-4">
                        Our community focuses on the following areas:
                      </p>
                      <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>SaaS product development and launch</li>
                        <li>Mobile app development</li>
                        <li>Web applications and tool development</li>
                        <li>Product design and user experience</li>
                        <li>Entrepreneurship and business models</li>
                        <li>Tech stack selection and best practices</li>
                      </ul>
                      
                      <h3 className="text-2xl font-semibold mb-4">Join Us</h3>
                      <p className="mb-4">
                        Whether you're a beginner indie hacker or an experienced entrepreneur, we welcome you to join us. Let's share experiences and grow together!
                      </p>
                      <div className="bg-blue-50 p-4 rounded-lg mb-6">
                        <a 
                          href="mailto:yizhiwangxing@gmail.com" 
                          className="text-blue-600 hover:text-blue-800 font-medium text-lg"
                        >
                          yizhiwangxing@gmail.com
                        </a>
                      </div>
                      
                      <p className="text-gray-600">
                        Looking forward to connecting with you and building a better indie hacker ecosystem together!
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer lang={lang} t={t} />
    </div>
  );
}
