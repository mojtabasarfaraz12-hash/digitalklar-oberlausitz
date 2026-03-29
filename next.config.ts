import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/leistungen/beratung",
        destination: "/leistungen",
        permanent: true,
      },
      {
        source: "/leistungen/digitale-sichtbarkeit",
        destination: "/sichtbarkeitspaket",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
