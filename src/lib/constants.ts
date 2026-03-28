export const SITE_CONFIG = {
  name: "DigitalKlar Oberlausitz",
  tagline: "Ihre digitale Sichtbarkeit beginnt hier.",
  description:
    "Lokales Online-Marketing und digitale Sichtbarkeit für Unternehmen in der Oberlausitz. SEO, Digitales Marketing, Beratung und mehr.",
  url: "https://www.digitalklar-oberlausitz.de",
  email: "info@digitalklar-oberlausitz.de",
  bookingUrl:
    "https://outlook.office.com/book/LokalesOnlineMarketingDigitalKlarOberlausitz@digitalklar-oberlausitz.de/?ismsaljsauthenabled",
  region: "Oberlausitz",
  owner: "Mujtaba Sarfaraz",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Über Mich", href: "/ueber-mich" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

export const SERVICES = [
  {
    slug: "seo",
    title: "Lokale SEO",
    shortTitle: "SEO",
    description:
      "Werden Sie in Ihrer Region gefunden. Ich optimiere Ihr Google-Ranking, damit lokale Kunden Sie zuerst finden.",
    icon: "Search",
    features: [
      "Google Business Profil Optimierung",
      "Lokale Keyword-Strategie",
      "On-Page & Off-Page SEO",
      "Monatliches Reporting",
    ],
  },
  {
    slug: "digitales-marketing",
    title: "Digitales Marketing",
    shortTitle: "Marketing",
    description:
      "Mehr Reichweite, mehr Kunden. Von Social Media bis Google Ads bringe ich Ihr Unternehmen online nach vorne.",
    icon: "TrendingUp",
    features: [
      "Social Media Marketing",
      "Google Ads Kampagnen",
      "Content-Strategie",
      "Performance Tracking",
    ],
  },
  {
    slug: "beratung",
    title: "Digitale Beratung",
    shortTitle: "Beratung",
    description:
      "Persönliche Beratung für Ihre digitale Strategie. Gemeinsam finden wir den besten Weg für Ihr Unternehmen.",
    icon: "MessageCircle",
    features: [
      "1:1 Strategieberatung",
      "Digitale Standortanalyse",
      "Wettbewerbsanalyse",
      "Maßgeschneiderter Aktionsplan",
    ],
  },
  {
    slug: "digitale-sichtbarkeit",
    title: "Digitale Sichtbarkeit",
    shortTitle: "Sichtbarkeit",
    description:
      "Ihr Unternehmen verdient es, online gesehen zu werden. Ich sorge für maximale Präsenz auf allen relevanten Kanälen.",
    icon: "Eye",
    features: [
      "Website-Optimierung",
      "Verzeichniseinträge",
      "Reputation Management",
      "Sichtbarkeits-Monitoring",
    ],
  },
] as const;

export const STATS = [
  { value: 50, suffix: "+", label: "Zufriedene Kunden" },
  { value: 100, suffix: "+", label: "Abgeschlossene Projekte" },
  { value: 5, suffix: "+", label: "Jahre Erfahrung" },
  { value: 98, suffix: "%", label: "Kundenzufriedenheit" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Thomas Müller",
    role: "Inhaber, Müller Handwerk GmbH",
    text: "Dank DigitalKlar haben wir unsere Online-Sichtbarkeit verdreifacht. Die lokale SEO-Strategie hat uns auf Platz 1 bei Google gebracht.",
    rating: 5,
  },
  {
    name: "Anna Schmidt",
    role: "Geschäftsführerin, Schmidt & Partner",
    text: "Professionelle Beratung mit echtem Mehrwert. Mujtaba versteht genau, was kleine Unternehmen in der Region brauchen.",
    rating: 5,
  },
  {
    name: "Klaus Weber",
    role: "Gastronom, Zur alten Mühle",
    text: "Seit der Zusammenarbeit mit DigitalKlar haben sich unsere Online-Reservierungen verdoppelt. Absolute Empfehlung!",
    rating: 5,
  },
] as const;
