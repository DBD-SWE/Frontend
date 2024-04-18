
interface PageTitleProps {
		children: string;
}

const PageTitle = (props: PageTitleProps) => {
    return (
        <h1 className="text-2xl font-bold">{props.children}</h1>
    )
}

export default PageTitle;