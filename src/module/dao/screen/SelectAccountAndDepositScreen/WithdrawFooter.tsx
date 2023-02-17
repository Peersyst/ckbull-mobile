import { DAOUnlockableAmount } from "ckb-peersyst-sdk";
import { Col, Typography } from "@peersyst/react-native-components";
import useUncommittedTransaction from "module/transaction/hook/useUncommittedTransaction";
import { useTranslate } from "module/common/hook/useTranslate";
import Button from "module/common/component/input/Button/Button";

export interface WithdrawButtonProps {
    unlockableDeposit: DAOUnlockableAmount;
    hasDeposits: boolean;
}

const WithdrawFooter = ({ unlockableDeposit, hasDeposits }: WithdrawButtonProps): JSX.Element | null => {
    const translate = useTranslate();
    const uncommittedTransaction = useUncommittedTransaction();

    const isDeposit = unlockableDeposit?.type === "deposit";
    const canContinue = unlockableDeposit?.unlockable || isDeposit;
    const buttonDisabled = uncommittedTransaction || !canContinue || !hasDeposits;

    return (
        <Col gap="7%">
            {uncommittedTransaction && (
                <Typography variant="body4Regular" textAlign="center">
                    {translate("pending_transaction_text")}
                </Typography>
            )}
            <Button disabled={buttonDisabled} fullWidth type="submit" variant="primary">
                {translate(isDeposit ? "withdraw" : "unlock")}
            </Button>
        </Col>
    );
};

export default WithdrawFooter;
