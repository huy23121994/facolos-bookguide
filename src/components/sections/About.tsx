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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {aboutCards.map((card, i) => (
            <RevealOnScroll key={card.title} delay={i + 1} className="group bg-off-white rounded-[20px] overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,.06)]">
              <div className="relative overflow-hidden">
                <img
                  className="w-full aspect-[16/10] object-contain block transition-transform duration-500 group-hover:scale-105"
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                />
              </div>
              <div className="p-[clamp(20px,3vw,36px)]">
                <h3 className="font-display text-[1.35rem] font-semibold mb-2.5">
                  {card.title}
                </h3>
                <p className="text-mid-gray text-[.92rem] leading-[1.75] mb-4 font-light">
                  {card.description}
                </p>
                <p className="text-[.85rem] mb-4">
                  <strong>{card.addressLabel}</strong> {card.address}
                </p>
                <MapLink href={card.mapUrl} variant="button" />
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={3}>
          <div className="mt-12 max-w-[680px] mx-auto text-center">
            <p className="text-mid-gray text-[.95rem] leading-[1.8] font-light">
              We always welcome our partners and customers to visit our office and factory to learn more about Facolos' operations, products, and direction.
            </p>
            <p className="text-mid-gray text-[.95rem] leading-[1.8] font-light mt-3">
              Please contact our hotline{" "}
              <a
                href="tel:+842032382"
                className="text-accent font-medium hover:underline"
              >
                +84 203 2382
              </a>{" "}
              (Ms. Huy&#7873;n) to schedule a visit. Our team will arrange and guide you, giving you a clearer insight into our company.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
