import { ItemMarqueeHero } from '@/Components/HomePage/ItemMarqueeHero';
import {
  Bootstrap,
  Css,
  ExpressJs,
  Figma,
  Git,
  HTML,
  Javascript,
  MongoDb,
  Mysql,
  NestJs,
  NextJs,
  Node,
  PHP,
  Prisma,
  React,
  Redux,
  TailwindCss,
  Typescript,
  Wordpress,
} from '@/Icons';

export const MarqueeHero: React.FC = () => {
  return (
    <div className='mx-auto max-w-[900px]'>
      <div className="overflow-x-hidden px-6 w-full relative before:bg-gradient-to-r after:bg-gradient-to-r after:from-white before:from-white after:dark:from-navy200 before:dark:from-navy200 before:z-20 after:z-20 before:absolute after:absolute before:h-full after:h-full before:w-2/12 after:w-2/12 before:content-[''] after:content-[''] before:left-0 before:top-0 after:right-0 after:top-0 after:rotate-180">
        <div className='flex gap-6'>
          <div className='flex shrink-0 items-center flex-row gap-6 animate-marquee'>
            <ItemMarqueeHero title='Javascript' icon={Javascript} />
            <ItemMarqueeHero title='Typescript' icon={Typescript} />
            <ItemMarqueeHero title='React' icon={React} />
            <ItemMarqueeHero title='NextJs' icon={NextJs} />
            <ItemMarqueeHero title='Redux' icon={Redux} />
            <ItemMarqueeHero title='Node' icon={Node} />
            <ItemMarqueeHero title='ExpressJs' icon={ExpressJs} />
            <ItemMarqueeHero title='NestJS' icon={NestJs} />
            <ItemMarqueeHero title='MySQL' icon={Mysql} />
            <ItemMarqueeHero title='MongoDB' icon={MongoDb} />
            <ItemMarqueeHero title='Prisma' icon={Prisma} />
            <ItemMarqueeHero title='HTML' icon={HTML} />
            <ItemMarqueeHero title='CSS' icon={Css} />
            <ItemMarqueeHero title='TailwindCSS' icon={TailwindCss} />
            <ItemMarqueeHero title='Bootstrap' icon={Bootstrap} />
            <ItemMarqueeHero title='Git' icon={Git} />
            <ItemMarqueeHero title='PHP' icon={PHP} />
            <ItemMarqueeHero title='Figma' icon={Figma} />
            <ItemMarqueeHero title='Wordpress' icon={Wordpress} />
          </div>
          <div className='flex shrink-0 items-center flex-row gap-6 animate-marquee'>
            <ItemMarqueeHero title='Javascript' icon={Javascript} />
            <ItemMarqueeHero title='Typescript' icon={Typescript} />
            <ItemMarqueeHero title='React' icon={React} />
            <ItemMarqueeHero title='NextJs' icon={NextJs} />
            <ItemMarqueeHero title='Redux' icon={Redux} />
            <ItemMarqueeHero title='Node' icon={Node} />
            <ItemMarqueeHero title='ExpressJs' icon={ExpressJs} />
            <ItemMarqueeHero title='NestJS' icon={NestJs} />
            <ItemMarqueeHero title='MySQL' icon={Mysql} />
            <ItemMarqueeHero title='MongoDB' icon={MongoDb} />
            <ItemMarqueeHero title='Prisma' icon={Prisma} />
            <ItemMarqueeHero title='HTML' icon={HTML} />
            <ItemMarqueeHero title='CSS' icon={Css} />
            <ItemMarqueeHero title='TailwindCSS' icon={TailwindCss} />
            <ItemMarqueeHero title='Bootstrap' icon={Bootstrap} />
            <ItemMarqueeHero title='Git' icon={Git} />
            <ItemMarqueeHero title='PHP' icon={PHP} />
            <ItemMarqueeHero title='Figma' icon={Figma} />
            <ItemMarqueeHero title='Wordpress' icon={Wordpress} />
          </div>
        </div>
      </div>
    </div>
  );
};
