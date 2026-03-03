"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navItems, company } from "@/data/site";
import { Logo } from "@/components/ui/logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on anchor click
  const handleNavClick = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[var(--line)] bg-[var(--surface)]/95 shadow-[var(--shadow-sm)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-12">
        {/* Logo / Wordmark */}
        <Link
          href="#home"
          className="transition-opacity duration-200 hover:opacity-80"
          onClick={handleNavClick}
        >
          <Logo variant="dark" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3.5 py-2 text-[13px] font-medium text-[var(--ink-muted)] transition-all duration-200 hover:bg-[var(--surface-tint)] hover:text-[var(--ink)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA + Phone */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={company.phoneHref}
            className="group inline-flex items-center gap-2 rounded-full border border-(--line) px-4 py-2 text-[13px] font-medium text-(--ink-muted) transition-all duration-200 hover:border-(--accent)/40 hover:text-(--ink)"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="shrink-0 text-(--accent) transition-transform duration-200 group-hover:scale-110">
              <path d="M2.5 1.5C2.5 1.5 1 1.5 1 3C1 6.5 6.5 12 10 12C11.5 12 11.5 10.5 11.5 10.5L9.5 8.5L8 9.5C8 9.5 5 6.5 4.5 4.5L5.5 3.5L3.5 1.5H2.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {company.phone}
          </a>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-(--accent) px-5 py-2.5 text-[13px] font-medium tracking-wide text-white shadow-(--shadow-sm) transition-all duration-300 hover:bg-(--accent-strong) active:scale-[0.98]"
          >
            Book a Consultation
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--line)] transition-colors duration-200 hover:bg-[var(--surface-tint)] lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <div className="flex w-5 flex-col items-center gap-[5px]">
            <span
              className={`block h-[1.5px] w-5 bg-[var(--ink)] transition-all duration-300 ${
                open ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-[var(--ink)] transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-[var(--ink)] transition-all duration-300 ${
                open ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden border-t border-[var(--line)] bg-[var(--surface-alt)] lg:hidden"
          >
            <nav className="flex flex-col px-5 py-4">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.25 }}
                >
                  <Link
                    href={item.href}
                    onClick={handleNavClick}
                    className="block rounded-md px-3 py-3 text-sm font-medium text-[var(--ink-muted)] transition-colors duration-200 hover:bg-[var(--surface-tint)] hover:text-[var(--ink)]"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-4 border-t border-[var(--line)] pt-4">
                <a
                  href={company.phoneHref}
                  className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-(--ink-muted) transition-colors duration-200 hover:text-(--ink)"
                >
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="shrink-0 text-(--accent)">
                    <path d="M2.5 1.5C2.5 1.5 1 1.5 1 3C1 6.5 6.5 12 10 12C11.5 12 11.5 10.5 11.5 10.5L9.5 8.5L8 9.5C8 9.5 5 6.5 4.5 4.5L5.5 3.5L3.5 1.5H2.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {company.phone}
                </a>
                <Link
                  href="#contact"
                  onClick={handleNavClick}
                  className="block w-full rounded-md bg-(--accent) px-5 py-3 text-center text-sm font-medium tracking-wide text-white transition-all duration-300 hover:bg-(--accent-strong)"
                >
                  Book a Consultation
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
