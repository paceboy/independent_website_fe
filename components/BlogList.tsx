import Link from "next/link";

export interface BlogPost {
  id: number;
  title: string;
  summary: string;
  content?: string;
  publishedAt: string;
  author?: string;
  tags?: string[];
  image?: string;
}

interface BlogListProps {
  posts: BlogPost[];
  t: any;
  lang: string;
}

export default function BlogList({ posts, t, lang }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">{t.noPosts}</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid gap-3 sm:gap-4 lg:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden"
          >
            {post.image && (
              <div className="relative w-full aspect-[16/9] bg-gray-100 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            )}
            <div className="p-3 sm:p-4 lg:p-5">
              <h2 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 text-gray-900 line-clamp-2">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-3 sm:mb-4 line-clamp-3 text-xs sm:text-sm lg:text-base">
                {post.summary}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                <time className="text-xs sm:text-sm text-gray-500">
                  {t.publishedOn} {new Date(post.publishedAt).toLocaleDateString(lang === 'zh' ? 'zh-CN' : 'en-US')}
                </time>
                <Link
                  href={`/${lang}/blog/${post.id}`}
                  className="inline-flex items-center px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 bg-blue-600 text-white text-xs sm:text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  {t.readMore}
                </Link>
              </div>
              {post.tags && post.tags.length > 0 && (
                <div className="mt-3 sm:mt-4 flex flex-wrap gap-1 sm:gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

