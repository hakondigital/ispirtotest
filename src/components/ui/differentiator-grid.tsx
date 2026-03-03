"use client";

import { motion } from "framer-motion";
import { Reveal } from "./reveal";
import type { Differentiator } from "@/data/site";

const icons: Record<string, React.ReactNode> = {
  shield: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  key: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
  ),
  chart: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  handshake: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
    </svg>
  ),
};

type Props = {
  items: Differentiator[];
};

export function DifferentiatorGrid({ items }: Props) {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.1}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="group relative flex h-full gap-5 rounded-2xl border border-[var(--line)] bg-[var(--surface-alt)] p-7 shadow-[var(--shadow-sm)] transition-shadow duration-300 hover:shadow-[var(--shadow-lg)] sm:p-8"
          >
            {/* Animated corner accent */}
            <div className="absolute right-0 top-0 h-16 w-16 overflow-hidden rounded-tr-2xl">
              <div className="absolute -right-8 -top-8 h-16 w-16 rotate-45 bg-gradient-to-br from-[var(--accent)]/8 to-transparent transition-all duration-500 group-hover:from-[var(--accent)]/15" />
            </div>

            {/* Icon */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-tint)] text-[var(--brand)] transition-all duration-300 group-hover:bg-[var(--brand)] group-hover:text-white">
              {icons[item.icon]}
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-base font-semibold text-[var(--ink)] sm:text-lg">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
                {item.description}
              </p>
            </div>
          </motion.div>
        </Reveal>
      ))}
    </div>
  );
}
