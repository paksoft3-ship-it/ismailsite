import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim - Hasarlı Araç Alım Merkezi',
  description: 'Hasarlı aracınız için fiyat teklifi almak için bize ulaşın. 7/24 telefon ve WhatsApp desteği. İstanbul merkezli Türkiye geneli hizmet.',
};

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
