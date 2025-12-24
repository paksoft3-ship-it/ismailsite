import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingActions from '@/components/common/FloatingActions';
import GoogleTagManager from '@/components/seo/GoogleTagManager';
import siteData from '@/data/site.json';

export const metadata: Metadata = {
  title: {
    default: siteData.title,
    template: `%s | ${siteData.name}`,
  },
  description: siteData.description,
  keywords: [
    'hasarlı araç alım',
    'kazalı araç satış',
    'hurda araç fiyatları',
    'pert araç değerleme',
    'hasarlı araba alınır',
    'kazalı araba satın alma',
    'İstanbul hasarlı araç',
    'Ankara kazalı araç',
    'araç alım satım',
    'hasar kaydı olan araç',
  ],
  authors: [{ name: siteData.name }],
  creator: siteData.name,
  publisher: siteData.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hasarliaracalim.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteData.title,
    description: siteData.description,
    url: 'https://hasarliaracalim.com',
    siteName: siteData.name,
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: siteData.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteData.title,
    description: siteData.description,
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: siteData.name,
              description: siteData.description,
              url: 'https://hasarliaracalim.com',
              telephone: siteData.phone,
              email: siteData.email,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'İstanbul',
                addressCountry: 'TR',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '41.0082',
                longitude: '28.9784',
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                  'Sunday',
                ],
                opens: '00:00',
                closes: '23:59',
              },
              priceRange: '₺₺₺',
              image: 'https://hasarliaracalim.com/images/og-image.jpg',
              sameAs: [
                siteData.social.facebook,
                siteData.social.instagram,
                siteData.social.twitter,
                siteData.social.youtube,
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans bg-gray-50" suppressHydrationWarning>
        <GoogleTagManager />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
