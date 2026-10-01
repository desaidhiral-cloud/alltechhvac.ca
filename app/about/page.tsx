import { ConsultBand } from "@/components/ConsultBand";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { photos } from "@/lib/photos";
import { addressLine, pageMeta, pillars, site } from "@/lib/site";

export const metadata = pageMeta(
  "About",
  "Alltech Building Services is a Kitchener HVAC contractor for residential, commercial, and industrial heating, cooling, ventilation, and controls.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title={site.tagline} aside={site.descriptor} />
      <article className="mx-auto grid max-w-7xl items-start gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-16">
        <div className="space-y-4 text-base leading-7 text-muted">
          <p>
            {site.name} works out of {addressLine}. The job is heating, cooling, ventilation, and
            the controls around them: houses, commercial buildings, and industrial facilities in
            Kitchener, Waterloo, Cambridge, Guelph, and the communities around them.
          </p>
          <p>
            Technicians are experienced, certified, and insured. The price is on the quote before
            the work starts. Customer satisfaction is the priority, which in practice means we
            answer the phone, we show up, and we don’t invent extras once a panel is open.
          </p>
          <p>
            We install and service all major brands and the usual system types: furnaces, boilers,
            air conditioning, heat pumps, rooftop units, ventilation, and plant equipment. If a name
            isn’t on a web page, ask. The limit is the work, not a brand list.
          </p>
          <p>
            Office hours are {site.hours}. The mobile line, {site.phoneMobile}, is the 24/7 number
            for no-heat, no-cooling, and systems that have taken a building down.
          </p>
        </div>
        <Photo src={photos.consult} alt="Consultation at a desk" className="aspect-[4/3] rounded-3xl" />
      </article>
      <section className="bg-ice">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-3xl bg-white p-5 ring-1 ring-line">
              <h2 className="font-bold text-navy">{pillar.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>
      <ConsultBand />
    </>
  );
}
