import type { Metadata } from "next";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/effects/GlowCard";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Termin buchen",
  description:
    "Buchen Sie jetzt Ihren kostenlosen Beratungstermin für lokales Online-Marketing in der Oberlausitz.",
};

const faqs = [
  {
    q: "Ist die Erstberatung wirklich kostenlos?",
    a: "Ja, die erste Beratung ist für Sie komplett kostenlos und unverbindlich. Wir besprechen Ihre Situation und ich zeige Ihnen, wie ich Ihnen helfen kann.",
  },
  {
    q: "Wie läuft ein Beratungsgespräch ab?",
    a: "Wir treffen uns online per Videocall oder telefonisch. Ich analysiere Ihre aktuelle digitale Präsenz und bespreche mit Ihnen die besten Maßnahmen für Ihr Unternehmen.",
  },
  {
    q: "Wie lange dauert ein Termin?",
    a: "Die Erstberatung dauert in der Regel 30-45 Minuten. In dieser Zeit bekommen Sie bereits erste konkrete Tipps und Empfehlungen.",
  },
  {
    q: "Muss ich mich vorbereiten?",
    a: "Nein, eine spezielle Vorbereitung ist nicht nötig. Aber wenn Sie Ihre aktuelle Website-Adresse und Ihre Ziele bereithalten, können wir noch effektiver arbeiten.",
  },
];

export default function BuchenPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          badge="Termin buchen"
          title="Kostenlose Erstberatung"
          description="Wählen Sie einen passenden Termin. Ich freue mich darauf, Ihr Projekt kennenzulernen."
          gradient
        />

        {/* Booking Widget */}
        <ScrollReveal>
          <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-surface-1">
            <iframe
              src={SITE_CONFIG.bookingUrl}
              title="Termin buchen | DigitalKlar Oberlausitz"
              className="h-[700px] w-full border-0"
              loading="lazy"
            />
          </div>
        </ScrollReveal>

        {/* FAQ */}
        <div className="mt-24">
          <ScrollReveal>
            <h2 className="text-center text-2xl font-bold md:text-3xl">
              Häufig gestellte <span className="gradient-text-accent">Fragen</span>
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 0.05}>
                <GlowCard className="h-full">
                  <h3 className="font-bold">{faq.q}</h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                    {faq.a}
                  </p>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
