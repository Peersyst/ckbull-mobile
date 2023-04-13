import { Col, SwipeButton, Typography, useModal } from "@peersyst/react-native-components";
import { useRecoilValue } from "recoil";
import sendState from "module/transaction/state/SendState";
import useWalletState from "module/wallet/hook/useWalletState";
import DepositModal from "module/dao/component/core/DepositModal/DepositModal";
import DepositSummary from "./DepositSummary";
import useDepositInDAO from "module/dao/query/useDepositInDAO";
import { convertCKBToShannons } from "module/wallet/utils/convertCKBToShannons";
import { useTranslate } from "module/common/hook/useTranslate";
import useServiceInstance from "module/wallet/hook/useServiceInstance";
import { useSettings } from "module/settings/hook/useSettings";
import CallbackModal from "module/common/component/feedback/SignModal/SignModal";

const DepositConfirmationScreen = (): JSX.Element => {
    const translate = useTranslate();
    const { amount, senderWalletIndex } = useRecoilValue(sendState);
    const {
        state: { wallets },
    } = useWalletState();
    const senderWallet = wallets[senderWalletIndex!];

    const { name: senderName } = senderWallet;
    const { serviceInstance } = useServiceInstance(senderWalletIndex);
    const { fee: feeInShannons } = useSettings();

    const { mutate: depositInDAO, isLoading, isSuccess, isError } = useDepositInDAO(senderWalletIndex!);
    const { hideModal } = useModal();

    const handleConfirmation = async () => {
        depositInDAO({ amount: BigInt(convertCKBToShannons(amount!)), feeRate: feeInShannons });
    };

    function closeModal() {
        hideModal(DepositModal.id);
    }

    return (
        <CallbackModal
            successMessage={translate("deposit_completed")}
            callback={handleConfirmation}
            onExited={closeModal}
            onError={closeModal}
            isLoading={isLoading}
            isSuccess={isSuccess}
            isError={isError}
        >
            {({ showModal, isSuccess, isLoading }) => (
                <Col gap={"6%"}>
                    <DepositSummary
                        showTotal
                        amount={amount!}
                        senderName={senderName}
                        senderAddress={serviceInstance?.getAddress() || ""}
                    />
                    <Typography variant="body4Light" textAlign="center">
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

export default DepositConfirmationScreen;
