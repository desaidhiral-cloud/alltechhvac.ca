import Link from "next/link";
import { ConsultBand } from "@/components/ConsultBand";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { photos } from "@/lib/photos";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta(
  "Industrial HVAC",
  "Industrial HVAC installation, maintenance, and repair for plants and warehouses across the Greater Toronto Area.",
  "/industrial",
);

const systems = [
  "Make-up air and process exhaust",
  "Plant heating and unit heaters",
  "Process cooling and chillers",
  "Boilers and hot-water systems",
  "Cooling towers and fluid coolers",
  "Air handlers and rooftop units",
  "Heat pumps where they fit the load",
  "Dehumidification",
  "DDC and building automation",
  "Control-room and MCC cooling",
  "Warehouse destratification",
  "Refrigeration tied to the building",
];

export default function IndustrialPage() {
  return (
    <>
      <PageHero eyebrow="Industrial" title="HVAC solutions for industrial facilities" />
      <article className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-4 text-base leading-7 text-muted">
            <p>
              Plants and warehouses ask more from the air than an office does. Exhaust has to be
              replaced. Heat has to land at the floor, not the deck. A control room has to stay in
              range when the bay does not.
            </p>
            <p>
              We install, repair, and maintain that equipment across the Greater Toronto Area.
              Shutdown windows get used when you have them. When you don’t, we work the
              part of the building that can be worked.
            </p>
            <p>
              If the job is really a sector question (food plant, logistics building, high-bay
              manufacturing), start with the sector page. The service menu below is the mechanical
              scope.
            </p>
          </div>
          <Photo
            src={photos.pipes}
            alt="Industrial piping and mechanical systems"
            className="aspect-[4/3] rounded-3xl"
          />
        </div>

        <h2 className="mt-14 text-2xl font-bold text-navy">Systems we take on</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {systems.map((item) => (
            <li key={item} className="rounded-2xl border border-line px-4 py-3 text-sm font-medium">
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link href="/services/installation" className="rounded-full bg-blue px-5 py-3 text-center text-sm font-bold text-white">
            Installation
          </Link>
          <Link href="/services/repair" className="rounded-full border border-line px-5 py-3 text-center text-sm font-bold text-navy">
            Repair
          </Link>
          <Link href="/industrial/maintenance" className="rounded-full border border-line px-5 py-3 text-center text-sm font-bold text-navy">
            Maintenance programs
          </Link>
          <Link href="/sectors/industrial" className="rounded-full border border-line px-5 py-3 text-center text-sm font-bold text-navy">
            Industrial sectors
          </Link>
        </div>
      </article>
      <ConsultBand />
    </>
  );
}
