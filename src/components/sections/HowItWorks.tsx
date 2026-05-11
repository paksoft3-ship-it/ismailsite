import featuresData from '@/data/features.json';

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">Nasıl Çalışır?</h2>
          <p className="section-subtitle">
            Sadece 4 adımda aracınızı değerlendirin ve satışınızı tamamlayın.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary via-primary to-primary" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuresData.processSteps.map((step: any, index: number) => (
              <div key={step.id} className="relative text-center group">
                {/* Step Number Circle */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-white rounded-full border-4 border-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform z-10">
                    <span className="material-symbols-outlined text-3xl text-primary">
                      {step.icon}
                    </span>
                  </div>
                  {/* Step Number Badge */}
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md z-20">
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-secondary mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow for mobile/tablet */}
                {index < featuresData.processSteps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <span className="material-symbols-outlined text-primary text-2xl animate-bounce-gentle">
                      arrow_downward
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
