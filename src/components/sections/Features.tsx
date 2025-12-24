import featuresData from '@/data/features.json';

const iconColors: Record<string, string> = {
  blue: 'bg-blue-100 text-blue-600',
  green: 'bg-green-100 text-green-600',
  orange: 'bg-orange-100 text-orange-600',
  primary: 'bg-primary/10 text-primary',
  purple: 'bg-purple-100 text-purple-600',
  red: 'bg-red-100 text-red-600',
};

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">Neden Bizi Tercih Etmelisiniz?</h2>
          <p className="section-subtitle">
            Hasarlı araç alımında Türkiye&apos;nin en güvenilir adresi. Profesyonel hizmet, şeffaf süreç.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuresData.features.map((feature: any) => (
            <div
              key={feature.id}
              className="card group hover:-translate-y-1"
            >
              <div
                className={`w-16 h-16 rounded-xl ${
                  iconColors[feature.iconColor] || iconColors.primary
                } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <span className="material-symbols-outlined text-3xl">
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
