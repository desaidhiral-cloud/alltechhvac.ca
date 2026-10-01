import type { Metadata } from "next";
import { areas } from "./areas";
import { sectors } from "./sectors";
import { services } from "./services";

export const site = {
  name: "Alltech Building Services",
  shortName: "Alltech",
  tagline: "Smart solutions. Comfort that lasts.",
  slogan: "Comfort you can trust. Service you can rely on.",
  descriptor: "Engineering · Maintenance · HVAC · Technology",
  url: "https://alltechhvac.ca",
  email: "infoalltech@gmail.com",
  phoneOffice: "519-513-2020",
  phoneOfficeTel: "+15195132020",
  phoneMobile: "289-533-7001",
  phoneMobileTel: "+12895337001",
  hours: "Mon–Fri 8:00 AM – 6:00 PM",
  emergency: "24/7 emergency service",
  description:
    "Alltech Building Services designs, installs, maintains, and repairs HVAC systems for homes, commercial buildings, and industrial facilities across Kitchener-Waterloo and surrounding communities.",
  address: {
    street: "11 Westwood Drive",
    city: "Kitchener",
    region: "ON",
    postal: "N2M 2K5",
    country: "CA",
  },
};

export const addressLine = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postal}`;

export type NavLink = { label: string; href: string };

export type NavItem = NavLink & { children?: NavLink[] };

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Commercial",
    href: "/commercial",
    children: [
      { label: "Commercial HVAC", href: "/commercial" },
      { label: "HVAC Installation", href: "/services/installation" },
      { label: "HVAC Repair Services", href: "/services/repair" },
      { label: "Maintenance Services", href: "/commercial/maintenance" },
    ],
  },
  {
    label: "Industrial",
    href: "/industrial",
    children: [
      { label: "Industrial HVAC", href: "/industrial" },
      { label: "HVAC Installation", href: "/services/installation" },
      { label: "HVAC Repair Services", href: "/services/repair" },
      { label: "Maintenance Services", href: "/industrial/maintenance" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services" },
      { label: "Residential HVAC", href: "/residential" },
      ...services.map((service) => ({
        label: service.label,
        href: `/services/${service.slug}`,
      })),
    ],
  },
  {
    label: "Sectors We Serve",
    href: "/sectors",
    children: sectors.map((sector) => ({
      label: sector.label,
      href: `/sectors/${sector.slug}`,
    })),
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const pillars = [
  {
    title: "Reliable service",
    body: "Dependable solutions you can count on.",
  },
  {
    title: "Expert technicians",
    body: "Skilled professionals with years of experience.",
  },
  {
    title: "Energy efficiency",
    body: "Smart systems that save energy and reduce costs.",
  },
  {
    title: "24/7 support",
    body: "We're here when you need us most.",
  },
];

export function pageMeta(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      locale: "en_CA",
      siteName: site.name,
    },
  };
}

export function allPaths() {
  return [
    "/",
    "/about",
    "/commercial",
    "/commercial/maintenance",
    "/industrial",
    "/industrial/maintenance",
    "/residential",
    "/services",
    "/sectors",
    ...services.map((service) => `/services/${service.slug}`),
    ...sectors.map((sector) => `/sectors/${sector.slug}`),
    ...areas.map((area) => `/service-areas/${area.slug}`),
    "/gallery",
    "/contact",
    "/book",
    "/privacy",
  ];
}
