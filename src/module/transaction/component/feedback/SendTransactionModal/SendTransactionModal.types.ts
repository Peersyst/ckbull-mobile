import { UseModalStateReturn } from "module/common/hook/useModalState";

export type SendTransactionModalChildrenProps = Pick<UseModalStateReturn, "showModal"> & TransactionStatus;

export interface TransactionStatus {
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
}

export interface SendTransactionModalProps extends TransactionStatus {
    onExited?: () => unknown;
    children: (props: SendTransactionModalChildrenProps) => JSX.Element;
    sendTransaction: () => void | Promise<unknown>;
    onError?: () => unknown;
    onSuccess?: () => unknown;
    successMessage?: string;
}
