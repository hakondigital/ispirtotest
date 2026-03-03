"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { Stat } from "@/data/site";

function AnimatedNumber({
  value,
  suffix,
  inView,
}: {
  value: string;
  suffix?: string;
  inView: boolean;
}) {
  const num = parseInt(value);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let frame: number;
    const duration = 1800;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * num));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, num]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

type Props = {
  stats: Stat[];
};

export function StatsCounter({ stats }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
            delay: i * 0.15,
          }}
          className="group relative text-center"
        >
          {/* Decorative top line */}
          <div className="mx-auto mb-4 h-px w-10 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-60" />

          <p className="font-[var(--font-cormorant),'Cormorant_Garamond',serif] text-4xl font-semibold text-[var(--ink)] sm:text-5xl">
            <AnimatedNumber
              value={stat.value}
              suffix={stat.suffix}
              inView={inView}
            />
          </p>
          <p className="mt-2 text-xs font-medium uppercase tracking-[0.1em] text-[var(--ink-muted)]">
            {stat.label}
          </p>

          {/* Decorative bottom line */}
          <div className="mx-auto mt-4 h-px w-10 bg-gradient-to-r from-transparent via-[var(--line)] to-transparent" />
        </motion.div>
      ))}
    </div>
  );
}
