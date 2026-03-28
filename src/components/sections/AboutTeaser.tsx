"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

const highlights = [
  { number: "01", text: "Persönliche Betreuung statt Massenabfertigung" },
  { number: "02", text: "Spezialisiert auf die Oberlausitz-Region" },
  { number: "03", text: "Messbare Ergebnisse & transparentes Reporting" },
  { number: "04", text: "Moderne Strategien für lokale Unternehmen" },
];

export function AboutTeaser() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2 lg:gap-24">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src="/images/profile.jpg"
                  alt="Mujtaba Sarfaraz, DigitalKlar Oberlausitz"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Cinematic gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
              </div>

              {/* Floating stats card */}
              <motion.div
                className="absolute -bottom-6 -right-4 md:-right-8 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl p-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-white">
                  5+
                </p>
                <p className="text-xs text-white/40 font-medium uppercase tracking-wider mt-1">
                  Jahre Erfahrung
                </p>
              </motion.div>

              {/* Subtle border glow */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-accent/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right">
            <div>
              <span className="inline-block py-1.5 px-4 border border-white/10 rounded-full text-xs font-mono text-white/40 tracking-[0.15em] uppercase mb-6">
                Über Mich
              </span>

              <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl leading-[1.1]">
                Ihr Partner für
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-white">
                  digitalen Erfolg
                </span>
              </h2>

              <p className="mt-6 text-white/45 leading-relaxed text-lg font-light">
                Ich bin Mujtaba Sarfaraz, Gründer von DigitalKlar Oberlausitz.
                Meine Mission: Lokalen Unternehmen dabei helfen, in der
                digitalen Welt sichtbar zu werden.
              </p>

              {/* Numbered highlights */}
              <div className="mt-10 space-y-5">
                {highlights.map((item, i) => (
                  <motion.div
                    key={item.number}
                    className="flex items-start gap-5 group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.5 }}
                  >
                    <span className="shrink-0 text-xs font-mono text-accent-light/60 mt-1">
                      {item.number}
                    </span>
                    <div className="h-px flex-1 mt-3 bg-gradient-to-r from-white/10 to-transparent" />
                    <span className="text-sm text-white/50 group-hover:text-white/70 transition-colors max-w-[220px] text-right">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10">
                <a
                  href="/ueber-mich"
                  className="group inline-flex items-center gap-3 text-sm font-medium text-white/60 hover:text-white transition-colors"
                >
                  Mehr über mich
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
