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
    description: lang === 'zh' ? '本网站的服务条款，说明使用本网站服务的条件和规则。' : 'Terms of service for using our website and its features.',
  };
}

export default async function TermsPage({ params }: PageProps) {
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

      {/* 服务条款内容 */}
      <div className="flex-1 w-full px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 lg:p-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              {isZh ? '服务条款' : 'Terms of Service'}
            </h1>
            
            <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-800">
              {isZh ? (
                <div>
                  <p className="text-sm text-gray-600 mb-6">生效日期：2025年10月10日</p>
                  
                  <h2 className="text-2xl font-semibold mb-4">1. 接受条款</h2>
                  <p className="mb-4">使用本网站即表示您接受本服务条款。如果您不同意任何条款，请勿使用本网站。</p>
                  
                  <h2 className="text-2xl font-semibold mb-4">2. 服务描述</h2>
                  <p className="mb-4">本网站是独立开发者全球聚集地，提供以下服务：</p>
                  <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2"><strong>博客内容</strong>：分享独立开发经验、技巧和故事，帮助开发者学习和成长。</li>
                    <li className="mb-2"><strong>工具推荐</strong>：推荐优质的开发者工具和资源，包括代码编辑器、设计工具、部署服务等。</li>
                    <li className="mb-2"><strong>社区服务</strong>：为独立开发者提供交流平台，促进经验分享和相互学习。</li>
                    <li className="mb-2"><strong>多图查看工具</strong>：提供免费的在线工具，支持并排查看和比较多张图片。</li>
                  </ul>
                  
                  <h2 className="text-2xl font-semibold mb-4">3. 用户义务</h2>
                  <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2">您应保证在本网站创建、分享或提交的内容拥有合法权利，不侵犯任何第三方版权、商标、隐私或其他合法权益。</li>
                    <li className="mb-2">您承诺不在本网站发布含有违法、淫秽、色情、暴力、仇恨言论或其他不当内容的信息。</li>
                    <li className="mb-2">您需遵守适用法律，不利用本服务从事违法或侵权行为。</li>
                    <li className="mb-2">您应尊重其他用户，不得进行恶意攻击、骚扰或传播虚假信息。</li>
                    <li className="mb-2">使用我们推荐的第三方工具时，您应遵守相应工具的服务条款和隐私政策。</li>
                  </ul>
                  
                  <h2 className="text-2xl font-semibold mb-4">4. 知识产权</h2>
                  <p className="mb-4">本网站及其内容（除您创建的内容外）由本网站所有或授权使用，受版权、商标及其他法律保护。未经许可，不得复制、修改、分发或商业使用。</p>
                  <p className="mb-4">您保留对您在本网站创建、分享内容的所有权利，同时您许可本网站在提供服务时以必要方式使用该内容（如展示、存储、生成预览）。如您不希望本网站继续使用，须提前通知我们。</p>
                  <p className="mb-4">我们推荐的第三方工具的知识产权归各自所有者所有，我们仅提供推荐服务，不拥有这些工具的知识产权。</p>
                  
                  <h2 className="text-2xl font-semibold mb-4">5. 免责声明</h2>
                  <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2">本网站按"现状"提供，不保证服务不中断、无错误或完全安全。</li>
                    <li className="mb-2">对于因使用或无法使用本网站服务所产生的任何直接、间接、附带、特殊或后续损害，本网站及其关联方不承担责任。</li>
                    <li className="mb-2">您承担使用本网站服务所涉所有风险，包括数据丢失、内容被第三方访问等。</li>
                    <li className="mb-2">我们不对推荐的第三方工具的质量、可用性或安全性承担责任。使用这些工具的风险由您自行承担。</li>
                    <li className="mb-2">我们不对第三方工具的服务中断、数据丢失或安全漏洞承担责任。</li>
                  </ul>
                  
                  <h2 className="text-2xl font-semibold mb-4">6. 链接与第三方服务</h2>
                  <p className="mb-4">本网站包含指向第三方开发者工具和服务的链接。我们不对这些第三方的隐私政策、服务条款或内容负责。</p>
                  <p className="mb-4">我们推荐的第三方工具可能通过广告、插件或其他方式在本网站提供服务，而您的互动可能受其政策约束。</p>
                  <p className="mb-4">使用第三方工具时，请仔细阅读其服务条款和隐私政策，我们不对第三方工具的任何问题承担责任。</p>
                  
                  <h2 className="text-2xl font-semibold mb-4">7. 广告</h2>
                  <p className="mb-4">本网站可能与 Google AdSense 或其他广告网络合作展示广告。您了解并同意，本网站可在页面上显示广告，广告提供商可能基于您的浏览器活动或网站使用行为展示定向广告。您应遵守相关广告网络的条款。</p>
                  <p className="mb-4">我们可能通过广告收入来维持网站运营和提供免费服务，但广告内容不代表我们的观点或推荐。</p>
                  
                  <h2 className="text-2xl font-semibold mb-4">8. 服务变更与终止</h2>
                  <p className="mb-4">我们保留随时修改、暂停或终止全部或部分服务的权利，且无需事先通知。您可随时停止使用本服务。我们亦可在不通知的情况下限制或终止您的访问，如我们认为您违反本条款或进行滥用行为。</p>
                  
                  <h2 className="text-2xl font-semibold mb-4">9. 管辖法律与争议解决</h2>
                  <p className="mb-4">本条款适用所在地法律。因本条款或使用本服务引起的争议，应提交所在地有管辖权的法院解决。</p>
                  
                  <h2 className="text-2xl font-semibold mb-4">10. 可分割性</h2>
                  <p className="mb-4">若本条款任何条款被视为无效或不可执行，其余条款仍继续有效且可执行。</p>
                  
                  <h2 className="text-2xl font-semibold mb-4">11. 完整协议</h2>
                  <p className="mb-4">本条款与隐私政策共同构成您与本网站之间关于使用本服务的完整协议，取代此前任何口头或书面协议。</p>
                </div>
              ) : (
                <div>
                  <p className="text-sm text-gray-600 mb-6">Effective Date: October 10, 2025</p>
                  
                  <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                  <p className="mb-4">By using this website, you accept these terms of service. If you do not agree to any terms, please do not use this website.</p>
                  
                  <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
                  <p className="mb-4">This website is the global hub for indie hackers, providing the following services:</p>
                  <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2"><strong>Blog Content</strong>: Share indie development experiences, tips, and stories to help developers learn and grow.</li>
                    <li className="mb-2"><strong>Tool Recommendations</strong>: Recommend high-quality developer tools and resources, including code editors, design tools, deployment services, etc.</li>
                    <li className="mb-2"><strong>Community Services</strong>: Provide a platform for indie hackers to communicate, promote experience sharing and mutual learning.</li>
                    <li className="mb-2"><strong>Multi-Image Viewing Tool</strong>: Provide free online tools for side-by-side viewing and comparison of multiple images.</li>
                  </ul>
                  
                  <h2 className="text-2xl font-semibold mb-4">3. User Obligations</h2>
                  <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2">You should ensure that content created, shared, or submitted on this website has legal rights and does not infringe on any third-party copyright, trademark, privacy or other legitimate rights.</li>
                    <li className="mb-2">You promise not to post information containing illegal, obscene, pornographic, violent, hate speech or other inappropriate content on this website.</li>
                    <li className="mb-2">You must comply with applicable laws and not use this service for illegal or infringing activities.</li>
                    <li className="mb-2">You should respect other users and not engage in malicious attacks, harassment, or spreading false information.</li>
                    <li className="mb-2">When using our recommended third-party tools, you should comply with the respective tool's terms of service and privacy policy.</li>
                  </ul>
                  
                  <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
                  <p className="mb-4">This website and its content (except for content you create) are owned or authorized for use by this website and are protected by copyright, trademark and other laws. Without permission, you may not copy, modify, distribute or use commercially.</p>
                  <p className="mb-4">You retain all rights to the content you create and share on this website, while you license this website to use such content in necessary ways when providing services (such as display, storage, generating previews). If you do not want this website to continue using them, you must notify us in advance.</p>
                  <p className="mb-4">The intellectual property of the third-party tools we recommend belongs to their respective owners. We only provide recommendation services and do not own the intellectual property of these tools.</p>
                  
                  <h2 className="text-2xl font-semibold mb-4">5. Disclaimer</h2>
                  <ul className="list-disc pl-6 mb-4">
                    <li className="mb-2">This website is provided "as is" and does not guarantee uninterrupted, error-free or completely secure service.</li>
                    <li className="mb-2">This website and its affiliates are not responsible for any direct, indirect, incidental, special or consequential damages arising from the use or inability to use this website service.</li>
                    <li className="mb-2">You bear all risks involved in using this website service, including data loss, content being accessed by third parties, etc.</li>
                    <li className="mb-2">We are not responsible for the quality, availability, or security of recommended third-party tools. You bear the risks of using these tools.</li>
                    <li className="mb-2">We are not responsible for service interruptions, data loss, or security vulnerabilities of third-party tools.</li>
                  </ul>
                  
                  <h2 className="text-2xl font-semibold mb-4">6. Links and Third-party Services</h2>
                  <p className="mb-4">This website contains links to third-party developer tools and services. We are not responsible for the privacy policies, terms of service, or content of these third parties.</p>
                  <p className="mb-4">The third-party tools we recommend may provide services on this website through advertising, plugins or other means, and your interactions may be subject to their policies.</p>
                  <p className="mb-4">When using third-party tools, please carefully read their terms of service and privacy policies. We are not responsible for any issues with third-party tools.</p>
                  
                  <h2 className="text-2xl font-semibold mb-4">7. Advertising</h2>
                  <p className="mb-4">This website may cooperate with Google AdSense or other advertising networks to display advertisements. You understand and agree that this website may display advertisements on pages, and advertising providers may display targeted advertisements based on your browser activity or website usage behavior. You should comply with the terms of relevant advertising networks.</p>
                  <p className="mb-4">We may use advertising revenue to maintain website operations and provide free services, but advertising content does not represent our views or recommendations.</p>
                  
                  <h2 className="text-2xl font-semibold mb-4">8. Service Changes and Termination</h2>
                  <p className="mb-4">We reserve the right to modify, suspend or terminate all or part of the service at any time without prior notice. You may stop using this service at any time. We may also restrict or terminate your access without notice if we believe you have violated these terms or engaged in abusive behavior.</p>
                  
                  <h2 className="text-2xl font-semibold mb-4">9. Governing Law and Dispute Resolution</h2>
                  <p className="mb-4">These terms are governed by the laws of the jurisdiction where this website is located. Disputes arising from these terms or the use of this service shall be submitted to the competent court of the jurisdiction for resolution.</p>
                  
                  <h2 className="text-2xl font-semibold mb-4">10. Severability</h2>
                  <p className="mb-4">If any provision of these terms is deemed invalid or unenforceable, the remaining provisions shall continue to be valid and enforceable.</p>
                  
                  <h2 className="text-2xl font-semibold mb-4">11. Complete Agreement</h2>
                  <p className="mb-4">These terms and the privacy policy together constitute the complete agreement between you and this website regarding the use of this service, replacing any previous oral or written agreements.</p>
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
