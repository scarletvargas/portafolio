import Carousel from '@/Components/HomePage/Carousel';
import Hero from '@/Components/HomePage/Hero';
import MarqueeHero from '@/Components/HomePage/MarqueeHero';
import SectionProjects from '@/Components/HomePage/SectionProjects';
import SectionSkills from '@/Components/HomePage/SectionSkills';

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
