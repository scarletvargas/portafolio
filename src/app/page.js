import Hero from "@/Components/HomePage/Hero";
import MarqueeHero from "@/Components/HomePage/MarqueeHero";
import SectionProjects from "@/Components/HomePage/SectionProjects";

function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <MarqueeHero />
      <SectionProjects />
    </div>
  );
}

export default Home;