import { createBackdrop } from "@peersyst/react-native-components";
import TransactionRequestScreen from "module/activity/screen/TransactionRequestScreen/TransactionRequestScreen";
import CardSelectModal, { CardSelectModalProps } from "module/common/component/feedback/CardSelectModal/CardSelectModal";
import { TransactionRequestScreenProps } from "../../../screen/TransactionRequestScreen/TransactionRequestScreen";
import { useTranslate } from "module/common/hook/useTranslate";

export type TransactionRequestModalProps = TransactionRequestScreenProps & Omit<CardSelectModalProps, "children" | "title" | "dismissal">;

const TransactionRequestModal = createBackdrop(({ transactionRequest, ...modalProps }: TransactionRequestModalProps): JSX.Element => {
    const translate = useTranslate();

    return (
        <CardSelectModal title={translate("signTransactionRequest")} dismissal="close" style={{ height: "95%" }} {...modalProps}>
            <TransactionRequestScreen transactionRequest={transactionRequest} />
        </CardSelectModal>
    );
});

export default TransactionRequestModal;
