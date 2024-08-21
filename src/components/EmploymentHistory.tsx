import { Experience } from '../types/type';
import TechLabel from './TechLabel';

interface EmploymentHistoryProps {
  experience: Experience;
}

const EmploymentHistory = ({ experience }: EmploymentHistoryProps) => {
  return (
    <>
      <div className='flex text-base/loose justify-between'>
        <div className='w-[30%]'>
          {experience.Start} - {experience.End}
        </div>
        <div className='justify-end w-[60%] '>
          <div className='flex justify-between'>
            <h1>{experience.CompanyName}</h1>
            <h3 className='mr-4'>{experience.City}</h3>
          </div>
          <h3>{experience.Role}</h3>
          <p>{experience.Description}</p>
          <div className='mt-2 flex gap-4'>
            {experience.Technologies.map((x: string) => (
              <TechLabel title={x}></TechLabel>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default EmploymentHistory;
