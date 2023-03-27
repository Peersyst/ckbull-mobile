import useGetTransactionRequestAction from "module/activity/hook/useGetTransactionRequestAction";
import { getTimeFromSeconds } from "module/activity/utils/time";
import { useTranslate } from "module/common/hook/useTranslate";
import { TransactionRequestRoot } from "module/activity/component/display/TransactionRequest/TransactionRequest.styles";
import { CompleteTransactionRequestDto } from "module/api/service";

interface TransactionRequestProps {
    transaction: CompleteTransactionRequestDto;
}

const TransactionRequest = ({
    transaction: {
        signInRequest: {
            app: { name, image },
        },
        transaction: { amount },
        status,
        expiresAt,
    },
}: TransactionRequestProps): JSX.Element => {
    const translate = useTranslate();

    const { actionElement, handleAction } = useGetTransactionRequestAction(status);

    const expirationTimestamp = new Date(expiresAt).getTime();
    const currentTimestamp = new Date().getTime();

    return (
        <TransactionRequestRoot
            status={status}
            imageUrl={image}
            title={name}
            description={status}
            details={expiresAt ? translate("expireDate", getTimeFromSeconds(expirationTimestamp - currentTimestamp)) : undefined}
            amount={amount}
            actionElement={actionElement}
            onAction={handleAction}
        />
    );
};

export default TransactionRequest;
