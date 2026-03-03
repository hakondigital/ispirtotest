"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Testimonial } from "@/data/site";

type Props = {
  testimonials: Testimonial[];
};

export function TestimonialCarousel({ testimonials }: Props) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((i) => (i + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(
      (i) => (i - 1 + testimonials.length) % testimonials.length
    );
  }, [testimonials.length]);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <div className="relative mx-auto max-w-3xl">
      {/* Quote mark */}
      <div className="mb-6 font-[var(--font-cormorant),'Cormorant_Garamond',serif] text-7xl leading-none text-[var(--accent-light)] sm:text-8xl">
        &ldquo;
      </div>

      {/* Testimonial */}
      <div className="relative min-h-[180px] sm:min-h-[140px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, x: direction * 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -30 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <blockquote className="text-lg leading-relaxed text-[var(--ink)] sm:text-xl lg:text-2xl">
              {t.quote}
            </blockquote>
            <div className="mt-6">
              <p className="text-sm font-semibold text-[var(--ink)]">
                {t.name}
              </p>
              <p className="mt-0.5 text-xs text-[var(--ink-muted)]">
                {t.context}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="mt-10 flex items-center gap-4">
        <button
          onClick={prev}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink-muted)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          aria-label="Previous testimonial"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="rotate-180"
          >
            <path
              d="M6 3l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 bg-[var(--accent)]"
                  : "w-1.5 bg-[var(--line-strong)] hover:bg-[var(--ink-faint)]"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink-muted)] transition-all duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
          aria-label="Next testimonial"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 3l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
