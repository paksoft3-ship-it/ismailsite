'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContactButton from '@/components/common/ContactButton';
import siteData from '@/data/site.json';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaShieldAlt, FaTruck } from 'react-icons/fa';
import { trackLead } from '@/lib/tracking/lead';

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    vehicleInfo: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track form submission
    trackLead({
      type: 'form_submit',
      source: 'contact_page_form',
    });

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In production, you would send this to your backend
    console.log('Form submitted:', formData);

    setIsSubmitting(false);
    setIsSubmitted(true);
  };



  return (
    <>
      {/* Hero Section with Background Image - Matching PageHero Design */}
      <section className="relative overflow-hidden bg-secondary">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-70">
          <Image
            src="/images/backgrounds/contact-hero.png"
            alt="İletişim"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/60" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 py-20 md:py-32 flex flex-col items-start justify-center min-h-[600px]">
          <div className="max-w-3xl flex flex-col gap-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm w-fit">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-primary text-xs md:text-sm font-bold uppercase tracking-wider">7/24 Hizmet</span>
            </div>

            {/* Title */}
            <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
              İletişim
            </h1>

            {/* Subtitle */}
            <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
              Hasarlı aracınız için fiyat teklifi almak veya sorularınız için bize ulaşın.
              7/24 hizmetinizdeyiz.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
              <ContactButton
                type="phone"
                position="contact_page_hero"
                className="flex h-14 w-full sm:w-auto items-center justify-center rounded-lg bg-primary hover:bg-primary-dark px-8 text-base font-bold text-white shadow-xl shadow-primary/20 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                HEMEN FİYAT AL
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </ContactButton>
              <ContactButton
                type="whatsapp"
                position="contact_page_hero"
                className="flex h-14 w-full sm:w-auto items-center justify-center rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 text-base font-bold transition-all shadow-lg shadow-green-900/20"
              >
                <span className="material-symbols-outlined mr-2">chat</span>
                WhatsApp İle Gönder
              </ContactButton>
            </div>

            {/* Trust Indicators */}
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
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-primary">
              Ana Sayfa
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-secondary font-medium">İletişim</span>
          </nav>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-secondary mb-6">
                İletişim Bilgileri
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <ContactButton
                  type="phone"
                  position="contact_page_info"
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">Telefon</h3>
                    <p className="text-primary font-medium">{siteData.phone}</p>
                    <p className="text-gray-500 text-sm">7/24 ulaşabilirsiniz</p>
                  </div>
                </ContactButton>

                {/* WhatsApp */}
                <ContactButton
                  type="whatsapp"
                  position="contact_page_info"
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-whatsapp/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="text-whatsapp text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">WhatsApp</h3>
                    <p className="text-whatsapp font-medium">Hemen Yazın</p>
                    <p className="text-gray-500 text-sm">Anında cevap alın</p>
                  </div>
                </ContactButton>

                {/* Email */}
                <a
                  href={`mailto:${siteData.email}`}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">E-posta</h3>
                    <p className="text-blue-600 font-medium">{siteData.email}</p>
                    <p className="text-gray-500 text-sm">Detaylı bilgi için</p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-orange-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">Adres</h3>
                    <p className="text-gray-600">{siteData.address}</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">Çalışma Saatleri</h3>
                    <p className="text-gray-600">{siteData.workingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-secondary mb-2">
                  Ücretsiz Fiyat Teklifi Alın
                </h2>
                <p className="text-gray-500 mb-6">
                  Formu doldurun, size en kısa sürede dönelim.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <span className="material-symbols-outlined text-6xl text-primary mb-4">
                      check_circle
                    </span>
                    <h3 className="text-2xl font-bold text-secondary mb-2">
                      Talebiniz Alındı!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      En kısa sürede sizinle iletişime geçeceğiz.
                    </p>
                    <ContactButton
                      type="whatsapp"
                      position="contact_page_form_success"
                      whatsappMessage={formData.vehicleInfo
                        ? `Merhaba, ${formData.vehicleInfo} aracım için fiyat teklifi almak istiyorum.`
                        : 'Merhaba, hasarlı aracım için fiyat teklifi almak istiyorum.'}
                      className="btn-whatsapp"
                    >
                      <FaWhatsapp className="text-xl" />
                      Hemen WhatsApp&apos;tan Yazın
                    </ContactButton>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Adınız Soyadınız *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                          placeholder="Adınız Soyadınız"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Telefon Numaranız *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                          placeholder="05XX XXX XX XX"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          E-posta Adresiniz
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                          placeholder="ornek@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                          Şehir
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                          placeholder="İstanbul"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="vehicleInfo" className="block text-sm font-medium text-gray-700 mb-2">
                        Araç Bilgileri
                      </label>
                      <input
                        type="text"
                        id="vehicleInfo"
                        name="vehicleInfo"
                        value={formData.vehicleInfo}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                        placeholder="Marka, Model, Yıl (ör: Volkswagen Passat 2018)"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Mesajınız
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                        placeholder="Aracınızın durumu hakkında bilgi verin..."
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="animate-spin">⏳</span>
                            Gönderiliyor...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane />
                            Teklif İste
                          </>
                        )}
                      </button>
                      <ContactButton
                        type="whatsapp"
                        position="contact_page_form"
                        whatsappMessage={formData.vehicleInfo
                          ? `Merhaba, ${formData.vehicleInfo} aracım için fiyat teklifi almak istiyorum.`
                          : 'Merhaba, hasarlı aracım için fiyat teklifi almak istiyorum.'}
                        className="btn-whatsapp"
                      >
                        <FaWhatsapp className="text-xl" />
                        WhatsApp
                      </ContactButton>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
