import Link from "next/link";
import { ConsultBand } from "@/components/ConsultBand";
import { PageHero } from "@/components/PageHero";
import { services } from "@/lib/services";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta(
  "HVAC Services",
  "Installation, repair, maintenance, retrofits, project management, controls, and equipment service from Alltech Building Services in the Greater Toronto Area.",
  "/services",
);

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="HVAC services"
        aside="Installation through emergency repair"
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <p className="max-w-3xl text-base leading-7 text-muted">
          The same list you’ll find in the menu. Pick the work that matches the building. If you’re
          not sure whether it’s a repair or a replacement, start with a call. We’ll say which one
          it is after we see it.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="rounded-3xl border border-line bg-white p-6 transition hover:-translate-y-0.5 hover:border-blue hover:shadow-md"
            >
              <h2 className="text-xl font-bold text-navy">{service.label}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{service.description}</p>
              <span className="mt-4 inline-block text-sm font-bold text-blue">Read more</span>
            </Link>
          ))}
        </div>
      </div>
      <ConsultBand />
    </>
  );
}
