import { motion } from "framer-motion";

type ClipboardModalProps = {
	showModal: boolean;
};

const ClipboardModal = ({ showModal }: ClipboardModalProps) => {
	return showModal ? (
		<motion.div
			animate={{ opacity: 1 }}
			transition={{ duration: 0.2 }}
			initial={{ opacity: 0 }}
			className="text-base md:text-lg p-3 rounded-lg bg-darkGrey2 w-fit h-fit"
		>
			jeremieemk@gmail.com was copied to your clipboard
		</motion.div>
	) : null;
};

export default ClipboardModal;
