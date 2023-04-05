import { UseModalStateReturn } from "module/common/hook/useModalState";

export type CallbackModalChildrenProps = Pick<UseModalStateReturn, "showModal"> & CallbackStatus;

export interface CallbackStatus {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
}

export interface SendTransactionModalProps extends CallbackStatus {
    onExited?: () => unknown;
    onClose?: () => unknown;
    children: (props: CallbackModalChildrenProps) => JSX.Element;
    callback: () => void | Promise<unknown>;
    onError?: () => unknown;
    onSuccess?: () => unknown;
    successMessage?: string;
}
