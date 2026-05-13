export default function Urgency() {
  const whatsappLink = "https://wa.me/85362830217";

  return (
    <section className="py-18 sm:py-24">
      <div className="section-shell">
        <div className="text-center">
          <h3 className="mx-auto max-w-3xl font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Stop posting into silence. Start building a system.
          </h3>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            Every week without a system is a week of viewers who would have paid you — if only they knew where to start.
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
