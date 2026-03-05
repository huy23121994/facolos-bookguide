import { aboutCards } from "../../data/guide-data";
import RevealOnScroll from "../ui/RevealOnScroll";
import SectionHeader from "../ui/SectionHeader";
import MapLink from "../ui/MapLink";

export default function About() {
  return (
    <section id="about" className="py-[var(--section-pad)] bg-white">
      <div className="container">
        <RevealOnScroll>
          <SectionHeader
            label="Partners"
            title="About Us"
            description="Facolos & Pickle Global — your trusted partners in the professional Pickleball journey"
          />
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {aboutCards.map((card, i) => (
            <RevealOnScroll key={card.title} delay={i + 1} className="group bg-off-white rounded-[20px] overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,.06)] flex flex-col">
              <div className="relative overflow-hidden">
                <img
                  className="w-full aspect-[16/10] object-cover block transition-transform duration-500 group-hover:scale-105"
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                />
              </div>
              <div className="p-[clamp(20px,3vw,36px)] flex flex-col flex-1">
                <h3 className="font-display text-[1.35rem] font-semibold mb-2.5">
                  {card.title}
                </h3>
                <p className="text-mid-gray text-[.92rem] leading-[1.75] mb-4 font-light">
                  {card.description}
                </p>
                <div className="mt-auto">
                  <p className="text-[.85rem] mb-4">
                    <strong>{card.addressLabel}</strong> {card.address}
                  </p>
                  <MapLink href={card.mapUrl} variant="button" />
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={3}>
          <div className="mt-12 max-w-[680px] mx-auto text-center">
            <p className="text-charcoal text-[.95rem] leading-[1.8]">
              We always welcome our partners and customers to visit our office and factory to learn more about Facolos' operations, products, and development direction.
            </p>
            <p className="text-charcoal text-[.95rem] leading-[1.8] mt-3">
              Please fill in the form via the provided link so that we can receive your information and arrange a proper welcome:{" "}
              <a
                href="https://forms.gle/E4W8EfMAcnmqsr6d6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent font-medium underline underline-offset-4 decoration-accent/50 hover:decoration-accent transition-colors duration-300"
              >
                Register here
              </a>
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
