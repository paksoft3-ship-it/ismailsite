import servicesData from '@/data/services.json';

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  red: { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' },
  yellow: { bg: 'bg-yellow-50', text: 'text-yellow-600', border: 'border-yellow-200' },
  green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' },
  primary: { bg: 'bg-primary/5', text: 'text-primary', border: 'border-primary/20' },
};

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Hizmetlerimiz</h2>
          <p className="section-subtitle">
            Her türlü hasarlı, kazalı ve sorunlu aracınız için profesyonel alım hizmeti sunuyoruz.
            Türkiye genelinde 7/24 hizmetinizdeyiz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.services.map((service: any) => {
            const colors = colorClasses[service.iconColor] || colorClasses.primary;
            return (
              <div
                key={service.slug}
                className={`group ${colors.bg} border ${colors.border} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div
                  className={`w-16 h-16 ${colors.bg} border ${colors.border} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <span className={`material-symbols-outlined text-3xl ${colors.text}`}>
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
