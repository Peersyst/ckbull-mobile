import { useTranslate } from "module/common/hook/useTranslate";
import { TransactionRequestRoot } from "module/activity/component/display/TransactionRequest/TransactionRequest.styles";
import { CompleteTransactionRequestDto } from "module/api/service";
import useFormatDate from "module/common/hook/useFormatDate";

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
    const formatDate = useFormatDate();

    return (
        <TransactionRequestRoot
            status={status}
            imageUrl={image}
            title={name}
            description={status}
            details={translate("expiresAt", { date: formatDate(expiresAt) })}
            amount={amount}
            onAction={() => undefined}
        />
    );
};

export default TransactionRequest;
