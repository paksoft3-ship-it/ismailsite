'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import siteData from '@/data/site.json';
import servicesData from '@/data/services.json';
import citiesData from '@/data/cities.json';
import { FaWhatsapp, FaPhone, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const popularCities = citiesData.cities.filter((city: any) => city.isPopular).slice(0, 8);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: `${siteData.googleAds.conversionId}/${siteData.googleAds.whatsappConversionLabel}`,
      });
    }
    window.open(
      `https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(
        'Merhaba, hasarlı aracım için fiyat teklifi almak istiyorum.'
      )}`,
      '_blank'
    );
  };

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: `${siteData.googleAds.conversionId}/${siteData.googleAds.phoneConversionLabel}`,
      });
    }
    window.location.href = `tel:${siteData.phone.replace(/\s/g, '')}`;
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-secondary text-white py-2 text-sm hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">schedule</span>
              7/24 Hizmet
            </span>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">payments</span>
              Aynı Gün Nakit Ödeme
            </span>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">local_shipping</span>
              Ücretsiz Çekici
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${siteData.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 hover:text-primary transition-colors"
              onClick={handlePhoneClick}
            >
              <FaPhone className="text-primary" />
              {siteData.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'glass shadow-lg' : 'bg-white'
          }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <span className="material-symbols-outlined text-4xl text-primary group-hover:scale-110 transition-transform">
                car_crash
              </span>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-secondary leading-tight">
                  Hasarlı Araç
                </span>
                <span className="text-sm text-primary font-semibold -mt-1">Alım Merkezi</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className="px-4 py-2 text-gray-700 hover:text-primary font-medium transition-colors"
              >
                Ana Sayfa
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href="/hizmetler" className="px-4 py-2 text-gray-700 hover:text-primary font-medium transition-colors flex items-center gap-1">
                  Hizmetler
                  <FaChevronDown
                    className={`text-xs transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''
                      }`}
                  />
                </Link>
                {activeDropdown === 'services' && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                    {servicesData.services.map((service: any) => (
                      <Link
                        key={service.slug}
                        href={`/hizmetler/${service.slug}`}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                      >
                        <span className="material-symbols-outlined text-primary">
                          {service.icon}
                        </span>
                        <span className="text-gray-700">{service.shortTitle}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Cities Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('cities')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href="/sehirler" className="px-4 py-2 text-gray-700 hover:text-primary font-medium transition-colors flex items-center gap-1">
                  Şehirler
                  <FaChevronDown
                    className={`text-xs transition-transform ${activeDropdown === 'cities' ? 'rotate-180' : ''
                      }`}
                  />
                </Link>
                {activeDropdown === 'cities' && (
                  <div className="absolute top-full left-0 w-72 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                    <div className="grid grid-cols-2 gap-1 p-2">
                      {popularCities.map((city: any) => (
                        <Link
                          key={city.slug}
                          href={`/sehirler/${city.slug}`}
                          className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-md transition-colors"
                        >
                          <span className="material-symbols-outlined text-primary text-sm">
                            location_on
                          </span>
                          <span className="text-gray-700 text-sm">{city.name}</span>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t mt-2 pt-2 px-4">
                      <Link
                        href="/sehirler"
                        className="text-primary hover:underline text-sm font-medium"
                      >
                        Tüm Şehirleri Gör →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/hakkimizda"
                className="px-4 py-2 text-gray-700 hover:text-primary font-medium transition-colors"
              >
                Hakkımızda
              </Link>
              <Link
                href="/blog"
                className="px-4 py-2 text-gray-700 hover:text-primary font-medium transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/iletisim"
                className="px-4 py-2 text-gray-700 hover:text-primary font-medium transition-colors"
              >
                İletişim
              </Link>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={handleWhatsAppClick}
                className="btn-whatsapp text-sm px-4 py-2"
              >
                <FaWhatsapp className="text-lg" />
                WhatsApp
              </button>
              <button
                onClick={handlePhoneClick}
                className="btn-primary text-sm px-4 py-2"
              >
                <FaPhone />
                Hemen Ara
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-primary"
              aria-label="Menü"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl overflow-y-auto">
            <div className="p-4 border-b flex items-center justify-between">
              <span className="font-bold text-secondary">Menü</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-700"
              >
                <FaTimes />
              </button>
            </div>
            <nav className="p-4">
              <Link
                href="/"
                className="block py-3 text-gray-700 border-b"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ana Sayfa
              </Link>

              <div className="border-b">
                <div className="flex items-center justify-between">
                  <Link
                    href="/hizmetler"
                    className="flex-1 py-3 text-gray-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Hizmetler
                  </Link>
                  <button
                    onClick={() =>
                      setMobileSubmenu(mobileSubmenu === 'services' ? null : 'services')
                    }
                    className="p-3 text-gray-700"
                  >
                    <FaChevronDown
                      className={`transition-transform ${mobileSubmenu === 'services' ? 'rotate-180' : ''
                        }`}
                    />
                  </button>
                </div>
                {mobileSubmenu === 'services' && (
                  <div className="pl-4 pb-3 space-y-2">
                    {servicesData.services.map((service: any) => (
                      <Link
                        key={service.slug}
                        href={`/hizmetler/${service.slug}`}
                        className="block py-2 text-gray-600 text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.shortTitle}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-b">
                <div className="flex items-center justify-between">
                  <Link
                    href="/sehirler"
                    className="flex-1 py-3 text-gray-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Şehirler
                  </Link>
                  <button
                    onClick={() =>
                      setMobileSubmenu(mobileSubmenu === 'cities' ? null : 'cities')
                    }
                    className="p-3 text-gray-700"
                  >
                    <FaChevronDown
                      className={`transition-transform ${mobileSubmenu === 'cities' ? 'rotate-180' : ''
                        }`}
                    />
                  </button>
                </div>
                {mobileSubmenu === 'cities' && (
                  <div className="pl-4 pb-3 space-y-2">
                    {popularCities.map((city: any) => (
                      <Link
                        key={city.slug}
                        href={`/sehirler/${city.slug}`}
                        className="block py-2 text-gray-600 text-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {city.name}
                      </Link>
                    ))}
                    <Link
                      href="/sehirler"
                      className="block py-2 text-primary text-sm font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Tüm Şehirler →
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/hakkimizda"
                className="block py-3 text-gray-700 border-b"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hakkımızda
              </Link>
              <Link
                href="/blog"
                className="block py-3 text-gray-700 border-b"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/iletisim"
                className="block py-3 text-gray-700 border-b"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                İletişim
              </Link>

              {/* Mobile CTA */}
              <div className="mt-6 space-y-3">
                <button
                  onClick={() => {
                    handleWhatsAppClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="btn-whatsapp w-full"
                >
                  <FaWhatsapp className="text-xl" />
                  WhatsApp ile Ulaşın
                </button>
                <button
                  onClick={() => {
                    handlePhoneClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="btn-primary w-full"
                >
                  <FaPhone />
                  {siteData.phone}
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
