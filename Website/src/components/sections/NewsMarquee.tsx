// Path: src/components/sections/NewsMarquee.tsx
// Description: Scrolling announcement bar for promotions and news
// Usage: Add at the very top of the page, above the header (in layout.tsx)

'use client';

import { useState } from 'react';

export default function NewsMarquee() {
  const [isVisible, setIsVisible] = useState(true);

  const announcements = [
    '🎉 Ocak Ayına Özel %10 Ekstra Değerleme!',
    '🚗 15.000+ Araç Alım Tecrübesi',
    '💰 Aynı Gün Nakit Ödeme Garantisi',
    '🏆 Türkiye\'nin 1 Numaralı Hasarlı Araç Alım Merkezi',
    '📞 7/24 Ücretsiz Danışma Hattı',
  ];

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-2 relative overflow-hidden">
      {/* Close Button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-1 hover:bg-white/20 rounded transition-colors"
        aria-label="Kapat"
      >
        <span className="material-symbols-outlined text-sm">close</span>
      </button>

      {/* Scrolling Container */}
      <div className="flex animate-marquee whitespace-nowrap pr-8">
        {[...announcements, ...announcements].map((text, index) => (
          <span key={index} className="mx-8 text-sm font-medium flex items-center gap-2">
            {text}
            <span className="text-white/50">•</span>
          </span>
        ))}
      </div>

      {/* CSS for animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
