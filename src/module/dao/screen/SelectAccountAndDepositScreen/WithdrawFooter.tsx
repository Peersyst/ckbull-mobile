import { DAOUnlockableAmount } from "ckb-peersyst-sdk";
import { Col, Typography } from "@peersyst/react-native-components";
import useUncommittedTransaction from "module/transaction/hook/useUncommittedTransaction";
import { useTranslate } from "module/common/hook/useTranslate";
import useFormatTimeDAORemainingCycle from "module/transaction/component/hook/UseFormatTimeDAORemainingCycle/useFormatTimeDAORemaningCycle";
import Button from "module/common/component/input/Button/Button";

export interface WithdrawButtonProps {
    unlockableDeposits: DAOUnlockableAmount[];
    selectedDeposit: number;
}

const WithdrawFooter = ({ unlockableDeposits, selectedDeposit }: WithdrawButtonProps): JSX.Element | null => {
    const translate = useTranslate();
    const uncommittedTransaction = useUncommittedTransaction();
    const formatTimeDAORemainingCycle = useFormatTimeDAORemainingCycle();

    const unlockableDeposit = unlockableDeposits[selectedDeposit];
    const canContinue = unlockableDeposit?.unlockable || unlockableDeposit?.type === "deposit";
    const buttonDisabled = uncommittedTransaction || !canContinue || unlockableDeposits.length === 0;
    const isDeposit = unlockableDeposit?.type === "deposit";

    return (
        <Col gap="7%">
            {canContinue && (
                <Typography variant="body3Regular" textAlign="center">
                    {translate("remaining_time") + ": " + formatTimeDAORemainingCycle(unlockableDeposit?.remainingCycleMinutes || 0)}
                </Typography>
            )}
            {uncommittedTransaction && (
                <Typography variant="body3Regular" textAlign="center">
                    {translate("pending_transaction_text")}
                </Typography>
            )}
            <Button disabled={buttonDisabled} fullWidth type="submit">
                {translate(isDeposit ? "withdraw" : "unlock")}
            </Button>
        </Col>
    );
};

export default WithdrawFooter;
