import { Col, Typography, useModal } from "@peersyst/react-native-components";
import CountdownButton from "module/common/component/input/CountdownButton/CountdownButton";
import { useRecoilValue } from "recoil";
import sendState from "module/transaction/state/SendState";
import useSendTransaction from "../../query/useSendTransaction";
import SendModal from "module/transaction/component/core/SendModal/SendModal";
import LoadingModal from "module/common/component/feedback/LoadingModal/LoadingModal";
import useWalletState from "module/wallet/hook/useWalletState";
import SendSummary from "./SendSummary";
import settingsState from "module/settings/state/SettingsState";
import { convertCKBToShannons } from "module/wallet/utils/convertCKBToShannons";
import ConfirmPinModal from "module/settings/components/core/ConfirmPinModal/ConfirmPinModal";
import { useState } from "react";
import { useTranslate } from "module/common/hook/useTranslate";
import useServiceInstance from "module/wallet/hook/useServiceInstance";
import { AssetType } from "module/wallet/wallet.types";

const SendConfirmationScreen = (): JSX.Element => {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const translate = useTranslate();
    const [loading, setLoading] = useState(false);

    const { amount, senderWalletIndex, receiverAddress, message, token, asset } = useRecoilValue(sendState);
    const { fee } = useRecoilValue(settingsState);
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
                    showTotal={asset.type === AssetType.NATIVE_TOKEN}
                    amount={amount!}
                    receiverAddress={receiverAddress!}
                    token={token}
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
