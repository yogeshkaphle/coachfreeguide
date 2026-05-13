import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";

const WA_HREF =
  "https://wa.me/85362830217?text=" +
  encodeURIComponent(
    "Namaste Yogesh! I came from your Ground Zero page. I'd like to book the free 30-min strategy call. My coaching focus: [your niche here]"
  );

function BookCallButton() {
  return (
    <a
      href={WA_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-full bg-accent px-8 py-4 text-base font-semibold text-[#17150f] shadow-[0_22px_50px_rgba(166,146,115,0.22)] hover:bg-[#b6a180]"
    >
      Book My Free 30-Min Strategy Call
    </a>
  );
}

function NP({ children }: { children: ReactNode }) {
  return <span className="italic text-accent">{children}</span>;
}

export const metadata: Metadata = {
  title: "Ground Zero — 90-Day Client System for Fitness Coaches in Nepal",
  description:
    "I help Nepali fitness coaches turn content into paying clients. Website, content strategy, Meta Ads — built and running in 90 days. Or the 4th month is free. 3 founding client spots open at 39,000 NPR.",
  openGraph: {
    title:
      "Ground Zero — 90-Day Client System for Fitness Coaches in Nepal | Yogesh Kaphle",
    description:
      "I help Nepali fitness coaches turn content into paying clients. Website, content strategy, Meta Ads — built and running in 90 days. Or the 4th month is free. 3 founding client spots open at 39,000 NPR.",
    url: "https://start.yogeshkaphle.com/groundzero",
    siteName: "Yogesh Kaphle",
    images: [
      {
        url: "/hero-image.jpg",
        width: 1200,
        height: 1200,
        alt: "Yogesh Kaphle — Ground Zero",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ground Zero — 90-Day Client System for Fitness Coaches in Nepal | Yogesh Kaphle",
    description:
      "I help Nepali fitness coaches turn content into paying clients. Website, content strategy, Meta Ads — built and running in 90 days. Or the 4th month is free. 3 founding client spots open at 39,000 NPR.",
    images: ["/hero-image.jpg"],
  },
};

export default function GroundZeroPage() {
  return (
    <>
      <main className="relative overflow-x-hidden pb-28 md:pb-0">

        {/* ── S1: HERO ── */}
        <section className="relative flex min-h-screen flex-col overflow-hidden">
          <div className="section-shell flex flex-1 flex-col py-5">

            {/* Nav */}
            <nav className="mb-8 flex items-center justify-between rounded-full border border-line bg-[#0b0d0a]/80 px-4 py-3 backdrop-blur-xl sm:px-5">
              <a href="#top" className="flex items-center gap-3">
                <Image
                  src="/yogesh-kaphle-logo.png"
                  alt="Yogesh Kaphle"
                  width={208}
                  height={64}
                  priority
                  className="h-10 w-auto sm:h-14"
                  style={{ mixBlendMode: "screen" }}
                />
              </a>
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap rounded-full border border-accent/40 bg-accent/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#f1e8d7] hover:border-accent/70 hover:bg-accent/18"
              >
                Book Free Call →
              </a>
            </nav>

            {/* Hero card */}
            <div className="relative flex flex-1 items-center">
              <div className="relative w-full overflow-hidden rounded-[2rem] border border-line bg-[#0c0f0b]/88 p-8 shadow-[0_24px_90px_rgba(0,0,0,0.32)] sm:p-10 lg:p-14">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(74,82,64,0.22),transparent_40%),radial-gradient(circle_at_right,rgba(166,146,115,0.16),transparent_34%)]" />
                <div className="relative z-10 max-w-3xl">
                  <p className="section-label">Founding Client — 3 Spots</p>
                  <h1 className="mt-5 font-display font-semibold text-foreground">
                    <span className="block text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
                      Turn Your Followers Into Paying Clients.
                    </span>
                  </h1>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d3cab9] sm:text-xl">
                    Website live in 2 weeks. The next 90 days I work alongside you — building the system, running the ads, optimizing until real leads start coming in. Or the 4th month is on me.
                  </p>
                  <div className="mt-10 flex flex-col items-start gap-4">
                    <BookCallButton />
                    <p className="text-sm text-muted">No pitch. No pressure. We talk, you decide.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── S2: THE HOOK ── */}
        <section className="py-18 sm:py-24">
          <div className="section-shell">
            <div className="mx-auto max-w-2xl">
              <p className="section-label">Sound Familiar?</p>
              <blockquote className="mt-6 border-l-2 border-accent/50 pl-6">
                <p className="font-display text-2xl font-medium leading-relaxed text-[#f3ebdc] sm:text-3xl">
                  <NP>
                    &ldquo;Views ta tannai aauxa. Comments pani aauxa. &lsquo;DM for personal training&rsquo; bio maa rakheko xa — DMs pani aauxa.&rdquo;
                  </NP>
                </p>
              </blockquote>
              <div className="mt-8 space-y-5 body-copy">
                <p>Then someone messages: <NP>&ldquo;Price kati ho?&rdquo;</NP></p>
                <p>You reply. They disappear.</p>
                <p>Views, comments, DMs — and silence at the end of every month.</p>
                <p>This is not your fault. You just don&apos;t have a system that moves people from your content to actually paying you.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── S3: THE PROBLEM ── */}
        <section className="border-t border-line py-18 sm:py-24">
          <div className="section-shell">
            <div className="mx-auto max-w-3xl">
              <p className="section-label">The Real Issue</p>
              <h2 className="mt-4 section-heading">You Have Tried Everything.</h2>
              <div className="mt-10 space-y-4">
                <div className="glass-panel flex gap-5 rounded-2xl p-5 sm:p-6">
                  <span className="mt-0.5 flex-shrink-0 font-semibold text-accent">—</span>
                  <p className="body-copy">You post reels every day. Good content, consistent effort. Some posts hit 20k views. Views don&apos;t pay rent. You already know that.</p>
                </div>
                <div className="glass-panel flex gap-5 rounded-2xl p-5 sm:p-6">
                  <span className="mt-0.5 flex-shrink-0 font-semibold text-accent">—</span>
                  <p className="body-copy">You boosted posts on Facebook and Instagram. <NP>Reach badhyo, visibility badhyo.</NP> Still not one paying client.</p>
                </div>
                <div className="glass-panel flex gap-5 rounded-2xl p-5 sm:p-6">
                  <span className="mt-0.5 flex-shrink-0 font-semibold text-accent">—</span>
                  <p className="body-copy">You ran a free challenge. People joined. Two paid. The rest disappeared after day three.</p>
                </div>
              </div>
              <p className="mt-10 max-w-2xl body-copy">
                None of this failed because you are a bad coach. It failed because there is no system underneath it. No pipeline. No conversion path. Just good content going into a black hole every month.
              </p>
            </div>
          </div>
        </section>

        {/* ── S4: WHO I AM ── */}
        <section className="border-t border-line py-18 sm:py-24">
          <div className="section-shell">
            <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(74,82,64,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(166,146,115,0.14),transparent_30%)]" />
              <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <article className="max-w-2xl">
                  <p className="section-label">Who I Am</p>
                  <h2 className="mt-4 section-heading">
                    Yogesh Kaphle — Fitness Inside Out. Business Built In.
                  </h2>
                  <div className="mt-6 space-y-4 body-copy">
                    <p>A certified coach who learned digital marketing the hard way and used it to build my own brand from zero. Now I build it for coaches like you, not as an agency selling a template, but as someone who has lived on both sides.</p>
                  </div>
                  <div className="mt-8">
                    <BookCallButton />
                  </div>
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
                      className="h-full w-full object-cover"
                      style={{
                        maskImage:
                          "linear-gradient(to bottom, black 82%, transparent 100%)",
                      }}
                    />
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* ── S5: HOW IT WORKS ── */}
        <section className="border-t border-line py-18 sm:py-24">
          <div className="section-shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-label">The System</p>
              <h2 className="mt-4 section-heading">Three Phases. 90 Days. One Working System.</h2>
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              {(
                [
                  {
                    phase: "Phase 1",
                    time: "Week 1–2",
                    label: "Foundation",
                    body: "Niche, offer, website, landing page, WhatsApp funnel — all built and live. Your business is finally defined online.",
                  },
                  {
                    phase: "Phase 2",
                    time: "Week 3–4",
                    label: "Activate",
                    body: "Content strategy locked to your niche. You know exactly what to post and why. Authority starts compounding.",
                  },
                  {
                    phase: "Phase 3",
                    time: "Month 2–3",
                    label: "Real Leads",
                    body: "Meta Ads live. Real leads coming in. Weekly check-ins, monthly audits. Every decision from data.",
                  },
                ] as const
              ).map((p) => (
                <article key={p.phase} className="glass-panel flex flex-col rounded-[1.7rem] p-6 sm:p-7">
                  <p className="section-label">{p.phase} — {p.time}</p>
                  <h3 className="mt-4 font-display text-3xl font-semibold text-foreground">{p.label}</h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-muted">{p.body}</p>
                </article>
              ))}
            </div>
            <div className="mx-auto mt-10 max-w-3xl space-y-3 text-center">
              <p className="body-copy font-medium text-foreground">Three phases. 90 days of active work together. Real leads — or the 4th month is on me.</p>
              <p className="text-sm text-muted">One note on ad spend: Running Meta Ads needs a separate monthly budget — 5,000 to 10,000 NPR/month is enough to start. You pay Meta directly. Not part of my fee. We decide together what makes sense.</p>
            </div>
          </div>
        </section>

        {/* ── S6: WHAT YOU GET ── */}
        <section className="border-t border-line py-18 sm:py-24">
          <div className="section-shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-label">The Full Package</p>
              <h2 className="mt-4 section-heading">This Is Not a Website Package.</h2>
              <p className="mt-3 body-copy">This Is Your Complete Client Acquisition Engine.</p>
            </div>
            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              <div className="glass-panel rounded-[1.7rem] p-6 sm:p-8">
                <p className="section-label mb-6">The Foundation Build</p>
                <ul className="space-y-5">
                  {(
                    [
                      ["Niche Positioning", "Hundreds of coaches competing for the same client. We define exactly why you are different so your ideal client lands and thinks “this is for me.”"],
                      ["Client Avatar", "Total clarity on who you are building for. Not a generic audience. Your specific person."],
                      ["Offer Architecture", "Your coaching package, the price, the packaging — made sharp and clear. The “price kati ho?” followed by silence stops here."],
                      ["Website — Built, Live, Converting", "Professional, mobile-first, WhatsApp-connected. Your ideal client finds you on Google and stays."],
                      ["Service Landing Page", "Dedicated conversion page for your core offer. Ad traffic lands here. Leads built here."],
                      ["WhatsApp Contact Funnel", "Every visitor has a clear next step. Inquiries come straight to your phone."],
                    ] as [string, string][]
                  ).map(([title, body]) => (
                    <li key={title} className="flex gap-3">
                      <span className="mt-0.5 flex-shrink-0 font-semibold text-accent">✓</span>
                      <p className="text-sm leading-7 text-muted">
                        <span className="font-semibold text-foreground">{title}</span>
                        {" — "}{body}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-panel rounded-[1.7rem] p-6 sm:p-8">
                <p className="section-label mb-6">The 3-Month Active Phase</p>
                <ul className="space-y-5">
                  {(
                    [
                      ["Custom Content Strategy", "Your niche, your client, your pillars — all laid out. You create, the system does the rest."],
                      ["Meta Ads — Real Conversion Campaigns", "Nepal-specific targeting. Conversion and lookalike campaigns. Not boosting — real ad architecture."],
                      ["Weekly Strategy Check-ins", "30 minutes every week. What&apos;s working, what to adjust, what&apos;s next."],
                      ["Monthly Performance Audit", "Numbers reviewed. Decisions from data. No guesswork."],
                    ] as [string, string][]
                  ).map(([title, body]) => (
                    <li key={title} className="flex gap-3">
                      <span className="mt-0.5 flex-shrink-0 font-semibold text-accent">✓</span>
                      <p className="text-sm leading-7 text-muted">
                        <span className="font-semibold text-foreground">{title}</span>
                        {" — "}{body}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── S7: FOUNDING CLIENT PRICING ── */}
        <section className="border-t border-line py-18 sm:py-24">
          <div className="section-shell">
            <div className="mx-auto max-w-xl">
              <div className="relative overflow-hidden rounded-[2rem] border border-accent/40 bg-[#0f1209] p-8 text-center shadow-[0_0_80px_rgba(166,146,115,0.14)] sm:p-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(166,146,115,0.07),transparent_60%)]" />
                <div className="relative">
                  <p className="section-label">Founding Client Price</p>
                  <p className="mt-6 font-display text-8xl font-semibold leading-none text-accent sm:text-9xl">
                    39,000
                  </p>
                  <p className="mt-2 text-xl font-semibold text-muted">NPR</p>
                  <div className="mt-8 space-y-3 border-t border-line pt-8 text-left text-sm text-muted">
                    <p>I am taking on my first 3 external clients now. They pay less than full price because they are trusting the system before I have public case studies to point to.</p>
                    <p>That trade is fair. They get the lowest price I will ever charge. I get the proof that lets me charge full rate going forward.</p>
                    <p className="font-semibold text-foreground">After these 3 spots are filled, Ground Zero becomes 79,000 NPR and stays there.</p>
                  </div>
                  <p className="mt-6 inline-block rounded-full border border-accent/40 px-5 py-2 text-sm font-semibold text-accent">
                    3 spots. First come, first served.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── S8: FOUNDING CLIENT BONUSES ── */}
        <section className="border-t border-line py-18 sm:py-24">
          <div className="section-shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-label">Founding Client Bonuses</p>
              <h2 className="mt-4 section-heading">What Founding Clients Get — On Top of Everything Above.</h2>
            </div>
            <div className="mt-14 grid gap-5 sm:grid-cols-2">
              {(
                [
                  {
                    num: "01",
                    title: '"Price Kati Ho?" Objection Handler',
                    body: "Exact WhatsApp responses for when a lead asks your price and goes quiet. Word-for-word. Built for the Nepali coaching market.",
                  },
                  {
                    num: "02",
                    title: "90-Day Content Topic Bank",
                    body: "Three months of \"what do I post today?\" — answered before you even ask. 90 post ideas mapped to your niche and your pillars.",
                  },
                  {
                    num: "03",
                    title: "First Ad Creative Done For You",
                    body: "Your first ad&apos;s hook, copy, visual direction — ready before launch. You approve, we go live.",
                  },
                  {
                    num: "04",
                    title: "Where You Win",
                    body: "A breakdown of what the top fitness coaches in Nepal are doing, what they are missing, and where your positioning beats them. Specific. Actionable.",
                  },
                ] as const
              ).map((b) => (
                <article key={b.num} className="glass-panel flex gap-5 rounded-[1.5rem] p-6 sm:p-7">
                  <span className="flex-shrink-0 font-display text-4xl font-semibold leading-none text-accent/40">
                    {b.num}
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{b.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted">{b.body}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-12 text-center">
              <BookCallButton />
            </div>
          </div>
        </section>

        {/* ── S11: OBJECTIONS ── */}
        <section className="border-t border-line py-18 sm:py-24">
          <div className="section-shell">
            <div className="mx-auto max-w-2xl">
              <p className="section-label">You Are Probably Thinking —</p>
              <h2 className="mt-4 section-heading">Let&apos;s Address It.</h2>
              <div className="mt-10 space-y-3">
                {(
                  [
                    {
                      q: "39,000 NPR is still a real number. How do I know this will work?",
                      a: "Fair question. Here is the deal: three months of full active work — content strategy, Meta Ads, weekly check-ins, monthly audit. If qualified leads have not come in, the fourth month is on me. Free. And if month four still needs more work, we talk and we keep going together. Qualified lead = a real person from your niche, interested in your offer, who replied on WhatsApp. I am a solo operator. My name is my guarantee.",
                    },
                    {
                      q: "I don't need a website — Instagram is enough.",
                      a: "That is true — if your Instagram already has a working conversion system. But ask yourself: when someone asks your price and disappears, where did they go? Was there a clear next step? A place to learn more before they messaged? Your website is your digital office. Serious clients check it before they commit. Without it, they leave before they reach you.",
                    },
                    {
                      q: "I tried ads before and nothing happened.",
                      a: "Boosting a post is not running ads. They are two different things. When you boost, Meta shows your content to people based on engagement — not buying intent. A real conversion campaign targets a specific audience with a specific objective, sending traffic to a specific landing page. That is what we build here.",
                    },
                    {
                      q: "What if I am not the right fit?",
                      a: "This is not for you if: you have zero audience yet (we need something to work with), you want overnight results (90 days is the floor), or you want me to do the coaching part for you (you're the coach — I build the business around it). If any of those is you, save your 39,000 NPR. Come back when the timing is right.",
                    },
                  ] as const
                ).map((item, i) => (
                  <details key={i} className="group glass-panel overflow-hidden rounded-2xl">
                    <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                      <div className="flex items-center justify-between gap-4 px-6 py-5">
                        <span className="text-base font-semibold text-foreground">{item.q}</span>
                        <span className="shrink-0 text-xl text-accent transition-transform duration-200 group-open:rotate-45">
                          +
                        </span>
                      </div>
                    </summary>
                    <div className="border-t border-line px-6 pb-6 pt-5">
                      <p className="text-sm leading-7 text-muted">{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── S12: THE GUARANTEE ── */}
        <section className="border-t border-line py-18 sm:py-24">
          <div className="section-shell">
            <div className="mx-auto max-w-2xl">
              <div className="relative overflow-hidden rounded-[2rem] border-2 border-accent/30 bg-[#0c0f0b] p-8 sm:p-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(166,146,115,0.08),transparent_50%)]" />
                <div className="relative">
                  <p className="section-label">The Guarantee</p>
                  <h2 className="mt-4 font-display text-4xl font-semibold text-foreground sm:text-5xl">
                    Your Risk Is Zero. Here Is Why.
                  </h2>
                  <div className="mt-8 space-y-6">
                    {(
                      [
                        ["The Promise", "Three months of full system work. If qualified leads do not come in by month three, the fourth month is free. No questions."],
                        ["No Lock-In", "No contract after Ground Zero. Continue if you want to. Walk away if you don't. Everything built stays with you."],
                        ["Full Focus", "I take on 3 active clients maximum. When those spots are filled, I stop taking new work until existing clients are getting results. 3 clients. Full attention. Every time."],
                      ] as [string, string][]
                    ).map(([title, body]) => (
                      <div key={title} className="flex gap-4">
                        <span className="mt-0.5 flex-shrink-0 text-accent">✓</span>
                        <div>
                          <p className="font-semibold text-foreground">{title}</p>
                          <p className="mt-1 text-sm leading-7 text-muted">{body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── S13: HONEST SCARCITY ── */}
        <section className="border-t border-accent/20 bg-[#0a0d09] py-18 sm:py-24">
          <div className="section-shell">
            <div className="mx-auto max-w-2xl text-center">
              <p className="section-label">Honest —</p>
              <h2 className="mt-4 section-heading">I Do Not Offer This to Everyone.</h2>
              <p className="mt-6 body-copy">
                Three spots. Because more than three means divided attention — and I do not do divided attention.
              </p>
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-accent/50 bg-[#0f1209] p-6 shadow-[0_0_40px_rgba(166,146,115,0.1)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Founding Price</p>
                  <p className="mt-2 font-display text-2xl font-semibold text-accent">39,000 NPR</p>
                  <p className="mt-1 text-xs text-muted">3 spots open now</p>
                </div>
                <div className="glass-panel rounded-2xl p-6 opacity-70">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Full Price</p>
                  <p className="mt-2 font-display text-2xl font-semibold text-foreground">79,000 NPR</p>
                  <p className="mt-1 text-xs text-muted">After 3 spots fill</p>
                </div>
                <div className="glass-panel rounded-2xl p-6 opacity-60">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Or</p>
                  <p className="mt-2 font-display text-2xl font-semibold text-foreground">Stay the same</p>
                  <p className="mt-1 text-xs text-muted">Keep doing what you&apos;re doing</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── S14: FINAL CTA ── */}
        <section className="border-t border-line bg-[#050704] py-24 sm:py-32">
          <div className="section-shell">
            <div className="mx-auto max-w-3xl text-center">
              <p className="section-label">One Thing. Right Now.</p>
              <h2 className="mt-6 font-display text-5xl font-semibold leading-none text-foreground sm:text-6xl lg:text-7xl">
                Book Your Free 30-Minute Strategy Call.
              </h2>
              <div className="mx-auto mt-8 max-w-2xl space-y-4 body-copy">
                <p>I will look at your page, your content, your current offer. I will tell you exactly what is stopping more clients from coming in.</p>
                <p className="font-semibold text-foreground">No pitch. No pressure. If the system makes sense for where you are — we move forward. If not, you walk away with clarity. Nothing to lose.</p>
                <p>Let&apos;s talk for 30 minutes. You decide after.</p>
              </div>
              <div className="mt-12">
                <a
                  href={WA_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full rounded-full bg-accent px-10 py-5 text-lg font-semibold text-[#17150f] shadow-[0_22px_60px_rgba(166,146,115,0.28)] hover:bg-[#b6a180] sm:w-auto"
                >
                  Book My Free 30-Min Strategy Call
                </a>
              </div>
              <p className="mx-auto mt-8 max-w-2xl text-sm text-muted">Ground Zero is where we start. What comes after — Mission Active, Total Command, walking away — is your call at month 3. Today is just about whether the foundation is right.</p>
            </div>
          </div>
        </section>

      </main>

      {/* ── STICKY MOBILE CTA ── */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-accent/20 bg-[#0b0d0a]/96 p-3 backdrop-blur-xl md:hidden">
        <a
          href={WA_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-[#17150f]"
        >
          Book My Free 30-Min Strategy Call →
        </a>
      </div>

      {/* ── FOOTER ── */}
      <footer className="border-t border-line py-8">
        <div className="section-shell text-center text-sm text-muted">
          &copy; 2026 Yogesh Kaphle | yogeshkaphle.com &mdash; Fitness Inside Out. Business Built In.
        </div>
      </footer>
    </>
  );
}
