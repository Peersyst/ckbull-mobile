import { useTranslate } from "module/common/hook/useTranslate";
import { TransactionRequestRoot } from "module/activity/component/display/TransactionRequest/TransactionRequest.styles";
import { CompleteTransactionRequestDto } from "module/api/service";
import { useModal } from "@peersyst/react-native-components";
import TransactionRequestModal from "../../navigation/TransactionRequestModal/TransactionRequestModal";
import useFormatDate from "module/common/hook/useFormatDate";
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
    const formatDate = useFormatDate();

    return (
        <TransactionRequestRoot
            status={status}
            imageUrl={image}
            title={name}
            description={capitalize(status)}
            details={translate("expiresAt", { date: formatDate(expiresAt) })}
            onAction={() => showModal(TransactionRequestModal, { transactionRequest })}
        />
    );
};

export default TransactionRequest;
