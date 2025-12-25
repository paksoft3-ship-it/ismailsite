// Path: src/components/sections/CallbackRequest.tsx
// Description: "Sizi Arayalım" popup modal - sends form data directly to WhatsApp
// Usage: Import in pages and render

'use client';

import { useState, useEffect } from 'react';
import siteConfig from '@/data/site.json';

export default function CallbackRequest() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  // Show popup after 30 seconds on first visit
  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('callbackPopupSeen');
    if (!hasSeenPopup && !hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasShown(true);
        localStorage.setItem('callbackPopupSeen', 'true');
      }, 30000);
      return () => clearTimeout(timer);
    }
  }, [hasShown]);

  // Show popup on exit intent (desktop only)
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        localStorage.setItem('callbackPopupSeen', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Track conversion
    if (typeof window !== 'undefined') {
      (window as any).trackFormSubmit?.();
    }

    // Send directly to WhatsApp with form data
    const message = `Merhaba, beni aramanızı istiyorum.%0A%0AAdım: ${formData.name}%0ATelefon: ${formData.phone}`;
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, '_blank');

    // Close modal
    setIsOpen(false);
    setFormData({ name: '', phone: '' });
  };

  const handleDirectWhatsApp = () => {
    const message = 'Merhaba, hasarlı aracım için fiyat teklifi almak istiyorum.';
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] px-6 py-8 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 ring-4 ring-white/30">
            <span className="material-symbols-outlined text-white text-4xl">chat</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">WhatsApp ile Ulaşın</h3>
          <p className="text-white/80 text-sm">
            Bilgilerinizi girin, WhatsApp üzerinden size dönüş yapalım
          </p>
        </div>

        {/* Form */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Adınız Soyadınız
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400 text-xl">person</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full h-12 pl-12 pr-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 focus:border-[#25D366]"
                  placeholder="Ahmet Yılmaz"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Telefon Numaranız
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400 text-xl">smartphone</span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full h-12 pl-12 pr-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 focus:border-[#25D366]"
                  placeholder="0532 XXX XX XX"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-900/20"
            >
              <span className="material-symbols-outlined">chat</span>
              WhatsApp'a Gönder
            </button>
          </form>

          {/* Alternative Options */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-400 text-center mb-4">veya hemen arayın</p>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center justify-center gap-2 w-full h-12 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
