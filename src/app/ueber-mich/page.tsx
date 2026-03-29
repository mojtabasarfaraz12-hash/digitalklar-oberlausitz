import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, Award, Users, Target, Lightbulb } from "lucide-react";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/effects/ScrollReveal";
import { GlowCard } from "@/components/effects/GlowCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Über Mich",
  description:
    "Lernen Sie Mujtaba Sarfaraz kennen. Ihr Experte für lokales Online-Marketing und digitale Sichtbarkeit in der Oberlausitz.",
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
    year: "Pflege",
    title: "Branchenerfahrung gesammelt",
    description:
      "Ich arbeite in einem der größten Pflegeunternehmen Deutschlands mit über 73 Niederlassungen. Dort verantworte ich das Marketing und verstehe die Branche von innen.",
  },
  {
    year: "Marketing",
    title: "Vom Wissen zur Praxis",
    description:
      "Aus der täglichen Arbeit mit Webdesign, SEO und digitalem Marketing habe ich tiefes Praxiswissen aufgebaut. Nicht aus dem Lehrbuch, sondern aus echten Projekten.",
  },
  {
    year: "Heute",
    title: "DigitalKlar Oberlausitz",
    description:
      "Heute helfe ich Unternehmen in der Oberlausitz, online sichtbar zu werden. Die Kombination aus Branchenerfahrung und Marketing-Expertise macht den Unterschied.",
  },
];

export default function UeberMichPage() {
  return (
    <>
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
              Ich glaube daran, dass jedes Unternehmen, egal wie klein, es
              verdient, online gefunden zu werden. Mit persönlicher Betreuung,
              modernen Strategien und einem klaren Fokus auf messbare Ergebnisse
              bringe ich Ihr Unternehmen digital nach vorne.
            </p>
            <div className="mt-8">
              <Button href="/buchen" variant="gold">
                Lassen Sie uns sprechen
              </Button>
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
              <ScrollReveal key={item.year} delay={i * 0.1}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent bg-accent/10 text-sm font-bold text-accent-light">
                      {i + 1}
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="mt-2 h-full w-px bg-border" />
                    )}
                  </div>
                  <div className="pb-12">
                    <span className="text-sm font-medium text-accent-light">
                      {item.year}
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
