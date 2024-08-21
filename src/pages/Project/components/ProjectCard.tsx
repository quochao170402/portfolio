import TechLabel from '../../../components/TechLabel';
import { IProject } from '../../../types/type';

interface ProjectCardProps {
  project: IProject;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <img className='w-[80%]' src={project.Image} alt={project.Name} />
        </div>
        <div>
          <div className='flex justify-between'>
            <h1>{project.Name}</h1>
            <h1>{project.Company}</h1>
          </div>
          <h1>{project.Role}</h1>
          <p>{project.Description}</p>
          <div className='mt-2 flex gap-4'>
            {project.Technologies.map((x: string) => (
              <TechLabel title={x}></TechLabel>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
