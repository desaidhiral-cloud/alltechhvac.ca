import { areas } from "@/lib/areas";
import { addressLine, site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["HVACBusiness", "LocalBusiness"],
    name: site.name,
    description: site.description,
    url: site.url,
    image: `${site.url}/opengraph-image`,
    telephone: site.phoneOfficeTel,
    email: site.email,
    slogan: site.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postal,
      addressCountry: site.address.country,
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Greater Toronto Area" },
      ...areas.map((area) => ({
        "@type": "City",
        name: area.city,
      })),
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.phoneOfficeTel,
        contactType: "customer service",
        areaServed: "CA",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        telephone: site.phoneMobileTel,
        contactType: "emergency",
        areaServed: "CA",
        availableLanguage: "English",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      },
    ],
    knowsAbout: [
      "HVAC installation",
      "HVAC repair",
      "Preventive maintenance",
      "Commercial HVAC",
      "Industrial HVAC",
      "Heat pumps",
    ],
    identifier: addressLine,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
