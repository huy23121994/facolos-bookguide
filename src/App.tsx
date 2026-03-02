import { useMemo } from "react";
import { useActiveSection } from "./hooks/useActiveSection";
import TopNav from "./components/layout/TopNav";
import BottomNav from "./components/layout/BottomNav";
import Hero from "./components/sections/Hero";
import Welcome from "./components/sections/Welcome";
import Venue from "./components/sections/Venue";
import About from "./components/sections/About";
import Hotels from "./components/sections/Hotels";
import Explore from "./components/sections/Explore";
import Contact from "./components/sections/Contact";
import ThankYou from "./components/sections/ThankYou";

const sectionIds = ["hero", "welcome", "venue", "about", "hotels", "explore", "contact", "thanks"];

export default function App() {
  const stableSectionIds = useMemo(() => sectionIds, []);
  const activeSection = useActiveSection(stableSectionIds);

  return (
    <>
      <TopNav activeSection={activeSection} />
      <BottomNav activeSection={activeSection} />
      <Hero />
      <Welcome />
      <Venue />
      <About />
      <Hotels />
      <Explore />
      <Contact />
      <ThankYou />
      <footer className="bg-dark text-white/35 text-center py-6 px-5 pb-[calc(24px+env(safe-area-inset-bottom))] text-[.78rem] font-light">
        &copy; 2026 Facolos. All rights reserved.
      </footer>
    </>
  );
}
