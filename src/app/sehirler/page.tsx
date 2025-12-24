import type { Metadata } from 'next';
import Link from 'next/link';
import citiesData from '@/data/cities.json';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Hizmet Verdiğimiz Şehirler - Türkiye Geneli Hasarlı Araç Alım',
  description: 'Türkiye genelinde 81 ilde hasarlı, kazalı, hurda ve pert araç alım hizmeti veriyoruz. Bulunduğunuz şehirde ücretsiz ekspertiz ve aynı gün ödeme.',
};

// Group cities by region
const groupedCities = citiesData.cities.reduce((acc: any, city: any) => {
  if (!acc[city.region]) {
    acc[city.region] = [];
  }
  acc[city.region].push(city);
  return acc;
}, {});

const regionOrder = ['Marmara', 'Ege', 'Akdeniz', 'İç Anadolu', 'Karadeniz', 'Doğu Anadolu', 'Güneydoğu Anadolu'];

export default function SehirlerPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary via-gray-900 to-secondary py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Hizmet Verdiğimiz Şehirler
            </h1>
            <p className="text-lg text-gray-300">
              Türkiye genelinde 81 ilde hasarlı araç alım hizmeti sunuyoruz. 
              Bulunduğunuz şehirde ücretsiz ekspertiz, aynı gün nakit ödeme ve ücretsiz çekici hizmetimizden yararlanın.
            </p>
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
            <span className="text-secondary font-medium">Şehirler</span>
          </nav>
        </div>
      </div>

      {/* Popular Cities */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-secondary mb-6">Popüler Şehirler</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {citiesData.cities
              .filter((city: any) => city.isPopular)
              .map((city: any) => (
                <Link
                  key={city.slug}
                  href={`/sehirler/${city.slug}`}
                  className="group bg-primary/5 border border-primary/20 rounded-xl p-4 text-center hover:bg-primary hover:border-primary transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-2xl text-primary group-hover:text-white mb-2 block transition-colors">
                    location_city
                  </span>
                  <h3 className="font-semibold text-secondary group-hover:text-white transition-colors">
                    {city.name}
                  </h3>
                  <p className="text-xs text-gray-500 group-hover:text-white/80 mt-1 transition-colors">
                    {city.plateCode} Plaka
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* All Cities by Region */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-secondary mb-8">Tüm Şehirler</h2>
          
          <div className="space-y-10">
            {regionOrder.map((region) => (
              groupedCities[region] && (
                <div key={region}>
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined">map</span>
                    {region} Bölgesi
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    {groupedCities[region]
                      .sort((a: any, b: any) => a.name.localeCompare(b.name, 'tr'))
                      .map((city: any) => (
                        <Link
                          key={city.slug}
                          href={`/sehirler/${city.slug}`}
                          className="bg-white border border-gray-200 rounded-lg px-4 py-3 hover:border-primary hover:shadow-md transition-all text-center"
                        >
                          <span className="text-secondary font-medium">{city.name}</span>
                          <span className="text-gray-400 text-sm ml-1">({city.plateCode})</span>
                        </Link>
                      ))}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
