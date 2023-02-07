import useGetTransactionRequestAction from "module/activity/hook/useGetTransactionRequestAction";
import { getTimeFromSeconds } from "module/activity/utils/time";
import { useTranslate } from "module/common/hook/useTranslate";
import { TransactionRequestRoot } from "module/activity/component/display/TransactionRequest/TransactionRequest.styles";
import { TransactionRequestDto } from "module/activity/dto/dtos";
import transactionTypeToBalanceAction from "module/transaction/component/display/TransactionAmount/utils/transactionTypeToBalanceAction";

interface TransactionRequestProps {
    transaction: TransactionRequestDto;
}

const TransactionRequest = ({
    transaction: {
        app: { title, imageUrl = "" } = { title: "" },
        transaction: { type, amount },
        status,
        expiresAt,
    },
}: TransactionRequestProps): JSX.Element => {
    const translate = useTranslate();
    const { actionElement, handleAction } = useGetTransactionRequestAction(status);

    return (
        <TransactionRequestRoot
            type={type}
            status={status}
            imageUrl={imageUrl}
            title={title}
            description={translate(status)}
            details={expiresAt ? translate("expireDate", getTimeFromSeconds(expiresAt)) : undefined}
            amount={amount}
            amountAction={transactionTypeToBalanceAction(type)}
            actionElement={actionElement}
            onAction={handleAction}
        />
    );
};

export default TransactionRequest;
