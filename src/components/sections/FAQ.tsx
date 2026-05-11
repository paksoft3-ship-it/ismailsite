'use client';

import { useState } from 'react';
import faqData from '@/data/faq.json';
import { FaChevronDown } from 'react-icons/fa';

interface FAQProps {
  items?: any[];
  limit?: number;
}

export default function FAQ({ items, limit }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems = items || faqData.faqs;
  const displayItems = limit ? faqItems.slice(0, limit) : faqItems;

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">Sık Sorulan Sorular</h2>
          <p className="section-subtitle">
            Hasarlı araç satışı hakkında merak ettiğiniz her şey.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {displayItems.map((faq: any, index: number) => (
            <div
              key={faq.id || index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-secondary pr-4">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Schema.org FAQ Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: displayItems.map((faq: any) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
