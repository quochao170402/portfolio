import { projects } from '../../context/context';
import ProjectCard from './components/ProjectCard';

const ProjectPage = () => {
  return (
    <>
      <div className='flex flex-col gap-4'>
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </>
  );
};

export default ProjectPage;
