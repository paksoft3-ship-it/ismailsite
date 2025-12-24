// Path: src/components/sections/StatsCounter.tsx
// Description: Animated counters showing company statistics
// Usage: Add to homepage after Hero section, or on About page

'use client';

import { useEffect, useState, useRef } from 'react';
import guaranteesData from '@/data/guarantees.json';

export default function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>(guaranteesData.stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    guaranteesData.stats.forEach((stat, index) => {
      let currentStep = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentStep++;
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.min(Math.floor(increment * currentStep), stat.value);
          return newCounts;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, interval);
    });
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-12 bg-primary">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {guaranteesData.stats.map((stat, index) => (
            <div key={stat.id} className="text-center">
              <div className="flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-white/80 text-4xl">
                  {stat.icon}
                </span>
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                {counts[index].toLocaleString('tr-TR')}
                {stat.suffix}
              </div>
              <div className="text-white/80 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
