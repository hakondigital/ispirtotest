type Props = {
  className?: string;
  variant?: "dark" | "light";
  showText?: boolean;
  iconOnly?: boolean;
};

export function Logo({
  className,
  variant = "dark",
  showText = true,
  iconOnly = false,
}: Props) {
  const fill = variant === "dark" ? "var(--ink)" : "#ffffff";

  return (
    <div className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      {/* Roof icon — two overlapping filled roof shapes */}
      <svg
        width="42"
        height="28"
        viewBox="0 0 100 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Back roof (smaller, left) */}
        <path
          d="M2 52L30 12L58 52"
          fill={fill}
          opacity="0.55"
        />
        {/* Front roof (larger, right, overlapping) — solid fill */}
        <path
          d="M36 58L68 8L100 58"
          fill={fill}
        />
      </svg>

      {/* Wordmark */}
      {showText && !iconOnly && (
        <div className="flex flex-col leading-[1.15]">
          <span
            className="font-sans text-[13px] tracking-[0.1em]"
            style={{ color: fill }}
          >
            <span className="font-bold">ISPIRTO</span>{" "}
            <span className="font-normal">PROPERTY</span>
          </span>
          <span
            className="font-sans text-[13px] font-normal tracking-[0.1em]"
            style={{ color: fill }}
          >
            ADVISORY
          </span>
        </div>
      )}
    </div>
  );
}
