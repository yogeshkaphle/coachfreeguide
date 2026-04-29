import Image from "next/image";
import CTAForm from "./CTAForm";

type HeroProps = {
  ctaText: string;
};

export default function Hero({ ctaText }: HeroProps) {
  return (
    <section className="relative overflow-hidden pb-18 pt-5 sm:pb-24 sm:pt-6">
      <div className="section-shell">
        <nav className="mb-8 flex items-center justify-between rounded-full border border-line bg-[#0b0d0a]/80 px-4 py-3 backdrop-blur-xl sm:px-5">
          <a href="#top" className="flex items-center gap-3">
            <Image
              src="/yogesh-kaphle-logo.png"
              alt="Yogesh Kaphle"
              width={208}
              height={64}
              priority
              className="h-10 w-auto sm:h-14"
            />
          </a>
          <a
            href="#lead-form"
            className="rounded-full border border-accent/40 bg-accent/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#f1e8d7] hover:border-accent/70 hover:bg-accent/18 whitespace-nowrap"
          >
            Get Free Access →
          </a>
        </nav>

        <div className="grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-[#0c0f0b]/88 p-6 shadow-[0_24px_90px_rgba(0,0,0,0.32)] sm:p-8 lg:p-10 lg:h-full">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(74,82,64,0.22),transparent_40%),radial-gradient(circle_at_right,rgba(166,146,115,0.16),transparent_34%)]" />
            <div className="relative z-10">
              <div>
                <p className="section-label">
                  Built For Nepali Fitness Coaches
                </p>
                <h1 className="mt-5 max-w-3xl font-display font-semibold text-foreground">
                  <span className="block text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">From Viewer to Paying Client</span>
                  <span className="mt-3 block text-2xl font-medium italic text-[#c4b89a] sm:text-3xl lg:text-4xl">The 5-Step System Every Coach Needs</span>
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#d3cab9] sm:text-xl">
                  Start building the system that brings clients in — even if you have 100 followers.
                </p>

                <div className="mt-8 flex flex-col items-start gap-4">
                  <a
                    href="#lead-form"
                    className="rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-[#17150f] shadow-[0_22px_50px_rgba(166,146,115,0.22)] hover:bg-[#b6a180]"
                  >
                    Send Me the System -&gt;
                  </a>
                  <p className="text-sm text-muted">
                    Free. Instant. No pitch. Real coach. Real system.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <CTAForm ctaText={ctaText} />
        </div>

      </div>
    </section>
  );
}
