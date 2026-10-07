"use client";

import { useEffect, useRef, useState } from "react";

const cases = [
  {
    id: "medspa",
    industry: "Med Spa",
    headline: "From missed calls to fully-booked calendar",
    problem:
      "A growing med spa was losing 30-40% of after-hours inquiries. Staff were manually following up the next morning — by then, prospects had booked elsewhere.",
    systemBuilt: [
      "AI Receptionist on website chat and phone",
      "Automatic lead qualification and CRM entry",
      "Instant personalized follow-up sequence (SMS + email)",
      "Online booking with automated confirmation and reminders",
    ],
    impact: [
      { metric: "0", label: "missed leads after hours" },
      { metric: "37%", label: "increase in bookings" },
      { metric: "12h", label: "average response → instant" },
    ],
    color: "#3b82f6",
  },
  {
    id: "hvac",
    industry: "HVAC Company",
    headline: "Automating the estimate-to-job pipeline",
    problem:
      "An HVAC owner was spending 3-4 hours a day manually calling back quote requests, confirming appointments, and chasing no-shows. High season meant leads falling off entirely.",
    systemBuilt: [
      "Automated quote request intake and routing",
      "Instant AI-driven appointment scheduling",
      "Two-day and same-day reminder sequences",
      "No-show re-engagement workflow",
    ],
    impact: [
      { metric: "15h", label: "per week reclaimed by owner" },
      { metric: "22%", label: "reduction in no-shows" },
      { metric: "2x", label: "capacity during peak season" },
    ],
    color: "#22d3ee",
  },
  {
    id: "lawfirm",
    industry: "Law Firm",
    headline: "Client intake that runs without a receptionist",
    problem:
      "A boutique law firm was losing potential clients because intake was slow and inconsistent. Prospective clients called, left voicemails, and sometimes never heard back within their window.",
    systemBuilt: [
      "24/7 AI intake — answers questions, collects case details",
      "Automatic conflict check initiation and attorney routing",
      "Consultation booking linked to attorney calendars",
      "Automated intake packet delivery and collection",
    ],
    impact: [
      { metric: "100%", label: "of inquiries handled same-day" },
      { metric: "3x", label: "faster intake to consultation" },
      { metric: "60%", label: "less admin time for staff" },
    ],
    color: "#8b5cf6",
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

export default function CaseStudies() {
  const { ref, inView } = useInView();
  const [active, setActive] = useState(0);

  const current = cases[active];

  return (
    <section id="work" className="section" style={{ position: "relative", zIndex: 1 }}>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "20%",
          left: "-15%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(139,92,246,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container">
        {/* Header */}
        <div
          ref={ref}
          style={{
            marginBottom: "60px",
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="label-chip" style={{ marginBottom: "20px" }}>
            <span>Case Studies</span>
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: "600",
              letterSpacing: "-0.03em",
              color: "var(--color-text-primary)",
              marginBottom: "16px",
            }}
          >
            Systems deployed.
            <br />
            <span style={{ color: "var(--color-text-secondary)", fontWeight: "400" }}>
              Results measured.
            </span>
          </h2>
        </div>

        {/* Tabs */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            marginBottom: "40px",
            flexWrap: "wrap",
            opacity: inView ? 1 : 0,
            transition: "opacity 0.7s ease 0.15s",
          }}
        >
          {cases.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActive(i)}
              style={{
                padding: "8px 18px",
                fontSize: "13px",
                fontWeight: active === i ? "500" : "400",
                color: active === i ? "var(--color-text-primary)" : "var(--color-text-secondary)",
                background: active === i ? `${c.color}18` : "rgba(255,255,255,0.03)",
                border: `1px solid ${active === i ? `${c.color}40` : "rgba(255,255,255,0.08)"}`,
                borderRadius: "100px",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {c.industry}
            </button>
          ))}
        </div>

        {/* Case detail */}
        <div
          key={current.id}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
            opacity: inView ? 1 : 0,
            transition: "opacity 0.5s ease 0.2s",
          }}
          className="case-grid"
        >
          {/* Left — narrative */}
          <div
            style={{
              padding: "32px",
              background: "rgba(13,13,24,0.7)",
              border: `1px solid ${current.color}25`,
              borderRadius: "16px",
              backdropFilter: "blur(8px)",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                padding: "4px 12px",
                borderRadius: "100px",
                fontSize: "11px",
                fontWeight: "500",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                background: `${current.color}15`,
                color: current.color,
                marginBottom: "20px",
              }}
            >
              {current.industry}
            </div>

            <h3
              style={{
                fontSize: "22px",
                fontWeight: "600",
                letterSpacing: "-0.02em",
                color: "var(--color-text-primary)",
                marginBottom: "16px",
                lineHeight: "1.3",
              }}
            >
              {current.headline}
            </h3>

            {/* Problem */}
            <div style={{ marginBottom: "24px" }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--color-text-muted)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "10px",
                }}
              >
                The Problem
              </div>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--color-text-secondary)",
                  lineHeight: "1.7",
                }}
              >
                {current.problem}
              </p>
            </div>

            {/* System built */}
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--color-text-muted)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                System Built
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {current.systemBuilt.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                      fontSize: "13px",
                      color: "var(--color-text-secondary)",
                      lineHeight: "1.5",
                    }}
                  >
                    <span
                      style={{
                        color: current.color,
                        flexShrink: 0,
                        marginTop: "2px",
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — impact metrics */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {current.impact.map((imp, i) => (
              <div
                key={i}
                style={{
                  padding: "28px 32px",
                  background: i === 0 ? `${current.color}10` : "rgba(13,13,24,0.7)",
                  border: `1px solid ${i === 0 ? `${current.color}30` : "rgba(255,255,255,0.07)"}`,
                  borderRadius: "12px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(36px, 5vw, 52px)",
                    fontWeight: "700",
                    color: i === 0 ? current.color : "var(--color-text-primary)",
                    letterSpacing: "-0.04em",
                    fontFamily: "var(--font-mono)",
                    lineHeight: 1,
                    marginBottom: "8px",
                  }}
                >
                  {imp.metric}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "var(--color-text-secondary)",
                    letterSpacing: "0.01em",
                  }}
                >
                  {imp.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .case-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
