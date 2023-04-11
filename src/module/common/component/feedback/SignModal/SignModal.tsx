import LoadingModal from "module/common/component/feedback/LoadingModal/LoadingModal";
import { useTranslate } from "module/common/hook/useTranslate";
import ConfirmPinModal from "module/settings/components/core/ConfirmPinModal/ConfirmPinModal";
import { useEffect, useState } from "react";
import { SignModalProps } from "./SignModal.types";

function SignModal({ onExited, children, callback, isLoading, isSuccess, isError, onError, onSuccess, successMessage }: SignModalProps) {
    const translate = useTranslate();
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleCallback = async () => {
        try {
            if (callback["then" as keyof typeof SignModal] === "function") {
                await callback();
            } else {
                callback();
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
            <ConfirmPinModal open={showConfirmation} onClose={() => setShowConfirmation(false)} onConfirmedExited={handleCallback} />
            <LoadingModal
                open={false}
                loading={isLoading}
                success={isSuccess}
                error={isError}
                onExited={onExited}
                successMessage={successMessage || translate("transaction_completed")}
            />
        </>
    );
}

export default SignModal;
