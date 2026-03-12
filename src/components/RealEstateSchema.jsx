import { Helmet } from "react-helmet";

export default function RealEstateSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "LA Infra",
    url: "https://thelainfra.com",
    logo: "https://thelainfra.com/logo.jpg",
    image: "https://thelainfra.com/og-image.jpg",
    description:
      "LA Infra develops premium farmland, estate plots, and sustainable land investment opportunities across Telangana, Andhra Pradesh, and Karnataka.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "India",
    },
    areaServed: [
      "Telangana",
      "Andhra Pradesh",
      "Karnataka"
    ],
    founder: {
      "@type": "Person",
      name: "K. Dayakar Reddy",
      jobTitle: "Founder & Managing Director"
    },
    sameAs: [
      "https://thelainfra.com"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}