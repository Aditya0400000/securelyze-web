import SolutionCard from "./SolutionCard";
import SolutionClosingCta from "./SolutionClosingCta";
import SolutionDetailHero from "./SolutionDetailHero";
import SolutionHeroCard from "./SolutionHeroCard";
import SolutionSectionHeading from "./SolutionSectionHeading";

export default function SolutionAudiencePage({ solution }) {
  const {
    id,
    current,
    title,
    description,
    note,
    primary,
    secondary,
    heroCard,
    review,
    process,
    useCases,
    closing,
  } = solution;

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-emerald selection:text-charcoal">
      <SolutionDetailHero
        id={id}
        current={current}
        title={title}
        description={description}
        note={note}
        primary={primary}
        secondary={secondary}
        heroCard={<SolutionHeroCard {...heroCard} />}
      />

      <section
        aria-labelledby={`${id}-review-heading`}
        className="scroll-mt-24 bg-white py-16 font-sans sm:py-20 lg:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SolutionSectionHeading
            id={`${id}-review-heading`}
            eyebrow="Available checks"
            title={review.title}
            description={review.description}
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {review.cards.map((card) => (
              <SolutionCard
                key={card.title}
                href={card.href}
                icon={card.icon}
                title={card.title}
                description={card.description}
                ctaLabel="Open page"
              />
            ))}
          </div>

          <p className="mt-6 max-w-[44rem] text-[11.5px] leading-[1.65] text-text-muted">
            Each page explains what the check covers. The current experience
            uses clearly labelled illustrative sample data.
          </p>
        </div>
      </section>

      <section
        aria-labelledby={`${id}-process-heading`}
        className="scroll-mt-24 border-y border-border bg-light/60 py-16 font-sans sm:py-20 lg:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SolutionSectionHeading
            id={`${id}-process-heading`}
            eyebrow="Review path"
            title={process.title}
            description={process.description}
          />

          <ol className="mt-10 grid gap-5 lg:grid-cols-3">
            {process.steps.map((step, index) => (
              <li key={step.title} className="h-full">
                <SolutionCard
                  leading={String(index + 1).padStart(2, "0")}
                  title={step.title}
                  description={step.description}
                />
              </li>
            ))}
          </ol>

          <p className="mt-6 max-w-[44rem] text-[11.5px] leading-[1.65] text-text-muted">
            This overview explains the available checks and how to approach a
            review. It does not run a live scan.
          </p>
        </div>
      </section>

      <section
        aria-labelledby={`${id}-use-cases-heading`}
        className="scroll-mt-24 bg-white py-16 font-sans sm:py-20 lg:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SolutionSectionHeading
            id={`${id}-use-cases-heading`}
            eyebrow="Use cases"
            title={useCases.title}
            description={useCases.description}
          />

          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.items.map((item) => (
              <li key={item.title} className="h-full">
                <SolutionCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SolutionClosingCta id={`${id}-cta`} {...closing} />
    </main>
  );
}
