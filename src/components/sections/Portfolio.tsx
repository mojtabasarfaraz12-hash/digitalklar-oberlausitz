"use client";

import { ExternalLink, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { StaggerContainer, StaggerItem } from "@/components/effects/ScrollReveal";
import { GlowCard } from "@/components/effects/GlowCard";

const projects = [
  {
    name: "Zuzu",
    url: "https://www.zuzu.de",
    description:
      "Moderne Website mit frischem Design und klarer Nutzerführung. Responsive, schnell und optimiert für Suchmaschinen.",
    tags: ["Webdesign", "SEO", "Responsive"],
  },
  {
    name: "Piet Steglich",
    url: "https://www.piet-steglich.de",
    description:
      "Professioneller Webauftritt mit persönlicher Note. Optimierte Performance und lokale Sichtbarkeit.",
    tags: ["Webdesign", "Branding", "Lokale SEO"],
  },
];

export function Portfolio() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-accent/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="inline-block py-1.5 px-4 border border-white/10 rounded-full text-xs font-mono text-white/40 tracking-[0.15em] uppercase mb-6">
              Portfolio
            </span>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Projekte, die{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-white">
                Ergebnisse liefern
              </span>
            </h2>
            <p className="mt-5 mx-auto max-w-xl text-lg text-white/40 font-light">
              Einige der Webseiten und Projekte, die ich für meine Kunden
              umgesetzt habe.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <StaggerItem key={project.name}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlowCard className="group flex h-full flex-col p-8 md:p-10 transition-all hover:border-accent/30">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-white/60 group-hover:border-accent/30 group-hover:text-accent-light transition-all">
                      <ExternalLink size={20} strokeWidth={1.5} />
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-white/20 group-hover:text-accent-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-white/40 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/5 bg-white/[0.02] px-3 py-1 text-xs text-white/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/5 flex items-center gap-2 text-sm text-accent-light/60 group-hover:text-accent-light transition-colors">
                    <ExternalLink size={14} />
                    <span>{project.url.replace("https://www.", "")}</span>
                  </div>
                </GlowCard>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
