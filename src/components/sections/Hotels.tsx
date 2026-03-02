import { useState, useRef, type TouchEvent } from "react";
import { hotels } from "../../data/guide-data";
import RevealOnScroll from "../ui/RevealOnScroll";
import SectionHeader from "../ui/SectionHeader";
import MapLink from "../ui/MapLink";

function HotelImageCarousel({ images, name }: { images: string[]; name: string }) {
  const [current, setCurrent] = useState(0);
  const touchStart = useRef(0);
  const touchDelta = useRef(0);
  const isDragging = useRef(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const goTo = (idx: number) => {
    setCurrent(Math.max(0, Math.min(idx, images.length - 1)));
  };

  const onTouchStart = (e: TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
    touchDelta.current = 0;
    isDragging.current = true;
  };

  const onTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    touchDelta.current = e.touches[0].clientX - touchStart.current;
  };

  const onTouchEnd = () => {
    isDragging.current = false;
    const threshold = 50;
    if (touchDelta.current < -threshold) {
      goTo(current + 1);
    } else if (touchDelta.current > threshold) {
      goTo(current - 1);
    }
    touchDelta.current = 0;
  };

  return (
    <div className="relative group overflow-hidden">
      <div
        ref={trackRef}
        className="flex transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {images.map((src, idx) => (
          <img
            key={idx}
            className="w-full aspect-[16/10] object-cover block shrink-0"
            src={src}
            alt={`${name} - ${idx + 1}`}
            loading="lazy"
            draggable={false}
          />
        ))}
      </div>
      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-200 border-none cursor-pointer ${
              idx === current
                ? "bg-white w-5"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`View photo ${idx + 1}`}
          />
        ))}
      </div>
      {/* Prev/Next arrows (desktop) */}
      {images.length > 1 && (
        <>
          <button
            onClick={() => goTo(current - 1)}
            className={`absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-none cursor-pointer ${current === 0 ? "!opacity-0 pointer-events-none" : ""}`}
            aria-label="Previous photo"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => goTo(current + 1)}
            className={`absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 border-none cursor-pointer ${current === images.length - 1 ? "!opacity-0 pointer-events-none" : ""}`}
            aria-label="Next photo"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </>
      )}
      {/* Photo count badge */}
      <div className="absolute top-3 right-3 bg-black/40 text-white text-[.68rem] font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
        {current + 1} / {images.length}
      </div>
    </div>
  );
}

export default function Hotels() {
  return (
    <section id="hotels" className="py-[var(--section-pad)] bg-off-white">
      <div className="container">
        <RevealOnScroll>
          <SectionHeader
            label="Accommodation"
            title="Where to Stay"
            description="Hotel options near the competition venue — convenient and comfortable"
          />
        </RevealOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 mt-10">
          {hotels.map((hotel, i) => (
            <RevealOnScroll
              key={hotel.name}
              delay={((i % 3) + 1)}
              className="bg-white rounded-2xl overflow-hidden border border-black/5 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,.08)] cursor-pointer"
            >
              <HotelImageCarousel images={hotel.images} name={hotel.name} />
              <div className="p-5 px-5.5 pb-6">
                <h3 className="text-[1.05rem] font-semibold mb-1.5">
                  {hotel.name}
                </h3>
                <div className="text-[.82rem] text-mid-gray mb-3 font-light flex items-start gap-1.5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="w-3.5 h-3.5 shrink-0 mt-0.5 text-light-gray"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {hotel.address}
                </div>
                <span className="inline-block text-[.82rem] font-semibold text-accent-dark bg-accent/10 py-1.5 px-3.5 rounded-full mb-4">
                  {hotel.price}
                </span>
                <div>
                  <MapLink href={hotel.mapUrl} variant="button" label="Map" />
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
