import { photos } from "./photos";

export type ServiceArea = {
  slug: string;
  city: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  intro: string[];
  points: string[];
};

export const areas: ServiceArea[] = [
  {
    slug: "kitchener",
    city: "Kitchener",
    title: "HVAC Services in Kitchener",
    description:
      "Alltech Building Services is based at 11 Westwood Drive in Kitchener. Heating, cooling, ventilation, and 24/7 emergency service across the city.",
    image: photos.city,
    imageAlt: "City streetscape",
    intro: [
      "The shop is in Kitchener, at 11 Westwood Drive. That is the city we get across fastest, from the older neighbourhoods to the industrial bays on the edge of town.",
      "We cover houses, plaza rooftops, restaurant kitchens, and plant mechanical rooms. Same office number during the day, same mobile number when the heat is out after six.",
    ],
    points: [
      "Home base for residential replacements and commercial rooftop work",
      "Downtown, residential neighbourhoods, and industrial parks",
      "Same-day response is realistic here when the schedule allows",
      "Office: 519-513-2020 · Mobile: 289-233-7001",
    ],
  },
  {
    slug: "waterloo",
    city: "Waterloo",
    title: "HVAC Services in Waterloo",
    description:
      "Commercial, residential, and light-industrial HVAC service in Waterloo. Offices, student housing, retail, and tech-sector buildings.",
    image: photos.office,
    imageAlt: "Modern office interior",
    intro: [
      "Waterloo work for us is offices, mid-rise housing, retail along the main corridors, and the mechanical rooms that serve them. The buildings are newer on average than a lot of Kitchener stock, and the complaints are usually zoning and ventilation rather than a 30-year-old boiler.",
      "We still see the older houses and the small commercial plazas. Both get the same rule: quote the scope, then do the scope.",
    ],
    points: [
      "Office fit-outs and base-building rooftop service",
      "Mid-rise and student-housing fan coils and corridor air",
      "Retail and restaurant equipment along the commercial strips",
      "Dispatched from Kitchener, a short run up the road",
    ],
  },
  {
    slug: "cambridge",
    city: "Cambridge",
    title: "HVAC Services in Cambridge",
    description:
      "Industrial and commercial HVAC in Cambridge, including warehouses, manufacturing, and older commercial buildings in Galt, Preston, and Hespeler.",
    image: photos.factory,
    imageAlt: "Manufacturing equipment",
    intro: [
      "Cambridge is where a lot of the plant and warehouse work sits. Manufacturing bays, logistics buildings, and the older commercial streets in Galt, Preston, and Hespeler each need a different kind of visit.",
      "Tall warehouses with cold floors, process exhaust with no make-up air, and rooftop units over retail are the usual calls. We also cover homes in the city when you want the same company that does the commercial work.",
    ],
    points: [
      "Manufacturing and food-adjacent production spaces",
      "Warehouse heating, destratification, and dock comfort",
      "Older commercial buildings that need retrofits, not just swaps",
      "Residential service through the same dispatch",
    ],
  },
  {
    slug: "guelph",
    city: "Guelph",
    title: "HVAC Services in Guelph",
    description:
      "HVAC installation, maintenance, and emergency repair in Guelph for homes, commercial buildings, and manufacturing sites.",
    image: photos.tower,
    imageAlt: "Commercial buildings",
    intro: [
      "Guelph is part of the regular service area, not a favour we do once. Homes, the university-adjacent rental stock, downtown commercial, and the manufacturing buildings on the industrial side of the city.",
      "Lead time is a little longer than a Kitchener call. If the job is an emergency (no heat, a kitchen that's down, a plant that lost a unit), say that when you call the mobile line and we treat it that way.",
    ],
    points: [
      "Residential replacements and no-heat calls",
      "Downtown commercial and retail equipment",
      "Manufacturing and warehouse ventilation",
      "Maintenance programs for buildings we can reach on a set route",
    ],
  },
];

export function getArea(slug: string) {
  return areas.find((area) => area.slug === slug);
}
