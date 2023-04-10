import LoadingModal from "module/common/component/feedback/LoadingModal/LoadingModal";
import { useTranslate } from "module/common/hook/useTranslate";
import ConfirmPinModal from "module/settings/components/core/ConfirmPinModal/ConfirmPinModal";
import { useEffect, useState } from "react";
import { SignModalProps } from "./SignModal.types";

function SignModal({
    onExited,
    children,
    onSign,
    isLoading,
    isSuccess,
    isError,
    onError,
    onSuccess,
    successMessage,
    successDetails,
}: SignModalProps) {
    const translate = useTranslate();
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleOnSign = async () => {
        try {
            if (onSign["then" as keyof typeof SignModal] === "function") {
                await onSign();
            } else {
                onSign();
            }
        } catch (e) {}
    };

    useEffect(() => {
        if (isSuccess) onSuccess?.();
        else if (isError) onError?.();
    }, [isSuccess, isError]);

    return (
        <>
            {children({ showModal: () => setShowConfirmation(true), isError, isSuccess, isLoading: isLoading || showConfirmation })}
            <ConfirmPinModal open={showConfirmation} onClose={() => setShowConfirmation(false)} onConfirmedExited={handleOnSign} />
            <LoadingModal
                loading={isLoading}
                success={isSuccess}
                error={isError}
                onExited={onExited}
                successMessage={successMessage || translate("transaction_completed")}
                successDetails={successDetails}
            />
        </>
    );
}

export default SignModal;
