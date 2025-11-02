"use client";

import { useEffect, useState, useRef } from 'react';
import { loadAdSenseScript, pushAdToDataLayer, ADSENSE_CONFIG } from '../lib/adsense';

interface AdSenseWrapperProps {
  adSlot: string;
  adFormat?: 'auto' | 'rectangle' | 'vertical' | 'horizontal' | 'fluid';
  adStyle?: React.CSSProperties;
  className?: string;
  responsive?: boolean;
  layout?: string;
  layoutKey?: string;
  fallbackContent?: React.ReactNode;
  timeout?: number;
}

export default function AdSenseWrapper({ 
  adSlot, 
  adFormat = 'auto', 
  adStyle = { display: 'block' },
  className = '',
  responsive = true,
  layout,
  layoutKey,
  fallbackContent = null,
  timeout = 3000
}: AdSenseWrapperProps) {
  const [showAd, setShowAd] = useState(false);
  const [adLoaded, setAdLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 加载 AdSense 脚本
    loadAdSenseScript();
    
    // 延迟推送广告
    const adTimer = setTimeout(() => {
      pushAdToDataLayer(adSlot);
      setShowAd(true);
    }, 100);

    // 设置超时，如果广告没有加载则隐藏容器
    const timer = setTimeout(() => {
      if (!adLoaded) {
        setShowAd(false);
      }
    }, timeout);

    return () => {
      clearTimeout(timer);
      clearTimeout(adTimer);
    };
  }, [adSlot, timeout, adLoaded]);

  // 监听广告加载状态
  useEffect(() => {
    if (!showAd) return;

    const checkAdStatus = () => {
      if (containerRef.current) {
        const adElement = containerRef.current.querySelector('.adsbygoogle');
        if (adElement) {
          const status = adElement.getAttribute('data-ad-status');
          const rect = adElement.getBoundingClientRect();
          
          if (status === 'filled' || rect.height > 0) {
            setAdLoaded(true);
          }
        }
      }
    };

    // 定期检查广告状态
    const interval = setInterval(checkAdStatus, 500);
    
    // 2秒后停止检查
    const stopCheck = setTimeout(() => {
      clearInterval(interval);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(stopCheck);
    };
  }, [showAd]);

  // 如果超时且没有加载成功，不显示广告容器
  if (!showAd || (!adLoaded && timeout < 2000)) {
    return fallbackContent ? <>{fallbackContent}</> : null;
  }

  return (
    <div ref={containerRef} className={`adsense-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={adStyle}
        data-ad-client={ADSENSE_CONFIG.publisherId}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={responsive ? 'true' : 'false'}
        {...(layout && { 'data-ad-layout': layout })}
        {...(layoutKey && { 'data-ad-layout-key': layoutKey })}
      />
    </div>
  );
}
