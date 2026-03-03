"use client";

import { marqueeItems } from "@/data/site";

export function MarqueeStrip() {
  // Double the items for seamless infinite loop
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative overflow-hidden border-y border-[var(--line)] bg-[var(--surface-alt)] py-4">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--surface-alt)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--surface-alt)] to-transparent" />

      <div className="animate-marquee flex w-max gap-8">
        {items.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center gap-8">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--ink-muted)]">
              {item}
            </span>
            <span className="h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
          </span>
        ))}
      </div>
    </div>
  );
}
