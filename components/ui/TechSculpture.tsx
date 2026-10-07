"use client";

import { useEffect, useRef } from "react";

// Slow-drifting orbital rings — smooth, never re-seeds on resize
export default function TechSculpture() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let t = 0;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Set canvas size once — no re-seeding on resize
    const setSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width  = canvas.offsetWidth  * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      if (!reduceMotion) t += 0.003;

      const cx = w * 0.5;
      const cy = h * 0.46;
      const base = Math.min(w, h) * 0.38;

      // Three slowly tilting ellipses at different depths
      const rings = [
        { rx: base * 1.05, ry: base * 0.28, tilt: t * 0.7,        alpha: 0.26 },
        { rx: base * 0.72, ry: base * 0.20, tilt: t * 0.7 + 1.1,  alpha: 0.20 },
        { rx: base * 0.42, ry: base * 0.12, tilt: t * 0.7 + 2.2,  alpha: 0.15 },
      ];

      for (const ring of rings) {
        const cos = Math.cos(ring.tilt);
        const sin = Math.sin(ring.tilt);

        ctx.beginPath();
        for (let i = 0; i <= 120; i++) {
          const a = (i / 120) * Math.PI * 2;
          const ex = ring.rx * Math.cos(a);
          const ey = ring.ry * Math.sin(a);
          const x = cx + ex * cos - ey * sin;
          const y = cy + ex * sin + ey * cos;
          i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.strokeStyle = `rgba(26, 122, 130, ${ring.alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Subtle equator dot at the nearest point
        const dotX = cx + ring.rx * cos;
        const dotY = cy + ring.rx * sin;
        ctx.beginPath();
        ctx.arc(dotX, dotY, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(26, 122, 130, ${ring.alpha * 1.8})`;
        ctx.fill();
      }

      // Faint centre cross-hair
      ctx.globalAlpha = 0.07;
      ctx.strokeStyle = "rgba(26,122,130,1)";
      ctx.lineWidth = 0.5;
      ctx.beginPath(); ctx.moveTo(cx - 12, cy); ctx.lineTo(cx + 12, cy); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(cx, cy - 12); ctx.lineTo(cx, cy + 12); ctx.stroke();
      ctx.globalAlpha = 1;

      raf = requestAnimationFrame(draw);
    };

    setSize();
    // Only resize canvas dimensions on actual window resize, never re-seed
    const onResize = () => setSize();
    window.addEventListener("resize", onResize);
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="tech-sculpture" aria-hidden="true" />;
}
