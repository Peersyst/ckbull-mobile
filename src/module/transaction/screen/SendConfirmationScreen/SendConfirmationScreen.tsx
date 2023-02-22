import { Col, Typography, useModal } from "@peersyst/react-native-components";
import CountdownButton from "module/common/component/input/CountdownButton/CountdownButton";
import { useRecoilValue } from "recoil";
import sendState from "module/transaction/state/SendState";
import useWalletState from "module/wallet/hook/useWalletState";
import SendSummary from "./SendSummary";
import { useTranslate } from "module/common/hook/useTranslate";
import useServiceInstance from "module/wallet/hook/useServiceInstance";
import SendTransactionModal from "module/transaction/component/feedback/SendTransactionModal/SendTransactionModal";
import { useSend } from "module/transaction/hook/useSend";
import SendModal from "module/transaction/component/core/SendModal/SendModal";

const SendConfirmationScreen = (): JSX.Element => {
    const translate = useTranslate();
    const { amount, senderWalletIndex, receiverAddress, message, asset } = useRecoilValue(sendState);
    const {
        state: { wallets },
    } = useWalletState();
    const senderWallet = wallets[senderWalletIndex!];
    const { name: senderName, index } = senderWallet;
    const { serviceInstance } = useServiceInstance(index);
    const sendTransactionWithStatus = useSend();
    const { hideModal } = useModal();

    function closeSendModal() {
        hideModal(SendModal.id);
    }

    return (
        <SendTransactionModal {...sendTransactionWithStatus} onError={closeSendModal} onExited={closeSendModal}>
            {({ showModal, isSuccess, isLoading }) => (
                <Col gap={24} onStartShouldSetResponder={() => true}>
                    <SendSummary
                        showTotal
                        amount={amount!}
                        receiverAddress={receiverAddress!}
                        token={asset.ft}
                        nft={asset.nft}
                        message={message!}
                        senderName={senderName}
                        senderAddress={serviceInstance!.getAddress()}
                    />
                    <Typography variant="body3Light" textAlign="center" light>
                        {translate("send_confirmation_text")}
                    </Typography>
                    <CountdownButton loading={isLoading} disabled={isSuccess} seconds={5} fullWidth onPress={showModal}>
                        {translate("confirm")}
                    </CountdownButton>
                </Col>
            )}
        </SendTransactionModal>
    );
};

export default SendConfirmationScreen;
