
type SectionTitleProps = {
	label: string;
};

const SectionTitle = ({ label }: SectionTitleProps) => {
	return (
		<h1 className=" text-xl font-bold text-white px-4 py-1 rounded-lg bg-darkGrey2 w-fit mb-6">
			{label}
		</h1>
	);
};

export default SectionTitle;
