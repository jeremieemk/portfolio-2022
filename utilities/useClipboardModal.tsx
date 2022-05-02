import { Dispatch, SetStateAction, useState, useEffect } from "react";

type ReturnType = {
    showModal: boolean,
    setShowModal: Dispatch<SetStateAction<boolean>>
}

function useClipboardModal(): ReturnType {
    const [showModal, setShowModal] = useState<boolean>(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            showModal === true && setShowModal(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, [showModal]);
    return  {showModal, setShowModal }
  }
  
export default useClipboardModal