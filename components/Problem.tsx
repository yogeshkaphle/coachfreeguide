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
            The 5-step system that turns viewers into paying clients.
          </h2>
          <p className="body-copy mt-6 text-left">
            Most coaches in Nepal don&apos;t have a content problem. They have a system problem. They post regularly, but the path from a stranger watching their reel to a client paying them — that path doesn&apos;t exist yet. This system fixes that.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-5 lg:items-stretch lg:[grid-auto-rows:1fr]">
          {zones.map((zone, index) => (
            <article
              key={zone.title}
              className="glass-panel flex flex-col rounded-[1.7rem] p-5 sm:p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                Step {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-display text-2xl font-semibold text-[#f3ebdc]">
                {zone.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-muted">{zone.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#lead-form"
            className="inline-flex rounded-full border border-accent/45 bg-accent/10 px-6 py-3 text-sm font-semibold text-[#f3ebdc] hover:border-accent/70 hover:bg-accent/16"
          >
            Send Me the System -&gt;
          </a>
        </div>
      </div>
    </section>
  );
}
