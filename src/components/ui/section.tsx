import { ReactNode } from "react";

type Tone = "default" | "alt" | "tint" | "dark";

type Props = {
  id?: string;
  title?: string;
  subtitle?: string;
  label?: string;
  children: ReactNode;
  className?: string;
  tone?: Tone;
  divider?: boolean;
  narrow?: boolean;
};

const toneClasses: Record<Tone, string> = {
  default: "bg-transparent",
  alt: "bg-[var(--surface-alt)]",
  tint: "bg-[var(--surface-tint)]",
  dark: "bg-[var(--surface-dark)] text-white",
};

export function Section({
  id,
  title,
  subtitle,
  label,
  children,
  className,
  tone = "default",
  divider = true,
  narrow = false,
}: Props) {
  const isDark = tone === "dark";

  return (
    <section
      id={id}
      className={`${toneClasses[tone]} ${divider ? "section-separator" : ""}`}
    >
      <div
        className={`mx-auto w-full px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28 ${
          narrow ? "max-w-5xl" : "max-w-7xl"
        } ${className ?? ""}`}
      >
        {(title || subtitle || label) && (
          <div className="mb-14 max-w-3xl">
            {label && (
              <p
                className={`mb-4 text-xs font-semibold uppercase tracking-[0.15em] ${
                  isDark ? "text-[var(--accent-light)]" : "text-[var(--accent)]"
                }`}
              >
                {label}
              </p>
            )}
            {title && (
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl ${
                  isDark ? "text-white" : "text-[var(--ink)]"
                }`}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={`mt-5 text-base leading-relaxed sm:text-lg ${
                  isDark ? "text-slate-300" : "text-[var(--ink-muted)]"
                }`}
              >
                {subtitle}
              </p>
            )}
            <div
              className={`mt-6 h-px w-16 ${
                isDark
                  ? "bg-gradient-to-r from-[var(--accent-light)] to-transparent"
                  : "bg-gradient-to-r from-[var(--accent)] to-transparent"
              }`}
            />
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
