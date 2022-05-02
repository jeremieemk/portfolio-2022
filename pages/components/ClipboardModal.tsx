type ClipboardModalProps = {
    showModal: boolean;
};

const ClipboardModal = ({showModal}: ClipboardModalProps) => {
    return (
        <div style={{opacity : showModal ? 1 : 0 }} className="transition duration-300 ease-in-out text-base md:text-xl p-3 rounded-lg bg-darkGrey2 w-fit h-fit">
            jeremieemk@gmail.com was copied to your clipboard
        </div>
    );
};

export default ClipboardModal;