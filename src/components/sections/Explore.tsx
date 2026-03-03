import { places, foodSpots, foodSpotsNearVenue } from "../../data/guide-data";
import RevealOnScroll from "../ui/RevealOnScroll";
import SectionHeader from "../ui/SectionHeader";
import MapLink from "../ui/MapLink";

export default function Explore() {
  return (
    <section id="explore" className="py-[var(--section-pad)] bg-white">
      <div className="container">
        <RevealOnScroll>
          <SectionHeader
            label="Experience"
            title="Explore Hanoi"
            description="Famous landmarks and must-try dishes when visiting the capital"
          />
        </RevealOnScroll>

        {/* Places subsection */}
        <RevealOnScroll className="mt-12 mb-7">
          <h3 className="font-display text-[1.4rem] font-semibold flex items-center gap-2.5">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-[22px] h-[22px] text-accent">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Must-Visit Places
          </h3>
        </RevealOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-5">
          {places.map((place, i) => (
            <RevealOnScroll
              key={place.name}
              delay={i + 1}
              className="group bg-off-white rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-[3px] hover:shadow-[0_8px_30px_rgba(0,0,0,.06)] cursor-pointer"
            >
              <a href={place.mapUrl} target="_blank" rel="noopener" className="block no-underline text-inherit">
                <div className="relative overflow-hidden">
                  <img
                    className="w-full aspect-[4/3] object-cover block transition-transform duration-500 group-hover:scale-105"
                    src={place.image}
                    alt={place.name}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-accent-dark text-[.7rem] font-semibold px-3 py-1.5 rounded-full flex items-center gap-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    View map
                  </div>
                </div>
                <div className="p-4.5 px-5 pb-5.5">
                  <h4 className="text-[.95rem] font-semibold mb-1.5">
                    {place.name}
                  </h4>
                  <p className="text-[.82rem] text-mid-gray leading-[1.65] mb-3 font-light">
                    {place.description}
                  </p>
                  <MapLink href={place.mapUrl} />
                </div>
              </a>
            </RevealOnScroll>
          ))}
        </div>

        {/* Food subsection */}
        <RevealOnScroll className="mt-14 mb-7">
          <h3 className="font-display text-[1.4rem] font-semibold flex items-center gap-2.5">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-[22px] h-[22px] text-accent">
              <path d="M18 8h1a4 4 0 010 8h-1" />
              <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
              <line x1="6" y1="1" x2="6" y2="4" />
              <line x1="10" y1="1" x2="10" y2="4" />
              <line x1="14" y1="1" x2="14" y2="4" />
            </svg>
            Must-Try Food
          </h3>
        </RevealOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
          {foodSpots.map((food, i) => {
            const Wrapper = food.branches ? "div" : "a";
            const wrapperProps = food.branches
              ? {}
              : { href: food.mapUrl, target: "_blank", rel: "noopener" };
            return (
              <Wrapper
                key={food.name}
                {...wrapperProps}
                className="no-underline text-inherit"
              >
                <RevealOnScroll
                  delay={((i % 3) + 1)}
                  className="group flex gap-4 bg-off-white rounded-2xl p-4 items-start h-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(0,0,0,.05)] cursor-pointer"
                >
                  <div className="relative shrink-0">
                    <img
                      className="w-[90px] h-[90px] rounded-xl object-cover transition-transform duration-400 group-hover:scale-105"
                      src={food.image}
                      alt={food.name}
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[.92rem] font-semibold mb-1">
                      {food.name}
                    </h4>
                    <p className="text-[.78rem] text-mid-gray leading-[1.6] mb-2 font-light">
                      {food.description}
                    </p>
                    {food.branches ? (
                      <div className="flex flex-wrap gap-2">
                        {food.branches.map((b) => (
                          <a
                            key={b.label}
                            href={b.mapUrl}
                            target="_blank"
                            rel="noopener"
                            className="inline-flex items-center gap-1 text-[.75rem] font-semibold text-accent-dark bg-accent/8 hover:bg-accent/18 px-2.5 py-1 rounded-full no-underline transition-colors duration-200"
                          >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3 shrink-0">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>
                            {b.label}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[.78rem] font-semibold text-accent-dark border-b border-accent-dark/30 pb-0.5 transition-all duration-200 group-hover:text-charcoal group-hover:gap-2 group-hover:border-charcoal/40">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3 shrink-0">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        Map
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3 shrink-0">
                          <path d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </span>
                    )}
                  </div>
                </RevealOnScroll>
              </Wrapper>
            );
          })}
        </div>

        {/* Near My Dinh Stadium sub-section */}
        <RevealOnScroll className="mt-10 mb-5">
          <h4 className="text-[1.05rem] font-semibold text-mid-gray flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-[18px] h-[18px] text-accent">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Near My Dinh Stadium
          </h4>
          <p className="text-[.82rem] text-light-gray font-light mt-1">Quick bites near the competition venue</p>
        </RevealOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5">
          {foodSpotsNearVenue.map((food, i) => (
            <a
              key={food.name}
              href={food.mapUrl}
              target="_blank"
              rel="noopener"
              className="no-underline text-inherit"
            >
              <RevealOnScroll
                delay={((i % 3) + 1)}
                className="group flex gap-4 bg-off-white rounded-2xl p-4 items-start h-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(0,0,0,.05)] cursor-pointer"
              >
                <div className="relative shrink-0">
                  <img
                    className="w-[90px] h-[90px] rounded-xl object-cover transition-transform duration-400 group-hover:scale-105"
                    src={food.image}
                    alt={food.name}
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="text-[.92rem] font-semibold mb-1">
                    {food.name}
                  </h4>
                  <p className="text-[.78rem] text-mid-gray leading-[1.6] mb-2 font-light">
                    {food.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[.78rem] font-semibold text-accent-dark border-b border-accent-dark/30 pb-0.5 transition-all duration-200 group-hover:text-charcoal group-hover:gap-2 group-hover:border-charcoal/40">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3 shrink-0">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Map
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3 shrink-0">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </span>
                </div>
              </RevealOnScroll>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
