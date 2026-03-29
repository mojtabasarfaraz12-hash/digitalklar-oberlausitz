"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  if (TESTIMONIALS.length === 0) return null;

  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-5xl px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block py-1.5 px-4 border border-white/10 rounded-full text-xs font-mono text-white/40 tracking-[0.15em] uppercase mb-6">
              Kundenstimmen
            </span>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Was meine Kunden{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-white">
                sagen
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1.5 mb-8">
                  {Array.from({ length: TESTIMONIALS[current].rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-gold text-gold"
                      />
                    )
                  )}
                </div>

                {/* Quote */}
                <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-white/80 tracking-tight">
                  &ldquo;{TESTIMONIALS[current].text}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-10">
                  <p className="font-semibold text-white/90">
                    {TESTIMONIALS[current].name}
                  </p>
                  <p className="text-sm text-white/30 mt-1">
                    {TESTIMONIALS[current].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="mt-12 flex items-center justify-center gap-6">
              <button
                onClick={prev}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all hover:border-white/30 hover:text-white"
                aria-label="Vorheriges Testimonial"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === current
                        ? "w-10 bg-gradient-to-r from-accent-light to-white"
                        : "w-1.5 bg-white/10 hover:bg-white/20"
                    }`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all hover:border-white/30 hover:text-white"
                aria-label="Nächstes Testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
