import { config } from "config";
import { BNToNumber } from "module/common/utils/BalanceOperations/utils/BNtoNumber";

export function convertShannonsToCKB(num: string | number | bigint) {
    return BNToNumber(num.toString(), config.defaultDecimals);
}
