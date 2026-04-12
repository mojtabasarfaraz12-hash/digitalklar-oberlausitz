import type { Metadata } from "next";
import Link from "next/link";
import { Clock, BookOpen } from "lucide-react";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/effects/ScrollReveal";
import { GlowCard } from "@/components/effects/GlowCard";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import { RATGEBER } from "@/lib/ratgeber";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Ratgeber | Praxiswissen für Ihre Online-Sichtbarkeit",
  description:
    "Kostenlose Ratgeber zu Webdesign, SEO und Online-Marketing für Unternehmen in der Oberlausitz. Praxisnah, verständlich und sofort umsetzbar.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/ratgeber`,
  },
};

export default function RatgeberPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <ScrollReveal>
            <Badge variant="accent">
              <BookOpen size={12} /> Ratgeber
            </Badge>
            <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Praxiswissen für Ihre{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light via-accent to-accent-dark">
                Online-Sichtbarkeit
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/40 font-light leading-relaxed">
              Verständliche Anleitungen und ehrliche Einschätzungen zu den Themen,
              die für lokale Unternehmen in der Oberlausitz wirklich zählen. Kein
              Marketing-Jargon, sondern Wissen, das Sie sofort umsetzen können.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[80px]" />

        <div className="relative mx-auto max-w-5xl px-6">
          <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {RATGEBER.map((artikel) => (
              <StaggerItem key={artikel.slug}>
                <Link
                  href={`/ratgeber/${artikel.slug}`}
                  className="block h-full"
                >
                  <GlowCard className="flex flex-col p-7 h-full group transition-colors hover:border-accent/30">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="accent">{artikel.category}</Badge>
                      <span className="flex items-center gap-1.5 text-xs text-white/30">
                        <Clock size={11} /> {artikel.readingTime}
                      </span>
                    </div>
                    <h2 className="text-lg font-bold leading-snug group-hover:text-accent-light transition-colors">
                      {artikel.title}
                    </h2>
                    <p className="mt-3 text-sm text-white/40 leading-relaxed flex-1">
                      {artikel.excerpt}
                    </p>
                    <span className="mt-5 text-sm font-medium text-accent-light">
                      Artikel lesen
                    </span>
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
