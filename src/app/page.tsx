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
import BrandLogos from '@/components/sections/BrandLogos';
import CitySelector from '@/components/sections/CitySelector';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import ServiceAreas from '@/components/sections/ServiceAreas';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <div id="anasayfa" className="scroll-mt-24">
        <Hero />
      </div>
      <NewsMarquee />
      <Features />
      <StatsCounter />
      <VehicleTypes />
      <div id="hizmetler" className="scroll-mt-24">
        <ServicesSection />
      </div>
      <HowItWorks />
      <ProcessTimeline />
      <Guarantees />
      <div id="sehirler" className="scroll-mt-24">
        <ServiceAreas />
        <CitySelector limit={12} showAllLink={false} />
      </div>
      <div id="hakkimizda" className="scroll-mt-24">
        <AboutSection />
      </div>
      <Testimonials />
      <TrustBadges />
      <BrandLogos />
      <div id="sss" className="scroll-mt-24">
        <FAQ />
      </div>
      <CTA />
      <div id="iletisim" className="scroll-mt-24">
        <ContactSection />
      </div>
    </>
  );
}
