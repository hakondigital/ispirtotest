"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { buyerTypes, budgetRanges } from "@/data/site";

const inputClasses =
  "w-full rounded-lg border border-[var(--line)] bg-[var(--surface-alt)] px-4 py-3 text-sm text-[var(--ink)] placeholder:text-[var(--ink-faint)] transition-all duration-200 focus:border-[var(--brand)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/10";

const labelClasses =
  "mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-[var(--ink-muted)]";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-2xl border border-[var(--line)] bg-[var(--surface-alt)] p-10 text-center shadow-[var(--shadow-sm)]"
      >
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent-light)]/20">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-[var(--accent)]"
          >
            <path
              d="M20 6L9 17l-5-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-[var(--ink)]">
          Thank you for reaching out
        </h3>
        <p className="mt-2 text-sm text-[var(--ink-muted)]">
          We&apos;ll be in touch within 24 hours to arrange your discovery
          call.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-[var(--line)] bg-[var(--surface-alt)] p-7 shadow-[var(--shadow-sm)] sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelClasses}>
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your name"
            className={inputClasses}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@example.com"
            className={inputClasses}
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="0400 000 000"
            className={inputClasses}
          />
        </div>

        {/* Buyer Type */}
        <div>
          <label htmlFor="buyerType" className={labelClasses}>
            I&apos;m a...
          </label>
          <select id="buyerType" name="buyerType" className={inputClasses}>
            <option value="">Select buyer type</option>
            {buyerTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Budget Range */}
        <div className="sm:col-span-2">
          <label htmlFor="budget" className={labelClasses}>
            Budget Range
          </label>
          <select id="budget" name="budget" className={inputClasses}>
            <option value="">Select budget range</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClasses}>
            Tell us about your property goals
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="What are you looking for? Any particular suburbs, timelines or requirements?"
            className={`${inputClasses} resize-none`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-lg bg-[var(--brand)] px-6 py-3.5 text-sm font-semibold tracking-wide text-white shadow-[var(--shadow-sm)] transition-all duration-300 hover:bg-[var(--brand-strong)] active:scale-[0.99] sm:w-auto"
      >
        Send Enquiry
      </button>

      <p className="mt-4 text-xs text-[var(--ink-faint)]">
        We respect your privacy. Your details will only be used to respond to
        your enquiry.
      </p>
    </form>
  );
}
