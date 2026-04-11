import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Monitor,
  Search,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/effects/ScrollReveal";
import { GlowCard } from "@/components/effects/GlowCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import { CITIES, FOCUS_LABELS, getCityBySlug } from "@/lib/cities";
import { SITE_CONFIG } from "@/lib/constants";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CITIES.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};

  const url = `${SITE_CONFIG.url}/standorte/${city.slug}`;
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url,
      type: "website",
    },
  };
}

const services = [
  {
    icon: <Monitor size={22} strokeWidth={1.5} />,
    title: "Webdesign",
    description:
      "Eine moderne, schnelle Webseite, die Ihre Stärken sofort vermittelt und auf jedem Gerät überzeugt.",
  },
  {
    icon: <Search size={22} strokeWidth={1.5} />,
    title: "Lokale SEO",
    description:
      "Sichtbarkeit bei Google für genau die Suchanfragen, die in Ihrer Stadt gestellt werden.",
  },
  {
    icon: <TrendingUp size={22} strokeWidth={1.5} />,
    title: "Google Business Profil",
    description:
      "Ein gepflegtes Profil, das Anrufe, Wegbeschreibungen und Anfragen statt nur Klicks erzeugt.",
  },
];

export default async function CityPage({ params }: Params) {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_CONFIG.url}/standorte/${city.slug}#business`,
    name: `${SITE_CONFIG.name} ${city.name}`,
    description: city.metaDescription,
    url: `${SITE_CONFIG.url}/standorte/${city.slug}`,
    telephone: SITE_CONFIG.phoneIntl,
    email: SITE_CONFIG.email,
    image: `${SITE_CONFIG.url}/og-image.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.region,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.address.latitude,
      longitude: SITE_CONFIG.address.longitude,
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      geo: {
        "@type": "GeoCoordinates",
        latitude: city.geo.lat,
        longitude: city.geo.lng,
      },
    },
    priceRange: "€€",
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
        name: "Standorte",
        item: `${SITE_CONFIG.url}/standorte`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: city.name,
        item: `${SITE_CONFIG.url}/standorte/${city.slug}`,
      },
    ],
  };

  const otherCities = CITIES.filter((c) => c.slug !== city.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <Badge variant="accent">
              <MapPin size={12} /> Standort {city.name}
            </Badge>
            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Webdesign, SEO & Marketing in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light via-accent to-accent-dark">
                {city.name}
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/40 font-light leading-relaxed">
              {city.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/buchen" variant="gold" size="lg">
                Kostenloses Erstgespräch
              </Button>
              <Button href="/sichtbarkeitspaket" variant="outline" size="lg">
                Sichtbarkeitspaket ansehen
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/40">
              <span className="flex items-center gap-2">
                <MapPin size={14} /> {city.distanceFromBase} von meinem Sitz
              </span>
              <span className="flex items-center gap-2">
                <Phone size={14} />
                <a href={`tel:${SITE_CONFIG.phoneIntl}`} className="hover:text-white">
                  {SITE_CONFIG.phone}
                </a>
              </span>
              <span className="flex items-center gap-2">
                <Mail size={14} />
                <a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-white">
                  {SITE_CONFIG.email}
                </a>
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Long form intro */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[150px]" />
        <div className="relative mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-bold md:text-4xl">
              Warum {city.name} eine{" "}
              <span className="gradient-text-accent">eigene Strategie</span> braucht
            </h2>
          </ScrollReveal>
          <div className="mt-8 space-y-6">
            {city.paragraphs.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <p className="text-white/55 leading-relaxed text-lg">{p}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Local facts */}
      <section className="bg-surface-1 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold md:text-4xl">
                {city.name} im{" "}
                <span className="gradient-text-accent">Überblick</span>
              </h2>
              <p className="mt-4 text-white/40">
                {city.population} · PLZ {city.postalCode} · {city.distanceFromBase} von Obergurig
              </p>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {city.localFacts.map((fact, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-4 rounded-xl border border-border bg-surface-2 p-5">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-accent-light"
                    strokeWidth={1.5}
                  />
                  <p className="text-white/60">{fact}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {city.focusBranchen.length > 0 && (
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <span className="text-sm text-white/30">Schwerpunkte vor Ort:</span>
              {city.focusBranchen.map((focus) => (
                <Badge key={focus}>{FOCUS_LABELS[focus]}</Badge>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold md:text-4xl">
                Leistungen für Unternehmen in{" "}
                <span className="gradient-text-accent">{city.name}</span>
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
            <Button href="/leistungen" variant="outline" size="lg">
              Alle Leistungen ansehen <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>

      {/* Why DigitalKlar */}
      <section className="bg-surface-1 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold md:text-4xl">
              Warum{" "}
              <span className="gradient-text-accent">DigitalKlar</span> für{" "}
              {city.name}
            </h2>
            <p className="mt-6 text-white/55 leading-relaxed text-lg">
              {city.whyDigitalklar}
            </p>
            <div className="mt-10">
              <Button href="/buchen" variant="gold" size="lg">
                Erstgespräch sichern
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Other cities */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-center md:text-3xl">
              Auch in Ihrer{" "}
              <span className="gradient-text-accent">Nachbarstadt</span> aktiv
            </h2>
          </ScrollReveal>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                href={`/standorte/${c.slug}`}
                className="rounded-full border border-border bg-surface-2 px-5 py-2.5 text-sm text-white/60 transition-colors hover:border-accent/40 hover:text-white"
              >
                Webdesign {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
