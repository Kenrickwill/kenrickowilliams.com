"use client";

import { useEffect, useRef, useState } from "react";

const phases = [
  {
    year: "2021",
    role: "Security Foundation",
    company: "ACOM + TSYS (Global Payments)",
    detail:
      "Resolved technical and networking issues across 60+ enterprise clients. Developed device management scripts that replaced manual update cycles across a Fortune 100 fleet.",
    tags: ["Incident Response", "Device Management", "Enterprise IT"],
    color: "#3b82f6",
  },
  {
    year: "2022",
    role: "Systems Architecture",
    company: "Global Payments",
    detail:
      "Co-built a centralized security dashboard giving every analyst real-time visibility across alerts, resources, and threat intelligence. Reduced false positive volume measurably.",
    tags: ["SIEM Engineering", "Splunk", "Security Dashboards", "Process Automation"],
    color: "#6366f1",
  },
  {
    year: "2023",
    role: "Platform Security Engineering",
    company: "Publix Super Markets",
    detail:
      "Platform Security Engineer II at one of America's largest employee-owned companies. Automated AV policy deployment across entire platform sectors — eliminating a process that previously required emailing every user manually.",
    tags: ["Platform Security", "Automation Architecture", "Vulnerability Management", "F100"],
    color: "#8b5cf6",
  },
  {
    year: "2024+",
    role: "AI Automation Consulting",
    company: "Independent Practice",
    detail:
      "Applying a decade of systems thinking to business operations. Designing intelligent automation ecosystems for service businesses — AI receptionists, lead capture, CRM workflows, and appointment automation.",
    tags: ["AI Automation", "Business Systems", "Workflow Design", "Consulting"],
    color: "#22d3ee",
  },
];

function useInView(threshold = 0.15) {
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

export default function About() {
  const { ref, inView } = useInView(0.1);
  const [activePhase, setActivePhase] = useState(3);

  return (
    <section id="about" className="section" style={{ position: "relative", zIndex: 1 }}>
      {/* Background gradient */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "0",
          right: "-20%",
          width: "600px",
          height: "100%",
          background: "radial-gradient(ellipse at top right, rgba(34,211,238,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container">
        {/* Header */}
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left — the story */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <div className="label-chip" style={{ marginBottom: "20px" }}>
              <span>Background</span>
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: "600",
                letterSpacing: "-0.03em",
                lineHeight: "1.1",
                color: "var(--color-text-primary)",
                marginBottom: "28px",
              }}
            >
              Security engineer
              <br />
              turned systems
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #8b5cf6, #22d3ee)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                architect.
              </span>
            </h2>

            <p
              style={{
                fontSize: "16px",
                color: "var(--color-text-secondary)",
                lineHeight: "1.75",
                marginBottom: "20px",
              }}
            >
              I spent four years inside Fortune 100 infrastructure — detecting threats,
              building automation workflows, and deploying security systems at enterprise
              scale. At Publix, I automated AV policy deployment across entire platform
              sectors. Before that, at Global Payments, I co-built the dashboard that
              gave an entire SOC team real-time visibility.
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "var(--color-text-secondary)",
                lineHeight: "1.75",
                marginBottom: "20px",
              }}
            >
              The pattern in everything I built: replace a manual, error-prone process
              with something that runs reliably on its own. That instinct doesn&apos;t
              stop at security.
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "var(--color-text-secondary)",
                lineHeight: "1.75",
                marginBottom: "32px",
              }}
            >
              Now I apply it to business operations — designing automation systems that
              handle lead capture, customer communication, and appointment booking so
              business owners can focus on the work that actually requires them.
            </p>

            {/* Credentials strip */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                paddingTop: "28px",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {[
                "B.S. Computer Science & Cybersecurity — Columbus State University",
                "CompTIA Security+ · Microsoft AZ-900 & SC-900 · AWS CCP · Splunk Power User",
              ].map((cred) => (
                <div
                  key={cred}
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                    fontSize: "13px",
                    color: "var(--color-text-secondary)",
                    lineHeight: "1.5",
                  }}
                >
                  <span style={{ color: "var(--color-accent)", marginTop: "2px", flexShrink: 0 }}>
                    —
                  </span>
                  {cred}
                </div>
              ))}
            </div>

            {/* Community note */}
            <div
              style={{
                marginTop: "28px",
                padding: "16px 20px",
                background: "rgba(34,211,238,0.04)",
                border: "1px solid rgba(34,211,238,0.1)",
                borderRadius: "10px",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--color-text-secondary)",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                I also volunteer to bring cybersecurity education to elementary school
                students in Columbus, GA through the TSYS Community Partnership — and
                stay active in ISSA and the River Valley Black Chamber of Commerce.
              </p>
            </div>
          </div>

          {/* Right — career timeline */}
          <div
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            <div
              style={{
                position: "relative",
                paddingLeft: "24px",
                borderLeft: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {phases.map((phase, i) => (
                <div
                  key={phase.year}
                  onClick={() => setActivePhase(i)}
                  style={{
                    marginBottom: i < phases.length - 1 ? "32px" : "0",
                    cursor: "pointer",
                    position: "relative",
                  }}
                >
                  {/* Timeline dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: "-30px",
                      top: "4px",
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: activePhase === i ? phase.color : "rgba(255,255,255,0.1)",
                      border: `2px solid ${activePhase === i ? phase.color : "rgba(255,255,255,0.15)"}`,
                      transition: "all 0.25s ease",
                      boxShadow: activePhase === i ? `0 0 12px ${phase.color}80` : "none",
                    }}
                  />

                  {/* Year */}
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: activePhase === i ? phase.color : "var(--color-text-muted)",
                      letterSpacing: "0.08em",
                      marginBottom: "4px",
                      transition: "color 0.25s ease",
                    }}
                  >
                    {phase.year}
                  </div>

                  {/* Role */}
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: activePhase === i ? "var(--color-text-primary)" : "var(--color-text-secondary)",
                      marginBottom: "2px",
                      letterSpacing: "-0.01em",
                      transition: "color 0.25s ease",
                    }}
                  >
                    {phase.role}
                  </h3>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "var(--color-text-muted)",
                      marginBottom: activePhase === i ? "12px" : "0",
                    }}
                  >
                    {phase.company}
                  </div>

                  {/* Expanded content */}
                  <div
                    style={{
                      overflow: "hidden",
                      maxHeight: activePhase === i ? "300px" : "0",
                      opacity: activePhase === i ? 1 : 0,
                      transition: "max-height 0.4s ease, opacity 0.3s ease",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "13px",
                        color: "var(--color-text-secondary)",
                        lineHeight: "1.65",
                        marginBottom: "12px",
                      }}
                    >
                      {phase.detail}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {phase.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            padding: "3px 10px",
                            fontSize: "11px",
                            fontWeight: "500",
                            borderRadius: "100px",
                            background: `${phase.color}15`,
                            border: `1px solid ${phase.color}30`,
                            color: phase.color,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
