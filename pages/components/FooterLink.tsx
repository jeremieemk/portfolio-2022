import { TwitterLogo } from "phosphor-react";

type FooterLinkProps = {
    label: string,
    color: string,
    Icon : any,
    link: string
};


const FooterLink = ({ label, Icon, color, link }: FooterLinkProps) => {
	return (
		<a href={link} target="_blank" rel="noreferrer" className=" text-2xl md:text-5xls text-white p-4 rounded-lg bg-darkGrey2 w-fit">
			<div className="flex gap-2 whitespace-nowrap items-center">
				<Icon color={color} /> {label}
			</div>
		</a>
	);
};

export default FooterLink;
