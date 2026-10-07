"use client";

import { useEffect, useRef, useState } from "react";

const topics = [
  "AI Receptionist",
  "Lead Follow-Up Automation",
  "Appointment Automation",
  "CRM Integration",
  "Full System Build",
  "Something Else",
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function CTA() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    business: "",
    topic: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{
        position: "relative",
        zIndex: 1,
        paddingTop: "120px",
        paddingBottom: "0",
      }}
    >
      {/* Top glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          background: "radial-gradient(ellipse at top, rgba(59,130,246,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container">
        {/* Pre-footer CTA block */}
        <div
          ref={ref}
          style={{
            padding: "80px",
            background: "rgba(13,13,24,0.8)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "24px",
            backdropFilter: "blur(16px)",
            marginBottom: "0",
            position: "relative",
            overflow: "hidden",
          }}
          className="cta-inner"
        >
          {/* Inner glow */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "-100px",
              right: "-100px",
              width: "400px",
              height: "400px",
              background: "radial-gradient(ellipse, rgba(34,211,238,0.06) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "start",
              position: "relative",
            }}
            className="cta-grid"
          >
            {/* Left — copy */}
            <div
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(24px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
              }}
            >
              <div className="label-chip active" style={{ marginBottom: "24px" }}>
                <span className="status-dot" style={{ width: "6px", height: "6px" }} />
                <span>Taking new clients</span>
              </div>

              <h2
                style={{
                  fontSize: "clamp(32px, 4vw, 52px)",
                  fontWeight: "600",
                  letterSpacing: "-0.03em",
                  lineHeight: "1.08",
                  color: "var(--color-text-primary)",
                  marginBottom: "24px",
                }}
              >
                Ready to build
                <br />
                smarter business
                <br />
                <span
                  style={{
                    background: "linear-gradient(90deg, #3b82f6, #22d3ee)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  systems?
                </span>
              </h2>

              <p
                style={{
                  fontSize: "16px",
                  color: "var(--color-text-secondary)",
                  lineHeight: "1.7",
                  marginBottom: "36px",
                  maxWidth: "400px",
                }}
              >
                The strategy call is free and takes 30 minutes. We map out exactly
                which automations make the most sense for your business and what
                the impact would look like.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  "No technical knowledge required from you",
                  "Systems built and managed for you",
                  "Security-first architecture on every build",
                ].map((point) => (
                  <div
                    key={point}
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                      fontSize: "14px",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      style={{ flexShrink: 0 }}
                    >
                      <circle cx="8" cy="8" r="7" stroke="rgba(16,185,129,0.3)" />
                      <path
                        d="M5 8l2 2 4-4"
                        stroke="#10b981"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {point}
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: "40px",
                  paddingTop: "32px",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <a
                  href="mailto:kenrickwilliamspro@gmail.com"
                  style={{
                    fontSize: "13px",
                    color: "var(--color-text-secondary)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "11px" }}>EMAIL</span>
                  kenrickwilliamspro@gmail.com
                </a>
                <a
                  href="tel:6788625027"
                  style={{
                    fontSize: "13px",
                    color: "var(--color-text-secondary)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "11px" }}>PHONE</span>
                  (678) 862-5027
                </a>
              </div>
            </div>

            {/* Right — form */}
            <div
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(24px)",
                transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
              }}
            >
              {submitted ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    minHeight: "300px",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "rgba(16,185,129,0.12)",
                      border: "1px solid rgba(16,185,129,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M4 10l4 4 8-8"
                        stroke="#10b981"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    Message received.
                  </h3>
                  <p style={{ fontSize: "14px", color: "var(--color-text-secondary)" }}>
                    I&apos;ll be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{ display: "flex", flexDirection: "column", gap: "14px" }}
                >
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    <FormField
                      label="First Name"
                      value={form.firstName}
                      onChange={(v) => setForm({ ...form, firstName: v })}
                      required
                    />
                    <FormField
                      label="Last Name"
                      value={form.lastName}
                      onChange={(v) => setForm({ ...form, lastName: v })}
                      required
                    />
                  </div>
                  <FormField
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    required
                  />
                  <FormField
                    label="Business Name"
                    value={form.business}
                    onChange={(v) => setForm({ ...form, business: v })}
                  />

                  {/* Topic select */}
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "11px",
                        color: "var(--color-text-muted)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        fontFamily: "var(--font-mono)",
                        marginBottom: "6px",
                      }}
                    >
                      I&apos;m interested in
                    </label>
                    <select
                      value={form.topic}
                      onChange={(e) => setForm({ ...form, topic: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "8px",
                        color: form.topic ? "var(--color-text-primary)" : "var(--color-text-muted)",
                        fontSize: "14px",
                        outline: "none",
                        cursor: "pointer",
                      }}
                    >
                      <option value="">Select a focus area...</option>
                      {topics.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "11px",
                        color: "var(--color-text-muted)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        fontFamily: "var(--font-mono)",
                        marginBottom: "6px",
                      }}
                    >
                      Tell me about your business
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={4}
                      placeholder="What manual processes are slowing you down most?"
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: "8px",
                        color: "var(--color-text-primary)",
                        fontSize: "14px",
                        outline: "none",
                        resize: "none",
                        lineHeight: "1.6",
                        fontFamily: "inherit",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      padding: "13px 24px",
                      background: "linear-gradient(135deg, #3b82f6, #2563eb)",
                      border: "none",
                      borderRadius: "10px",
                      color: "#fff",
                      fontSize: "14px",
                      fontWeight: "500",
                      cursor: "pointer",
                      letterSpacing: "0.01em",
                      transition: "opacity 0.2s ease",
                      boxShadow: "0 0 0 1px rgba(59,130,246,0.3), 0 4px 16px rgba(37,99,235,0.25)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.opacity = "0.85";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.opacity = "1";
                    }}
                  >
                    Book Strategy Call →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: "48px",
          padding: "32px 0",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "24px",
                height: "24px",
                background: "linear-gradient(135deg, #3b82f6, #22d3ee)",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "9px",
                fontWeight: "700",
                color: "#fff",
                fontFamily: "var(--font-mono)",
              }}
            >
              KW
            </div>
            <span style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>
              © {new Date().getFullYear()} Kenrick Williams
            </span>
          </div>

          <div style={{ display: "flex", gap: "24px" }}>
            {[
              ["Services", "#services"],
              ["About", "#about"],
              ["Industries", "#industries"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                style={{
                  fontSize: "12px",
                  color: "var(--color-text-muted)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--color-text-secondary)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "var(--color-text-muted)";
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 900px) {
          .cta-inner {
            padding: 40px 24px !important;
          }
          .cta-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}

function FormField({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div>
      <label
        style={{
          display: "block",
          fontSize: "11px",
          color: "var(--color-text-muted)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          fontFamily: "var(--font-mono)",
          marginBottom: "6px",
        }}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          width: "100%",
          padding: "11px 14px",
          background: focused ? "rgba(59,130,246,0.05)" : "rgba(255,255,255,0.03)",
          border: `1px solid ${focused ? "rgba(59,130,246,0.35)" : "rgba(255,255,255,0.1)"}`,
          borderRadius: "8px",
          color: "var(--color-text-primary)",
          fontSize: "14px",
          outline: "none",
          transition: "border-color 0.2s ease, background 0.2s ease",
          fontFamily: "inherit",
        }}
      />
    </div>
  );
}
