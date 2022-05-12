type TitleProps = {
    label: string;
};

const Title = ({ label }: TitleProps) => {
    return (
        <h1 className=" text-2xl md:text-5xl font-bold text-white px-4 py-1 rounded-lg bg-darkGrey2 w-fit mb-6"  >{label}</h1>
    );
};

export default Title;
