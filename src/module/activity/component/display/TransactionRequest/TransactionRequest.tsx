import useGetTransactionRequestAction from "module/activity/hook/useGetTransactionRequestAction";
import { getTimeFromSeconds } from "module/activity/utils/time";
import { useTranslate } from "module/common/hook/useTranslate";
import { TransactionRequestRoot } from "module/activity/component/display/TransactionRequest/TransactionRequest.styles";
import { useModal } from "@peersyst/react-native-components";
import TransactionRequestModal from "../../navigation/TransactionRequestModal/TransactionRequestModal";
import { CompleteTransactionRequestDto } from "module/api/common";
import useGetTransactionRequest from "module/activity/queries/useGetTransactionRequest";

interface TransactionRequestProps {
    transaction: CompleteTransactionRequestDto;
}

const TransactionRequest = ({
    transaction: {
        signInRequest: {
            app: { image, name },
        },
        transaction: { amount },
        status = "pending",
        expiresAt,
        createdAt,
    },
}: TransactionRequestProps): JSX.Element => {
    const translate = useTranslate();
    const { showModal } = useModal();
    const { actionElement } = useGetTransactionRequestAction(status);

    const { data: transactionRequest } = useGetTransactionRequest(
        "AlCsFFze9TrhdjQ3T7NXuilJIIaVlYd/OlJFanVBEzuVKyAU0S3beO6p6Q42bVkEuB7d6BNYwTXyz3QLO545MQ==",
    );

    const expirationDate = new Date(expiresAt);
    const creationDate = new Date(createdAt);

    return (
        <TransactionRequestRoot
            status={status}
            imageUrl={image}
            title={name}
            description={translate(status)}
            details={
                expiresAt ? translate("expireDate", getTimeFromSeconds(expirationDate.getSeconds() - creationDate.getSeconds())) : undefined
            }
            amount={amount}
            actionElement={actionElement}
            onAction={() => showModal(TransactionRequestModal, { transactionRequest })}
        />
    );
};

export default TransactionRequest;
