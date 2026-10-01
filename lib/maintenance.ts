export type MaintenancePlan = {
  name: string;
  blurb: string;
  items: string[];
};

export type MaintenancePage = {
  eyebrow: string;
  title: string;
  description: string;
  lede: string;
  paragraphs: string[];
  equipment: string[];
  plans: MaintenancePlan[];
};

export const commercialMaintenance: MaintenancePage = {
  eyebrow: "Commercial",
  title: "Commercial HVAC Maintenance",
  description:
    "Commercial HVAC maintenance plans in Kitchener-Waterloo. Rooftop units, boilers, heat pumps, and controls on a schedule, with 24/7 backup.",
  lede: "Keep the building open. Catch the failures in April, not on the first hot Monday.",
  paragraphs: [
    "Commercial maintenance is a list of units, a visit cadence, and a technician who has been on that roof before. We build the list from a survey, then price a plan you can actually budget.",
    "Plans scale. A plaza with four rooftop units does not need the same agreement as a multi-floor office. Both get the same habit: show up, check the machine, write down what changed.",
  ],
  equipment: [
    "Rooftop packaged units",
    "Split systems, ducted and ductless",
    "Air handlers and exhaust",
    "Fan coils",
    "Heat pumps",
    "Boilers and hydronic heating",
    "Make-up air units",
    "VRF / VRV systems",
    "Building automation and OEM controls",
    "Server-room and closet cooling",
  ],
  plans: [
    {
      name: "Planned",
      blurb: "The minimum that still prevents most 'it died on Monday' calls.",
      items: [
        "Scheduled inspections",
        "Filter changes",
        "Belt, drain, and safety checks",
        "Written note after each visit",
      ],
    },
    {
      name: "Essential",
      blurb: "Planned coverage, plus the seasonal work that actually changes comfort.",
      items: [
        "Everything in Planned",
        "Heating and cooling start-up",
        "Performance readings",
        "Priority booking for repairs",
      ],
    },
    {
      name: "Comprehensive",
      blurb: "For buildings that can't absorb a surprise failure in peak season.",
      items: [
        "Everything in Essential",
        "Coil cleaning",
        "Belt replacement on interval",
        "Controls and setpoint review",
      ],
    },
    {
      name: "Full Protection",
      blurb: "One fee for labour and the maintainable parts we list in the agreement.",
      items: [
        "Everything in Comprehensive",
        "Listed repair labour included",
        "Listed materials included",
        "A number you can put in the budget",
      ],
    },
  ],
};

export const industrialMaintenance: MaintenancePage = {
  eyebrow: "Industrial",
  title: "Industrial HVAC Maintenance",
  description:
    "Industrial HVAC maintenance in Cambridge, Kitchener, Waterloo, and Guelph. Make-up air, plant heating and cooling, and controls on a shift-friendly schedule.",
  lede: "Production doesn't pause because a filter was due. The program has to fit the plant, not the other way around.",
  paragraphs: [
    "Industrial agreements start with the equipment that stops the building if it fails: make-up air, boilers, process cooling, exhaust, and the controls watching them. Comfort units in the offices get covered too, on a lighter cadence.",
    "Visits are booked around shifts and shutdowns. If you have a standing outage window, we use it. If you don't, we work the bay that can be worked.",
  ],
  equipment: [
    "Make-up air and air handlers",
    "Process heating and cooling",
    "Boilers and hot water",
    "Chillers and chilled water",
    "Cooling towers and fluid coolers",
    "Exhaust and dust-area ventilation",
    "Dehumidification",
    "DDC and BAS points tied to HVAC",
    "Control-room cooling",
    "Pumps serving the mechanical plant",
  ],
  plans: [
    {
      name: "Planned",
      blurb: "Inspections and filtration so the obvious failures get caught early.",
      items: [
        "Route inspections",
        "Filter and belt checks",
        "Safety and interlock check",
        "Exception report after the visit",
      ],
    },
    {
      name: "Essential",
      blurb: "Planned work plus readings that show the unit is still in range.",
      items: [
        "Everything in Planned",
        "Temperature, pressure, and amp readings",
        "Seasonal start-up",
        "Faster response on covered equipment",
      ],
    },
    {
      name: "Comprehensive",
      blurb: "For lines that lose money when the air or the heat is wrong.",
      items: [
        "Everything in Essential",
        "Coil and heat-exchanger cleaning",
        "Controls point check",
        "Shutdown-window repairs planned ahead",
      ],
    },
    {
      name: "Full Protection",
      blurb: "Predictable spend on the equipment list we both sign.",
      items: [
        "Everything in Comprehensive",
        "Labour on listed repairs",
        "Materials on listed components",
        "One contact when the plant calls at night",
      ],
    },
  ],
};
