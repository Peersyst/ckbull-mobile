import Balance from "module/wallet/component/display/Balance/Balance";
import { BalanceProps } from "module/wallet/component/display/Balance/Balance.types";
import { ReactElement } from "react";
import { Col, Typography } from "@peersyst/react-native-components";
import { useTranslate } from "module/common/hook/useTranslate";
import Container from "module/common/component/display/Container/Container";
import { config } from "config";
import Fee from "../Fee/Fee";
import { BalanceOperations } from "module/common/utils/BalanceOperations/BalanceOperations";
import { convertShannonsToCKB } from "module/wallet/utils/convertShannonsToCKB";
import { TokenAmount } from "module/token/types";
import { Nft } from "ckb-peersyst-sdk";
import { useSettings } from "module/settings/hook/useSettings";

export interface BaseTransactionSummaryFullProps {
    amount: BalanceProps["balance"];
    children: ReactElement;
    showTotal?: boolean;
    nft?: Nft;
    token?: TokenAmount;
}

export type BaseTransactionSummaryProps = Omit<BaseTransactionSummaryFullProps, "children">;

const BaseTransactionSummary = ({ amount, token, children, showTotal, nft }: BaseTransactionSummaryFullProps): JSX.Element => {
    const translate = useTranslate();
    const { fee } = useSettings();
    const feeValue = convertShannonsToCKB(fee);
    const isNativeToken = !token && !nft;
    return (
        <Container>
            <Col gap="7%" alignItems="center">
                <Col gap="2%" alignItems="center">
                    {nft ? (
                        <Typography variant="title3Regular" textAlign="center" numberOfLines={1}>
                            {nft.nftName}
                        </Typography>
                    ) : (
                        <Balance
                            balance={amount}
                            variant="title3Regular"
                            units={token?.type.tokenName || config.tokenName}
                            options={{ maximumFractionDigits: token?.type.decimals || config.defaultDecimals }}
                        />
                    )}
                    <Fee fee={feeValue} typographyVariant="body2" />
                    {showTotal && isNativeToken && (
                        <Typography variant="body2Light" color="primary">
                            {translate("total")}:{" "}
                            <Balance
                                balance={BalanceOperations.add(amount.toString(), feeValue)}
                                variant="body2Regular"
                                units={config.tokenName}
                                color="primary"
                                options={{ maximumFractionDigits: config.defaultDecimals }}
                            />
                        </Typography>
                    )}
                </Col>
                {children}
            </Col>
        </Container>
    );
};

export default BaseTransactionSummary;
