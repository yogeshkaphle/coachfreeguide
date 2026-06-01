"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const FORMSPREE_URL = "https://formspree.io/f/mwvzwljk";

type CTAFormProps = { ctaText: string };

export default function CTAForm({ ctaText }: CTAFormProps) {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [struggle, setStruggle] = useState("");
  const [struggleError, setStruggleError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!struggle) {
      setStruggleError("Please choose your biggest struggle.");
      return;
    }
    setStruggleError("");
    setSubmitting(true);
    try {
      await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ firstName, email, whatsapp, struggle }),
      });
    } catch {
      // silent — redirect regardless
    }
    router.push("/thank-you");
  };

  return (
    <div
      id="lead-form"
      className="glass-panel rounded-[2rem] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:p-8 lg:h-full"
    >
      <div className="mb-6">
        <p className="section-label">Get The System</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
          Where should I send it?
        </h2>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-[15px]">
          <p className="field-label">First Name</p>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your first name"
            required
            className="form-input"
          />
        </div>

        <div className="mb-[15px]">
          <p className="field-label">Email Address</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your active email"
            required
            className="form-input"
          />
        </div>

        <div className="mb-[15px]">
          <p className="field-label">WhatsApp Number</p>
          <input
            type="text"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            placeholder="98XXXXXXXX"
            required
            className="form-input"
          />
        </div>

        <div className="struggle-field">
          <label className="struggle-label" htmlFor="struggle">
            What&apos;s your biggest struggle right now?
          </label>
          <select
            id="struggle"
            value={struggle}
            onChange={(e) => {
              setStruggle(e.target.value);
              setStruggleError("");
            }}
            className="struggle-select"
          >
            <option value="" disabled>Select one...</option>
            <option value="I post regularly but nobody inquires about coaching">I post regularly but nobody inquires about coaching</option>
            <option value="People ask questions but never become paying clients">People ask questions but never become paying clients</option>
            <option value="I don't know what content is actually working">I don&apos;t know what content is actually working</option>
            <option value="My page is growing but my income isn't">My page is growing but my income isn&apos;t</option>
            <option value="I tried boosting posts but wasted money and got nothing">I tried boosting posts but wasted money and got nothing</option>
            <option value="Something else">Something else</option>
          </select>
          {struggleError && <p className="struggle-error">{struggleError}</p>}
        </div>

        <div className="mt-4">
          <button type="submit" disabled={submitting} className="form-submit">
            {submitting ? "Sending…" : ctaText}
          </button>
        </div>
      </form>

      <div className="mt-3 space-y-1">
        <p className="text-sm text-muted">We respect your privacy. No spam.</p>
        <p className="text-sm text-[#ddd1be]">
          I&apos;ll also follow up on WhatsApp personally - not a bot.
        </p>
      </div>
    </div>
  );
}
