import { formatHash } from "@peersyst/react-utils";
import Balance from "module/wallet/component/display/Balance/Balance";
import { Col } from "@peersyst/react-native-components";
import SummaryField from "../../../transaction/component/display/SummaryField/SummaryField";
import { useTranslate } from "module/common/hook/useTranslate";
import { config } from "config";
import BaseTransactionSummary, {
    BaseTransactionSummaryProps,
} from "module/transaction/component/display/BaseTransactionSummary/BaseTransactionSummary";

export interface WithdrawSummaryProps extends Omit<BaseTransactionSummaryProps, "token"> {
    receiverName: string;
    receiverAddress: string;
    depositAPC: number | string;
    compensation: number | string;
}

const WithdrawSummary = ({ amount, receiverName, receiverAddress, depositAPC, compensation }: WithdrawSummaryProps): JSX.Element => {
    const translate = useTranslate();
    return (
        <BaseTransactionSummary amount={amount}>
            <Col gap="3%" style={{ alignSelf: "flex-start" }}>
                <SummaryField label={translate("destination_wallet")}>
                    {receiverName + " - " + formatHash(receiverAddress, "middle", 3)}
                </SummaryField>
                <SummaryField label={translate("deposit_apc")}>{`${depositAPC}%`}</SummaryField>
                <SummaryField label={translate("compensation")}>
                    <Balance balance={compensation} variant="body1" units={config.tokenName} />
                </SummaryField>
            </Col>
        </BaseTransactionSummary>
    );
};

export default WithdrawSummary;
