import { TwitterLogo, Code, EnvelopeOpen, GithubLogo } from "phosphor-react";

import copyToClipboard from "../../utilities/copyToClipboard";
import useClipboardModal from "../../utilities/useClipboardModal";

import ClipboardModal from "./ClipboardModal";
import FooterLink from "./FooterLink";

const Footer = () => {
	const {showModal, setShowModal} = useClipboardModal();
	const handleEmailClick = () => {
		setShowModal(true);
		copyToClipboard("jeremieemk@gmail.com");
	};
	return (
		<section className="flex justify-between items-center">
			<div className=" flex w-full gap-4 items-center ">
				<FooterLink
					label="TWITTER"
					color="#007ACC"
					Icon={TwitterLogo}
					link="https://twitter.com/iZem"
				/>
				<div className="flex" onClick={() => handleEmailClick()}>
					<FooterLink label="EMAIL" color="#f7df1e" Icon={EnvelopeOpen} />
				</div>
				<FooterLink
					label="GITHUB"
					color="#699E5B"
					Icon={GithubLogo}
					link="https://github.com/jeremieemk"
				/>
				<ClipboardModal showModal={showModal} />
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
