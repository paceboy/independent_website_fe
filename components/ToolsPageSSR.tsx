interface Tool {
  name: string;
  description: string;
  url: string;
  icon: string;
  logo?: string | null;
}

interface ToolsPageSSRProps {
  tools: Tool[];
  t: any;
}

export default function ToolsPageSSR({ tools, t }: ToolsPageSSRProps) {
  return (
    <>
      {/* 工具网格 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tools.map((tool: Tool, index: number) => (
          <a
            key={index}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:-translate-y-1"
            aria-label={`${t.visitTool || 'Visit'} ${tool.name}`}
          >
            <div className="flex flex-col items-center text-center">
              {/* 工具图标 */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors duration-300">
                {tool.logo ? (
                  <img
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-2xl sm:text-3xl">{tool.icon}</span>
                )}
              </div>
              
              {/* 工具名称 */}
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm sm:text-base mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {tool.name}
              </h3>
              
              {/* 工具描述 */}
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                {tool.description}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* FAQ 部分 */}
      <div className="mt-12 sm:mt-16">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 sm:mb-8">
          {t.faqTitle || 'Frequently Asked Questions'}
        </h3>
        <div className="space-y-4 sm:space-y-6">
          {t.faqItems?.map((faq: any, index: number) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 sm:p-6">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm sm:text-base mb-2">
                {faq.question}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          )) || (
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 sm:p-6">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm sm:text-base mb-2">
                  {t.faq1Question || 'How do I use these tools with your platform?'}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {t.faq1Answer || 'These tools are designed to complement our image comparison platform. You can use them to prepare, edit, or enhance your images before uploading them to our platform for comparison.'}
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 sm:p-6">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm sm:text-base mb-2">
                  {t.faq2Question || 'Are these tools free to use?'}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {t.faq2Answer || 'Most of the tools listed offer free versions or free tiers. Some may have premium features available for advanced users. Please check each tool\'s website for detailed pricing information.'}
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 sm:p-6">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm sm:text-base mb-2">
                  {t.faq3Question || 'Can I suggest additional tools?'}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {t.faq3Answer || 'Absolutely! We\'re always looking for new tools to add to our collection. If you know of a great tool that would benefit our community, please contact us and we\'ll consider adding it.'}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
