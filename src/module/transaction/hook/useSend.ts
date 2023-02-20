import { useSettings } from "module/settings/hook/useSettings";
import { convertCKBToShannons } from "module/wallet/utils/convertCKBToShannons";
import { AssetType } from "module/wallet/wallet.types";
import { useRecoilValue } from "recoil";
import { TransactionStatus } from "../component/feedback/SendTransactionModal/SendTransactionModal.types";
import useSendCKB from "../query/useSendCKB";
import useSendNFT from "../query/useSendNFTs";
import useSendTokens from "../query/useSendTokens";
import sendState, { SendState } from "../state/SendState";

export interface UseSendTransactionReturn extends TransactionStatus {
    sendTransaction: () => void | Promise<unknown>;
}

export function useSend(): UseSendTransactionReturn {
    const { senderWalletIndex = 0, asset, amount = "0", receiverAddress }: SendState = useRecoilValue(sendState);
    const sendCKBMutationResult = useSendCKB(senderWalletIndex);
    const sendFTMutationResult = useSendTokens(senderWalletIndex);
    const sendNFTsMutationResult = useSendNFT(senderWalletIndex);
    const { fee } = useSettings();

    switch (asset.type) {
        case AssetType.FT: {
            const { mutate: sendFT, isError, isLoading, isSuccess } = sendFTMutationResult;
            const sendTransaction = () =>
                sendFT({
                    amount: convertCKBToShannons(amount),
                    to: receiverAddress!,
                    token: asset.ft?.type.codeHash!,
                    feeRate: fee,
                });
            return {
                sendTransaction,
                isError,
                isLoading,
                isSuccess,
            };
        }
        case AssetType.NFT: {
            const { mutate: sendNFT, isError, isLoading, isSuccess } = sendNFTsMutationResult;
            const sendTransaction = () =>
                sendNFT({
                    to: receiverAddress!,
                    nft: asset.nft!,
                    feeRate: fee,
                });
            return {
                sendTransaction,
                isError,
                isLoading,
                isSuccess,
            };
        }
        default: {
            const { mutate: sendMoney, isError, isLoading, isSuccess } = sendCKBMutationResult;
            const sendTransaction = () =>
                sendMoney({
                    amount: convertCKBToShannons(amount),
                    to: receiverAddress!,
                    feeRate: fee,
                    message: undefined,
                });
            return {
                sendTransaction,
                isError,
                isLoading,
                isSuccess,
            };
        }
    }
}
