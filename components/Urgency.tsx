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
                Here&apos;s what you get — and what comes after.
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                As soon as you fill the form, three things happen:
              </p>
              <p className="mt-4 text-lg leading-8 text-muted">
                1. You&apos;re sent to a thank-you page where the full 15-minute video is waiting.
              </p>
              <p className="mt-4 text-lg leading-8 text-muted">
                2. The mind map and action worksheet land in your WhatsApp.
              </p>
              <p className="mt-4 text-lg leading-8 text-muted">
                3. I personally follow up — not a bot — to ask which step you got stuck on.
              </p>
              <p className="mt-4 text-lg leading-8 text-muted">
                If you fill out the worksheet and send it back to me, I will go through it and tell you what I&apos;d fix first. Honest answer. No pitch. Just a real coach helping another coach figure out the next move.
              </p>
            </div>

            <blockquote className="rounded-[1.6rem] border border-accent/25 bg-[#121611] p-6 text-xl leading-9 text-[#f2e7d4] shadow-[0_18px_40px_rgba(0,0,0,0.2)]">
              &quot;I&apos;m not a marketer who learned fitness. I&apos;m a fitness coach who
              learned marketing - because I had to.&quot;
            </blockquote>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="mx-auto max-w-3xl font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Stop posting into silence. Start building a system.
          </h3>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            Fifteen minutes to watch. A worksheet to fill. A WhatsApp conversation if you want it. Every week without a system is a week of viewers who would have paid you — if only they knew where to start.
          </p>
          <div className="mt-8">
            <a
              href="#lead-form"
              className="inline-flex rounded-full bg-accent px-8 py-4 text-sm font-semibold text-[#17150f] shadow-[0_18px_40px_rgba(166,146,115,0.22)] hover:bg-[#b6a180]"
            >
              Send Me the System &#8594;
            </a>
          </div>
          <p className="mt-4 text-sm text-muted">Free. Instant. No spam. I follow up personally on WhatsApp.</p>
          <p className="mt-4 text-sm text-[#d9cfbc]">
            Already watched?{" "}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#f3ebdc] underline decoration-accent/60 underline-offset-4 hover:text-white"
            >
              Message me on WhatsApp
            </a>{" "}
            and let&apos;s talk about your page.
          </p>
        </div>
      </div>
    </section>
  );
}
