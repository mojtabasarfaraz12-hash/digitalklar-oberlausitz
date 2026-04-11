import { SITE_CONFIG, SERVICES } from "@/lib/constants";
import { CITIES } from "@/lib/cities";

function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_CONFIG.url}/#business`,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.email,
    telephone: SITE_CONFIG.phoneIntl,
    image: `${SITE_CONFIG.url}/og-image.png`,
    logo: `${SITE_CONFIG.url}/logo.png`,
    founder: {
      "@type": "Person",
      name: SITE_CONFIG.owner,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.region,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONFIG.address.latitude,
      longitude: SITE_CONFIG.address.longitude,
    },
    areaServed: [
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: SITE_CONFIG.address.latitude,
          longitude: SITE_CONFIG.address.longitude,
        },
        geoRadius: "60000",
      },
      { "@type": "AdministrativeArea", name: "Oberlausitz" },
      { "@type": "AdministrativeArea", name: "Landkreis Bautzen" },
      { "@type": "AdministrativeArea", name: "Landkreis Görlitz" },
      ...CITIES.map((c) => ({ "@type": "City" as const, name: c.name })),
      { "@type": "City", name: "Dresden" },
    ],
    priceRange: "€€",
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
    areaServed: [
      { "@type": "AdministrativeArea", name: "Oberlausitz" },
      ...CITIES.map((c) => ({ "@type": "City" as const, name: c.name })),
    ],
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
