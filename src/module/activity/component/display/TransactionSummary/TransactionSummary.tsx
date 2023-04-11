import { Col, Typography } from "@peersyst/react-native-components";
import { formatHash } from "@peersyst/react-utils";
import useGetTransaction from "module/activity/queries/useGetTransaction";
import { useTranslate } from "module/common/hook/useTranslate";
import BaseTransactionSummary, {
    BaseTransactionSummaryProps,
} from "module/transaction/component/display/BaseTransactionSummary/BaseTransactionSummary";
import SummaryField from "module/transaction/component/display/SummaryField/SummaryField";

type TransactionSummaryProps = Omit<BaseTransactionSummaryProps, "amount">;

const TransactionSummary = ({ ...rest }: TransactionSummaryProps): JSX.Element => {
    const translate = useTranslate();

    const { data: { senders, receivers, amount } = { senders: [], receivers: [], amount: 0 } } = useGetTransaction();

    return (
        <BaseTransactionSummary amount={amount} {...rest}>
            <Col gap="7%" style={{ alignSelf: "flex-start" }}>
                {senders.length && (
                    <SummaryField label={translate("from")}>
                        {senders.map((sender, index) => (
                            <Typography key={index} variant="body2Regular">
                                {formatHash(sender, "middle", 3)}
                            </Typography>
                        ))}
                    </SummaryField>
                )}
                {receivers.length && (
                    <SummaryField label={translate("to")}>
                        {receivers.map((receiver, index) => (
                            <Typography key={index} variant="body2Regular">
                                {formatHash(receiver, "middle", 3)}
                            </Typography>
                        ))}
                    </SummaryField>
                )}
            </Col>
        </BaseTransactionSummary>
    );
};

export default TransactionSummary;
