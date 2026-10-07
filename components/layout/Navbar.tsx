"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Industries", href: "#industries" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: "var(--nav-height)",
          display: "flex",
          alignItems: "center",
          padding: "0 24px",
          transition: "background 0.3s ease, border-color 0.3s ease",
          background: scrolled
            ? "rgba(8, 8, 16, 0.92)"
            : "transparent",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "var(--container-max)",
            width: "100%",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                background: "linear-gradient(135deg, #3b82f6, #22d3ee)",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "13px",
                fontWeight: "700",
                color: "#fff",
                letterSpacing: "-0.02em",
                fontFamily: "var(--font-mono)",
              }}
            >
              KW
            </div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                fontWeight: "500",
                letterSpacing: "0.04em",
                color: "rgba(240, 240, 255, 0.7)",
              }}
            >
              Kenrick Williams
            </span>
          </Link>

          {/* Desktop nav */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
            }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontSize: "13px",
                  fontWeight: "400",
                  color: "rgba(240, 240, 255, 0.55)",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "rgba(240, 240, 255, 0.95)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "rgba(240, 240, 255, 0.55)";
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a
              href="#contact"
              style={{
                padding: "8px 18px",
                fontSize: "13px",
                fontWeight: "500",
                color: "#fff",
                background: "linear-gradient(135deg, #3b82f6, #2563eb)",
                borderRadius: "8px",
                textDecoration: "none",
                letterSpacing: "0.02em",
                transition: "opacity 0.2s ease, transform 0.2s ease",
                border: "none",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.opacity = "0.85";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.opacity = "1";
              }}
            >
              Book a Call
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              style={{
                background: "none",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
                padding: "7px",
                cursor: "pointer",
                display: "none",
                flexDirection: "column",
                gap: "4px",
                color: "rgba(240,240,255,0.7)",
              }}
              className="mobile-menu-btn"
            >
              <span
                style={{
                  display: "block",
                  width: "16px",
                  height: "1.5px",
                  background: "currentColor",
                  transition: "transform 0.2s ease",
                  transform: open ? "rotate(45deg) translateY(4px)" : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "16px",
                  height: "1.5px",
                  background: "currentColor",
                  opacity: open ? 0 : 1,
                  transition: "opacity 0.2s ease",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "16px",
                  height: "1.5px",
                  background: "currentColor",
                  transition: "transform 0.2s ease",
                  transform: open ? "rotate(-45deg) translateY(-4px)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        ref={drawerRef}
        style={{
          position: "fixed",
          top: "var(--nav-height)",
          left: 0,
          right: 0,
          zIndex: 99,
          background: "rgba(8, 8, 16, 0.98)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          backdropFilter: "blur(20px)",
          transform: open ? "translateY(0)" : "translateY(-110%)",
          transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
        className="mobile-drawer"
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setOpen(false)}
            style={{
              fontSize: "16px",
              fontWeight: "400",
              color: "rgba(240, 240, 255, 0.7)",
              textDecoration: "none",
              paddingBottom: "20px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {link.label}
          </a>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
