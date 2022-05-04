import { Transaction, TransactionType } from "module/transaction/types";
import { BalanceProps } from "module/wallet/component/display/Balance/Balance.types";

export default function (type: Transaction["type"]): BalanceProps["action"] {
    switch (type) {
        case TransactionType.SEND_CKB:
        case TransactionType.SEND_NFT:
        case TransactionType.SEND_TOKEN:
        case TransactionType.DEPOSIT_DAO:
            return "subtract";
        case TransactionType.RECEIVE_CKB:
        case TransactionType.RECEIVE_NFT:
        case TransactionType.RECEIVE_TOKEN:
        case TransactionType.UNLOCK_DAO:
        case TransactionType.SMART_CONTRACT:
            return "add";
        case TransactionType.WITHDRAW_DAO:
            return "display";
    }
}
