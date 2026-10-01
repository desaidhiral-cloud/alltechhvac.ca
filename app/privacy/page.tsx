import { PageHero } from "@/components/PageHero";
import { pageMeta, site } from "@/lib/site";

export const metadata = pageMeta(
  "Privacy Policy",
  "How Alltech Building Services handles personal information collected through this website and by phone.",
  "/privacy",
);

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy policy" aside="PIPEDA" />
      <article className="mx-auto max-w-3xl space-y-4 px-4 py-12 text-base leading-7 text-muted sm:px-6 lg:py-16">
        <p>
          {site.name} collects only what we need to answer a service request: your name, phone
          number, email, the property type, and the description you send. We use it to contact you
          about that request and to do the work if you hire us.
        </p>
        <p>
          The contact form on this site opens your own email application. The message is sent by
          you, to {site.email}. We don’t run a separate inbox on the website, and we don’t sell
          contact details.
        </p>
        <p>
          Phone calls and emails we receive are kept as long as the job, the warranty, or a legal
          requirement needs them, then deleted or archived with the rest of the business records.
        </p>
        <p>
          This site may be measured by privacy-respecting analytics if we turn that on later. We
          don’t use the page to build advertising profiles.
        </p>
        <p>
          To ask what we hold about you, or to ask us to correct it, email {site.email} or write to{" "}
          {site.address.street}, {site.address.city}, {site.address.region} {site.address.postal}.
        </p>
      </article>
    </>
  );
}
