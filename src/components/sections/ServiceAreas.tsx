// Path: src/components/sections/ServiceAreas.tsx
// Description: Map showing coverage areas across Turkey
// Usage: Add to homepage, about page, or create a dedicated coverage page

'use client';

import Link from 'next/link';
import citiesData from '@/data/cities.json';

export default function ServiceAreas() {
  const regions = [
    { name: 'Marmara', cities: citiesData.cities.filter(c => c.region === 'Marmara'), color: 'bg-blue-500' },
    { name: 'Ege', cities: citiesData.cities.filter(c => c.region === 'Ege'), color: 'bg-emerald-500' },
    { name: 'Akdeniz', cities: citiesData.cities.filter(c => c.region === 'Akdeniz'), color: 'bg-orange-500' },
    { name: 'İç Anadolu', cities: citiesData.cities.filter(c => c.region === 'İç Anadolu'), color: 'bg-purple-500' },
    { name: 'Karadeniz', cities: citiesData.cities.filter(c => c.region === 'Karadeniz'), color: 'bg-teal-500' },
    { name: 'Doğu Anadolu', cities: citiesData.cities.filter(c => c.region === 'Doğu Anadolu'), color: 'bg-red-500' },
    { name: 'Güneydoğu Anadolu', cities: citiesData.cities.filter(c => c.region === 'Güneydoğu Anadolu'), color: 'bg-amber-500' },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-bold text-sm tracking-wider uppercase mb-2 block">
            HİZMET ALANI
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
            Türkiye'nin Her Yerindeyiz
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            81 ilde hasarlı araç alım hizmeti veriyoruz
          </p>
        </div>

        {/* Map Placeholder with Stats */}
        <div className="relative bg-[#1a2c2b] rounded-2xl overflow-hidden mb-12">
          <div className="aspect-[16/9] md:aspect-[21/9] flex items-center justify-center relative">
            {/* Turkey Map SVG Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="material-symbols-outlined text-[200px] md:text-[300px] text-primary">
                map
              </span>
            </div>

            {/* Stats Overlay */}
            <div className="relative z-10 grid grid-cols-3 gap-8 md:gap-16 text-center">
              <div>
                <div className="text-4xl md:text-6xl font-extrabold text-white">81</div>
                <div className="text-gray-400 text-sm md:text-base">İl</div>
              </div>
              <div>
                <div className="text-4xl md:text-6xl font-extrabold text-primary">922</div>
                <div className="text-gray-400 text-sm md:text-base">İlçe</div>
              </div>
              <div>
                <div className="text-4xl md:text-6xl font-extrabold text-white">7/24</div>
                <div className="text-gray-400 text-sm md:text-base">Hizmet</div>
              </div>
            </div>

            {/* Animated Dots */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full animate-ping"></div>
            <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-primary rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        {/* Regions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {regions.map((region) => (
            <div
              key={region.name}
              className="bg-[#1a2c2b] rounded-xl p-4 border border-white/5"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-3 h-3 rounded-full ${region.color}`}></div>
                <h3 className="font-bold text-white">{region.name}</h3>
                <span className="text-gray-500 text-sm ml-auto">{region.cities.length} il</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {region.cities.slice(0, 5).map((city) => (
                  <Link
                    key={city.slug}
                    href={`/sehirler/${city.slug}`}
                    className="text-xs text-gray-400 hover:text-primary transition-colors"
                  >
                    {city.name}
                  </Link>
                ))}
                {region.cities.length > 5 && (
                  <span className="text-xs text-gray-500">+{region.cities.length - 5}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/sehirler"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-lg transition-all"
          >
            Tüm Şehirleri Gör
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
