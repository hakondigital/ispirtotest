"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Package } from "@/data/site";

type Props = {
  packages: Package[];
};

const numbers = ["01", "02", "03"];

export function PricingCards({ packages }: Props) {
  return (
    <div className="relative">
      {/* Desktop: 3-column card grid */}
      <div className="hidden gap-6 lg:grid lg:grid-cols-3">
        {packages.map((pkg, i) => {
          const isFeatured = pkg.featured === true;
          return (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className={`group relative flex flex-col rounded-2xl bg-white px-8 py-10 transition-all duration-500 ${
                isFeatured
                  ? "shadow-2xl shadow-(--ink)/12 ring-1 ring-(--accent)/30"
                  : "shadow-md shadow-(--ink)/6 ring-1 ring-(--ink)/8 hover:shadow-xl hover:shadow-(--ink)/10"
              }`}
            >
              {/* Featured top accent bar */}
              {isFeatured && (
                <div className="absolute inset-x-0 top-0 h-0.5 rounded-t-2xl bg-linear-to-r from-transparent via-(--accent) to-transparent" />
              )}

              {/* Large decorative number */}
              <div className="mb-5 overflow-hidden">
                <p
                  className="text-[5rem] font-bold leading-none tracking-tighter text-(--ink)/8 transition-all duration-700 group-hover:text-(--accent)/15"
                  style={{
                    fontFamily: "var(--font-cormorant, 'Cormorant Garamond'), Georgia, serif",
                  }}
                >
                  {numbers[i]}
                </p>
              </div>

              {/* Option label */}
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-(--accent)">
                {pkg.option}
                {isFeatured && (
                  <span className="ml-3 rounded-full bg-(--accent)/15 px-2 py-0.5 text-[9px] text-(--accent)">
                    Most Popular
                  </span>
                )}
              </p>

              {/* Title */}
              <h3
                className="mb-4 text-2xl font-semibold leading-tight text-(--ink) lg:text-3xl"
                style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond'), Georgia, serif" }}
              >
                {pkg.title}
              </h3>

              {/* Accent divider */}
              <div
                className={`mb-6 h-px transition-all duration-500 ${
                  isFeatured
                    ? "w-12 bg-(--accent)"
                    : "w-8 bg-(--ink)/15 group-hover:w-12 group-hover:bg-(--accent)/50"
                }`}
              />

              {/* Description */}
              <p className="mb-7 text-sm leading-relaxed text-(--ink)/65">
                {pkg.description}
              </p>

              {/* Features */}
              <div className="flex-1">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-(--ink)/40">
                  What&apos;s included
                </p>
                <ul className="space-y-3">
                  {pkg.features.map((feature, fi) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 + fi * 0.06 }}
                      className="flex items-start gap-3"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="mt-0.5 shrink-0 text-(--accent)"
                      >
                        <path
                          d="M2.5 7.5L5.5 10.5L11.5 3.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-sm leading-relaxed text-(--ink)/75">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>

                {/* Suitable for */}
                {pkg.suitableFor && pkg.suitableFor.length > 0 && (
                  <div className="mt-7">
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-(--ink)/35">
                      Suitable for
                    </p>
                    <ul className="space-y-2">
                      {pkg.suitableFor.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-xs text-(--ink)/55">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-(--accent)/50" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="mt-10">
                <Link
                  href="#contact"
                  className={`group/btn inline-flex w-full items-center justify-center gap-2.5 rounded-lg px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 active:scale-[0.98] ${
                    isFeatured
                      ? "bg-(--accent) text-white shadow-lg shadow-(--accent)/25 hover:bg-(--accent-strong)"
                      : "border border-(--ink)/15 text-(--ink)/70 hover:border-(--accent)/50 hover:bg-(--accent)/5 hover:text-(--ink)"
                  }`}
                >
                  Enquire About This Package
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    className="transition-transform duration-300 group-hover/btn:translate-x-1"
                  >
                    <path
                      d="M4.5 2.5l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile: stacked cards */}
      <div className="space-y-4 lg:hidden">
        {packages.map((pkg, i) => {
          const isFeatured = pkg.featured === true;
          return (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-xl bg-white p-6 ${
                isFeatured
                  ? "shadow-xl shadow-(--ink)/12 ring-1 ring-(--accent)/30"
                  : "shadow-md shadow-(--ink)/8 ring-1 ring-(--ink)/8"
              }`}
            >
              {isFeatured && (
                <div className="absolute inset-x-0 top-0 h-0.5 rounded-t-xl bg-linear-to-r from-transparent via-(--accent) to-transparent" />
              )}

              <div className="mb-1 flex items-center gap-3">
                <span
                  className="text-4xl font-bold leading-none text-(--ink)/8"
                  style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond'), Georgia, serif" }}
                >
                  {numbers[i]}
                </span>
                {isFeatured && (
                  <span className="rounded-full bg-(--accent)/15 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-(--accent)">
                    Popular
                  </span>
                )}
              </div>

              <h3
                className="mb-1 text-xl font-semibold text-(--ink)"
                style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond'), Georgia, serif" }}
              >
                {pkg.title}
              </h3>
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-(--accent)">
                {pkg.option}
              </p>
              <p className="mb-5 mt-3 text-sm leading-relaxed text-(--ink)/65">
                {pkg.description}
              </p>

              <div className="mb-5 h-px bg-(--ink)/8" />

              <ul className="mb-6 space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-(--ink)/75">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="mt-0.5 shrink-0 text-(--accent)"
                    >
                      <path
                        d="M2.5 7.5L5.5 10.5L11.5 3.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ${
                  isFeatured
                    ? "bg-(--accent) text-white hover:bg-(--accent-strong)"
                    : "border border-(--ink)/15 text-(--ink)/70 hover:border-(--accent)/50 hover:text-(--ink)"
                }`}
              >
                Enquire About This Package
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
