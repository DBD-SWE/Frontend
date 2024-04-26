//      ={`flex ${start && !center ? 'items-start' : 'items-center'} ${start ? 'max-md:flex-col max-md:items-center' : 'items-center'} justify-start   max-md:flex-col max-md:items-start max-md:px-2 max-md:py-6 ${last && 'border-b-[1px] border-b-[#F4F4F5]'}`}
interface ActionSectionProps {
  title: string;
  description: string;
  button: React.ReactNode;
  last?: boolean; // bottom border for last element
}

const ActionSection = (props: ActionSectionProps) => {
  const { title, description, button, last } = props;
  return (
    <div className="border-t-[1px] border-l-transparent border-r-transparent border-t-[#F4F4F5] px-4 py-7">
      {/* Left Part */}
      <div className="flex flex-col items-stretch">
        <h3>{title}</h3>
        <p className="mt-0.5 w-full text-wrap text-sm text-zinc-500">
          {description}
        </p>
      </div>
      {/* Right Part */}
      <div className="mt-6 flex justify-end max-md:mt-9 max-md:justify-start">
        {button}
      </div>
    </div>
  );
};

export default ActionSection;
