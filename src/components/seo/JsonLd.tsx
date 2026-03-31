import { SITE_CONFIG, SERVICES } from "@/lib/constants";

function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_CONFIG.url}/#business`,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.email,
    founder: {
      "@type": "Person",
      name: SITE_CONFIG.owner,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bautzen",
      addressRegion: "Sachsen",
      postalCode: "02625",
      addressCountry: "DE",
    },
    areaServed: [
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 51.1814,
          longitude: 14.4244,
        },
        geoRadius: "50000",
      },
      { "@type": "AdministrativeArea", name: "Oberlausitz" },
      { "@type": "City", name: "Bautzen" },
      { "@type": "City", name: "Goerlitz" },
      { "@type": "City", name: "Zittau" },
      { "@type": "City", name: "Loebau" },
      { "@type": "City", name: "Kamenz" },
      { "@type": "City", name: "Hoyerswerda" },
      { "@type": "City", name: "Niesky" },
      { "@type": "City", name: "Dresden" },
    ],
    priceRange: "$$",
    knowsLanguage: ["de", "en"],
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function ServicesSchema() {
  const schemas = SERVICES.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_CONFIG.url}/#business`,
      name: SITE_CONFIG.name,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Oberlausitz",
    },
    url: `${SITE_CONFIG.url}/leistungen/${service.slug}`,
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}

function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    inLanguage: "de-DE",
    publisher: {
      "@type": "LocalBusiness",
      "@id": `${SITE_CONFIG.url}/#business`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function JsonLd() {
  return (
    <>
      <LocalBusinessSchema />
      <ServicesSchema />
      <WebSiteSchema />
    </>
  );
}
