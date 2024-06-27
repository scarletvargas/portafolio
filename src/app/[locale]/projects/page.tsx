'use client';

import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { ProjectCard, ProjectsHeader } from '@/Components/Projects';

function ProjectsPage() {
  const t = useTranslations();
  const projects = t.raw('Projects');
  const params = useParams<{ locale: string }>();

  return (
    <main className='overflow-hidden dark:bg-navy200'>
      <div className='flex flex-col items-center justify-center pt-[80px] sm:pt-0'>
        <ProjectsHeader />
        <section className='flex flex-row gap-[30px] w-[350px] md:w-[730px] xl:w-[1130px] pb-[70px] flex-wrap'>
          {projects.map((project: Project, i: number) => (
            <ProjectCard key={i} locale={params.locale} project={project} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default ProjectsPage;
