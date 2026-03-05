export default function Hero() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector("#welcome");
    if (target) {
      const offset = window.innerWidth <= 900 ? 0 : 60;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen min-h-svh flex items-center justify-center overflow-hidden bg-dark"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-15 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/hero-ppa.jpg')",
        }}
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(165deg,rgba(13,13,16,.7) 0%,rgba(13,13,16,.3) 50%,rgba(184,150,90,.15) 100%)",
        }}
      />
      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-12"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.5'/%3E%3C/svg%3E\")",
          backgroundSize: "128px",
        }}
      />

      {/* Content */}
      <div className="relative z-2 text-center px-6 max-w-[680px]">
        <div className="inline-block text-[.7rem] font-semibold tracking-[.18em] uppercase text-accent-light border border-accent/35 rounded-full py-2 px-5.5 mb-8">
          PPA Asia 2026 &mdash; Hanoi, Vietnam
        </div>
        <h1 className="font-display font-bold text-[clamp(2.4rem,6vw,4.2rem)] leading-[1.1] text-white mb-5 tracking-tight">
          Welcome to <em className="italic text-accent-light">Hanoi</em>
        </h1>
        <p className="text-[clamp(.95rem,2vw,1.1rem)] text-white/75 leading-[1.7] max-w-[620px] mx-auto mb-4 font-light">
          Handbook for Facolos Athletes and Partners Attending PPA Asia in Hanoi
        </p>
        <p className="text-[clamp(.85rem,1.8vw,1rem)] text-white/75 leading-[1.7] max-w-[620px] mx-auto mb-10 font-light">
          Facolos officially becomes the Official Paddle Partner of the PPA ASIA — the world's leading professional pickleball tour.
          <br />
          Register now to join the PPA Asia prize bonus by Facolos:{" "} <br />
          <a
            href="https://forms.gle/bxpDp1KBv2s7FRTB9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-light font-bold text-xl underline underline-offset-4 decoration-accent/50 hover:decoration-accent transition-colors duration-300"
          >
            Register here
          </a>
        </p>
        <a
          href="#welcome"
          onClick={scrollTo}
          className="inline-flex items-center gap-2 text-[.75rem] font-medium tracking-[.12em] uppercase text-white/45 no-underline transition-colors duration-300 hover:text-accent-light"
        >
          Discover now
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="animate-bounce"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </a>
      </div>

      {/* Court line */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-20 opacity-40"
        style={{
          background:
            "linear-gradient(to bottom,transparent,var(--accent-light))",
        }}
      />
    </section>
  );
}
