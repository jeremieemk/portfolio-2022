import { motion } from "framer-motion";

type FooterLinkProps = {
	label: string;
	color: string;
	Icon: any;
	link?: string;
};

const FooterLink = ({ label, Icon, color, link }: FooterLinkProps) => {
	if (label && Icon && color) {
		return (
			<motion.a
				whileHover={{
					y: 1.5,
					transition: { duration: 0.2, ease: "easeInOut" },
				}}
				href={link && link}
				target="_blank"
				rel="noreferrer"
				className=" text-2xl md:text-5xls text-white p-4 rounded-lg bg-darkGrey2 w-fit h-fit"
			>
				<button className="flex gap-2 whitespace-nowrap items-center">
					<Icon color={color} /> {label}
				</button>
			</motion.a>
		);
	} else {
		return null;
	}
};

export default FooterLink;
