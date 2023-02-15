import { SendState } from "module/transaction/state/SendState";
import Balance from "module/wallet/component/display/Balance/Balance";
import { BalanceProps } from "module/wallet/component/display/Balance/Balance.types";
import { ReactElement } from "react";
import { Col, Typography } from "@peersyst/react-native-components";
import { useTranslate } from "module/common/hook/useTranslate";
import Container from "module/common/component/display/Container/Container";
import { config } from "config";
import Fee from "../Fee/Fee";
import settingsState from "module/settings/state/SettingsState";
import { useRecoilValue } from "recoil";
import { BalanceOperations } from "module/common/utils/BalanceOperations/BalanceOperations";
import { convertShannonsToCKB } from "module/wallet/utils/convertShannonsToCKB";

export interface BaseSendSummaryFullProps extends Required<Pick<SendState, "token">> {
    amount: BalanceProps["balance"];
    children: ReactElement;
    showTotal?: boolean;
}

export type BaseSendSummaryProps = Omit<BaseSendSummaryFullProps, "children">;

const BaseSendSummary = ({ amount, token, children, showTotal }: BaseSendSummaryFullProps): JSX.Element => {
    const translate = useTranslate();
    const { fee } = useRecoilValue(settingsState);
    const feeValue = convertShannonsToCKB(fee);
    return (
        <Container>
            <Col gap="8%" alignItems="center">
                <Col gap="2%" alignItems="center">
                    <Balance
                        balance={amount}
                        variant="title3Regular"
                        units={token}
                        options={{ maximumFractionDigits: config.maxNumberOfDecimals }}
                    />
                    <Fee fee={feeValue} typographyVariant="body2" />
                    {showTotal && (
                        <Typography variant="body2Light" color="primary">
                            {translate("total")}:{" "}
                            <Balance
                                balance={BalanceOperations.add(amount.toString(), feeValue)}
                                variant="body2Regular"
                                units={config.tokenName}
                                color="primary"
                                options={{ maximumFractionDigits: config.maxNumberOfDecimals }}
                            />
                        </Typography>
                    )}
                </Col>
                {children}
            </Col>
        </Container>
    );
};

export default BaseSendSummary;
