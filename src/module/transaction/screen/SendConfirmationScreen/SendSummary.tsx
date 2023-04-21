import { formatHash } from "@peersyst/react-utils";
import { SendState } from "module/transaction/state/SendState";
import { Col } from "@peersyst/react-native-components";
import BaseTransactionSummary, { BaseTransactionSummaryProps } from "../../component/display/BaseTransactionSummary/BaseTransactionSummary";
import SummaryField from "../../component/display/SummaryField/SummaryField";
import { useTranslate } from "module/common/hook/useTranslate";

export interface SendSummaryProps extends BaseTransactionSummaryProps {
    senderName: string;
    senderAddress: string;
    receiverAddress: SendState["receiverAddress"];
    message: SendState["message"];
}

const SendSummary = ({ receiverAddress, message, senderName, senderAddress, ...rest }: SendSummaryProps): JSX.Element => {
    const translate = useTranslate();
    return (
        <BaseTransactionSummary {...rest}>
            <Col gap="7%" style={{ alignSelf: "flex-start" }}>
                <SummaryField label={translate("from")}>{senderName + " - " + formatHash(senderAddress, "middle", 3)}</SummaryField>
                <SummaryField label={translate("to")}>{formatHash(receiverAddress!, "middle", 3)}</SummaryField>
                {message && <SummaryField label={translate("message")}>{message || "-"}</SummaryField>}
            </Col>
        </BaseTransactionSummary>
    );
};

export default SendSummary;
