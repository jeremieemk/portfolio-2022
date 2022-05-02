import { TwitterLogo, Code, EnvelopeOpen, GithubLogo } from "phosphor-react";
import FooterLink from "./FooterLink";

const Footer = () => {
	return (
		<section className="flex justify-between">
			<div className=" flex w-full gap-4 ">
				<FooterLink
					label="TWITTER"
					color="#007ACC"
					Icon={TwitterLogo}
					link="https://twitter.com/iZem"
				/>
				<FooterLink label="EMAIL" color="#f7df1e" Icon={EnvelopeOpen} />
				<FooterLink
					label="GITHUB"
					color="#699E5B"
					Icon={GithubLogo}
					link="https://github.com/jeremieemk"
				/>
			</div>
			<FooterLink
				label="VIEW CODE"
				color="#DC5EB7"
				Icon={Code}
				link="https://github.com/jeremieemk/portfolio-2022"
			/>
		</section>
	);
};

export default Footer;
