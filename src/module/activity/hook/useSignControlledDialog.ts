import { useState } from "react";

interface UseSignControlledDialogReturn {
    open: boolean;
    onClose: () => void;
    title: string;
    content: string;
}

export default function useSignControlledDialog(): UseSignControlledDialogReturn {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    return {
        open,
        onClose: handleClose,
        title: "",
        content: "",
    };
}
