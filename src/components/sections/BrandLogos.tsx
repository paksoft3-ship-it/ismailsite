// Path: src/components/sections/BrandLogos.tsx
// Description: Car brand logos carousel showing brands we buy
// Usage: Add to homepage after Features section or before Testimonials

'use client';

import guaranteesData from '@/data/guarantees.json';

export default function BrandLogos() {
  // Duplicate brands for seamless infinite scroll
  const brands = [...guaranteesData.brands, ...guaranteesData.brands];

  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-gray-500 text-sm uppercase tracking-wider font-medium">
            Tüm Markalardan Araç Alıyoruz
          </p>
        </div>

        {/* Scrolling Logos */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          {/* Scrolling Container */}
          <div className="flex animate-scroll">
            {brands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex-shrink-0 w-32 md:w-40 mx-4 md:mx-6"
              >
                <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 flex items-center justify-center h-20 md:h-24 hover:shadow-md transition-all group">
                  {/* Placeholder - replace with actual logos */}
                  <span className="text-gray-400 group-hover:text-secondary font-bold text-sm md:text-base transition-colors">
                    {brand.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
