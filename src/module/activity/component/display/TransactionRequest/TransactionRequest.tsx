import useGetTransactionRequestAction from "module/activity/hook/useGetTransactionRequestAction";
import { getTimeFromSeconds } from "module/activity/utils/time";
import { useTranslate } from "module/common/hook/useTranslate";
import { TransactionRequestRoot } from "module/activity/component/display/TransactionRequest/TransactionRequest.styles";
import { CompleteTransactionRequestDto } from "module/api/service";
import { useModal } from "@peersyst/react-native-components";
import TransactionRequestModal from "../../navigation/TransactionRequestModal/TransactionRequestModal";
import { capitalize } from "@peersyst/react-utils";

interface TransactionRequestProps {
    transaction: CompleteTransactionRequestDto;
}

const TransactionRequest = ({ transaction: transactionRequest }: TransactionRequestProps): JSX.Element => {
    const {
        signInRequest: {
            app: { name, image },
        },
        status,
        expiresAt,
    } = transactionRequest;

    const translate = useTranslate();
    const { showModal } = useModal();
    const { actionElement } = useGetTransactionRequestAction(status);

    const expirationTimestamp = new Date(expiresAt).getTime();
    const currentTimestamp = new Date().getTime();

    return (
        <TransactionRequestRoot
            status={status}
            imageUrl={image}
            title={name}
            description={capitalize(status)}
            details={expiresAt ? translate("expireDate", getTimeFromSeconds(expirationTimestamp - currentTimestamp)) : undefined}
            actionElement={actionElement}
            onAction={() => showModal(TransactionRequestModal, { transactionRequest })}
        />
    );
};

export default TransactionRequest;
