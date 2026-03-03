"use client";

import { motion } from "framer-motion";
import { Reveal } from "./reveal";
import type { CaseStudy } from "@/data/site";

type Props = {
  study: CaseStudy;
  index?: number;
};

export function CaseStudyCard({ study, index = 0 }: Props) {
  return (
    <Reveal delay={index * 0.1} direction="up">
      <motion.article
        whileHover={{ y: -3 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="card-surface group relative flex h-full flex-col rounded-2xl p-7 transition-shadow duration-300 hover:shadow-[var(--shadow-lg)] sm:p-8"
      >
        {/* Tag */}
        <span className="inline-flex w-fit rounded-full bg-[var(--surface-tint)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--accent)]">
          {study.tag}
        </span>

        <h3 className="mt-4 text-lg font-semibold leading-snug text-[var(--ink)]">
          {study.headline}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">
          {study.summary}
        </p>

        {/* Bottom accent */}
        <div className="mt-auto pt-6">
          <div className="h-px w-full bg-gradient-to-r from-[var(--accent-light)] via-[var(--line)] to-transparent opacity-60" />
        </div>
      </motion.article>
    </Reveal>
  );
}
