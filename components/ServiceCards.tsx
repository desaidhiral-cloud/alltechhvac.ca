import Link from "next/link";
import { services } from "@/lib/services";

function Icon({ slug }: { slug: string }) {
  const common = {
    viewBox: "0 0 24 24",
    className: "h-10 w-10 text-blue",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    "aria-hidden": true as const,
  };

  if (slug === "maintenance") {
    return (
      <svg {...common}>
        <path d="M14.7 6.3a4.5 4.5 0 0 0-6.2 6.2L4 17l3 3 4.5-4.5a4.5 4.5 0 0 0 6.2-6.2L15 12l-3-3 2.7-2.7z" />
        <path d="M9 15l-1.5 1.5" />
      </svg>
    );
  }
  if (slug === "repair") {
    return (
      <svg {...common}>
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
        <circle cx="12" cy="12" r="4" />
        <path d="M7.5 7.5l1.8 1.8M14.7 14.7l1.8 1.8" />
      </svg>
    );
  }
  if (slug === "installation") {
    return (
      <svg {...common}>
        <path d="M4 20h16M6 20V9l6-5 6 5v11" />
        <path d="M10 20v-6h4v6" />
      </svg>
    );
  }
  if (slug === "retrofits") {
    return (
      <svg {...common}>
        <path d="M4 7h10a4 4 0 0 1 0 8H8" />
        <path d="M7 12l-3 3 3 3" />
        <path d="M20 17H10a4 4 0 0 1 0-8h6" />
      </svg>
    );
  }
  if (slug === "project-management") {
    return (
      <svg {...common}>
        <path d="M8 4h11v16H8z" />
        <path d="M5 7h3M5 12h3M5 17h3M11 9h5M11 13h5M11 17h3" />
      </svg>
    );
  }
  if (slug === "controls") {
    return (
      <svg {...common}>
        <rect x="4" y="4" width="16" height="12" rx="1.5" />
        <path d="M8 20h8M12 16v4M8 9h3M8 12h8" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M4 14c2-4 4-4 6 0s4 4 6 0 4-4 4 0" />
      <path d="M4 18h16M8 14V8h8v6" />
    </svg>
  );
}

export function ServiceCards() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center sm:col-span-2 lg:col-span-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Alltech Services
            </h2>
          </div>
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="flex min-w-0 flex-col border border-line p-6 transition hover:border-blue"
            >
              <Icon slug={service.slug} />
              <h3 className="mt-4 text-lg font-bold text-navy">{service.label}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-muted">{service.summary}</p>
              <span className="mt-4 text-sm font-bold text-blue">Learn more</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
