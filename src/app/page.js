import WebMobSection from '@/components/AboutSection';
import VideoBackground from '@/components/AIVideoSectionn';
import { BlogInsightsSection } from '@/components/BlogSection';
import BrandsTrustedSection from '@/components/BrandsSection';
import CaseStudiesSection from '@/components/case-studies';
import AwardsSection from '@/components/CertificationSection';
import HeroSection from '@/components/HeroSection'
import HomeStatistics from '@/components/HomeStatistics';
import InnovationSection from '@/components/InnovationSection'
import SmartServices from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import MarqueeVideoSection from '@/components/VideoSection';

export default function Home() {
  return (
    <div className=''>
      <HeroSection/>
      <InnovationSection/>
      <BrandsTrustedSection />
      <SmartServices/>
      <CaseStudiesSection/>
      <BlogInsightsSection />
      <HomeStatistics />
      <MarqueeVideoSection />
      <WebMobSection />
      <TestimonialsSection />
      <AwardsSection />
    </div>
  );
}
