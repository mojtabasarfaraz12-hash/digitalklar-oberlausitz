import type { Metadata } from "next";
import {
  Heart,
  Home,
  Building,
  Users,
  Search,
  Monitor,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/effects/ScrollReveal";
import { GlowCard } from "@/components/effects/GlowCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Marketing für Pflegeeinrichtungen",
  description:
    "Digitales Marketing speziell für Tagespflegen, ambulante Pflege und Pflegeheime. Von jemandem, der die Pflegebranche versteht.",
};

const audiences = [
  {
    icon: <Heart size={24} strokeWidth={1.5} />,
    title: "Tagespflegen",
    description:
      "Tagesbetreuung ist gefragt — aber Angehörige müssen Sie erst finden. Ich sorge dafür, dass Ihre Tagespflege bei Google sichtbar wird und Vertrauen aufbaut, bevor der erste Anruf kommt.",
  },
  {
    icon: <Home size={24} strokeWidth={1.5} />,
    title: "Ambulante Pflege",
    description:
      "Pflegebedürftige und ihre Familien suchen online nach ambulanten Diensten in der Nähe. Mit der richtigen Online-Präsenz werden Sie zur ersten Wahl in Ihrer Region.",
  },
  {
    icon: <Building size={24} strokeWidth={1.5} />,
    title: "Pflegeheime",
    description:
      "Die Entscheidung für ein Pflegeheim beginnt fast immer mit einer Google-Suche. Eine professionelle Website und gute Bewertungen machen den Unterschied.",
  },
];

const painPoints = [
  "Patienten und Angehörige suchen online — und finden Ihre Konkurrenz",
  "Ihre Website ist veraltet oder gar nicht vorhanden",
  "Google Business Profil fehlt oder wird nicht gepflegt",
  "Keine klare Abhebung von anderen Pflegediensten in der Region",
  "Wertvolle Plätze bleiben unbesetzt, obwohl die Nachfrage da ist",
];

const services = [
  {
    icon: <Monitor size={24} strokeWidth={1.5} />,
    title: "Website für Pflegeeinrichtungen",
    description:
      "Eine professionelle Website, die Vertrauen schafft. Mit klaren Informationen zu Ihren Leistungen, Ihrem Team und dem Aufnahmeprozess — optimiert für Angehörige, die schnell Antworten suchen.",
  },
  {
    icon: <Search size={24} strokeWidth={1.5} />,
    title: "Lokale SEO für Pflege",
    description:
      "Werden Sie bei Google gefunden, wenn jemand nach &bdquo;Tagespflege&ldquo; oder &bdquo;Pflegedienst&ldquo; in Ihrer Region sucht. Ich optimiere Ihr Google Business Profil und Ihre lokale Sichtbarkeit.",
  },
  {
    icon: <TrendingUp size={24} strokeWidth={1.5} />,
    title: "Online-Marketing für Pflege",
    description:
      "Gezielte Strategien, um Angehörige dort zu erreichen, wo sie nach Hilfe suchen. Von Social Media bis Google Ads — abgestimmt auf die Besonderheiten der Pflegebranche.",
  },
];

export default function PflegeMarketingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <Badge variant="accent">Branchenspezialisierung</Badge>
            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Marketing für die{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light via-accent to-accent-dark">
                Pflegebranche
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/40 font-light leading-relaxed">
              Ich komme aus der Pflege und aus dem Marketing. Ich verstehe,
              warum Angehörige sich für oder gegen Ihren Dienst entscheiden — und
              wie Sie online die richtige Botschaft senden.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold md:text-4xl">
                Für wen ist das{" "}
                <span className="gradient-text-accent">gedacht</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {audiences.map((audience) => (
              <StaggerItem key={audience.title}>
                <GlowCard className="flex flex-col p-8 h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-light mb-6">
                    {audience.icon}
                  </div>
                  <h3 className="text-xl font-bold">{audience.title}</h3>
                  <p className="mt-3 text-white/40 leading-relaxed">
                    {audience.description}
                  </p>
                </GlowCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-surface-1 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold md:text-4xl">
                Das Problem{" "}
                <span className="gradient-text-accent">kennen Sie</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {painPoints.map((point, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="flex items-start gap-4 rounded-xl border border-border bg-surface-2 p-5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-error/10 text-xs font-bold text-error">
                    {i + 1}
                  </span>
                  <p className="text-white/50">{point}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services for Care */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold md:text-4xl">
                Meine Leistungen für{" "}
                <span className="gradient-text-accent">Ihre Einrichtung</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <GlowCard className="flex flex-col p-8 h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-light mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-3 text-white/40 leading-relaxed flex-1">
                    {service.description}
                  </p>
                </GlowCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="mt-12 text-center">
            <Button href="/sichtbarkeitspaket" variant="gold" size="lg">
              Zum Sichtbarkeitspaket <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>

      {/* Personal CTA */}
      <section className="bg-surface-1 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal>
            <Users size={40} className="mx-auto text-accent-light mb-6" />
            <h2 className="text-3xl font-bold md:text-4xl">
              Lassen Sie uns{" "}
              <span className="gradient-text-accent">sprechen</span>
            </h2>
            <p className="mt-5 mx-auto max-w-xl text-white/40 leading-relaxed">
              Ich verstehe die Herausforderungen in der Pflege — nicht nur als Marketer,
              sondern aus eigener Erfahrung. In einem kostenlosen Erstgespräch zeige ich Ihnen,
              wie Ihre Einrichtung online sichtbar wird.
            </p>
            <div className="mt-8">
              <Button href="/buchen" variant="gold" size="lg">
                Kostenloses Erstgespräch buchen
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
