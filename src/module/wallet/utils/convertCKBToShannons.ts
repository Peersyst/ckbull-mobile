import { config } from "config";
import { numberToBN } from "module/common/utils/BalanceOperations/utils/numberToBN";

export function convertCKBToShannons(num: bigint | string | number) {
    return numberToBN(num, config.defaultDecimals);
}
