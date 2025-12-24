// Path: src/components/sections/CallbackRequest.tsx
// Description: "Sizi Arayalım" popup modal for callback requests
// Usage: Import in layout.tsx and render at root level

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    setIsSubmitting(true);

    // Track conversion
    if (typeof window !== 'undefined') {
      (window as any).trackFormSubmit?.();
    }

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Send to WhatsApp
      const message = `Merhaba, beni aramanızı istiyorum.%0A%0AAdım: ${formData.name}%0ATelefon: ${formData.phone}`;
      window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, '_blank');

      // Close modal after 3 seconds
      setTimeout(() => {
        setIsOpen(false);
        setIsSubmitted(false);
        setFormData({ name: '', phone: '' });
      }, 3000);
    }, 1000);
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
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-emerald-500 px-6 py-8 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-white text-3xl">call</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Sizi Arayalım</h3>
          <p className="text-white/80 text-sm">
            Bilgilerinizi bırakın, 5 dakika içinde sizi arayalım
          </p>
        </div>

        {/* Form */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8">
              <span className="material-symbols-outlined text-5xl text-green-500 mb-4">check_circle</span>
              <h4 className="text-xl font-bold text-secondary mb-2">Teşekkürler!</h4>
              <p className="text-gray-500">En kısa sürede sizi arayacağız.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Adınız Soyadınız
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  placeholder="Ahmet Yılmaz"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Telefon Numaranız
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full h-12 px-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  placeholder="0532 XXX XX XX"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin material-symbols-outlined">progress_activity</span>
                    Gönderiliyor...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined">call</span>
                    Beni Arayın
                  </>
                )}
              </button>
            </form>
          )}

          {/* Alternative */}
          {!isSubmitted && (
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-400 mb-2">veya hemen arayın</p>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
              >
                <span className="material-symbols-outlined">phone</span>
                {siteConfig.contact.phone}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
