import BrandsTrustedSection from '@/components/BrandsSection';
import CaseStudiesSection from '@/components/case-studies';
import HeroSection from '@/components/HeroSection'
import InnovationSection from '@/components/InnovationSection'
import SmartServices from '@/components/ServicesSection';

export default function Home() {
  return (
    <div className=''>
      <HeroSection/>
      <InnovationSection/>
      <BrandsTrustedSection />
      <SmartServices/>
      <CaseStudiesSection/>
      <InnovationSection/>
    </div>
  );
}
