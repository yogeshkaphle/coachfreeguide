"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type FormValues = {
  name: string;
  whatsapp: string;
  email: string;
  website: string;
  struggle: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  whatsapp: "",
  email: "",
  website: "",
  struggle: "",
  message: "",
};

const struggleOptions = [
  "I post regularly but nobody inquires about coaching",
  "People ask questions but never become paying clients",
  "I don't know what content is actually working",
  "My page is growing but my income isn't",
  "I tried boosting posts but wasted money and got nothing",
  "I'm not sure where to even start",
  "Something else",
];

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validate(values: FormValues) {
  const errors: FormErrors = {};

  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.whatsapp.trim()) errors.whatsapp = "Please enter your WhatsApp number.";
  if (!values.email.trim()) errors.email = "Please enter your email address.";
  else if (!validateEmail(values.email)) errors.email = "Please enter a valid email address.";
  if (!values.struggle.trim()) errors.struggle = "Please choose your biggest struggle.";

  return errors;
}

type CTAFormProps = {
  ctaText: string;
};

export default function CTAForm({ ctaText }: CTAFormProps) {
  const router = useRouter();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    router.push("/thank-you");
  };

  const updateField = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));

    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const fieldClassName =
    "mt-2 w-full rounded-2xl border border-line bg-[#0c0f0b] px-4 py-3.5 text-sm text-foreground outline-none placeholder:text-[#8b8578] focus:border-accent focus:ring-2 focus:ring-[#a6927330]";

  const errorClassName = "mt-2 text-sm text-danger";

  return (
    <div
      id="lead-form"
      className="glass-panel rounded-[2rem] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:p-8"
    >
      <div className="mb-6">
        <p className="section-label">Get The Guide</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
          Where should I send it?
        </h2>
      </div>

      <form className="space-y-4" noValidate onSubmit={handleSubmit}>
        <div>
          <label className="text-sm font-medium text-[#f4eddf]" htmlFor="name">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your full name"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            className={fieldClassName}
          />
          {errors.name ? <p className={errorClassName}>{errors.name}</p> : null}
        </div>

        <div>
          <label className="text-sm font-medium text-[#f4eddf]" htmlFor="whatsapp">
            WhatsApp Number
          </label>
          <input
            id="whatsapp"
            type="tel"
            placeholder="98XXXXXXXX"
            value={values.whatsapp}
            onChange={(event) => updateField("whatsapp", event.target.value)}
            className={fieldClassName}
          />
          {errors.whatsapp ? <p className={errorClassName}>{errors.whatsapp}</p> : null}
        </div>

        <div>
          <label className="text-sm font-medium text-[#f4eddf]" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your active email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            className={fieldClassName}
          />
          {errors.email ? <p className={errorClassName}>{errors.email}</p> : null}
        </div>

        <div>
          <label className="text-sm font-medium text-[#f4eddf]" htmlFor="website">
            Website/Social Media page link
          </label>
          <input
            id="website"
            type="url"
            placeholder="Optional"
            value={values.website}
            onChange={(event) => updateField("website", event.target.value)}
            className={fieldClassName}
          />
        </div>

        <div>
          <label className="text-sm font-medium text-[#f4eddf]" htmlFor="struggle">
            What&apos;s your biggest struggle right now?
          </label>
          <select
            id="struggle"
            value={values.struggle}
            onChange={(event) => updateField("struggle", event.target.value)}
            className={fieldClassName}
          >
            <option value="">Select your answer</option>
            {struggleOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.struggle ? <p className={errorClassName}>{errors.struggle}</p> : null}
        </div>

        <div>
          <label className="text-sm font-medium text-[#f4eddf]" htmlFor="message">
            Anything you want to say
          </label>
          <textarea
            id="message"
            placeholder="Optional"
            value={values.message}
            onChange={(event) => updateField("message", event.target.value)}
            className={`${fieldClassName} min-h-28 resize-none`}
          />
        </div>

        <div className="space-y-3 pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center rounded-full bg-accent px-5 py-3.5 text-sm font-semibold text-[#17150f] shadow-[0_18px_40px_rgba(166,146,115,0.2)] hover:bg-[#b6a180] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : ctaText}
          </button>
          <p className="text-sm text-muted">We respect your privacy. No spam.</p>
          <p className="text-sm text-[#ddd1be]">
            I&apos;ll also follow up on WhatsApp personally - not a bot.
          </p>
        </div>
      </form>
    </div>
  );
}
