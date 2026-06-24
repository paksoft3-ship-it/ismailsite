const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Hasarlı Araç Nasıl Satılır? — 4 Adımda Kolay Satış',
  description:
    'Türkiye genelinde hasarlı, kazalı, pert veya hurda aracınızı en yüksek fiyata 4 adımda nasıl satabileceğinizi öğrenin.',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'TRY',
    value: '0',
  },
  totalTime: 'PT4H',
  supply: [
    { '@type': 'HowToSupply', name: 'Araç Ruhsatı' },
    { '@type': 'HowToSupply', name: 'Kimlik Fotokopisi' },
    { '@type': 'HowToSupply', name: 'Araç Fotoğrafları' },
  ],
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'İletişim Kurun',
      text: 'WhatsApp (+90 507 071 65 13) veya telefon üzerinden bize ulaşın ve aracınızın bilgilerini, fotoğraflarını paylaşın.',
      url: 'https://www.hasarliaracnoktasi.com/iletisim',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Ön Değerleme Alın',
      text: 'Gönderdiğiniz bilgiler ve fotoğraflara göre 30 dakika içinde tahmini fiyat aralığı sunulur.',
      url: 'https://www.hasarliaracnoktasi.com/hizmetler',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Yerinde Ekspertiz',
      text: 'Uzman ekibimiz aracınızı bulunduğu yerde (ister serviste, ister sokakta) detaylı inceleyerek net fiyat teklifini verir.',
      url: 'https://www.hasarliaracnoktasi.com/hakkimizda',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Anında Ödeme',
      text: 'Fiyatta anlaşıldıktan sonra noter satışı tamamlanır ve ödeme banka hesabınıza anında yapılır veya nakit ödenir.',
      url: 'https://www.hasarliaracnoktasi.com/iletisim',
    },
  ],
};

export default function HowToSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
    />
  );
}
