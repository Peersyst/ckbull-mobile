import { useSettings } from "module/settings/hook/useSettings";
import { useInvalidateServiceInstanceQueries } from "module/wallet/query/useInvalidateServiceInstanceQueries";
import { convertCKBToShannons } from "module/wallet/utils/convertCKBToShannons";
import { AssetType } from "module/wallet/wallet.types";
import { useRecoilValue } from "recoil";
import useSendCKB from "../query/useSendCKB";
import useSendNFT from "../query/useSendNFTs";
import useSendTokens from "../query/useSendTokens";
import sendState, { SendState } from "../state/SendState";
import Queries from "../../../query/queries";
import { useModal } from "@peersyst/react-native-components";
import SendModal from "../component/core/SendModal/SendModal";
import { numberToBN } from "module/common/utils/BalanceOperations/utils/numberToBN";
import { CallbackStatus } from "../../common/component/feedback/SignModal/SignModal.types";

export interface UseSendTransactionReturn extends CallbackStatus {
    sendTransaction: () => void | Promise<unknown>;
}

export function useSend(): UseSendTransactionReturn {
    const { senderWalletIndex = 0, asset, amount = "0", receiverAddress }: SendState = useRecoilValue(sendState);
    const sendCKBMutationResult = useSendCKB(senderWalletIndex);
    const sendFTMutationResult = useSendTokens(senderWalletIndex);
    const sendNFTsMutationResult = useSendNFT(senderWalletIndex);
    const { hideModal } = useModal();
    const invalidateQueries = useInvalidateServiceInstanceQueries(senderWalletIndex);
    const baseQueries = [Queries.GET_BALANCE, Queries.GET_TRANSACTIONS];
    const { fee } = useSettings();

    function closeSendModal() {
        hideModal(SendModal.id);
    }

    switch (asset.type) {
        case AssetType.FT: {
            const { mutate: sendFT, isError, isLoading, isSuccess } = sendFTMutationResult;
            const sendTransaction = () => {
                sendFT(
                    {
                        amount: numberToBN(amount, asset.ft?.type.decimals || 0),
                        to: receiverAddress!,
                        tokenArgs: asset.ft!.type.args,
                        feeRate: fee,
                    },
                    {
                        onSuccess: async () => {
                            await invalidateQueries([Queries.GET_TOKENS, ...baseQueries]);
                        },
                        onError: closeSendModal,
                    },
                );
            };

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
                sendNFT(
                    {
                        to: receiverAddress!,
                        nft: asset.nft!,
                        feeRate: fee,
                    },
                    {
                        onSuccess: async () => {
                            await invalidateQueries([Queries.GET_NFTS, ...baseQueries]);
                        },
                        onError: closeSendModal,
                    },
                );
            return {
                sendTransaction,
                isError,
                isLoading,
                isSuccess,
            };
        }
        default: {
            const { mutate: sendCKB, isError, isLoading, isSuccess } = sendCKBMutationResult;
            const sendTransaction = () =>
                sendCKB(
                    {
                        amount: convertCKBToShannons(amount),
                        to: receiverAddress!,
                        feeRate: fee,
                    },
                    {
                        onSuccess: async () => {
                            await invalidateQueries(baseQueries);
                        },
                        onError: closeSendModal,
                    },
                );
            return {
                sendTransaction,
                isError,
                isLoading,
                isSuccess,
            };
        }
    }
}
