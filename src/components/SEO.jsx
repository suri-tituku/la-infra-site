import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function SEO({
  title = 'LA Infra – Ethical Real Estate & Land Development',
  description = 'LA Infra is a value-driven real estate organization specializing in farmland ventures, garden lands, estate developments, and eco-getaway projects in Telangana and Andhra Pradesh.',
  url = 'https://lainfra.com',
  breadcrumbs = [],
  schema = null,
}) {
  const fullTitle = title.includes('LA Infra') ? title : `${title} | LA Infra`

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    name: 'LA Infra',
    url: 'https://lainfra.com',
    logo: 'https://lainfra.com/logo.png',
    description: 'Ethical real estate and land development in Telangana, Andhra Pradesh, and Karnataka.',
    telephone: '+919666088822',
    email: 'info@lainfra.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      addressCountry: 'IN',
    },
    areaServed: ['Telangana', 'Andhra Pradesh', 'Karnataka'],
    foundingDate: '2019',
    sameAs: [],
  }

  const breadcrumbSchema = breadcrumbs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://lainfra.com' },
      ...breadcrumbs.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: b.name,
        item: `https://lainfra.com${b.path}`,
      })),
    ],
  } : null

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* OpenGraph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="LA Infra" />
      <meta property="og:image" content="https://lainfra.com/og-image.jpg" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://lainfra.com/og-image.jpg" />

      {/* Geo */}
      <meta name="geo.region" content="IN-TG" />
      <meta name="geo.placename" content="Hyderabad, Telangana" />

      {/* Keywords */}
      <meta name="keywords" content="ethical real estate Hyderabad, farmland investment Telangana, clear title land projects India, eco friendly land development, garden lands Hyderabad, estate development Andhra Pradesh, legal farmland ventures" />

      {/* Structured data */}
      <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      {breadcrumbSchema && (
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      )}
      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  )
}
