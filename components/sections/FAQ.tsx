"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    q: "How does AI automation actually work for my business?",
    a: "We identify the manual processes in your business that happen on repeat — answering inquiries, following up with leads, booking appointments, sending reminders. Then we build automated systems using AI and workflow tools that handle those tasks reliably, without human involvement. You get the same output, at any hour, at any volume.",
  },
  {
    q: "How long does implementation take?",
    a: "Most core systems are live within 2-3 weeks. A full ecosystem — AI receptionist, lead pipeline, CRM integration, and appointment booking — typically takes 4-6 weeks depending on your existing tools and complexity. You'll see results from the first system before the rest is complete.",
  },
  {
    q: "What tools and platforms can be integrated?",
    a: "We work with most major CRMs (HubSpot, GoHighLevel, Salesforce, and others), scheduling tools (Calendly, Acuity, NexHealth), phone systems, email platforms, and communication tools. If your business already uses a tool, we'll build around it rather than replacing it.",
  },
  {
    q: "How much does it cost?",
    a: "Investment depends on the scope and complexity of the system. A focused single automation (like an AI receptionist or a follow-up sequence) starts at a lower entry point. Full-system builds are customized. The strategy call is free — we'll map out what makes sense for your situation before any commitment.",
  },
  {
    q: "What industries benefit most?",
    a: "Any business where appointments, lead follow-up, and customer communication drive revenue — med spas, HVAC, roofing, law firms, real estate, wellness centers, and other service businesses. If your team is manually answering the same questions, chasing the same leads, or forgetting to follow up, automation has a clear ROI for you.",
  },
  {
    q: "How secure are these systems? What about my customer data?",
    a: "This is where my background matters. I approach automation from a security-first mindset, developed through years inside Fortune 100 security environments. Systems are built with proper access controls, encrypted connections, and data handling that meets industry standards. Your customer data stays within your own platforms — we integrate, not extract.",
  },
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

export default function FAQ() {
  const { ref, inView } = useInView();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section" style={{ position: "relative", zIndex: 1 }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="faq-grid"
        >
          {/* Left */}
          <div
            ref={ref}
            style={{
              position: "sticky",
              top: "calc(var(--nav-height) + 32px)",
              opacity: inView ? 1 : 0,
              transform: inView ? "none" : "translateY(24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
            className="faq-sticky"
          >
            <div className="label-chip" style={{ marginBottom: "20px" }}>
              <span>FAQ</span>
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 3vw, 40px)",
                fontWeight: "600",
                letterSpacing: "-0.03em",
                lineHeight: "1.1",
                color: "var(--color-text-primary)",
                marginBottom: "16px",
              }}
            >
              Common
              <br />
              questions.
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "var(--color-text-secondary)",
                lineHeight: "1.7",
                marginBottom: "28px",
              }}
            >
              Still have something specific in mind?
            </p>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "13px",
                color: "var(--color-accent-bright)",
                textDecoration: "none",
              }}
            >
              Ask directly →
            </a>
          </div>

          {/* Right — accordions */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
              opacity: inView ? 1 : 0,
              transition: "opacity 0.7s ease 0.15s",
            }}
          >
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "16px",
                    padding: "24px 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: "500",
                      color: open === i ? "var(--color-text-primary)" : "var(--color-text-secondary)",
                      lineHeight: "1.5",
                      transition: "color 0.2s ease",
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      flexShrink: 0,
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      border: "1px solid rgba(255,255,255,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "2px",
                      transition: "transform 0.25s ease, border-color 0.2s ease",
                      transform: open === i ? "rotate(45deg)" : "none",
                      color: open === i ? "var(--color-accent-bright)" : "var(--color-text-muted)",
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>

                <div
                  style={{
                    overflow: "hidden",
                    maxHeight: open === i ? "400px" : "0",
                    transition: "max-height 0.35s ease",
                  }}
                >
                  <p
                    style={{
                      fontSize: "14px",
                      color: "var(--color-text-secondary)",
                      lineHeight: "1.75",
                      paddingBottom: "24px",
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .faq-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .faq-sticky {
            position: relative !important;
            top: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
