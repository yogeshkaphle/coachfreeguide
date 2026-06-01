"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const FORM_ID = "6a15328a32a8cfa107df9938";
const FORMSPREE_URL = "https://formspree.io/f/mwvzwljk";

type CTAFormProps = { ctaText: string };

export default function CTAForm({ ctaText }: CTAFormProps) {
  const router = useRouter();
  const [struggle, setStruggle] = useState("");
  const [struggleError, setStruggleError] = useState("");
  const struggleRef = useRef(struggle);

  useEffect(() => { struggleRef.current = struggle; }, [struggle]);

  // Initialize Flodesk SDK via direct script injection so the form:handle
  // call is queued BEFORE universal.js loads — avoids Next.js onLoad timing issues.
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as any;
    win.FlodeskObject = "fd";
    win.fd = win.fd || function () { (win.fd.q = win.fd.q || []).push(arguments); };
    win.fd("form:handle", { formId: FORM_ID, rootEl: `.ff-${FORM_ID}` });
    if (!document.querySelector('script[src*="assets.flodesk.com/universal"]')) {
      const s = document.createElement("script");
      s.src = "https://assets.flodesk.com/universal.js";
      s.async = true;
      document.head.appendChild(s);
    }
  }, []);

  useEffect(() => {
    const formEl = document.querySelector<HTMLFormElement>('[data-ff-el="form"]');
    const rootEl = document.querySelector(`[data-ff-el="root"].ff-${FORM_ID}`);
    if (!formEl || !rootEl) return;

    const onSubmit = (e: Event) => {
      if (!struggleRef.current) {
        setStruggleError("Please choose your biggest struggle.");
        e.preventDefault();
        return;
      }
      setStruggleError("");

      const get = (name: string) =>
        (formEl.querySelector(`[name="${name}"]`) as HTMLInputElement)?.value ?? "";
      sessionStorage.setItem(
        "leadFormData",
        JSON.stringify({
          firstName: get("firstName"),
          email: get("email"),
          whatsapp: get("fields.whatsappNumber"),
          struggle: struggleRef.current,
        })
      );
    };

    formEl.addEventListener("submit", onSubmit);

    const handleSuccess = async () => {
      const raw = sessionStorage.getItem("leadFormData");
      if (raw) {
        try {
          await fetch(FORMSPREE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: raw,
          });
        } catch {
          // silent — Flodesk already captured the lead
        }
      }
      await new Promise((r) => setTimeout(r, 1500));
      sessionStorage.removeItem("leadFormData");
      router.push("/thank-you");
    };

    const stageObserver = new MutationObserver(() => {
      if (rootEl.getAttribute("data-ff-stage") === "success") {
        stageObserver.disconnect();
        handleSuccess();
      }
    });
    stageObserver.observe(rootEl, { attributes: true, attributeFilter: ["data-ff-stage"] });

    // When Flodesk injects the Cloudflare Turnstile widget, label it and scroll it into view
    let turnstileLabelInjected = false;
    const turnstileObserver = new MutationObserver((mutations) => {
      if (turnstileLabelInjected) return;
      for (const mutation of mutations) {
        for (const node of Array.from(mutation.addedNodes)) {
          if (node.nodeType !== Node.ELEMENT_NODE) continue;
          const el = node as Element;
          let target: Element | null = null;
          if (el.classList.contains("cf-turnstile")) {
            target = el;
          } else if (
            el.tagName === "IFRAME" &&
            (el as HTMLIFrameElement).getAttribute("src")?.includes("challenges.cloudflare.com")
          ) {
            target = el;
          } else {
            target =
              el.querySelector(".cf-turnstile") ||
              el.querySelector('iframe[src*="challenges.cloudflare.com"]');
          }
          if (target) {
            turnstileLabelInjected = true;
            const label = document.createElement("p");
            label.className = "ff-turnstile-label";
            label.textContent = "Last step — tick the box below to get your kit ✓";
            target.parentElement?.insertBefore(label, target);
            setTimeout(() => {
              label.scrollIntoView({ behavior: "smooth", block: "center" });
            }, 150);
            turnstileObserver.disconnect();
            return;
          }
        }
      }
    });
    turnstileObserver.observe(rootEl, { childList: true, subtree: true });

    return () => {
      formEl.removeEventListener("submit", onSubmit);
      stageObserver.disconnect();
      turnstileObserver.disconnect();
    };
  }, [router]);

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

      {/* ── Flodesk root ── exact structure required by Flodesk JS ── */}
      <div
        className={`ff-${FORM_ID}`}
        data-ff-el="root"
        data-ff-version="3"
        data-ff-type="inline"
        data-ff-name="inlineNoImage"
        data-ff-stage="default"
      >
        <div
          data-ff-el="config"
          data-ff-config="eyJ0cmlnZ2VyIjp7Im1vZGUiOiJpbW1lZGlhdGVseSIsInZhbHVlIjowfSwib25TdWNjZXNzIjp7Im1vZGUiOiJtZXNzYWdlIiwibWVzc2FnZSI6IjxkaXYgZGF0YS1wYXJhZ3JhcGg9XCJ0cnVlXCI+R290IGl0ISBDaGVjayB5b3VyIGluYm94IGZvciBhbiBlbWFpbCB0byBjb25maXJtIHlvdXIgc3Vic2NyaXB0aW9uLjwvZGl2PiIsInJlZGlyZWN0VXJsIjoiIn0sImNvaSI6dHJ1ZSwic2hvd0ZvclJldHVyblZpc2l0b3JzIjp0cnVlLCJub3RpZmljYXRpb24iOnRydWUsImdkcHIiOnsiYWNjZXB0c01hcmtldGluZyI6ZmFsc2UsInByaXZhY3lQb2xpY3kiOnsiZW5hYmxlZCI6ZmFsc2UsIm1hbmRhdG9yeSI6ZmFsc2V9fSwidHJhY2tpbmdDb25maWciOnsibWV0YVBpeGVsSWQiOiIiLCJjb29raWVCYW5uZXJFbmFibGVkIjpmYWxzZSwiZ29vZ2xlQW5hbHl0aWNzSWQiOiIifX0="
          style={{ display: "none" }}
        />
        <div className={`ff-${FORM_ID}__container`}>
          <div className={`ff-${FORM_ID}__wrapper`}>
            <form
              className={`ff-${FORM_ID}__form`}
              action={`https://form.flodesk.com/forms/${FORM_ID}/submit`}
              method="post"
              data-ff-el="form"
            >
              {/* Title & subtitle hidden via CSS — we use outer heading instead */}
              <div className={`ff-${FORM_ID}__title`}>
                <div style={{ wordBreak: "break-word" }}>
                  <div data-paragraph="true"><i><strong>The 5-Step Coach System</strong></i></div>
                </div>
              </div>
              <div className={`ff-${FORM_ID}__subtitle`}>
                <div style={{ wordBreak: "break-word" }}>
                  <div data-paragraph="true"><span style={{ fontWeight: 700 }}>From Viewer to Paying Client</span></div>
                  <div data-paragraph="true">Start building the system that brings clients in - even if you have 100 followers.</div>
                </div>
              </div>

              <div className={`ff-${FORM_ID}__content fd-form-content`} data-ff-el="content">
                <div className={`ff-${FORM_ID}__fields`} data-ff-el="fields">

                  {/* First name */}
                  <div className={`ff-${FORM_ID}__field fd-form-group`}>
                    <p className="field-label">First Name</p>
                    <input
                      id={`ff-${FORM_ID}-firstName`}
                      className={`ff-${FORM_ID}__control fd-form-control`}
                      type="text"
                      maxLength={255}
                      name="firstName"
                      placeholder="Enter your first name"
                      data-ff-tab="firstName::email"
                      required
                    />
                    <label
                      htmlFor={`ff-${FORM_ID}-firstName`}
                      className={`ff-${FORM_ID}__label fd-form-label`}
                    >
                      <div><div>First name</div></div>
                    </label>
                  </div>

                  {/* Email */}
                  <div className={`ff-${FORM_ID}__field fd-form-group`}>
                    <p className="field-label">Email Address</p>
                    <input
                      id={`ff-${FORM_ID}-email`}
                      className={`ff-${FORM_ID}__control fd-form-control`}
                      type="text"
                      maxLength={255}
                      name="email"
                      placeholder="Enter your active email"
                      data-ff-tab="email:firstName:fields.whatsappNumber"
                      required
                    />
                    <label
                      htmlFor={`ff-${FORM_ID}-email`}
                      className={`ff-${FORM_ID}__label fd-form-label`}
                    >
                      <div><div>Email address</div></div>
                    </label>
                  </div>

                  {/* WhatsApp */}
                  <div className={`ff-${FORM_ID}__field fd-form-group`}>
                    <p className="field-label">WhatsApp Number</p>
                    <input
                      id={`ff-${FORM_ID}-PF5MExzvGD`}
                      className={`ff-${FORM_ID}__control fd-form-control`}
                      type="text"
                      maxLength={255}
                      name="fields.whatsappNumber"
                      placeholder="98XXXXXXXX"
                      data-ff-tab="fields.whatsappNumber:email:submit"
                      required
                    />
                    <label
                      htmlFor={`ff-${FORM_ID}-PF5MExzvGD`}
                      className={`ff-${FORM_ID}__label fd-form-label`}
                    >
                      <div><div>Whatsapp Number</div></div>
                    </label>
                  </div>

                  {/* Honeypot — must stay exactly as Flodesk provided */}
                  <input
                    type="text"
                    maxLength={255}
                    name="confirm_email_address"
                    style={{ display: "none" }}
                  />
                </div>

                {/* Struggle dropdown — React-controlled, Formspree only */}
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

                <div className={`ff-${FORM_ID}__footer`} data-ff-el="footer">
                  <button
                    type="submit"
                    className={`ff-${FORM_ID}__button fd-btn`}
                    data-ff-el="submit"
                    data-ff-tab="submit"
                  >
                    <div><span data-draw-element="editable">{ctaText}</span></div>
                  </button>
                </div>
              </div>

              <div className={`ff-${FORM_ID}__success fd-form-success`} data-ff-el="success">
                <div className={`ff-${FORM_ID}__success-message`}>
                  <div><div>
                    <div data-paragraph="true">Got it! Check your inbox for an email to confirm your subscription.</div>
                  </div></div>
                </div>
              </div>
              <div className={`ff-${FORM_ID}__error fd-form-error`} data-ff-el="error" />
            </form>
          </div>
        </div>
      </div>

      <div className="mt-3 space-y-1">
        <p className="text-sm text-muted">We respect your privacy. No spam.</p>
        <p className="text-sm text-[#ddd1be]">
          I&apos;ll also follow up on WhatsApp personally - not a bot.
        </p>
      </div>

    </div>
  );
}
