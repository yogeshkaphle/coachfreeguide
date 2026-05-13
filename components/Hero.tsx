import Image from "next/image";
import CTAForm from "./CTAForm";

type HeroProps = {
  ctaText: string;
};

export default function Hero({ ctaText }: HeroProps) {
  return (
    <section className="relative overflow-hidden pb-18 pt-5 sm:pb-24 sm:pt-6">
      <div className="section-shell">
        <nav className="mb-8 flex items-center rounded-full border border-line bg-[#0b0d0a]/80 px-4 py-3 backdrop-blur-xl sm:px-5">
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

                <div className="mt-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Inside this kit:</p>
                  <ul className="mt-4 space-y-3">
                    {["15-minute video walkthrough (in Nepali)", "The Mind Map PDF", "Action worksheet to apply it this week"].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-7 text-[#d3cab9]">
                        <span className="mt-0.5 text-accent">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
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
