// Path: src/components/sections/TrustBadges.tsx
// Description: Partner logos, certifications, payment methods
// Usage: Add to homepage before Footer, or after CTA section

'use client';

// Using text-based partner display for reliability
const partners = [
  { name: 'Türkiye Sigorta', icon: 'shield' },
  { name: 'Axa Sigorta', icon: 'verified_user' },
  { name: 'Allianz', icon: 'security' },
  { name: 'Akbank', icon: 'account_balance' },
  { name: 'İş Bankası', icon: 'account_balance' },
  { name: 'Garanti BBVA', icon: 'account_balance' },
];

export default function TrustBadges() {
  const paymentMethods = [
    { name: 'Nakit', icon: 'payments' },
    { name: 'Banka Havalesi', icon: 'account_balance' },
    { name: 'EFT', icon: 'swap_horiz' },
  ];

  const certifications = [
    { name: 'TSE Belgeli', icon: 'verified' },
    { name: 'ISO 9001', icon: 'workspace_premium' },
    { name: 'Resmi Kayıtlı', icon: 'gavel' },
  ];

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Partners */}
        <div className="mb-12">
          <p className="text-center text-sm text-gray-400 uppercase tracking-wider mb-6">
            İş Ortaklarımız
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-3 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-primary text-xl">{partner.icon}</span>
                <span className="font-semibold text-sm text-secondary">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-8"></div>

        {/* Certifications & Payment Methods */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">
              Sertifikalarımız
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-2 border border-gray-100"
                >
                  <span className="material-symbols-outlined text-primary">{cert.icon}</span>
                  <span className="text-sm font-medium text-secondary">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">
              Ödeme Yöntemleri
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-4">
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-green-50 rounded-lg px-4 py-2 border border-green-100"
                >
                  <span className="material-symbols-outlined text-green-600">{method.icon}</span>
                  <span className="text-sm font-medium text-green-700">{method.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Note */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 rounded-full px-4 py-2 text-sm">
            <span className="material-symbols-outlined text-lg">shield</span>
            <span>Tüm işlemleriniz 256-bit SSL ile güvence altında</span>
          </div>
        </div>
      </div>
    </section>
  );
}
