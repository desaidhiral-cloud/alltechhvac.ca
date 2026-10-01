import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConsultBand } from "@/components/ConsultBand";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Sidebar } from "@/components/Sidebar";
import { getService, services } from "@/lib/services";
import { pageMeta } from "@/lib/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMeta(service.title, service.description, `/services/${service.slug}`);
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero eyebrow="Services" title={service.title} />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[260px_1fr] lg:py-16">
        <Sidebar
          title="Our services"
          current={`/services/${service.slug}`}
          items={services.map((item) => ({
            href: `/services/${item.slug}`,
            label: item.label,
          }))}
        />
        <article>
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
              { name: service.label, href: `/services/${service.slug}` },
            ]}
          />
          <p className="text-sm font-semibold text-blue">{service.serving}</p>
          <div className="mt-4 space-y-4 text-base leading-7 text-muted">
            {service.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Photo
            src={service.image}
            alt={service.imageAlt}
            className="mt-8 aspect-[16/8] rounded-3xl"
          />
          <h2 className="mt-10 text-2xl font-bold text-navy">{service.explainTitle}</h2>
          <p className="mt-3 text-base leading-7 text-muted">{service.explainBody}</p>
          <h2 className="mt-10 text-2xl font-bold text-navy">{service.processTitle}</h2>
          <ul className="mt-5 grid gap-4">
            {service.process.map((item) => (
              <li key={item.title} className="rounded-2xl border border-line p-5">
                <h3 className="flex items-start gap-2 font-bold text-navy">
                  <span className="text-cyan" aria-hidden="true">
                    ✓
                  </span>
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
          <h2 className="mt-10 text-2xl font-bold text-navy">{service.whyTitle}</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {service.why.map((item) => (
              <li key={item} className="flex gap-2 text-sm leading-6 text-ink">
                <span className="text-blue" aria-hidden="true">
                  •
                </span>
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
      <ConsultBand />
    </>
  );
}
