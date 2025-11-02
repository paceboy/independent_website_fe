// Google AdSense 配置
export const ADSENSE_CONFIG = {
  // 您的 AdSense 发布商 ID
  publisherId: 'ca-pub-123456', // 更新为自己的
  
  // 广告单元配置
  adUnits: {
    // 首页横幅广告
    homeBanner: {
      slot: '3951498119', // 横幅广告位 ID
      format: 'auto',
      responsive: true,
      style: {
        display: 'block',
        width: '100%',
        height: '250px'
      }
    },
    
    // 侧边栏广告
    sidebar: {
      slot: '3951498119', // 使用首页横幅广告的 Slot ID
      format: 'auto',
      responsive: true,
      style: {
        display: 'block',
        width: '300px',
        height: '600px'
      }
    },
    
    // 文章内广告
    inArticle: {
      slot: '9012253107', // 文章内广告位 ID
      format: 'fluid',
      layout: 'in-article',
      style: {
        display: 'block',
        textAlign: 'center'
      }
    },
    
    // 文章底部广告
    articleBottom: {
      slot: '3951498119', // 使用首页横幅广告的 Slot ID
      format: 'auto',
      responsive: true,
      style: {
        display: 'block',
        width: '100%',
        height: '250px'
      }
    }
  }
} as const;

// AdSense 脚本加载函数
export const loadAdSenseScript = () => {
  if (typeof window === 'undefined') return;
  
  // 检查是否已经加载
  if (window.adsbygoogle) return;
  
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CONFIG.publisherId}`;
  script.crossOrigin = 'anonymous';
  
  document.head.appendChild(script);
};

// 推送广告到 dataLayer
export const pushAdToDataLayer = (adSlot: string) => {
  if (typeof window === 'undefined') return;
  
  try {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  } catch (error) {
    console.error('AdSense error:', error);
  }
};

// 声明全局类型
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}
