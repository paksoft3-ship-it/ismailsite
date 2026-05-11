'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import siteData from '@/data/site.json';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default function GoogleTagManager() {
  const gaId = process.env.NEXT_PUBLIC_GA4_ID || siteData.gaId;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || siteData.gtmId;
  // Ads ID is usually managed inside GTM, but if initial config is needed:
  // const adsId = process.env.NEXT_PUBLIC_ADS_ID || siteData.googleAds.conversionId;

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;
    gtag('js', new Date());

    if (gaId) gtag('config', gaId);
    // Ads config might be handled by GTM tags, but if we want to keep it consistent with previous code:
    if (siteData.googleAds.conversionId) gtag('config', siteData.googleAds.conversionId);
  }, [gaId]);

  return (
    <>
      {/* Google Tag Manager */}
      {gtmId && (
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
            `,
          }}
        />
      )}

      {/* Google Analytics */}
      {gaId && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />
      )}

      {/* GTM NoScript Fallback */}
      {gtmId && (
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
      )}
    </>
  );
}

// Conversion tracking is now handled by src/lib/tracking/lead.ts
// GTM should be configured to trigger tags on 'lead_action' event.

