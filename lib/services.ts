import { photos } from "./photos";

export type Service = {
  slug: string;
  label: string;
  summary: string;
  title: string;
  description: string;
  serving: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  explainTitle: string;
  explainBody: string;
  processTitle: string;
  process: { title: string; body: string }[];
  whyTitle: string;
  why: string[];
};

export const services: Service[] = [
  {
    slug: "maintenance",
    label: "HVAC Maintenance",
    summary:
      "Scheduled visits that catch the small failures before they shut the building down. Filters, coils, safeties, and a short report of what we found.",
    title: "HVAC Maintenance Programs",
    description:
      "Preventive HVAC maintenance for commercial and industrial buildings in the Greater Toronto Area. Scheduled service, filter changes, and 24/7 backup.",
    serving: "Commercial and industrial maintenance across the Greater Toronto Area.",
    paragraphs: [
      "Equipment fails on the hottest afternoon or the coldest Monday because small problems were left alone. A maintenance program is how you stop paying for that.",
      "Alltech Building Services builds a schedule around the equipment you actually have (rooftop units, boilers, heat pumps, make-up air, split systems, and controls), then shows up and writes down what we found.",
    ],
    image: photos.inspect,
    imageAlt: "Insulated ductwork and a ceiling diffuser",
    explainTitle: "What a maintenance visit actually covers",
    explainBody:
      "We don't do a drive-by filter swap and call it a program. Each visit has a checklist for that piece of equipment: airflow, temperatures, safeties, belts, coils, drains, electrical connections, and the control sequence. You get a short report, not a stack of paperwork nobody reads.",
    processTitle: "How the program is set up",
    process: [
      {
        title: "Equipment survey",
        body: "We list every unit, its age, and what is already failing. That list becomes the scope.",
      },
      {
        title: "Visit schedule",
        body: "Seasonal start-ups, filter intervals, and shutdowns are booked around your occupancy, not a generic calendar.",
      },
      {
        title: "Fix the small stuff",
        body: "Loose wires, clogged drains, and slipping belts get handled on the visit when the repair is minor.",
      },
    ],
    whyTitle: "Why properties stay on a program",
    why: [
      "Fewer emergency calls during peak heating and cooling season",
      "Utility use stays closer to what the system was designed for",
      "You get a paper trail for landlords, insurers, and property managers",
      "Technicians who already know the building show up when something breaks",
      "Transparent pricing. The plan is quoted before you sign",
    ],
  },
  {
    slug: "repair",
    label: "HVAC Repair Services",
    summary:
      "We diagnose the unit, explain the fault, and quote the repair before any parts go on. The same number answers when the heat or the cooling is already down.",
    title: "HVAC Repair Services",
    description:
      "Fast HVAC repair for homes, commercial buildings, and industrial sites across the Greater Toronto Area. 24/7 emergency response.",
    serving: "Emergency and scheduled repairs. Office line and after-hours mobile.",
    paragraphs: [
      "When a system is down, the useful question is what's wrong and how fast it can be running again, not a script. Our technicians diagnose the unit in front of them, explain the fault in plain language, and quote the repair before the work starts.",
      "We repair all major brands and most system types: furnaces, boilers, rooftop units, heat pumps, air handlers, split systems, exhaust, and the controls that tie them together.",
    ],
    image: photos.panel,
    imageAlt: "Technician working on an electrical control panel",
    explainTitle: "What happens on a repair call",
    explainBody:
      "We confirm the symptom with the people who live with it, then test the machine. If a part has to be ordered, we say so and tell you whether the building can run in the meantime. After the repair we prove the unit is back in its normal range (supply temperature, safeties, and the control call) before we leave.",
    processTitle: "Repair calls include",
    process: [
      {
        title: "Diagnosis before parts",
        body: "We test, we don't guess. You hear the fault and the options, including repair versus replace when the unit is at the end of its life.",
      },
      {
        title: "Clear price",
        body: "No hidden fees. The quote covers labour and the parts we know we need. If the scope changes, we stop and tell you.",
      },
      {
        title: "24/7 emergency",
        body: "No heat, no cooling, or a ventilation trip that shuts a kitchen or a plant down. Call the mobile line. Email is not monitored overnight.",
      },
    ],
    whyTitle: "Why call Alltech for a repair",
    why: [
      "Certified, insured technicians",
      "All brands, all common system types",
      "We carry common parts and know the supply houses in the region",
      "Residential, commercial, and industrial on the same crew",
      "If the unit isn't worth saving, we'll say that and price a replacement",
    ],
  },
  {
    slug: "installation",
    label: "HVAC Installation",
    summary:
      "New systems and replacements, sized for the building you have now. We start them up, test them under load, and leave when they are actually doing the job.",
    title: "HVAC Installation & Commissioning Services",
    description:
      "HVAC installation and commissioning in the Greater Toronto Area. New systems, replacements, and start-up testing for residential, commercial, and industrial buildings.",
    serving: "Serving the Greater Toronto Area.",
    paragraphs: [
      "A new unit that was never commissioned is just an expensive box. We size the work to the building, install it cleanly, and stay through start-up until the system holds temperature under a real load.",
      "That covers replacements in existing mechanical rooms and full installs on renovations and new fit-outs: furnaces and boilers, heat pumps, rooftop units, air handlers, ventilation, and the controls that run them.",
    ],
    image: photos.build,
    imageAlt: "Drawings for a mechanical installation",
    explainTitle: "What commissioning and start-up mean",
    explainBody:
      "Commissioning is the handoff from 'the equipment is hung' to 'the building is comfortable and the safeties work.' We check manufacturer start-up requirements, airflow, temperature split, electrical load, drainage, and the sequence of operation. You get a system that was proven on day one, not a callback in week two.",
    processTitle: "Our installation process includes",
    process: [
      {
        title: "Start-up and equipment testing",
        body: "Factory start-up steps, operating pressures, and heating or cooling output checked against what that unit should do.",
      },
      {
        title: "System operation validation",
        body: "We run the building the way it will actually be used (occupied, in heating and in cooling where the season allows) and confirm the controls follow.",
      },
      {
        title: "Performance check",
        body: "Noise, drafts, short-cycling, and obvious energy waste get corrected before we call the job done.",
      },
    ],
    whyTitle: "Why choose Alltech for installation",
    why: [
      "Certified technicians who install and service, so the crew knows how the unit will be maintained",
      "Transparent quotes with the scope written down",
      "Energy-efficient equipment when it actually lowers the operating cost",
      "Coordination with your other trades on larger jobs",
      "Homes, offices, kitchens, plants, and multi-unit buildings",
    ],
  },
  {
    slug: "retrofits",
    label: "Retrofits & Design-Build HVAC Services",
    summary:
      "Upgrades for buildings that are already occupied. The mechanical room, the loads, and the budget get designed together, then installed by the same team.",
    title: "Retrofits & Design-Build HVAC Services",
    description:
      "HVAC retrofits and design-build replacements for existing buildings in the Greater Toronto Area. Better comfort and lower operating cost without a ground-up rebuild.",
    serving: "Existing buildings across the Greater Toronto Area.",
    paragraphs: [
      "Most of the buildings we work in are already standing. The mechanical room is tight, the tenants are in place, and the old rooftop unit is one season from done. A retrofit has to respect that.",
      "Design-build means one team owns the concept, the equipment, and the install. You are not stuck translating between an engineer who left and an installer who never saw the site.",
    ],
    image: photos.hvac,
    imageAlt: "Outdoor air conditioning equipment on a building",
    explainTitle: "When a retrofit beats a like-for-like swap",
    explainBody:
      "Same-size replacement is right when the original design still matches the building. It is wrong when the space was renovated, the occupancy changed, or the old unit was oversized from day one. We look at the load, the ductwork you already have, and the electrical service before we lock a model number.",
    processTitle: "A design-build retrofit includes",
    process: [
      {
        title: "Site assessment",
        body: "Equipment condition, distribution, controls, and the complaints people already have: hot offices, cold corners, humidity, noise.",
      },
      {
        title: "Options with numbers",
        body: "Usually two paths: a straight replacement, and a higher-efficiency option with the payback stated plainly.",
      },
      {
        title: "Phased install",
        body: "We schedule around occupancy. Restaurants, clinics, and plants can't go dark for a week if a night or weekend install will do.",
      },
    ],
    whyTitle: "Why owners use us for retrofits",
    why: [
      "We install what we will also service",
      "Honest call when the ductwork or the electrical service is the real problem",
      "Heat pumps, high-efficiency gas, and hybrid options where they fit this climate",
      "No hidden fees when we open a unit and find a second issue. We re-quote",
      "One point of contact from the walkthrough to start-up",
    ],
  },
  {
    slug: "project-management",
    label: "HVAC Project Management",
    summary:
      "One lead for scope, schedule, trades, and commissioning when the job is bigger than a single unit swap.",
    title: "HVAC Project Management",
    description:
      "HVAC project management for replacements, fit-outs, and multi-site work in the Greater Toronto Area. Scheduling, trades, and commissioning under one lead.",
    serving: "Single buildings and small portfolios across the Greater Toronto Area.",
    paragraphs: [
      "Larger HVAC jobs slip for boring reasons: equipment lead times, roof access, other trades, and a start-up nobody scheduled. Project management is the work of keeping those from becoming your problem.",
      "We run replacements, tenant fit-outs, and planned upgrades. You get a schedule, a single contact, and a job that is commissioned before we call it finished.",
    ],
    image: photos.consult,
    imageAlt: "Project planning documents on a desk",
    explainTitle: "What we actually manage",
    explainBody:
      "Scope, submittals, delivery dates, site coordination, and the punch list. If a crane, an electrician, or a controls tech has to be there on the same morning, that is arranged before the day, not during it.",
    processTitle: "The project path",
    process: [
      {
        title: "Scope and schedule",
        body: "Written scope, long-lead items identified, and a sequence that matches how the building operates.",
      },
      {
        title: "On-site coordination",
        body: "We keep the other trades and your property manager in the same conversation.",
      },
      {
        title: "Closeout",
        body: "Start-up records, manuals, and a walkthrough so your staff knows what was installed.",
      },
    ],
    whyTitle: "Why have us run the project",
    why: [
      "The people managing the job also understand the equipment",
      "Fewer surprises on lead time because we order against the real schedule",
      "Clear pricing for the scope you approved",
      "Useful on multi-unit and commercial sites where access is the hard part",
      "Commissioning is part of the job, not an extra you discover later",
    ],
  },
  {
    slug: "controls",
    label: "DDC, BAS and OEM Control Development",
    summary:
      "DDC and building automation that follow this building's schedule, not a factory default. Plus service when the screen and the plant disagree.",
    title: "DDC, BAS and OEM Control Development",
    description:
      "Building automation, DDC, and OEM controls for HVAC in the Greater Toronto Area. Sequences that match the equipment, plus service when the front end lies.",
    serving: "Commercial and industrial controls across the Greater Toronto Area.",
    paragraphs: [
      "A lot of comfort complaints are controls complaints. The unit is fine. The schedule, the sensor, or the sequence is not. We work on direct digital control, building automation front ends, and the OEM boards that ship with the equipment.",
      "We also help when a site has three generations of controllers and nobody wants to rip them all out. Integration beats a forklift upgrade when the old gear still does its job.",
    ],
    image: photos.electrician,
    imageAlt: "Technician servicing control equipment",
    explainTitle: "What we do with a control system",
    explainBody:
      "We read the sequence the building actually needs (occupied, unoccupied, morning warm-up, kitchen hood interlock, freeze protection) and make the controller follow it. Graphics and trends are only useful if the points behind them are right. We fix the points.",
    processTitle: "Controls work includes",
    process: [
      {
        title: "Point-to-point check",
        body: "Sensors, actuators, and safeties verified. A graphic that shows the wrong temperature is worse than no graphic.",
      },
      {
        title: "Sequence cleanup",
        body: "Schedules, setpoints, and lockouts written for this building, not left on the factory default.",
      },
      {
        title: "Owner handoff",
        body: "Your staff gets the passwords, the schedule, and a short explanation of what not to override.",
      },
    ],
    whyTitle: "Why owners call us for controls",
    why: [
      "We service the mechanical equipment and the controller, so blame doesn't bounce between trades",
      "OEM boards and aftermarket DDC",
      "Retrofits that reuse sensors and wiring where they are still good",
      "Alarm points that mean something, so 24/7 calls are real failures",
      "Documentation your next technician can read",
    ],
  },
  {
    slug: "equipment",
    label: "HVAC Products",
    summary:
      "Rooftop units, boilers, heat pumps, make-up air, and the plant equipment around them. All major brands. We match the unit to the building.",
    title: "HVAC Systems We Install and Service",
    description:
      "Alltech Building Services installs and services all major HVAC brands: heating, cooling, heat pumps, ventilation, refrigeration, and controls.",
    serving: "All brands. All common system types. Residential, commercial, and industrial.",
    paragraphs: [
      "We are not a single-brand dealer. If the nameplate is a major manufacturer and the system is something a commercial or residential tech should know, we work on it. The brochure line is the policy: all brands, all systems.",
      "Below is the equipment we install, replace, and keep running. If yours isn't listed and it's mechanical, call. The list is what we see every week, not a limit.",
    ],
    image: photos.pipes,
    imageAlt: "Industrial mechanical piping and equipment",
    explainTitle: "How we choose equipment",
    explainBody:
      "Brand loyalty is a poor way to pick a unit. We match capacity, efficiency, parts availability in Ontario, and how the unit will be maintained. A heat pump is the right answer in some houses and the wrong one in some plants. We'll tell you which situation you're in.",
    processTitle: "Systems we work on",
    process: [
      {
        title: "Heating and cooling",
        body: "Furnaces, boilers, hot water, air conditioning, rooftop packaged units, air handlers, and split systems.",
      },
      {
        title: "Heat pumps and ventilation",
        body: "Air-source heat pumps, make-up air, exhaust, filtration, and indoor air quality upgrades.",
      },
      {
        title: "Plant equipment",
        body: "Chillers, cooling towers, fluid coolers, dehumidification, refrigeration, server-room cooling, and process heating or cooling.",
      },
    ],
    whyTitle: "What you can count on",
    why: [
      "Major brands, not a house brand you can't get parts for",
      "Residential replacements through industrial plant equipment",
      "Controls included, not handed off and forgotten",
      "Maintenance plans for the equipment after start-up",
      "A straight answer when replacement is the cheaper path",
    ],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
