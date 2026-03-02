import RevealOnScroll from "../ui/RevealOnScroll";

export default function ThankYou() {
  return (
    <section id="thanks" className="py-[var(--section-pad)] bg-off-white text-center">
      <div className="container">
        <RevealOnScroll className="max-w-[600px] mx-auto">
          <span className="section-label">Thank You</span>
          <h2 className="section-title mb-6">
            Wishing you a<br />great tournament!
          </h2>
          <p className="text-mid-gray leading-[1.85] font-light mb-4">
            Facolos hopes your time in Hanoi will bring you positive energy,
            the best preparation for the PPA Asia tournament, and many
            memorable experiences beyond the court.
          </p>
          <p className="text-mid-gray leading-[1.85] font-light mb-4">
            We wish you a successful tournament and a truly fulfilling journey
            in Vietnam.
          </p>
          <p className="text-charcoal font-medium">
            Facolos is proud to be by your side.
            <br />
            See you in Hanoi!
          </p>
          <div className="mt-8 font-display text-[1.6rem] font-bold text-charcoal tracking-[.02em]">
            Facolos<span className="text-accent">.</span>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
