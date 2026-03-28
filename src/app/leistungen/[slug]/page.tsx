import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import { SERVICES } from "@/lib/constants";

const serviceDetails: Record<
  string,
  { problem: string; solution: string; process: string[] }
> = {
  seo: {
    problem:
      "Viele lokale Unternehmen sind online nahezu unsichtbar. Potenzielle Kunden suchen nach Ihren Dienstleistungen, aber finden stattdessen Ihre Konkurrenz.",
    solution:
      "Mit gezielter lokaler SEO-Optimierung bringe ich Ihr Unternehmen in die Top-Ergebnisse bei Google. Genau dort, wo Ihre Kunden suchen.",
    process: [
      "Analyse Ihrer aktuellen Online-Sichtbarkeit und Keywords",
      "Optimierung Ihres Google Business Profils",
      "On-Page SEO: Meta-Tags, Inhalte, Struktur",
      "Lokale Backlink-Strategie aufbauen",
      "Monatliches Monitoring und Reporting",
    ],
  },
  "digitales-marketing": {
    problem:
      "Ohne eine durchdachte Online-Marketing-Strategie verpassen Sie täglich potenzielle Kunden. Sporadische Posts und ungeplante Maßnahmen bringen keine nachhaltigen Ergebnisse.",
    solution:
      "Ich entwickle eine ganzheitliche Marketing-Strategie, die Ihre Zielgruppe dort erreicht, wo sie sich aufhält. In sozialen Medien, bei Google und darüber hinaus.",
    process: [
      "Zielgruppen- und Wettbewerbsanalyse",
      "Strategie-Entwicklung mit klaren KPIs",
      "Content-Erstellung und -Planung",
      "Kampagnen-Setup und -Optimierung",
      "Laufende Auswertung und Anpassung",
    ],
  },
  beratung: {
    problem:
      "Der digitale Wandel kann überwältigend sein. Welche Kanäle sind relevant? Wo investiere ich mein Budget am besten? Ohne klare Strategie verbrennen Sie Geld und Zeit.",
    solution:
      "In persönlichen Beratungsgesprächen entwickle ich mit Ihnen eine maßgeschneiderte digitale Strategie. Verständlich, umsetzbar und auf Ihre Ziele zugeschnitten.",
    process: [
      "Kostenlose Erstberatung und Bestandsaufnahme",
      "Analyse Ihrer Stärken und Potenziale",
      "Entwicklung einer individuellen Strategie",
      "Priorisierung der Maßnahmen",
      "Begleitung bei der Umsetzung",
    ],
  },
  "digitale-sichtbarkeit": {
    problem:
      "Ihr Unternehmen existiert online kaum? Kunden finden Sie nicht bei Google, in Verzeichnissen oder auf sozialen Medien? Dann verschenken Sie wertvolles Potenzial.",
    solution:
      "Ich sorge dafür, dass Ihr Unternehmen auf allen relevanten Plattformen präsent und auffindbar ist. Konsistent, professionell und überzeugend.",
    process: [
      "Kompletter Sichtbarkeits-Check Ihrer Online-Präsenz",
      "Optimierung aller Verzeichniseinträge",
      "Aufbau konsistenter Unternehmensprofile",
      "Reputation Management und Bewertungsstrategie",
      "Laufendes Monitoring Ihrer Sichtbarkeit",
    ],
  },
};

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const service = SERVICES.find((s) => s.slug === slug);
    if (!service) return { title: "Leistung nicht gefunden" };
    return {
      title: service.title,
      description: service.description,
    };
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  const details = serviceDetails[slug];

  if (!service || !details) notFound();

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <Button href="/leistungen" variant="outline" size="sm" className="mb-8">
              <ArrowLeft size={16} /> Alle Leistungen
            </Button>
            <Badge variant="accent">{service.shortTitle}</Badge>
            <h1 className="mt-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              {service.title}
            </h1>
            <p className="mt-4 text-lg text-text-secondary">{service.description}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="bg-surface-1 py-16 md:py-24">
        <div className="mx-auto grid max-w-4xl gap-12 px-6 md:grid-cols-2">
          <ScrollReveal direction="left">
            <div className="rounded-2xl border border-error/20 bg-error/5 p-8">
              <h3 className="text-lg font-bold text-error">Das Problem</h3>
              <p className="mt-3 text-text-secondary leading-relaxed">
                {details.problem}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="rounded-2xl border border-success/20 bg-success/5 p-8">
              <h3 className="text-lg font-bold text-success">Die Lösung</h3>
              <p className="mt-3 text-text-secondary leading-relaxed">
                {details.solution}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <h2 className="text-center text-2xl font-bold md:text-3xl">
              So gehen wir <span className="gradient-text-accent">vor</span>
            </h2>
          </ScrollReveal>

          <div className="mt-12 space-y-6">
            {details.process.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="flex items-start gap-4 rounded-xl border border-border bg-surface-1 p-6">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent-light">
                    {i + 1}
                  </span>
                  <p className="text-text-secondary">{step}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/buchen" variant="gold" size="lg">
              Jetzt starten
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
