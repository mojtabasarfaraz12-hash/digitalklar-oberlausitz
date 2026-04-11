import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/effects/ScrollReveal";
import { GlowCard } from "@/components/effects/GlowCard";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import { CITIES, FOCUS_LABELS } from "@/lib/cities";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Standorte in der Oberlausitz | DigitalKlar",
  description:
    "Webdesign, lokale SEO und digitales Marketing in Bautzen, Görlitz, Löbau, Zittau, Kamenz und Hoyerswerda. Ihr persönlicher Ansprechpartner aus der Region.",
  alternates: { canonical: `${SITE_CONFIG.url}/standorte` },
};

export default function StandortePage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <Badge variant="accent">Standorte</Badge>
            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Vor Ort in der{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light via-accent to-accent-dark">
                Oberlausitz
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/40 font-light leading-relaxed">
              Mein Sitz liegt in Obergurig, direkt vor den Toren von Bautzen.
              Von hier aus betreue ich Unternehmen in der gesamten Oberlausitz,
              persönlich, regional verankert und mit echtem Verständnis für die
              Wirtschaft vor Ort.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative pb-24 md:pb-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[150px]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <StaggerContainer className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {CITIES.map((city) => (
              <StaggerItem key={city.slug}>
                <Link href={`/standorte/${city.slug}`} className="block h-full">
                  <GlowCard className="group flex h-full flex-col p-8">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-light">
                        <MapPin size={18} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold">{city.name}</h2>
                        <p className="text-xs text-white/30">
                          {city.population}
                        </p>
                      </div>
                    </div>
                    <p className="mt-5 text-white/45 leading-relaxed flex-1">
                      {city.intro}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {city.focusBranchen.slice(0, 3).map((focus) => (
                        <span
                          key={focus}
                          className="rounded-full border border-border bg-surface-2 px-3 py-1 text-[11px] text-white/50"
                        >
                          {FOCUS_LABELS[focus]}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-light">
                      Zur Standortseite
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </GlowCard>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTASection />
    </>
  );
}
