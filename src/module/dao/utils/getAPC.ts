import { BalanceOperations } from "module/common/utils/BalanceOperations/BalanceOperations";
import { convertShannonsToCKB } from "module/wallet/utils/convertShannonsToCKB";

const NUMBER_OF_APC_DECIMALS = 3;

export interface GetAPCParams {
    daoDeposit: string | number | bigint; //In shannons
    daoCompensation: string | number | bigint; //In shannons
}

export function getAPC(params?: GetAPCParams): string {
    if (!params) return "0";

    const { daoCompensation, daoDeposit } = params;
    const depositInCKB = convertShannonsToCKB(daoDeposit.toString());
    const compensationInCKB = convertShannonsToCKB(daoCompensation.toString());

    if (depositInCKB === "0") return "0";
    else {
        const result = BalanceOperations.div(depositInCKB, compensationInCKB);
        const tempResult = BalanceOperations.mul(result, "100");
        const [integerPart, decimalPart] = tempResult.split(".");
        if (decimalPart) {
            const finalDecimalPart = decimalPart.slice(0, NUMBER_OF_APC_DECIMALS);
            return `${integerPart}.${finalDecimalPart}`;
        } else {
            return integerPart;
        }
    }
}
