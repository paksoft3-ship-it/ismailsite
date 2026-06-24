import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import servicesData from '@/data/services.json';
import siteData from '@/data/site.json';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import Testimonials from '@/components/sections/Testimonials';
import TrustBadges from '@/components/sections/TrustBadges';
import CallbackRequest from '@/components/sections/CallbackRequest';
import ContactButton from '@/components/common/ContactButton';
import { FaWhatsapp, FaPhone, FaCheck } from 'react-icons/fa';
import ServiceSchema from '@/components/seo/ServiceSchema';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const BASE_URL = 'https://www.hasarliaracnoktasi.com';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.services.map((service: any) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.services.find((s: any) => s.slug === slug);

  if (!service) {
    return {
      title: 'Hizmet Bulunamadı',
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.metaKeywords,
    alternates: {
      canonical: service.canonical || `${BASE_URL}/hizmetler/${slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: service.ogUrl || `${BASE_URL}/hizmetler/${slug}`,
      siteName: 'Hasarlı Araç Noktası',
      locale: 'tr_TR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
    },
  };
}

export default async function HizmetDetayPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.services.find((s: any) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const heroImage = service.heroImage || '/images/backgrounds/services-hero.png';

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Ana Sayfa', url: BASE_URL },
          { name: 'Hizmetler', url: `${BASE_URL}/hizmetler` },
          { name: service.shortTitle, url: `${BASE_URL}/hizmetler/${service.slug}` },
        ]}
      />
      <ServiceSchema
        name={service.title}
        description={service.metaDescription}
        url={`${BASE_URL}/hizmetler/${service.slug}`}
        faqs={service.faq}
      />
      {/* Hero Section - Matching PageHero Design Exactly */}
      <section className="relative overflow-hidden bg-secondary">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-70">
          <Image
            src={heroImage}
            alt={service.title}
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
              <span className="text-primary text-xs md:text-sm font-bold uppercase tracking-wider">Profesyonel Hizmet</span>
            </div>

            {/* Title */}
            <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
              {service.heroTitle}
            </h1>

            {/* Subtitle */}
            <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
              {service.heroSubtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
              <ContactButton
                type="phone"
                position="service_page_hero"
                className="flex h-14 w-full sm:w-auto items-center justify-center rounded-lg bg-primary hover:bg-primary-dark px-8 text-base font-bold text-white shadow-xl shadow-primary/20 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                HEMEN FİYAT AL
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </ContactButton>
              <ContactButton
                type="whatsapp"
                position="service_page_hero"
                whatsappMessage={`Merhaba, ${service.shortTitle} hakkında bilgi almak istiyorum.`}
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
          <nav className="flex items-center gap-2 text-sm flex-wrap">
            <Link href="/" className="text-gray-500 hover:text-primary">
              Ana Sayfa
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/hizmetler" className="text-gray-500 hover:text-primary">
              Hizmetler
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-secondary font-medium">{service.shortTitle}</span>
          </nav>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-secondary mb-6">
                {service.h2Intro || service.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {service.content.intro}
              </p>

              {/* Details List */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-secondary mb-4">
                  Hangi Araçları Değerlendiriyoruz?
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.content.details.map((detail: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-gray-50 rounded-lg p-3"
                    >
                      <FaCheck className="text-primary flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold text-secondary mb-4">
                  Avantajlarımız
                </h3>
                <div className="space-y-3">
                  {service.content.benefits.map((benefit: string, index: number) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <FaCheck className="text-white text-sm" />
                      </span>
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Factors Section (NEW) */}
              {service.content.pricingFactors && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-secondary mb-4">
                    {service.shortTitle} Fiyatını Etkileyen Faktörler
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.content.pricingFactors.map((factor: any, index: number) => (
                      <div key={index} className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                        <h4 className="font-bold text-primary mb-1">{factor.title}</h4>
                        <p className="text-sm text-gray-600">{factor.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Common Mistakes Section (NEW) */}
              {service.content.commonMistakes && (
                <div className="mb-8 p-6 bg-red-50 border border-red-100 rounded-2xl">
                  <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined">warning</span>
                    Sık Yapılan Hatalar
                  </h3>
                  <ul className="space-y-3">
                    {service.content.commonMistakes.map((mistake: string, index: number) => (
                      <li key={index} className="flex items-start gap-3 text-red-800 text-sm">
                        <span className="mt-1 w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0" />
                        {mistake}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Competitor Comparison Section (NEW) */}
              {service.content.comparison && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-secondary mb-6">Neden Bizi Tercih Etmelisiniz?</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="p-4 border-b font-bold text-gray-700">Özellik</th>
                          <th className="p-4 border-b font-bold text-primary">Hasarlı Araç Alım Merkezi</th>
                          <th className="p-4 border-b font-bold text-gray-400">Diğerleri</th>
                        </tr>
                      </thead>
                      <tbody>
                        {service.content.comparison.map((item: any, index: number) => (
                          <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                            <td className="p-4 border-b text-gray-600 font-medium">{item.feature}</td>
                            <td className="p-4 border-b text-primary font-bold">
                              <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">check_circle</span>
                                {item.us}
                              </div>
                            </td>
                            <td className="p-4 border-b text-gray-400">{item.others}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Expanded Authority Content (NEW) */}
              {service.content.longDescription && (
                <div className="prose prose-gray max-w-none mb-8">
                  <div dangerouslySetInnerHTML={{ __html: service.content.longDescription }} />
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Contact Card */}
                <div className="bg-secondary rounded-2xl p-6 text-white mb-6">
                  <h3 className="text-xl font-bold mb-4">Hemen İletişime Geçin</h3>
                  <p className="text-gray-300 text-sm mb-6">
                    Aracınız için en iyi fiyat teklifini almak için bizi arayın veya WhatsApp&apos;tan yazın.
                  </p>
                  <div className="space-y-3">
                    <ContactButton
                      type="phone"
                      position="service_page_sidebar"
                      className="w-full bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <FaPhone />
                      {siteData.phone}
                    </ContactButton>
                    <ContactButton
                      type="whatsapp"
                      position="service_page_sidebar"
                      whatsappMessage={`Merhaba, ${service.shortTitle} hakkında bilgi almak istiyorum.`}
                      className="w-full bg-whatsapp hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <FaWhatsapp className="text-xl" />
                      WhatsApp
                    </ContactButton>
                  </div>
                </div>

                {/* Other Services */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-secondary mb-4">
                    Diğer Hizmetlerimiz
                  </h3>
                  <div className="space-y-2">
                    {servicesData.services
                      .filter((s: any) => s.slug !== slug)
                      .map((s: any) => (
                        <Link
                          key={s.slug}
                          href={`/hizmetler/${s.slug}`}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <span className="material-symbols-outlined text-primary">
                            {s.icon}
                          </span>
                          <span className="text-gray-700">{s.shortTitle}</span>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service FAQ */}
      {service.faq && service.faq.length > 0 && (
        <FAQ items={service.faq} />
      )}

      <TrustBadges />
      <CallbackRequest />
      <Testimonials limit={3} />

      <CTA
        title={`${service.shortTitle} için Fiyat Alın!`}
        subtitle="Aracınızın durumunu değerlendirelim ve size en iyi fiyat teklifini sunalım."
      />
    </>
  );
}
