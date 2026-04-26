import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Your request is in. Check your email and WhatsApp for the next steps from Yogesh Kaphle.",
};

export default function ThankYouPage() {
  return (
    <main className="relative flex min-h-screen items-center py-10">
      <div className="section-shell">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-line bg-surface p-8 text-center shadow-[0_28px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-12">
          <p className="section-label">You&apos;re In</p>
          <h1 className="mt-4 font-display text-5xl font-semibold text-foreground sm:text-6xl">
            Your request is on the way.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted sm:text-xl">
            Check your email for the checklist, then keep an eye on WhatsApp. I&apos;ll
            follow up personally to see what you found and whether the gaps make sense
            for your page.
          </p>

          <div className="mt-8 rounded-[1.6rem] border border-accent/20 bg-[#0d100c] p-6 text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              Next Steps
            </p>
            <ul className="mt-4 space-y-3 text-base leading-7 text-[#e6dccb]">
              <li>Check your inbox for the free PDF checklist.</li>
              <li>Open WhatsApp later for a personal follow-up.</li>
              <li>Go through the questions honestly and note the gaps you notice.</li>
            </ul>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-[#17150f] hover:bg-[#b6a180]"
            >
              Back to the Guide Page
            </Link>
            <a
              href="https://yogeshkaphle.com"
              className="rounded-full border border-accent/35 px-6 py-3 text-sm font-semibold text-[#efe4d2] hover:border-accent/65 hover:bg-accent/10"
            >
              Visit yogeshkaphle.com
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
