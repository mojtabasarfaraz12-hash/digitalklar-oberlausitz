import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  Wrench,
  UtensilsCrossed,
  Calculator,
  ArrowRight,
} from "lucide-react";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/effects/ScrollReveal";
import { GlowCard } from "@/components/effects/GlowCard";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Branchen | Spezialisiert auf Ihre Branche",
  description:
    "Digitales Marketing speziell für Ihre Branche in der Oberlausitz. Pflege, Handwerk, Gastronomie, Steuerberater und mehr.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/branche`,
  },
};

const branchen = [
  {
    slug: "pflege-marketing",
    name: "Pflege & Gesundheit",
    description:
      "Als ehemaliger Pflegedienstleiter (PDL) kenne ich Ihre Branche von innen. Marketing für Tagespflegen, ambulante Dienste und Pflegeheime.",
    icon: <Heart size={28} strokeWidth={1.5} />,
    highlight: true,
  },
  {
    slug: "handwerk-marketing",
    name: "Handwerk",
    description:
      "Mehr Aufträge durch Online-Sichtbarkeit. Webdesign und lokale SEO für Dachdecker, Elektriker, Maler, Tischler und alle Gewerke.",
    icon: <Wrench size={28} strokeWidth={1.5} />,
    highlight: false,
  },
  {
    slug: "gastronomie-marketing",
    name: "Gastronomie & Tourismus",
    description:
      "Mehr Gäste und Reservierungen. Professionelle Online-Auftritte für Restaurants, Cafés, Hotels und touristische Betriebe.",
    icon: <UtensilsCrossed size={28} strokeWidth={1.5} />,
    highlight: false,
  },
  {
    slug: "steuerberater-marketing",
    name: "Steuerberater & Kanzleien",
    description:
      "Neue Mandanten gewinnen. Seriöse Online-Präsenz und lokale SEO für Steuerberater und Kanzleien in der Oberlausitz.",
    icon: <Calculator size={28} strokeWidth={1.5} />,
    highlight: false,
  },
];

export default function BranchenPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <Badge variant="accent">Branchenfokus</Badge>
            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Marketing, das Ihre{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light via-accent to-accent-dark">
                Branche versteht
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/40 font-light leading-relaxed">
              Jede Branche hat eigene Regeln, Zielgruppen und Herausforderungen.
              Ich entwickle Strategien, die genau zu Ihrem Geschäft passen, nicht
              Lösungen von der Stange.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Branchen Grid */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[80px]" />

        <div className="relative mx-auto max-w-5xl px-6">
          <StaggerContainer className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {branchen.map((branche) => (
              <StaggerItem key={branche.slug}>
                <Link href={`/branche/${branche.slug}`} className="block h-full">
                  <GlowCard
                    className={`flex flex-col p-8 h-full group transition-colors hover:border-accent/30 ${
                      branche.highlight ? "border-accent/20 bg-accent/[0.02]" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-light">
                        {branche.icon}
                      </div>
                      {branche.highlight && (
                        <Badge variant="gold">Meine Spezialisierung</Badge>
                      )}
                    </div>
                    <h2 className="text-xl font-bold">{branche.name}</h2>
                    <p className="mt-3 text-white/40 leading-relaxed flex-1">
                      {branche.description}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-accent-light font-medium text-sm group-hover:gap-3 transition-all">
                      Mehr erfahren <ArrowRight size={14} />
                    </div>
                  </GlowCard>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </>
  );
}
