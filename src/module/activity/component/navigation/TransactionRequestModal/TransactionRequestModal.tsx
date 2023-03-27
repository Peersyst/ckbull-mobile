import { createBackdrop } from "@peersyst/react-native-components";
import TransactionRequestScreen from "module/activity/screen/TransactionRequestScreen/TransactionRequestScreen";
import CardSelectModal, { CardSelectModalProps } from "module/common/component/feedback/CardSelectModal/CardSelectModal";
import { TransactionRequestScreenProps } from "../../../screen/TransactionRequestScreen/TransactionRequestScreen";

export type TransactionRequestModalProps = TransactionRequestScreenProps & Omit<CardSelectModalProps, "children" | "title" | "dismissal">;

const TransactionRequestModal = createBackdrop(({ transactionRequest, ...modalProps }: TransactionRequestModalProps): JSX.Element => {
    return (
        <CardSelectModal title="Transaction request" dismissal="close" style={{ height: "95%" }} {...modalProps}>
            <TransactionRequestScreen transactionRequest={transactionRequest} />
        </CardSelectModal>
    );
});

export default TransactionRequestModal;
