import { Col, Typography, useModal } from "@peersyst/react-native-components";
import CountdownButton from "module/common/component/input/CountdownButton/CountdownButton";
import { useRecoilValue } from "recoil";
import sendState from "module/transaction/state/SendState";
import useSendTransaction from "../../query/useSendTransaction";
import SendModal from "module/transaction/component/core/SendModal/SendModal";
import LoadingModal from "module/common/component/feedback/LoadingModal/LoadingModal";
import useWalletState from "module/wallet/hook/useWalletState";
import SendSummary from "./SendSummary";
import { convertCKBToShannons } from "module/wallet/utils/convertCKBToShannons";
import ConfirmPinModal from "module/settings/components/core/ConfirmPinModal/ConfirmPinModal";
import { useState } from "react";
import { useTranslate } from "module/common/hook/useTranslate";
import useServiceInstance from "module/wallet/hook/useServiceInstance";
import { useSettings } from "module/settings/hook/useSettings";

const SendConfirmationScreen = (): JSX.Element => {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const translate = useTranslate();
    const [loading, setLoading] = useState(false);

    const { amount, senderWalletIndex, receiverAddress, message, asset } = useRecoilValue(sendState);
    const { fee } = useSettings();
    const {
        state: { wallets },
    } = useWalletState();
    const senderWallet = wallets[senderWalletIndex!];
    const { name: senderName, index } = senderWallet;
    const { serviceInstance } = useServiceInstance(index);
    const { mutate: sendTransaction, isLoading, isSuccess, isError } = useSendTransaction(senderWalletIndex!);
    const { hideModal } = useModal();

    const handleConfirmation = async () => {
        sendTransaction(
            {
                amount: convertCKBToShannons(amount!),
                message: message!,
                to: receiverAddress!,
                feeRate: fee,
            },
            {
                onSettled: () => setLoading(false),
            },
        );
    };

    return (
        <>
            <Col gap={24} onStartShouldSetResponder={() => true}>
                <SendSummary
                    showTotal
                    amount={amount!}
                    receiverAddress={receiverAddress!}
                    token={asset.ft}
                    nft={asset.nft}
                    message={message!}
                    senderName={senderName}
                    senderAddress={serviceInstance?.getAddress() || ""}
                />
                <Typography variant="body3Light" textAlign="center" light>
                    {translate("send_confirmation_text")}
                </Typography>
                <CountdownButton loading={loading} disabled={isSuccess} seconds={5} fullWidth onPress={() => setShowConfirmation(true)}>
                    {translate("confirm")}
                </CountdownButton>
            </Col>
            <ConfirmPinModal
                open={showConfirmation}
                onClose={() => setShowConfirmation(false)}
                onPinConfirmed={() => setLoading(true)}
                onConfirmedExited={handleConfirmation}
            />
            <LoadingModal
                loading={isLoading}
                success={isSuccess}
                error={isError}
                onExited={() => hideModal(SendModal.id)}
                successMessage={translate("transaction_completed")}
            />
        </>
    );
};

export default SendConfirmationScreen;
