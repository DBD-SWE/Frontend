interface SectionProps {
  form: React.ReactNode;
  title: string;
  description: string;
  last?: boolean; // bottom border for last element
  start?: boolean; // display items start, best used in user details page
  center?: boolean; // exception made against the start parameter
}

const Section = (props: SectionProps) => {
  const { title, description, form, last, start, center } = props;
  return (
    <div
      className={`flex ${start && !center ? 'items-start' : 'items-center'} ${start ? 'max-md:flex-col max-md:items-center' : 'items-center'} justify-start border-t-[1px] border-l-transparent border-r-transparent border-t-[#F4F4F5] px-4 py-14 max-md:flex-col max-md:items-start max-md:px-2 max-md:py-6 ${last && 'border-b-[1px] border-b-[#F4F4F5]'}`}
    >
      {/* Left Part */}
      <div
        className={`flex flex-col items-stretch md:w-[350px] ${start && 'mr-20 max-md:m-0 max-md:w-full max-md:max-w-[400px]'}`}
      >
        <h3>{title}</h3>
        <p className="mt-0.5 w-[90%] text-wrap text-sm text-zinc-500">
          {description}
        </p>
      </div>
      {/* Right Part */}
      {form}
    </div>
  );
};

export default Section;
