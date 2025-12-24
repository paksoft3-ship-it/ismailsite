import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import VehicleTypes from '@/components/sections/VehicleTypes';
import CitySelector from '@/components/sections/CitySelector';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <VehicleTypes />
      <HowItWorks />
      <CitySelector limit={12} />
      <FAQ limit={6} />
      <CTA />
    </>
  );
}
