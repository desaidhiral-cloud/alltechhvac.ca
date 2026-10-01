import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ConsultBand } from "@/components/ConsultBand";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { areas, getArea } from "@/lib/areas";
import { pageMeta } from "@/lib/site";

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return pageMeta(area.title, area.description, `/service-areas/${area.slug}`);
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  return (
    <>
      <PageHero eyebrow="Service area" title={area.title} aside="Residential · Commercial · Industrial" />
      <article className="mx-auto grid max-w-7xl items-start gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-16">
        <div>
          <div className="space-y-4 text-base leading-7 text-muted">
            {area.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-8 grid gap-3">
            {area.points.map((point) => (
              <li key={point} className="flex gap-2 text-sm font-medium text-ink">
                <span className="text-cyan" aria-hidden="true">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted">
            Also serving{" "}
            {areas
              .filter((item) => item.slug !== area.slug)
              .map((item, index, list) => (
                <span key={item.slug}>
                  <Link href={`/service-areas/${item.slug}`} className="font-semibold text-blue">
                    {item.city}
                  </Link>
                  {index < list.length - 1 ? ", " : ""}
                </span>
              ))}
            .
          </p>
        </div>
        <Photo src={area.image} alt={area.imageAlt} className="aspect-[4/3] rounded-3xl" />
      </article>
      <ConsultBand />
    </>
  );
}
