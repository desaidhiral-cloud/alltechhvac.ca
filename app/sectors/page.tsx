import Link from "next/link";
import { Photo } from "@/components/Photo";
import { PageHero } from "@/components/PageHero";
import { sectors } from "@/lib/sectors";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta(
  "Sectors We Serve",
  "HVAC for hotels, restaurants, schools, retail, churches, offices, sports facilities, warehouses, industrial plants, and high-rise residential buildings.",
  "/sectors",
);

export default function SectorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Sectors we serve"
        title="Built around the building, not a generic rooftop."
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <p className="max-w-3xl text-base leading-7 text-muted">
          A restaurant, a warehouse, and a sanctuary fail in different ways. Pick the building.
          The mechanical scope (install, repair, maintenance, controls) sits under Services.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => (
            <Link
              key={sector.slug}
              href={`/sectors/${sector.slug}`}
              className="group overflow-hidden rounded-3xl border border-line bg-white"
            >
              <Photo src={sector.image} alt="" className="aspect-[16/10]" />
              <div className="p-5">
                <h2 className="text-lg font-bold text-navy group-hover:text-blue">{sector.label}</h2>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted">{sector.headline}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
