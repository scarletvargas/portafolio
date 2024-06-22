import { Carousel, Hero, MarqueeHero, SectionProjects, SectionSkills } from '@/Components/HomePage';

const HomePage: React.FC = () => {
  return (
    <div className='overflow-hidden dark:bg-navy200'>
      <Hero />
      <MarqueeHero />
      <SectionSkills />
      <SectionProjects />
      <Carousel />
    </div>
  );
};

export default HomePage;
