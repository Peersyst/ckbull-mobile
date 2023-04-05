import { Col, SwipeButton, Typography, useModal } from "@peersyst/react-native-components";
import useWalletState from "module/wallet/hook/useWalletState";
import WithdrawModal, { WithdrawSummary as WithdrawSummaryType } from "module/dao/component/core/WithdrawModal/WithdrawModal";
import WithdrawSummary from "./WithdrawSummary";
import useGetDAOUnlockableAmounts from "module/dao/query/useGetDAOUnlockableAmounts";
import useWithdrawOrUnlock from "module/dao/query/useWithdrawOrUnlock";
import { getAPC } from "module/dao/utils/getAPC";
import { useMemo } from "react";
import { serviceInstancesMap } from "module/wallet/state/WalletState";
import { convertShannonsToCKB } from "module/wallet/utils/convertShannonsToCKB";
import useSelectedNetwork from "module/settings/hook/useSelectedNetwork";
import { useTranslate } from "module/common/hook/useTranslate";
import CallbackModal from "module/common/component/feedback/CallbackModal/CallbackModal";

interface WithdrawConfirmationScreenProps {
    withdrawInfo: WithdrawSummaryType;
}

const WithdrawConfirmationScreen = ({ withdrawInfo: { receiverIndex, depositIndex } }: WithdrawConfirmationScreenProps): JSX.Element => {
    //Hooks
    const translate = useTranslate();
    const network = useSelectedNetwork();
    const {
        state: { wallets },
    } = useWalletState();
    const { data: unlockableDeposits = [] } = useGetDAOUnlockableAmounts();
    const { mutate: withdrawFromDAO, isLoading, isSuccess, isError } = useWithdrawOrUnlock(receiverIndex);
    const { hideModal } = useModal();

    //Variables
    const { name: receiverName } = wallets[receiverIndex]; //Receiver info
    const serviceInstance = useMemo(() => serviceInstancesMap.get(receiverIndex)?.[network], [receiverIndex]);
    const { compensation = BigInt(0), amount = BigInt(0) } = unlockableDeposits[depositIndex] || {}; //Deposit info

    //Functions
    const handleConfirmation = async () => {
        if (unlockableDeposits.length > depositIndex) {
            withdrawFromDAO({ unlockableAmount: unlockableDeposits[depositIndex] });
        }
    };

    function closeModal() {
        hideModal(WithdrawModal.id);
    }

    return (
        <CallbackModal
            successMessage={translate("withdraw_completed")}
            onError={closeModal}
            onExited={closeModal}
            callback={handleConfirmation}
            isError={isError}
            isLoading={isLoading}
            isSuccess={isSuccess}
        >
            {({ showModal, isSuccess, isLoading }) => (
                <Col gap={"7%"}>
                    <WithdrawSummary
                        compensation={convertShannonsToCKB(compensation)}
                        receiverName={receiverName}
                        receiverAddress={serviceInstance?.getAddress() || ""}
                        depositAPC={getAPC({ daoCompensation: compensation, daoDeposit: amount })}
                        amount={convertShannonsToCKB(amount)}
                    />
                    <Typography variant="caption" textAlign="center">
                        {translate("send_confirmation_text")}
                    </Typography>
                    <SwipeButton loading={isLoading} disabled={isSuccess} onSwipe={showModal}>
                        {translate("confirm")}
                    </SwipeButton>
                </Col>
            )}
        </CallbackModal>
    );
};

export default WithdrawConfirmationScreen;
