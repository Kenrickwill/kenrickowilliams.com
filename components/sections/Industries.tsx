"use client";

import { useEffect, useRef, useState } from "react";

const industries = [
  {
    id: "medspa",
    name: "Med Spas",
    subtitle: "Aesthetics & Wellness",
    automations: [
      "AI booking assistant for services",
      "Before/after follow-up sequences",
      "Membership renewal reminders",
      "Review request automation",
    ],
    opportunity: "High appointment volume, recurring clients",
  },
  {
    id: "hvac",
    name: "HVAC Companies",
    subtitle: "Home Services",
    automations: [
      "Emergency call routing",
      "Seasonal tune-up campaigns",
      "Estimate follow-up sequences",
      "Maintenance contract renewals",
    ],
    opportunity: "High seasonal demand spikes",
  },
  {
    id: "roofing",
    name: "Roofing Companies",
    subtitle: "Contracting",
    automations: [
      "Storm response lead capture",
      "Estimate-to-close sequences",
      "Insurance claim follow-up",
      "Referral request automation",
    ],
    opportunity: "High-ticket, time-sensitive leads",
  },
  {
    id: "legal",
    name: "Law Firms",
    subtitle: "Legal Services",
    automations: [
      "24/7 intake and qualification",
      "Consultation scheduling",
      "Document collection automation",
      "Case update communications",
    ],
    opportunity: "High-value intake often poorly managed",
  },
  {
    id: "realestate",
    name: "Real Estate Teams",
    subtitle: "Property Sales",
    automations: [
      "Lead capture from listings",
      "Showing schedule automation",
      "Long-term nurture sequences",
      "Contract milestone communications",
    ],
    opportunity: "Long sales cycles need consistent follow-up",
  },
  {
    id: "wellness",
    name: "Wellness Centers",
    subtitle: "Health & Fitness",
    automations: [
      "New member onboarding flows",
      "Class booking reminders",
      "Membership win-back campaigns",
      "Referral and review programs",
    ],
    opportunity: "Recurring revenue model benefits from retention automation",
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

export default function Industries() {
  const { ref, inView } = useInView();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="industries" className="section" style={{ position: "relative", zIndex: 1 }}>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, transparent, rgba(8,8,16,0.5) 30%, rgba(8,8,16,0.5) 70%, transparent)",
          pointerEvents: "none",
        }}
      />

      <div className="container">
        <div
          ref={ref}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "64px",
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="label-chip" style={{ marginBottom: "20px" }}>
            <span>Industries</span>
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: "600",
              letterSpacing: "-0.03em",
              color: "var(--color-text-primary)",
              marginBottom: "16px",
              maxWidth: "600px",
            }}
          >
            Built for businesses
            <br />
            <span style={{ color: "var(--color-text-secondary)", fontWeight: "400" }}>
              that run on appointments.
            </span>
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "var(--color-text-secondary)",
              lineHeight: "1.7",
              maxWidth: "520px",
            }}
          >
            Every industry below has the same core problem: leads come in, things get
            busy, and follow-up falls apart. Automation fixes that permanently.
          </p>
        </div>

        {/* Industry grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
          className="industry-grid"
        >
          {industries.map((ind, i) => (
            <div
              key={ind.id}
              onMouseEnter={() => setHovered(ind.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                padding: "24px",
                background: hovered === ind.id ? "rgba(59,130,246,0.06)" : "rgba(13,13,24,0.7)",
                border: `1px solid ${hovered === ind.id ? "rgba(59,130,246,0.25)" : "rgba(255,255,255,0.07)"}`,
                borderRadius: "12px",
                cursor: "default",
                backdropFilter: "blur(8px)",
                transition: "all 0.2s ease",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${0.05 * i + 0.1}s`,
              }}
            >
              {/* Industry name */}
              <div style={{ marginBottom: "16px" }}>
                <div
                  style={{
                    fontSize: "11px",
                    color: "var(--color-text-muted)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "4px",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {ind.subtitle}
                </div>
                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: "600",
                    color: "var(--color-text-primary)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {ind.name}
                </h3>
              </div>

              {/* Automations list */}
              <div style={{ marginBottom: "16px" }}>
                {ind.automations.map((auto, j) => (
                  <div
                    key={j}
                    style={{
                      display: "flex",
                      gap: "8px",
                      alignItems: "flex-start",
                      fontSize: "12px",
                      color: "var(--color-text-secondary)",
                      marginBottom: "6px",
                      lineHeight: "1.5",
                    }}
                  >
                    <span
                      style={{
                        color: hovered === ind.id ? "var(--color-accent)" : "var(--color-text-muted)",
                        flexShrink: 0,
                        marginTop: "1px",
                        transition: "color 0.2s ease",
                      }}
                    >
                      ›
                    </span>
                    {auto}
                  </div>
                ))}
              </div>

              {/* Opportunity tag */}
              <div
                style={{
                  fontSize: "11px",
                  color: hovered === ind.id ? "var(--color-accent-bright)" : "var(--color-text-muted)",
                  lineHeight: "1.5",
                  paddingTop: "12px",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                  transition: "color 0.2s ease",
                }}
              >
                {ind.opportunity}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            textAlign: "center",
            marginTop: "48px",
            opacity: inView ? 1 : 0,
            transition: "opacity 0.7s ease 0.4s",
          }}
        >
          <p style={{ fontSize: "14px", color: "var(--color-text-muted)", marginBottom: "16px" }}>
            Don&apos;t see your industry?
          </p>
          <a
            href="#contact"
            style={{
              fontSize: "13px",
              color: "var(--color-accent-bright)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(96,165,250,0.3)",
              paddingBottom: "2px",
              transition: "border-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(96,165,250,0.7)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(96,165,250,0.3)";
            }}
          >
            Tell me about your business →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .industry-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .industry-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
