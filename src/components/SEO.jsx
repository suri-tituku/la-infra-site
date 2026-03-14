import React from "react";
import { Helmet } from "react-helmet-async";

const BASE_URL = "https://thelainfra.com";

export default function SEO({
  title = "LA Infra – Ethical Real Estate & Land Development",
  description = "LA Infra is a value-driven real estate organization specializing in farmland ventures, garden lands, estate developments, and eco-getaway projects in Telangana and Andhra Pradesh.",
  url = BASE_URL,
  breadcrumbs = [],
  schema = null,
}) {
  const fullTitle = title.includes("LA Infra") ? title : `${title} | LA Infra`;

  /* Organization Schema */

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "LA Infra",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.jpg`,
    image: `${BASE_URL}/og-image.jpg`,
    description:
      "Ethical real estate and farmland investment developments across Telangana, Andhra Pradesh, and Karnataka.",
    telephone: "+919666088822",
    email: "info@lainfra.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    areaServed: ["Telangana", "Andhra Pradesh", "Karnataka"],
    foundingDate: "2019",
  };

  /* Website Search Schema */

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "LA Infra",
    url: BASE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  /* Breadcrumb Schema */

  const breadcrumbSchema =
    breadcrumbs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: BASE_URL,
            },
            ...breadcrumbs.map((b, i) => ({
              "@type": "ListItem",
              position: i + 2,
              name: b.name,
              item: `${BASE_URL}${b.path}`,
            })),
          ],
        }
      : null;

  return (
    <Helmet>
      {/* Title */}
      <title>{fullTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#163a2d" />
      <link rel="canonical" href={url} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="hreflang" hrefLang="en-IN" href={url} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        name="twitter:image:alt"
        content="LA Infra ethical farmland development Hyderabad"
      />

      {/* Meta */}
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Keywords */}
      <meta
        name="keywords"
        content="farmland investment Hyderabad, ethical real estate Telangana, clear title farmland India, estate land development, agricultural land investment Telangana, eco land development Hyderabad"
      />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="LA Infra" />
      <meta property="og:image" content={`${BASE_URL}/og-image.jpg`} />
      <meta property="og:image:alt" content="LA Infra farmland developments" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${BASE_URL}/og-image.jpg`} />

      {/* Geo targeting */}
      <meta name="geo.region" content="IN-TG" />
      <meta name="geo.placename" content="Hyderabad, Telangana" />

      {/* Organization Schema */}
      <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>

      {/* Website Search Schema */}
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

      {/* Breadcrumb Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {/* Page-specific Schema */}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
}
