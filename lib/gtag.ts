export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-123456' // 更新为自己的

// 页面浏览追踪
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// 自定义事件追踪
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// 博客文章阅读追踪
export const trackBlogRead = (postId: string, postTitle: string) => {
  event({
    action: 'read_article',
    category: 'engagement',
    label: `blog_${postId}_${postTitle}`,
  })
}

// 工具页面访问追踪
export const trackToolsView = (toolName?: string) => {
  event({
    action: 'view_tools',
    category: 'navigation',
    label: toolName || 'tools_page',
  })
}

// 语言切换追踪
export const trackLanguageSwitch = (fromLang: string, toLang: string) => {
  event({
    action: 'language_switch',
    category: 'user_interaction',
    label: `${fromLang}_to_${toLang}`,
  })
}

// 外部链接点击追踪
export const trackExternalLink = (url: string, linkText?: string) => {
  event({
    action: 'click_external_link',
    category: 'outbound',
    label: linkText || url,
  })
}

// 搜索追踪
export const trackSearch = (searchQuery: string) => {
  event({
    action: 'search',
    category: 'engagement',
    label: searchQuery,
  })
}
