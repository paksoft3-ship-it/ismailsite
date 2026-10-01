import type { Metadata } from 'next';
import PageHero from '@/components/common/PageHero';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import Testimonials from '@/components/sections/Testimonials';
import CallbackRequest from '@/components/sections/CallbackRequest';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

const BASE_URL = 'https://www.hasarliaracnoktasi.com';

export const metadata: Metadata = {
  title: 'Sıkça Sorulan Sorular | Hasarlı Araç Alımı',
  description:
    'Hasarlı araç alım süreci hakkında merak edilenler: ödeme, ücretsiz çekici, ekspertiz, pert ve hurda araç işlemleri ve daha fazlası.',
  keywords: 'hasarlı araç soruları, hasarlı araç satış süreci, pert araç sorular, hurda araç işlemleri',
  alternates: {
    canonical: `${BASE_URL}/sss`,
  },
  openGraph: {
    title: 'Sıkça Sorulan Sorular | Hasarlı Araç Alımı',
    description:
      'Hasarlı araç alım süreci hakkında merak edilenler: ödeme, ücretsiz çekici, ekspertiz, pert ve hurda araç işlemleri ve daha fazlası.',
    url: `${BASE_URL}/sss`,
    siteName: 'Hasarlı Araç Noktası',
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sıkça Sorulan Sorular | Hasarlı Araç Alımı',
    description: 'Hasarlı araç alım süreci hakkında merak edilenler: ödeme, çekici, ekspertiz, pert ve hurda araç işlemleri.',
  },
};

const commonQuestions = [
  {
    question: 'Hasarlı aracım için nasıl fiyat alabilirim?',
    answer:
      'Web sitemizdeki WhatsApp butonuna tıklayarak veya bizi telefonla arayarak aracınızın bilgilerini ve fotoğraflarını paylaşabilirsiniz. Ekibimiz yapacağı inceleme sonrası size en iyi fiyat teklifini sunar.',
  },
  {
    question: 'Hangi illerden araç alımı yapıyorsunuz?',
    answer:
      "Türkiye'nin 81 ilinden ve tüm ilçelerinden araç alımı yapıyoruz. Kendi çekici ağımızla aracınızı olduğu yerden masrafsız bir şekilde teslim alıyoruz.",
  },
  {
    question: 'Ödemeyi ne zaman ve nasıl alırım?',
    answer:
      'Noter satışı esnasında paranız anında banka hesabınıza havale/EFT yapılır veya nakit olarak ödenir. Güvenli ödeme sistemleri (Bloke Çek vb.) kullanılması mümkündür.',
  },
  {
    question: 'Ağır hasarlı veya pert araç alıyor musunuz?',
    answer:
      'Evet, hafif hasarlı, ağır hasarlı, pert kayıtlı, motor arızalı veya çekme belgeli her türlü aracı değerinde satın alıyoruz.',
  },
  {
    question: "Aracımın borcu veya rehini varsa satabilir miyim?",
    answer:
      'Rehinli araçların satışı için önce rehin borcunun kapatılması gerekir. Vergi borcu olan araçların borcu satış bedelinden düşülerek işlem yapılabilir.',
  },
  {
    question: 'Ekspertiz ücreti talep ediyor musunuz?',
    answer:
      'Hayır, firmamız tarafından yapılan tüm ekspertiz ve değerleme işlemleri tamamen ücretsizdir.',
  },
  {
    question: 'Çekici ücreti kime ait?',
    answer:
      "Aracınızın çekici ile nakliye işlemleri tamamen firmamıza aittir. Sizden herhangi bir nakliye veya çekici ücreti talep edilmez.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: commonQuestions.map((q) => ({
    '@type': 'Question',
    name: q.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: q.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Ana Sayfa', url: BASE_URL },
          { name: 'Sıkça Sorulan Sorular', url: `${BASE_URL}/sss` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        title="Sıkça Sorulan Sorular"
        subtitle="Merak ettiğiniz tüm soruların cevapları burada."
        backgroundImage="/images/backgrounds/faq-hero.png"
      />

      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-secondary mb-12">Genel Sorular</h2>
            <FAQ items={commonQuestions} />
          </div>
        </div>
      </section>

      <CallbackRequest />
      <Testimonials />
      <CTA
        title="Başka Sorunuz mu Var?"
        subtitle="Aklınıza takılan diğer sorular için 7/24 bizimle iletişime geçebilirsiniz."
      />
    </>
  );
}
