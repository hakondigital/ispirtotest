import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ServiceCard } from "@/components/ui/service-card";
import { ProcessTimeline } from "@/components/ui/process-timeline";
import { CaseStudyCard } from "@/components/ui/case-study-card";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";
import { InsightCard } from "@/components/ui/insight-card";
import { ContactForm } from "@/components/ui/contact-form";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { MarqueeStrip } from "@/components/ui/marquee-strip";
import { StatsCounter } from "@/components/ui/stats-counter";
import { DifferentiatorGrid } from "@/components/ui/differentiator-grid";
import { PricingCards } from "@/components/ui/pricing-cards";
import {
  ScrollLine,
  ScrollShape,
  ScrollProgress,
  ScrollWatermark,
  ParallaxText,
} from "@/components/ui/scroll-decorations";
import {
  company,
  hero,
  about,
  services,
  processSteps,
  caseStudies,
  testimonials,
  insights,
  stats,
  differentiators,
  packages,
} from "@/data/site";

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════ */}
      <section id="home" className="relative overflow-hidden">
        {/* Floating particles layer */}
        <FloatingParticles />

        {/* Hero decorative elements — clean geometric rings */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 top-1/2 hidden h-[650px] w-[650px] -translate-y-1/2 lg:block">
            <div className="animate-spin-slow h-full w-full rounded-full border-[1.5px] border-[var(--accent)]/[0.12]" />
            <div className="absolute inset-12 animate-spin-slow rounded-full border border-dashed border-[var(--brand)]/[0.1]" style={{ animationDirection: "reverse", animationDuration: "80s" }} />
            <div className="absolute inset-24 rounded-full border border-[var(--accent)]/[0.08]" />
            <div className="absolute inset-36 animate-spin-slow rounded-full border border-dashed border-[var(--brand)]/[0.06]" style={{ animationDuration: "120s" }} />
          </div>

          {/* Subtle vertical lines */}
          <div className="absolute bottom-0 left-[15%] top-[20%] hidden w-px bg-gradient-to-b from-transparent via-[var(--line)] to-transparent opacity-50 lg:block" />
          <div className="absolute bottom-[10%] right-[20%] top-0 hidden w-px bg-gradient-to-b from-transparent via-[var(--accent)]/30 to-transparent lg:block" />
        </div>

        <div className="mx-auto flex min-h-[94vh] w-full max-w-7xl flex-col justify-center px-5 py-28 sm:px-8 lg:px-12">
          <div className="relative max-w-4xl">
            {/* Label */}
            <Reveal delay={0.1}>
              <div className="mb-7 flex items-center gap-3">
                <div className="h-px w-8 bg-[var(--accent)]" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                  {company.name} &mdash; {company.location}
                </p>
              </div>
            </Reveal>

            {/* Headline */}
            <Reveal delay={0.2}>
              <h1 className="text-balance text-4xl leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl">
                {hero.headline}
              </h1>
            </Reveal>

            {/* Subheadline */}
            <Reveal delay={0.35}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-[var(--ink-muted)] sm:text-lg">
                {hero.subheadline}
              </p>
            </Reveal>

            {/* Pills */}
            <Reveal delay={0.5}>
              <div className="mt-8 flex flex-wrap gap-3">
                {hero.pills.map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface-alt)] px-4 py-2 text-xs font-medium tracking-wide text-[var(--ink-muted)] shadow-[var(--shadow-xs)]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    {pill}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.65}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-lg bg-(--accent) px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-(--shadow-md) transition-all duration-300 hover:bg-(--accent-strong) hover:shadow-(--shadow-lg) active:scale-[0.98]"
                >
                  {hero.ctaPrimary}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M5 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <Link
                  href="#process"
                  className="group inline-flex items-center gap-2 rounded-lg border border-[var(--line-strong)] bg-transparent px-7 py-3.5 text-sm font-semibold tracking-wide text-[var(--ink)] shadow-[var(--shadow-xs)] transition-all duration-300 hover:border-[var(--brand)] hover:bg-[var(--surface-tint)] hover:text-[var(--brand)] active:scale-[0.98]"
                >
                  {hero.ctaSecondary}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  >
                    <path
                      d="M3 5l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </Reveal>

            {/* Scroll indicator */}
            <Reveal delay={0.9}>
              <div className="mt-16 flex items-center gap-3 text-[var(--ink-faint)]">
                <div className="flex h-8 w-5 items-start justify-center rounded-full border border-[var(--line-strong)] p-1">
                  <div className="h-1.5 w-0.5 animate-float-medium rounded-full bg-[var(--accent)]" />
                </div>
                <span className="text-[11px] uppercase tracking-[0.1em]">
                  Scroll to explore
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--surface)] to-transparent" />
      </section>

      {/* ═══════════════════════════════════════
          MARQUEE TRUST STRIP
      ═══════════════════════════════════════ */}
      <MarqueeStrip />

      {/* ═══════════════════════════════════════
          STATS SECTION
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--surface-tint)]/50 to-transparent" />
        </div>
        <div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
          <Reveal>
            <div className="mb-12 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">
                By The Numbers
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl">
                Built on Research, Driven by Results
              </h2>
            </div>
          </Reveal>
          <StatsCounter stats={stats} />
        </div>

        {/* Scroll-reactive line divider below stats */}
        <ScrollLine className="mx-auto max-w-5xl" />
      </section>

      {/* ═══════════════════════════════════════
          ABOUT SECTION
      ═══════════════════════════════════════ */}
      <Section
        id="about"
        tone="default"
        label="About"
        title={about.headline}
        subtitle={about.intro}
      >
        <div className="relative">
          {/* Scroll-reactive watermark */}
          <ScrollWatermark text="About" className="hidden lg:block" />

          {/* Scroll-reactive shape — fades in as you scroll past */}
          <ScrollShape
            shape="ring"
            size={200}
            className="absolute -right-6 -top-6 hidden lg:block"
          />

          {/* Parallax section number */}
          <ParallaxText
            className="pointer-events-none absolute -left-12 -top-8 hidden lg:block"
            speed={0.4}
          >
            <span className="text-[10rem] leading-none tracking-tight" style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond'), Georgia, serif", fontWeight: 700, color: "var(--accent)", opacity: 0.07 }}>
              01
            </span>
          </ParallaxText>

          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Body copy */}
            <div className="lg:col-span-3">
              {about.body.map((paragraph, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <p className="mb-5 text-sm leading-relaxed text-[var(--ink-muted)] last:mb-0 sm:text-base">
                    {paragraph}
                  </p>
                </Reveal>
              ))}

              {/* Additional about detail */}
              <Reveal delay={0.35}>
                <div className="mt-8 flex items-start gap-4 rounded-xl bg-[var(--surface-tint)] p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand)] text-white">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--ink)]">
                      Licensed & Registered
                    </p>
                    <p className="mt-1 text-sm text-[var(--ink-muted)]">
                      Ispirto Property Advisory operates under ABN {company.abn}, providing fully licensed buyers agency services across Australia.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Values */}
            <div className="space-y-6 lg:col-span-2">
              {about.values.map((value, i) => (
                <Reveal key={value.title} delay={i * 0.12} direction="left">
                  <div className="group rounded-xl border border-[var(--line)] bg-[var(--surface-alt)] p-6 shadow-[var(--shadow-xs)] transition-all duration-300 hover:shadow-[var(--shadow-md)]">
                    {/* Animated accent line */}
                    <div className="mb-3 h-px w-8 bg-gradient-to-r from-[var(--accent)] to-transparent transition-all duration-500 group-hover:w-16" />
                    <h3 className="text-base font-semibold text-[var(--ink)] sm:text-lg">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
                      {value.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════
          WHY ISPIRTO — DIFFERENTIATORS
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden border-t border-[var(--line)] bg-[var(--surface-tint)]">
        {/* Scroll-reactive watermark */}
        <ScrollWatermark text="Ispirto" className="hidden lg:block" />

        {/* Scroll-reactive shapes */}
        <ScrollShape
          shape="diamond"
          size={140}
          className="absolute left-8 top-24 hidden lg:block"
        />
        <ScrollShape
          shape="circle"
          size={100}
          className="absolute right-8 bottom-20 hidden lg:block"
        />

        {/* Parallax section number */}
        <ParallaxText
          className="pointer-events-none absolute right-12 top-16 hidden lg:block"
          speed={0.35}
        >
          <span className="text-[10rem] leading-none tracking-tight" style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond'), Georgia, serif", fontWeight: 700, color: "var(--brand)", opacity: 0.05 }}>
            02
          </span>
        </ParallaxText>

        <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
          <div className="mb-14 max-w-3xl">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">
                Why Ispirto
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl">
                What Sets Us Apart
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-base leading-relaxed text-[var(--ink-muted)] sm:text-lg">
                In a market full of noise, Ispirto brings clarity. Here&apos;s why serious buyers and investors choose to work with us.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-6 h-px w-16 bg-gradient-to-r from-[var(--accent)] to-transparent" />
            </Reveal>
          </div>

          <DifferentiatorGrid items={differentiators} />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES SECTION
      ═══════════════════════════════════════ */}
      <Section
        id="services"
        tone="default"
        label="What We Do"
        title="Services Built Around Your Property Goals"
        subtitle="From first-home buyers to seasoned investors, we tailor our approach to match your unique brief and objectives."
      >
        <div className="relative">
          {/* Scroll-reactive watermark */}
          <ScrollWatermark text="Services" className="hidden lg:block" />

          {/* Scroll-reactive progress bar on the left edge */}
          <ScrollProgress className="absolute -left-6 top-0 hidden h-full lg:block" />

          {/* Parallax section number */}
          <ParallaxText
            className="pointer-events-none absolute -right-8 top-0 hidden lg:block"
            speed={0.3}
          >
            <span className="text-[10rem] leading-none tracking-tight" style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond'), Georgia, serif", fontWeight: 700, color: "var(--accent)", opacity: 0.06 }}>
              03
            </span>
          </ParallaxText>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════
          PACKAGES / PRICING SECTION
      ═══════════════════════════════════════ */}
      <section id="packages" className="relative overflow-hidden bg-(--surface)">
        {/* Background depth orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-40 h-150 w-150 rounded-full bg-[radial-gradient(circle,rgba(30,58,95,0.05),transparent_60%)]" />
          <div className="absolute -bottom-20 -right-20 h-125 w-125 rounded-full bg-[radial-gradient(circle,rgba(184,149,106,0.07),transparent_55%)]" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
          {/* Section header */}
          <div className="mb-16 max-w-3xl">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-(--accent)">
                Our Packages
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl text-(--ink) sm:text-4xl lg:text-5xl">
                Choose the Right Level of Support
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-base leading-relaxed text-(--ink)/60 sm:text-lg">
                Whether you need research guidance, full-service representation or expert negotiation — we have a package tailored to where you are in your property journey.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-6 h-px w-16 bg-linear-to-r from-(--accent) to-transparent" />
            </Reveal>
          </div>

          <PricingCards packages={packages} />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          MID-PAGE CTA BANNER
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-(--surface)">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-40 h-125 w-125 rounded-full bg-[radial-gradient(circle,rgba(184,149,106,0.08),transparent_60%)]" />
          <div className="absolute -bottom-20 -right-20 h-100 w-100 rounded-full bg-[radial-gradient(circle,rgba(30,58,95,0.06),transparent_55%)]" />
        </div>

        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 py-20 text-center sm:px-8 sm:py-28">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--accent)" }}>
              Start Your Property Journey
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl" style={{ color: "var(--ink)" }}>
              The Right Property Decision Starts With the Right Conversation
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed sm:text-lg" style={{ color: "var(--ink-muted)" }}>
              Whether you&apos;re buying your first home, upgrading, or investing — a strategic discovery call with Ispirto will give you clarity on your next move.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-(--accent) px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg transition-all duration-300 hover:bg-(--accent-strong) active:scale-[0.98]"
              >
                Book a Discovery Call
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <a
                href={company.phoneHref}
                className="inline-flex items-center gap-2 rounded-lg border border-(--line-strong) px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 hover:border-(--accent) hover:text-(--accent) active:scale-[0.98]"
                style={{ color: "var(--ink-muted)" }}
              >
                Call {company.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROCESS SECTION
      ═══════════════════════════════════════ */}
      <Section
        id="process"
        tone="default"
        label="How It Works"
        title="A Proven Process, Tailored to You"
        subtitle="Our structured approach ensures nothing is left to chance. From discovery call to settlement, you're guided at every step."
      >
        <div className="relative">
          {/* Scroll-reactive watermark */}
          <ScrollWatermark text="Process" className="hidden lg:block" />

          {/* Scroll-reactive shape — appears while scrolling through */}
          <ScrollShape
            shape="ring"
            size={260}
            className="absolute -right-16 top-1/4 hidden lg:block"
          />

          {/* Parallax section number */}
          <ParallaxText
            className="pointer-events-none absolute -left-12 top-12 hidden lg:block"
            speed={0.4}
          >
            <span className="text-[10rem] leading-none tracking-tight" style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond'), Georgia, serif", fontWeight: 700, color: "var(--brand)", opacity: 0.06 }}>
              04
            </span>
          </ParallaxText>

          <ProcessTimeline steps={processSteps} />

          {/* Post-process CTA */}
          <Reveal delay={0.3}>
            <div className="mt-14 flex items-center gap-5 rounded-xl border border-[var(--line)] bg-[var(--surface-alt)] p-6 shadow-[var(--shadow-sm)] sm:p-8">
              <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] sm:flex">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-[var(--ink)]">
                  Have questions about the process?
                </p>
                <p className="mt-1 text-sm text-[var(--ink-muted)]">
                  Every brief is different. Book a no-obligation discovery call and we&apos;ll walk you through exactly how we&apos;d approach your property search.
                </p>
              </div>
              <Link
                href="#contact"
                className="hidden shrink-0 rounded-lg bg-[var(--brand)] px-5 py-2.5 text-sm font-semibold tracking-wide text-white shadow-[var(--shadow-sm)] transition-all duration-300 hover:bg-[var(--brand-strong)] sm:inline-flex"
              >
                Get in Touch
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Scroll-reactive line between process and results */}
      <ScrollLine className="mx-auto max-w-5xl" direction="right" />

      {/* ═══════════════════════════════════════
          CASE STUDIES / CLIENT WINS
      ═══════════════════════════════════════ */}
      <Section
        id="results"
        tone="tint"
        label="Client Wins"
        title="Real Results for Real Buyers"
        subtitle="Every property story is different. Here are some of the outcomes we've delivered for our clients."
      >
        <div className="relative">
          {/* Scroll-reactive watermark */}
          <ScrollWatermark text="Results" className="hidden lg:block" />

          {/* Parallax number decoration */}
          <ParallaxText
            className="pointer-events-none absolute -left-8 top-4 hidden lg:block"
            speed={0.35}
          >
            <span className="text-[10rem] leading-none tracking-tight" style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond'), Georgia, serif", fontWeight: 700, color: "var(--accent)", opacity: 0.08 }}>
              05
            </span>
          </ParallaxText>

          {/* Scroll-reactive shape */}
          <ScrollShape
            shape="diamond"
            size={150}
            className="absolute -right-6 top-1/3 hidden lg:block"
          />

          <div className="grid gap-6 sm:grid-cols-2">
            {caseStudies.map((study, i) => (
              <CaseStudyCard key={study.headline} study={study} index={i} />
            ))}
          </div>

          {/* Results summary bar */}
          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 rounded-xl bg-[var(--surface-alt)] px-6 py-5 text-center shadow-[var(--shadow-xs)] sm:gap-12">
              {[
                { label: "Home Buyers", icon: "🏠" },
                { label: "Investors", icon: "📈" },
                { label: "Auction Wins", icon: "🏆" },
                { label: "Off-Market Deals", icon: "🔑" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--ink-muted)]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ═══════════════════════════════════════
          TESTIMONIALS SECTION
      ═══════════════════════════════════════ */}
      <section id="testimonials" className="relative overflow-hidden border-t border-[var(--line)]">
        {/* Clean background — just a subtle center line and scroll-reactive shape */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-[var(--line)] to-transparent opacity-40" />
        </div>

        {/* Scroll-reactive watermark */}
        <ScrollWatermark text="Clients" className="hidden lg:block" />

        <ScrollShape
          shape="circle"
          size={220}
          className="pointer-events-none absolute -right-12 top-1/2 -translate-y-1/2 hidden lg:block"
        />

        {/* Parallax section number */}
        <ParallaxText
          className="pointer-events-none absolute right-16 top-8 hidden lg:block"
          speed={0.3}
        >
          <span className="text-[10rem] leading-none tracking-tight" style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond'), Georgia, serif", fontWeight: 700, color: "var(--brand)", opacity: 0.05 }}>
            06
          </span>
        </ParallaxText>

        <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
          <div className="mb-14 max-w-3xl">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">
                Testimonials
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl">
                What Our Clients Say
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-6 h-px w-16 bg-gradient-to-r from-[var(--accent)] to-transparent" />
            </Reveal>
          </div>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* ═══════════════════════════════════════
          INSIGHTS / EDUCATION SECTION
      ═══════════════════════════════════════ */}
      <Section
        id="insights"
        tone="tint"
        label="Insights"
        title="Property Knowledge You Can Use"
        subtitle="Educational resources and market insights to help you make better property decisions."
      >
        <div className="relative">
          {/* Scroll-reactive watermark */}
          <ScrollWatermark text="Insights" className="hidden lg:block" />

          {/* Scroll-reactive shape */}
          <ScrollShape
            shape="diamond"
            size={160}
            className="absolute -right-4 top-8 hidden lg:block"
          />

          {/* Parallax section number */}
          <ParallaxText
            className="pointer-events-none absolute -left-10 top-4 hidden lg:block"
            speed={0.35}
          >
            <span className="text-[10rem] leading-none tracking-tight" style={{ fontFamily: "var(--font-cormorant, 'Cormorant Garamond'), Georgia, serif", fontWeight: 700, color: "var(--accent)", opacity: 0.06 }}>
              07
            </span>
          </ParallaxText>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {insights.map((insight, i) => (
              <InsightCard key={insight.title} insight={insight} index={i} />
            ))}
          </div>

          {/* Instagram follow prompt */}
          <Reveal delay={0.5}>
            <div className="mt-12 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center sm:text-left">
              <p className="text-sm text-[var(--ink-muted)]">
                Follow us for daily property insights and tips
              </p>
              <a
                href={company.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--line-strong)] bg-[var(--surface-alt)] px-5 py-2.5 text-sm font-semibold text-[var(--ink)] shadow-[var(--shadow-xs)] transition-all duration-300 hover:border-[var(--brand)] hover:text-[var(--brand)]"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
                {company.instagramHandle}
              </a>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ═══════════════════════════════════════
          CONTACT / CTA SECTION
      ═══════════════════════════════════════ */}
      {/* Scroll-reactive line before contact */}
      <ScrollLine className="mx-auto max-w-5xl" />

      <section id="contact" className="relative overflow-hidden">
        {/* Scroll-reactive watermark */}
        <ScrollWatermark text="Contact" className="hidden lg:block" />

        {/* Scroll-reactive shapes for contact section */}
        <ScrollShape
          shape="ring"
          size={300}
          className="pointer-events-none absolute -left-16 bottom-16 hidden lg:block"
        />
        <ScrollShape
          shape="circle"
          size={120}
          className="pointer-events-none absolute right-12 top-24 hidden lg:block"
        />

        <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
          <div className="mb-14 max-w-3xl">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">
                Get Started
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl">
                Ready to Secure the Right Property?
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-base leading-relaxed text-[var(--ink-muted)] sm:text-lg">
                Whether you&apos;re a first-time buyer or an experienced investor, a strategic conversation is the first step.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-6 h-px w-16 bg-gradient-to-r from-[var(--accent)] to-transparent" />
            </Reveal>
          </div>

          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Contact details */}
            <div className="lg:col-span-2">
              <Reveal direction="left" delay={0.15}>
                <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface-alt)] p-7 shadow-[var(--shadow-sm)] sm:p-8">
                  <h3 className="text-xl font-semibold text-[var(--ink)] sm:text-2xl">
                    Prefer to talk?
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">
                    Call us directly or send a message. We&apos;ll get back to
                    you within 24 hours.
                  </p>

                  <div className="mt-7 space-y-5">
                    {/* Phone */}
                    <a href={company.phoneHref} className="group flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--surface-tint)] text-[var(--brand)] transition-colors duration-200 group-hover:bg-[var(--brand)] group-hover:text-white">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--ink-muted)]">Phone</p>
                        <p className="text-sm font-medium text-[var(--ink)] transition-colors duration-200 group-hover:text-[var(--brand)]">{company.phone}</p>
                      </div>
                    </a>

                    {/* Email */}
                    <a href={`mailto:${company.email}`} className="group flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--surface-tint)] text-[var(--brand)] transition-colors duration-200 group-hover:bg-[var(--brand)] group-hover:text-white">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--ink-muted)]">Email</p>
                        <p className="text-sm font-medium text-[var(--ink)] transition-colors duration-200 group-hover:text-[var(--brand)]">{company.email}</p>
                      </div>
                    </a>

                    {/* Instagram */}
                    <a href={company.instagram} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--surface-tint)] text-[var(--brand)] transition-colors duration-200 group-hover:bg-[var(--brand)] group-hover:text-white">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--ink-muted)]">Instagram</p>
                        <p className="text-sm font-medium text-[var(--ink)] transition-colors duration-200 group-hover:text-[var(--brand)]">{company.instagramHandle}</p>
                      </div>
                    </a>

                    {/* Location */}
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--surface-tint)] text-[var(--brand)]">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--ink-muted)]">Location</p>
                        <p className="text-sm font-medium text-[var(--ink)]">{company.location}</p>
                        <p className="text-xs text-[var(--ink-muted)]">{company.serviceArea}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Trust badges */}
              <Reveal direction="left" delay={0.3}>
                <div className="mt-6 rounded-xl border border-[var(--line)] bg-[var(--surface-alt)] p-5 shadow-[var(--shadow-xs)]">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="var(--accent)" className="drop-shadow-sm">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-[var(--ink)]">5.0</span>
                    <span className="text-xs text-[var(--ink-muted)]">Client satisfaction</span>
                  </div>
                  <p className="mt-2 text-xs text-[var(--ink-muted)]">
                    ABN {company.abn} &middot; Licensed Buyers Agency
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
