"use client";

import { Monitor, Search, TrendingUp, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { GlowCard } from "@/components/effects/GlowCard";
import { StaggerContainer, StaggerItem } from "@/components/effects/ScrollReveal";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  Monitor: <Monitor size={24} strokeWidth={1.5} />,
  Search: <Search size={24} strokeWidth={1.5} />,
  TrendingUp: <TrendingUp size={24} strokeWidth={1.5} />,
};

export function ServicesGrid() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="inline-block py-1.5 px-4 border border-white/10 rounded-full text-xs font-mono text-white/40 tracking-[0.15em] uppercase mb-6">
              Leistungen
            </span>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Was ich für Sie{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-white">
                tun kann
              </span>
            </h2>
            <p className="mt-5 mx-auto max-w-xl text-lg text-white/40 font-light">
              Maßgeschneiderte digitale Lösungen für lokale Unternehmen.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {SERVICES.map((service, i) => (
            <StaggerItem key={service.slug}>
              <Link href={`/leistungen/${service.slug}`}>
                <GlowCard className="group flex h-full flex-col p-8 md:p-10 transition-all hover:border-accent/30">
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-white/60 group-hover:border-accent/30 group-hover:text-accent-light transition-all">
                      {iconMap[service.icon]}
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-white/20 group-hover:text-accent-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight md:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-white/40 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mt-8 flex flex-wrap gap-2">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="rounded-full border border-white/5 bg-white/[0.02] px-3 py-1 text-xs text-white/30"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
