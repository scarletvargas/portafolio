import CardSkill from './CardSkill';
import { Code } from '@/Icons/Code';
import { Tools } from '@/Icons/Tools';
import { Versions } from '@/Icons/Versions';
import { Rocket } from '@/Icons/Rocket';

function SectionSkills() {
  return (
    <section id='skills' className='flex flex-col items-center justify-center'>
      <div className='w-[350px] md:w-[720px] xl:w-[1130px] flex flex-col items-start justify-center gap-2.5 py-[30px] md:pt-[50px] xl:pt-[70px]'>
        <div className='flex flex-col gap-5 items-start justify-center'>
          <p className='font-bold text-sm leading-[14px] text-primary dark:text-sky'>ABOUT ME?</p>
          <h3 className='max-w-[380px] xl:max-w-md font-bold text-secondary dark:text-white text-[28px] leading-[38px] md:text-3xl/10 xl:text-[36px] xl:leading-[46px]'>
            Frontend Development Is My Skill
          </h3>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center md:flex-row flex-wrap gap-[30px] w-[350px] md:w-[720px] xl:w-[1130px] '>
        <CardSkill
          title='Responsive User Interfaces'
          description='Ability to transform designs into code, ensuring that interfaces are visually appealing and functional on various devices and screens.'
          iconSvg={Code}
          width='md:w-[380px] xl:w-[570px]'
        />
        <CardSkill
          title='Adaptability and Continuous Learning'
          description='Willingness and ability to address challenges, creatively solve problems, and embrace new technologies.'
          iconSvg={Rocket}
          width='md:w-[310px] xl:w-[400px]'
        />
        <CardSkill
          title='Version and Repository Management'
          description='Proficient in using version control systems, such as Git, and managing repositories to effectively track and collaborate on code.'
          iconSvg={Versions}
          width='md:w-[310px] xl:w-[400px]'
        />
        <CardSkill
          title='Frontend Frameworks and Libraries'
          description='Utilization of frontend frameworks and libraries, such as React, Next.js, Redux, TailwindCss, Formik, React-Hook-Form, to streamline the development of complex web applications.'
          iconSvg={Tools}
          width='md:w-[380px] xl:w-[570px]'
        />
      </div>
    </section>
  );
}

export default SectionSkills;
