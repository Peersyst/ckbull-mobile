import { TransactionRequestType } from "module/activity/component/display/TransactionRequest/TransactionRequest.types";
import { ActivityDisplay } from "module/activity/core/ActivityCard/ActivityCard.styles";
import { placeholder_image } from "images";
import useGetTransactionRequestAction from "module/activity/hook/useGetTransactionRequestAction";
import { getTimeFromSeconds } from "module/activity/utils/time";
import { useTranslate } from "module/common/hook/useTranslate";
import { TransactionRequestRoot } from "module/activity/component/display/TransactionRequest/TransactionRequest.styles";

interface TransactionRequestProps {
    transaction: TransactionRequestType;
}

const TransactionRequest = ({
    transaction: {
        app: { title, source = "" } = { title: "" },
        transaction: { amount },
        status,
        expiresAt,
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
            amount={amount}
            actionElement={actionElement}
            onAction={handleAction}
        />
    );
};

export default TransactionRequest;
