import Link from "next/link";
import type { BlogPost } from "./BlogList";

interface BlogPostProps {
  post: BlogPost;
  t: any;
  lang: string;
}

export default function BlogPost({ post, t, lang }: BlogPostProps) {
  return (
    <article className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 sm:p-6 lg:p-8">
          {/* 返回按钮 */}
          <Link
            href={`/${lang}/blog`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4 sm:mb-6 transition-colors duration-200 text-sm sm:text-base"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {t.backToBlog}
          </Link>

          {/* 文章标题 */}
          <header className="mb-6 sm:mb-8 mt-2 sm:mt-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 text-center px-2">
              {post.title}
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center text-gray-600 text-xs sm:text-sm lg:text-base space-y-1 sm:space-y-0 sm:space-x-4">
              <time>
                {t.publishedOn} {new Date(post.publishedAt).toLocaleDateString(lang === 'zh' ? 'zh-CN' : 'en-US')}
              </time>
              {post.author && (
                <span>作者: {post.author}</span>
              )}
            </div>
          </header>

          {/* 文章内容 */}
          <div className="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl max-w-3xl mx-auto">
            {post.content ? (
              <div
                className="text-gray-800 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            ) : (
              <p className="text-gray-800 leading-relaxed">{post.summary}</p>
            )}
          </div>

          {/* 标签 */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 text-center">
              <h3 className="text-xs sm:text-sm font-medium text-gray-900 mb-2 sm:mb-3">标签:</h3>
              <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 text-xs sm:text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

