import Link from "next/link";

export function ConsultBand({
  title = "Request a consultation today",
  body = "Ready to replace a system, set up maintenance, or get a second look at a quote? Tell us the building and what's going on.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-blue">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 px-4 py-8 sm:px-6 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <h2 className="text-xl font-bold text-white sm:text-2xl">{title}</h2>
          <p className="mt-2 text-sm leading-6 text-white/80">{body}</p>
        </div>
        <Link
          href="/book"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-bold text-navy transition hover:bg-ice"
        >
          Book now
        </Link>
      </div>
    </section>
  );
}
