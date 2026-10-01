import Link from "next/link";
import { Logo } from "./Logo";
import { areas } from "@/lib/areas";
import { services } from "@/lib/services";
import { addressLine, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo tone="light" />
          <p className="mt-4 max-w-xs text-sm leading-6 text-white/75">
            {site.descriptor}. Heating, cooling, ventilation, and controls for
            homes, commercial buildings, and industrial facilities from our
            shop in Kitchener.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-2">
            Service area
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {areas.map((area) => (
              <li key={area.slug}>
                <Link href={`/service-areas/${area.slug}`} className="hover:text-white">
                  {area.city}
                </Link>
              </li>
            ))}
            <li>Surrounding communities</li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-2">
            Useful links
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <Link href="/commercial" className="hover:text-white">
                Commercial HVAC
              </Link>
            </li>
            <li>
              <Link href="/industrial" className="hover:text-white">
                Industrial HVAC
              </Link>
            </li>
            <li>
              <Link href="/residential" className="hover:text-white">
                Residential HVAC
              </Link>
            </li>
            {services.slice(0, 4).map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="hover:text-white">
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-2">
            24 hours & emergencies
          </h2>
          <a
            href={`tel:${site.phoneMobileTel}`}
            className="mt-4 block text-3xl font-extrabold tracking-tight text-white"
          >
            {site.phoneMobile}
          </a>
          <p className="mt-1 text-sm text-white/60">Mobile · after-hours line</p>
          <a
            href={`tel:${site.phoneOfficeTel}`}
            className="mt-4 block text-sm text-white/80 hover:text-white"
          >
            Office {site.phoneOffice}
          </a>
          <p className="mt-4 text-sm leading-6 text-white/75">
            {addressLine}
          </p>
          <a href={`mailto:${site.email}`} className="mt-2 block text-sm text-cyan-2 hover:text-white">
            {site.email}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 text-xs text-white/60 sm:px-6 md:flex-row md:items-center md:justify-between md:pb-4 pb-20">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <nav className="flex flex-wrap gap-x-4 gap-y-2" aria-label="Footer">
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/gallery" className="hover:text-white">Gallery</Link>
            <Link href="/privacy" className="hover:text-white">Privacy policy</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
