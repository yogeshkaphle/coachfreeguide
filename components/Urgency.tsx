export default function Urgency() {
  const whatsappLink = "https://wa.me/85362830217";

  return (
    <section className="py-18 sm:py-24">
      <div className="section-shell">
        <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(166,146,115,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(74,82,64,0.2),transparent_30%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="section-label">What Happens Next</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
                The checklist is just the start.
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                After you download it - go through it honestly. Every question is
                designed to show you one specific gap.
              </p>
              <p className="mt-4 text-lg leading-8 text-muted">
                When you&apos;re done, I&apos;ll follow up on WhatsApp personally. Not to
                pitch you. Just to ask what you found - and we will look at it
                together.
              </p>
              <p className="mt-4 text-lg leading-8 text-muted">
                I will review your page, your content, and your current offer and tell
                you exactly what is stopping clients from coming in and I tell you what
                I&apos;d fix first. No pressure. No agenda. Just a free one on one
                Consultation to figure it out how you can onboard More Clients.
              </p>
            </div>

            <div className="space-y-4">
              <blockquote className="rounded-[1.6rem] border border-accent/25 bg-[#121611] p-6 text-xl leading-9 text-[#f2e7d4] shadow-[0_18px_40px_rgba(0,0,0,0.2)]">
                &quot;I&apos;m not a marketer who learned fitness. I&apos;m a fitness coach who
                learned marketing - because I had to.&quot;
              </blockquote>

              <div className="rounded-[1.6rem] border border-accent/25 bg-[#121611] p-6">
                <p className="section-label">Ready?</p>
                <h3 className="mt-4 font-display text-3xl font-semibold text-[#f6eedf]">
                  Find out where your page is losing clients.
                </h3>
                <p className="mt-4 text-base leading-8 text-muted">
                  It takes 10 minutes to read. It might change the next 10 months.
                </p>
                <p className="mt-4 text-base leading-8 text-[#ddd1be]">
                  Every week you post without fixing this is a week of potential
                  clients who visited and left.
                </p>
                <a
                  href="#lead-form"
                  className="mt-6 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#17150f] hover:bg-[#b6a180]"
                >
                  Send Me the Free Checklist -&gt;
                </a>
                <p className="mt-3 text-sm text-muted">
                  Free. Instant. No spam. I&apos;ll follow up personally on WhatsApp -
                  because that&apos;s how real conversations happen.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-full border border-line bg-[#0b0d0a]/75 px-5 py-4 text-center text-sm text-[#d9cfbc] shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
          Already have it?{" "}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-[#f3ebdc] underline decoration-accent/60 underline-offset-4 hover:text-white"
          >
            Message me on WhatsApp
          </a>{" "}
          and we&apos;ll look at your page together.
        </div>
      </div>
    </section>
  );
}
