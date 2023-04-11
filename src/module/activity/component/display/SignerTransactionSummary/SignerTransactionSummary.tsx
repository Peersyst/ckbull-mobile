import { Col, Typography } from "@peersyst/react-native-components";
import { formatHash } from "@peersyst/react-utils";
import { useTranslate } from "module/common/hook/useTranslate";
import BaseTransactionSummary, {
    BaseTransactionSummaryProps,
} from "module/transaction/component/display/BaseTransactionSummary/BaseTransactionSummary";
import SummaryField from "module/transaction/component/display/SummaryField/SummaryField";

interface SignerTransactionSummaryProps extends BaseTransactionSummaryProps {
    senders: string[];
    receivers: string[];
}

const SignerTransactionSummary = ({ senders, receivers, ...rest }: SignerTransactionSummaryProps): JSX.Element => {
    const translate = useTranslate();

    return (
        <BaseTransactionSummary {...rest}>
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

export default SignerTransactionSummary;
