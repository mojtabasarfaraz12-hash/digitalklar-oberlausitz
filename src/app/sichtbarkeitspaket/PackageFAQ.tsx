"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

const faqs = [
  {
    question: "Was genau bekomme ich für 249€ im Monat?",
    answer:
      "Sie erhalten eine professionell designte Website, Google Business Profil Setup und monatliche Optimierung, lokale SEO Basis-Optimierung, schnelles und sicheres Hosting, technische Wartung, einen monatlichen Performance-Report und mich als persönlichen Ansprechpartner.",
  },
  {
    question: "Gibt es versteckte Kosten?",
    answer:
      "Nein. Der Monatspreis deckt alles ab — Design, Entwicklung, Hosting, Wartung und Optimierung. Es gibt keine Setup-Gebühren und keine Überraschungen.",
  },
  {
    question: "Was passiert nach den 24 Monaten?",
    answer:
      "Nach Ablauf der Laufzeit können Sie das Paket flexibel monatlich verlängern, auf ein anderes Angebot wechseln oder Ihre Website vollständig übernehmen. Sie sind nicht ewig gebunden.",
  },
  {
    question: "Wie schnell ist meine Website online?",
    answer:
      "In der Regel ist Ihre neue Website innerhalb von 2-4 Wochen live. Je nach Umfang und Ihrem Feedback kann es auch schneller gehen.",
  },
];

export function PackageFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <ScrollReveal key={i} delay={i * 0.05}>
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className={`w-full rounded-xl border p-5 text-left transition-all ${
                isOpen
                  ? "border-accent/20 bg-accent/5"
                  : "border-border bg-transparent hover:border-white/10"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-semibold">{faq.question}</h3>
                {isOpen ? (
                  <Minus size={18} className="shrink-0 text-accent-light" />
                ) : (
                  <Plus size={18} className="shrink-0 text-white/30" />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "mt-3 max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-white/40 leading-relaxed">{faq.answer}</p>
              </div>
            </button>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
