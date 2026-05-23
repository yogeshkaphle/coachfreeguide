// TODO: Install Meta Pixel base code site-wide in app/layout.tsx before launching ads
// TODO: Once installed, add fbq('track', 'Lead'); inside useEffect on this page

import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Welcome — Your 5-Step System Is Ready",
  description:
    "Your free system is here. Watch the video, then check WhatsApp for the mind map and worksheet.",
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen py-8 sm:py-12">
      {/* Logo only — no nav links */}
      <div className="section-shell">
        <div className="mb-10 sm:mb-14">
          <Image
            src="/yogesh-kaphle-logo.png"
            alt="Yogesh Kaphle"
            width={208}
            height={64}
            priority
            className="h-10 w-auto sm:h-14"
          />
        </div>

        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label">You&apos;re In</p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-none text-foreground sm:text-6xl lg:text-7xl">
            Welcome — Your 5-Step System Is Ready
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted sm:text-xl">
            Your Mind Map and Worksheet are ready below — I&apos;ll also follow up on WhatsApp personally.
          </p>
        </div>

        {/* Video — 16:9 responsive Vimeo embed, max 900px centered */}
        <div className="mx-auto mt-10 max-w-[900px] sm:mt-12">
          <div style={{ padding: "56.25% 0 0 0", position: "relative", borderRadius: "12px", overflow: "hidden" }}>
            <iframe
              src="https://player.vimeo.com/video/1194999704?h=0&title=0&byline=0&portrait=0&controls=1&dnt=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              title="5 Steps to turn Viewers into Paying Clients"
            />
          </div>
        </div>

        {/* Kit Links */}
        <div className="mx-auto mt-10 flex flex-col items-center gap-4 sm:mt-12 sm:flex-row sm:justify-center">
          <a
            href="/worksheet"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-full bg-[#3D4A2E] px-8 py-4 text-center text-base font-semibold text-white hover:opacity-90 sm:w-fit sm:px-10"
          >
            Open the Worksheet →
          </a>
          <a
            href="/mindmap"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-full border-[1.5px] border-[#C2A96A] bg-transparent px-8 py-4 text-center text-base font-semibold text-[#C2A96A] hover:bg-[#C2A96A]/10 sm:w-fit sm:px-10"
          >
            View the Mind Map →
          </a>
        </div>

        {/* WhatsApp CTA */}
        <div className="mx-auto mt-14 max-w-2xl text-center sm:mt-20">
          <h2 className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
            Stuck on any step? Message me.
          </h2>
          <p className="mt-5 text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Watch the video, fill the worksheet, and if you want a real coach-to-coach conversation about your specific situation — send your filled worksheet to me on WhatsApp. I go through every one personally. No bot. No pitch. Just an honest answer on what I&apos;d fix first.
          </p>
          <a
            href="https://wa.me/85362830217?text=Hi%20Yogesh%2C%20I%20just%20got%20the%205-Step%20Coach%20System%20and%20wanted%20to%20talk"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block w-full rounded-full bg-accent px-8 py-4 text-base font-semibold text-[#17150f] shadow-[0_22px_50px_rgba(166,146,115,0.22)] hover:bg-[#b6a180] sm:mx-auto sm:w-fit sm:px-10"
          >
            Message me on WhatsApp →
          </a>
          <p className="mt-4 text-sm text-muted">
            I usually reply within a few hours.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 pb-8 text-center text-xs text-muted sm:mt-24">
        © 2026 Yogesh Kaphle | yogeshkaphle.com — Fitness Inside Out. Business Built In.
      </footer>
    </main>
  );
}
