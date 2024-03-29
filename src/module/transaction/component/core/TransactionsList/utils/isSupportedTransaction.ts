import { TransactionType } from "ckb-peersyst-sdk";
import { MAIN_TRANSACTION_TYPES } from "module/common/service/CkbSdkService";

export default function (type: TransactionType): boolean {
    return MAIN_TRANSACTION_TYPES.includes(type);
}
