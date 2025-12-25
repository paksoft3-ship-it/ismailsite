import type { Metadata } from 'next';
import Link from 'next/link';
import servicesData from '@/data/services.json';
import PageHero from '@/components/common/PageHero';
import CTA from '@/components/sections/CTA';
import ServiceAreas from '@/components/sections/ServiceAreas';
import CallbackRequest from '@/components/sections/CallbackRequest';
import Testimonials from '@/components/sections/Testimonials';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz - Hasarlı Araç Alım Hizmetleri',
  description: 'Hasarlı, kazalı, hurda, pert, motor arızalı ve çekme belgeli araç alım hizmetleri. Her türlü sorunlu aracınız için en iyi fiyat teklifini alın.',
};

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  red: { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' },
  yellow: { bg: 'bg-yellow-50', text: 'text-yellow-600', border: 'border-yellow-200' },
  green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' },
  primary: { bg: 'bg-primary/5', text: 'text-primary', border: 'border-primary/20' },
};

export default function HizmetlerPage() {
  return (
    <>
      <PageHero
        title="Hizmetlerimiz"
        subtitle="Her türlü hasarlı, kazalı ve sorunlu aracınız için profesyonel alım hizmeti sunuyoruz. Türkiye genelinde 7/24 hizmetinizdeyiz."
        backgroundImage="/images/backgrounds/services-hero.png"
        badgeText="Profesyonel Hizmet"
      />

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-primary">
              Ana Sayfa
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-secondary font-medium">Hizmetler</span>
          </nav>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.services.map((service: any) => {
              const colors = colorClasses[service.iconColor] || colorClasses.primary;
              return (
                <Link
                  key={service.slug}
                  href={`/hizmetler/${service.slug}`}
                  className={`group block ${colors.bg} border ${colors.border} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  <div
                    className={`w-16 h-16 ${colors.bg} border ${colors.border} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <span className={`material-symbols-outlined text-3xl ${colors.text}`}>
                      {service.icon}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-secondary mb-3">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <span className={`inline-flex items-center gap-2 ${colors.text} font-semibold group-hover:gap-3 transition-all`}>
                    Detaylı Bilgi
                    <span className="material-symbols-outlined text-xl">arrow_forward</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <ServiceAreas />
      <CallbackRequest />
      <Testimonials />
      <CTA />
    </>
  );
}
