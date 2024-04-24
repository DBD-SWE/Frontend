import { Select } from "@/components/input";

interface SectionProps {
	form: React.ReactNode;
	title: string;
	description: string;
}

const Section = (props: SectionProps) => {
	const { title, description, form } = props;
  return (
    <div className="flex items-center justify-start border-t-[1px] border-l-transparent border-r-transparent border-t-[#F4F4F5] px-4 py-14 max-md:flex-col max-md:items-start max-md:px-2 max-md:py-6">
      {/* Left Part */}
      <div className="flex flex-col md:w-[350px]">
        <h3>{title}</h3>
        <p className="mt-0.5 text-wrap text-sm text-zinc-500">
          {description}
        </p>
      </div>
      {/* Right Part */}
      {form}
    </div>
  );
};


export default Section;