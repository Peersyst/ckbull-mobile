import { useQuery } from "react-query";
import { ckbSdkInstance } from "module/common/service/CkbSdkService";

const useGetTransactions = () => useQuery(["transactions"], (): any => ckbSdkInstance.getTransactions());

export default useGetTransactions;
