// Path: src/components/sections/BrandLogos.tsx
// Description: Car brand logos carousel showing brands we buy
// Usage: Add to homepage after Features section or before Testimonials

'use client';

// Using text-based brand display with colored backgrounds for reliability
const carBrands = [
  { name: 'BMW', color: '#0066B1' },
  { name: 'Mercedes', color: '#00223D' },
  { name: 'Audi', color: '#BB0A30' },
  { name: 'Volkswagen', color: '#1E3C72' },
  { name: 'Toyota', color: '#EB0A1E' },
  { name: 'Honda', color: '#E40521' },
  { name: 'Ford', color: '#003478' },
  { name: 'Renault', color: '#FFCC33' },
  { name: 'Fiat', color: '#9A0F28' },
  { name: 'Hyundai', color: '#002C5F' },
  { name: 'Peugeot', color: '#0072BC' },
  { name: 'Opel', color: '#F6DC00' },
  { name: 'Nissan', color: '#C3002F' },
  { name: 'Kia', color: '#05141F' },
  { name: 'Skoda', color: '#4BA82E' },
  { name: 'Volvo', color: '#003057' },
];

export default function BrandLogos() {
  // Duplicate brands for seamless infinite scroll
  const brands = [...carBrands, ...carBrands];

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
                className="flex-shrink-0 w-28 md:w-36 mx-3 md:mx-4"
              >
                <div
                  className="rounded-xl p-4 md:p-5 shadow-sm border border-gray-100 flex items-center justify-center h-16 md:h-20 hover:shadow-md transition-all group bg-white"
                >
                  <span
                    className="font-bold text-sm md:text-base tracking-tight"
                    style={{ color: brand.color }}
                  >
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
          animation: scroll 25s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
