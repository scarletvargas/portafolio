import { useTranslations } from 'next-intl';

import { CardSkill } from '@/Components/HomePage';
import { Code, Rocket, Tools, Versions } from '@/Icons';

const iconMapping = {
  Code,
  Rocket,
  Tools,
  Versions,
};

export const SectionSkills: React.FC = () => {
  const t = useTranslations('HomePage.aboutMe');
  const skills = t.raw('skills');

  const skillsWithWidth = skills.map((skill: any, index: number) => {
    let width: string;
    if (index === 0 || index === 3) {
      width = 'md:w-[380px] xl:w-[570px]';
    } else if (index === 1 || index === 2) {
      width = 'md:w-[310px] xl:w-[400px]';
    }
    return {
      ...skill,
      width,
    };
  });

  return (
    <section id='skills' className='flex flex-col items-center justify-center'>
      <div className='w-[350px] md:w-[720px] xl:w-[1130px] flex flex-col items-start justify-center gap-2.5 py-[30px] md:pt-[50px] xl:pt-[70px]'>
        <div className='flex flex-col gap-5 items-start justify-center'>
          <p className='font-bold text-sm leading-[14px] text-primary dark:text-sky'>
            {t('title')}
          </p>
          <h3 className='max-w-[380px] xl:max-w-md font-bold text-secondary dark:text-white text-[28px] leading-[38px] md:text-3xl/10 xl:text-[36px] xl:leading-[46px]'>
            {t('description')}
          </h3>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center md:flex-row flex-wrap gap-[30px] w-[350px] md:w-[720px] xl:w-[1130px] '>
        {skillsWithWidth.map((skill: any, index: number) => {
          return (
            <CardSkill
              key={index}
              title={skill.title}
              description={skill.description}
              icon={iconMapping[skill.icon]}
              width={skill.width}
            />
          );
        })}
      </div>
    </section>
  );
};
