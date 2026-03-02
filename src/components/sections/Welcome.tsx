import RevealOnScroll from "../ui/RevealOnScroll";
import SectionHeader from "../ui/SectionHeader";

export default function Welcome() {
  return (
    <section id="welcome" className="py-[var(--section-pad)] bg-white">
      <div className="container">
        <RevealOnScroll>
          <SectionHeader
            label="Introduction"
            title=""
            titleHtml="Welcome to<br>Hanoi"
          />
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-15 items-center mt-12">
          <RevealOnScroll delay={1} className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-[4/5] max-w-[400px] md:max-w-none mx-auto md:mx-0">
            <img
              src="/images/place-van-mieu.jpg"
              alt="Hanoi"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border border-accent/20 rounded-2xl" />
          </RevealOnScroll>
          <RevealOnScroll delay={2}>
            <h3 className="font-display text-[1.6rem] font-semibold mb-4 leading-[1.3]">
              Where ancient charm meets modern life
            </h3>
            <p className="text-mid-gray leading-[1.8] mb-4 font-light">
              Facolos is honored to accompany you on your journey to Vietnam to
              attend and prepare for the upcoming PPA Asia tournament.
            </p>
            <p className="text-mid-gray leading-[1.8] mb-4 font-light">
              We hope Hanoi will be more than just a competition destination —
              it will be a place full of memorable experiences before, during,
              and after the tournament.
            </p>
            <p className="text-mid-gray leading-[1.8] mb-4 font-light">
              During your stay, alongside focusing on peak performance, you can
              explore the city's iconic landmarks, feel the local rhythm of
              life, and savor famous dishes like pho, bun cha, or egg coffee —
              flavors unique to Hanoi.
            </p>
            <p className="text-charcoal font-medium">
              Facolos is always ready to support you so your journey in Vietnam
              is convenient, comfortable, and truly unforgettable.
            </p>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
