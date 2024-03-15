import { formatHash } from "@peersyst/react-utils";
import { Col, Typography } from "@peersyst/react-native-components";
import BaseSendSummary, {
    BaseTransactionSummaryFullProps,
} from "../../../transaction/component/display/BaseTransactionSummary/BaseTransactionSummary";
import SummaryField from "../../../transaction/component/display/SummaryField/SummaryField";
import useGetDaoInfo from "module/dao/query/useGetDaoInfo";
import { useTranslate } from "module/common/hook/useTranslate";

export interface DepositSummaryProps extends Omit<BaseTransactionSummaryFullProps, "token" | "nft" | "children"> {
    senderName: string;
    senderAddress: string;
}

const DepositSummary = ({ amount, senderName, senderAddress, ...rest }: DepositSummaryProps): JSX.Element => {
    const { data: { estimated_apc = "0" } = {}, isLoading: loadingDao } = useGetDaoInfo();
    const translate = useTranslate();
    return (
        <BaseSendSummary amount={amount} {...rest}>
            <Col gap="7%" style={{ alignSelf: "flex-start" }}>
                <SummaryField label={translate("from")}>{senderName + " - " + formatHash(senderAddress, "middle", 3)}</SummaryField>
                <SummaryField label={translate("estimated_apc")}>
                    {loadingDao ? `${translate("loading_apc")}...` : `${estimated_apc}%`}
                </SummaryField>
                <Typography variant="body4Light" textAlign="center">
                    <Typography variant="body4Strong" textAlign="center">
                        {`${translate("attention")} `}
                    </Typography>
                    {translate("deposit_summary_warning")}
                </Typography>
            </Col>
        </BaseSendSummary>
    );
};

export default DepositSummary;
