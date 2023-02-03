import { TransactionRequestStatusType } from "module/activity/component/display/TransactionRequest/TransactionRequest.types";
import { ReactElement } from "react";

interface UseGetTransactionRequestAction {
    actionElement: ReactElement | undefined;
    handleAction: (() => unknown) | undefined;
}

export default function (status: TransactionRequestStatusType): UseGetTransactionRequestAction {
    const getActionElement = (): ReactElement | undefined => {
        switch (status) {
            default:
                return undefined;
        }
    };

    const getHandleAction = (): (() => unknown) | undefined => {
        switch (status) {
            case "pending":
                // Temporal until doing sign/review_connection modal
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
