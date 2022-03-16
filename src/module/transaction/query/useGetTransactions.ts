import { useQuery } from "react-query";
import { ckbSdkInstance } from "module/common/service/CkbSdkService";

const useGetTransactions = (account?: number) =>
    useQuery(["transactions", account], (): any => ckbSdkInstance.getTransactionsFromAccount(account));

export default useGetTransactions;
