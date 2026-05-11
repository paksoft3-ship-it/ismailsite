import Hero from '@/components/sections/Hero';
import NewsMarquee from '@/components/sections/NewsMarquee';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import VehicleTypes from '@/components/sections/VehicleTypes';
import StatsCounter from '@/components/sections/StatsCounter';
import Guarantees from '@/components/sections/Guarantees';
import Testimonials from '@/components/sections/Testimonials';
import TrustBadges from '@/components/sections/TrustBadges';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import BlogPreview from '@/components/sections/BlogPreview';
import BrandLogos from '@/components/sections/BrandLogos';
import CitySelector from '@/components/sections/CitySelector';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';

import ServiceAreas from '@/components/sections/ServiceAreas';

export default function HomePage() {
  return (
    <>
      <Hero />
      <NewsMarquee />
      <Features />
      <StatsCounter />
      <VehicleTypes />
      <ServiceAreas />
      <HowItWorks />
      <ProcessTimeline />
      <Guarantees />
      <Testimonials />
      <TrustBadges />
      <BlogPreview />
      <BrandLogos />
      <CitySelector limit={12} />
      <FAQ limit={6} />
      <CTA />
    </>
  );
}
