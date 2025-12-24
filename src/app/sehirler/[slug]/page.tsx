import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import citiesData from '@/data/cities.json';
import servicesData from '@/data/services.json';
import siteData from '@/data/site.json';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import { FaWhatsapp, FaPhone, FaCheck, FaMapMarkerAlt } from 'react-icons/fa';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return citiesData.cities.map((city: any) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = citiesData.cities.find((c: any) => c.slug === slug);

  if (!city) {
    return {
      title: 'Şehir Bulunamadı',
    };
  }

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
    },
  };
}

export default async function SehirDetayPage({ params }: Props) {
  const { slug } = await params;
  const city = citiesData.cities.find((c: any) => c.slug === slug);

  if (!city) {
    notFound();
  }

  // Get nearby cities from same region
  const nearbyCities = citiesData.cities
    .filter((c: any) => c.region === city.region && c.slug !== slug)
    .slice(0, 6);

  const heroImage = city.heroImage || '/images/backgrounds/cities-hero.png';
  const whatsappLink = `https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(
    `Merhaba, ${city.name}'da hasarlı aracım için fiyat teklifi almak istiyorum.`
  )}`;

  return (
    <>
      {/* Hero Section - Matching PageHero Design Exactly */}
      <section className="relative overflow-hidden bg-secondary">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-70">
          <Image
            src={heroImage}
            alt={city.name}
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
              <span className="text-primary text-xs md:text-sm font-bold uppercase tracking-wider">{city.plateCode} Plaka • {city.region} Bölgesi</span>
            </div>

            {/* Title */}
            <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
              {city.heroTitle}
            </h1>

            {/* Subtitle */}
            <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
              {city.heroSubtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
              <Link
                href={`tel:${siteData.phone.replace(/\s/g, '')}`}
                className="flex h-14 w-full sm:w-auto items-center justify-center rounded-lg bg-primary hover:bg-primary-dark px-8 text-base font-bold text-white shadow-xl shadow-primary/20 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                HEMEN FİYAT AL
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </Link>
              <Link
                href={whatsappLink}
                target="_blank"
                className="flex h-14 w-full sm:w-auto items-center justify-center rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 text-base font-bold transition-all shadow-lg shadow-green-900/20"
              >
                <span className="material-symbols-outlined mr-2">chat</span>
                WhatsApp İle Gönder
              </Link>
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
            <Link href="/sehirler" className="text-gray-500 hover:text-primary">
              Şehirler
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-secondary font-medium">{city.name}</span>
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
                {city.name} Hasarlı Araç Alımı
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {city.content}
              </p>

              {/* Advantages */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold text-secondary mb-4">
                  {city.name} Hizmet Avantajlarımız
                </h3>
                <div className="space-y-3">
                  {city.advantages.map((advantage: string, index: number) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <FaCheck className="text-white text-sm" />
                      </span>
                      <span className="text-gray-700 font-medium">{advantage}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Districts */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-secondary mb-4">
                  Hizmet Verdiğimiz İlçeler
                </h3>
                <div className="flex flex-wrap gap-2">
                  {city.districts.map((district: string, index: number) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-3 py-2 bg-gray-100 rounded-lg text-gray-700 text-sm"
                    >
                      <FaMapMarkerAlt className="text-primary text-xs" />
                      {district}
                    </span>
                  ))}
                </div>
              </div>

              {/* Services We Offer */}
              <div>
                <h3 className="text-xl font-bold text-secondary mb-4">
                  {city.name}&apos;da Sunduğumuz Hizmetler
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {servicesData.services.map((service: any) => (
                    <Link
                      key={service.slug}
                      href={`/hizmetler/${service.slug}`}
                      className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <span className="material-symbols-outlined text-primary text-2xl">
                        {service.icon}
                      </span>
                      <span className="text-gray-700 font-medium">{service.shortTitle}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Contact Card */}
                <div className="bg-secondary rounded-2xl p-6 text-white mb-6">
                  <h3 className="text-xl font-bold mb-2">{city.name} İletişim</h3>
                  <p className="text-gray-300 text-sm mb-6">
                    {city.name}&apos;da hasarlı aracınız için hemen fiyat teklifi alın.
                  </p>
                  <div className="space-y-3">
                    <a
                      href={`tel:${siteData.phone.replace(/\s/g, '')}`}
                      className="w-full bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <FaPhone />
                      {siteData.phone}
                    </a>
                    <a
                      href={`https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(
                        `Merhaba, ${city.name}'da hasarlı aracım için fiyat teklifi almak istiyorum.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-whatsapp hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <FaWhatsapp className="text-xl" />
                      WhatsApp
                    </a>
                  </div>
                </div>

                {/* City Info */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-secondary mb-4">
                    {city.name} Bilgileri
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-500">Bölge</span>
                      <span className="font-medium text-secondary">{city.region}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-500">Plaka Kodu</span>
                      <span className="font-medium text-secondary">{city.plateCode}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-500">Nüfus</span>
                      <span className="font-medium text-secondary">
                        {parseInt(city.population).toLocaleString('tr-TR')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Nearby Cities */}
                {nearbyCities.length > 0 && (
                  <div className="bg-white border border-gray-200 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-secondary mb-4">
                      {city.region} Bölgesi
                    </h3>
                    <div className="space-y-2">
                      {nearbyCities.map((c: any) => (
                        <Link
                          key={c.slug}
                          href={`/sehirler/${c.slug}`}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <span className="material-symbols-outlined text-primary">
                            location_on
                          </span>
                          <span className="text-gray-700">{c.name}</span>
                          <span className="text-gray-400 text-sm ml-auto">({c.plateCode})</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org Local Business Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: `Hasarlı Araç Alım - ${city.name}`,
            description: city.metaDescription,
            url: `https://hasarliaracalim.com/sehirler/${city.slug}`,
            telephone: siteData.phone,
            areaServed: {
              '@type': 'City',
              name: city.name,
            },
            serviceArea: {
              '@type': 'GeoCircle',
              geoMidpoint: {
                '@type': 'GeoCoordinates',
                addressCountry: 'TR',
              },
            },
          }),
        }}
      />

      <CTA
        title={`${city.name}'da Hasarlı Aracınızı Satın!`}
        subtitle={`${city.name} ve çevresinde hasarlı araç alım hizmeti. Hemen arayın, aynı gün nakit ödeme.`}
      />
    </>
  );
}
