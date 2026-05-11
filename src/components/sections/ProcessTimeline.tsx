// Path: src/components/sections/ProcessTimeline.tsx
// Description: Visual vertical timeline showing the purchase process steps
// Usage: Add to homepage, about page, or service detail pages

'use client';
import siteData from '@/data/site.json';
import ContactButton from '@/components/common/ContactButton';

export default function ProcessTimeline() {
  const steps = [
    {
      number: 1,
      title: 'İletişime Geçin',
      description: 'Bizi arayın veya WhatsApp üzerinden aracınızın fotoğraflarını gönderin.',
      icon: 'chat',
      time: '1 dakika',
    },
    {
      number: 2,
      title: 'Ücretsiz Ekspertiz',
      description: 'Uzman ekibimiz aracınızı yerinde veya fotoğraflar üzerinden değerlendirir.',
      icon: 'search',
      time: '30 dakika',
    },
    {
      number: 3,
      title: 'Fiyat Teklifi',
      description: 'Aracınız için en iyi fiyat teklifini alın. Pazarlık yapmayın, en iyi fiyatı veriyoruz.',
      icon: 'payments',
      time: '1 saat',
    },
    {
      number: 4,
      title: 'Anlaşma & Evrak',
      description: 'Teklifimizi kabul edin, noter randevusu ve evrak işlemlerini biz halledelim.',
      icon: 'description',
      time: 'Aynı gün',
    },
    {
      number: 5,
      title: 'Araç Teslimi',
      description: 'Aracınızı bulunduğunuz yerden ücretsiz çekici ile alıyoruz.',
      icon: 'local_shipping',
      time: 'Aynı gün',
    },
    {
      number: 6,
      title: 'Nakit Ödeme',
      description: 'Ödemenizi anında nakit veya banka havalesi olarak yapıyoruz.',
      icon: 'account_balance_wallet',
      time: 'Anında',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold text-sm tracking-wider uppercase mb-2 block">
            SÜREÇ
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary leading-tight">
            Nasıl Çalışıyoruz?
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            6 basit adımda aracınızı nakite çevirin
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2"></div>

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex items-start gap-6 md:gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Content */}
                <div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all inline-block ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}>
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full">
                        {step.time}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-secondary mb-2">{step.title}</h3>
                    <p className="text-gray-500">{step.description}</p>
                  </div>
                </div>

                {/* Circle */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 z-10">
                    <span className="material-symbols-outlined text-2xl">{step.icon}</span>
                  </div>
                </div>

                {/* Empty Space for Alignment */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-500 mb-4">Ortalama işlem süresi: <span className="font-bold text-primary">2-4 saat</span></p>
          <ContactButton
            type="phone"
            position="process_timeline"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-lg transition-all"
          >
            <span className="material-symbols-outlined">call</span>
            Hemen Başlayın
          </ContactButton>
        </div>
      </div>
    </section>
  );
}
