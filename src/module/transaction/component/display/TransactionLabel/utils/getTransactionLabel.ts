import { TransactionType } from "ckb-peersyst-sdk";
import { translate } from "locale";
import { FullTransaction } from "module/common/service/CkbSdkService.types";

export default function (type: FullTransaction["type"]): string {
    switch (type) {
        case TransactionType.SEND_CKB:
        case TransactionType.SEND_TOKEN:
            return translate("sent");
        case TransactionType.SEND_NFT:
            return translate("sent_nft");
        case TransactionType.DEPOSIT_DAO:
            return translate("DAO_deposit");
        case TransactionType.RECEIVE_CKB:
        case TransactionType.RECEIVE_TOKEN:
            return translate("received");
        case TransactionType.RECEIVE_NFT:
            return translate("received_nft");
        case TransactionType.WITHDRAW_DAO:
            return translate("unlock_DAO");
        case TransactionType.SMART_CONTRACT_SEND:
        case TransactionType.SMART_CONTRACT_RECEIVE:
            return translate("smart_contract");
        case TransactionType.UNLOCK_DAO:
            return translate("DAO_withdrawal");
    }
}
