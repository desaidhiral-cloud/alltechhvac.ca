import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConsultBand } from "@/components/ConsultBand";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Sidebar } from "@/components/Sidebar";
import { getSector, sectors } from "@/lib/sectors";
import { pageMeta } from "@/lib/site";

export function generateStaticParams() {
  return sectors.map((sector) => ({ slug: sector.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) return {};
  return pageMeta(sector.title, sector.description, `/sectors/${sector.slug}`);
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) notFound();

  return (
    <>
      <PageHero eyebrow="Sectors we serve" title={sector.title} />
      <div className="mx-auto grid w-full min-w-0 max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:py-16">
        <Sidebar
          title="Sectors"
          current={`/sectors/${sector.slug}`}
          items={sectors.map((item) => ({
            href: `/sectors/${item.slug}`,
            label: item.label,
          }))}
        />
        <article className="min-w-0">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Sectors", href: "/sectors" },
              { name: sector.label, href: `/sectors/${sector.slug}` },
            ]}
          />
          <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                {sector.headline}
              </h2>
              <p className="mt-4 text-base leading-7 text-muted">{sector.intro}</p>
            </div>
            <Photo
              src={sector.image}
              alt={sector.imageAlt}
              className="aspect-[16/10] rounded-3xl sm:aspect-[4/3]"
            />
          </div>

          <h2 className="mt-12 text-2xl font-bold text-navy">Why this building type is its own job</h2>
          <div className="mt-5 overflow-hidden rounded-2xl border border-line">
            <div className="hidden grid-cols-3 bg-navy px-4 py-3 text-xs font-bold uppercase tracking-wider text-white md:grid">
              <span>Area</span>
              <span>What goes wrong</span>
              <span>Why it matters</span>
            </div>
            {sector.challenges.map((row) => (
              <div
                key={row.area}
                className="grid min-w-0 gap-1 border-t border-line px-4 py-4 text-sm md:grid-cols-3"
              >
                <p className="font-bold text-navy">{row.area}</p>
                <p className="text-muted">{row.challenge}</p>
                <p className="text-muted">{row.impact}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-12 text-2xl font-bold text-navy">Turnkey support</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {sector.turnkey.map((block) => (
              <section key={block.title} className="rounded-3xl bg-ice p-5">
                <h3 className="font-bold text-navy">{block.title}</h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-muted">
                  {block.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="text-blue" aria-hidden="true">
                        ✓
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <h2 className="mt-12 text-2xl font-bold text-navy">What you get from us</h2>
          <div className="mt-5 overflow-hidden rounded-2xl border border-line">
            {sector.advantages.map((row) => (
              <div
                key={row.advantage}
                className="grid min-w-0 gap-1 border-t border-line px-4 py-4 text-sm first:border-t-0 md:grid-cols-2"
              >
                <p className="font-bold text-navy">{row.advantage}</p>
                <p className="text-muted">{row.benefit}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-12 text-2xl font-bold text-navy">{sector.packageTitle}</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {sector.packageItems.map((item) => (
              <li
                key={item}
                className="flex gap-2 rounded-2xl border border-line px-4 py-3 text-sm font-medium"
              >
                <span className="text-cyan" aria-hidden="true">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted">
            Looking for the broader service list? See{" "}
            <Link href="/commercial" className="font-semibold text-blue">
              commercial HVAC
            </Link>{" "}
            or{" "}
            <Link href="/industrial" className="font-semibold text-blue">
              industrial HVAC
            </Link>
            .
          </p>
        </article>
      </div>
      <ConsultBand title={sector.ctaTitle} body={sector.ctaBody} />
    </>
  );
}
