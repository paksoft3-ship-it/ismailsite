import { FaCheck, FaCar, FaHandshake, FaAward } from 'react-icons/fa';

const stats = [
  { icon: FaCar, value: '10.000+', label: 'Alınan Araç' },
  { icon: FaHandshake, value: '81', label: 'İl Hizmeti' },
  { icon: FaAward, value: '4+', label: 'Yıllık Tecrübe' },
];

const values = [
  {
    title: 'Güvenilirlik',
    description: 'Tüm işlemlerimiz noter huzurunda, yasal prosedürlere uygun şekilde gerçekleştirilir.',
  },
  {
    title: 'Şeffaflık',
    description: 'Fiyatlandırma politikamız tamamen şeffaftır. Gizli maliyet veya komisyon yoktur.',
  },
  {
    title: 'Hız',
    description: 'Aynı gün ekspertiz, aynı gün ödeme garantisi sunuyoruz.',
  },
  {
    title: 'Müşteri Memnuniyeti',
    description: 'Müşterilerimizin memnuniyeti en önemli önceliğimizdir.',
  },
];

export default function AboutSection() {
  return (
    <>
      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="section-title">Hakkımızda</h2>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="text-4xl text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-extrabold text-secondary">
                  {stat.value}
                </div>
                <div className="text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-secondary mb-6">
                Hasarlı Araç Alımında Türkiye&apos;nin Güvenilir Adresi
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                2022 yılından bu yana hasarlı, kazalı, pert ve hurda araç alım satım sektöründe
                faaliyet gösteriyoruz. Türkiye genelinde 81 ilde hizmet ağımız ile müşterilerimize
                en kaliteli ve güvenilir hizmeti sunmayı hedefliyoruz.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Profesyonel ekibimiz, her marka ve model araç için adil ve şeffaf fiyatlandırma
                sunmaktadır. Amacımız, aracınızı satarken karşılaşabileceğiniz tüm zorlukları
                ortadan kaldırarak size kolay ve güvenli bir satış deneyimi yaşatmaktır.
              </p>
              <div className="space-y-3">
                {['7/24 müşteri desteği', 'Aynı gün nakit ödeme', 'Ücretsiz ekspertiz hizmeti', 'Türkiye geneli ücretsiz çekici'].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <FaCheck className="text-white text-xs" />
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 lg:p-12">
              <div className="text-center">
                <span className="material-symbols-outlined text-8xl text-primary mb-4">
                  verified
                </span>
                <h3 className="text-2xl font-bold text-secondary mb-2">
                  Güvenle Tercih Edin
                </h3>
                <p className="text-gray-600">
                  Resmi ve yasal süreçlerle, noter onaylı işlemlerle güvenli alım satım garantisi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Değerlerimiz</h2>
            <p className="section-subtitle">
              İşimizi yaparken benimsediğimiz temel ilkeler.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
