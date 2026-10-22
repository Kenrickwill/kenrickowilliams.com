"use client";

import { useEffect, useRef } from "react";

interface FlowParticle {
  x: number; y: number;
  life: number; maxLife: number;
  speed: number;
}

function noise(x: number, y: number, t: number) {
  return (
    Math.sin(x * 0.013 + t) * Math.cos(y * 0.009 + t * 0.7) +
    Math.sin(x * 0.006 + y * 0.008 + t * 1.1) * 0.5
  );
}

export default function TechSculpture() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let t = 0;
    let particles: FlowParticle[] = [];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const setSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const initParticles = () => {
      const W = canvas.offsetWidth, H = canvas.offsetHeight;
      const count = Math.round((W * H) / 2000);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        life: Math.random() * 160,
        maxLife: 160 + Math.random() * 120,
        speed: 0.5 + Math.random() * 0.7,
      }));
    };

    const draw = () => {
      const W = canvas.offsetWidth, H = canvas.offsetHeight;

      // Slow fade creates trail effect
      ctx.fillStyle = "rgba(11,13,15,0.06)";
      ctx.fillRect(0, 0, W, H);

      if (!reduceMotion) t += 0.004;

      for (const p of particles) {
        const angle = noise(p.x, p.y, t) * Math.PI * 2;
        const px = p.x, py = p.y;
        p.x += Math.cos(angle) * p.speed;
        p.y += Math.sin(angle) * p.speed;
        p.life++;

        const alpha =
          Math.min(p.life / 40, 1) * (1 - p.life / p.maxLife) * 0.55;

        ctx.strokeStyle = `rgba(26,122,130,${alpha})`;
        ctx.lineWidth = 0.9;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();

        if (
          p.life > p.maxLife ||
          p.x < -5 || p.x > W + 5 ||
          p.y < -5 || p.y > H + 5
        ) {
          p.x = Math.random() * W;
          p.y = Math.random() * H;
          p.life = 0;
          p.maxLife = 160 + Math.random() * 120;
        }
      }

      raf = requestAnimationFrame(draw);
    };

    const onResize = () => { setSize(); initParticles(); };
    window.addEventListener("resize", onResize);
    setSize();
    initParticles();
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="tech-sculpture" aria-hidden="true" />;
}
