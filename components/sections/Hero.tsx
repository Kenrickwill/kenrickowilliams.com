"use client";

import { useEffect, useRef } from "react";

const stats = [
  { value: "4+", label: "Years in Security" },
  { value: "F100", label: "Enterprise Scale" },
  { value: "10+", label: "Systems Deployed" },
  { value: "100s", label: "Hours Automated" },
];

const systemModules = [
  { id: "01", label: "Lead Capture", status: "ACTIVE" },
  { id: "02", label: "CRM Sync", status: "ACTIVE" },
  { id: "03", label: "AI Receptionist", status: "ACTIVE" },
  { id: "04", label: "Follow-Up Engine", status: "ACTIVE" },
  { id: "05", label: "Appt. Booking", status: "ACTIVE" },
  { id: "06", label: "Revenue Reporting", status: "ACTIVE" },
];

export default function Hero() {
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Stagger reveal animation for stats
    if (!counterRef.current) return;
    const items = counterRef.current.querySelectorAll(".stat-item");
    items.forEach((el, i) => {
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(16px)";
      setTimeout(() => {
        (el as HTMLElement).style.transition = "opacity 0.6s ease, transform 0.6s ease";
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "translateY(0)";
      }, 800 + i * 100);
    });
  }, []);

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "var(--nav-height)",
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      {/* Radial glow — center left */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "30%",
          left: "-10%",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse at center, rgba(59,130,246,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
            minHeight: "calc(100vh - var(--nav-height))",
          }}
          className="hero-grid"
        >
          {/* Left column — headline */}
          <div>
            {/* Status badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "5px 14px",
                border: "1px solid rgba(16, 185, 129, 0.25)",
                borderRadius: "100px",
                background: "rgba(16, 185, 129, 0.07)",
                marginBottom: "36px",
                opacity: 0,
                animation: "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards",
              }}
            >
              <span className="status-dot" />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  fontWeight: "500",
                  letterSpacing: "0.1em",
                  color: "var(--color-active)",
                  textTransform: "uppercase",
                }}
              >
                Systems Operational
              </span>
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: "clamp(40px, 5.5vw, 72px)",
                fontWeight: "600",
                lineHeight: "1.08",
                letterSpacing: "-0.03em",
                color: "var(--color-text-primary)",
                marginBottom: "28px",
                opacity: 0,
                animation: "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.35s forwards",
              }}
            >
              The Infrastructure
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #3b82f6, #22d3ee)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Behind Modern
              </span>
              <br />
              Business.
            </h1>

            {/* Sub */}
            <p
              style={{
                fontSize: "18px",
                fontWeight: "400",
                lineHeight: "1.7",
                color: "var(--color-text-secondary)",
                maxWidth: "480px",
                marginBottom: "44px",
                opacity: 0,
                animation: "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards",
              }}
            >
              I design and deploy intelligent automation systems that eliminate manual
              work, capture every lead, and run while you sleep.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                opacity: 0,
                animation: "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.65s forwards",
              }}
            >
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "13px 28px",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#fff",
                  background: "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
                  borderRadius: "10px",
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  boxShadow: "0 0 0 1px rgba(59,130,246,0.3), 0 4px 24px rgba(37,99,235,0.25)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 0 1px rgba(59,130,246,0.4), 0 8px 32px rgba(37,99,235,0.35)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 0 1px rgba(59,130,246,0.3), 0 4px 24px rgba(37,99,235,0.25)";
                }}
              >
                Book a Strategy Call
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7h10M8 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#services"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "13px 28px",
                  fontSize: "14px",
                  fontWeight: "400",
                  color: "var(--color-text-secondary)",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "10px",
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                  transition: "color 0.2s ease, border-color 0.2s ease, background 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "var(--color-text-primary)";
                  el.style.borderColor = "rgba(255,255,255,0.16)";
                  el.style.background = "rgba(255,255,255,0.06)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "var(--color-text-secondary)";
                  el.style.borderColor = "rgba(255,255,255,0.08)";
                  el.style.background = "rgba(255,255,255,0.03)";
                }}
              >
                See How It Works
              </a>
            </div>

            {/* Stats row */}
            <div
              ref={counterRef}
              style={{
                display: "flex",
                gap: "0",
                marginTop: "60px",
                paddingTop: "40px",
                borderTop: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="stat-item"
                  style={{
                    flex: 1,
                    paddingRight: "24px",
                    borderRight: "1px solid rgba(255,255,255,0.06)",
                    marginRight: "24px",
                    opacity: 0,
                  }}
                >
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: "700",
                      color: "var(--color-text-primary)",
                      letterSpacing: "-0.02em",
                      fontFamily: "var(--font-mono)",
                      lineHeight: 1,
                      marginBottom: "4px",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: "400",
                      color: "var(--color-text-muted)",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — System dashboard widget */}
          <div
            style={{
              opacity: 0,
              animation: "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards",
            }}
            className="hero-panel"
          >
            <div
              style={{
                background: "rgba(13, 13, 24, 0.8)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "24px",
                backdropFilter: "blur(20px)",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 24px 48px rgba(0,0,0,0.4)",
              }}
            >
              {/* Panel header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "20px",
                  paddingBottom: "16px",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#ef4444",
                    }}
                  />
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#f59e0b",
                    }}
                  />
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#10b981",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.3)",
                      marginLeft: "8px",
                    }}
                  >
                    automation_system.v2
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--color-active)",
                    letterSpacing: "0.06em",
                  }}
                >
                  ALL SYSTEMS ●
                </div>
              </div>

              {/* Module grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "8px",
                  marginBottom: "20px",
                }}
              >
                {systemModules.map((mod, i) => (
                  <div
                    key={mod.id}
                    style={{
                      padding: "12px 14px",
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      transition: "border-color 0.2s ease, background 0.2s ease",
                      cursor: "default",
                      opacity: 0,
                      animation: `fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${0.7 + i * 0.07}s forwards`,
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(59,130,246,0.25)";
                      el.style.background = "rgba(59,130,246,0.05)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(255,255,255,0.06)";
                      el.style.background = "rgba(255,255,255,0.02)";
                    }}
                  >
                    <div
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: "var(--color-active)",
                        flexShrink: 0,
                        boxShadow: "0 0 6px rgba(16, 185, 129, 0.6)",
                      }}
                    />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "10px",
                          color: "rgba(255,255,255,0.3)",
                          marginBottom: "2px",
                          letterSpacing: "0.04em",
                        }}
                      >
                        MOD-{mod.id}
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: "500",
                          color: "rgba(240,240,255,0.8)",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {mod.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Activity bar */}
              <div
                style={{
                  padding: "12px 14px",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "rgba(255,255,255,0.35)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    SYSTEM THROUGHPUT
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "var(--color-active)",
                    }}
                  >
                    98.4%
                  </span>
                </div>
                <div
                  style={{
                    height: "3px",
                    background: "rgba(255,255,255,0.06)",
                    borderRadius: "2px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: "98.4%",
                      background: "linear-gradient(90deg, #3b82f6, #22d3ee)",
                      borderRadius: "2px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          opacity: 0,
          animation: "fade-up 0.6s ease 1.2s forwards",
        }}
      >
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)",
          }}
        />
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            padding-top: 40px !important;
            padding-bottom: 60px !important;
          }
          .hero-panel {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
