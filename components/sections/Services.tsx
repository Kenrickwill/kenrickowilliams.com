"use client";

import { useEffect, useRef, useState } from "react";

const pipeline = [
  {
    id: "ai-receptionist",
    title: "AI Receptionist",
    description:
      "Answers every call, chat, and form 24/7. Qualifies leads, collects information, and routes intelligently — no human required.",
    tag: "Entry Point",
    metric: "Never miss a lead",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2a6 6 0 0 1 6 6v3.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V8a6 6 0 0 1 6-6z" />
        <path d="M7 12v1a3 3 0 0 0 6 0v-1" />
      </svg>
    ),
  },
  {
    id: "lead-capture",
    title: "Lead Capture & Qualification",
    description:
      "Every inquiry is logged, scored, and enriched. High-value leads get instant attention. No one falls through the cracks.",
    tag: "Intake Layer",
    metric: "100% lead capture",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="8" />
        <path d="M10 6v4l3 3" />
      </svg>
    ),
  },
  {
    id: "crm-automation",
    title: "CRM Automation",
    description:
      "Leads sync to your CRM automatically. Records created, tagged, assigned, and tracked without a single manual entry.",
    tag: "Data Layer",
    metric: "Zero data entry",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="16" height="12" rx="2" />
        <path d="M2 8h16" />
        <path d="M6 12h3M6 14.5h2" />
      </svg>
    ),
  },
  {
    id: "follow-up",
    title: "Follow-Up Engine",
    description:
      "Personalized sequences triggered by behavior. SMS, email, voicemail drops — the right message at the right moment, automatically.",
    tag: "Engagement Layer",
    metric: "5x faster response",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10l2-2m0 0l5-5 5 5-5 5-5-5zm2-2v9" />
      </svg>
    ),
  },
  {
    id: "appointment",
    title: "Appointment Automation",
    description:
      "Booking, confirmation, reminders, and rescheduling — all handled without staff involvement. Calendar always full.",
    tag: "Conversion Layer",
    metric: "40% more bookings",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="14" height="13" rx="2" />
        <path d="M3 9h14M8 2v4M12 2v4" />
      </svg>
    ),
  },
  {
    id: "revenue",
    title: "Revenue Intelligence",
    description:
      "Every touchpoint tracked. Dashboards show pipeline health, conversion rates, and automation ROI in real time.",
    tag: "Intelligence Layer",
    metric: "Full visibility",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 14l4-4 4 4 4-6" />
        <circle cx="3" cy="14" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="7" cy="10" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="11" cy="14" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="15" cy="8" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
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

export default function Services() {
  const { ref: sectionRef, inView } = useInView();
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="services" className="section" style={{ position: "relative", zIndex: 1 }}>
      <div className="container">
        {/* Header */}
        <div
          ref={sectionRef}
          style={{
            maxWidth: "600px",
            marginBottom: "72px",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="label-chip accent" style={{ marginBottom: "20px" }}>
            <span>Services</span>
          </div>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: "600",
              letterSpacing: "-0.03em",
              lineHeight: "1.1",
              color: "var(--color-text-primary)",
              marginBottom: "20px",
            }}
          >
            One connected system.
            <br />
            <span style={{ color: "var(--color-text-secondary)", fontWeight: "400" }}>
              Not six separate tools.
            </span>
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "var(--color-text-secondary)",
              lineHeight: "1.7",
            }}
          >
            Every service is a node in your automation architecture. Together they form a
            self-running business engine — capturing leads, nurturing prospects, and
            filling your calendar on autopilot.
          </p>
        </div>

        {/* Pipeline */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 48px 1fr",
            gap: "0",
            alignItems: "start",
          }}
          className="pipeline-grid"
        >
          {/* Left column — odd items */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {pipeline.filter((_, i) => i % 2 === 0).map((item, i) => (
              <ServiceCard
                key={item.id}
                item={item}
                index={i * 2}
                inView={inView}
                active={active}
                setActive={setActive}
                align="right"
              />
            ))}
          </div>

          {/* Center spine */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "32px",
              gap: "0",
            }}
            className="pipeline-spine"
          >
            <div
              style={{
                width: "1px",
                background: "linear-gradient(to bottom, transparent, rgba(59,130,246,0.3) 10%, rgba(34,211,238,0.3) 90%, transparent)",
                flex: 1,
                position: "relative",
              }}
            >
              {/* Traveling dot */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "10%",
                  transform: "translate(-50%, 0)",
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--color-cyan)",
                  boxShadow: "0 0 8px var(--color-cyan)",
                  animation: "travel-down 3s ease-in-out infinite",
                }}
              />
            </div>
          </div>

          {/* Right column — even items */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", paddingTop: "80px" }}>
            {pipeline.filter((_, i) => i % 2 === 1).map((item, i) => (
              <ServiceCard
                key={item.id}
                item={item}
                index={i * 2 + 1}
                inView={inView}
                active={active}
                setActive={setActive}
                align="left"
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes travel-down {
          0% { top: 5%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 95%; opacity: 0; }
        }
        @media (max-width: 768px) {
          .pipeline-grid {
            grid-template-columns: 1fr !important;
          }
          .pipeline-spine {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

function ServiceCard({
  item,
  index,
  inView,
  active,
  setActive,
  align,
}: {
  item: (typeof pipeline)[0];
  index: number;
  inView: boolean;
  active: string | null;
  setActive: (id: string | null) => void;
  align: "left" | "right";
}) {
  const isActive = active === item.id;

  return (
    <div
      onMouseEnter={() => setActive(item.id)}
      onMouseLeave={() => setActive(null)}
      style={{
        padding: "20px",
        background: isActive ? "rgba(59,130,246,0.06)" : "rgba(13,13,24,0.7)",
        border: `1px solid ${isActive ? "rgba(59,130,246,0.3)" : "rgba(255,255,255,0.07)"}`,
        borderRadius: "12px",
        cursor: "default",
        backdropFilter: "blur(8px)",
        transition: "all 0.25s ease",
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateY(0)"
          : align === "right"
          ? "translateX(16px)"
          : "translateX(-16px)",
        transitionDelay: `${0.05 * index}s`,
      }}
    >
      {/* Tag */}
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          color: isActive ? "var(--color-accent-bright)" : "var(--color-text-muted)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: "12px",
          transition: "color 0.2s ease",
        }}
      >
        {item.tag}
      </div>

      <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
        {/* Icon */}
        <div
          style={{
            width: "36px",
            height: "36px",
            flexShrink: 0,
            borderRadius: "8px",
            background: isActive ? "rgba(59,130,246,0.15)" : "rgba(255,255,255,0.04)",
            border: `1px solid ${isActive ? "rgba(59,130,246,0.3)" : "rgba(255,255,255,0.06)"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: isActive ? "var(--color-accent-bright)" : "var(--color-text-secondary)",
            transition: "all 0.2s ease",
          }}
        >
          {item.icon}
        </div>

        <div style={{ flex: 1 }}>
          <h3
            style={{
              fontSize: "15px",
              fontWeight: "600",
              color: "var(--color-text-primary)",
              marginBottom: "6px",
              letterSpacing: "-0.01em",
            }}
          >
            {item.title}
          </h3>
          <p
            style={{
              fontSize: "13px",
              color: "var(--color-text-secondary)",
              lineHeight: "1.6",
              marginBottom: "12px",
            }}
          >
            {item.description}
          </p>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "11px",
              fontWeight: "500",
              color: "var(--color-active)",
              fontFamily: "var(--font-mono)",
            }}
          >
            <span
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                background: "var(--color-active)",
              }}
            />
            {item.metric}
          </div>
        </div>
      </div>
    </div>
  );
}
