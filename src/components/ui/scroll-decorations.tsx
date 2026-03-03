"use client";

import { motion } from "framer-motion";

/**
 * A horizontal line that draws itself as it scrolls into view.
 */
export function ScrollLine({
  className,
  direction = "left",
}: {
  className?: string;
  direction?: "left" | "right";
}) {
  return (
    <div className={`relative h-0.5 overflow-hidden ${className ?? ""}`}>
      <motion.div
        className="absolute inset-y-0 h-full bg-linear-to-r from-(--accent) via-(--accent-light) to-transparent"
        style={direction === "right" ? { right: 0 } : { left: 0 }}
        initial={{ width: "0%", opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        viewport={{ once: true, margin: "-5%" }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      />
    </div>
  );
}

/**
 * A decorative shape that fades in as it enters the viewport.
 */
export function ScrollShape({
  className,
  shape = "circle",
  size = 120,
}: {
  className?: string;
  shape?: "circle" | "ring" | "square" | "diamond";
  size?: number;
}) {
  const shapeClass =
    shape === "circle" || shape === "ring"
      ? "rounded-full"
      : "rounded-lg";

  const border =
    shape === "ring"
      ? "border-[2.5px] border-[var(--accent)]/60"
      : shape === "diamond"
        ? "border-[1.5px] border-[var(--brand-light)]/50"
        : "bg-[var(--accent)]/15";

  return (
    <div className={`pointer-events-none ${className ?? ""}`}>
      <motion.div
        className={`${shapeClass} ${border}`}
        style={{ width: size, height: size }}
        initial={{ scale: 0.5, opacity: 0, rotate: 0 }}
        whileInView={{ scale: 1, opacity: 0.3, rotate: shape === "diamond" ? 45 : 15 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
      />
    </div>
  );
}

/**
 * A vertical progress line that animates in when visible.
 */
export function ScrollProgress({ className }: { className?: string }) {
  return (
    <div className={`relative w-0.5 bg-(--line) ${className ?? ""}`}>
      <motion.div
        className="absolute inset-x-0 top-0 w-full rounded-full bg-linear-to-b from-(--accent) to-(--accent-light)"
        initial={{ height: "0%", opacity: 0 }}
        whileInView={{ height: "100%", opacity: 1 }}
        viewport={{ once: true, margin: "-5%" }}
        transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
      />
    </div>
  );
}

/**
 * A number/text that fades in with a subtle vertical drift.
 */
export function ParallaxText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}) {
  return (
    <div className={className}>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 0.6 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/**
 * Decorative large outline text watermark — slides in when section enters view.
 */
export function ScrollWatermark({
  text,
  className,
}: {
  text: string;
  className?: string;
  variant?: "default" | "outline";
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 flex items-center overflow-hidden ${className ?? ""}`}
    >
      <motion.p
        className="whitespace-nowrap text-[14vw] uppercase leading-none tracking-[0.05em]"
        initial={{ x: "10%", opacity: 0 }}
        whileInView={{ x: "-3%", opacity: 0.07 }}
        viewport={{ once: false, margin: "-5%" }}
        transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          fontFamily: "var(--font-cormorant, 'Cormorant Garamond'), Georgia, serif",
          fontWeight: 700,
          color: "transparent",
          WebkitTextStroke: `2px var(--ink)`,
        }}
      >
        {text}
      </motion.p>
    </div>
  );
}
