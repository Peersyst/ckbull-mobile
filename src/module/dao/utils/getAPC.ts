import { convertShannonsToCKB } from "module/wallet/utils/convertShannonsToCKB";

const NUMBER_OF_APC_DECIMALS = 3;

export interface GetAPCParams {
    daoDeposit: string | number | bigint; //In shannons
    daoCompensation: string | number | bigint; //In shannons
}

export function getAPC(params?: GetAPCParams): number {
    if (!params) return 0;

    const { daoCompensation, daoDeposit } = params;
    const depositInCKB = convertShannonsToCKB(daoDeposit.toString());
    const compensationInCKB = convertShannonsToCKB(daoCompensation.toString());

    if (depositInCKB === "0") return 0;
    else {
        //As is an estimation we operate with numbers and not with bigints
        return Number(((Number(compensationInCKB) / Number(depositInCKB)) * 100).toFixed(NUMBER_OF_APC_DECIMALS));
    }
}
