import { SignRequestModalProps } from "module/common/component/feedback/SignRequestModal/SignRequestModal.types";
import ConfirmPinModal from "module/settings/components/core/ConfirmPinModal/ConfirmPinModal";
import LoadingModal from "module/common/component/feedback/LoadingModal/LoadingModal";
import { useEffect, useState } from "react";

export default function SignRequestModal({
    onExited,
    signRequest,
    successMessage,
    successDetails,
    onError,
    onSuccess,
    children,
    isSuccess,
    isError,
    isLoading,
    onClose,
}: SignRequestModalProps): JSX.Element {
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleSignRequest = async () => {
        try {
            if (signRequest["then" as keyof typeof SignRequestModal] === "function") {
                await signRequest();
            } else {
                signRequest();
            }
        } catch (e) {}
    };

    useEffect(() => {
        if (isSuccess) onSuccess?.();
        else if (isError) onError?.();
    }, [isSuccess, isError]);

    return (
        <>
            {children({
                showModal: () => setShowConfirmation(true),
                isError,
                isSuccess,
                isLoading: isLoading || showConfirmation,
            })}
            <ConfirmPinModal open={showConfirmation} onClose={() => setShowConfirmation(false)} onConfirmedExited={handleSignRequest} />
            <LoadingModal
                open={false}
                success={isSuccess}
                loading={isLoading}
                error={isError}
                successMessage={successMessage}
                successDetails={successDetails}
                onClose={onClose}
                onExited={onExited}
            />
        </>
    );
}
