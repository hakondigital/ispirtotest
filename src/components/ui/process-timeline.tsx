"use client";

import { Reveal } from "./reveal";
import type { ProcessStep } from "@/data/site";

type Props = {
  steps: ProcessStep[];
};

export function ProcessTimeline({ steps }: Props) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute bottom-0 left-6 top-0 hidden w-px bg-gradient-to-b from-[var(--accent)] via-[var(--line)] to-transparent lg:block" />

      <div className="grid gap-8 lg:gap-0">
        {steps.map((step, i) => (
          <Reveal key={step.number} delay={i * 0.1}>
            <div className="group relative flex gap-6 lg:gap-10 lg:py-8">
              {/* Number circle */}
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface-alt)] text-sm font-semibold text-[var(--accent)] shadow-[var(--shadow-sm)] transition-all duration-500 group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white group-hover:shadow-[var(--shadow-md)]">
                {step.number}
              </div>

              {/* Content */}
              <div className="flex-1 pb-2">
                <h3 className="text-lg font-semibold text-[var(--ink)] sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-[var(--ink-muted)]">
                  {step.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
