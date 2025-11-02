'use client';

import { useEffect } from 'react';

// gtag 类型已在 types/gtag.d.ts 中定义

interface Tool {
  name: string;
  description: string;
  url: string;
  icon: string;
  logo?: string | null;
}

interface ToolsPageClientProps {
  tools: Tool[];
  t: any;
}

export default function ToolsPageClient({ tools, t }: ToolsPageClientProps) {
  // 处理工具点击事件
  const handleToolClick = (tool: Tool) => {
    // Google Analytics 暂时禁用
    // if (typeof window !== 'undefined' && window.gtag) {
    //   window.gtag('event', 'tool_click', {
    //     event_category: 'Related Tools',
    //     event_label: tool.name,
    //     tool_url: tool.url
    //   });
    // }
  };

  // 处理FAQ点击事件
  const handleFaqClick = (question: string) => {
    // Google Analytics 暂时禁用
    // if (typeof window !== 'undefined' && window.gtag) {
    //   window.gtag('event', 'faq_expand', {
    //     event_category: 'FAQ',
    //     event_label: question
    //   });
    // }
  };

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
            onClick={() => handleToolClick(tool)}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 p-6 text-center group border border-gray-200 hover:border-blue-300"
          >
            <div className="mb-4 flex justify-center">
              {tool.logo ? (
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-12 h-12 object-contain"
                />
              ) : (
                <div className="text-4xl">{tool.icon}</div>
              )}
            </div>
            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-2">
              {tool.name}
            </h3>
            <p className="text-sm text-gray-600 mb-4">{tool.description}</p>
            <div className="text-blue-600 text-sm font-medium group-hover:text-blue-700">
              {t.visitTool} →
            </div>
          </a>
        ))}
      </div>

      {/* FAQ部分 - 对Google Search Console友好 */}
      <section className="mt-12" itemScope itemType="https://schema.org/FAQPage">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {t.faqTitle || "Frequently Asked Questions"}
        </h2>
        <div className="space-y-6">
          <div className="bg-white rounded-lg p-6 shadow-sm" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 
              className="font-semibold text-gray-900 mb-2 cursor-pointer hover:text-blue-600 transition-colors"
              onClick={() => handleFaqClick(t.faq1Question || "What tools work best with view multiple images?")}
              itemProp="name"
            >
              {t.faq1Question || "What tools work best with view multiple images?"}
            </h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p className="text-gray-600" itemProp="text">
                {t.faq1Answer || "Our recommended tools include image compressors, color pickers, and format converters that complement your image comparison workflow perfectly."}
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 
              className="font-semibold text-gray-900 mb-2 cursor-pointer hover:text-blue-600 transition-colors"
              onClick={() => handleFaqClick(t.faq2Question || "Are these tools free to use?")}
              itemProp="name"
            >
              {t.faq2Question || "Are these tools free to use?"}
            </h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p className="text-gray-600" itemProp="text">
                {t.faq2Answer || "Most of our recommended tools offer free tiers or are completely free. Check each tool's website for specific pricing details."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
