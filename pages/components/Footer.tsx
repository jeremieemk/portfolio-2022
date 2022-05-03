import { TwitterLogo, Code, EnvelopeOpen, GithubLogo } from "phosphor-react";

import copyToClipboard from "../../utilities/copyToClipboard";
import useClipboardModal from "../../utilities/useClipboardModal";

import ClipboardModal from "./ClipboardModal";
import FooterLink from "./FooterLink";

const Footer = () => {
	const { showModal, setShowModal } = useClipboardModal();
	const handleEmailClick = () => {
		setShowModal(true);
		copyToClipboard("jeremieemk@gmail.com");
	};
	return (
		<section className="w-full flex flex-col md:flex-row justify-between md:items-center gap-4">
			<div className="flex flex-col md:flex-row w-full gap-4 md:items-center ">
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
			{/* <div className="flex md:hidden" >
				<ClipboardModal showModal={showModal} />
			</div> */}
		</section>
	);
};

export default Footer;
