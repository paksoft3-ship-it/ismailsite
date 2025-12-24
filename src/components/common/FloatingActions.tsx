'use client';

import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import ChatWidget from './ChatWidget';
import siteConfig from '@/data/site.json';

export default function FloatingActions() {
    const handlePhoneClick = () => {
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'conversion', {
                send_to: `${siteConfig.googleAds.conversionId}/${siteConfig.googleAds.phoneConversionLabel}`,
            });
        }
    };

    const handleWhatsappClick = () => {
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'conversion', {
                send_to: `${siteConfig.googleAds.conversionId}/${siteConfig.googleAds.whatsappConversionLabel}`,
            });
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">

            {/* Phone Button */}
            <a
                href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
                onClick={handlePhoneClick}
                className="w-14 h-14 bg-white text-primary rounded-full shadow-lg border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-all hover:scale-110 active:scale-95 group relative"
                aria-label="Telefonla Ara"
            >
                <FaPhone className="text-xl transform group-hover:rotate-12 transition-transform" />
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-secondary text-xs font-bold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    Hemen Ara
                </span>
            </a>

            {/* WhatsApp Button */}
            <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsappClick}
                className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-green-900/20 flex items-center justify-center hover:bg-[#20bd5a] transition-all hover:scale-110 active:scale-95 group relative"
                aria-label="WhatsApp"
            >
                <FaWhatsapp className="text-3xl" />
                <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-secondary text-xs font-bold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    WhatsApp
                </span>
            </a>

            {/* Chat Bot Widget */}
            <ChatWidget />
        </div>
    );
}
