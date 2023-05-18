import { UseModalStateReturn } from "module/common/hook/useModalState";
import { ReactElement } from "react";

export type SignRequestModalChildrenProps = Pick<UseModalStateReturn, "showModal"> & RequestStatus;

export interface RequestStatus {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
}

export interface SignRequestModalProps extends RequestStatus {
    onExited?: () => unknown;
    children: (props: SignRequestModalChildrenProps) => JSX.Element;
    signRequest: () => void | Promise<unknown>;
    onError?: () => unknown;
    onSuccess?: () => unknown;
    successMessage?: string;
    successDetails?: ReactElement;
    onClose?: () => unknown;
}
