import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'Hasarlı aracınız için ücretsiz fiyat teklifi alın. 7/24 telefon ve WhatsApp desteği. İstanbul merkezli, Türkiye geneli hizmet.',
  keywords: 'hasarlı araç iletişim, fiyat teklifi al, hasarlı araç alan telefon, whatsapp araç satış',
  alternates: {
    canonical: 'https://www.hasarliaracnoktasi.com/iletisim',
  },
  openGraph: {
    title: 'İletişim | Hasarlı Araç Alım Merkezi',
    description: 'Hasarlı aracınız için ücretsiz fiyat teklifi alın. 7/24 telefon ve WhatsApp desteği. İstanbul merkezli, Türkiye geneli hizmet.',
    url: 'https://www.hasarliaracnoktasi.com/iletisim',
    siteName: 'Hasarlı Araç Noktası',
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
