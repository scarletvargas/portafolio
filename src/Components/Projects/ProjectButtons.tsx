import { ButtonLink } from '@/Components/ButtonLink';

interface ProjectsButtonsProps {
  project: Project;
  t: any;
}

export const ProjectsButtons: React.FC<ProjectsButtonsProps> = ({ project, t }) => {
  return (
    <div className='flex flex-row flex-wrap justify-between gap-5'>
      {project.urlRepo && (
        <ButtonLink href={project.urlRepo}>{t('ProjectPage.repository')}</ButtonLink>
      )}
      {project.url && <ButtonLink href={project.url}>{t('ProjectPage.website')}</ButtonLink>}
    </div>
  );
};
