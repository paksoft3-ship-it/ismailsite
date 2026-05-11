// Path: src/components/sections/Guarantees.tsx
// Description: Icon boxes with guarantees (en iyi fiyat, aynı gün ödeme, etc.)
// Usage: Add to homepage after Hero, or on about/service pages

import guaranteesData from '@/data/guarantees.json';

export default function Guarantees() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-bold text-sm tracking-wider uppercase mb-2 block">
            GARANTİLERİMİZ
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary leading-tight">
            Neden Bize Güvenmelisiniz?
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Müşteri memnuniyeti için verdiğimiz garantiler
          </p>
        </div>

        {/* Guarantees Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guaranteesData.guarantees.map((guarantee) => (
            <div
              key={guarantee.id}
              className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined text-3xl">{guarantee.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-secondary mb-2">{guarantee.title}</h3>
              <p className="text-gray-500 leading-relaxed">{guarantee.description}</p>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-primary/20 text-4xl">verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-green-50 border border-green-100 rounded-full px-6 py-3">
            <span className="material-symbols-outlined text-green-600 text-2xl">shield</span>
            <span className="text-green-700 font-semibold">
              Tüm garantilerimiz yazılı sözleşme ile güvence altındadır
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
