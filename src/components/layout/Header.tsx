'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ContactButton from '@/components/common/ContactButton';
import siteData from '@/data/site.json';
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { title: 'Ana Sayfa', href: '/' },
  { title: 'Hizmetler', href: '/#hizmetler' },
  { title: 'Şehirler', href: '/#sehirler' },
  { title: 'Hakkımızda', href: '/#hakkimizda' },
  { title: 'SSS', href: '/#sss' },
  { title: 'İletişim', href: '/#iletisim' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            <ContactButton
              type="phone"
              position="header_topbar"
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <FaPhone className="text-primary" />
              {siteData.phone}
            </ContactButton>
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
              <div className="relative h-16 w-64 group-hover:scale-105 transition-transform">
                <Image
                  src="/images/logo_transparent.png"
                  alt="Hasarlı Araç Alım Merkezi"
                  fill
                  className="object-contain object-left"
                  sizes="(max-width: 768px) 200px, 250px"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-gray-700 hover:text-primary font-medium transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <ContactButton
                type="whatsapp"
                position="header_cta"
                className="btn-whatsapp text-sm px-4 py-2 flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-5 h-5" color="white" />
                WhatsApp
              </ContactButton>
              <ContactButton
                type="phone"
                position="header_cta"
                className="btn-primary text-sm px-4 py-2 flex items-center justify-center gap-2"
              >
                <FaPhone />
                Hemen Ara
              </ContactButton>
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
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-3 text-gray-700 border-b"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}

              {/* Mobile CTA */}
              <div className="mt-6 space-y-3">
                <ContactButton
                  type="whatsapp"
                  position="header_mobile"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-whatsapp w-full flex items-center justify-center gap-2 px-4 py-2"
                >
                  <WhatsAppIcon className="w-5 h-5" color="white" />
                  WhatsApp ile Ulaşın
                </ContactButton>
                <ContactButton
                  type="phone"
                  position="header_mobile"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary w-full flex items-center justify-center gap-2 px-4 py-2"
                >
                  <FaPhone />
                  {siteData.phone}
                </ContactButton>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
