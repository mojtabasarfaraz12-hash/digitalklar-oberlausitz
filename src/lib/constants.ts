export const SITE_CONFIG = {
  name: "DigitalKlar Oberlausitz",
  tagline: "Ihre digitale Sichtbarkeit beginnt hier.",
  description:
    "Webdesign, Lokale SEO und Digitales Marketing für Unternehmen in der Oberlausitz. Ihr Partner für digitale Sichtbarkeit.",
  url: "https://www.digitalklar-oberlausitz.de",
  email: "info@digitalklar-oberlausitz.de",
  phone: "0176 55862137",
  phoneIntl: "+4917655862137",
  bookingUrl:
    "https://outlook.office.com/book/LokalesOnlineMarketingDigitalKlarOberlausitz@digitalklar-oberlausitz.de/?ismsaljsauthenabled",
  region: "Oberlausitz",
  owner: "Mujtaba Sarfaraz",
  address: {
    street: "Fortschrittsiedlung 34",
    postalCode: "02692",
    city: "Obergurig",
    region: "Sachsen",
    country: "DE",
    latitude: 51.1539,
    longitude: 14.4503,
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Standorte", href: "/standorte" },
  { label: "Sichtbarkeitspaket", href: "/sichtbarkeitspaket" },
  { label: "Über Mich", href: "/ueber-mich" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

export const SERVICES = [
  {
    slug: "webdesign",
    title: "Webdesign & Entwicklung",
    shortTitle: "Webdesign",
    description:
      "Moderne, schnelle Websites, die Kunden überzeugen. Vom Design bis zum Hosting, alles aus einer Hand.",
    icon: "Monitor",
    features: [
      "Professionelles Webdesign",
      "Responsive Entwicklung",
      "Hosting & Wartung",
      "Performance-Optimierung",
    ],
  },
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
] as const;

export const FOOTER_EXTRA_LINKS = [
  { label: "Sichtbarkeitspaket", href: "/sichtbarkeitspaket" },
  { label: "Pflege-Marketing", href: "/branche/pflege-marketing" },
  { label: "Standorte", href: "/standorte" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Piet Steglich",
    role: "Vermögensberater, Dresden",
    text: "Ich bin mit der Zusammenarbeit rundum zufrieden. Mo ist von Anfang an auf meine Vorstellungen und Wünsche eingegangen und hat diese Schritt für Schritt genau so umgesetzt. Mit dem Ergebnis bin ich sehr zufrieden. Klare Empfehlung!",
    rating: 5,
  },
] as const;
