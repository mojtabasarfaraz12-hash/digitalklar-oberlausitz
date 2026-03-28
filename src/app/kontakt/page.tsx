import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/effects/GlowCard";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie DigitalKlar Oberlausitz für eine kostenlose Erstberatung zu lokalem Online-Marketing.",
};

const contactInfo = [
  {
    icon: <Mail size={24} />,
    title: "E-Mail",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: <MapPin size={24} />,
    title: "Region",
    value: "Oberlausitz, Sachsen",
  },
  {
    icon: <Clock size={24} />,
    title: "Erreichbar",
    value: "Mo - Fr, 09:00 - 18:00 Uhr",
  },
];

export default function KontaktPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          badge="Kontakt"
          title="Lassen Sie uns sprechen"
          description="Haben Sie Fragen oder möchten eine kostenlose Erstberatung? Ich freue mich auf Ihre Nachricht."
          gradient
        />

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <ScrollReveal key={info.title}>
                <GlowCard>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent-light">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">{info.title}</h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm text-text-secondary hover:text-accent transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-text-secondary">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <ScrollReveal>
              <div className="rounded-2xl border border-border bg-surface-1 p-8">
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
