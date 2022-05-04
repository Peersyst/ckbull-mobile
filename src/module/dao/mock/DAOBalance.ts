import { DAOBalance as DAOBalanceType } from "module/common/service/mock/CkbServiceMock.types";

export const DAOBalance: DAOBalanceType = {
    daoDeposit: BigInt(Math.floor((new Date().getSeconds() / 60) * 876)),
    daoCompensation: BigInt(100),
};
