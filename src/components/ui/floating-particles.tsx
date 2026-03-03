"use client";

import { motion } from "framer-motion";

/**
 * Clean, minimal floating geometric shapes.
 * Only used in the hero — not splattered across the whole page.
 */
const shapes = [
  { size: 100, x: "75%", y: "15%", duration: 14, borderColor: "var(--accent-light)", borderWidth: 2 },
  { size: 65, x: "85%", y: "55%", duration: 18, borderColor: "var(--brand-light)", borderWidth: 1.5 },
  { size: 45, x: "68%", y: "78%", duration: 12, borderColor: "var(--accent)", borderWidth: 1.5 },
  { size: 30, x: "82%", y: "35%", duration: 16, borderColor: "var(--accent-light)", borderWidth: 1 },
];

export function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: s.size,
            height: s.size,
            left: s.x,
            top: s.y,
            borderColor: s.borderColor,
            borderWidth: s.borderWidth,
            borderStyle: "solid",
            opacity: 0,
          }}
          animate={{
            y: [0, -25, 12, -18, 0],
            opacity: [0.15, 0.3, 0.18, 0.35, 0.15],
            scale: [1, 1.06, 0.96, 1.04, 1],
          }}
          transition={{
            duration: s.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
