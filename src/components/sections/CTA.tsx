'use client';

import siteData from '@/data/site.json';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import ContactButton from '@/components/common/ContactButton';

interface CTAProps {
  title?: string;
  subtitle?: string;
}

export default function CTA({
  title = 'Hemen Ücretsiz Teklif Alın!',
  subtitle = 'Aracınızın değerini öğrenmek için bizi arayın veya WhatsApp üzerinden ulaşın. 7/24 hizmetinizdeyiz.',
}: CTAProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ContactButton
              type="phone"
              position="cta"
              className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <FaPhone className="text-xl" />
              {siteData.phone}
            </ContactButton>
            <ContactButton
              type="whatsapp"
              position="cta"
              className="w-full sm:w-auto bg-whatsapp hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <FaWhatsapp className="text-2xl" />
              WhatsApp ile Yaz
            </ContactButton>
          </div>

          <p className="mt-6 text-white/70 text-sm">
            7/24 Hizmet • Aynı Gün Ödeme • Ücretsiz Değerlendirme
          </p>
        </div>
      </div>
    </section>
  );
}
