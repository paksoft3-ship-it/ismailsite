import Link from 'next/link';
import citiesData from '@/data/cities.json';

interface CitySelectorProps {
  limit?: number;
  showAllLink?: boolean;
}

export default function CitySelector({ limit = 12, showAllLink = true }: CitySelectorProps) {
  const popularCities = citiesData.cities
    .filter((city: any) => city.isPopular)
    .slice(0, limit);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">Hizmet Verdiğimiz Şehirler</h2>
          <p className="section-subtitle">
            Türkiye genelinde 81 ilde hasarlı araç alım hizmeti veriyoruz.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {popularCities.map((city: any) => (
            <Link
              key={city.slug}
              href={`/sehirler/${city.slug}`}
              className="group relative bg-gray-50 rounded-xl p-4 text-center hover:bg-primary hover:shadow-lg transition-all duration-300"
            >
              <span className="material-symbols-outlined text-3xl text-primary group-hover:text-white mb-2 block transition-colors">
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

        {/* Show All Link */}
        {showAllLink && (
          <div className="text-center mt-8">
            <Link
              href="/sehirler"
              className="btn-outline"
            >
              <span className="material-symbols-outlined">map</span>
              Tüm Şehirleri Gör
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
