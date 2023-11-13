import Hero from "@/Components/HomePage/Hero";
import MarqueeHero from "@/Components/HomePage/MarqueeHero";
import SectionProjects from "@/Components/HomePage/SectionProjects";
import SectionSkills from "@/Components/HomePage/SectionSkills";

function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <MarqueeHero />
      <SectionSkills />
      <SectionProjects />
    </div>
  );
}

export default Home;