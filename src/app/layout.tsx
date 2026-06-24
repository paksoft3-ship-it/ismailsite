import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingActions from '@/components/common/FloatingActions';
import GoogleTagManager from '@/components/seo/GoogleTagManager';
import siteData from '@/data/site.json';

const BASE_URL = 'https://www.hasarliaracnoktasi.com';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: {
    default: siteData.title,
    template: `%s | ${siteData.name}`,
  },
  description: siteData.description,
  keywords: [
    'hasarlı araç alan',
    'kazalı araç alan',
    'hurda araç alımı',
    'pert araç alan',
    'hasarlı araç satmak',
    'kazalı araç satmak',
    'hasarlı oto alan',
    'hasarlı araba alan firmalar',
    'ağır hasarlı araç alan',
  ],
  authors: [{ name: siteData.name }],
  creator: siteData.name,
  publisher: siteData.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteData.title,
    description: siteData.description,
    url: BASE_URL,
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

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: siteData.name,
  alternateName: 'Hasarlı Araç Alım Merkezi',
  url: BASE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/images/logo.png`,
    width: 400,
    height: 120,
  },
  description: siteData.description,
  foundingDate: '2022',
  telephone: siteData.phone,
  email: siteData.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Otoport Galericiler Sitesi',
    addressLocality: 'Esenyurt',
    addressRegion: 'İstanbul',
    postalCode: '34517',
    addressCountry: 'TR',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Turkey',
  },
  sameAs: [
    siteData.social.facebook,
    siteData.social.instagram,
    siteData.social.twitter,
    siteData.social.youtube,
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteData.phone,
    contactType: 'customer service',
    availableLanguage: 'Turkish',
    hoursAvailable: 'Mo-Su 00:00-23:59',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  name: siteData.name,
  url: BASE_URL,
  description: siteData.description,
  publisher: { '@id': `${BASE_URL}/#organization` },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/sehirler/{search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE_URL}/#localbusiness`,
  name: siteData.name,
  description: siteData.description,
  url: BASE_URL,
  telephone: siteData.phone,
  email: siteData.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Otoport Galericiler Sitesi',
    addressLocality: 'Esenyurt',
    addressRegion: 'İstanbul',
    postalCode: '34517',
    addressCountry: 'TR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '41.0082',
    longitude: '28.6596',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  priceRange: '₺₺₺',
  image: `${BASE_URL}/images/og-image.jpg`,
  areaServed: {
    '@type': 'Country',
    name: 'Turkey',
  },
  sameAs: [
    siteData.social.facebook,
    siteData.social.instagram,
    siteData.social.twitter,
    siteData.social.youtube,
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" suppressHydrationWarning className={manrope.variable}>
      <head>
        {/* Material Symbols icon font — kept as link tag (icon font, not text rendering) */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${manrope.className} bg-gray-50`} suppressHydrationWarning>
        <GoogleTagManager />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingActions />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
