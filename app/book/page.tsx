import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { pageMeta, site } from "@/lib/site";

export const metadata = pageMeta(
  "Book a Consultation",
  "Request HVAC service or a site visit from Alltech Building Services in Kitchener. Office 519-513-2020, 24/7 mobile 289-233-7001.",
  "/book",
);

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Book now"
        title="Request a consultation"
        aside="Quotes, maintenance, and project walkthroughs"
      />
      <div className="mx-auto grid w-full min-w-0 max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:py-16">
        <div className="min-w-0">
          <p className="text-base leading-7 text-muted">
            Use this for replacements, maintenance programs, and “come look at this.” If the
            building is already down, skip the form and call.
          </p>
          <a
            href={`tel:${site.phoneMobileTel}`}
            className="mt-6 block text-3xl font-extrabold text-navy"
          >
            {site.phoneMobile}
          </a>
          <p className="mt-1 text-sm text-muted">24/7 mobile</p>
          <a href={`tel:${site.phoneOfficeTel}`} className="mt-4 block text-xl font-bold text-navy">
            {site.phoneOffice}
          </a>
          <p className="mt-1 text-sm text-muted">Office · {site.hours}</p>
        </div>
        <ContactForm heading="Book a visit" submitLabel="Request a visit" />
      </div>
    </>
  );
}
