'use client';

import { useState, useEffect } from 'react';
import siteData from '@/data/site.json';
import { FaWhatsapp, FaPhone, FaComments, FaTimes } from 'react-icons/fa';

export default function FloatingButtons() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = (message: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: `${siteData.googleAds.conversionId}/${siteData.googleAds.whatsappConversionLabel}`,
      });
    }
    window.open(
      `https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: `${siteData.googleAds.conversionId}/${siteData.googleAds.phoneConversionLabel}`,
      });
    }
    window.location.href = `tel:${siteData.phone.replace(/\s/g, '')}`;
  };

  return (
    <>
      {/* Desktop Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:flex flex-col items-end gap-3">
        {/* Tooltip */}
        {showTooltip && !isExpanded && (
          <div className="relative animate-fade-in-up">
            <div className="bg-white rounded-lg shadow-lg px-4 py-3 flex items-center gap-2">
              <span className="text-gray-700 font-medium">Online Teklif Alın!</span>
              <button
                onClick={() => setShowTooltip(false)}
                className="text-gray-400 hover:text-gray-600"
                aria-label="Kapat"
              >
                <FaTimes className="text-sm" />
              </button>
            </div>
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45 shadow-lg" />
          </div>
        )}

        {/* Expanded Options */}
        {isExpanded && (
          <div className="flex flex-col gap-3 animate-fade-in-up">
            <button
              onClick={handlePhoneClick}
              className="w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
              aria-label="Telefon"
            >
              <FaPhone className="text-xl" />
            </button>
            <button
              onClick={() =>
                handleWhatsAppClick('Merhaba, canlı destek almak istiyorum.')
              }
              className="w-14 h-14 bg-primary hover:bg-primary-dark text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
              aria-label="Canlı Destek"
            >
              <FaComments className="text-xl" />
            </button>
          </div>
        )}

        {/* Main WhatsApp Button */}
        <button
          onClick={() => {
            if (isExpanded) {
              handleWhatsAppClick('Merhaba, hasarlı aracım için fiyat teklifi almak istiyorum.');
            } else {
              setIsExpanded(!isExpanded);
              setShowTooltip(false);
            }
          }}
          className="relative w-16 h-16 bg-whatsapp hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 group"
          aria-label="WhatsApp"
        >
          {/* Pulse Ring */}
          <span className="absolute inset-0 rounded-full bg-whatsapp animate-pulse-ring" />
          
          {isExpanded ? (
            <FaWhatsapp className="text-3xl" />
          ) : (
            <>
              <FaWhatsapp className="text-3xl" />
              {/* Notification Badge */}
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold">
                1
              </span>
            </>
          )}
        </button>

        {/* Close button when expanded */}
        {isExpanded && (
          <button
            onClick={() => setIsExpanded(false)}
            className="w-10 h-10 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full shadow flex items-center justify-center transition-all"
            aria-label="Kapat"
          >
            <FaTimes />
          </button>
        )}
      </div>

      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t shadow-lg">
        <div className="grid grid-cols-3 divide-x">
          <button
            onClick={handlePhoneClick}
            className="flex flex-col items-center justify-center py-3 text-blue-500 hover:bg-blue-50 transition-colors"
          >
            <FaPhone className="text-xl mb-1" />
            <span className="text-xs font-medium">Ara</span>
          </button>
          <button
            onClick={() =>
              handleWhatsAppClick('Merhaba, hasarlı aracım için fiyat teklifi almak istiyorum.')
            }
            className="flex flex-col items-center justify-center py-3 text-whatsapp hover:bg-green-50 transition-colors"
          >
            <FaWhatsapp className="text-xl mb-1" />
            <span className="text-xs font-medium">WhatsApp</span>
          </button>
          <button
            onClick={() =>
              handleWhatsAppClick('Merhaba, canlı destek almak istiyorum.')
            }
            className="flex flex-col items-center justify-center py-3 text-primary hover:bg-primary/5 transition-colors"
          >
            <FaComments className="text-xl mb-1" />
            <span className="text-xs font-medium">Canlı Destek</span>
          </button>
        </div>
      </div>

      {/* Mobile bottom padding to prevent content from being hidden */}
      <div className="h-16 md:hidden" />
    </>
  );
}
