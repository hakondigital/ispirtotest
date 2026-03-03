"use client";

import { motion } from "framer-motion";
import { Reveal } from "./reveal";
import type { Service } from "@/data/site";

type Props = {
  service: Service;
  index?: number;
};

export function ServiceCard({ service, index = 0 }: Props) {
  return (
    <Reveal delay={index * 0.08}>
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="card-surface group relative flex h-full flex-col overflow-hidden rounded-2xl p-7 transition-shadow duration-300 hover:shadow-[var(--shadow-lg)] sm:p-8"
      >
        {/* Accent line at top */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <h3 className="text-xl font-semibold text-[var(--ink)] sm:text-2xl">
          {service.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">
          {service.description}
        </p>

        <ul className="mt-5 space-y-2.5 text-sm text-[var(--ink)]">
          {service.outcomes.map((outcome) => (
            <li key={outcome} className="flex items-start gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      </motion.article>
    </Reveal>
  );
}
