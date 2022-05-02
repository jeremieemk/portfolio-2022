type CopyFn = (text: string) => Promise<boolean>; // Return success

const copyToClipboard: CopyFn = async (text) => {
    if (!navigator?.clipboard) {
        console.warn("Clipboard not supported");
        return false;
    }
    try {
        await navigator.clipboard.writeText(text);
        console.log(text);
        return true;
    } catch (error) {
        console.warn("Copy failed", error);
        return false;
    }
};

export  default copyToClipboard