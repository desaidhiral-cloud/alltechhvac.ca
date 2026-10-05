import { ConsultBand } from "@/components/ConsultBand";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { photos } from "@/lib/photos";
import { pageMeta } from "@/lib/site";

const items = [
  {
    title: "Heating",
    body: "Furnaces, boilers, and hydronic systems. No-heat calls go to the front of the list in winter.",
  },
  {
    title: "Air conditioning",
    body: "Central air replacements and repairs. We tell you when the outdoor unit is done versus when it needs a part.",
  },
  {
    title: "Heat pumps",
    body: "Cold-climate heat pumps where the house, the ductwork, and the electrical service can support one. Not as a default.",
  },
  {
    title: "Indoor air",
    body: "Filtration, ventilation, and humidity when the house needs it, not a box added because it was on the truck.",
  },
];

export const metadata = pageMeta(
  "Residential HVAC",
  "Home heating, air conditioning, and heat pump installation and repair across the Greater Toronto Area. Transparent pricing, 24/7 no-heat response.",
  "/residential",
);

export default function ResidentialPage() {
  return (
    <>
      <PageHero
        eyebrow="Residential"
        title="HVAC for houses"
        aside="Furnaces, air conditioning, heat pumps"
      />
      <article className="mx-auto grid max-w-7xl items-start gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
        <div>
          <div className="space-y-4 text-base leading-7 text-muted">
            <p>
              The commercial and industrial work is most of the site. The houses are not a side door.
              Furnace down in January and an air conditioner that quits in July are the same company,
              the same technicians, and the same habit of quoting before we start.
            </p>
            <p>
              We service and install all major brands. If a repair is a poor use of money on an old
              unit, you’ll hear that with the replacement price beside it.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {items.map((item) => (
              <section key={item.title} className="rounded-3xl border border-line p-5">
                <h2 className="font-bold text-navy">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </section>
            ))}
          </div>
        </div>
        <Photo src={photos.home} alt="Residential home exterior" className="aspect-[4/5] rounded-3xl" />
      </article>
      <ConsultBand
        title="No heat, no cooling, or a replacement you’ve been putting off?"
        body="Call the office during the day. After hours, the mobile line is the emergency number."
      />
    </>
  );
}
