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
          &copy; 2026 Yogesh Kaphle &mdash; Certified Fitness Coach and Digital Marketer. Built for Fitness Coaches in Nepal. | yogeshkaphle.com
        </div>
      </footer>
    </main>
  );
}
