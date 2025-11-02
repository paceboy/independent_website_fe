import Script from 'next/script';

interface GoogleAnalyticsSSRProps {
  trackingId: string;
}

export default function GoogleAnalyticsSSR({ trackingId }: GoogleAnalyticsSSRProps) {
  // 只在生产环境加载
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${trackingId}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
