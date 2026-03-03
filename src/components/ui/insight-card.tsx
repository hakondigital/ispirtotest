"use client";

import { motion } from "framer-motion";
import { Reveal } from "./reveal";
import type { Insight } from "@/data/site";

type Props = {
  insight: Insight;
  index?: number;
};

export function InsightCard({ insight, index = 0 }: Props) {
  return (
    <Reveal delay={index * 0.08}>
      <motion.article
        whileHover={{ y: -3 }}
        transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
        className="group flex h-full cursor-pointer flex-col rounded-xl border border-[var(--line)] bg-[var(--surface-alt)] p-6 shadow-[var(--shadow-xs)] transition-all duration-300 hover:border-[var(--accent-light)] hover:shadow-[var(--shadow-md)]"
      >
        {/* Topic tag */}
        <span className="mb-3 inline-flex w-fit text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--accent)]">
          {insight.topic}
        </span>

        <h3 className="text-base font-semibold leading-snug text-[var(--ink)] transition-colors duration-200 group-hover:text-[var(--brand)] sm:text-lg">
          {insight.title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--ink-muted)]">
          {insight.summary}
        </p>

        <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--brand)] transition-all duration-200 group-hover:gap-2.5">
          Read more
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          >
            <path
              d="M4.5 2.5l3.5 3.5-3.5 3.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </motion.article>
    </Reveal>
  );
}
