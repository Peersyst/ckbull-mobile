import LoadingModal from "module/common/component/feedback/LoadingModal/LoadingModal";
import { useTranslate } from "module/common/hook/useTranslate";
import ConfirmPinModal from "module/settings/components/core/ConfirmPinModal/ConfirmPinModal";
import { useEffect, useState } from "react";
import { SendTransactionModalProps } from "./CallbackModal.types";

function CallbackModal({
    onExited,
    children,
    callback,
    isLoading,
    isSuccess,
    isError,
    onError,
    onSuccess,
    successMessage,
}: SendTransactionModalProps) {
    const translate = useTranslate();
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleCallback = async () => {
        try {
            if (callback["then" as keyof typeof CallbackModal] === "function") {
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

export default CallbackModal;
