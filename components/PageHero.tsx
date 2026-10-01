export function PageHero({
  eyebrow,
  title,
  aside = "Air conditioning and heating specialists",
}: {
  eyebrow?: string;
  title: string;
  aside?: string;
}) {
  return (
    <section className="bg-navy text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 sm:px-6 md:flex-row md:items-end md:justify-between md:py-14">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-sm font-semibold text-cyan-2">{eyebrow}</p>
          )}
          <h1 className="mt-1 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
            {title}
          </h1>
        </div>
        {aside && (
          <p className="max-w-xs text-sm text-white/75 md:text-right">{aside}</p>
        )}
      </div>
    </section>
  );
}
