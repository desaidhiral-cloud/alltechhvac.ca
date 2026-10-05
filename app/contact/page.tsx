import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { addressLine, pageMeta, site } from "@/lib/site";

export const metadata = pageMeta(
  "Contact",
  `Call Alltech Building Services at ${site.phoneOffice}, day or night. ${addressLine}.`,
  "/contact",
);

const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(addressLine)}&z=15&output=embed`;

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Talk to us" aside={site.hours} />
      <div className="mx-auto grid w-full min-w-0 max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:py-16">
        <div className="min-w-0">
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-blue">Office</h2>
          <a href={`tel:${site.phoneOfficeTel}`} className="mt-2 block text-2xl font-extrabold text-navy">
            {site.phoneOffice}
          </a>
          <h2 className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-blue">
            24/7 mobile
          </h2>
          <a href={`tel:${site.phoneMobileTel}`} className="mt-2 block text-2xl font-extrabold text-navy">
            {site.phoneMobile}
          </a>
          <h2 className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-blue">Email</h2>
          <a href={`mailto:${site.email}`} className="mt-2 block font-semibold text-blue">
            {site.email}
          </a>
          <h2 className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-blue">Shop</h2>
          <p className="mt-2 text-sm leading-6 text-muted">{addressLine}</p>
          <p className="mt-6 text-sm leading-6 text-muted">
            Proudly serving residential, commercial, and industrial properties across the Greater
            Toronto Area.
          </p>
          <div className="mt-6 overflow-hidden rounded-3xl border border-line">
            <iframe
              title="Map to Alltech Building Services"
              src={mapSrc}
              className="block h-64 w-full max-w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <ContactForm />
      </div>
    </>
  );
}
