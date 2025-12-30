import Link from 'next/link';
import Image from 'next/image';
import ContactButton from '@/components/common/ContactButton';
import siteData from '@/data/site.json';
import servicesData from '@/data/services.json';
import citiesData from '@/data/cities.json';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const popularCities = citiesData.cities.filter((city: any) => city.isPopular).slice(0, 6);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative h-20 w-72">
                <Image
                  src="/images/logo.png"
                  alt="Hasarlı Araç Alım Merkezi"
                  fill
                  className="object-contain object-left"
                  sizes="(max-width: 768px) 240px, 300px"
                />
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Türkiye&apos;nin her yerinden hasarlı, kazalı, hurda ve pert araçlarınızı en yüksek fiyatlarla alıyoruz. 7/24 hizmet, aynı gün nakit ödeme garantisi.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={siteData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href={siteData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href={siteData.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href={siteData.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/sehirler" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Hizmet Verilen Şehirler
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              {servicesData.services.map((service: any) => (
                <li key={service.slug}>
                  <Link
                    href={`/hizmetler/${service.slug}`}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">İletişim</h3>
            <ul className="space-y-3">
              <li>
                <ContactButton
                  type="phone"
                  position="footer"
                  className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  <FaPhone className="text-primary" />
                  {siteData.phone}
                </ContactButton>
              </li>
              <li>
                <ContactButton
                  type="whatsapp"
                  position="footer"
                  className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  <WhatsAppIcon className="w-5 h-5 text-primary" />
                  WhatsApp İletişim
                </ContactButton>
              </li>
              <li>
                <a
                  href={`mailto:${siteData.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  <FaEnvelope className="text-primary" />
                  {siteData.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                <span>{siteData.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Popular Cities */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <h4 className="text-sm font-semibold mb-4 text-gray-300">Popüler Şehirler:</h4>
          <div className="flex flex-wrap gap-2">
            {popularCities.map((city: any) => (
              <Link
                key={city.slug}
                href={`/sehirler/${city.slug}`}
                className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 hover:bg-primary hover:text-white transition-colors"
              >
                {city.name}
              </Link>
            ))}
            <Link
              href="/sehirler"
              className="px-3 py-1 bg-primary/20 rounded-full text-xs text-primary hover:bg-primary hover:text-white transition-colors"
            >
              Tümünü Gör →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© {currentYear} {siteData.name}. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-4">
            <Link href="/gizlilik" className="hover:text-primary transition-colors">
              Gizlilik Politikası
            </Link>
            <Link href="/kullanim-sartlari" className="hover:text-primary transition-colors">
              Kullanım Şartları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
