import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { PackageHighlight } from "@/components/sections/PackageHighlight";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <PackageHighlight />
      <AboutTeaser />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}
