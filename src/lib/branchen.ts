export type Branche = {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  intro: string;
  painPoints: string[];
  services: {
    title: string;
    description: string;
    icon: "Monitor" | "Search" | "TrendingUp";
  }[];
  faqs: { question: string; answer: string }[];
  ctaText: string;
};

export const BRANCHEN: Branche[] = [
  {
    slug: "handwerk-marketing",
    name: "Marketing für Handwerksbetriebe",
    shortName: "Handwerk",
    metaTitle: "Marketing für Handwerksbetriebe | DigitalKlar Oberlausitz",
    metaDescription:
      "Webdesign und lokale SEO speziell für Handwerksbetriebe in der Oberlausitz. Mehr Aufträge durch professionelle Online-Sichtbarkeit.",
    heroSubtitle:
      "Handwerksbetriebe in der Oberlausitz leben von Empfehlungen. Aber immer mehr Auftraggeber suchen zuerst online. Ich sorge dafür, dass Ihr Betrieb bei Google gefunden wird, wenn jemand Ihr Gewerk in der Region sucht.",
    intro:
      "Ob Dachdecker, Elektriker, Maler, Tischler oder Sanitärinstallateur: Die Auftragslage im Handwerk ist gut, aber die Konkurrenz um die besten Kunden wächst. Wer online nicht sichtbar ist, verliert Aufträge an Betriebe, die bei Google weiter oben stehen. Dabei brauchen Sie keine komplizierte Marketing-Strategie. Sie brauchen eine klare Webseite, ein gepflegtes Google Business Profil und lokale Sichtbarkeit für die Suchbegriffe, die Ihre Kunden tatsächlich eingeben.",
    painPoints: [
      "Bauherren und Auftraggeber suchen online und finden andere Betriebe zuerst",
      "Ihre Website ist veraltet oder zeigt nicht, was Ihren Betrieb auszeichnet",
      "Kein Google Business Profil oder eines ohne aktuelle Fotos und Bewertungen",
      "Fachkräfte bewerben sich nicht, weil Ihr Betrieb online nicht sichtbar ist",
      "Mundpropaganda allein reicht nicht mehr, um dauerhaft ausgelastet zu sein",
    ],
    services: [
      {
        title: "Website für Handwerksbetriebe",
        description:
          "Eine professionelle Website, die Ihre Referenzen zeigt, Vertrauen aufbaut und auf dem Handy genauso gut funktioniert wie am Desktop. Mit klaren Kontaktmöglichkeiten, damit aus Besuchern Anfragen werden.",
        icon: "Monitor",
      },
      {
        title: "Lokale SEO für Handwerk",
        description:
          "Sichtbarkeit bei Google für Suchanfragen wie 'Dachdecker Bautzen' oder 'Elektriker in meiner Nähe'. Ich optimiere Ihr Google Business Profil und sorge für lokale Rankings, die Aufträge bringen.",
        icon: "Search",
      },
      {
        title: "Online-Marketing für Handwerk",
        description:
          "Gezielte Strategien, um neue Kunden und Fachkräfte zu erreichen. Von Google Ads für dringende Aufträge bis zu einem professionellen Online-Auftritt, der auch als Recruiting-Tool funktioniert.",
        icon: "TrendingUp",
      },
    ],
    faqs: [
      {
        question: "Braucht ein Handwerksbetrieb wirklich eine Website?",
        answer:
          "Ja. Auch wenn viele Aufträge über Empfehlungen kommen, recherchieren Auftraggeber fast immer online, bevor sie anrufen. Eine professionelle Website mit Referenzen, Leistungsübersicht und Kontaktdaten schafft Vertrauen und macht den Unterschied bei der Auftragsvergabe.",
      },
      {
        question: "Was kostet eine Website für einen Handwerksbetrieb?",
        answer:
          "Ich arbeite mit einem transparenten Sichtbarkeitspaket: Website, SEO und laufende Betreuung in einem monatlichen Festpreis. So haben Sie volle Kostenkontrolle ohne Überraschungen. In einem kostenlosen Erstgespräch analysiere ich Ihre Situation und erstelle ein individuelles Angebot.",
      },
      {
        question: "Wie hilft Google Business Profil meinem Handwerksbetrieb?",
        answer:
          "Ein gepflegtes Google Business Profil ist oft der erste Kontaktpunkt für neue Kunden. Es zeigt Ihre Öffnungszeiten, Telefonnummer, Bewertungen und Fotos direkt in der Google-Suche und auf Google Maps. Gut gepflegt generiert es direkte Anrufe und Anfragen.",
      },
      {
        question: "Kann ich mit Online-Marketing auch Fachkräfte finden?",
        answer:
          "Ja. Handwerker, die einen neuen Arbeitgeber suchen, informieren sich online. Eine professionelle Website mit Einblicken in Ihr Team, Ihre Projekte und Ihre Arbeitskultur macht Ihren Betrieb als Arbeitgeber attraktiv. Zusammen mit guten Google-Bewertungen stärkt das Ihr Employer Branding.",
      },
    ],
    ctaText:
      "Lassen Sie uns in einem kostenlosen Erstgespräch besprechen, wie Ihr Handwerksbetrieb online sichtbar wird.",
  },
  {
    slug: "gastronomie-marketing",
    name: "Marketing für Gastronomie",
    shortName: "Gastronomie",
    metaTitle: "Marketing für Gastronomie | DigitalKlar Oberlausitz",
    metaDescription:
      "Webdesign und lokale SEO für Restaurants, Cafés und Hotels in der Oberlausitz. Mehr Gäste durch professionelle Online-Sichtbarkeit.",
    heroSubtitle:
      "Gäste entscheiden sich heute online, wo sie essen, übernachten oder feiern. Ich helfe Restaurants, Cafés und Hotels in der Oberlausitz, bei Google sichtbar zu werden und mehr Reservierungen zu bekommen.",
    intro:
      "Die Oberlausitz hat kulinarisch und touristisch viel zu bieten. Aber ob ein Gast Ihr Restaurant findet oder beim Mitbewerber landet, entscheidet sich oft bei Google. Eine aktuelle Speisekarte, ansprechende Fotos, gute Bewertungen und ein optimiertes Google Business Profil sind heute genauso wichtig wie gutes Essen. Ich sorge dafür, dass Ihr gastronomischer Betrieb online den gleichen Eindruck macht wie vor Ort.",
    painPoints: [
      "Gäste googeln 'Restaurant in der Nähe' und finden Ihre Konkurrenz zuerst",
      "Ihre Website zeigt keine aktuelle Speisekarte oder Öffnungszeiten",
      "Negative oder fehlende Google-Bewertungen schrecken potenzielle Gäste ab",
      "Touristen finden Ihren Betrieb nicht, weil die Online-Präsenz fehlt",
      "Social Media und Website sind nicht aufeinander abgestimmt",
    ],
    services: [
      {
        title: "Website für Gastronomie",
        description:
          "Eine appetitliche Website mit aktueller Speisekarte, Reservierungsmöglichkeit und professionellen Fotos. Optimiert für mobile Nutzung, weil die meisten Gäste auf dem Handy suchen.",
        icon: "Monitor",
      },
      {
        title: "Lokale SEO für Gastronomie",
        description:
          "Sichtbarkeit bei Google für Suchanfragen wie 'Restaurant Bautzen', 'Café Görlitz' oder 'Hotel Oberlausitz'. Ich optimiere Ihr Google Business Profil und sorge für mehr Laufkundschaft und Reservierungen.",
        icon: "Search",
      },
      {
        title: "Online-Marketing für Gastronomie",
        description:
          "Von der Bewertungsstrategie über Google Ads für saisonale Angebote bis zur Integration von Reservierungstools. Alles, damit Ihre Tische voll werden.",
        icon: "TrendingUp",
      },
    ],
    faqs: [
      {
        question: "Warum ist ein Google Business Profil für Restaurants so wichtig?",
        answer:
          "Weil die meisten Gäste 'Restaurant in der Nähe' bei Google eingeben und sich dann direkt im Google Business Profil über Speisekarte, Bewertungen, Öffnungszeiten und Fotos informieren. Ein gut gepflegtes Profil kann mehr Gäste bringen als jede Anzeige.",
      },
      {
        question: "Braucht mein Restaurant eine eigene Website?",
        answer:
          "Ja. Social Media und Google Business Profil sind wichtig, aber eine eigene Website gibt Ihnen die volle Kontrolle über Ihre Darstellung. Aktuelle Speisekarte, Veranstaltungen, Online-Reservierung und professionelle Fotos machen den Unterschied. Außerdem rankt eine eigene Website besser bei Google als eine Facebook-Seite.",
      },
      {
        question: "Wie gehe ich mit negativen Bewertungen um?",
        answer:
          "Professionell und zeitnah antworten. Zeigen Sie, dass Ihnen das Feedback wichtig ist, und bieten Sie eine Lösung an. Ich helfe Ihnen, eine Bewertungsstrategie aufzubauen, die positive Bewertungen fördert und negatives Feedback konstruktiv nutzt.",
      },
      {
        question: "Können Touristen meinen Betrieb leicht online finden?",
        answer:
          "Mit der richtigen lokalen SEO-Strategie ja. Touristen suchen oft auf Google Maps nach Restaurants, Cafés oder Hotels. Ich optimiere Ihren Auftritt so, dass Sie sowohl von Einheimischen als auch von Besuchern der Oberlausitz gefunden werden.",
      },
    ],
    ctaText:
      "Lassen Sie uns besprechen, wie Ihr gastronomischer Betrieb online mehr Gäste gewinnt.",
  },
  {
    slug: "steuerberater-marketing",
    name: "Marketing für Steuerberater",
    shortName: "Steuerberater",
    metaTitle: "Marketing für Steuerberater | DigitalKlar Oberlausitz",
    metaDescription:
      "Webdesign und lokale SEO für Steuerberater und Kanzleien in der Oberlausitz. Gewinnen Sie neue Mandanten durch professionelle Online-Sichtbarkeit.",
    heroSubtitle:
      "Mandanten suchen ihren Steuerberater heute online. Ich helfe Kanzleien in der Oberlausitz, bei Google sichtbar zu werden und das Vertrauen potenzieller Mandanten schon vor dem ersten Gespräch zu gewinnen.",
    intro:
      "Steuerberater in der Oberlausitz stehen vor einem Generationenwechsel. Langjährige Mandanten bleiben treu, aber neue Mandanten, Existenzgründer, junge Unternehmer, Zuziehende, suchen ihren Steuerberater bei Google. Wer dort nicht professionell auftritt, verliert diese Mandanten an Kanzleien, die online besser sichtbar sind. Dabei geht es nicht um aggressive Werbung, sondern um eine vertrauenswürdige Online-Präsenz, die Kompetenz und Erreichbarkeit signalisiert.",
    painPoints: [
      "Neue Mandanten suchen online und finden andere Kanzleien in der Region zuerst",
      "Ihre Website wirkt veraltet und spiegelt nicht Ihre tatsächliche Kompetenz wider",
      "Kein Google Business Profil oder eines ohne aktuelle Informationen",
      "Existenzgründer und junge Unternehmer erreichen Sie nicht über klassische Kanäle",
      "Der Generationenwechsel in der Mandantschaft erfordert neue Wege der Ansprache",
    ],
    services: [
      {
        title: "Website für Steuerberater",
        description:
          "Eine seriöse, moderne Website, die Ihre Fachgebiete, Ihr Team und Ihre Arbeitsweise professionell darstellt. Mit klarer Struktur, die potenziellen Mandanten sofort zeigt, ob Sie der richtige Partner sind.",
        icon: "Monitor",
      },
      {
        title: "Lokale SEO für Kanzleien",
        description:
          "Sichtbarkeit bei Google für Suchanfragen wie 'Steuerberater Bautzen' oder 'Steuerkanzlei Oberlausitz'. Ich optimiere Ihr Google Business Profil und sorge für lokale Rankings, die qualifizierte Mandantenanfragen bringen.",
        icon: "Search",
      },
      {
        title: "Online-Marketing für Kanzleien",
        description:
          "Von der Content-Strategie mit steuerlichen Ratgebern bis zu gezielten Google Ads für Spezialgebiete. Positionieren Sie sich als Experte in Ihrer Nische und gewinnen Sie genau die Mandanten, die zu Ihrer Kanzlei passen.",
        icon: "TrendingUp",
      },
    ],
    faqs: [
      {
        question: "Dürfen Steuerberater online werben?",
        answer:
          "Ja. Die Berufsordnung erlaubt sachliche Informationen über die Kanzlei und ihre Leistungen. Eine professionelle Website, SEO und ein Google Business Profil sind nicht nur erlaubt, sondern heute notwendig, um neue Mandanten zu gewinnen. Ich achte darauf, dass alle Maßnahmen berufsrechtlich unbedenklich sind.",
      },
      {
        question: "Wie finden neue Mandanten meine Kanzlei online?",
        answer:
          "Die meisten neuen Mandanten suchen bei Google nach 'Steuerberater' plus ihrem Standort. Ein optimiertes Google Business Profil, eine professionelle Website und gute Bewertungen sind die drei Säulen, die dafür sorgen, dass Ihre Kanzlei in diesen Suchergebnissen erscheint.",
      },
      {
        question: "Lohnt sich eine Website für eine kleine Kanzlei?",
        answer:
          "Gerade für kleinere Kanzleien. Während große Kanzleien oft schon online präsent sind, bieten lokale Suchanfragen für kleinere, spezialisierte Kanzleien die Chance, sich als erster Ansprechpartner zu positionieren. Die Investition in eine professionelle Website macht sich durch neue Mandanten schnell bezahlt.",
      },
      {
        question: "Wie wichtig sind Google-Bewertungen für Steuerberater?",
        answer:
          "Sehr wichtig. Bewertungen sind für potenzielle Mandanten oft das entscheidende Kriterium bei der Auswahl. Eine Kanzlei mit 15 positiven Bewertungen wirkt vertrauenswürdiger als eine ohne. Ich helfe Ihnen, eine Strategie zu entwickeln, die zufriedene Mandanten ermutigt, ihre Erfahrung zu teilen.",
      },
    ],
    ctaText:
      "Lassen Sie uns besprechen, wie Ihre Kanzlei online neue Mandanten gewinnt.",
  },
];

export function getBrancheBySlug(slug: string): Branche | undefined {
  return BRANCHEN.find((b) => b.slug === slug);
}
