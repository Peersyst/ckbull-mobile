import useGetTransactionRequestAction from "module/activity/hook/useGetTransactionRequestAction";
import { getTimeFromSeconds } from "module/activity/utils/time";
import { useTranslate } from "module/common/hook/useTranslate";
import { TransactionRequestRoot } from "module/activity/component/display/TransactionRequest/TransactionRequest.styles";
import transactionTypeToBalanceAction from "module/transaction/component/display/TransactionAmount/utils/transactionTypeToBalanceAction";
import { useModal } from "@peersyst/react-native-components";
import TransactionRequestModal from "../../navigation/TransactionRequestModal/TransactionRequestModal";

interface TransactionRequestProps {
    transaction: TransactionRequestDto;
}

const TransactionRequest = ({
    transaction: {
        app: { title, imageUrl = "" } = { title: "" },
        transaction: { type, amount },
        status,
        expiresAt,
        createdAt,
    },
}: TransactionRequestProps): JSX.Element => {
    const translate = useTranslate();
    const { showModal } = useModal();
    const { actionElement, handleAction } = useGetTransactionRequestAction(status);

    return (
        <TransactionRequestRoot
            type={type}
            status={status}
            imageUrl={imageUrl}
            title={title}
            description={translate(status)}
            details={expiresAt ? translate("expireDate", getTimeFromSeconds(expiresAt - createdAt)) : undefined}
            amount={amount}
            amountAction={transactionTypeToBalanceAction(type)}
            actionElement={actionElement}
            onAction={() => showModal(TransactionRequestModal)}
        />
    );
};

export default TransactionRequest;
