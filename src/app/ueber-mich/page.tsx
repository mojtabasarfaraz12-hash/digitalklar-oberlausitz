import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  Award,
  Users,
  Target,
  Lightbulb,
  Heart,
  ArrowRight,
  ShieldCheck,
  Briefcase,
} from "lucide-react";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/effects/ScrollReveal";
import { GlowCard } from "@/components/effects/GlowCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Über Mich | Vom Pflegedienstleiter zum Marketing-Experten",
  description:
    "Lernen Sie Mujtaba Sarfaraz kennen. Ehemaliger Pflegedienstleiter (PDL), heute Ihr Experte für lokales Online-Marketing in der Oberlausitz.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/ueber-mich`,
  },
};

const values = [
  {
    icon: <Target size={24} />,
    title: "Zielorientiert",
    description:
      "Jede Maßnahme dient einem klaren Ziel. Keine leeren Versprechen, sondern messbare Ergebnisse.",
  },
  {
    icon: <Users size={24} />,
    title: "Persönlich",
    description:
      "Keine Massenabfertigung. Ich kenne jedes Projekt persönlich und bin immer direkt erreichbar.",
  },
  {
    icon: <Lightbulb size={24} />,
    title: "Innovativ",
    description:
      "Ich bleibe am Puls der Zeit und setze die neuesten, bewährten Strategien für Ihren Erfolg ein.",
  },
  {
    icon: <Award size={24} />,
    title: "Qualität",
    description:
      "Ich liefere nur ab, wenn ich 100% zufrieden bin. Höchste Standards in jedem Projekt.",
  },
];

const timeline = [
  {
    label: "Pflege",
    icon: <Heart size={18} />,
    title: "Pflegefachkraft & Pflegedienstleiter",
    description:
      "Mehrere Jahre als Pflegefachkraft und Pflegedienstleiter (PDL) in stationären Einrichtungen, ambulanten Diensten und in der Tagespflege. Ich habe den Pflegealltag von innen erlebt: Dienstplanung, MDK-Prüfungen, Angehörigengespräche, Belegungsmanagement.",
  },
  {
    label: "Marketing",
    icon: <Briefcase size={18} />,
    title: "Marketing-Expertise aufgebaut",
    description:
      "Parallel und im Anschluss an meine Pflege-Karriere habe ich tiefes Praxiswissen in Webdesign, SEO und digitalem Marketing aufgebaut. Nicht aus dem Lehrbuch, sondern aus echten Projekten und messbaren Ergebnissen.",
  },
  {
    label: "Heute",
    icon: <ShieldCheck size={18} />,
    title: "DigitalKlar Oberlausitz gegründet",
    description:
      "Heute kombiniere ich beide Welten: Branchenkenntnis aus der Pflege und Marketing-Expertise für lokale Unternehmen in der Oberlausitz. Mein besonderer Fokus: Pflegeeinrichtungen, die online sichtbar werden wollen.",
  },
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_CONFIG.owner,
  jobTitle: "Gründer & Online-Marketing-Experte",
  worksFor: {
    "@type": "LocalBusiness",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
  },
  knowsAbout: [
    "Online Marketing",
    "SEO",
    "Webdesign",
    "Pflegebranche",
    "Lokales Marketing",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE_CONFIG.address.city,
    addressRegion: SITE_CONFIG.address.region,
    addressCountry: SITE_CONFIG.address.country,
  },
};

export default function UeberMichPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 lg:gap-20">
          <ScrollReveal direction="left">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/profile.jpg"
                alt="Mujtaba Sarfaraz"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-transparent" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <Badge variant="accent">Über Mich</Badge>
            <h1 className="mt-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              Hallo, ich bin{" "}
              <span className="gradient-text">Mujtaba Sarfaraz</span>
            </h1>
            <p className="mt-6 text-lg text-text-secondary leading-relaxed">
              Als Gründer von DigitalKlar Oberlausitz habe ich eine klare
              Mission: Lokale Unternehmen in der Oberlausitz dabei unterstützen,
              ihre digitale Präsenz aufzubauen und zu stärken.
            </p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Mein Weg war nicht klassisch: Vom Pflegedienstleiter zum
              Marketing-Experten. Genau das macht den Unterschied. Ich verstehe
              nicht nur Marketing, sondern auch den Alltag in Branchen wie der
              Pflege, und bringe Unternehmen dort nach vorne, wo andere Agenturen
              nur an der Oberfläche kratzen.
            </p>
            <div className="mt-8">
              <Button href="/buchen" variant="gold">
                Lassen Sie uns sprechen
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pflege-Hintergrund Highlight */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[150px]" />

        <div className="relative mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-light">
                  <Heart size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">
                    Mein Pflege-Hintergrund
                  </h2>
                  <p className="mt-1 text-accent-light text-sm font-medium">
                    Was mich von jeder anderen Agentur in der Region unterscheidet
                  </p>
                </div>
              </div>
              <p className="text-white/55 leading-relaxed">
                Bevor ich DigitalKlar gegründet habe, war ich mehrere Jahre als
                Pflegefachkraft und Pflegedienstleiter (PDL) tätig. Ich habe in
                stationären Einrichtungen, ambulanten Pflegediensten und in der
                Tagespflege gearbeitet. Ich kenne die Herausforderungen, die
                Pflegeeinrichtungen täglich meistern: Fachkräftemangel,
                Belegungsmanagement, MDK-Prüfungen, Angehörigenkommunikation.
              </p>
              <p className="mt-4 text-white/55 leading-relaxed">
                Dieses Wissen fließt direkt in meine Arbeit ein. Wenn ich für eine
                Pflegeeinrichtung eine Website erstelle oder deren Google-Sichtbarkeit
                aufbaue, dann spreche ich die Sprache der Branche. Ich weiß, was
                Angehörige überzeugt und was Pflegekräfte bei der Arbeitgeberwahl
                beachten.
              </p>
              <div className="mt-6">
                <Link
                  href="/branche/pflege-marketing"
                  className="inline-flex items-center gap-2 text-accent-light font-medium hover:text-accent transition-colors"
                >
                  Mehr zu meinem Pflege-Marketing
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-surface-1 py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <h2 className="text-center text-3xl font-bold md:text-4xl">
              Mein <span className="gradient-text-accent">Weg</span>
            </h2>
          </ScrollReveal>

          <div className="mt-16 space-y-12">
            {timeline.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.1}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent bg-accent/10 text-accent-light">
                      {item.icon}
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="mt-2 h-full w-px bg-border" />
                    )}
                  </div>
                  <div className="pb-12">
                    <span className="text-sm font-medium text-accent-light">
                      {item.label}
                    </span>
                    <h3 className="mt-1 text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <h2 className="text-center text-3xl font-bold md:text-4xl">
              Meine <span className="gradient-text-accent">Werte</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-text-secondary">
              Diese Prinzipien leiten meine Arbeit und sichern Ihren Erfolg.
            </p>
          </ScrollReveal>

          <StaggerContainer className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <GlowCard className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent-light">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold">{value.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary">
                    {value.description}
                  </p>
                </GlowCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </>
  );
}
