import Link from 'next/link';
import servicesData from '@/data/services.json';

const colorClasses: Record<string, { bg: string; text: string; hover: string }> = {
  red: { bg: 'bg-red-100', text: 'text-red-600', hover: 'hover:bg-red-600' },
  orange: { bg: 'bg-orange-100', text: 'text-orange-600', hover: 'hover:bg-orange-600' },
  yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600', hover: 'hover:bg-yellow-600' },
  green: { bg: 'bg-green-100', text: 'text-green-600', hover: 'hover:bg-green-600' },
  blue: { bg: 'bg-blue-100', text: 'text-blue-600', hover: 'hover:bg-blue-600' },
  purple: { bg: 'bg-purple-100', text: 'text-purple-600', hover: 'hover:bg-purple-600' },
  primary: { bg: 'bg-primary/10', text: 'text-primary', hover: 'hover:bg-primary' },
};

export default function VehicleTypes() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hangi Araçları Alıyoruz?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Her türlü hasarlı, kazalı ve sorunlu aracı değerlendiriyoruz.
          </p>
        </div>

        {/* Vehicle Types Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.services.map((service: any) => {
            const colors = colorClasses[service.iconColor] || colorClasses.primary;
            return (
              <Link
                key={service.slug}
                href={`/hizmetler/${service.slug}`}
                className={`group relative bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 ${colors.hover} hover:text-white transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-14 h-14 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors`}
                  >
                    <span
                      className={`material-symbols-outlined text-2xl ${colors.text} group-hover:text-white transition-colors`}
                    >
                      {service.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {service.shortTitle}
                    </h3>
                    <p className="text-gray-400 group-hover:text-white/80 text-sm leading-relaxed transition-colors">
                      {service.description}
                    </p>
                  </div>
                </div>
                <span className="absolute top-6 right-6 material-symbols-outlined text-gray-500 group-hover:text-white transition-colors">
                  arrow_forward
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
