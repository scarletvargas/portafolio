import { Hero, MarqueeHero, SectionProjects, SectionSkills } from '@/Components/HomePage';

const HomePage: React.FC = () => {
  return (
    <div className='overflow-hidden dark:bg-navy200'>
      <Hero />
      <MarqueeHero />
      <SectionSkills />
      <SectionProjects />
    </div>
  );
};

export default HomePage;
