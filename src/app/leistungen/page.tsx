import type { Metadata } from "next";
import { Monitor, Search, TrendingUp, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/effects/GlowCard";
import { StaggerContainer, StaggerItem } from "@/components/effects/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Webdesign, Lokale SEO und Digitales Marketing. Maßgeschneiderte Lösungen für Unternehmen in der Oberlausitz.",
};

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor size={32} />,
  Search: <Search size={32} />,
  TrendingUp: <TrendingUp size={32} />,
};

export default function LeistungenPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            badge="Leistungen"
            title="Meine Leistungen für Ihren Erfolg"
            description="Von der Analyse bis zur Umsetzung. Ich biete Ihnen alles, was Sie für Ihre digitale Sichtbarkeit brauchen."
            gradient
          />

          <StaggerContainer className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {SERVICES.map((service) => (
              <StaggerItem key={service.slug}>
                <GlowCard className="flex h-full flex-col p-8">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent-light">
                    {iconMap[service.icon]}
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="mt-3 flex-1 text-text-secondary leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-text-secondary"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-accent-light" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button
                      href={`/leistungen/${service.slug}`}
                      variant="secondary"
                    >
                      Details ansehen <ArrowRight size={16} />
                    </Button>
                  </div>
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
