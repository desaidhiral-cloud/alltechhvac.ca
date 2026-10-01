import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue">404</p>
      <h1 className="mt-3 text-4xl font-extrabold text-navy">That page isn’t here.</h1>
      <p className="mt-4 text-muted">
        The link may be old. The services list and the contact page are the useful places to land.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/" className="rounded-full bg-blue px-5 py-3 text-sm font-bold text-white">
          Home
        </Link>
        <Link href="/contact" className="rounded-full border border-line px-5 py-3 text-sm font-bold text-navy">
          Contact
        </Link>
      </div>
    </section>
  );
}
