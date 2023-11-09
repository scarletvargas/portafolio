import Hero from "@/Components/HomePage/Hero";
import SectionProjects from "@/Components/HomePage/SectionProjects";

function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <SectionProjects />
    </div>
  );
}

export default Home;