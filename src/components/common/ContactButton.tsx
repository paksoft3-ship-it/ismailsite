'use client';

import React from 'react';
import siteData from '@/data/site.json';
import { trackLead } from '@/lib/tracking/lead';

interface ContactButtonProps {
    type: 'phone' | 'whatsapp';
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
    showIcon?: boolean;
    position: string; // Made required to ensure granular tracking
    whatsappMessage?: string;
    suppressTracking?: boolean;
}

export default function ContactButton({
    type,
    children,
    className = '',
    onClick,
    position,
    whatsappMessage,
    suppressTracking = false,
}: ContactButtonProps) {

    const handlePhoneClick = (e: React.MouseEvent) => {
        if (!suppressTracking) {
            trackLead({
                type: 'phone_call',
                source: position,
                label: typeof children === 'string' ? children : 'Phone Button'
            });
        }
        if (onClick) onClick();
    };

    const handleWhatsAppClick = (e: React.MouseEvent) => {
        if (!suppressTracking) {
            trackLead({
                type: 'whatsapp_call',
                source: position,
                label: typeof children === 'string' ? children : 'WhatsApp Button'
            });
        }

        if (onClick) onClick();
    };

    if (type === 'phone') {
        // Ensure siteData.phone exists, fallback if necessary (though siteData usually has it)
        const phoneNumber = siteData.phone || '';
        return (
            <a
                href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                onClick={handlePhoneClick}
                className={className}
                aria-label="Telefonla Ara"
            >
                {children}
            </a>
        );
    }

    if (type === 'whatsapp') {
        const message = whatsappMessage || 'Merhaba, hasarlı aracım için fiyat teklifi almak istiyorum.';
        // Ensure siteData.whatsapp exists
        const whatsappNumber = siteData.contact?.whatsapp || siteData.whatsapp || '';
        // Note: siteData structure might vary, checking both just in case, or stick to what was there.
        // Previous code used siteData.whatsapp.

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        return (
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className={className}
                aria-label="WhatsApp ile İletişime Geç"
            >
                {children}
            </a>
        );
    }

    return null;
}
