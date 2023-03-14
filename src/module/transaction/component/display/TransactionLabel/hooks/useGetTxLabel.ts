import { TransactionType } from "ckb-peersyst-sdk";
import { useTranslate } from "module/common/hook/useTranslate";
import { FullTransaction } from "module/common/service/CkbSdkService.types";

export const useGetTxLabel = (): ((tx: FullTransaction) => string) => {
    const translate = useTranslate();
    function getTxLabel({ type, token }: FullTransaction) {
        switch (type) {
            case TransactionType.SEND_NATIVE_TOKEN: {
                return translate("CKB_sent");
            }
            case TransactionType.RECEIVE_NATIVE_TOKEN: {
                return translate("CKB_received");
            }
            case TransactionType.SEND_TOKEN: {
                const tokenName = token?.type ? token.type.tokenName : "token";
                return translate("token_sent", { token: tokenName });
            }
            case TransactionType.RECEIVE_TOKEN: {
                const tokenName = token?.type ? token.type.tokenName : "token";
                return translate("token_received", { token: tokenName });
            }
            case TransactionType.SEND_NFT: {
                return translate("sent_nft");
            }
            case TransactionType.RECEIVE_NFT: {
                return translate("received_nft");
            }
            case TransactionType.DEPOSIT_DAO: {
                return translate("DAO_deposit");
            }
            case TransactionType.WITHDRAW_DAO: {
                return translate("DAO_withdrawal");
            }
            case TransactionType.UNLOCK_DAO: {
                return translate("unlock_DAO");
            }
            case TransactionType.SMART_CONTRACT_SEND: {
                return translate("smart_contract_sent");
            }
            case TransactionType.SMART_CONTRACT_RECEIVE: {
                return translate("smart_contract_received");
            }
            default: {
                return "Unkown transaction"; //assert (maybe in the future there are new actions)
            }
        }
    }

    return getTxLabel;
};
