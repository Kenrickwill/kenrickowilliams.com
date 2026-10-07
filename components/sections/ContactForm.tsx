"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    try {
      const res = await fetch("https://formspree.io/f/xbdqeowg", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-confirmation">
        <span>Message sent</span>
        <h3>Thanks — I&apos;ll be in touch.</h3>
        <p>
          I typically respond within a day or two. If it&apos;s urgent, feel free
          to reach out directly at kenrickwilliamspro@gmail.com.
        </p>
        <button onClick={() => setStatus("idle")}>Send another message</button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {/* Honeypot */}
      <input className="form-trap" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />

      <label>
        <span>First name</span>
        <input name="first-name" type="text" autoComplete="given-name" required placeholder="Jane" />
      </label>
      <label>
        <span>Last name</span>
        <input name="last-name" type="text" autoComplete="family-name" required placeholder="Smith" />
      </label>
      <label className="email-field">
        <span>Email</span>
        <input name="email" type="email" autoComplete="email" required placeholder="jane@company.com" />
      </label>
      <label className="topic-field">
        <span>What&apos;s this about?</span>
        <select name="topic" defaultValue="" required>
          <option value="" disabled>Select a topic</option>
          <option>Security consulting</option>
          <option>AI or automation project</option>
          <option>Speaking, podcast, or panel</option>
          <option>Advisory or partnership</option>
          <option>Something else</option>
        </select>
      </label>
      <label className="message-field">
        <span>Message</span>
        <textarea name="message" rows={4} required placeholder="Tell me what you have in mind..." />
      </label>

      {status === "error" && (
        <p className="form-error">Something went wrong — please try again or email me directly.</p>
      )}

      <button className="submit-button" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : <>Send message <span>↗</span></>}
      </button>
      <p className="form-note">Sent securely via Formspree. No spam, ever.</p>
    </form>
  );
}
