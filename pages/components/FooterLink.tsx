type FooterLinkProps = {
	label: string;
	color: string;
	Icon: any;
	link?: string;
};

const FooterLink = ({ label, Icon, color, link }: FooterLinkProps) => {
	if (label && Icon && color) {
		return (
			<a
				href={link && link}
				target="_blank"
				rel="noreferrer"
				className=" text-2xl md:text-5xls text-white p-4 rounded-lg bg-darkGrey2 w-fit h-fit"
			>
				<button className="flex gap-2 whitespace-nowrap items-center">
					<Icon color={color && color} /> {label && label}
				</button>
			</a>
		);
	} else {
		return null
	}
};

export default FooterLink;
