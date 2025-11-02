
/** @type {import('next').NextConfig} */
const nextConfig = {
  // 优化构建配置
  experimental: {
    // 减少构建时的内存使用
    memoryBasedWorkersCount: true,
  },
  // 减少构建日志
  logging: {
    fetches: {
      fullUrl: false,
    },
  },
  // SEO 优化配置
  // output: 'export', // 注释掉静态导出，因为与中间件不兼容
  trailingSlash: true, // 添加尾部斜杠，提升 SEO
  images: {
    unoptimized: false, // 启用图片优化
  },
  // 压缩配置
  compress: true,
  // 性能优化
  poweredByHeader: false, // 移除 X-Powered-By 头
  generateEtags: false, // 禁用 ETags
};

export default nextConfig;
