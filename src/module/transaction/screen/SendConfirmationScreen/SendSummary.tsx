import { formatHash } from "@peersyst/react-utils";
import { SendState } from "module/transaction/state/SendState";
import { Col } from "@peersyst/react-native-components";
import BaseSendSummary, { BaseSendSummaryProps } from "../../component/display/BaseSendSummary/BaseSendSummary";
import SummaryField from "../../component/display/SummaryField/SummaryField";
import { useTranslate } from "module/common/hook/useTranslate";

export interface SendSummaryProps extends BaseSendSummaryProps {
    senderName: string;
    senderAddress: string;
    receiverAddress: SendState["receiverAddress"];
    message: SendState["message"];
}

const SendSummary = ({ amount, fee, token, receiverAddress, message, senderAddress }: SendSummaryProps): JSX.Element => {
    const translate = useTranslate();
    return (
        <BaseSendSummary amount={amount} fee={fee} token={token}>
            <Col gap={16} style={{ alignSelf: "flex-start" }} flex={1}>
                <SummaryField label={translate("from")}>{formatHash(senderAddress, "middle", 15)}</SummaryField>
                <SummaryField label={translate("to")}>{formatHash(receiverAddress!, "middle", 15)}</SummaryField>
                <SummaryField label={translate("message")}>{message || "-"}</SummaryField>
            </Col>
        </BaseSendSummary>
    );
};

export default SendSummary;
