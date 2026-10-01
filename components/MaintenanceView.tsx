import Link from "next/link";
import { Breadcrumbs } from "./Breadcrumbs";
import { PageHero } from "./PageHero";
import type { MaintenancePage } from "@/lib/maintenance";

export function MaintenanceView({
  data,
  path,
  parent,
}: {
  data: MaintenancePage;
  path: string;
  parent: { name: string; href: string };
}) {
  return (
    <>
      <PageHero eyebrow={data.eyebrow} title={data.title} />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            parent,
            { name: "Maintenance", href: path },
          ]}
        />
        <p className="max-w-3xl text-2xl font-bold tracking-tight text-navy">{data.lede}</p>
        <div className="mt-5 max-w-3xl space-y-4 text-base leading-7 text-muted">
          {data.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <h2 className="mt-12 text-2xl font-bold text-navy">Equipment we put on a program</h2>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {data.equipment.map((item) => (
            <li key={item} className="flex gap-3 rounded-2xl border border-line bg-ice px-4 py-3 text-sm font-medium text-ink">
              <span className="mt-0.5 text-cyan" aria-hidden="true">
                ✓
              </span>
              {item}
            </li>
          ))}
        </ul>
        <h2 className="mt-12 text-2xl font-bold text-navy">Plans</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {data.plans.map((plan) => (
            <article key={plan.name} className="flex flex-col rounded-3xl bg-navy p-5 text-white">
              <h3 className="text-lg font-bold">{plan.name}</h3>
              <p className="mt-2 text-sm leading-6 text-white/75">{plan.blurb}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {plan.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-cyan-2" aria-hidden="true">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted">
          Full Protection covers the components named in the agreement, not every failure a building
          can have. You’ll see the list before you sign.{" "}
          <Link href="/book" className="font-semibold text-blue">
            Ask for a survey and a number.
          </Link>
        </p>
      </div>
    </>
  );
}
