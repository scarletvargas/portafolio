import Image from 'next/image';
import Link from 'next/link';

import { ArrowUpRight } from '@/Icons';
import { formatString } from '@/utils/formatString';

interface ProjectCardProps {
  project: Project;
  locale: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, locale }) => {
  return (
    <Link
      href={`/${locale}/projects/${formatString(project.name)}`}
      className='relative group h-[260px] flex z-20 cursor-pointer'
    >
      <Image
        width={350}
        height={350}
        className='object-cover h-[260px] object-center rounded-5xl group-hover:opacity-50'
        src={project.imgProjectsPage}
        alt={project.name}
      />
      <div className='absolute bottom-0 left-0 right-0 z-10 hidden group-hover:flex p-10 items-end h-full'>
        <p className='dark:text-white text-secondary text-xl/6 font-bold animate-slideInUp'>
          {project.name}
          <ArrowUpRight className='inline-block ml-1 h-5 w-5' />
        </p>
      </div>
    </Link>
  );
};
