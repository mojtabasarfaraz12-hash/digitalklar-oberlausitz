"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

const faqs = [
  {
    question: "Was kostet eine Zusammenarbeit mit DigitalKlar?",
    answer:
      "Das hängt von Ihrem Bedarf ab. Ich erstelle für jedes Projekt ein individuelles Angebot. Die Erstberatung ist kostenlos und unverbindlich. So bekommen Sie vorab ein klares Bild, was möglich ist und was es kostet.",
  },
  {
    question: "Wie schnell sehe ich Ergebnisse?",
    answer:
      "Bei Google Ads und Social Media Kampagnen sehen Sie erste Ergebnisse oft innerhalb weniger Tage. Bei SEO dauert es in der Regel 3 bis 6 Monate, bis sich nachhaltige Verbesserungen im Ranking zeigen. Ich halte Sie dabei mit regelmäßigen Reports auf dem Laufenden.",
  },
  {
    question: "Arbeiten Sie nur mit Unternehmen aus der Oberlausitz?",
    answer:
      "Mein Schwerpunkt liegt auf der Oberlausitz und Sachsen, aber ich arbeite auch mit Unternehmen aus ganz Deutschland zusammen. Beratungen und Meetings finden flexibel online oder vor Ort statt.",
  },
  {
    question: "Ich habe noch keine Website. Können Sie mir auch dabei helfen?",
    answer:
      "Ja, absolut! Ich erstelle moderne, schnelle Websites, die für Suchmaschinen optimiert sind und auf allen Geräten perfekt aussehen. Von der Konzeption bis zum Launch begleite ich Sie durch den gesamten Prozess.",
  },
  {
    question: "Was ist lokale SEO und warum brauche ich das?",
    answer:
      "Lokale SEO sorgt dafür, dass Ihr Unternehmen bei Google Maps und in den lokalen Suchergebnissen erscheint, wenn potenzielle Kunden in Ihrer Nähe nach Ihren Dienstleistungen suchen. Das ist besonders wichtig für Handwerker, Gastronomen, Ärzte und alle lokalen Dienstleister.",
  },
  {
    question: "Wie läuft die Zusammenarbeit ab?",
    answer:
      "Wir starten mit einem kostenlosen Erstgespräch, in dem wir Ihre Ziele besprechen. Dann erstelle ich einen individuellen Plan mit konkreten Maßnahmen. Sie erhalten regelmäßige Updates und können mich jederzeit erreichen. Transparent, persönlich und ohne lange Vertragslaufzeiten.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}) {
  return (
    <ScrollReveal delay={index * 0.05}>
      <div
        className={`rounded-2xl border transition-all duration-300 ${
          isOpen
            ? "border-accent/20 bg-accent/[0.03]"
            : "border-white/[0.06] bg-white/[0.01] hover:border-white/10"
        }`}
      >
        <button
          onClick={onClick}
          className="flex w-full items-start justify-between gap-4 p-6 text-left"
        >
          <span
            className={`text-base font-semibold leading-snug transition-colors ${
              isOpen ? "text-white" : "text-white/70"
            }`}
          >
            {question}
          </span>
          <span
            className={`mt-0.5 shrink-0 flex h-7 w-7 items-center justify-center rounded-full border transition-all ${
              isOpen
                ? "border-accent/30 bg-accent/10 text-accent-light"
                : "border-white/10 text-white/30"
            }`}
          >
            {isOpen ? <Minus size={14} /> : <Plus size={14} />}
          </span>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 text-white/40 leading-relaxed">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-28 md:py-40 bg-surface-1/30 overflow-hidden">
      {/* Subtle top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto max-w-3xl px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block py-1.5 px-4 border border-white/10 rounded-full text-xs font-mono text-white/40 tracking-[0.15em] uppercase mb-6">
              FAQ
            </span>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Häufig gestellte{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-white">
                Fragen
              </span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
