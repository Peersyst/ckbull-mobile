import { TransactionType } from "ckb-peersyst-sdk";
import { useTranslate } from "module/common/hook/useTranslate";
import { FullTransaction } from "module/common/service/CkbSdkService.types";

export const useGetTxLabel = (): ((tx: FullTransaction) => string) => {
    function getTxLabel({ type, token }: FullTransaction) {
        const translate = useTranslate();
        switch (type) {
            case TransactionType.SEND_NATIVE_TOKEN: {
                return translate("CKB_sent");
            }
            case TransactionType.RECEIVE_NATIVE_TOKEN: {
                return translate("CKB_received");
            }
            case TransactionType.SEND_TOKEN: {
                return translate("token_sent", { token: token || "token" });
            }
            case TransactionType.RECEIVE_TOKEN: {
                return translate("token_received", { token: token || "token" });
            }
            case TransactionType.SEND_NFT: {
                return translate("sent_nft");
            }
            case TransactionType.RECEIVE_NFT: {
                return translate("received_nft");
            }
            default: {
                return "Unkown transaction"; //assert (maybe in the future there are new actions)
            }
        }
    }

    return getTxLabel;
};
