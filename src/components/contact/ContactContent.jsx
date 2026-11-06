import Link from "next/link";
import { ArrowRightIcon, ShieldIcon } from "@/components/about/AboutIcons";
import { MailIcon } from "@/components/pricing/PricingIcons";
import { PLATFORM_LOGIN_URL, SUPPORT_EMAIL } from "@/lib/siteLinks";
import ContactFaq from "./ContactFaq";
import ContactForm from "./ContactForm";

const CONTACT_EMAIL = SUPPORT_EMAIL?.trim() ?? "";

const HERO_TIPS = [
  {
    title: "The page or feature",
    detail: "Tell us where you ran into the question.",
  },
  {
    title: "What you expected",
    detail: "Share the result you were looking for.",
  },
  {
    title: "What happened instead",
    detail: "Describe what you saw, if something went wrong.",
  },
];

export default function ContactContent() {
  return (
    <>
      <section
        aria-labelledby="contact-heading"
        className="relative isolate overflow-hidden border-b border-border bg-[linear-gradient(180deg,var(--light)_0%,#FBFDFF_58%,var(--white)_100%)] py-16 font-sans sm:py-20 lg:py-24"
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-28 top-[-12rem] size-[34rem] rounded-full bg-soft-green/65 blur-3xl" />
          <div className="absolute right-[-8rem] top-[-4rem] size-[26rem] rounded-full bg-emerald/10 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(16,26,24,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,26,24,0.03)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_34%_0%,black,transparent_72%)]" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-center lg:gap-14 lg:px-8 xl:grid-cols-[minmax(0,1fr)_26rem]">
          <div className="min-w-0 max-w-[52rem]">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-[10px] font-semibold"
            >
              <Link
                href="/about"
                className="rounded-md text-text-muted transition-colors duration-150 hover:text-dark-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 motion-reduce:transition-none"
              >
                About Securelyze
              </Link>
              <span aria-hidden="true" className="text-text-muted/60">
                /
              </span>
              <span
                aria-current="page"
                className="inline-flex items-center gap-1.5 rounded-full border border-emerald/20 bg-emerald/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.12em] text-dark-green"
              >
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-emerald"
                />
                Contact Us
              </span>
            </nav>

            <p className="mt-8 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-dark-green">
              <span aria-hidden="true" className="h-px w-8 bg-emerald" />
              CONTACT SECURELYZE
            </p>

            <h1
              id="contact-heading"
              className="mt-4 max-w-[48rem] text-balance text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.055em] text-charcoal sm:text-[3.25rem] lg:text-[3.45rem] xl:text-[3.6rem]"
            >
              Have a question? We&apos;re here to help.
            </h1>

            <p className="mt-6 max-w-[44rem] text-pretty text-[15px] leading-[1.75] text-text-secondary sm:text-base">
              Whether you&apos;re exploring Securelyze, have a question about a
              security check, or want to share feedback, we&apos;d be glad to
              hear from you.
            </p>
          </div>

          <div className="min-w-0">
            <aside
              aria-labelledby="contact-hero-card-heading"
              className="w-full max-w-[30rem] rounded-3xl border border-border bg-white/85 p-5 shadow-card backdrop-blur-sm sm:p-6 lg:max-w-none"
            >
              <div className="flex items-start justify-between gap-4 border-b border-border pb-4">
                <div className="min-w-0">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-text-muted">
                    A helpful message
                  </p>
                  <h2
                    id="contact-hero-card-heading"
                    className="mt-1.5 text-[14px] font-semibold leading-[1.4] tracking-[-0.02em] text-charcoal"
                  >
                    What to include
                  </h2>
                </div>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-emerald/20 bg-emerald/10 text-emerald">
                  <MailIcon className="size-5" />
                </span>
              </div>

              <ul className="mt-4 space-y-3.5">
                {HERO_TIPS.map((tip) => (
                  <li key={tip.title} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-emerald"
                    />
                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold leading-[1.4] text-charcoal">
                        {tip.title}
                      </p>
                      <p className="mt-0.5 text-[12px] leading-[1.55] text-text-muted">
                        {tip.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mt-5 border-t border-border pt-4 text-[11px] leading-[1.6] text-text-muted">
                A few details make your message easier to understand.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <div className="bg-light py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl items-start gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_21rem] lg:gap-10 lg:px-8 xl:grid-cols-[minmax(0,1fr)_23rem]">
          <ContactForm />

          <section
            aria-labelledby="contact-email-heading"
            className="relative min-w-0 overflow-hidden rounded-3xl border border-border bg-white p-6 shadow-card sm:p-7 lg:sticky lg:top-24"
          >
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald via-emerald-light to-transparent"
            />

            <span className="inline-flex size-11 items-center justify-center rounded-xl border border-emerald/20 bg-soft-green/60 text-dark-green">
              <MailIcon className="size-5" />
            </span>

            <h2
              id="contact-email-heading"
              className="mt-5 text-[1.25rem] font-semibold leading-[1.25] tracking-[-0.025em] text-charcoal"
            >
              Other ways to reach us
            </h2>
            <p className="mt-3 text-[13px] leading-[1.75] text-text-secondary">
              Prefer to write directly? You can use our contact email address.
            </p>

            <div className="mt-5">
              {CONTACT_EMAIL ? (
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-emerald/20 bg-emerald/[0.04] px-4 py-3.5 transition-colors duration-200 hover:border-emerald/35 hover:bg-emerald/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 motion-reduce:transition-none"
                >
                  <span className="min-w-0 break-all text-[13.5px] font-semibold text-dark-green">
                    {CONTACT_EMAIL}
                  </span>
                  <ArrowRightIcon className="size-4 shrink-0 text-emerald transition-transform duration-200 motion-safe:group-hover:translate-x-0.5 motion-reduce:transition-none" />
                </a>
              ) : (
                <p className="rounded-xl border border-border bg-light px-4 py-3.5 text-[12.5px] leading-[1.6] text-text-muted">
                  The contact email address is not configured.
                </p>
              )}
            </div>

            <div className="mt-5 flex items-start gap-3 border-t border-border-subtle pt-5">
              <ShieldIcon className="mt-0.5 size-4 shrink-0 text-emerald" />
              <p className="text-[11.5px] leading-[1.65] text-text-muted">
                Please don&apos;t include passwords, API keys, or other
                sensitive information.
              </p>
            </div>
          </section>
        </div>
      </div>

      <ContactFaq />

      <section
        aria-labelledby="contact-cta-heading"
        className="bg-light py-16 font-sans sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-charcoal p-6 shadow-[var(--shadow-card-dark)] sm:p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10"
            >
              <div className="absolute inset-0 bg-[linear-gradient(var(--bot-line-faint)_1px,transparent_1px),linear-gradient(90deg,var(--bot-line-faint)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
              <div className="absolute -right-20 -top-28 size-80 rounded-full bg-emerald/10 blur-3xl" />
            </div>

            <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12">
              <div className="max-w-[40rem]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-light">
                  EXPLORE SECURELYZE
                </p>
                <h2
                  id="contact-cta-heading"
                  className="heading-2 mt-4 text-balance text-white!"
                >
                  Want to check a website yourself?
                </h2>
                <p className="mt-4 text-[15px] leading-[1.75] text-soft-green/75">
                  The Securelyze platform brings website security checks and
                  asset discovery into one place.
                </p>
              </div>

              <Link
                href={PLATFORM_LOGIN_URL}
                className="btn-primary group w-full sm:w-auto lg:justify-self-end motion-reduce:transition-none!"
              >
                Go to the platform
                <ArrowRightIcon className="size-4 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5 motion-reduce:transition-none" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
