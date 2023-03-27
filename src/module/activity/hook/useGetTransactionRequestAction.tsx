import { CompleteTransactionRequestDto } from "module/api/service";
import { ReactElement } from "react";

interface UseGetTransactionRequestAction {
    actionElement: ReactElement | undefined;
    handleAction: (() => unknown) | undefined;
}

export default function (status: CompleteTransactionRequestDto["status"]): UseGetTransactionRequestAction {
    const getActionElement = (): ReactElement | undefined => {
        switch (status) {
            case "pending":
                return undefined;
            case "signed":
                return undefined;
            case "expired":
                return undefined;
            default:
                return undefined;
        }
    };

    const getHandleAction = (): (() => unknown) | undefined => {
        switch (status) {
            case "pending":
                return () => undefined;
            case "signed":
                return () => undefined;
            case "expired":
                return () => undefined;
            default:
                return undefined;
        }
    };

    return {
        actionElement: getActionElement(),
        handleAction: getHandleAction(),
    };
}
