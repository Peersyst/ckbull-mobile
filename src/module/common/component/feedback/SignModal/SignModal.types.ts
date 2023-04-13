import { UseModalStateReturn } from "module/common/hook/useModalState";
import { ReactElement } from "react";

export type SignModalChildrenProps = Pick<UseModalStateReturn, "showModal"> & SignStatus;

export interface SignStatus {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
}

export interface SignModalProps extends SignStatus {
    onExited?: () => unknown;
    onClose?: () => unknown;
    children: (props: SignModalChildrenProps) => JSX.Element;
    onSign: () => void | Promise<unknown>;
    onError?: () => unknown;
    onSuccess?: () => unknown;
    successMessage?: string;
    successDetails?: ReactElement;
}
