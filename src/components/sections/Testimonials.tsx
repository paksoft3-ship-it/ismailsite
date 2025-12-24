// Path: src/components/sections/Testimonials.tsx
// Description: Customer reviews with photos, names, cities, vehicle types
// Usage: Add to homepage after Features or HowItWorks section

'use client';

import { useState } from 'react';
import testimonialData from '@/data/testimonials.json';

interface TestimonialProps {
  limit?: number;
}

export default function Testimonials({ limit }: TestimonialProps) {
  const testimonials = limit ? testimonialData.testimonials.slice(0, limit) : testimonialData.testimonials;
  const [activeIndex, setActiveIndex] = useState(0);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={`material-symbols-outlined text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} style={{ fontVariationSettings: "'FILL' 1" }}>
        star
      </span>
    ));
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-bold text-sm tracking-wider uppercase mb-2 block">
            MÜŞTERİ YORUMLARI
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary leading-tight">
            Müşterilerimiz Ne Diyor?
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Binlerce mutlu müşterimizin deneyimlerini okuyun
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>

              {/* Comment */}
              <p className="text-gray-600 leading-relaxed mb-6">
                "{testimonial.comment}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-secondary">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.city}</p>
                </div>
              </div>

              {/* Vehicle */}
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 bg-gray-50 rounded-lg px-3 py-2">
                <span className="material-symbols-outlined text-primary text-lg">directions_car</span>
                <span>{testimonial.vehicle}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            {/* Rating */}
            <div className="flex items-center gap-1 mb-4">
              {renderStars(testimonials[activeIndex].rating)}
            </div>

            {/* Comment */}
            <p className="text-gray-600 leading-relaxed mb-6">
              "{testimonials[activeIndex].comment}"
            </p>

            {/* Customer Info */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                {testimonials[activeIndex].name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-secondary">{testimonials[activeIndex].name}</h4>
                <p className="text-sm text-gray-500">{testimonials[activeIndex].city}</p>
              </div>
            </div>

            {/* Vehicle */}
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 bg-gray-50 rounded-lg px-3 py-2">
              <span className="material-symbols-outlined text-primary text-lg">directions_car</span>
              <span>{testimonials[activeIndex].vehicle}</span>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-primary w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
