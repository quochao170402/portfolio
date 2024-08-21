import EmploymentHistory from '../components/EmploymentHistory';
import { experiences } from '../context/context';
import { Experience as ExperienceType } from '../types/type';

const Experience = () => {
  return (
    <>
      <div>
        <h2>Work Experience</h2>
        {experiences.map((exp: ExperienceType) => (
          <div key={exp.Id} className='my-10'>
            <EmploymentHistory experience={exp} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Experience;
