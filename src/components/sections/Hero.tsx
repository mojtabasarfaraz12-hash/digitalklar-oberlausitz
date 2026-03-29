"use client";

import { motion } from "framer-motion";
import { MousePointer2, ArrowRight } from "lucide-react";
import { AntiGravityCanvas } from "@/components/ui/particle-effect-for-hero";

export function Hero() {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden selection:bg-amber-500 selection:text-white">
      {/* Particle Canvas Background */}
      <AntiGravityCanvas />

      {/* Hero Content — floating above particles */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-4">
        <div className="max-w-5xl w-full text-center space-y-8">
          {/* Badge */}
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="py-1.5 px-4 border border-white/15 rounded-full text-xs font-mono text-white/50 tracking-[0.15em] uppercase bg-white/[0.03] backdrop-blur-sm">
              Lokales Online-Marketing &middot; Oberlausitz
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/30 tracking-tighter leading-[0.95] mix-blend-difference"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            Digitale
            <br />
            Sichtbarkeit
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/50 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            Ich bringe Ihr Unternehmen in der Oberlausitz an die Spitze der
            Suchergebnisse. Von SEO und Online-Marketing bis hin zu modernem
            Webdesign, das Kunden begeistert.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="/buchen"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold tracking-wide overflow-hidden transition-transform hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Kostenlose Erstberatung</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out opacity-20" />
            </a>
            <a
              href="/leistungen"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-white/70 rounded-full font-medium tracking-wide transition-all hover:border-white/40 hover:text-white hover:bg-white/5"
            >
              Meine Leistungen
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll / Interact Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/25 pointer-events-none hidden md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-mono">Bewegen Sie die Maus</span>
          <MousePointer2 size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
