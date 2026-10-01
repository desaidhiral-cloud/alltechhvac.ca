"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { navigation, site, type NavItem } from "@/lib/site";

function Chevron({ open = false }: { open?: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`h-4 w-4 shrink-0 transition-transform duration-300 ease-out motion-reduce:transition-none ${
        open ? "rotate-180" : ""
      }`}
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4z" />
    </svg>
  );
}

function DesktopMenu({
  item,
  active,
  onOpen,
  onClose,
}: {
  item: NavItem;
  active: string | null;
  onOpen: (label: string) => void;
  onClose: (label: string) => void;
}) {
  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="rounded-lg px-3 py-2 text-sm font-semibold text-ink hover:bg-ice hover:text-blue"
        onMouseEnter={() => onClose(active ?? "")}
      >
        {item.label}
      </Link>
    );
  }

  const wide = item.children.length > 6;
  const shown = active === item.label;

  return (
    <div
      className="relative"
      onMouseEnter={() => onOpen(item.label)}
      onMouseLeave={() => onClose(item.label)}
      onFocus={() => onOpen(item.label)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) onClose(item.label);
      }}
    >
      <Link
        href={item.href}
        className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold text-ink hover:bg-ice hover:text-blue"
        onMouseDown={(event) => event.preventDefault()}
      >
        {item.label}
        <Chevron />
      </Link>
      <div
        className={`absolute left-0 top-full z-50 pt-2 transition duration-150 ${
          shown ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className={`grid rounded-2xl border border-line bg-white p-2 shadow-xl ${
            wide ? "w-[32rem] grid-cols-2" : "w-72 grid-cols-1"
          }`}
        >
          {item.children.map((child) => (
            <Link
              key={child.href + child.label}
              href={child.href}
              className="block rounded-xl px-3 py-2.5 text-sm font-medium leading-5 text-ink hover:bg-ice hover:text-blue"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [present, setPresent] = useState(false);
  const [shown, setShown] = useState(false);
  const [section, setSection] = useState<string | null>(null);
  const [desktopMenu, setDesktopMenu] = useState<string | null>(null);

  useEffect(() => {
    setOpen(false);
    setSection(null);
    setDesktopMenu(null);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      setPresent(true);
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => setShown(true));
      });
      return () => cancelAnimationFrame(frame);
    }
    setShown(false);
    const timeout = window.setTimeout(() => setPresent(false), 300);
    return () => window.clearTimeout(timeout);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = present ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [present]);

  return (
    <>
      <div className="bg-navy text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs sm:text-sm sm:px-6">
          <a href={`tel:${site.phoneOfficeTel}`} className="font-semibold tracking-wide">
            {site.phoneOffice}
          </a>
          <div className="hidden items-center gap-5 text-white/80 md:flex">
            <a href={`mailto:${site.email}`} className="hover:text-white">
              {site.email}
            </a>
            <span>{site.hours}</span>
          </div>
          <a href={`tel:${site.phoneMobileTel}`} className="font-semibold text-cyan-2 md:hidden">
            24/7 {site.phoneMobile}
          </a>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Logo />
          <nav className="hidden items-center lg:flex" aria-label="Primary">
            {navigation.map((item) => (
              <DesktopMenu
                key={item.label}
                item={item}
                active={desktopMenu}
                onOpen={setDesktopMenu}
                onClose={(label) =>
                  setDesktopMenu((current) => (current === label ? null : current))
                }
              />
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link
              href="/book"
              className="hidden rounded-full bg-blue px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-navy-2 sm:inline-flex"
            >
              Book now
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <span className="relative block h-3.5 w-5" aria-hidden="true">
                <span
                  className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition duration-300 ease-out motion-reduce:transition-none ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-current transition duration-300 ease-out motion-reduce:transition-none ${
                    open ? "scale-x-0 opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition duration-300 ease-out motion-reduce:transition-none ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>
      {present && (
        <div
          id="mobile-nav"
          className={`fixed inset-0 z-30 overflow-y-auto bg-white pt-[7.2rem] transition duration-300 ease-out motion-reduce:transition-none lg:hidden ${
            shown ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
          }`}
        >
          <nav className="mx-auto flex max-w-7xl flex-col px-4 pb-28" aria-label="Mobile">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-line">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-4 text-left text-base font-semibold"
                    aria-expanded={section === item.label}
                    onClick={() =>
                      setSection((current) => (current === item.label ? null : item.label))
                    }
                  >
                    {item.label}
                    <Chevron open={section === item.label} />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                      section === item.label ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden" inert={section !== item.label}>
                      <div className="grid gap-1 pb-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.href + child.label}
                            href={child.href}
                            className="rounded-xl px-3 py-3 text-sm font-medium text-navy-2 hover:bg-ice"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block border-b border-line py-4 text-base font-semibold"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      )}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-white/10 bg-navy md:hidden">
        <a
          href={`tel:${site.phoneMobileTel}`}
          className="py-3.5 text-center text-sm font-bold text-white"
        >
          Call 24/7
        </a>
        <Link href="/book" className="bg-cyan py-3.5 text-center text-sm font-bold text-navy">
          Book now
        </Link>
      </div>
    </>
  );
}
