import { translate } from "locale";
import { SendState } from "module/transaction/state/SendState";
import Balance from "module/wallet/component/display/Balance/Balance";
import { BalanceProps } from "module/wallet/component/display/Balance/Balance.types";
import { convertMiniToCKB } from "module/wallet/utils/convertMiniToCKB";
import { ReactElement } from "react";
import { Paper, Col, Row, Typography } from "react-native-components";

export interface BaseSendSummaryFullProps extends Required<Pick<SendState, "fee">> {
    amount: BalanceProps["balance"];
    children: ReactElement;
}

export type BaseSendSummaryProps = Omit<BaseSendSummaryFullProps, "children">;

const BaseSendSummary = ({ amount, fee, children }: BaseSendSummaryFullProps): JSX.Element => {
    const finalAmount = convertMiniToCKB(amount);
    const finalFee = convertMiniToCKB(fee);

    return (
        <Paper style={{ padding: "7%" }}>
            <Col gap="3%" alignItems="center">
                <Col gap={5} alignItems="center">
                    <Balance balance={finalAmount} units="CKB" variant="h1" boldUnits />
                    <Row>
                        <Typography variant="body1">{translate("transaction_fee_label")}: </Typography>
                        <Balance balance={finalFee} units="CKB" variant="body1" fontWeight="bold" boldUnits decimals={3} />
                    </Row>
                </Col>
                {children}
            </Col>
        </Paper>
    );
};

export default BaseSendSummary;
