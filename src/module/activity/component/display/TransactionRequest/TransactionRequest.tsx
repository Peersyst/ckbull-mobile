import { TransactionRequestType } from "module/activity/component/display/TransactionRequest/TransactionRequest.types";
import { ActivityDisplay } from "module/activity/core/ActivityCard/ActivityCard.styles";
import { placeholder_image } from "images";
import useGetTransactionRequestAction from "module/activity/hook/useGetTransactionRequestAction";
import { getTimeFromSeconds } from "module/activity/utils/time";
import { useTranslate } from "module/common/hook/useTranslate";
import { TransactionRequestRoot } from "module/activity/component/display/TransactionRequest/TransactionRequest.styles";
import TransactionAmount from "module/transaction/component/display/TransactionAmount/TransactionAmount";

interface TransactionRequestProps {
    transaction: TransactionRequestType;
}

const TransactionRequest = ({
    transaction: {
        app: { title, source = "" } = { title: "" },
        transaction: { type, amount },
        status,
        expiresAt,
        token,
    },
}: TransactionRequestProps): JSX.Element => {
    const translate = useTranslate();
    const { actionElement, handleAction } = useGetTransactionRequestAction(status);

    return (
        <TransactionRequestRoot
            status={status}
            display={<ActivityDisplay source={source ? { uri: source } : placeholder_image} />}
            title={title}
            description={translate(status)}
            details={expiresAt ? translate("expireDate", getTimeFromSeconds(expiresAt)) : undefined}
            amount={<TransactionAmount variant="body3Strong" type={type} amount={amount} units={token} />}
            actionElement={actionElement}
            onAction={handleAction}
        />
    );
};

export default TransactionRequest;
