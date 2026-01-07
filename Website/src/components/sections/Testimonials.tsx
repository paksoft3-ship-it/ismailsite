// Path: src/components/sections/Testimonials.tsx
// Description: Customer reviews slider with photos, names, cities, vehicle types
// Usage: Add to homepage after Features or HowItWorks section

'use client';

import { useState, useEffect } from 'react';
import testimonialData from '@/data/testimonials.json';

interface TestimonialProps {
  limit?: number;
}

export default function Testimonials({ limit }: TestimonialProps) {
  const testimonials = limit ? testimonialData.testimonials.slice(0, limit) : testimonialData.testimonials;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play slider
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={`material-symbols-outlined text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} style={{ fontVariationSettings: "'FILL' 1" }}>
        star
      </span>
    ));
  };

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Show 3 testimonials at a time on desktop
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (activeIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], displayIndex: index });
    }
    return visible;
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

        {/* Desktop Slider */}
        <div className="hidden md:block relative">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <span className="material-symbols-outlined text-secondary">chevron_left</span>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <span className="material-symbols-outlined text-secondary">chevron_right</span>
          </button>

          {/* Slider Container */}
          <div className="grid grid-cols-3 gap-6">
            {getVisibleTestimonials().map((testimonial, idx) => (
              <div
                key={`${testimonial.id}-${idx}`}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Comment */}
                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-4">
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

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setActiveIndex(index);
                }}
                className={`h-2 rounded-full transition-all ${index === activeIndex ? 'bg-primary w-6' : 'bg-gray-300 w-2'
                  }`}
              />
            ))}
          </div>
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

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={goToPrev}
              className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-secondary">chevron_left</span>
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setActiveIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${index === activeIndex ? 'bg-primary w-4' : 'bg-gray-300'
                    }`}
                />
              ))}
            </div>
            <button
              onClick={goToNext}
              className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-secondary">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
