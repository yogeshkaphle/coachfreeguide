import Image from "next/image";
import Benefits from "@/components/Benefits";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Urgency from "@/components/Urgency";

const zones = [
  {
    title: "Know Exactly Who You Serve",
    body: "When you talk to everyone, you connect with no one. Find out how to choose your ideal client — even if you've been coaching everyone for years.",
  },
  {
    title: "Build an Offer Clients Actually Want",
    body: "People don't buy coaching. They buy outcomes. Learn how to package your service so a stranger reads it and thinks 'this is for me.'",
  },
  {
    title: "Build Trust Before You Ask for Anything",
    body: "Posting more isn't the answer. Posting with purpose is. Learn the three trust signals that move strangers toward becoming clients.",
  },
  {
    title: "Get In Front of Them — Even With 100 Followers",
    body: "Stop waiting for the algorithm. Learn how a simple landing page and small daily ad budget can bring you leads in 3-7 days, not 12 months.",
  },
  {
    title: "Sign Them. Deliver. Scale Without Burning Out",
    body: "Lead does not equal client. Client does not equal retained client. Learn the consultation, onboarding, and delivery system that protects your time as you grow.",
  },
];

const whoItsFor = [
  "You've been posting consistently for months — but the people messaging you are mostly other coaches, not clients.",
  "You have a few clients, but you're stuck. Same revenue every month. Same exhaustion. No clear way to grow.",
  "You know you're a good coach. You just don't know why your page isn't reflecting that to the people who actually need you.",
  "You've tried boosting posts, posting reels, posting more. None of it has moved the needle on actual paid clients.",
];

export default function HomePage() {
  return (
    <main id="top" className="relative overflow-x-hidden pb-28 md:pb-0">
      <Hero ctaText="Send Me the System ->" />
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
                  I&apos;m Yogesh Kaphle. Certified fitness coach. Digital marketer. I built this system because I watched too many great coaches in Nepal stay invisible online — while average coaches with marketing skills got all the clients. That&apos;s the gap I want to fix. Not by competing with you — by handing you what I learned the hard way.
                </p>
              </article>

              <article className="relative overflow-hidden rounded-[1.8rem] border border-[#7b715b33] bg-[linear-gradient(180deg,#10130f_0%,#090a08_100%)] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.28)] lg:aspect-[4/3]">
                <div className="absolute -left-8 top-12 h-32 w-32 rounded-full bg-brand/30 blur-3xl" />
                <div className="absolute -right-10 bottom-8 h-40 w-40 rounded-full bg-accent/16 blur-3xl" />
                <div className="relative h-full overflow-hidden rounded-[1.5rem]">
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
          Send Me the System -&gt;
        </a>
      </div>

      <footer className="border-t border-line py-8">
        <div className="section-shell text-center text-sm text-muted">
          &copy; 2026 Yogesh Kaphle | yogeshkaphle.com &mdash; Fitness Inside Out. Business Built In.
        </div>
      </footer>
    </main>
  );
}
