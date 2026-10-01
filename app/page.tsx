import Link from "next/link";
import type { Metadata } from "next";
import { Photo } from "@/components/Photo";
import { photos } from "@/lib/photos";
import { pillars, site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Alltech Building Services | HVAC Contractor in Ontario",
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Alltech Building Services | HVAC Contractor in Ontario",
    description: site.description,
    url: "/",
  },
};

const steps = [
  {
    title: "Consultation",
    body: "We walk the site, look at the equipment, and talk through comfort, air quality, and budget.",
  },
  {
    title: "Agreement",
    body: "You get a written scope, a timeline, and a price. No hidden fees after the fact.",
  },
  {
    title: "Execution",
    body: "Certified technicians install, repair, or service the system with as little disruption as the building allows.",
  },
  {
    title: "Quality check",
    body: "We start it up, test it under load, and leave when it is actually doing the job.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0 opacity-25">
          <Photo
            src={photos.tech}
            alt=""
            className="h-full w-full"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/92 to-navy/75" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-2">
              {site.descriptor}
            </p>
            <h1 className="mt-4 max-w-xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              HVAC for homes, commercial buildings, and industrial facilities.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
              {site.name} installs, maintains, and repairs heating and cooling systems all across
              Ontario. Certified technicians, transparent pricing, and a mobile line that
              answers after hours.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/about"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-bold text-navy hover:bg-ice"
              >
                Learn more about us
              </Link>
              <Link
                href="/gallery"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 px-6 text-sm font-bold text-white hover:bg-white/10"
              >
                Explore our work
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <Photo
              src={photos.engineer}
              alt="Technician reviewing equipment on site"
              className="aspect-[4/5] rounded-3xl"
              priority
            />
            <Photo
              src={photos.plant}
              alt="Industrial facility"
              className="aspect-[4/5] rounded-3xl lg:mt-8"
              priority
            />
            <Photo
              src={photos.office}
              alt="Commercial interior"
              className="aspect-[4/5] rounded-3xl lg:-mt-8"
            />
            <Photo
              src={photos.panel}
              alt="Service work on mechanical equipment"
              className="aspect-[4/5] rounded-3xl"
            />
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-4 text-center text-xs font-bold uppercase tracking-[0.14em] text-navy sm:grid-cols-3 sm:px-6 sm:text-sm">
          <p>Residential</p>
          <p>Commercial</p>
          <p>Industrial · 24/7</p>
        </div>
      </section>

      <section className="bg-ice">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-blue sm:text-4xl">
              How we can help you
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              From houses to plants, we deliver heating and cooling that holds up. New install,
              a replacement, or a system that needs to be looked after. That’s the work.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-line">
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-bold text-blue">HVAC for commercial buildings</h3>
                <p className="mt-2 text-sm font-bold text-navy">Comfort-driven. Efficiency-focused.</p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Offices, retail, restaurants, schools, and the other buildings that have to stay
                  open. Design, installation, maintenance, and the repair call when a rooftop unit
                  quits.
                </p>
                <Link
                  href="/commercial"
                  className="mt-5 inline-flex rounded-lg border border-line px-4 py-2.5 text-sm font-bold text-navy hover:border-blue hover:text-blue"
                >
                  Explore commercial HVAC
                </Link>
              </div>
              <Photo src={photos.mall} alt="Commercial interior" className="aspect-[16/9]" />
            </article>
            <article className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-line">
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-bold text-blue">HVAC for industrial facilities</h3>
                <p className="mt-2 text-sm font-bold text-navy">Process first. Then comfort.</p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Make-up air, plant heating and cooling, warehouses, and the controls that keep a
                  bay inside its window. From the first walkthrough through a maintenance program.
                </p>
                <Link
                  href="/industrial"
                  className="mt-5 inline-flex rounded-lg border border-line px-4 py-2.5 text-sm font-bold text-navy hover:border-blue hover:text-blue"
                >
                  Explore industrial HVAC
                </Link>
              </div>
              <Photo src={photos.factory} alt="Industrial plant floor" className="aspect-[16/9]" />
            </article>
          </div>
          <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-3xl bg-navy px-6 py-6 text-white sm:flex-row sm:items-center sm:px-8">
            <div>
              <h3 className="text-lg font-bold">Homes, too.</h3>
              <p className="mt-1 max-w-2xl text-sm leading-6 text-white/75">
                Furnaces, air conditioning, and heat pumps for houses in Kitchener-Waterloo. Same
                company, same rule on pricing.
              </p>
            </div>
            <Link
              href="/residential"
              className="inline-flex shrink-0 rounded-full bg-cyan px-5 py-3 text-sm font-bold text-navy"
            >
              Residential HVAC
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue">Service process</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              How it works
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted">
              A short path from the first call to a system that has been started up and checked.
            </p>
          </div>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title} className="rounded-3xl bg-navy p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-2">
                  Step {index + 1}
                </p>
                <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/75">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ice">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue">Our specialty</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Heating and cooling, handled by people who stay on the job.
            </h2>
            <div className="mt-5 space-y-4 text-base leading-7 text-muted">
              <p>
                {site.name} is a Kitchener contractor for residential, commercial, and industrial
                HVAC. Installation and replacement, maintenance, emergency repair, ventilation, heat
                pumps, and the controls that tie a system together.
              </p>
              <p>
                Technicians are certified and insured. Pricing is written down before the work
                starts. If a unit isn’t worth saving, we say so and price the replacement instead of
                talking you into one more repair.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Photo src={photos.hvac} alt="Outdoor HVAC equipment" className="aspect-square rounded-3xl" />
            <div className="flex aspect-square flex-col justify-center rounded-3xl bg-blue p-5 text-white">
              <p className="text-4xl font-extrabold">24/7</p>
              <p className="mt-2 text-sm font-semibold leading-5">
                Emergency service on the mobile line
              </p>
            </div>
            <div className="flex aspect-square flex-col justify-center rounded-3xl bg-navy p-5 text-white">
              <p className="text-3xl font-extrabold leading-none">All brands</p>
              <p className="mt-2 text-sm font-semibold leading-5">All major systems</p>
            </div>
            <Photo src={photos.inspect} alt="Equipment inspection" className="aspect-square rounded-3xl" />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded-3xl border border-line p-5">
              <h3 className="text-base font-bold text-navy">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{pillar.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ice">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-16 sm:px-6 md:grid-cols-2">
          <article className="rounded-3xl bg-blue p-8 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-cyan-2">Vision</p>
            <h2 className="mt-3 text-2xl font-extrabold">Quality first. A little better every year.</h2>
            <p className="mt-4 text-sm leading-7 text-white/80">
              Be the building-services company Waterloo Region calls when the work has to be done
              right. Set the standard on the job in front of us, then raise it on the next one.
            </p>
          </article>
          <article className="rounded-3xl bg-navy p-8 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-cyan-2">Mission</p>
            <h2 className="mt-3 text-2xl font-extrabold">Systems that hold up, and clients we keep.</h2>
            <p className="mt-4 text-sm leading-7 text-white/80">
              Deliver heating, cooling, ventilation, and controls to a high professional standard.
              Stay available after start-up. Treat the long relationship as part of the work, not a
              slogan under the invoice.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-white pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid overflow-hidden rounded-[2rem] bg-blue md:grid-cols-[0.9fr_1.1fr]">
            <Photo
              src={photos.electrician}
              alt="Technician on a service call"
              className="min-h-56 md:min-h-full"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="flex flex-col justify-center px-6 py-10 sm:px-10">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-cyan-2">
                24 hours & emergencies
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
                {site.slogan}
              </h2>
              <a
                href={`tel:${site.phoneMobileTel}`}
                className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
              >
                {site.phoneMobile}
              </a>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/80">
                Office {site.phoneOffice} · {site.hours}. After hours, use the mobile line. Email
                is not monitored overnight.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
