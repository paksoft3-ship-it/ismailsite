// Path: src/components/sections/ServiceAreas.tsx
// Description: Map showing coverage areas across Turkey using a high-quality local SVG
// Usage: Add to homepage, about page, or create a dedicated coverage page

'use client';

import Link from 'next/link';
import Image from 'next/image';
import citiesData from '@/data/cities.json';

// Major cities with approximate positions (percentage based)
// Calibrated for cropped Highcharts Turkey Map (viewBox 0 0 700 300)
// Coordinates calculated from SVG path centroids + 1.5% right shift for visual alignment
const majorCities = [
  { name: 'İstanbul', x: 18.5, y: 15, size: 'lg' },
  { name: 'Ankara', x: 35.5, y: 40, size: 'lg' },
  { name: 'İzmir', x: 8.5, y: 55, size: 'md' },
  { name: 'Bursa', x: 18.5, y: 32, size: 'md' },
  { name: 'Antalya', x: 31.5, y: 80, size: 'md' },
  { name: 'Adana', x: 52.5, y: 73, size: 'md' },
  { name: 'Trabzon', x: 71.5, y: 15, size: 'sm' },
  { name: 'Diyarbakır', x: 77.5, y: 61, size: 'sm' },
  { name: 'Van', x: 89.5, y: 55, size: 'sm' },
  { name: 'Erzurum', x: 79.5, y: 35, size: 'sm' },
  { name: 'Samsun', x: 53.5, y: 14, size: 'sm' },
  { name: 'Konya', x: 37.5, y: 66, size: 'sm' },
  { name: 'Gaziantep', x: 61.5, y: 78, size: 'sm' },
  { name: 'Kayseri', x: 50.5, y: 48, size: 'sm' },
];

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

        {/* Turkey Map */}
        <div className="relative bg-[#1a2c2b] rounded-2xl overflow-visible mb-12 border border-white/5 shadow-2xl">
          <div className="w-full relative aspect-[2.3/1] md:aspect-[2.5/1] flex items-center justify-center">
            <div className="absolute inset-0 p-4 md:p-8">
              <Image
                src="/images/turkey-map.svg"
                alt="Türkiye Haritası"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />

              {/* City dots with ping animation */}
              <div className="absolute inset-0">
                {majorCities.map((city, index) => {
                  return (
                    <div
                      key={city.name}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                      style={{
                        left: `${city.x}%`,
                        top: `${city.y}%`,
                        zIndex: 10
                      }}
                    >
                      <div className="relative flex items-center justify-center">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" style={{ animationDelay: `${index * 0.2}s` }}></span>
                        <span className={`relative inline-flex rounded-full bg-primary ${city.size === 'lg' ? 'h-4 w-4' : city.size === 'md' ? 'h-3 w-3' : 'h-2 w-2'}`}></span>

                        {/* Tooltip/Label */}
                        {city.size === 'lg' && (
                          <span className="absolute top-full mt-2 bg-black/80 text-white text-[10px] md:text-xs px-2 py-1 rounded whitespace-nowrap font-bold">
                            {city.name}
                          </span>
                        )}
                        <span className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap pointer-events-none">
                          {city.name}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Stats - Always below map to prevent obscuring */}
          <div className="relative w-full bg-[#1a2c2b] py-6 rounded-b-2xl border-t border-white/5 z-20">
            <div className="flex justify-center items-center gap-6 md:gap-16">
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-extrabold text-white">81</div>
                <div className="text-gray-400 text-xs md:text-sm uppercase tracking-wider">İl</div>
              </div>
              <div className="w-px h-12 bg-white/10"></div>
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-extrabold text-primary">922</div>
                <div className="text-gray-400 text-xs md:text-sm uppercase tracking-wider">İlçe</div>
              </div>
              <div className="w-px h-12 bg-white/10"></div>
              <div className="text-center">
                <div className="text-3xl md:text-5xl font-extrabold text-white">7/24</div>
                <div className="text-gray-400 text-xs md:text-sm uppercase tracking-wider">Hizmet</div>
              </div>
            </div>
          </div>
        </div>

        {/* Regions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {regions.map((region) => (
            <div
              key={region.name}
              className="bg-[#1a2c2b] rounded-xl p-4 border border-white/5 hover:border-primary/30 transition-colors"
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
