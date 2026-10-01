"use client";

import { useState } from "react";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export function ContactForm({
  heading = "Send a message",
  submitLabel = "Send message",
}: {
  heading?: string;
  submitLabel?: string;
}) {
  const [sent, setSent] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (String(data.get("company_website") || "").trim()) {
      setSent(true);
      return;
    }

    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const email = String(data.get("email") || "");
    const property = String(data.get("property") || "");
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "");

    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Property: ${property}`,
      `Service: ${service}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Service request from ${name}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="relative min-w-0 rounded-3xl border border-line bg-white p-5 shadow-sm sm:p-7">
      <h2 className="text-xl font-bold text-navy">{heading}</h2>
      <p className="mt-2 text-sm leading-6 text-muted">
        This opens your email app with the message filled in, addressed to {site.email}. For a
        no-heat or down-system call, phone {site.phoneMobile}. Email is not watched overnight.
      </p>
      <div className="mt-5 grid min-w-0 gap-4 sm:grid-cols-2">
        <label className="grid min-w-0 gap-1.5 text-sm font-semibold text-ink">
          Name
          <input
            name="name"
            required
            autoComplete="name"
            className="h-12 w-full min-w-0 rounded-xl border border-line px-3 font-normal outline-none focus:border-cyan"
          />
        </label>
        <label className="grid min-w-0 gap-1.5 text-sm font-semibold text-ink">
          Phone
          <input
            name="phone"
            required
            type="tel"
            autoComplete="tel"
            className="h-12 w-full min-w-0 rounded-xl border border-line px-3 font-normal outline-none focus:border-cyan"
          />
        </label>
        <label className="grid min-w-0 gap-1.5 text-sm font-semibold text-ink sm:col-span-2">
          Email
          <input
            name="email"
            required
            type="email"
            autoComplete="email"
            className="h-12 w-full min-w-0 rounded-xl border border-line px-3 font-normal outline-none focus:border-cyan"
          />
        </label>
        <label className="grid min-w-0 gap-1.5 text-sm font-semibold text-ink">
          Property
          <select
            name="property"
            required
            defaultValue=""
            className="h-12 w-full min-w-0 rounded-xl border border-line bg-white px-3 font-normal outline-none focus:border-cyan"
          >
            <option value="" disabled>
              Select
            </option>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Industrial</option>
          </select>
        </label>
        <label className="grid min-w-0 gap-1.5 text-sm font-semibold text-ink">
          Service
          <select
            name="service"
            required
            defaultValue=""
            className="h-12 w-full min-w-0 rounded-xl border border-line bg-white px-3 font-normal outline-none focus:border-cyan"
          >
            <option value="" disabled>
              Select
            </option>
            {services.map((service) => (
              <option key={service.slug}>{service.label}</option>
            ))}
            <option>Emergency repair</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label className="grid min-w-0 gap-1.5 text-sm font-semibold text-ink sm:col-span-2">
          What do you need?
          <textarea
            name="message"
            required
            rows={5}
            className="w-full min-w-0 rounded-xl border border-line px-3 py-3 font-normal outline-none focus:border-cyan"
          />
        </label>
      </div>
      <label className="absolute -left-[9999px]" aria-hidden="true">
        Company website
        <input name="company_website" tabIndex={-1} autoComplete="off" />
      </label>
      <button
        type="submit"
        className="mt-5 inline-flex h-12 items-center justify-center rounded-full bg-blue px-6 text-sm font-bold text-white hover:bg-navy"
      >
        {submitLabel}
      </button>
      {sent && (
        <p className="mt-4 text-sm leading-6 text-navy" role="status">
          Your email app should open with this request ready to send. If it doesn’t, call{" "}
          <a className="font-bold" href={`tel:${site.phoneOfficeTel}`}>
            {site.phoneOffice}
          </a>{" "}
          or email {site.email} directly.
        </p>
      )}
    </form>
  );
}
