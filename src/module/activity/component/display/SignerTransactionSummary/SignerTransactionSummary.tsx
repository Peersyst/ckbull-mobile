import { Col, Skeleton, Typography } from "@peersyst/react-native-components";
import { formatHash } from "@peersyst/react-utils";
import useGetAddressesFromTransaction from "module/activity/hook/useGetAddressesFromTransaction";
import { useTranslate } from "module/common/hook/useTranslate";
import BaseTransactionSummary, {
    BaseTransactionSummaryProps,
} from "module/transaction/component/display/BaseTransactionSummary/BaseTransactionSummary";
import SummaryField from "module/transaction/component/display/SummaryField/SummaryField";
import { useGetTransactionAsset } from "module/activity/hook/useGetTransactionAsset";

interface SignerTransactionSummaryProps extends Omit<BaseTransactionSummaryProps, "amount"> {
    transaction: any;
}

const SignerTransactionSummary = ({ transaction, ...rest }: SignerTransactionSummaryProps): JSX.Element => {
    const translate = useTranslate();

    const { asset, isLoading } = useGetTransactionAsset(transaction);
    const { inputAddresses: senders = [], outputAddresses: receivers = [] } = useGetAddressesFromTransaction(transaction, {
        inputs: true,
        outputs: true,
    });

    return (
        <Skeleton loading={isLoading}>
            <BaseTransactionSummary amount={asset.amount || "0"} nft={asset.nft} {...rest}>
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
        </Skeleton>
    );
};

export default SignerTransactionSummary;
