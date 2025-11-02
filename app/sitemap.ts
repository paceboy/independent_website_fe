import { MetadataRoute } from 'next'
import { getBlogPosts } from './[lang]/page'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.onepointstar.com'
  const languages = ['en', 'zh']
  
  // 静态页面
  const staticPages = [
    '',
    '/about',
    '/blog',
    '/tools',
    '/privacy',
    '/terms'
  ]
  
  // 生成静态页面的 sitemap 条目
  const staticUrls: MetadataRoute.Sitemap = []
  
  for (const page of staticPages) {
    for (const lang of languages) {
      const url = page === '' ? `${baseUrl}/${lang}` : `${baseUrl}/${lang}${page}`
      staticUrls.push({
        url,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : page === '/blog' || page === '/tools' ? 'weekly' : 'monthly',
        priority: page === '' ? 1.0 : page === '/blog' || page === '/tools' ? 0.8 : 0.7,
      })
    }
  }
  
  // 生成博客文章的 sitemap 条目
  const blogUrls: MetadataRoute.Sitemap = []
  
  for (const lang of languages) {
    const posts = await getBlogPosts(lang)
    
    for (const post of posts) {
      blogUrls.push({
        url: `${baseUrl}/${lang}/blog/${post.id}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: 'monthly',
        priority: 0.6,
      })
    }
  }
  
  return [...staticUrls, ...blogUrls]
}

