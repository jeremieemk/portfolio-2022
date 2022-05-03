type ClipboardModalProps = {
	showModal: boolean;
};

const ClipboardModal = ({ showModal }: ClipboardModalProps) => {
	return (
		showModal && (
			<div
				className="transition duration-300 ease-in-out text-base md:text-lg p-3 rounded-lg bg-darkGrey2 w-fit h-fit"
			>
				jeremieemk@gmail.com was copied to your clipboard
			</div>
		)
	);
};

export default ClipboardModal;
