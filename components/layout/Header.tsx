"use client";

import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Credentials", href: "#credentials" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>
      <a className="wordmark" href="#top" aria-label="Kenrick Williams, home">
        Kenrick Williams<span>.</span>
      </a>

      {/* Desktop nav */}
      <nav className="site-nav" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
        <a className="nav-contact" href="#contact">
          Let&apos;s talk
        </a>
      </nav>

      {/* Mobile hamburger */}
      <button
        className={`hamburger${menuOpen ? " hamburger--open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile drawer */}
      <div
        ref={menuRef}
        className={`mobile-drawer${menuOpen ? " mobile-drawer--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} onClick={close}>
            {link.label}
          </a>
        ))}
        <a className="nav-contact" href="#contact" onClick={close}>
          Let&apos;s talk
        </a>
      </div>
    </header>
  );
}
