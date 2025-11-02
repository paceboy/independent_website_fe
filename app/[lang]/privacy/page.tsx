import { getDictionary } from "../dictionaries";
import LanguageSwitcher from '../../../components/LanguageSwitcher';
import Link from "next/link";

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
    description: lang === 'zh' ? '本网站的隐私政策，说明我们如何收集、使用和保护您的个人信息。' : 'Our privacy policy explaining how we collect, use and protect your personal information.',
  };
}

export default async function PrivacyPage({ params }: PageProps) {
  const { lang } = await params;
  const t = await getDictionary(lang);

  const isZh = lang === 'zh';

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* 顶部导航 */}
      <div className="bg-white shadow-sm border-b">
        <div className="w-full px-3 sm:px-4 lg:px-6 py-3 sm:py-4">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-3 lg:space-y-0">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 lg:space-x-8">
              <div className="flex items-center space-x-2 sm:space-x-3">
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
                  className="text-xs sm:text-sm lg:text-base text-gray-600 hover:text-gray-900 transition-colors duration-200 px-2 py-1 rounded hover:bg-gray-50"
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

      {/* 隐私政策内容 */}
      <div className="flex-1 w-full px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 lg:p-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              {isZh ? '隐私政策' : 'Privacy Policy'}
            </h1>
            
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-800">
              {isZh ? (
                <div>
                  <p className="text-sm text-gray-600 mb-6">生效日期：2025年10月10日</p>
                  
                  <h2 className="text-2xl font-semibold mb-4">1. 引言</h2>
                  <p className="mb-4">欢迎访问本网站。本隐私政策说明我们如何收集、使用、披露及保护您通过本网站提供的个人信息。使用本网站即表示您同意本隐私政策。</p>
                  
                  <h2 className="text-2xl font-semibold mb-4">2. 我们收集的信息</h2>
                  <p className="mb-4">我们可能会收集以下类型的信息：</p>
                  <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2"><strong>用户生成的内容</strong>：您在本网站创建、分享或提交的内容，包括博客评论、工具使用反馈、社区互动等。</li>
                    <li className="mb-2"><strong>设备和使用信息</strong>：当您访问本网站时，我们可能自动收集有关您设备的信息，如操作系统、浏览器类型、IP 地址、访问时间、所访问的页面、引用来源、停留时长等。</li>
                    <li className="mb-2"><strong>Cookie 和类似技术</strong>：为增强用户体验、保存用户偏好设置、进行统计分析，我们可能使用 Cookie 或本地存储技术。</li>
                    <li className="mb-2"><strong>第三方工具使用数据</strong>：当您使用我们推荐的开发者工具时，我们可能收集相关的使用统计信息（仅限匿名化数据）。</li>
                  </ul>
                  
                  <h2 className="text-2xl font-semibold mb-4">3. 我们如何使用这些信息</h2>
                  <p className="mb-4">我们可能将您的信息用于以下用途：</p>
                  <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2">提供、维护和运行本网站及其功能，包括博客内容、工具推荐和社区服务。</li>
                    <li className="mb-2">分析使用情况、改进功能、检测和防止欺诈或滥用。</li>
                    <li className="mb-2">向您发送与本网站相关的通知（如系统维护、功能变更、新工具推荐）。</li>
                    <li className="mb-2">优化工具推荐算法，为您提供更相关的开发者工具和资源。</li>
                    <li className="mb-2">遵守法律法规、合法权益保护或响应合法请求。</li>
                  </ul>
                  
                  <h2 className="text-2xl font-semibold mb-4">4. 信息共享与披露</h2>
                  <p className="mb-4">我们承诺除下列情形外不会将您的个人信息出售、租赁或与第三方共享：</p>
                  <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2"><strong>服务提供商</strong>：我们可能聘请第三方提供技术服务、分析或托管服务，这些服务提供商仅按我们指示访问信息，并受保密义务约束。</li>
                    <li className="mb-2"><strong>法律要求</strong>：当法律、法规、诉讼程序或政府要求时，或为保护本网站的合法权益、用户或公众安全时。</li>
                    <li className="mb-2"><strong>业务变更</strong>：如合并、收购、资产出售等变更，当涉及您的个人信息时，该信息可作为交易资产转移，但我们会要求继承方继续受本隐私政策约束。</li>
                  </ul>
                  
                  <h2 className="text-2xl font-semibold mb-4">5. 存储与安全</h2>
                  <p className="mb-4">我们已采取适当的技术和组织安全措施，以保护您的信息免遭未授权访问、公开、更改或销毁。但请理解，没有任何互联网传输或电子存储方式是 100% 安全的。</p>
                  
                  <h2 className="text-2xl font-semibold mb-4">6. 儿童隐私</h2>
                  <p className="mb-4">本网站不针对 13 岁以下儿童。如发现儿童在未经家长同意的情况下向我们提供个人信息，我们将采取措施尽快删除这些信息。</p>
                  
                  <h2 className="text-2xl font-semibold mb-4">7. 您的权利</h2>
                  <p className="mb-4">您可能具有以下权利（视您所在地法律而定）：</p>
                  <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2">访问、纠正、删除我们持有的关于您的个人信息。</li>
                    <li className="mb-2">撤回同意（但这不影响您在撤回同意前我们基于同意处理信息的合法性）。</li>
                    <li className="mb-2">要求限制或反对我们处理您的个人信息。</li>
                    <li className="mb-2">提出数据可携带请求。</li>
                  </ul>
                  <p className="mb-4">如您希望行使上述权利，请通过下文「联系我们」部分联络我们，我们将在合理时间内回应。</p>
                  
                  <h2 className="text-2xl font-semibold mb-4">8. 跨境传输</h2>
                  <p className="mb-4">由于我们可能将数据存储或处理于您所在国家/地区以外的服务器，您的信息可能面临跨境传输与存储。我们将在合法框架下采取措施保护这些数据。</p>
                  
                  <h2 className="text-2xl font-semibold mb-4">9. 隐私政策更新</h2>
                  <p className="mb-4">我们可能不时更新本隐私政策。更新后的政策将在本页面上发布，并注明新的"生效日期"。建议您定期查阅。</p>
                  
                  <h2 className="text-2xl font-semibold mb-4">10. 联系我们</h2>
                  <p className="mb-4">如对本隐私政策有疑问或需行使您的权利，请通过以下方式联系我们：</p>
                  <p className="mb-4">电子邮件：<a href="mailto:yizhiwangxing@gmail.com" className="text-blue-600 hover:text-blue-800">yizhiwangxing@gmail.com</a></p>
                </div>
              ) : (
                <div>
                  <p className="text-sm text-gray-600 mb-6">Effective Date: October 10, 2025</p>
                  
                  <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                  <p className="mb-4">Welcome to our website. This privacy policy explains how we collect, use, disclose and protect personal information you provide through this website. By using this website, you agree to this privacy policy.</p>
                  
                  <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                  <p className="mb-4">We may collect the following types of information:</p>
                  <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2"><strong>User-generated content</strong>: Content you create, share, or submit on our website, including blog comments, tool usage feedback, community interactions, etc.</li>
                    <li className="mb-2"><strong>Device and usage information</strong>: When you visit our website, we may automatically collect information about your device, such as operating system, browser type, IP address, access time, pages visited, referral source, duration of stay, etc.</li>
                    <li className="mb-2"><strong>Cookies and similar technologies</strong>: To enhance user experience, save user preferences, and conduct statistical analysis, we may use cookies or local storage technologies.</li>
                    <li className="mb-2"><strong>Third-party tool usage data</strong>: When you use our recommended developer tools, we may collect related usage statistics (anonymized data only).</li>
                  </ul>
                  
                  <h2 className="text-2xl font-semibold mb-4">3. How We Use This Information</h2>
                  <p className="mb-4">We may use your information for the following purposes:</p>
                  <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2">Provide, maintain and operate this website and its features, including blog content, tool recommendations, and community services.</li>
                    <li className="mb-2">Analyze usage, improve functionality, detect and prevent fraud or abuse.</li>
                    <li className="mb-2">Send you notifications related to this website (such as system maintenance, feature changes, new tool recommendations).</li>
                    <li className="mb-2">Optimize tool recommendation algorithms to provide you with more relevant developer tools and resources.</li>
                    <li className="mb-2">Comply with laws and regulations, protect legitimate interests, or respond to legal requests.</li>
                  </ul>
                  
                  <h2 className="text-2xl font-semibold mb-4">4. Information Sharing and Disclosure</h2>
                  <p className="mb-4">We promise not to sell, rent or share your personal information with third parties except in the following circumstances:</p>
                  <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2"><strong>Service providers</strong>: We may engage third parties to provide technical services, analytics or hosting services. These service providers only access information as instructed by us and are bound by confidentiality obligations.</li>
                    <li className="mb-2"><strong>Legal requirements</strong>: When required by law, regulations, legal proceedings or government requests, or to protect the legitimate interests of this website, users or public safety.</li>
                    <li className="mb-2"><strong>Business changes</strong>: In case of changes such as mergers, acquisitions, asset sales, when your personal information is involved, such information may be transferred as transaction assets, but we will require the successor to continue to be bound by this privacy policy.</li>
                  </ul>
                  
                  <h2 className="text-2xl font-semibold mb-4">5. Storage and Security</h2>
                  <p className="mb-4">We have implemented appropriate technical and organizational security measures to protect your information from unauthorized access, disclosure, alteration or destruction. However, please understand that no method of internet transmission or electronic storage is 100% secure.</p>
                  
                  <h2 className="text-2xl font-semibold mb-4">6. Children's Privacy</h2>
                  <p className="mb-4">This website is not directed to children under 13. If we discover that a child has provided us with personal information without parental consent, we will take steps to delete such information as soon as possible.</p>
                  
                  <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
                  <p className="mb-4">You may have the following rights (depending on the laws of your jurisdiction):</p>
                  <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2">Access, correct, delete personal information we hold about you.</li>
                    <li className="mb-2">Withdraw consent (but this does not affect the legality of our processing of information based on consent before withdrawal).</li>
                    <li className="mb-2">Request restriction or object to our processing of your personal information.</li>
                    <li className="mb-2">Make data portability requests.</li>
                  </ul>
                  <p className="mb-4">If you wish to exercise the above rights, please contact us through the "Contact Us" section below, and we will respond within a reasonable time.</p>
                  
                  <h2 className="text-2xl font-semibold mb-4">8. Cross-border Transfer</h2>
                  <p className="mb-4">Since we may store or process data on servers outside your country/region, your information may be subject to cross-border transmission and storage. We will take measures to protect this data within the legal framework.</p>
                  
                  <h2 className="text-2xl font-semibold mb-4">9. Privacy Policy Updates</h2>
                  <p className="mb-4">We may update this privacy policy from time to time. Updated policies will be posted on this page with a new "Effective Date". We recommend that you review it regularly.</p>
                  
                  <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
                  <p className="mb-4">If you have questions about this privacy policy or need to exercise your rights, please contact us through the following methods:</p>
                  <p className="mb-4">Email: <a href="mailto:yizhiwangxing@gmail.com" className="text-blue-600 hover:text-blue-800">yizhiwangxing@gmail.com</a></p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 底部版权信息 */}
      <footer className="bg-white border-t border-gray-200 mt-8">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="text-center text-gray-600">
            <p>© 2025 • One Point Star - The Global Hub for Indie Hackers All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
