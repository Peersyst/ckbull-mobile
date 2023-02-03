import { SendState } from "module/transaction/state/SendState";
import Balance from "module/wallet/component/display/Balance/Balance";
import { BalanceProps } from "module/wallet/component/display/Balance/Balance.types";
import { ReactElement } from "react";
import { Col, Row, Typography } from "@peersyst/react-native-components";
import { useTranslate } from "module/common/hook/useTranslate";
import Container from "module/common/component/display/Container/Container";
import { config } from "config";

export interface BaseSendSummaryFullProps extends Required<Pick<SendState, "fee" | "token">> {
    amount: BalanceProps["balance"];
    children: ReactElement;
}

export type BaseSendSummaryProps = Omit<BaseSendSummaryFullProps, "children">;

const BaseSendSummary = ({ amount, fee, token, children }: BaseSendSummaryFullProps): JSX.Element => {
    const translate = useTranslate();
    return (
        <Container>
            <Col gap={16} alignItems="center">
                <Col gap={2} alignItems="center">
                    <Balance
                        balance={amount}
                        variant="title3Strong"
                        units={token}
                        options={{ maximumFractionDigits: config.maxNumberOfDecimals }}
                    />
                    <Row>
                        <Typography variant="body2Regular" light>
                            {translate("transaction_fee_label")}:{" "}
                        </Typography>
                        <Balance
                            balance={fee}
                            variant="body2Strong"
                            units={token}
                            light
                            options={{ maximumFractionDigits: config.maxNumberOfDecimals }}
                        />
                    </Row>
                    <Row>
                        <Typography variant="body2Regular" color="primary">
                            {translate("total")}:{" "}
                        </Typography>
                        <Balance
                            balance={Number(amount) + Number(fee)}
                            variant="body2Strong"
                            units={token}
                            color="primary"
                            options={{ maximumFractionDigits: config.maxNumberOfDecimals }}
                        />
                    </Row>
                </Col>
                {children}
            </Col>
        </Container>
    );
};

export default BaseSendSummary;
