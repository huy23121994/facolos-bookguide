interface Props {
  href: string;
  label?: string;
  variant?: "default" | "button";
}

export default function MapLink({ href, label = "View map", variant = "default" }: Props) {
  if (variant === "button") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener"
        className="inline-flex items-center gap-2 text-[.82rem] font-semibold text-white bg-accent hover:bg-accent-dark px-5 py-2.5 rounded-full no-underline tracking-[.03em] transition-all duration-250 hover:shadow-[0_4px_16px_rgba(184,150,90,.35)] active:scale-[.97]"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 shrink-0">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        {label}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5 shrink-0">
          <path d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="inline-flex items-center gap-1.5 text-[.82rem] font-semibold text-accent-dark no-underline tracking-[.03em] transition-all duration-250 hover:text-charcoal hover:gap-2.5 border-b border-accent-dark/30 hover:border-charcoal/40 pb-0.5"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5 shrink-0">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
      {label}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5 shrink-0">
        <path d="M7 17L17 7M17 7H7M17 7v10" />
      </svg>
    </a>
  );
}
