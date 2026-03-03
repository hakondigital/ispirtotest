import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  target?: string;
  rel?: string;
};

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[var(--brand)] text-white shadow-[var(--shadow-sm)] hover:bg-[var(--brand-strong)] active:scale-[0.98]",
  secondary:
    "bg-[var(--accent)] text-white shadow-[var(--shadow-sm)] hover:bg-[var(--accent-strong)] active:scale-[0.98]",
  outline:
    "border border-[var(--line-strong)] bg-transparent text-[var(--ink)] shadow-[var(--shadow-xs)] hover:bg-[var(--surface-tint)] hover:border-[var(--brand)] hover:text-[var(--brand)] active:scale-[0.98]",
  ghost:
    "bg-transparent text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--surface-tint)]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  target,
  rel,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 ease-out ${variantClasses[variant]} ${className ?? ""}`}
    >
      {children}
    </Link>
  );
}
