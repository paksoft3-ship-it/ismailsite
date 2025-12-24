'use client';

import Link from 'next/link';
import Image from 'next/image';
import siteConfig from '@/data/site.json';

interface PageHeroProps {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
    badgeText?: string;
    whatsappMessage?: string;
    children?: React.ReactNode;
}

export default function PageHero({
    title,
    subtitle,
    backgroundImage,
    badgeText = "Hasarlı Araç Alım Merkezi",
    whatsappMessage,
    children
}: PageHeroProps) {

    const finalWhatsappLink = whatsappMessage
        ? `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`
        : `https://wa.me/${siteConfig.contact.whatsapp}`;

    return (
        <section className={`relative overflow-hidden ${backgroundImage ? 'bg-secondary' : 'bg-gradient-to-br from-secondary via-gray-900 to-secondary'}`}>
            {/* Background Image */}
            {backgroundImage && (
                <div className="absolute inset-0 z-0 opacity-70">
                    <Image
                        src={backgroundImage}
                        alt={title}
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                        quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/60"></div>
                </div>
            )}

            <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 py-20 md:py-32 flex flex-col items-start justify-center min-h-[600px]">
                <div className="max-w-3xl flex flex-col gap-8">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm w-fit">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                        </span>
                        <span className="text-primary text-xs md:text-sm font-bold uppercase tracking-wider">{badgeText}</span>
                    </div>

                    <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                            {subtitle}
                        </p>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
                        <Link
                            href={`tel:${siteConfig.contact.phone}`}
                            className="flex h-14 w-full sm:w-auto items-center justify-center rounded-lg bg-primary hover:bg-primary-dark px-8 text-base font-bold text-white shadow-xl shadow-primary/20 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                            onClick={() => (window as any).trackPhoneClick?.()}
                        >
                            HEMEN FİYAT AL
                            <span className="material-symbols-outlined ml-2">arrow_forward</span>
                        </Link>
                        <Link
                            href={finalWhatsappLink}
                            target="_blank"
                            className="flex h-14 w-full sm:w-auto items-center justify-center rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 text-base font-bold transition-all shadow-lg shadow-green-900/20"
                            onClick={() => (window as any).trackWhatsAppClick?.()}
                        >
                            <span className="material-symbols-outlined mr-2">chat</span>
                            WhatsApp İle Gönder
                        </Link>
                    </div>

                    {/* Trust Indicators - Synced with Hero.tsx */}
                    <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 md:gap-10 text-sm font-semibold text-gray-300">
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-[24px]">verified_user</span>
                            <span>Güvenli İşlem</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-[24px]">bolt</span>
                            <span>Hızlı Ödeme</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary text-[24px]">local_shipping</span>
                            <span>Yerinden Alım</span>
                        </div>
                    </div>

                    {children}
                </div>
            </div>
        </section>
    );
}
