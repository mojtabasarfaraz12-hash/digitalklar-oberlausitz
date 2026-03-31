import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { PackageHighlight } from "@/components/sections/PackageHighlight";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title:
    "Webdesign, SEO & Marketing in der Oberlausitz | DigitalKlar Oberlausitz",
  description:
    "Professionelles Webdesign, lokale Suchmaschinenoptimierung und digitales Marketing fuer Unternehmen in Bautzen, Goerlitz und der gesamten Oberlausitz. Jetzt Erstberatung sichern!",
  keywords: [
    "Webdesign Oberlausitz",
    "SEO Oberlausitz",
    "Marketing Oberlausitz",
    "Webdesign Bautzen",
    "SEO Bautzen",
    "Webdesign Goerlitz",
    "Website erstellen lassen",
    "Webseite machen lassen",
    "lokale SEO Sachsen",
    "Online Marketing Oberlausitz",
    "Webdesigner Oberlausitz",
    "SEO Agentur Oberlausitz",
    "Google Ranking verbessern",
    "Digitalagentur Oberlausitz",
    "Pflege Marketing",
  ],
  openGraph: {
    title:
      "Webdesign, SEO & Marketing in der Oberlausitz | DigitalKlar",
    description:
      "Professionelles Webdesign, lokale SEO und digitales Marketing fuer Unternehmen in Bautzen, Goerlitz und der gesamten Oberlausitz.",
    url: SITE_CONFIG.url,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Webdesign, SEO & Marketing in der Oberlausitz | DigitalKlar",
    description:
      "Professionelles Webdesign, lokale SEO und digitales Marketing fuer Unternehmen in der Oberlausitz.",
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

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
