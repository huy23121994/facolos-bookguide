interface Props {
  activeSection: string;
}

const items = [
  {
    href: "#welcome",
    section: "welcome",
    label: "Lời ngỏ",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-[22px] h-[22px]" strokeWidth={1.6}>
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    href: "#venue",
    section: "venue",
    label: "Địa điểm",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-[22px] h-[22px]" strokeWidth={1.6}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    href: "#hotels",
    section: "hotels",
    label: "Khách sạn",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-[22px] h-[22px]" strokeWidth={1.6}>
        <path d="M2 20v-8a2 2 0 012-2h16a2 2 0 012 2v8" />
        <path d="M2 16h20" />
        <path d="M6 12V4a2 2 0 012-2h8a2 2 0 012 2v8" />
      </svg>
    ),
  },
  {
    href: "#explore",
    section: "explore",
    label: "Khám phá",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-[22px] h-[22px]" strokeWidth={1.6}>
        <polygon points="3 11 22 2 13 21 11 13 3 11" />
      </svg>
    ),
  },
  {
    href: "#contact",
    section: "contact",
    label: "Liên hệ",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-[22px] h-[22px]" strokeWidth={1.6}>
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
];

export default function BottomNav({ activeSection }: Props) {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav className="block md:hidden fixed bottom-0 left-0 right-0 z-1000 bg-white/92 backdrop-blur-[14px] border-t border-black/7 pb-[env(safe-area-inset-bottom)] pt-1.5">
      <div className="flex justify-around items-center">
        {items.map(({ href, section, label, icon }) => (
          <a
            key={section}
            href={href}
            onClick={(e) => scrollTo(e, href)}
            className={`flex flex-col items-center gap-0.5 no-underline text-[.6rem] font-medium tracking-[.04em] uppercase transition-colors duration-200 py-1.5 px-1 min-w-[52px] ${
              activeSection === section
                ? "text-accent"
                : "text-light-gray hover:text-accent"
            }`}
          >
            {icon}
            <span>{label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
