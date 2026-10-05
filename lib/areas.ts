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
      "Alltech Building Services is based in Kitchener. Heating, cooling, ventilation, and 24/7 emergency service across the city.",
    image: photos.house,
    imageAlt: "House exterior",
    intro: [
      "The shop is in Kitchener, at 11 Westwood Drive. That is the city we get across fastest, from the older neighbourhoods to the industrial bays on the edge of town.",
      "We cover houses, plaza rooftops, restaurant kitchens, and plant mechanical rooms. One number during the day and after hours.",
    ],
    points: [
      "Home base for residential replacements and commercial rooftop work",
      "Downtown, residential neighbourhoods, and industrial parks",
      "Same-day response is realistic here when the schedule allows",
      "24/7 line: 289-233-7001",
    ],
  },
  {
    slug: "waterloo",
    city: "Waterloo",
    title: "HVAC Services in Waterloo",
    description:
      "Commercial, residential, and light-industrial HVAC service in Waterloo. Offices, mid-rise housing, retail, and tech-sector buildings.",
    image: photos.condo,
    imageAlt: "Mid-rise residential buildings",
    intro: [
      "Waterloo work is offices, mid-rise housing, retail along the main corridors, and the mechanical rooms that serve them. Newer buildings usually mean zoning and ventilation, not a 30-year-old boiler.",
      "Older houses and small commercial plazas get the same rule: quote the scope, then do the scope.",
    ],
    points: [
      "Office fit-outs and base-building rooftop service",
      "Mid-rise fan coils and corridor air",
      "Retail and restaurant equipment along the commercial strips",
      "Dispatched from the Kitchener shop",
    ],
  },
  {
    slug: "cambridge",
    city: "Cambridge",
    title: "HVAC Services in Cambridge",
    description:
      "Industrial and commercial HVAC in Cambridge, including warehouses, manufacturing, and older commercial buildings in Galt, Preston, and Hespeler.",
    image: photos.warehouse,
    imageAlt: "Warehouse aisle",
    intro: [
      "Cambridge is where a lot of the plant and warehouse work sits. Manufacturing bays, logistics buildings, and the older commercial streets in Galt, Preston, and Hespeler each need a different kind of visit.",
      "Tall warehouses with cold floors, process exhaust with no make-up air, and rooftop units over retail are the usual calls. Homes in the city go through the same company.",
    ],
    points: [
      "Manufacturing and food-adjacent production spaces",
      "Warehouse heating, destratification, and dock comfort",
      "Older commercial buildings that need retrofits, not just swaps",
      "Residential service through the same dispatch",
    ],
  },
  {
    slug: "toronto",
    city: "Toronto",
    title: "HVAC Services in Toronto",
    description:
      "Heating, cooling, ventilation, and 24/7 emergency HVAC service across Toronto. Homes, commercial buildings, and industrial facilities.",
    image: photos.city,
    imageAlt: "Toronto streetscape",
    intro: [
      "Toronto is part of the Greater Toronto Area service area, not a limit on it. Downtown towers, mid-rise residential, retail strips, and the industrial pockets along the rail and the port all sit on the same dispatch.",
      "We cover houses, plaza rooftops, restaurant kitchens, and plant mechanical rooms. One number during the day and after hours.",
    ],
    points: [
      "Downtown, midtown, and the former boroughs",
      "High-rise fan coils, rooftop fleets, and house systems",
      "Commercial kitchens and occupied retrofits",
      "24/7 line: 289-233-7001",
    ],
  },
  {
    slug: "mississauga",
    city: "Mississauga",
    title: "HVAC Services in Mississauga",
    description:
      "Commercial, residential, and industrial HVAC service in Mississauga. Offices, warehouses, retail, and multi-unit housing.",
    image: photos.office,
    imageAlt: "Modern office interior",
    intro: [
      "Mississauga is one of the cities inside the Greater Toronto Area we cover. Offices, logistics buildings, retail plazas, and the condo stock along the main corridors are the usual calls.",
      "Houses get the same rule as the commercial jobs: the scope is written down, then the scope is what gets done.",
    ],
    points: [
      "Office and plaza rooftop service",
      "Warehouse heating, docks, and make-up air",
      "Condo fan coils and corridor air",
      "Residential replacements on the same dispatch",
    ],
  },
  {
    slug: "brampton",
    city: "Brampton",
    title: "HVAC Services in Brampton",
    description:
      "Industrial and commercial HVAC in Brampton, including manufacturing, warehouses, retail, and homes across the city.",
    image: photos.factory,
    imageAlt: "Manufacturing equipment",
    intro: [
      "Brampton sits in the same Greater Toronto Area service area. Manufacturing bays, logistics buildings, and the commercial plazas each need a different kind of visit.",
      "Tall warehouses with cold floors, process exhaust with no make-up air, and rooftop units over retail are the usual calls. Homes in the city go through the same company.",
    ],
    points: [
      "Manufacturing and production spaces",
      "Warehouse heating, destratification, and dock comfort",
      "Retail and restaurant equipment",
      "Residential service through the same dispatch",
    ],
  },
  {
    slug: "vaughan",
    city: "Vaughan",
    title: "HVAC Services in Vaughan",
    description:
      "HVAC installation, maintenance, and emergency repair in Vaughan for homes, commercial buildings, and industrial sites.",
    image: photos.tower,
    imageAlt: "Commercial buildings",
    intro: [
      "Vaughan is on the Greater Toronto Area route, along with the other cities around it. New commercial, the industrial parks, retail, and the houses around them.",
      "If the job is an emergency (no heat, a kitchen that's down, a plant that lost a unit), say that when you call and we treat it that way.",
    ],
    points: [
      "Industrial parks and warehouse bays",
      "Retail and commercial rooftops",
      "Residential replacements and no-heat calls",
      "Maintenance programs on a set route",
    ],
  },
];

export function getArea(slug: string) {
  return areas.find((area) => area.slug === slug);
}
