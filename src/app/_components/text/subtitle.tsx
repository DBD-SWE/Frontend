interface SubTitleProps {
  content: string[];
}

const SubTitle = (props: SubTitleProps) => {
  return (
    <h3 className="mt-2 flex items-center text-base font-normal text-zinc-500">
      {props.content.map((item, index) => (
        <span
          key={index}
          className="decoration-none pr-2 text-xs font-normal text-zinc-500"
        >
          {item}
        </span>
      ))}
    </h3>
  );
};

export default SubTitle;
