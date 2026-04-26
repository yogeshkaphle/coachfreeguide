import Image from "next/image";
import Benefits from "@/components/Benefits";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Urgency from "@/components/Urgency";

const zones = [
  {
    title: "Who You're Actually Talking To",
    body: "If your page speaks to everyone, it reaches no one. Find out if your ideal client can actually see themselves in your content.",
  },
  {
    title: "What You're Actually Offering",
    body: "\"DM for details\" is not an offer. Find out if a stranger landing on your page knows what you sell - in under 10 seconds.",
  },
  {
    title: "What You're Actually Saying",
    body: "Your content should make your client think \"this person gets me\" - not \"good for you, bro.\" Find out which one yours does.",
  },
  {
    title: "How You're Actually Being Trusted",
    body: "Attention doesn't pay your rent. Trust does. Find out whether your page builds it - or quietly destroys it.",
  },
  {
    title: "What Happens When Someone Shows Up",
    body: "Most coaches lose 70% of interested leads not because of bad content - but because nothing happens after someone reaches out. Find out if you have a system or just hope.",
  },
];

const whoItsFor = [
  "You've been posting consistently for months - but your DMs are mostly other coaches, not potential clients.",
  "Someone asks about your services, you reply, and then they go quiet. You don't know what went wrong.",
  "You know you're a good coach. You just don't know why the page isn't reflecting that to the people who need you.",
  "You've tried boosting posts. You've tried reels. You've tried posting more. Nothing is moving the needle on actual paid clients.",
];

export default function HomePage() {
  return (
    <main id="top" className="relative overflow-x-hidden pb-28 md:pb-0">
      <Hero ctaText="Send Me the Checklist ->" />
      <Problem zones={zones} />
      <Benefits items={whoItsFor} />

      <section className="py-18 sm:py-24">
        <div className="section-shell">
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(74,82,64,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(166,146,115,0.14),transparent_30%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <article className="max-w-2xl">
                <p className="section-label">Who Made This</p>
                <h2 className="mt-4 section-heading">A coach who&apos;s been where you are.</h2>
                <p className="body-copy mt-6">
                  I&apos;m Yogesh Kaphle. IFPA-certified Fitness Coach. Digital Marketing
                  Specialist. I&apos;ve reviewed coaching pages across Nepal. The same five
                  gaps show up every time. That&apos;s why I made this.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-accent/20 bg-[#10130f] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                      Built From
                    </p>
                    <p className="mt-3 text-base leading-7 text-[#e5dac8]">
                      Real page reviews, real coaching offers, and real gaps repeated
                      across the Nepal market.
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-accent/20 bg-[#10130f] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                      Why This Helps
                    </p>
                    <p className="mt-3 text-base leading-7 text-[#e5dac8]">
                      It shows what&apos;s unclear before another potential client lands,
                      gets confused, and leaves.
                    </p>
                  </div>
                </div>
              </article>

              <article className="relative overflow-hidden rounded-[1.8rem] border border-[#7b715b33] bg-[linear-gradient(180deg,#10130f_0%,#090a08_100%)] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
                <div className="absolute -left-8 top-12 h-32 w-32 rounded-full bg-brand/30 blur-3xl" />
                <div className="absolute -right-10 bottom-8 h-40 w-40 rounded-full bg-accent/16 blur-3xl" />
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_32%,rgba(9,10,8,0.18)_66%,rgba(9,10,8,0.92)_100%)]" />
                  <Image
                    src="/hero-image.jpg"
                    alt="Yogesh Kaphle"
                    width={768}
                    height={768}
                    priority
                    className="h-full w-full object-cover"
                    style={{
                      maskImage: "linear-gradient(to bottom, black 82%, transparent 100%)",
                    }}
                  />
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <Urgency />

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-accent/20 bg-[#0b0d0a]/96 p-3 backdrop-blur-xl md:hidden">
        <a
          href="#lead-form"
          className="flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-[#17150f]"
        >
          Get the Free Checklist -&gt;
        </a>
      </div>

      <footer className="border-t border-line py-8">
        <div className="section-shell text-center text-sm text-muted">
          &copy; 2026 Yogesh Kaphle | yogeshkaphle.com Fitness Inside Out. Business
          Built In.
        </div>
      </footer>
    </main>
  );
}
