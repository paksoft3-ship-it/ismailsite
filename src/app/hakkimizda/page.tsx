import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import siteData from '@/data/site.json';
import Features from '@/components/sections/Features';
import CTA from '@/components/sections/CTA';
import ContactButton from '@/components/common/ContactButton';
import { FaCheck, FaUsers, FaCar, FaHandshake, FaAward } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Hakkımızda - Hasarlı Araç Alım Merkezi',
  description: 'Türkiye genelinde hasarlı, kazalı, pert ve hurda araç alımında güvenilir çözüm ortağınız. Yıllara dayanan tecrübe, binlerce mutlu müşteri.',
};

const stats = [
  { icon: FaUsers, value: '10.000+', label: 'Mutlu Müşteri' },
  { icon: FaCar, value: '15.000+', label: 'Alınan Araç' },
  { icon: FaHandshake, value: '81', label: 'İl Hizmeti' },
  { icon: FaAward, value: '15+', label: 'Yıllık Tecrübe' },
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

export default function HakkimizdaPage() {


  return (
    <>
      {/* Hero Section - Matching PageHero Design Exactly */}
      <section className="relative overflow-hidden bg-secondary">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-70">
          <Image
            src="/images/backgrounds/about-hero.png"
            alt="Hakkımızda"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/60" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 py-20 md:py-32 flex flex-col items-start justify-center min-h-[600px]">
          <div className="max-w-3xl flex flex-col gap-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm w-fit">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-primary text-xs md:text-sm font-bold uppercase tracking-wider">15+ Yıllık Tecrübe</span>
            </div>

            {/* Title */}
            <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
              Hakkımızda
            </h1>

            {/* Subtitle */}
            <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
              Türkiye genelinde hasarlı araç alımında güvenilir çözüm ortağınız.
              15 yılı aşkın tecrübemiz ve binlerce mutlu müşterimizle hizmetinizdeyiz.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
              <ContactButton
                type="phone"
                position="about_page_hero"
                className="flex h-14 w-full sm:w-auto items-center justify-center rounded-lg bg-primary hover:bg-primary-dark px-8 text-base font-bold text-white shadow-xl shadow-primary/20 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                HEMEN FİYAT AL
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </ContactButton>
              <ContactButton
                type="whatsapp"
                position="about_page_hero"
                whatsappMessage='Merhaba, hizmetleriniz hakkında bilgi almak istiyorum.'
                className="flex h-14 w-full sm:w-auto items-center justify-center rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 text-base font-bold transition-all shadow-lg shadow-green-900/20"
              >
                <span className="material-symbols-outlined mr-2">chat</span>
                WhatsApp İle Gönder
              </ContactButton>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 md:gap-10 text-sm font-semibold text-gray-300">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[24px]">verified_user</span>
                <span>Güvenli İşlem</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[24px]">bolt</span>
                <span>Hızlı Ödeme</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[24px]">local_shipping</span>
                <span>Yerinden Alım</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-primary">
              Ana Sayfa
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-secondary font-medium">Hakkımızda</span>
          </nav>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Hasarlı Araç Alımında Türkiye&apos;nin Güvenilir Adresi
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                2009 yılından bu yana hasarlı, kazalı, pert ve hurda araç alım satım sektöründe
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

      {/* Values Section */}
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

      <Features />
      <CTA />
    </>
  );
}
