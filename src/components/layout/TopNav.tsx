import { useEffect, useRef } from "react";

interface Props {
  activeSection: string;
}

const links = [
  { href: "#welcome", label: "Lời ngỏ" },
  { href: "#venue", label: "Địa điểm" },
  { href: "#about", label: "Về chúng tôi" },
  { href: "#hotels", label: "Khách sạn" },
  { href: "#explore", label: "Khám phá" },
  { href: "#contact", label: "Liên hệ" },
];

export default function TopNav({ activeSection }: Props) {
  const navRef = useRef<HTMLElement>(null);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      navRef.current?.classList.toggle("hidden", y > lastY.current && y > 120);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = window.innerWidth <= 900 ? 0 : 60;
      const top =
        target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-1000 bg-white/88 backdrop-blur-[16px] border-b border-black/6 transition-transform duration-350"
    >
      <div className="flex items-center justify-between h-[var(--nav-height)] max-w-[1100px] mx-auto px-5">
        <a
          href="#hero"
          onClick={(e) => scrollTo(e, "#hero")}
          className="font-display font-bold text-[1.35rem] text-charcoal no-underline tracking-[.02em]"
        >
          Facolos<span className="text-accent">.</span>
        </a>
        <ul className="hidden md:flex gap-7 list-none">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => scrollTo(e, href)}
                className={`nav-link text-[.8rem] font-medium tracking-[.06em] uppercase no-underline transition-colors duration-250 relative ${
                  `#${activeSection}` === href
                    ? "text-charcoal active"
                    : "text-mid-gray hover:text-charcoal"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
