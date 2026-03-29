import type { Metadata } from "next";
import {
  Monitor,
  MapPin,
  Search,
  Server,
  BarChart3,
  User,
  Check,
  ArrowRight,
  Plus,
  Minus,
} from "lucide-react";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/effects/ScrollReveal";
import { GlowCard } from "@/components/effects/GlowCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import { SITE_CONFIG } from "@/lib/constants";
import { PackageFAQ } from "./PackageFAQ";

export const metadata: Metadata = {
  title: "Sichtbarkeitspaket | Alles in einem Paket",
  description:
    "Professionelle Website, SEO, Google Business Profil, Hosting & Wartung. Ab 249€/mtl. Das All-Inclusive Paket für Ihre digitale Sichtbarkeit in der Oberlausitz.",
};

const packageFeatures = [
  {
    icon: "Monitor",
    title: "Professionelle Website",
    description:
      "Modernes, responsives Webdesign, das auf allen Geräten perfekt aussieht und Ihre Marke widerspiegelt.",
  },
  {
    icon: "MapPin",
    title: "Google Business Profil",
    description:
      "Komplettes Setup und monatliche Optimierung Ihres Google Business Profils für maximale lokale Sichtbarkeit.",
  },
  {
    icon: "Search",
    title: "Lokale SEO Optimierung",
    description:
      "Grundlegende Suchmaschinenoptimierung, damit Ihre Kunden Sie bei Google finden.",
  },
  {
    icon: "Server",
    title: "Hosting & Wartung",
    description:
      "Schnelles, sicheres Hosting mit regelmäßigen Updates und technischer Wartung. Sie müssen sich um nichts kümmern.",
  },
  {
    icon: "BarChart3",
    title: "Monatlicher Report",
    description:
      "Transparenter Performance-Bericht jeden Monat: Besucherzahlen, Rankings und Fortschritte auf einen Blick.",
  },
  {
    icon: "User",
    title: "Persönlicher Ansprechpartner",
    description:
      "Direkter Kontakt zu mir. Kein Callcenter, keine Warteschlange. Ich kenne Ihr Projekt persönlich.",
  },
];

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor size={24} strokeWidth={1.5} />,
  MapPin: <MapPin size={24} strokeWidth={1.5} />,
  Search: <Search size={24} strokeWidth={1.5} />,
  Server: <Server size={24} strokeWidth={1.5} />,
  BarChart3: <BarChart3 size={24} strokeWidth={1.5} />,
  User: <User size={24} strokeWidth={1.5} />,
};

const included = [
  "Professionelle Website (Design & Entwicklung)",
  "Google Business Profil Setup & Optimierung",
  "Lokale SEO Basis-Optimierung",
  "Hosting & technische Wartung",
  "Monatlicher Performance-Report",
  "Persönlicher Ansprechpartner",
  "Kostenlose Erstberatung",
];

export default function SichtbarkeitspaketPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ScrollReveal>
            <Badge variant="gold">Sichtbarkeitspaket</Badge>
            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Alles, was Ihr Unternehmen{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light via-accent to-accent-dark">
                online braucht
              </span>
            </h1>
            <p className="mt-6 mx-auto max-w-2xl text-lg text-white/40 font-light leading-relaxed">
              Website, SEO und Google Business Profil. Ein transparentes Monatspaket.
              Keine versteckten Kosten, keine Überraschungen. Alles aus einer Hand.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What's Included */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold md:text-4xl">
                Was ist{" "}
                <span className="gradient-text-accent">enthalten</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {packageFeatures.map((feature) => (
              <StaggerItem key={feature.title}>
                <GlowCard className="flex flex-col p-8 h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-light mb-6">
                    {iconMap[feature.icon]}
                  </div>
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                  <p className="mt-3 text-white/40 leading-relaxed">
                    {feature.description}
                  </p>
                </GlowCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="bg-surface-1 py-16 md:py-24">
        <div className="mx-auto grid max-w-4xl gap-12 px-6 md:grid-cols-2">
          <ScrollReveal direction="left">
            <div className="rounded-2xl border border-error/20 bg-error/5 p-8">
              <h3 className="text-lg font-bold text-error">Ohne Paket</h3>
              <p className="mt-3 text-text-secondary leading-relaxed">
                Website-Erstellung kostet einmalig tausende Euro. Dazu kommen Hosting,
                Wartung, SEO und Google-Optimierung. Alles separat, alles unübersichtlich.
                Viele Unternehmen geben auf, bevor sie überhaupt anfangen.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="rounded-2xl border border-success/20 bg-success/5 p-8">
              <h3 className="text-lg font-bold text-success">Mit Sichtbarkeitspaket</h3>
              <p className="mt-3 text-text-secondary leading-relaxed">
                Ein planbarer Monatsbetrag für alles. Professionelle Website, Google-Optimierung,
                Hosting und persönliche Betreuung. Kein Risiko, keine Überraschungen. Sie
                sind ab Tag eins online sichtbar.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-accent/5 blur-[150px]" />

        <div className="relative mx-auto max-w-xl px-6">
          <ScrollReveal>
            <div className="rounded-3xl border border-accent/20 bg-surface-1 p-10 md:p-14 text-center">
              <Badge variant="gold">Ihr Einstieg</Badge>

              <div className="mt-8">
                <p className="text-sm text-white/40 uppercase tracking-wider mb-1">Ab</p>
                <p className="text-6xl font-bold md:text-7xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-white">
                    249€
                  </span>
                  <span className="text-2xl text-white/40 font-normal">/mtl.</span>
                </p>
                <p className="mt-2 text-white/30">24 Monate Laufzeit</p>
              </div>

              <ul className="mt-10 space-y-4 text-left">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      size={18}
                      strokeWidth={2.5}
                      className="mt-0.5 shrink-0 text-accent-light"
                    />
                    <span className="text-white/60">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button href="/buchen" variant="gold" size="lg" className="w-full">
                  Kostenlose Erstberatung buchen
                </Button>
              </div>

              <p className="mt-4 text-xs text-white/20">
                Unverbindliches Erstgespräch. Wir besprechen gemeinsam Ihre Ziele.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold md:text-4xl">
                Häufige <span className="gradient-text-accent">Fragen</span> zum Paket
              </h2>
            </div>
          </ScrollReveal>
          <PackageFAQ />
        </div>
      </section>

      <CTASection />
    </>
  );
}
