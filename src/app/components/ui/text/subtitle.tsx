interface SubTitleProps {
  content: string[];
}

const SubTitle = (props: SubTitleProps) => {
  return (
    <h3 className="mt-2 flex items-center text-base font-normal text-zinc-500">
      {props.content.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {index !== 0 && (
            <div className="h-2 w-2 rounded-full border border-[#E2E8F0]"></div>
          )}
          <span
            key={index}
            className="decoration-none pr-2 text-xs font-normal text-zinc-500"
          >
            {item}
          </span>
        </div>
      ))}
    </h3>
  );
};

export default SubTitle;
