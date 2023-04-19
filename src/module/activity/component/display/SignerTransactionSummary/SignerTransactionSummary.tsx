import { Col, Skeleton, Typography } from "@peersyst/react-native-components";
import { formatHash } from "@peersyst/react-utils";
import useGetAddressesFromTransaction from "module/activity/hook/useGetAddressesFromTransaction";
import { useTranslate } from "module/common/hook/useTranslate";
import BaseTransactionSummary, {
    BaseTransactionSummaryProps,
} from "module/transaction/component/display/BaseTransactionSummary/BaseTransactionSummary";
import SummaryField from "module/transaction/component/display/SummaryField/SummaryField";
import { useGetTransactionAsset } from "module/activity/hook/useGetTransactionAsset";
import useGetNftFromPartialTransaction from "../../../queries/useGetNftFromPartialTransaction";
import useGetTransactionType from "module/activity/queries/useGetTransactionType";
import { jsonToTransactionSkeletonInterface } from "ckb-peersyst-sdk";

interface SignerTransactionSummaryProps extends Omit<BaseTransactionSummaryProps, "amount"> {
    transaction: any;
}

const SignerTransactionSummary = ({ transaction, ...rest }: SignerTransactionSummaryProps): JSX.Element => {
    const translate = useTranslate();

    const partialTransaction = jsonToTransactionSkeletonInterface(transaction);

    const { data: nft, isLoading: isLoadingNft } = useGetNftFromPartialTransaction(partialTransaction);
    const { data: type, isLoading: isLoadingType } = useGetTransactionType(partialTransaction);

    const getAssetByType = useGetTransactionAsset(transaction);
    const { inputAddresses: senders = [], outputAddresses: receivers = [] } = useGetAddressesFromTransaction(transaction, {
        inputs: true,
        outputs: true,
    });

    const asset = getAssetByType(type, nft);

    const hasSenders = senders.length > 0;
    const hasReceivers = receivers.length > 0;

    const loading = isLoadingNft || isLoadingType;

    return (
        <Skeleton loading={loading}>
            <BaseTransactionSummary amount={asset.amount || "0"} nft={asset.nft} {...rest}>
                <Col gap="7%" style={{ alignSelf: "flex-start" }}>
                    {hasSenders && (
                        <SummaryField label={translate("from")}>
                            {senders.map((sender, index) => (
                                <Typography key={index} variant="body2Regular">
                                    {formatHash(sender, "middle", 3)}
                                </Typography>
                            ))}
                        </SummaryField>
                    )}
                    {hasReceivers && (
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
