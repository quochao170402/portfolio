interface TechLabelProps {
  title: string;
}

const TechLabel = ({ title }: TechLabelProps) => {
  return (
    <>
      <div className='min-w-fit bg-purple-400 border-black border rounded-md px-2 overflow-x-auto'>{title}</div>
    </>
  );
};

export default TechLabel;
