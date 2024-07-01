'use client';

import { useParams, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { Badge, GetIcon } from '@/Components';
import { Carousel, ProjectsButtons } from '@/Components/Projects';
import { formatString } from '@/utils/formatString';

export default function ProjectPage() {
  const t = useTranslations();
  const projects = t.raw('Projects');

  const params = useParams<{ name: string }>();
  const router = useRouter();

  const project = projects.find(
    (project: Project) => formatString(project.name) === formatString(params.name)
  );

  if (!project) {
    return router.back();
  }

  return (
    <main className='overflow-hidden dark:bg-navy200'>
      <div className='flex flex-col items-center justify-center pt-[80px] sm:pt-0'>
        <section className='w-[350px] md:w-[730px] xl:w-[1130px] py-[30px] md:pt-[70px] md:pb-[50px] xl:pb-[70px]'>
          <h3 className='xl:max-w-md font-bold text-secondary dark:text-white text-[28px] leading-[38px] md:text-3xl/10 xl:text-[36px] xl:leading-[46px]'>
            {project.name}
          </h3>
        </section>
        <Carousel images={project.images} />
        <section className='w-[350px] md:w-[730px] xl:w-[1130px] flex flex-col items-start justify-center gap-[30px] pt-[50px] md:pt-[70px] pb-[70px]'>
          <div className='flex flex-col gap-[30px] items-start justify-center'>
            <div className='flex flex-col gap-5'>
              <p className='font-bold text-sm leading-[14px] text-primary dark:text-sky uppercase'>
                {t('ProjectPage.description')}
              </p>
              <h3 className='font-bold text-secondary dark:text-white text-[22px] leading-[32px]'>
                {project.description}
              </h3>
              <div className='flex-wrap flex flex-row gap-2'>
                {project.technologies.map((tech: string, i: number) => (
                  <Badge key={i}>
                    <GetIcon width={16} height={16} strokeWidth={1.2} icon={tech} />
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div className='flex flex-col gap-5'>
              {project.summary?.map((item: string, i: number) => (
                <p key={i} className='text-base/8 text-gray300 dark:text-gray200'>
                  {item}
                </p>
              ))}
            </div>
            <ProjectsButtons t={t} project={project} />
          </div>
        </section>
      </div>
    </main>
  );
}
