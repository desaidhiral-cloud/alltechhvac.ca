import { photos } from "./photos";

export type Sector = {
  slug: string;
  label: string;
  title: string;
  description: string;
  headline: string;
  intro: string;
  image: string;
  imageAlt: string;
  challenges: { area: string; challenge: string; impact: string }[];
  turnkey: { title: string; points: string[] }[];
  advantages: { advantage: string; benefit: string }[];
  packageTitle: string;
  packageItems: string[];
  ctaTitle: string;
  ctaBody: string;
};

export const sectors: Sector[] = [
  {
    slug: "hotels",
    label: "Hotels",
    title: "HVAC Solutions for Hotels",
    description:
      "Hotel HVAC service in the Greater Toronto Area: guestroom comfort, corridor make-up air, and equipment that can be serviced without emptying the floor.",
    headline: "Quiet rooms. Stable corridors. Equipment that can be worked on at 10 a.m.",
    intro:
      "A hotel sells sleep. Guests forgive a slow elevator more easily than a room that never cools, or a PTAC that rattles all night. We design, replace, and maintain the systems that keep rooms, lobbies, and back-of-house stable while the building stays open.",
    image: photos.hotel,
    imageAlt: "Hotel exterior at dusk",
    challenges: [
      {
        area: "Guestrooms",
        challenge: "Dozens of small units, each with its own noise and filter problem.",
        impact: "One loud room becomes a review. A dead room becomes a walk.",
      },
      {
        area: "Corridors & lobby",
        challenge: "Make-up air and lobby glass loads swing harder than the rooms.",
        impact: "The hallway is muggy while the rooms overcool.",
      },
      {
        area: "Meeting rooms",
        challenge: "Empty at 8, full at 9, and the unit is still on the empty-room setpoint.",
        impact: "Complaints land in the first ten minutes of an event.",
      },
      {
        area: "Laundry & kitchen",
        challenge: "High exhaust, high moisture, and equipment that runs every day.",
        impact: "Humidity migrates into the guest floors if make-up air is short.",
      },
    ],
    turnkey: [
      {
        title: "Guestroom equipment",
        points: [
          "PTAC, fan coil, and heat pump replacements floor by floor",
          "Night work so occupied rooms stay sold",
          "Like-for-like when the sleeve and the electrical service allow it",
        ],
      },
      {
        title: "Common areas",
        points: [
          "Lobby rooftop and split systems",
          "Corridor make-up air and pressurization",
          "Meeting-room schedules that track actual bookings",
        ],
      },
      {
        title: "Maintenance",
        points: [
          "Filter programs the housekeeping schedule can live with",
          "Seasonal start-up before the busy stretch",
          "24/7 response when a floor loses cooling",
        ],
      },
    ],
    advantages: [
      {
        advantage: "We plan around occupancy",
        benefit: "Floors stay in service while units are swapped.",
      },
      {
        advantage: "Noise is part of the spec",
        benefit: "A quieter replacement beats a cheaper one that hums.",
      },
      {
        advantage: "One crew for rooms and the plant",
        benefit: "The fan coil and the chiller aren't two different vendors pointing at each other.",
      },
    ],
    packageTitle: "Typical package for a mid-size hotel",
    packageItems: [
      "Guestroom fan coils or PTACs on a phased replacement",
      "Corridor make-up air unit",
      "Lobby rooftop or split system",
      "Kitchen and laundry exhaust check",
      "Central plant or boiler service where the building has one",
      "Seasonal maintenance program with after-hours emergency",
    ],
    ctaTitle: "Need the rooms comfortable before the weekend books up?",
    ctaBody:
      "Tell us how many keys you have and what's failing. We'll walk the typical room and the mechanical room before we quote.",
  },
  {
    slug: "restaurants",
    label: "Restaurants",
    title: "HVAC Solutions for Restaurants",
    description:
      "Restaurant HVAC and kitchen ventilation in the Greater Toronto Area. Hoods, make-up air, dining comfort, and service that works around dinner.",
    headline: "Fresh air, comfortable dining, and a kitchen that isn't fighting the hood.",
    intro:
      "Dining rooms and kitchens want opposite things from the same building. Guests want quiet, cool air. The line wants a hood that actually captures. We balance both, then keep the equipment on a schedule that isn't 'whenever it breaks on a Friday.'",
    image: photos.restaurant,
    imageAlt: "Restaurant dining room",
    challenges: [
      {
        area: "Dining room",
        challenge: "Loads swing from empty setup to a full turn.",
        impact: "Guests sit in a draft or a warm corner and don't come back.",
      },
      {
        area: "Kitchen",
        challenge: "Hood exhaust with weak make-up air pulls the dining room negative.",
        impact: "Doors stand open, odours travel, and the line overheats.",
      },
      {
        area: "Bar",
        challenge: "Latent load from people and glass coolers.",
        impact: "Sticky air and fogged glassware on a busy night.",
      },
      {
        area: "Walk-ins",
        challenge: "Refrigeration and HVAC often get blamed for each other.",
        impact: "Product loss if the box alarm is ignored until morning.",
      },
      {
        area: "Patio season",
        challenge: "Doors open and the dining room load disappears from the design.",
        impact: "The unit short-cycles or the room nearest the door never settles.",
      },
    ],
    turnkey: [
      {
        title: "Hoods and make-up air",
        points: [
          "Exhaust and make-up air that are sized together",
          "Interlocks so the hood doesn't run the building negative",
          "Replacement of tired make-up air units",
        ],
      },
      {
        title: "Dining comfort",
        points: [
          "Rooftop or split systems sized for the real seat count",
          "Zoning so the window seats and the back aren't one setpoint",
          "Quiet equipment. A dining room is not a mechanical room.",
        ],
      },
      {
        title: "Service around service",
        points: [
          "Filter and belt work before lunch, not during it",
          "24/7 response when the hood or the cooling dies on a Friday",
          "Walk-in refrigeration calls when we cover that equipment on site",
        ],
      },
    ],
    advantages: [
      {
        advantage: "Kitchen and dining treated as one system",
        benefit: "Make-up air is part of the quote, not a surprise after the hood is in.",
      },
      {
        advantage: "We work the off hours",
        benefit: "You don't lose a seating to a maintenance visit.",
      },
      {
        advantage: "Straight talk on odour",
        benefit: "If the problem is capture, we say capture. If it's the unit, we fix the unit.",
      },
    ],
    packageTitle: "Typical package for a full-service restaurant",
    packageItems: [
      "Dining-room rooftop or high-efficiency split system",
      "Type I or Type II hood coordination with your kitchen supplier",
      "Make-up air unit matched to the exhaust",
      "Walk-in cooler and freezer service where we hold the contract",
      "Thermostat or simple DDC schedule for open and closed hours",
      "Pre-summer maintenance and Friday-night emergency coverage",
    ],
    ctaTitle: "Opening, renovating, or just tired of a hot line?",
    ctaBody:
      "Send the seat count and whether you have a hood yet. We'll tell you what has to be solved first.",
  },
  {
    slug: "schools",
    label: "Schools",
    title: "HVAC Solutions for Schools",
    description:
      "School HVAC service for classrooms, gyms, and portables around the Greater Toronto Area. Ventilation, filtration, and maintenance that fits the school year.",
    headline: "Classrooms that stay awake. Air that gets changed. Boilers ready in October.",
    intro:
      "Schools have a hard calendar: no major work in June exams, no dead boilers in January, and gyms that go from empty to packed. We maintain and replace classroom units, rooftop equipment, boilers, and gym systems on that calendar.",
    image: photos.school,
    imageAlt: "Empty school hallway",
    challenges: [
      {
        area: "Classrooms",
        challenge: "Unit ventilators and rooftop zones that haven't seen a real filter schedule.",
        impact: "Stuffy rooms and CO2 complaints by second period.",
      },
      {
        area: "Gyms",
        challenge: "Huge volume, intermittent occupancy, tired destratification.",
        impact: "Cold mornings for class, overheated evenings for games.",
      },
      {
        area: "Portables",
        challenge: "Heat pumps and wall units doing a job they were barely sized for.",
        impact: "The portable is the room everyone complains about.",
      },
      {
        area: "Plant",
        challenge: "Ageing boilers and pumps with one path of failure.",
        impact: "A single pump trip takes the wing down.",
      },
    ],
    turnkey: [
      {
        title: "Ventilation first",
        points: [
          "Outdoor air and filtration checked against how the room is used",
          "Filter programs on a schedule the caretaker can keep",
          "Unit ventilator and rooftop repairs",
        ],
      },
      {
        title: "Heating plant",
        points: [
          "Boiler and pump service before heating season",
          "Replacement plans that can run over a summer",
          "Freeze protection that is actually tested",
        ],
      },
      {
        title: "Summer work window",
        points: [
          "Replacements booked for the break, not the first week of class",
          "Phased wings so part of the building can stay in use",
          "Start-up before staff return",
        ],
      },
    ],
    advantages: [
      {
        advantage: "We know the school calendar",
        benefit: "Heavy work lands in the break. Emergency work still happens in term.",
      },
      {
        advantage: "Caretaker-friendly reports",
        benefit: "Short notes: what we did, what's next, what to watch.",
      },
      {
        advantage: "Portables through the plant",
        benefit: "One contractor for the small units and the boiler room.",
      },
    ],
    packageTitle: "Typical package for a school",
    packageItems: [
      "Classroom unit ventilator or rooftop service",
      "Gym air handler and exhaust",
      "Boiler and hydronic pump maintenance",
      "Portable heat pump service",
      "Filter program on the school year",
      "Summer capital replacements with fall start-up",
    ],
    ctaTitle: "Planning summer work or dealing with a wing that's down?",
    ctaBody:
      "Call with the building and the symptom. If it's a boiler or a classroom zone, we can usually be on site the same day in heating season.",
  },
  {
    slug: "showrooms",
    label: "Showrooms & Sales Floors",
    title: "HVAC Solutions for Showrooms & Sales Floors",
    description:
      "Showroom and sales-floor HVAC in the Greater Toronto Area. Glass loads, even temperatures, and quiet equipment that doesn't talk over a sale.",
    headline: "Even temperature from the glass line to the back wall.",
    intro:
      "Showrooms are glass, lights, and people standing still. The front of the floor overheats while the offices in the back are fine. We fix the zoning, the equipment, and the noise so the floor is comfortable enough that nobody thinks about it.",
    image: photos.retail,
    imageAlt: "Retail sales floor",
    challenges: [
      {
        area: "Glass line",
        challenge: "Solar load the original unit was never sized for.",
        impact: "The cars, suits, or furniture at the front are hot to the touch.",
      },
      {
        area: "Open floor",
        challenge: "One thermostat in a bad spot runs the whole box.",
        impact: "Staff fight over the setpoint all day.",
      },
      {
        area: "Offices behind the floor",
        challenge: "Shared equipment with a completely different schedule.",
        impact: "Offices freeze after close or bake during setup.",
      },
    ],
    turnkey: [
      {
        title: "Zoning",
        points: [
          "Separate the glass line from the deep floor where it matters",
          "Schedules for open hours, not 24-hour defaults",
          "Quiet indoor units on the sales floor",
        ],
      },
      {
        title: "Replacement",
        points: [
          "Rooftop and split replacements staged so the floor stays open",
          "Heat pumps where the building and the electrical service support them",
          "Filtration for dusty product environments",
        ],
      },
    ],
    advantages: [
      {
        advantage: "We stand on the floor first",
        benefit: "The quote follows the hot spots you can point at, not just the nameplate.",
      },
      {
        advantage: "Retail hours",
        benefit: "Crane days and rooftop swaps get booked off the sales clock when we can.",
      },
    ],
    packageTitle: "Typical package for a showroom",
    packageItems: [
      "Rooftop or multi-zone split system",
      "Glass-line zoning",
      "Office split on its own schedule",
      "Thermostat lock or simple controls so the setpoint stays put",
      "Seasonal maintenance",
      "After-hours emergency line",
    ],
    ctaTitle: "Front of the floor uncomfortable every afternoon?",
    ctaBody:
      "We'll walk it at the hot part of the day if that's when the complaint shows up. That's when the load is real.",
  },
  {
    slug: "retail",
    label: "Shopping Malls & Retail Chains",
    title: "HVAC Solutions for Shopping Malls & Retail Chains",
    description:
      "Mall and retail-chain HVAC service in the Greater Toronto Area. Rooftop fleets, tenant fit-outs, and common-area air handling.",
    headline: "A fleet of rooftop units, kept on one schedule.",
    intro:
      "Retail mechanical problems are usually volume problems: many rooftop units, many tenants, and a common area that has to feel fine while stores come and go. We maintain fleets, replace failed units, and fit out incoming tenants.",
    image: photos.mall,
    imageAlt: "Shopping mall interior",
    challenges: [
      {
        area: "Rooftop fleet",
        challenge: "Units of mixed age with no shared filter schedule.",
        impact: "The failures cluster on the first hot weekend.",
      },
      {
        area: "Tenant demising",
        challenge: "Old units left serving a space that was cut in half.",
        impact: "One store overcools, the neighbour has nothing.",
      },
      {
        area: "Common area",
        challenge: "Entrances and skylights dominate the load.",
        impact: "The mall feels fine at the food court and wrong at the doors.",
      },
      {
        area: "After hours",
        challenge: "Staff overrides left on overnight.",
        impact: "The utility bill shows up before the comfort complaint does.",
      },
    ],
    turnkey: [
      {
        title: "Fleet maintenance",
        points: [
          "Numbered unit list and a filter cadence",
          "Shoulder-season start-up across the roof",
          "Repair-versus-replace calls unit by unit",
        ],
      },
      {
        title: "Tenant work",
        points: [
          "Fit-out installs coordinated with the base building",
          "Demising corrections when a unit serves the wrong box",
          "After-hours crane and curb work",
        ],
      },
    ],
    advantages: [
      {
        advantage: "We treat the roof as a fleet",
        benefit: "You see which units are next, not a surprise failure every July.",
      },
      {
        advantage: "Tenant and base building",
        benefit: "One company can speak to both scopes when they touch.",
      },
    ],
    packageTitle: "Typical package for a retail property",
    packageItems: [
      "Rooftop unit inventory and condition list",
      "Filter and belt program",
      "Common-area air handler service",
      "Tenant fit-out installs",
      "Controls schedules for open hours",
      "Hot-weather emergency coverage",
    ],
    ctaTitle: "Got a roof full of units and a spreadsheet nobody trusts?",
    ctaBody:
      "We'll inventory the roof and tell you what needs a program versus what needs a replacement this year.",
  },
  {
    slug: "churches",
    label: "Churches",
    title: "HVAC Solutions for Churches",
    description:
      "Church HVAC in the Greater Toronto Area. Sanctuary comfort for a few hours a week, and heating that still works on Monday.",
    headline: "Comfortable for the service. Affordable the other six days.",
    intro:
      "Sanctuaries are tall, intermittent, and hard to heat evenly. The week-day offices and halls are a normal building stuck to an abnormal one. We set those up as different problems, because they are.",
    image: photos.church,
    imageAlt: "Church interior with high ceilings",
    challenges: [
      {
        area: "Sanctuary",
        challenge: "High volume, short occupancy, stratified air.",
        impact: "The balcony is hot and the pews are cold, or the boiler runs all week for two hours of comfort.",
      },
      {
        area: "Gathering hall",
        challenge: "A second big room with a kitchen latent load.",
        impact: "Events feel muggy even when the sanctuary was fine.",
      },
      {
        area: "Weekday offices",
        challenge: "Tied to a plant that was sized for Sunday.",
        impact: "Staff either overpay or sit in a cold office.",
      },
    ],
    turnkey: [
      {
        title: "Scheduling",
        points: [
          "Warm-up timed to the service, setback after it",
          "Separate weekday schedule for offices",
          "Someone on staff shown how to override without leaving it overridden",
        ],
      },
      {
        title: "Equipment",
        points: [
          "Sanctuary heating and cooling replacements",
          "Destratification where the volume is the issue",
          "Hall and kitchen ventilation",
        ],
      },
    ],
    advantages: [
      {
        advantage: "We don't size Sunday for Monday",
        benefit: "Setback actually happens, and the gas bill shows it.",
      },
      {
        advantage: "Volunteer-proof controls",
        benefit: "A simple schedule beats a front end nobody will touch.",
      },
    ],
    packageTitle: "Typical package for a church",
    packageItems: [
      "Sanctuary furnace, boiler, or rooftop replacement",
      "Occupied/unoccupied schedule",
      "Hall and kitchen units",
      "Office split system if the plant can't serve weekdays well",
      "Pre-winter maintenance",
      "Emergency service for no-heat calls",
    ],
    ctaTitle: "Sunday is comfortable only if someone arrives at 6 a.m.?",
    ctaBody:
      "That's a schedule and distribution problem as often as a dead unit. We'll look at both.",
  },
  {
    slug: "offices",
    label: "Office",
    title: "HVAC Solutions for Offices",
    description:
      "Office HVAC in the Greater Toronto Area. Zoning, ventilation, rooftop replacement, and maintenance for suites and whole buildings.",
    headline: "Meetings that aren't an argument about the thermostat.",
    intro:
      "Office complaints are local: one boardroom, the west glass, the server closet someone put a split in ten years ago. We fix the zone, maintain the base building equipment, and replace units that are done.",
    image: photos.office,
    imageAlt: "Bright open office",
    challenges: [
      {
        area: "Open office",
        challenge: "One sensor trying to represent twenty people and a west elevation.",
        impact: "Half the floor is fine. The other half brings sweaters in July.",
      },
      {
        area: "Boardrooms",
        challenge: "Dense occupancy for an hour, then empty.",
        impact: "The room is hot at minute ten and freezing at minute forty.",
      },
      {
        area: "Server or IDF closets",
        challenge: "Cooling that was a window unit and a prayer.",
        impact: "Gear cooks on a long weekend when nobody is there to notice.",
      },
      {
        area: "After hours",
        challenge: "Overrides and cleaning-crew schedules.",
        impact: "The building conditions empty floors.",
      },
    ],
    turnkey: [
      {
        title: "Base building",
        points: [
          "Rooftop, heat pump, and boiler maintenance",
          "VAV and zone repairs",
          "Replacement projects phased by floor",
        ],
      },
      {
        title: "Suites",
        points: [
          "Tenant fit-out installs",
          "Boardroom zoning",
          "Dedicated cooling for network closets",
        ],
      },
    ],
    advantages: [
      {
        advantage: "We separate comfort from the closet",
        benefit: "Server cooling stops being the thing that freezes the nearest desks.",
      },
      {
        advantage: "Property-manager reporting",
        benefit: "Short visit notes your tenants can be shown.",
      },
    ],
    packageTitle: "Typical package for an office building",
    packageItems: [
      "Rooftop or VRF / heat pump system",
      "Zone and boardroom control",
      "Closet cooling where needed",
      "Filter program and seasonal start-up",
      "After-hours emergency",
      "Fit-out work for incoming tenants",
    ],
    ctaTitle: "Same complaint from the west side every summer?",
    ctaBody:
      "Book a walkthrough in the afternoon. We'll tell you if it's the unit, the zone, or the glass.",
  },
  {
    slug: "sports",
    label: "Sports Center and Arenas",
    title: "HVAC Solutions for Sports Centres and Arenas",
    description:
      "Arena and sports-centre HVAC in the Greater Toronto Area. Dehumidification, ventilation, and heating for rinks, gyms, and field houses.",
    headline: "Ice that stays ice. Stands that stay breathable. Lobbies that don't drip.",
    intro:
      "Arenas and sports centres move a lot of air and a lot of moisture. Fog, dripping lobbies, and stale change rooms are mechanical problems. We service dehumidification, heating, ventilation, and the units that keep spectator areas fit to sit in.",
    image: photos.sports,
    imageAlt: "Indoor sports arena",
    challenges: [
      {
        area: "Rink bowl",
        challenge: "Humidity that fogs the ice and drips on the stands.",
        impact: "Play stops, and the building takes water damage it didn't need.",
      },
      {
        area: "Change rooms",
        challenge: "Exhaust that lost the fan belt two seasons ago.",
        impact: "The room tells you before anyone files a complaint.",
      },
      {
        area: "Spectator areas",
        challenge: "Heating sized for an empty bowl, not a Saturday crowd.",
        impact: "Too cold at opening faceoff, too warm by the third.",
      },
      {
        area: "Field houses",
        challenge: "Large volume, poor destratification.",
        impact: "Players are hot, the ceiling is hotter, the gas meter agrees.",
      },
    ],
    turnkey: [
      {
        title: "Dehumidification",
        points: [
          "Desiccant and refrigeration dehumidifiers",
          "Seasonal start-up before the first skate",
          "Repairs when the bowl fogs",
        ],
      },
      {
        title: "Ventilation",
        points: [
          "Change-room exhaust and make-up air",
          "Lobby heating and cooling",
          "Field-house air turnover",
        ],
      },
    ],
    advantages: [
      {
        advantage: "We show up before the season, not during the fog",
        benefit: "Start-up is booked. Emergency is for the things start-up can't see.",
      },
      {
        advantage: "Large-volume experience",
        benefit: "Gyms, bowls, and field houses are not office rooftop calls.",
      },
    ],
    packageTitle: "Typical package for an arena or sports centre",
    packageItems: [
      "Dehumidification service",
      "Change-room exhaust and make-up air",
      "Spectator heating",
      "Lobby rooftop or air handler",
      "Pre-season start-up",
      "Event-weekend emergency coverage",
    ],
    ctaTitle: "Fog on the glass or a change room you can smell from the hall?",
    ctaBody:
      "Those are both service calls worth making this week, not next season. Call the office line during the day or mobile after hours.",
  },
  {
    slug: "warehouses",
    label: "Warehouses & Logistics Buildings",
    title: "HVAC Solutions for Warehouses & Logistics Buildings",
    description:
      "Warehouse heating, ventilation, and dock comfort in the Greater Toronto Area. Unit heaters, make-up air, and destratification.",
    headline: "Heat at the floor. Air that turns over. Docks that don't freeze the aisle.",
    intro:
      "Warehouses waste money at the ceiling. The heat sits up there, the doors open all day, and the people at the pack stations are cold. We work on unit heaters, air turnover, make-up air, and dock-area comfort.",
    image: photos.warehouse,
    imageAlt: "Warehouse aisle with racking",
    challenges: [
      {
        area: "Open warehouse",
        challenge: "Stratification in a tall bay.",
        impact: "The ceiling is 30°C and the pick aisle is a jacket zone.",
      },
      {
        area: "Dock doors",
        challenge: "A hole the size of a truck, opened all shift.",
        impact: "The nearest workstations never recover.",
      },
      {
        area: "Offices in the corner",
        challenge: "A people-space glued to an unconditioned box.",
        impact: "The office unit fights the warehouse all winter.",
      },
      {
        area: "Process or battery rooms",
        challenge: "Ventilation requirements that aren't optional.",
        impact: "A failed exhaust fan is a safety issue, not a comfort issue.",
      },
    ],
    turnkey: [
      {
        title: "Heating",
        points: [
          "Unit heaters and air-rotation equipment",
          "Destratification fans where the height is the problem",
          "Dock-area heat and curtains coordinated with the units",
        ],
      },
      {
        title: "Ventilation",
        points: [
          "Make-up air for exhaust-heavy areas",
          "Office splits separated from the warehouse plant",
          "Summer ventilation so the box doesn't become a kiln",
        ],
      },
    ],
    advantages: [
      {
        advantage: "We look up",
        benefit: "If the heat is at the deck, more burners won't fix the floor.",
      },
      {
        advantage: "Logistics hours",
        benefit: "We can work a bay without shutting the building.",
      },
    ],
    packageTitle: "Typical package for a distribution building",
    packageItems: [
      "Gas unit heaters or air turnover",
      "Destratification",
      "Dock-area comfort",
      "Corner-office split systems",
      "Exhaust and make-up air where the process needs it",
      "Heating-season maintenance and emergency coverage",
    ],
    ctaTitle: "Staff in jackets under a hot ceiling?",
    ctaBody:
      "That's the usual warehouse call. We'll measure it and tell you whether you need fans, heat, or both.",
  },
  {
    slug: "industrial",
    label: "Industrial Sectors",
    title: "HVAC Solutions for Industrial Sectors",
    description:
      "Industrial HVAC for manufacturing, food production, and process buildings in the Greater Toronto Area. Ventilation, process comfort, and controls.",
    headline: "Air that protects the process, not just the lunchroom.",
    intro:
      "Industrial buildings care about the product and the people, in that order, and the HVAC has to serve both. We install and service makeup air, process heating and cooling, plant ventilation, and the controls that keep a line inside its window.",
    image: photos.factory,
    imageAlt: "Industrial manufacturing floor",
    challenges: [
      {
        area: "Production floor",
        challenge: "Heat from the process plus a building that was ventilated for a smaller line.",
        impact: "Quality drifts and people fatigue on the same afternoon.",
      },
      {
        area: "Wash-down or food areas",
        challenge: "Moisture, sanitation, and equipment that has to survive both.",
        impact: "Condensation where it can't be, and units that rust out early.",
      },
      {
        area: "Control rooms",
        challenge: "Tight temperature on a room full of drives and people.",
        impact: "Nuisance faults when the room climbs.",
      },
      {
        area: "Exhaust",
        challenge: "Process exhaust with no make-up path.",
        impact: "Doors become the make-up air. Dust and cold come with them.",
      },
    ],
    turnkey: [
      {
        title: "Process support",
        points: [
          "Make-up air matched to exhaust",
          "Heating and cooling for production spaces",
          "Control-room and MCC cooling",
        ],
      },
      {
        title: "Plant equipment",
        points: [
          "Boilers, pumps, and air handlers",
          "Chillers and fluid coolers when the site has them",
          "DDC so setpoints aren't a sticky note",
        ],
      },
    ],
    advantages: [
      {
        advantage: "We ask what the line needs",
        benefit: "Comfort setpoints and process windows get written down separately.",
      },
      {
        advantage: "Shutdown planning",
        benefit: "The install lands in the outage you already have, when there is one.",
      },
    ],
    packageTitle: "Typical package for a plant",
    packageItems: [
      "Make-up air and exhaust balance",
      "Production-floor heating or cooling",
      "Control-room cooling",
      "Boiler or pumping service",
      "Controls sequence for occupied and production modes",
      "Maintenance program plus 24/7 response",
    ],
    ctaTitle: "The line is hotter than the spec, or the room won't hold?",
    ctaBody:
      "Start with the industrial overview if you want the full service list, or book a walkthrough of the bay that's missing.",
  },
  {
    slug: "high-rise",
    label: "High-Rise Residential Buildings",
    title: "HVAC Solutions for High-Rise Residential Buildings",
    description:
      "High-rise residential HVAC in the Greater Toronto Area. Fan coils, make-up air, corridors, and amenity spaces for condos and apartments.",
    headline: "Corridors pressurized. Suites comfortable. The mechanical penthouse looked after.",
    intro:
      "Multi-unit buildings fail in the corridors and the penthouse as often as they fail in a single suite. We service make-up air, fan coils, heat pumps, boilers, and amenity-space equipment, and we work with property managers who need a record of the visit.",
    image: photos.highrise,
    imageAlt: "High-rise residential towers",
    challenges: [
      {
        area: "Suites",
        challenge: "Fan coils with filters nobody changed and valves that stick.",
        impact: "The same suites call every season. The others are fine.",
      },
      {
        area: "Corridors",
        challenge: "Make-up air that's off, so the building smells like the stack effect.",
        impact: "Odours travel. So does moisture.",
      },
      {
        area: "Amenities",
        challenge: "Party rooms and gyms on leftover equipment.",
        impact: "The room is unusable exactly when it's booked.",
      },
      {
        area: "Penthouse plant",
        challenge: "Boilers, pumps, and cooling that serve everyone.",
        impact: "One failure becomes a building-wide no-heat call.",
      },
    ],
    turnkey: [
      {
        title: "In-suite",
        points: [
          "Fan coil and heat pump service",
          "Filter programs unit by unit or by tier",
          "Replacements scheduled with access, not against it",
        ],
      },
      {
        title: "Base building",
        points: [
          "Corridor make-up air",
          "Boiler and pump maintenance",
          "Amenity HVAC",
        ],
      },
    ],
    advantages: [
      {
        advantage: "Property-manager ready",
        benefit: "You can show a board what was done without translating our notes.",
      },
      {
        advantage: "Access is planned",
        benefit: "Suite work is booked. We don't arrive hoping someone is home.",
      },
    ],
    packageTitle: "Typical package for a multi-unit building",
    packageItems: [
      "Fan coil or heat pump maintenance",
      "Corridor make-up air service",
      "Boiler and pump program",
      "Amenity room equipment",
      "Seasonal changeover",
      "Emergency line for no-heat and leaks",
    ],
    ctaTitle: "Board asking for a maintenance plan that isn't a brochure?",
    ctaBody:
      "We'll survey the penthouse and a sample of suites, then price a program against that list.",
  },
];

export function getSector(slug: string) {
  return sectors.find((sector) => sector.slug === slug);
}
