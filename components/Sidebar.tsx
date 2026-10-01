import Link from "next/link";

export function Sidebar({
  title,
  items,
  current,
}: {
  title: string;
  items: { href: string; label: string }[];
  current: string;
}) {
  return (
    <aside className="w-full min-w-0 max-w-full lg:sticky lg:top-28 lg:self-start">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-blue">{title}</p>
      <nav
        className="flex w-full min-w-0 max-w-full gap-2 overflow-x-auto overscroll-x-contain pb-1 [mask-image:linear-gradient(to_right,#000_calc(100%-1.75rem),transparent)] [scrollbar-width:none] lg:grid lg:overflow-visible lg:[mask-image:none] [&::-webkit-scrollbar]:hidden"
        aria-label={title}
      >
        {items.map((item) => {
          const active = item.href === current;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={`shrink-0 rounded-xl px-3 py-2.5 text-sm font-semibold lg:rounded-none lg:border-b lg:border-line lg:px-4 ${
                active
                  ? "bg-blue text-white lg:bg-blue"
                  : "bg-ice text-navy hover:bg-mist lg:bg-white"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
