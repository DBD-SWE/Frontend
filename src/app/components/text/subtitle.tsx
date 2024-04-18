interface SubTitleProps {
  children: string;
}

const SubTitle = (props: SubTitleProps) => {
  return (
    <h3 className="mt-1.5 text-base font-normal text-zinc-500">
      {props.children}
    </h3>
  );
};

export default SubTitle;
