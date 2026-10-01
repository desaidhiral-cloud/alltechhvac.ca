import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { photos } from "@/lib/photos";
import { pageMeta } from "@/lib/site";

const shots = [
  { title: "Rooftop equipment", sector: "Commercial", src: photos.hvac, alt: "Outdoor cooling equipment" },
  { title: "Plant mechanical", sector: "Industrial", src: photos.pipes, alt: "Industrial mechanical piping" },
  { title: "Production floors", sector: "Industrial", src: photos.factory, alt: "Manufacturing floor" },
  { title: "Dining rooms", sector: "Restaurants", src: photos.restaurant, alt: "Restaurant dining room" },
  { title: "Kitchens", sector: "Restaurants", src: photos.kitchen, alt: "Commercial kitchen" },
  { title: "Offices", sector: "Commercial", src: photos.office, alt: "Open office" },
  { title: "Warehouses", sector: "Logistics", src: photos.warehouse, alt: "Warehouse aisle" },
  { title: "Multi-unit housing", sector: "Residential", src: photos.condo, alt: "Apartment building" },
  { title: "Schools", sector: "Education", src: photos.school, alt: "School hallway" },
  { title: "Service work", sector: "Maintenance", src: photos.panel, alt: "Technician at a control panel" },
  { title: "Houses", sector: "Residential", src: photos.house, alt: "House exterior" },
  { title: "Arenas", sector: "Sports", src: photos.sports, alt: "Indoor sports facility" },
];

export const metadata = pageMeta(
  "Gallery",
  "The kinds of buildings and HVAC systems Alltech Building Services installs and maintains across Kitchener-Waterloo.",
  "/gallery",
);

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="The work"
        aside="Spaces and systems we show up for"
      />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <p className="max-w-3xl text-base leading-7 text-muted">
          These are the kinds of rooms and mechanical systems we install and service, not a trophy
          wall of client names. If you want a walkthrough of a building like yours, book one.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shots.map((shot) => (
            <li key={shot.title} className="overflow-hidden rounded-3xl border border-line bg-white">
              <Photo src={shot.src} alt={shot.alt} className="aspect-[4/3]" />
              <div className="p-4">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue">{shot.sector}</p>
                <h2 className="mt-1 font-bold text-navy">{shot.title}</h2>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
