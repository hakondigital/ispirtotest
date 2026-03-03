import Link from "next/link";
import { company, navItems } from "@/data/site";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--line)", background: "var(--surface)" }}>
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-12">
        {/* Brand Column */}
        <div className="lg:col-span-5">
          <Logo variant="dark" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed" style={{ color: "var(--ink-muted)" }}>
            Your strategic partner in property. We research, advocate and
            negotiate on behalf of home buyers and investors across Australia.
          </p>
          <a
            href={company.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm transition-colors duration-200 hover:text-(--accent)"
            style={{ color: "var(--ink-muted)" }}
          >
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
            {company.instagramHandle}
          </a>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: "var(--ink-faint)" }}>
            Quick Links
          </p>
          <ul className="mt-5 space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm transition-colors duration-200 hover:text-(--accent)"
                  style={{ color: "var(--ink-muted)" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.12em]" style={{ color: "var(--ink-faint)" }}>
            Get in Touch
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href={company.phoneHref}
                className="transition-colors duration-200 hover:text-(--accent)"
                style={{ color: "var(--ink-muted)" }}
              >
                {company.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.email}`}
                className="transition-colors duration-200 hover:text-(--accent)"
                style={{ color: "var(--ink-muted)" }}
              >
                {company.email}
              </a>
            </li>
            <li style={{ color: "var(--ink-faint)" }}>{company.location}</li>
            <li style={{ color: "var(--ink-faint)" }}>Servicing buyers Australia-wide</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-5 py-5 text-center" style={{ borderTop: "1px solid var(--line)" }}>
        <p className="text-xs" style={{ color: "var(--ink-faint)" }}>
          &copy; {new Date().getFullYear()} {company.name}. ABN{" "}
          {company.abn}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
