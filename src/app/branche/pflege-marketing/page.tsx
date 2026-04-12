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
  ShieldCheck,
  Star,
  CheckCircle2,
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
  title: "Marketing für Pflegeeinrichtungen | Von einem ehemaligen PDL",
  description:
    "Digitales Marketing speziell für Tagespflegen, ambulante Pflege und Pflegeheime in der Oberlausitz. Von einem ehemaligen Pflegedienstleiter, der Ihre Branche von innen kennt.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/branche/pflege-marketing`,
  },
};

const audiences = [
  {
    icon: <Heart size={24} strokeWidth={1.5} />,
    title: "Tagespflegen",
    description:
      "Tagesbetreuung ist gefragt, aber Angehörige müssen Sie erst finden. Als ehemaliger PDL in der Tagespflege weiß ich genau, welche Fragen Familien haben und wie Ihre Online-Präsenz diese beantworten muss.",
  },
  {
    icon: <Home size={24} strokeWidth={1.5} />,
    title: "Ambulante Pflege",
    description:
      "Pflegebedürftige und ihre Familien suchen online nach ambulanten Diensten in der Nähe. Ich kenne den Alltag im ambulanten Dienst und weiß, wie Sie online Vertrauen aufbauen, bevor der erste Anruf kommt.",
  },
  {
    icon: <Building size={24} strokeWidth={1.5} />,
    title: "Pflegeheime",
    description:
      "Die Entscheidung für ein Pflegeheim beginnt fast immer mit einer Google-Suche. Eine professionelle Website mit klaren Infos zu Pflegekonzept, Kosten und freien Plätzen macht den Unterschied.",
  },
];

const painPoints = [
  "Angehörige suchen online nach Pflege und finden Ihre Konkurrenz, nicht Sie",
  "Ihre Website ist veraltet oder zeigt nicht, was Ihre Einrichtung besonders macht",
  "Ihr Google Business Profil fehlt oder wird nicht regelmäßig gepflegt",
  "Freie Plätze bleiben unbesetzt, obwohl die Nachfrage in der Region da ist",
  "Fachkräfte bewerben sich nicht, weil Ihre Online-Präsenz nicht überzeugt",
];

const services = [
  {
    icon: <Monitor size={24} strokeWidth={1.5} />,
    title: "Website für Pflegeeinrichtungen",
    description:
      "Eine professionelle Website, die Vertrauen schafft. Mit klaren Informationen zu Ihren Leistungen, Ihrem Team und dem Aufnahmeprozess. Optimiert für Angehörige, die schnell Antworten suchen.",
  },
  {
    icon: <Search size={24} strokeWidth={1.5} />,
    title: "Lokale SEO für Pflege",
    description:
      "Werden Sie bei Google gefunden, wenn jemand nach Tagespflege, Pflegedienst oder Pflegeheim in Ihrer Region sucht. Ich optimiere Ihr Google Business Profil und Ihre lokale Sichtbarkeit.",
  },
  {
    icon: <TrendingUp size={24} strokeWidth={1.5} />,
    title: "Online-Marketing für Pflege",
    description:
      "Gezielte Strategien, um Angehörige dort zu erreichen, wo sie nach Hilfe suchen. Von Content-Marketing bis Google Ads, abgestimmt auf die Besonderheiten der Pflegebranche.",
  },
];

const uspPoints = [
  "Mehrere Jahre als Pflegefachkraft und PDL gearbeitet",
  "Erfahrung in stationärer, ambulanter und Tagespflege",
  "Versteht Ihre Herausforderungen: MDK-Prüfungen, Fachkräftemangel, Belegung",
  "Spricht Ihre Sprache: Pflegegrade, SGB XI, Qualitätsmanagement",
  "Kein Agentur-Overhead: Direkter Kontakt, persönliche Betreuung",
];

const faqs = [
  {
    question:
      "Was kostet eine professionelle Website für eine Pflegeeinrichtung?",
    answer:
      "Die Kosten hängen vom Umfang ab. Eine professionelle Pflegeeinrichtungs-Website beginnt typischerweise bei einem einmaligen Investitionsbetrag plus laufender Betreuung. In einem kostenlosen Erstgespräch analysiere ich Ihre aktuelle Situation und erstelle ein individuelles Angebot. Wichtig: Eine gute Website ist keine Ausgabe, sondern eine Investition, die durch besetzte Plätze und gewonnene Fachkräfte schnell refinanziert wird.",
  },
  {
    question:
      "Wie lange dauert es, bis meine Pflegeeinrichtung bei Google sichtbar wird?",
    answer:
      "Erste Verbesserungen im Google Business Profil sehen Sie oft schon nach 2 bis 4 Wochen. Für organische Google-Rankings bei Suchbegriffen wie 'Tagespflege Bautzen' oder 'Pflegedienst Görlitz' rechnen Sie mit 3 bis 6 Monaten. Die lokale Sichtbarkeit baue ich systematisch auf, mit monatlichem Reporting, damit Sie den Fortschritt transparent verfolgen können.",
  },
  {
    question:
      "Warum sollte ich einen Marketing-Experten mit Pflege-Hintergrund beauftragen?",
    answer:
      "Weil ich Ihre Branche von innen kenne. Als ehemaliger Pflegedienstleiter (PDL) habe ich in stationärer, ambulanter und Tagespflege gearbeitet. Ich weiß, wie Angehörige denken, welche Fragen sie haben und was sie bei der Wahl einer Einrichtung überzeugt. Normale Marketingagenturen kennen diese Branche nur oberflächlich und liefern generische Ergebnisse.",
  },
  {
    question:
      "Können Sie auch bei der Fachkräftegewinnung online helfen?",
    answer:
      "Ja. Eine starke Online-Präsenz hilft nicht nur bei der Belegung, sondern auch beim Recruiting. Pflegekräfte informieren sich online über potenzielle Arbeitgeber. Mit einer professionellen Website, guten Google-Bewertungen und gezieltem Employer Branding machen Sie Ihre Einrichtung auch für Fachkräfte attraktiv.",
  },
  {
    question:
      "Betreuen Sie nur Pflegeeinrichtungen in der Oberlausitz?",
    answer:
      "Mein Schwerpunkt liegt auf der Oberlausitz und Ostsachsen, einschließlich Bautzen, Görlitz, Löbau, Zittau, Kamenz und Hoyerswerda. Da ich digital arbeite, kann ich Pflegeeinrichtungen in ganz Sachsen betreuen. Der Vorteil der regionalen Nähe: Ich kenne den lokalen Markt und bin für persönliche Treffen verfügbar.",
  },
];

export default function PflegeMarketingPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
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
        name: "Pflege-Marketing",
        item: `${SITE_CONFIG.url}/branche/pflege-marketing`,
      },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Marketing für Pflegeeinrichtungen",
    description: "Digitales Marketing speziell für Tagespflegen, ambulante Pflege und Pflegeheime. Von einem ehemaligen Pflegedienstleiter.",
    provider: {
      "@type": "LocalBusiness",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    areaServed: {
      "@type": "Place",
      name: "Oberlausitz, Sachsen",
    },
    serviceType: "Digital Marketing für Pflegeeinrichtungen",
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
            <Badge variant="accent">
              <ShieldCheck size={12} /> Branchenspezialisierung Pflege
            </Badge>
            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Marketing für die{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light via-accent to-accent-dark">
                Pflegebranche
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/50 font-light leading-relaxed">
              Ich war selbst Pflegedienstleiter. Stationär, ambulant, Tagespflege.
              Heute bringe ich Pflegeeinrichtungen in der Oberlausitz online nach
              vorne. Mit dem Wissen, wie Ihre Branche wirklich funktioniert.
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

      {/* USP Section - PDL Background */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[80px]" />

        <div className="relative mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            <ScrollReveal direction="left">
              <Badge variant="gold">
                <Star size={12} /> Ehemaliger Pflegedienstleiter
              </Badge>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Warum ich Ihre Branche{" "}
                <span className="gradient-text-accent">wirklich verstehe</span>
              </h2>
              <p className="mt-5 text-white/50 leading-relaxed">
                Bevor ich DigitalKlar gegründet habe, war ich mehrere Jahre als
                Pflegefachkraft und Pflegedienstleiter (PDL) tätig. Ich habe in
                stationären Einrichtungen, ambulanten Diensten und in der
                Tagespflege gearbeitet. Ich kenne Ihren Alltag: MDK-Prüfungen,
                Personalmangel, Belegungsmanagement, Angehörigengespräche.
              </p>
              <p className="mt-4 text-white/50 leading-relaxed">
                Diesen Hintergrund hat keine andere Marketingagentur in der
                Oberlausitz. Wenn ich Ihre Website gestalte oder Ihre
                Google-Sichtbarkeit aufbaue, dann mit echtem Verständnis für das,
                was Angehörige bewegt und was Ihre Einrichtung auszeichnet.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-3">
                {uspPoints.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-border bg-surface-2 p-4"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-accent-light"
                      strokeWidth={1.5}
                    />
                    <p className="text-white/60 text-sm">{point}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section className="bg-surface-1 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold md:text-4xl">
                Für wen ist das{" "}
                <span className="gradient-text-accent">gedacht</span>
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-white/40">
                Ob Tagespflege, ambulanter Dienst oder Pflegeheim: Ich kenne
                die spezifischen Herausforderungen jeder Versorgungsform.
              </p>
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
      <section className="py-16 md:py-24">
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
      <section className="bg-surface-1 py-16 md:py-24">
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

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold md:text-4xl">
                Häufige{" "}
                <span className="gradient-text-accent">Fragen</span>
              </h2>
              <p className="mt-4 text-white/40">
                Antworten auf die wichtigsten Fragen zum Pflege-Marketing.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
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
                    <p className="text-white/50 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </ScrollReveal>
            ))}
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
              Als ehemaliger Pflegedienstleiter verstehe ich Ihre
              Herausforderungen nicht nur als Marketer, sondern aus eigener
              Berufserfahrung. In einem kostenlosen Erstgespräch zeige ich Ihnen
              konkret, wie Ihre Einrichtung online sichtbar wird.
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
