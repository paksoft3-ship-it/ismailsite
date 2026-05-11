// Path: src/components/sections/QuickContactForm.tsx
// Description: Inline mini form (name, phone, plate) for quick contact
// Usage: Add to homepage after Hero, or embed in any section

'use client';

import { useState } from 'react';
import siteConfig from '@/data/site.json';
import { trackLead } from '@/lib/tracking/lead';

export default function QuickContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    plate: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track conversion - Form Submit ONLY
    trackLead({
      type: 'form_submit',
      source: 'quick_contact_form',
    });

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Open WhatsApp with form data - NO tracking here to prevent double counting
      const message = `Merhaba, araç satışı için teklif almak istiyorum.%0A%0AAdım: ${formData.name}%0ATelefon: ${formData.phone}%0APlaka: ${formData.plate}`;
      window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`, '_blank');
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <section className="py-8 bg-gradient-to-r from-primary to-emerald-500">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
            <span className="material-symbols-outlined text-5xl text-white mb-4">check_circle</span>
            <h3 className="text-xl font-bold text-white mb-2">Talebiniz Alındı!</h3>
            <p className="text-white/80">En kısa sürede sizinle iletişime geçeceğiz.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 bg-gradient-to-r from-primary to-emerald-500">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          {/* Text */}
          <div className="text-center lg:text-left lg:flex-shrink-0">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
              Hemen Ücretsiz Teklif Alın
            </h3>
            <p className="text-white/80 text-sm md:text-base">
              30 saniyede formu doldurun, anında fiyat teklifi alın
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex-1 w-full">
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                name="name"
                placeholder="Adınız Soyadınız"
                value={formData.name}
                onChange={handleChange}
                required
                className="flex-1 h-14 px-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Telefon Numarası"
                value={formData.phone}
                onChange={handleChange}
                required
                className="flex-1 h-14 px-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <input
                type="text"
                name="plate"
                placeholder="Araç Plakası"
                value={formData.plate}
                onChange={handleChange}
                required
                className="flex-1 h-14 px-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 uppercase"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="h-14 px-8 rounded-lg bg-white text-primary font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin material-symbols-outlined">progress_activity</span>
                    Gönderiliyor...
                  </>
                ) : (
                  <>
                    Teklif Al
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
