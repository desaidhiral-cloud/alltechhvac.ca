import Link from "next/link";
import { ConsultBand } from "@/components/ConsultBand";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { photos } from "@/lib/photos";
import { sectors } from "@/lib/sectors";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta(
  "Commercial HVAC",
  "Commercial HVAC installation, maintenance, and 24/7 repair across the Greater Toronto Area. Offices, retail, restaurants, schools, and more.",
  "/commercial",
);

const commercialSectors = sectors.filter((sector) => sector.slug !== "industrial");

export default function CommercialPage() {
  return (
    <>
      <PageHero eyebrow="Commercial" title="HVAC solutions for commercial buildings" />
      <article className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-4 text-base leading-7 text-muted">
            <p>
              Commercial buildings don’t get to close because a rooftop unit quit. We install,
              replace, maintain, and repair the heating, cooling, and ventilation that offices,
              retail, kitchens, schools, and halls depend on.
            </p>
            <p>
              The work runs from a single failed unit to a design-build retrofit of a mechanical
              room. You get a written scope, technicians who are certified and insured, and a price
              before anyone opens a panel.
            </p>
            <p>
              Emergency calls go to the mobile line, day or night. Email is for quotes and
              scheduling, not for a building that just lost cooling.
            </p>
          </div>
          <Photo
            src={photos.tower}
            alt="Commercial building glass facade"
            className="aspect-[4/3] rounded-3xl"
          />
        </div>

        <h2 className="mt-14 text-2xl font-bold text-navy">Buildings we work in</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {commercialSectors.map((sector) => (
            <Link
              key={sector.slug}
              href={`/sectors/${sector.slug}`}
              className="group flex items-center justify-between gap-3 rounded-2xl border border-line px-4 py-4 text-sm font-bold text-navy hover:border-blue hover:text-blue"
            >
              {sector.label}
              <svg
                viewBox="0 0 20 20"
                className="h-4 w-4 shrink-0 text-blue transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          ))}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            {
              href: "/services/installation",
              title: "Installation",
              body: "New equipment and change-outs, commissioned before we leave.",
            },
            {
              href: "/services/repair",
              title: "Repair",
              body: "Diagnosis, a clear price, and 24/7 coverage when the building is down.",
            },
            {
              href: "/commercial/maintenance",
              title: "Maintenance",
              body: "Four plan levels, from filter routes to a fixed-fee agreement.",
            },
          ].map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="rounded-3xl bg-navy p-6 text-white hover:bg-navy-2"
            >
              <h3 className="text-lg font-bold">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/75">{card.body}</p>
            </Link>
          ))}
        </div>
      </article>
      <ConsultBand />
    </>
  );
}
