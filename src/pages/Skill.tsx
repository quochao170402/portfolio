import TechLabel from '../components/TechLabel';
import { skills } from '../context/context';

const Skill = () => {
  return (
    <>
      <div className='flex w-[80%] gap-10 items-start flex-wrap m-auto'>
        {skills.map((x) => (
          <TechLabel title={x} />
        ))}
      </div>
    </>
  );
};

export default Skill;
