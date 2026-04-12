import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Monitor,
  Search,
  TrendingUp,
  ArrowRight,
  Users,
} from "lucide-react";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/effects/ScrollReveal";
import { GlowCard } from "@/components/effects/GlowCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { BRANCHEN, getBrancheBySlug } from "@/lib/branchen";
import { SITE_CONFIG } from "@/lib/constants";

const ICONS = { Monitor, Search, TrendingUp } as const;

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BRANCHEN.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const branche = getBrancheBySlug(slug);
  if (!branche) return {};

  const url = `${SITE_CONFIG.url}/branche/${branche.slug}`;
  return {
    title: branche.metaTitle,
    description: branche.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: branche.metaTitle,
      description: branche.metaDescription,
      url,
      type: "website",
    },
  };
}

export default async function BranchePage({ params }: Params) {
  const { slug } = await params;
  const branche = getBrancheBySlug(slug);
  if (!branche) notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: branche.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_CONFIG.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Branchen",
        item: `${SITE_CONFIG.url}/branche`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: branche.shortName,
        item: `${SITE_CONFIG.url}/branche/${branche.slug}`,
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: branche.name,
    description: branche.metaDescription,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    areaServed: {
      "@type": "Place",
      name: "Oberlausitz, Sachsen",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <Badge variant="accent">Branchenspezialisierung</Badge>
            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {branche.name.replace("Marketing für ", "Marketing für ")
                .split("Marketing für ")
                .map((part, i) =>
                  i === 0 ? (
                    part
                  ) : (
                    <span key={i}>
                      Marketing für{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light via-accent to-accent-dark">
                        {part}
                      </span>
                    </span>
                  )
                )}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/40 font-light leading-relaxed">
              {branche.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/buchen" variant="gold" size="lg">
                Kostenloses Erstgespräch
              </Button>
              <Button href="/sichtbarkeitspaket" variant="outline" size="lg">
                Sichtbarkeitspaket ansehen
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[150px]" />
        <div className="relative mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <p className="text-white/55 leading-relaxed text-lg">
              {branche.intro}
            </p>
          </ScrollReveal>
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
            {branche.painPoints.map((point, i) => (
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

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold md:text-4xl">
                Meine Leistungen für{" "}
                <span className="gradient-text-accent">Ihren Betrieb</span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {branche.services.map((service) => {
              const Icon = ICONS[service.icon];
              return (
                <StaggerItem key={service.title}>
                  <GlowCard className="flex flex-col p-8 h-full">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-light mb-6">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="mt-3 text-white/40 leading-relaxed flex-1">
                      {service.description}
                    </p>
                  </GlowCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <div className="mt-12 text-center">
            <Button href="/sichtbarkeitspaket" variant="gold" size="lg">
              Zum Sichtbarkeitspaket <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-surface-1 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold md:text-4xl">
                Häufige{" "}
                <span className="gradient-text-accent">Fragen</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {branche.faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <details className="group rounded-xl border border-border bg-surface-2 overflow-hidden">
                  <summary className="flex cursor-pointer items-center justify-between p-5 text-white font-medium hover:text-accent-light transition-colors">
                    <span className="pr-4">{faq.question}</span>
                    <ArrowRight
                      size={16}
                      className="shrink-0 text-white/30 transition-transform group-open:rotate-90"
                    />
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-white/50 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal>
            <Users size={40} className="mx-auto text-accent-light mb-6" />
            <h2 className="text-3xl font-bold md:text-4xl">
              Lassen Sie uns{" "}
              <span className="gradient-text-accent">sprechen</span>
            </h2>
            <p className="mt-5 mx-auto max-w-xl text-white/40 leading-relaxed">
              {branche.ctaText}
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="/buchen" variant="gold" size="lg">
                Kostenloses Erstgespräch buchen
              </Button>
              <Button href="/kontakt" variant="outline" size="lg">
                Kontakt aufnehmen
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
