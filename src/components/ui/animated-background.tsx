"use client";

import { useEffect, useState } from "react";

export function AnimatedBackground() {
  const [mouseX, setMouseX] = useState(0.5);
  const [mouseY, setMouseY] = useState(0.5);

  useEffect(() => {
    const onMouse = (e: MouseEvent) => {
      setMouseX(e.clientX / window.innerWidth);
      setMouseY(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", onMouse, { passive: true });
    return () => window.removeEventListener("mousemove", onMouse);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Clean gradient orb — top left, follows mouse gently */}
      <div
        className="absolute h-[clamp(500px,60vw,900px)] w-[clamp(500px,60vw,900px)] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(30,58,95,0.08), transparent 70%)",
          top: "-15%",
          left: `${-20 + mouseX * 8}%`,
          transition: "left 4s cubic-bezier(0.25,0.1,0.25,1)",
        }}
      />

      {/* Clean gradient orb — bottom right, warm accent */}
      <div
        className="absolute h-[clamp(400px,50vw,700px)] w-[clamp(400px,50vw,700px)] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(184,149,106,0.06), transparent 70%)",
          bottom: "-10%",
          right: `${-15 + mouseY * -6}%`,
          transition: "right 4s cubic-bezier(0.25,0.1,0.25,1)",
        }}
      />
    </div>
  );
}
