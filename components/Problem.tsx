type Zone = {
  title: string;
  body: string;
};

type ProblemProps = {
  zones: Zone[];
};

export default function Problem({ zones }: ProblemProps) {
  return (
    <section className="py-18 sm:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label">What You&apos;re Getting</p>
          <h2 className="mt-4 section-heading">
            10 questions that show you exactly what&apos;s blocking clients.
          </h2>
          <p className="body-copy mt-6">
            Most fitness coaches in Nepal don&apos;t have a content problem. They have
            a clarity problem. They&apos;re posting the right amount - but in the wrong
            direction.
          </p>
          <p className="body-copy mt-4">
            This checklist walks you through the five zones where coaches silently
            lose clients every week - without ever knowing it.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-5">
          {zones.map((zone, index) => (
            <article
              key={zone.title}
              className="glass-panel rounded-[1.7rem] p-5 sm:p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                Zone {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-display text-2xl font-semibold text-[#f3ebdc]">
                {zone.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted">{zone.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#lead-form"
            className="inline-flex rounded-full border border-accent/45 bg-accent/10 px-6 py-3 text-sm font-semibold text-[#f3ebdc] hover:border-accent/70 hover:bg-accent/16"
          >
            Send Me the Free Checklist -&gt;
          </a>
        </div>
      </div>
    </section>
  );
}
