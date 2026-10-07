"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulse: number;
  pulseSpeed: number;
}

interface Packet {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  active: boolean;
}

export default function SystemCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);
  const packetsRef = useRef<Packet[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initNodes();
    };

    const initNodes = () => {
      const count = Math.min(60, Math.floor((canvas.width * canvas.height) / 18000));
      nodesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 1,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.015,
      }));

      packetsRef.current = Array.from({ length: 8 }, () => ({
        fromNode: Math.floor(Math.random() * count),
        toNode: Math.floor(Math.random() * count),
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.004,
        active: true,
      }));
    };

    const maxDist = 160;

    const draw = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const nodes = nodesRef.current;
      const packets = packetsRef.current;

      // Move nodes
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += n.pulseSpeed;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      // Draw edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.08;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw packets traveling along edges
      packets.forEach((p) => {
        if (!p.active) return;
        const from = nodes[p.fromNode];
        const to = nodes[p.toNode];
        if (!from || !to) return;

        const dx = to.x - from.x;
        const dy = to.y - from.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > maxDist) {
          // Find a new valid edge
          p.fromNode = Math.floor(Math.random() * nodes.length);
          p.progress = 0;
          return;
        }

        p.progress += p.speed;
        if (p.progress >= 1) {
          p.fromNode = p.toNode;
          let newTo = Math.floor(Math.random() * nodes.length);
          while (newTo === p.fromNode) newTo = Math.floor(Math.random() * nodes.length);
          p.toNode = newTo;
          p.progress = 0;
          return;
        }

        const px = from.x + dx * p.progress;
        const py = from.y + dy * p.progress;

        // Packet glow
        const grad = ctx.createRadialGradient(px, py, 0, px, py, 4);
        grad.addColorStop(0, "rgba(34, 211, 238, 0.9)");
        grad.addColorStop(1, "rgba(34, 211, 238, 0)");
        ctx.beginPath();
        ctx.arc(px, py, 4, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Packet dot
        ctx.beginPath();
        ctx.arc(px, py, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(34, 211, 238, 0.95)";
        ctx.fill();
      });

      // Draw nodes
      nodes.forEach((n) => {
        const brightness = 0.5 + 0.5 * Math.sin(n.pulse);
        const alpha = 0.15 + brightness * 0.25;

        // Node ring
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius + 3, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(59, 130, 246, ${alpha * 0.4})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();

        // Node core
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96, 165, 250, ${alpha})`;
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, opacity: 0.6 }}
      aria-hidden="true"
    />
  );
}
