import { DAOBalance } from "module/common/service/mock/CkbServiceMock.types";

const NUMBER_OF_APC_DECIMALS = 3;

export function getAPC(params?: DAOBalance): number {
    if (params === undefined || params.daoDeposit === BigInt(0)) return 0;
    else {
        const { daoDeposit, daoCompensation } = params;
        const result = (Number(daoCompensation) / Number(daoDeposit)) * 100;
        return Number(result.toFixed(NUMBER_OF_APC_DECIMALS));
    }
}
