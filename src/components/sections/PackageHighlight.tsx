"use client";

import { Check, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { Button } from "@/components/ui/Button";

const features = ["Website", "SEO", "Google Business", "Hosting", "Reporting", "Betreuung"];

export function PackageHighlight() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-accent/8 blur-[180px]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <ScrollReveal>
          <span className="inline-block py-1.5 px-4 border border-accent/20 rounded-full text-xs font-mono text-accent-light tracking-[0.15em] uppercase mb-6 bg-accent/5">
            Alles in einem Paket
          </span>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Ihr{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light via-accent to-accent-dark">
              Sichtbarkeitspaket
            </span>
          </h2>

          <p className="mt-5 mx-auto max-w-xl text-lg text-white/40 font-light">
            Website, SEO und Google Business Profil. Ein transparentes Monatspaket
            für Ihre digitale Sichtbarkeit.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {features.map((feature) => (
              <span
                key={feature}
                className="inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent/5 px-4 py-2 text-sm text-accent-light"
              >
                <Check size={14} strokeWidth={2.5} />
                {feature}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-12">
            <div className="inline-block rounded-2xl border border-accent/20 bg-accent/5 px-10 py-8">
              <p className="text-sm text-white/40 uppercase tracking-wider mb-2">Ab</p>
              <p className="text-5xl font-bold md:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-white">
                  249€
                </span>
                <span className="text-xl text-white/40 font-normal">/mtl.</span>
              </p>
              <p className="mt-2 text-sm text-white/30">24 Monate · Alles inklusive</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-10">
            <Button href="/sichtbarkeitspaket" variant="gold" size="lg">
              Paket entdecken <ArrowRight size={18} />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
