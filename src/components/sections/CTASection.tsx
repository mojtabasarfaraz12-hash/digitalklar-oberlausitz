"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

export function CTASection() {
  return (
    <section className="relative py-32 md:py-44 overflow-hidden">
      {/* Layered background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-accent/10 blur-[80px]" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-gold/5 blur-[60px]" />
      </div>

      {/* Grid pattern */}
      <div className="grid-bg absolute inset-0 opacity-30" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <ScrollReveal>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-7xl leading-[1.05]">
            Bereit für Ihren
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-dark via-accent to-accent-light">
              digitalen Durchbruch
            </span>
            ?
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg text-white/40 font-light">
            Lassen Sie uns gemeinsam Ihre Online-Sichtbarkeit auf das nächste
            Level bringen. Die erste Beratung ist kostenlos.
          </p>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/buchen"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold tracking-wide overflow-hidden transition-transform hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Jetzt Termin buchen</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out opacity-20" />
            </a>
            <a
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-white/60 rounded-full font-medium tracking-wide transition-all hover:border-white/40 hover:text-white hover:bg-white/5"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
